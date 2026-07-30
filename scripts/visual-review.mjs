import { mkdir, readdir, readFile, writeFile } from "node:fs/promises";
import { basename, join, resolve } from "node:path";
import { pathToFileURL } from "node:url";
import { chromium } from "playwright";

const root = resolve(import.meta.dirname, "..");
const svgDirectory = join(root, "svg");
const outputDirectory = join(root, "artifacts", "visual-review");

const files = (await readdir(svgDirectory))
  .filter((file) => file.endsWith(".svg"))
  .sort((a, b) => a.localeCompare(b));

if (files.length === 0) {
  throw new Error("No SVG files found in svg/. Add a critter before running visual review.");
}

const critters = await Promise.all(
  files.map(async (file) => ({
    file,
    name: basename(file, ".svg")
      .split(/[-_]/u)
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" "),
    svg: await readFile(join(svgDirectory, file), "utf8"),
  })),
);

function iconMarkup(svg, size, label) {
  return svg.replace(
    /<svg\b/u,
    `<svg width="${size}" height="${size}" aria-label="${label}" data-review-size="${size}"`,
  );
}

function critterCard(critter, index) {
  const colors = ["#5b4b8a", "#b24d67", "#31756d", "#9a5a2d", "#4667a6", "#7a566f"];
  const color = colors[index % colors.length];
  const sizes = [16, 24, 32, 48];

  return `
    <article class="critter-card" style="--critter-color: ${color}">
      <div class="portrait">${iconMarkup(critter.svg, 112, critter.name)}</div>
      <div class="identity">
        <h2>${critter.name}</h2>
        <code>${critter.file}</code>
      </div>
      <div class="size-row" aria-label="${critter.name} size comparison">
        ${sizes
          .map(
            (size) => `
              <div class="size-sample">
                <div class="sample-icon">${iconMarkup(critter.svg, size, `${critter.name} at ${size}px`)}</div>
                <span>${size}</span>
              </div>`,
          )
          .join("")}
      </div>
    </article>`;
}

const cards = critters.map(critterCard).join("");
const compactRows = [16, 20, 24, 32]
  .map(
    (size) => `
      <div class="compact-row">
        <span class="row-label">${size}px</span>
        <div class="compact-icons">
          ${critters
            .map((critter) => iconMarkup(critter.svg, size, `${critter.name} at ${size}px`))
            .join("")}
        </div>
      </div>`,
  )
  .join("");

