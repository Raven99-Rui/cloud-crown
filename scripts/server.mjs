import http from 'node:http';
import { createReadStream, readFileSync, promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { gzipSync } from 'node:zlib';

const DEFAULT_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const ROOT = process.env.PARK_ROOT ? path.resolve(process.env.PARK_ROOT) : DEFAULT_ROOT;
const PORT = Number(process.env.PORT || 4173);
const HOST = process.env.HOST || '127.0.0.1';

const mime = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2',
  '.txt': 'text/plain; charset=utf-8',
  '.md': 'text/plain; charset=utf-8',
};

function send(res, status, body, type = 'text/plain; charset=utf-8') {
  res.writeHead(status, {
    'Content-Type': type,
    'Cache-Control': 'no-store',
    'X-Content-Type-Options': 'nosniff',
  });
  res.end(body);
}

const server = http.createServer(async (req, res) => {
  try {
    const url = new URL(req.url || '/', `http://${req.headers.host || `${HOST}:${PORT}`}`);
    let pathname = decodeURIComponent(url.pathname);
    if (pathname === '/') pathname = '/index.html';
    if (!pathname.startsWith('/')) throw new Error('bad path');
    const filePath = path.resolve(ROOT, `.${pathname}`);
    if (filePath !== ROOT && !filePath.startsWith(ROOT + path.sep)) {
      send(res, 403, 'Forbidden');
      return;
    }
    let stat;
    try {
      stat = await fs.stat(filePath);
    } catch {
      send(res, 404, 'Not found');
      return;
    }
    if (stat.isDirectory()) {
      const index = path.join(filePath, 'index.html');
      try {
        stat = await fs.stat(index);
        return streamFile(req, res, index, stat);
      } catch {
        send(res, 404, 'Not found');
        return;
      }
    }
    return streamFile(req, res, filePath, stat);
  } catch (err) {
    send(res, 500, `Server error: ${err.message}`);
  }
});

function streamFile(req, res, filePath, stat) {
  const ext = path.extname(filePath).toLowerCase();
  const compressible = ['.html', '.js', '.mjs', '.css', '.json', '.svg', '.txt', '.md'].includes(ext);
  const acceptsGzip = /\bgzip\b/.test(String(req.headers['accept-encoding'] || ''));
  if (compressible && acceptsGzip && stat.size > 1024) {
    try {
      const body = gzipSync(readFileSync(filePath));
      res.writeHead(200, {
        'Content-Type': mime[ext] || 'application/octet-stream',
        'Content-Length': body.length,
        'Content-Encoding': 'gzip',
        'Vary': 'Accept-Encoding',
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'X-Content-Type-Options': 'nosniff',
      });
      res.end(body);
      return;
    } catch {
      // Fall through to the uncompressed stream.
    }
  }
  res.writeHead(200, {
    'Content-Type': mime[ext] || 'application/octet-stream',
    'Content-Length': stat.size,
    'Cache-Control': 'no-cache, no-store, must-revalidate',
    'X-Content-Type-Options': 'nosniff',
  });
  createReadStream(filePath).pipe(res);
}

server.listen(PORT, HOST, () => {
  console.log(`ASTRALIA park running at http://${HOST}:${PORT}`);
});
