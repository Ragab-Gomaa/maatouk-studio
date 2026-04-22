import puppeteer from "puppeteer";
import sharp from "sharp";
import { mkdir, rm } from "fs/promises";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = join(__dirname, "..");
const outDir = join(projectRoot, "public", "images", "projects");

const sites = [
  {
    slug: "dolcebello",
    url: "https://dolcebello.net",
    innerPath: "/shop",
  },
  {
    slug: "nobles-catering",
    url: "https://www.noblescatering.com",
    innerPath: "/",
  },
  {
    slug: "meezan",
    url: "https://www.meezan-app.com",
    innerPath: "/",
  },
  {
    slug: "royal-catering",
    url: "https://royal-catering.vercel.app",
    innerPath: "/",
  },
  {
    slug: "nobles-respond",
    url: "https://noblesrespond.com",
    innerPath: "/",
  },
];

const viewports = [
  { name: "desktop", width: 1440, height: 900, deviceScaleFactor: 2 },
  { name: "mobile", width: 390, height: 844, deviceScaleFactor: 3 },
];

async function ensureDir(p) {
  await mkdir(p, { recursive: true });
}

async function capture(browser, site, viewport, path, labelPrefix) {
  const page = await browser.newPage();
  await page.setViewport({
    width: viewport.width,
    height: viewport.height,
    deviceScaleFactor: viewport.deviceScaleFactor,
    isMobile: viewport.name === "mobile",
    hasTouch: viewport.name === "mobile",
  });

  // User-agent mimics a real browser
  await page.setUserAgent(
    viewport.name === "mobile"
      ? "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1"
      : "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  );

  const fullUrl = site.url + path;
  console.log(`  → ${labelPrefix} @ ${viewport.name}: ${fullUrl}`);

  try {
    await page.goto(fullUrl, {
      waitUntil: "networkidle2",
      timeout: 45000,
    });

    // Give animations a chance to settle
    await new Promise((r) => setTimeout(r, 2500));

    const rawBuffer = await page.screenshot({
      type: "png",
      fullPage: false,
      captureBeyondViewport: false,
    });

    const fileName = `${labelPrefix}-${viewport.name}.png`;
    const destRaw = join(outDir, site.slug, fileName);
    await ensureDir(dirname(destRaw));

    // Downscale + compress with sharp so we don't ship 5MB PNGs
    const target = viewport.name === "desktop"
      ? { width: 1600 }
      : { width: 780 };

    await sharp(rawBuffer)
      .resize(target)
      .png({ quality: 80, compressionLevel: 9 })
      .toFile(destRaw);

    console.log(`    ✓ saved ${destRaw.replace(projectRoot + "/", "")}`);
  } catch (err) {
    console.warn(`    ! failed ${fullUrl}: ${err.message}`);
  } finally {
    await page.close();
  }
}

async function main() {
  await ensureDir(outDir);

  const browser = await puppeteer.launch({
    headless: "new",
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  try {
    for (const site of sites) {
      console.log(`\n[${site.slug}]`);
      for (const viewport of viewports) {
        await capture(browser, site, viewport, "/", "home");
        if (site.innerPath && site.innerPath !== "/") {
          await capture(browser, site, viewport, site.innerPath, "inner");
        }
      }
    }
  } finally {
    await browser.close();
  }

  console.log("\nDone.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
