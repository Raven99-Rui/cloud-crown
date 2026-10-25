const path = require('path');
const { chromium } = require('C:/Users/LENOVO/AppData/Local/OpenAI/Codex/runtimes/cua_node/1fb7137c46617d50/bin/node_modules/playwright-core');

(async () => {
  const browser = await chromium.launch({
    executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
    headless: true,
    args: ['--no-sandbox', '--disable-dev-shm-usage', '--disable-crash-reporter', '--no-first-run', '--no-default-browser-check'],
  });
  const page = await browser.newPage({ viewport: { width: 1440, height: 1000 }, deviceScaleFactor: 1 });
  const errors = [];
  page.on('pageerror', (error) => errors.push('PAGEERROR ' + error.stack));
  page.on('console', (message) => {
    if (message.type() === 'error' || message.type() === 'warning') {
      errors.push(message.type().toUpperCase() + ' ' + message.text().slice(0, 800));
    }
  });
  page.on('requestfailed', (request) => errors.push('REQFAIL ' + request.url() + ' ' + request.failure()?.errorText));

  await page.goto('http://127.0.0.1:4180/', { waitUntil: 'domcontentloaded', timeout: 60000 });
  await page.waitForFunction(() => document.body.classList.contains('ready'), { timeout: 30000 });
  await page.waitForTimeout(3000);
  const info = await page.evaluate(() => ({
    title: document.title,
    ready: document.body.className,
    loader: getComputedStyle(document.getElementById('loader')).opacity,
    canvas: { w: document.getElementById('scene').width, h: document.getElementById('scene').height },
    debug: typeof window.__paperCarousel,
    webgl: (() => {
      const gl = document.getElementById('scene').getContext('webgl2') || document.getElementById('scene').getContext('webgl');
      return gl ? gl.getParameter(gl.VERSION) : 'none';
    })(),
    camera: window.__paperCarousel ? {
      pos: window.__paperCarousel.world.camera.position.toArray().map((v) => +v.toFixed(2)),
      fov: window.__paperCarousel.world.camera.fov,
      aspect: window.__paperCarousel.world.camera.aspect,
    } : null,
    bodyText: document.body.innerText.slice(0, 500),
  }));
  console.log('INFO', JSON.stringify(info, null, 2));
  console.log('ERRORS', JSON.stringify(errors, null, 2));
  await page.screenshot({ path: 'artifacts/paper-carousel-desktop.png', fullPage: false });

  await page.evaluate(() => window.__paperCarousel.startRide(0));
  await page.waitForTimeout(2600);
  await page.screenshot({ path: 'artifacts/paper-carousel-ride.png' });
  const rideInfo = await page.evaluate(() => ({
    mode: document.body.className,
    fov: window.__paperCarousel.world.camera.fov,
    pos: window.__paperCarousel.world.camera.position.toArray().map((v) => +v.toFixed(2)),
  }));
  console.log('RIDE', JSON.stringify(rideInfo, null, 2));

  await page.evaluate(() => window.__paperCarousel.endRide());
  await page.waitForTimeout(1600);
  await page.evaluate(() => document.getElementById('nightBtn').click());
  await page.waitForTimeout(2200);
  await page.screenshot({ path: 'artifacts/paper-carousel-night.png' });

  await page.setViewportSize({ width: 390, height: 844 });
  await page.waitForTimeout(2000);
  await page.evaluate(() => {
    if (document.body.classList.contains('night')) document.getElementById('nightBtn').click();
  });
  await page.waitForTimeout(1800);
  await page.screenshot({ path: 'artifacts/paper-carousel-mobile.png' });

  console.log('ERRORS_FINAL', JSON.stringify(errors, null, 2));
  await browser.close();
})().catch((error) => {
  console.error('FATAL', error.stack || error);
  process.exit(1);
});
