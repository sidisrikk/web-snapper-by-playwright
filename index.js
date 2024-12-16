const { chromium } = require("playwright");

(async () => {
  // Launch the browser
  const browser = await chromium.launch();

  // Create a new browser context in full screen
  const context = await browser.newContext({
    viewport: null, // Fullscreen viewport
  });

  // Create a new page in the context
  const page = await context.newPage();

  // Go to the desired URL
  await page.goto("https://playwright.dev/docs/browser-contexts");

  // Take a screenshot and save it as "screenshot.png"
  await page.screenshot({ path: "./snapshots/screenshot.png", fullPage: true });

  // Close the browser
  await browser.close();
})();
