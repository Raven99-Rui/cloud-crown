const { chromium } = require('C:/Users/LENOVO/AppData/Local/OpenAI/Codex/runtimes/cua_node/1fb7137c46617d50/bin/node_modules/playwright-core');

(async () => {
  const browser = await chromium.launch({
    executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
    headless: true,
    args: ['--no-sandbox', '--disable-dev-shm-usage', '--disable-crash-reporter', '--no-first-run'],
  });
  const page = await browser.newPage({ viewport: { width: 768, height: 1024 } });
  const errors = [];
  page.on('pageerror', (e) => errors.push(e.message));
  page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()); });
  await page.goto('http://127.0.0.1:4180/', { waitUntil: 'domcontentloaded', timeout: 60000 });
  await page.waitForFunction(() => document.body.classList.contains('ready'), { timeout: 30000 });
  await page.waitForTimeout(2800);
  await page.screenshot({ path: 'artifacts/final-tablet-768.png' });

  await page.setViewportSize({ width: 1024, height: 768 });
  await page.waitForTimeout(2000);
  await page.screenshot({ path: 'artifacts/final-tablet-1024-landscape.png' });

  await page.setViewportSize({ width: 1024, height: 1366 });
  await page.waitForTimeout(2200);
  await page.screenshot({ path: 'artifacts/final-tablet-1024-portrait.png' });

  await page.setViewportSize({ width: 390, height: 844 });
  await page.waitForTimeout(1800);
  // Validate that controls remain on-screen at small width.
  console.log('SMALL', await page.evaluate(() => {
    const rect = (s) => { const r = document.querySelector(s).getBoundingClientRect(); return { x: +r.x.toFixed(1), y: +r.y.toFixed(1), w: +r.width.toFixed(1), h: +r.height.toFixed(1) }; };
    return { hero: rect('.hero-copy'), rail: rect('.horse-rail'), cta: rect('.primary-button'), canvas: [innerWidth, innerHeight] };
  }));
  console.log('ERRORS', errors);
  await browser.close();
})().catch((error) => { console.error('FATAL', error.stack || error); process.exit(1); });
