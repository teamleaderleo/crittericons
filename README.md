# Crittericons

Cute little animal SVG icons for interfaces, empty states, buttons, docs, games, and anywhere else that needs a tiny friend.

Crittericons currently includes a cat, dog, turtle, and dinosaur. Every icon is hand-drawn on a 24×24 grid with a soft pastel palette, dark `currentColor` ink, and a complete tiny-mascot silhouette. Each critter ships as both a typed React component and a raw SVG file.

## Install

```bash
npm install crittericons
```

## React

```tsx
import { CatIcon, DinoIcon, DogIcon, TurtleIcon } from "crittericons";

export function TinyFriends() {
  return (
    <div style={{ display: "flex", gap: 12 }}>
      <CatIcon title="Cat" />
      <DogIcon size={32} title="Dog" />
      <TurtleIcon color="#24443d" title="Turtle" />
      <DinoIcon size={40} title="Dinosaur" />
    </div>
  );
}
```

All regular SVG props are supported. The `color` prop controls the dark ink while each animal keeps its own pastel fills. Omit `title` for decorative icons; Crittericons will hide them from assistive technology automatically.

## Raw SVG

Raw assets are included in the published package:

```js
import catUrl from "crittericons/svg/cat.svg";
```

You can also copy files directly from the [`svg`](./svg) directory.

## Icons

| Component | Raw SVG |
| --- | --- |
| `CatIcon` | `svg/cat.svg` |
| `DogIcon` | `svg/dog.svg` |
| `TurtleIcon` | `svg/turtle.svg` |
| `DinoIcon` | `svg/dino.svg` |

## Design rules

- 24×24 view box
- Soft pastel fills with dark rounded ink
- `currentColor` controls React-component ink
- Complete mascot silhouettes instead of floating heads
- Friendly expressions that remain readable at 16px
- Minimal detail, maximum personality
- Accessible defaults

## Development

```bash
npm install
npm run typecheck
npm run build
```

## Visual review

Every push to `main` and every pull request generates a visual-review artifact containing:

- `desktop.png` — the complete gallery at desktop width
- `mobile.png` — the responsive gallery at mobile width
- `icon-sheet.png` — close-ups and 16px, 24px, 32px, and 48px comparisons
- `gallery.html` — the review page for local inspection

To capture the same screenshots locally:

```bash
npx playwright install chromium
npm run visual-review
```

The generated files appear in `artifacts/visual-review/`. Review the tiny-size lineup first: eyes, mouths, feet, tails, and silhouettes should remain recognizable without turning muddy.

## Roadmap

- More animals, sea creatures, bugs, dinosaurs, and imaginary beasts
- Mood variants such as sleepy, grumpy, excited, and suspicious
- A searchable gallery site
- Framework adapters after the core collection grows

## Contributing

Creature ideas and icon contributions are welcome. Read [CONTRIBUTING.md](./CONTRIBUTING.md) before opening a pull request.

## License

MIT © 2026 teamleaderleo
