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
    if (message.type() === 'error') errors.push('CONSOLE ' + message.text().slice(0, 800));
  });
  page.on('requestfailed', (request) => errors.push('REQFAIL ' + request.url() + ' ' + request.failure()?.errorText));

  const waitReady = async () => {
    await page.waitForFunction(() => document.body.classList.contains('ready'), { timeout: 30000 });
    await page.waitForTimeout(2800);
  };

  await page.goto('http://127.0.0.1:4180/', { waitUntil: 'domcontentloaded', timeout: 60000 });
  await waitReady();
  await page.screenshot({ path: 'artifacts/final-desktop.png' });

  const perf = await page.evaluate(async () => {
    let frames = 0;
    const start = performance.now();
    await new Promise((resolve) => {
      const tick = () => {
        frames += 1;
        if (performance.now() - start > 2000) resolve();
        else requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    });
    return {
      fps: +(frames / ((performance.now() - start) / 1000)).toFixed(1),
      drawCalls: window.__paperCarousel.world.renderer.info.render.calls,
      triangles: window.__paperCarousel.world.renderer.info.render.triangles,
      textures: window.__paperCarousel.world.renderer.info.memory.textures,
      geometries: window.__paperCarousel.world.renderer.info.memory.geometries,
    };
  });
  console.log('PERF', perf);

  await page.evaluate(() => window.__paperCarousel.startRide(0));
  await page.waitForTimeout(3000);
  await page.screenshot({ path: 'artifacts/final-ride.png' });

  await page.evaluate(() => window.__paperCarousel.endRide());
  await page.waitForTimeout(1800);
  await page.click('#detailBtn');
  await page.waitForTimeout(800);
  await page.screenshot({ path: 'artifacts/final-detail.png' });
  await page.click('#detailClose');
  await page.waitForTimeout(700);

  await page.click('#nightBtn');
  await page.waitForTimeout(3600);
  await page.screenshot({ path: 'artifacts/final-night.png' });

  // Mobile, back in day mode and with no transient toast.
  await page.setViewportSize({ width: 390, height: 844 });
  await page.evaluate(() => {
    if (document.body.classList.contains('night')) document.getElementById('nightBtn').click();
  });
  await page.waitForTimeout(3500);
  await page.screenshot({ path: 'artifacts/final-mobile.png' });

  await page.evaluate(() => window.__paperCarousel.startRide(0));
  await page.waitForTimeout(2800);
  await page.screenshot({ path: 'artifacts/final-mobile-ride.png' });

  console.log('BODY', await page.evaluate(() => ({
    classes: document.body.className,
    rideHidden: document.getElementById('rideHud').getAttribute('aria-hidden'),
    endVisibility: getComputedStyle(document.getElementById('endRideBtn')).visibility,
    endOpacity: getComputedStyle(document.getElementById('endRideBtn')).opacity,
  })));
  console.log('ERRORS', errors);
  await browser.close();
})().catch((error) => {
  console.error('FATAL', error.stack || error);
  process.exit(1);
});
