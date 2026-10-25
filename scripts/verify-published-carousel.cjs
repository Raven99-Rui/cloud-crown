const { chromium } = require('C:/Users/LENOVO/AppData/Local/OpenAI/Codex/runtimes/cua_node/1fb7137c46617d50/bin/node_modules/playwright-core');

(async () => {
  const url = process.argv[2] || 'https://fast-gust-e4b1z9c.tmp.now/';
  const browser = await chromium.launch({
    executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
    headless: true,
    args: ['--no-sandbox', '--disable-dev-shm-usage', '--disable-crash-reporter', '--no-first-run', '--no-default-browser-check'],
  });
  const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
  const errors = [];
  page.on('pageerror', (e) => errors.push('PAGEERROR ' + e.message));
  page.on('console', (m) => { if (m.type() === 'error') errors.push('CONSOLE ' + m.text().slice(0, 600)); });
  page.on('requestfailed', (r) => errors.push('REQFAIL ' + r.url() + ' ' + r.failure()?.errorText));
  const response = await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60000 });
  console.log('STATUS', response && response.status(), 'URL', page.url());
  await page.waitForFunction(() => document.body.classList.contains('ready'), { timeout: 30000 });
  await page.waitForTimeout(3200);
  const info = await page.evaluate(() => ({
    title: document.title,
    ready: document.body.className,
    hasWorld: typeof window.__paperCarousel === 'object',
    canvas: [document.getElementById('scene').width, document.getElementById('scene').height],
    frames: window.__paperCarousel ? window.__paperCarousel.world.renderer.info.render.frame : null,
    drawCalls: window.__paperCarousel ? window.__paperCarousel.world.renderer.info.render.calls : null,
    bodyText: document.body.innerText.slice(0, 300),
  }));
  console.log('INFO', info);
  console.log('ERRORS', errors);
  await page.screenshot({ path: 'artifacts/published-carousel.png' });
  await browser.close();
})().catch((error) => { console.error('FATAL', error.stack || error); process.exit(1); });
