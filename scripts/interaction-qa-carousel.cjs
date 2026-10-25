const { chromium } = require('C:/Users/LENOVO/AppData/Local/OpenAI/Codex/runtimes/cua_node/1fb7137c46617d50/bin/node_modules/playwright-core');

(async () => {
  const browser = await chromium.launch({
    executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
    headless: true,
    args: ['--no-sandbox', '--disable-dev-shm-usage', '--disable-crash-reporter', '--no-first-run'],
  });
  const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
  const errors = [];
  page.on('pageerror', (e) => errors.push('PAGEERROR ' + e.message));
  page.on('console', (m) => { if (m.type() === 'error') errors.push('CONSOLE ' + m.text()); });
  await page.goto('http://127.0.0.1:4180/', { waitUntil: 'domcontentloaded', timeout: 60000 });
  await page.waitForFunction(() => document.body.classList.contains('ready'), { timeout: 30000 });
  await page.waitForTimeout(1800);

  const getHorsePoint = () => page.evaluate(() => {
    const w = window.__paperCarousel.world;
    const horse = w.horses[0];
    const point = new (w.camera.position.constructor)(0, 2.35, 0.1);
    horse.root.localToWorld(point);
    point.project(w.camera);
    return {
      x: (point.x * 0.5 + 0.5) * window.innerWidth,
      y: (-point.y * 0.5 + 0.5) * window.innerHeight,
    };
  });

  let point = await getHorsePoint();
  console.log('HORSE_POINT', point);
  await page.mouse.move(point.x, point.y);
  await page.waitForTimeout(500);
  console.log('HOVER', await page.evaluate(() => ({
    hovered: window.__paperCarousel.state.hoveredHorse,
    cursor: getComputedStyle(document.getElementById('scene')).cursor,
    railSelected: document.querySelectorAll('.horse-dot.is-selected').length,
    ringOpacity: window.__paperCarousel.world.hoverRings[0].material.opacity,
  })));

  await page.screenshot({ path: 'artifacts/final-hover.png' });
  await page.mouse.click(point.x, point.y);
  await page.waitForTimeout(2600);
  console.log('AFTER_HORSE_CLICK', await page.evaluate(() => ({
    riding: window.__paperCarousel.state.riding,
    classes: document.body.className,
    selected: window.__paperCarousel.state.selectedHorse,
    audio: window.__paperCarousel.audio.enabled,
    status: document.getElementById('rideStatusName').textContent,
  })));
  await page.screenshot({ path: 'artifacts/final-ride-click.png' });

  await page.click('#endRideBtn');
  await page.waitForTimeout(1800);
  console.log('AFTER_END', await page.evaluate(() => ({
    riding: window.__paperCarousel.state.riding,
    classes: document.body.className,
    hudHidden: document.getElementById('rideHud').getAttribute('aria-hidden'),
  })));

  await page.click('#soundBtn');
  await page.waitForTimeout(300);
  console.log('SOUND_OFF', await page.evaluate(() => ({
    sound: window.__paperCarousel.state.sound,
    audioEnabled: window.__paperCarousel.audio.enabled,
    pressed: document.getElementById('soundBtn').getAttribute('aria-pressed'),
  })));

  const beforeCam = await page.evaluate(() => window.__paperCarousel.world.camera.position.toArray());
  await page.mouse.move(700, 500);
  await page.mouse.down();
  await page.mouse.move(860, 540, { steps: 12 });
  await page.mouse.up();
  await page.waitForTimeout(500);
  const afterCam = await page.evaluate(() => window.__paperCarousel.world.camera.position.toArray());
  console.log('DRAG_CAMERA_CHANGED', beforeCam.some((value, index) => Math.abs(value - afterCam[index]) > 0.1), beforeCam, afterCam);

  await page.mouse.move(720, 500);
  await page.mouse.wheel(0, -260);
  await page.waitForTimeout(300);
  console.log('ZOOM', await page.evaluate(() => window.__paperCarousel.orbit.zoom));

  await page.click('#detailBtn');
  await page.waitForTimeout(500);
  console.log('DETAIL_OPEN', await page.evaluate(() => ({
    open: document.body.classList.contains('is-detail'),
    hidden: document.getElementById('detailPanel').getAttribute('aria-hidden'),
    expanded: document.getElementById('detailBtn').getAttribute('aria-expanded'),
  })));
  await page.click('#detailClose');
  await page.waitForTimeout(500);

  await page.click('#nightBtn');
  await page.waitForTimeout(300);
  console.log('NIGHT_ON', await page.evaluate(() => ({
    night: window.__paperCarousel.state.night,
    classes: document.body.className,
    theme: document.querySelector('meta[name="theme-color"]').getAttribute('content'),
  })));
  await page.click('#nightBtn');
  await page.waitForTimeout(300);

  await page.setViewportSize({ width: 390, height: 844 });
  await page.waitForTimeout(700);
  await page.click('.horse-dot[data-horse="2"]');
  await page.waitForTimeout(2200);
  console.log('MOBILE_RIDE', await page.evaluate(() => ({
    riding: window.__paperCarousel.state.riding,
    selected: window.__paperCarousel.state.selectedHorse,
    name: document.getElementById('rideStatusName').textContent,
    canvas: [document.getElementById('scene').width, document.getElementById('scene').height],
  })));
  await page.screenshot({ path: 'artifacts/final-mobile-ride2.png' });
  await page.click('#endRideBtn');
  await page.waitForTimeout(1000);

  console.log('ERRORS', errors);
  await browser.close();
})().catch((error) => { console.error('FATAL', error.stack || error); process.exit(1); });
