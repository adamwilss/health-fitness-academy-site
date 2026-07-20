const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2 });
  await page.goto('https://health-fitness-academy-site.vercel.app/');
  await page.waitForLoadState('networkidle');
  await page.screenshot({ path: 'C:/Users/Fen/.openclaw/workspace/tmp/hfa-editorial/browser-mobile-top.png' });
  await browser.close();
})();
