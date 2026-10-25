const { chromium } = require('C:/Users/LENOVO/AppData/Local/OpenAI/Codex/runtimes/cua_node/1fb7137c46617d50/bin/node_modules/playwright-core');

const options = [
  { name: 'C1-wide', cam: [5.5, 4.4, 6.5], look: [0.5, 2.85, 0], fov: 45 },
  { name: 'C2-wider', cam: [6.5, 4.6, 7.5], look: [0.3, 2.9, 0], fov: 44 },
  { name: 'C3-level', cam: [4.8, 3.5, 7.0], look: [0.4, 2.75, 0], fov: 45 },
  { name: 'C4-high', cam: [4.8, 5.4, 7.0], look: [0.2, 2.7, 0], fov: 44 },
  { name: 'C5-close', cam: [3.7, 4.0, 4.3], look: [0.1, 2.9, 0], fov: 48 },
];

(async () => {
  const browser = await chromium.launch({
    executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
    headless: true,
    args: ['--no-sandbox', '--disable-dev-shm-usage', '--disable-crash-reporter', '--no-first-run'],
  });
  const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
  await page.goto('http://127.0.0.1:4180/', { waitUntil: 'domcontentloaded', timeout: 60000 });
  await page.waitForFunction(() => document.body.classList.contains('ready'), { timeout: 30000 });
  await page.evaluate(() => window.__paperCarousel.startRide(0));
  await page.waitForTimeout(2800);
  for (const option of options) {
    await page.evaluate((opt) => {
      const w = window.__paperCarousel.world;
      w.rideOffsets.camera.set(...opt.cam);
      w.rideOffsets.look.set(...opt.look);
      w.rideOffsets.fov = opt.fov;
    }, option);
    await page.waitForTimeout(1700);
    await page.screenshot({ path: `artifacts/ride-${option.name}.png` });
  }
  await browser.close();
})().catch((error) => { console.error(error.stack || error); process.exit(1); });