const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Crittericons visual review</title>
    <style>
      :root {
        color-scheme: light;
        font-family: ui-rounded, "SF Pro Rounded", "Nunito", system-ui, sans-serif;
        background: #fff8ef;
        color: #302b3a;
      }

      * { box-sizing: border-box; }

      body {
        margin: 0;
        min-width: 320px;
        background:
          radial-gradient(circle at 8% 8%, #ffe1e9 0 8rem, transparent 8.1rem),
          radial-gradient(circle at 92% 4%, #dff4ee 0 10rem, transparent 10.1rem),
          #fff8ef;
      }

      main {
        width: min(1180px, calc(100% - 32px));
        margin: 0 auto;
        padding: 64px 0 88px;
      }

      header {
        text-align: center;
        margin-bottom: 38px;
      }

      .eyebrow {
        display: inline-flex;
        padding: 7px 12px;
        border: 2px solid #302b3a;
        border-radius: 999px;
        background: #fff;
        box-shadow: 3px 3px 0 #302b3a;
        font-size: 13px;
        font-weight: 800;
        letter-spacing: 0.08em;
        text-transform: uppercase;
      }

      h1 {
        margin: 20px 0 8px;
        font-size: clamp(44px, 8vw, 82px);
        line-height: 0.95;
        letter-spacing: -0.065em;
      }

      header p {
        max-width: 640px;
        margin: 0 auto;
        font-size: 18px;
        line-height: 1.55;
        color: #665f70;
      }

      #icon-sheet {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 20px;
      }

      .critter-card {
        overflow: hidden;
        border: 2px solid #302b3a;
        border-radius: 28px;
        background: rgba(255, 255, 255, 0.92);
        box-shadow: 7px 7px 0 #302b3a;
      }

      .portrait {
        display: grid;
        min-height: 240px;
        place-items: center;
        color: var(--critter-color);
        background: color-mix(in srgb, var(--critter-color) 12%, white);
      }

      .portrait svg {
        filter: drop-shadow(0 5px 0 rgba(48, 43, 58, 0.09));
      }

      .identity {
        display: flex;
        align-items: baseline;
        justify-content: space-between;
        gap: 12px;
        padding: 18px 20px 13px;
      }

      h2 {
        margin: 0;
        font-size: 23px;
        letter-spacing: -0.035em;
      }

      code {
        color: #766e7d;
        font-size: 12px;
      }

      .size-row {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        border-top: 2px solid #302b3a;
      }

      .size-sample {
        display: grid;
        min-height: 86px;
        place-items: center;
        padding: 10px 4px 7px;
        color: var(--critter-color);
        border-right: 1px dashed #c8bfca;
      }

      .size-sample:last-child { border-right: 0; }

      .sample-icon {
        display: grid;
        min-height: 50px;
        place-items: center;
      }

      .size-sample span {
        font: 700 11px/1 ui-monospace, monospace;
        color: #877f8c;
      }

      .tiny-check {
        margin-top: 28px;
        padding: 24px;
        border: 2px solid #302b3a;
        border-radius: 24px;
        background: #302b3a;
        color: #fff8ef;
        box-shadow: 7px 7px 0 #d9b96e;
      }

      .tiny-check h2 {
        margin-bottom: 7px;
      }

      .tiny-check > p {
        margin: 0 0 22px;
        color: #d9d3df;
      }

      .compact-row {
        display: grid;
        grid-template-columns: 58px 1fr;
        align-items: center;
        gap: 12px;
        padding: 13px 0;
        border-top: 1px solid #575061;
      }

      .row-label {
        font: 700 12px/1 ui-monospace, monospace;
        color: #d9b96e;
      }

      .compact-icons {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 18px;
      }

      footer {
        margin-top: 30px;
        text-align: center;
        color: #756d7c;
        font-size: 13px;
      }

      @media (max-width: 720px) {
        main { padding-top: 42px; }
        #icon-sheet { grid-template-columns: 1fr; }
        .portrait { min-height: 210px; }
        .identity { align-items: flex-start; flex-direction: column; }
        .critter-card { border-radius: 23px; box-shadow: 5px 5px 0 #302b3a; }
      }
    </style>
  </head>
  <body>
    <main>
      <header>
        <span class="eyebrow">Visual review · ${critters.length} tiny friends</span>
        <h1>Crittericons</h1>
        <p>Close-up personality checks and small-size readability checks, captured from the SVG files in this commit.</p>
      </header>

      <section id="icon-sheet" aria-label="Critter close-ups">
        ${cards}
      </section>

      <section class="tiny-check" aria-label="Small size review">
        <h2>Tiny-size lineup</h2>
        <p>Faces, feet, tails, and silhouettes should survive all four rows.</p>
        ${compactRows}
      </section>

      <footer>Generated from ${critters.map((critter) => critter.file).join(", ")}</footer>
    </main>
  </body>
</html>`;

await mkdir(outputDirectory, { recursive: true });
const htmlPath = join(outputDirectory, "gallery.html");
await writeFile(htmlPath, html, "utf8");

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({
  viewport: { width: 1440, height: 1000 },
  deviceScaleFactor: 1,
});

await page.goto(pathToFileURL(htmlPath).href, { waitUntil: "load" });
await page.screenshot({
  path: join(outputDirectory, "desktop.png"),
  fullPage: true,
});
await page.locator("#icon-sheet").screenshot({
  path: join(outputDirectory, "icon-sheet.png"),
});

await page.setViewportSize({ width: 430, height: 932 });
await page.screenshot({
  path: join(outputDirectory, "mobile.png"),
  fullPage: true,
});

await browser.close();
console.log(`Visual review captured for ${critters.length} critters in ${outputDirectory}`);
