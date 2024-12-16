const { chromium } = require("playwright");
const path = require("path");

(async () => {
  // Launch the browser
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: {
      width: 800,
      height: 600,
    },
  });
  const page = await context.newPage();

  // Use path.join to ensure cross-platform compatibility for the file path
  const filePath = path.join(__dirname, "code.html");
  const fileUrl = `file://${filePath}`;

  // Go to the local HTML file
  await page.goto(fileUrl);

  // Take a screenshot and save it as "screenshot.png"
  await page.screenshot({ path: "./snapshots/screenshot.png", fullPage: true });

  // Close the browser
  await browser.close();
})();
