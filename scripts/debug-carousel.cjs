const { chromium } = require('C:/Users/LENOVO/AppData/Local/OpenAI/Codex/runtimes/cua_node/1fb7137c46617d50/bin/node_modules/playwright-core');

(async () => {
  const browser = await chromium.launch({
    executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
    headless: true,
    args: ['--no-sandbox', '--disable-dev-shm-usage', '--disable-crash-reporter', '--no-first-run'],
  });
  const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
  page.on('pageerror', (e) => console.log('PAGEERROR', e.stack));
  page.on('console', (m) => console.log('CONSOLE', m.type(), m.text().slice(0, 600)));
  page.on('requestfailed', (r) => console.log('REQFAIL', r.url(), r.failure()?.errorText));
  page.on('response', (r) => console.log('RESP', r.status(), r.url()));
  try {
    await page.goto('http://127.0.0.1:4180/', { waitUntil: 'commit', timeout: 15000 });
    console.log('COMMITTED');
  } catch (e) {
    console.log('GOTO_ERR', e.message);
  }
  for (let i = 0; i < 8; i++) {
    await new Promise((r) => setTimeout(r, 2000));
    try {
      const state = await Promise.race([
        page.evaluate(() => ({ ready: document.readyState, body: document.body.className, text: document.body.innerText.slice(0, 120), hasWorld: typeof window.__paperCarousel })),
        new Promise((_, reject) => setTimeout(() => reject(new Error('evaluate timeout')), 3000)),
      ]);
      console.log('STATE', i, state);
    } catch (e) {
      console.log('STATE_ERR', i, e.message);
    }
  }
  await page.screenshot({ path: 'artifacts/carousel-debug.png' }).catch((e) => console.log('SHOT_ERR', e.message));
  await browser.close();
})().catch((e) => { console.error('FATAL', e); process.exit(1); });
