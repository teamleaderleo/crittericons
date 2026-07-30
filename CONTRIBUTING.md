# Contributing to Crittericons

Thanks for helping the tiny creatures multiply.

## Proposing a critter

Open an issue with:

- The animal or creature
- A reference pose or a quick sketch you made
- Any expression or prop ideas
- Where you imagine using the icon

Please avoid tracing existing commercial icon sets or copyrighted character designs.

## Drawing guidelines

Every icon should:

- Use a `0 0 24 24` view box
- Use soft pastel fills and dark rounded ink
- Default to a `1.15` stroke width
- Use rounded caps and joins
- Show a complete mascot silhouette or an equally expressive pose
- Stay readable at 16px
- Feel friendly, simple, and recognizable
- Avoid embedded raster images, fonts, masks, and unnecessary metadata

Faces should use a few deliberate marks. Large empty areas are welcome. Tiny decorations, crowded facial features, and generic floating-head compositions should be redrawn before review.

## Adding an icon

1. Add the React component to `src/index.tsx`.
2. Add its matching raw asset to `svg/`.
3. Export the component with a descriptive PascalCase name ending in `Icon`.
4. Add it to the icon table in `README.md`.
5. Run the checks:

```bash
npm install
npm run typecheck
npm run build
npx playwright install chromium
npm run visual-review
```

Open `artifacts/visual-review/icon-sheet.png` and inspect the icon at every displayed size. The pull-request workflow uploads the same visual review as an artifact, so reviewers can judge personality, silhouette, spacing, palette, and tiny-size readability from the exact commit.

## Commit style

Use clear commits such as:

- `feat: add axolotl icon`
- `fix: improve turtle silhouette at 16px`
- `docs: add raw SVG example`

By contributing, you agree that your contribution will be released under the MIT License.
