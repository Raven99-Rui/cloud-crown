const path = require('path');
const { chromium } = require('C:/Users/LENOVO/AppData/Local/OpenAI/Codex/runtimes/cua_node/1fb7137c46617d50/bin/node_modules/playwright-core');

(async () => {
  const zip = path.resolve('artifacts/le-carrousel-dor.zip');
  const browser = await chromium.launch({
    executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
    headless: true,
    args: [
      '--no-sandbox', '--disable-dev-shm-usage', '--disable-crash-reporter',
      '--no-first-run', '--no-default-browser-check', '--disable-gpu',
      '--disable-extensions', '--disable-background-timer-throttling',
      '--js-flags=--max-old-space-size=512',
    ],
  });
  const page = await browser.newPage({ viewport: { width: 900, height: 700 }, locale: 'en-US' });
  const seen = new Set();
  const capture = (url) => {
    if (!url || seen.has(url)) return;
    if (/tmp\.now|vercel\.app/.test(url)) {
      seen.add(url);
      console.log('SEEN_URL', url);
    }
  };
  page.on('crash', () => console.log('PAGE_CRASH'));
  page.on('close', () => console.log('PAGE_CLOSE'));
  page.on('pageerror', (e) => console.log('PAGEERROR', e.message));
  page.on('console', (m) => {
    const t = m.text();
    if (/error|fail|deploy|upload|exceed|limit/i.test(t)) console.log('[console]', m.type(), t.slice(0, 600));
  });
  page.on('request', (r) => capture(r.url()));
  page.on('response', async (r) => {
    const u = r.url();
    capture(u);
    if (/api|drop|deploy/i.test(u) && /json|text/.test(r.headers()['content-type'] || '')) {
      try {
        const body = await r.text();
        if (/tmp\.now|vercel\.app|deployment|dropId/i.test(body)) {
          const urls = body.match(/https?:\/\/[^"\s<>\\]*(?:tmp\.now|vercel\.app)[^"\s<>\\]*/g) || [];
          if (urls.length) urls.forEach((x) => console.log('BODY_URL', x));
          console.log('API', r.status(), u.slice(0, 220), body.slice(0, 400).replace(/\n/g, ' '));
        }
      } catch {}
    }
  });

  await page.goto('https://vercel.com/drop', { waitUntil: 'domcontentloaded', timeout: 60000 });
  await page.route('**/*', async (route) => {
    const url = route.request().url();
    const type = route.request().resourceType();
    if (['image', 'media', 'font'].includes(type)) return route.abort();
    return route.continue();
  }).catch(() => {});
  await page.waitForTimeout(1000);
  await page.locator('input[type=file]').setInputFiles(zip);
  console.log('FILE_SET');

  let found = null;
  for (let i = 0; i < 35; i += 1) {
    await page.waitForTimeout(2000);
    if (page.isClosed()) { console.log('PAGE_GONE'); break; }
    try {
      const info = await page.evaluate(() => {
        const text = document.body.innerText;
        const links = [...document.querySelectorAll('a')]
          .map((a) => ({ text: (a.innerText || '').trim(), href: a.href }))
          .filter((x) => x.href && ((/vercel\.app|tmp\.now/.test(x.href)) || /drop\/success/.test(x.href)));
        const urlMatch = text.match(/https?:\/\/[^\s]*(?:vercel\.app|tmp\.now)[^\s]*/);
        return { text: text.slice(0, 1800), links, urlMatch: urlMatch && urlMatch[0], url: location.href };
      });
      if (i % 2 === 0) console.log('POLL', i, JSON.stringify({ url: info.url, urlMatch: info.urlMatch, links: info.links, text: info.text.replace(/\n+/g, ' | ').slice(0, 600) }));
      if (info.urlMatch) { found = info.urlMatch; break; }
      const direct = info.links.find((l) => /tmp\.now|vercel\.app/.test(l.href));
      if (direct) { found = direct.href; break; }
      const success = info.links.find((l) => /drop\/success/.test(l.href));
      if (success && !found) console.log('SUCCESS_LINK', success.href);
      if (/Your site is live/i.test(info.text)) {
        // The URL is hydrated shortly after this state.
        for (let j = 0; j < 6; j += 1) {
          await page.waitForTimeout(1500);
          if (page.isClosed()) { console.log('PAGE_GONE_IN_SUCCESS'); break; }
          const late = await page.evaluate(() => ({
            text: document.body.innerText,
            links: [...document.querySelectorAll('a')].map((a) => a.href).filter((h) => /tmp\.now|vercel\.app/.test(h)),
          }));
          const m = late.text.match(/https?:\/\/[^\s]*(?:vercel\.app|tmp\.now)[^\s]*/);
          if (m) { found = m[0]; break; }
          if (late.links.length) { found = late.links[0]; break; }
        }
        if (found) break;
      }
    } catch (e) {
      console.log('POLL_ERR', i, e.message.slice(0, 200));
    }
    if (found) break;
  }
  if (found) console.log('FOUND_URL', found);
  else console.log('NOT_FOUND');
  try { console.log('FINAL_URL', page.url()); } catch {}
  try {
    const text = await page.locator('body').innerText();
    console.log('FINAL_TEXT', text.slice(0, 2500).replace(/\n+/g, ' | '));
  } catch {}
  await browser.close();
})().catch((error) => { console.error('FATAL', error.stack || error); process.exit(1); });
