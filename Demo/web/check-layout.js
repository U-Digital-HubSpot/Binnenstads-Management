const puppeteer = require("../../.cursor/skills/generate-pdf/tools/node_modules/puppeteer");
const path = require("path");

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 720 });
  const file = path.resolve(__dirname, "index.html");
  await page.goto(`file://${file}#1`, { waitUntil: "networkidle0" });

  const metrics = await page.evaluate(() => ({
    scrollHeight: document.documentElement.scrollHeight,
    innerHeight: window.innerHeight,
    nextVisible: (() => {
      const btn = document.getElementById("next");
      const r = btn.getBoundingClientRect();
      return r.top >= 0 && r.bottom <= window.innerHeight;
    })(),
    slideCount: document.querySelectorAll(".slide").length,
  }));

  console.log(JSON.stringify(metrics, null, 2));
  const ok =
    metrics.scrollHeight <= metrics.innerHeight && metrics.nextVisible;
  console.log(ok ? "CHECK OK" : "CHECK FAILED");
  await browser.close();
  process.exit(ok ? 0 : 1);
})();
