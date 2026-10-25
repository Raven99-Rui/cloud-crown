const path = require('path');
const { chromium } = require('C:/Users/LENOVO/AppData/Local/OpenAI/Codex/runtimes/cua_node/1fb7137c46617d50/bin/node_modules/playwright-core');

(async () => {
  const zip = path.resolve('artifacts/le-carrousel-dor.zip');
  const browser = await chromium.launch({
    executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
    headless: true,
    args: ['--no-sandbox', '--disable-dev-shm-usage', '--disable-crash-reporter', '--no-first-run', '--no-default-browser-check'],
  });
  const page = await browser.newPage({ viewport: { width: 1366, height: 900 }, locale: 'en-US' });
  const errors = [];
  page.on('pageerror', (e) => errors.push('PAGEERROR ' + e.message));
  page.on('console', (m) => {
    const t = m.text();
    if (/error|fail|deploy|upload|exceed|limit/i.test(t)) console.log('[console]', m.type(), t.slice(0, 500));
  });
  page.on('response', (r) => {
    if (r.status() >= 400 && !r.url().includes('favicon')) console.log('[http]', r.status(), r.url().slice(0, 200));
  });

  await page.goto('https://vercel.com/drop', { waitUntil: 'domcontentloaded', timeout: 60000 });
  await page.locator('input[type=file]').setInputFiles(zip);
  console.log('FILE_SET');
  await page.waitForTimeout(3000);

  let found = null;
  for (let i = 0; i < 40; i += 1) {
    await page.waitForTimeout(3000);
    const info = await page.evaluate(() => {
      const text = document.body.innerText;
      const links = [...document.querySelectorAll('a')]
        .map((a) => ({ text: (a.innerText || '').trim(), href: a.href }))
        .filter((x) => x.href && /vercel\.app|tmp\.now/.test(x.href));
      const urlMatch = text.match(/https?:\/\/[^\s]*(?:vercel\.app|tmp\.now)[^\s]*/);
      return { text: text.slice(0, 2500), links, urlMatch: urlMatch && urlMatch[0], url: location.href };
    });
    if (i % 2 === 0) {
      console.log('POLL', i, JSON.stringify({ url: info.url, urlMatch: info.urlMatch, links: info.links, text: info.text.replace(/\n+/g, ' | ').slice(0, 700) }));
    }
    if (info.urlMatch || info.links.length) {
      found = info.urlMatch || info.links[0].href;
      console.log('FOUND', found);
      break;
    }
    if (/failed|error|limit|too large|try again/i.test(info.text)) {
      console.log('POSSIBLE_ERROR', info.text.replace(/\n+/g, ' | ').slice(0, 2000));
    }
    if (/site is live|deployed/i.test(info.text)) {
      console.log('SITE_LIVE_TEXT', info.text.replace(/\n+/g, ' | ').slice(0, 2500));
    }
  }
  await page.screenshot({ path: 'artifacts/vercel-drop-result.png', fullPage: false });
  console.log('FINAL_URL', page.url());
  console.log('FINAL_TEXT', (await page.locator('body').innerText()).slice(0, 5000));
  console.log('FOUND_URL', found);
  console.log('ERRORS', errors);
  await browser.close();
  if (!found) process.exit(2);
})().catch((error) => { console.error('FATAL', error.stack || error); process.exit(1); });
