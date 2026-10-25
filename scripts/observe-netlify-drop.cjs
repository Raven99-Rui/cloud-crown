const { chromium } = require('C:/Users/LENOVO/AppData/Local/OpenAI/Codex/runtimes/cua_node/1fb7137c46617d50/bin/node_modules/playwright-core');

(async () => {
  const browser = await chromium.launch({
    executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
    headless: true,
    args: ['--no-sandbox', '--disable-dev-shm-usage', '--disable-crash-reporter', '--no-first-run', '--no-default-browser-check'],
  });
  const page = await browser.newPage({ viewport: { width: 1366, height: 900 }, locale: 'en-US' });
  await page.goto('https://app.netlify.com/drop', { waitUntil: 'domcontentloaded', timeout: 60000 });
  await page.waitForTimeout(3000);
  console.log('URL', page.url());
  console.log('TITLE', await page.title());
  console.log('TEXT', (await page.locator('body').innerText()).slice(0, 3000));
  console.log('INPUTS', await page.locator('input').evaluateAll((els) => els.map((el) => ({ type: el.type, accept: el.accept, multiple: el.multiple, hidden: el.hidden }))));
  console.log('BUTTONS', await page.locator('button').evaluateAll((els) => els.map((el) => (el.innerText || el.getAttribute('aria-label') || '').trim()).filter(Boolean).slice(0, 40)));
  await page.screenshot({ path: 'artifacts/netlify-drop-observe.png', fullPage: false });
  await browser.close();
})().catch((error) => { console.error('FATAL', error.stack || error); process.exit(1); });
