const { chromium } = require('C:/Users/LENOVO/AppData/Local/OpenAI/Codex/runtimes/cua_node/1fb7137c46617d50/bin/node_modules/playwright-core');

const options = [
  { name: 'A-chase-back', cam: [-2.7, 4.4, 1.2], look: [2.5, 2.9, 0], fov: 48 },
  { name: 'B-side-external', cam: [0.2, 4.0, 6.2], look: [0.2, 2.8, 0], fov: 46 },
  { name: 'C-front-external', cam: [4.2, 4.2, 4.8], look: [0, 2.8, 0], fov: 48 },
  { name: 'D-high-external', cam: [-1.0, 5.6, 6.8], look: [0.2, 2.5, 0], fov: 46 },
  { name: 'E-front-facing', cam: [2.8, 3.6, 1.5], look: [-0.3, 2.8, 0], fov: 50 },
  { name: 'F-shoulder-out', cam: [-1.9, 4.0, 0.6], look: [4.2, 3.0, 2.0], fov: 52 },
  { name: 'G-high-shoulder', cam: [-2.3, 4.3, 1.0], look: [3.0, 2.8, 1.8], fov: 52 },
];

(async () => {
  const browser = await chromium.launch({
    executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
    headless: true,
    args: ['--no-sandbox', '--disable-dev-shm-usage', '--disable-crash-reporter', '--no-first-run'],
  });
  const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
  const errors = [];
  page.on('pageerror', (e) => errors.push(e.message));
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
    const info = await page.evaluate(() => ({
      camera: window.__paperCarousel.world.camera.position.toArray().map((v) => +v.toFixed(2)),
      fov: +window.__paperCarousel.world.camera.fov.toFixed(1),
    }));
    console.log(option.name, info);
  }
  console.log('ERRORS', errors);
  await browser.close();
})().catch((error) => { console.error(error.stack || error); process.exit(1); });
