import sharp from "sharp";
import { readFileSync, mkdirSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const appDir = join(root, "src", "app");
const publicDir = join(root, "public");

if (!existsSync(publicDir)) mkdirSync(publicDir, { recursive: true });

const svg = readFileSync(join(appDir, "icon.svg"));

const targets = [
  { out: join(appDir, "apple-icon.png"), size: 180 },
  { out: join(appDir, "icon.png"), size: 512 },
  { out: join(publicDir, "favicon-16.png"), size: 16 },
  { out: join(publicDir, "favicon-32.png"), size: 32 },
  { out: join(publicDir, "favicon-192.png"), size: 192 },
  { out: join(publicDir, "favicon-512.png"), size: 512 },
  { out: join(publicDir, "og-image.png"), size: 1200, height: 630, bg: "#0029D6" },
];

for (const t of targets) {
  if (t.bg) {
    await sharp({
      create: {
        width: t.size,
        height: t.height,
        channels: 4,
        background: t.bg,
      },
    })
      .composite([
        {
          input: await sharp(svg)
            .resize(Math.floor(t.height * 0.7))
            .toBuffer(),
          gravity: "center",
        },
      ])
      .png()
      .toFile(t.out);
  } else {
    await sharp(svg)
      .resize(t.size, t.size)
      .png()
      .toFile(t.out);
  }
  console.log(`✓ ${t.out}`);
}

console.log("Done generating icons");
