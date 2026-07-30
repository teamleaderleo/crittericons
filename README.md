# Crittericons

Cute little animal SVG icons for interfaces, empty states, buttons, docs, games, and anywhere else that needs a tiny friend.

Crittericons currently includes a cat, dog, turtle, and dinosaur. Every icon is hand-drawn on a 24×24 grid, uses `currentColor`, and ships as both a typed React component and a raw SVG file.

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
      <TurtleIcon strokeWidth={1.5} title="Turtle" />
      <DinoIcon className="text-lime-600" title="Dinosaur" />
    </div>
  );
}
```

All regular SVG props are supported. Omit `title` for decorative icons; Crittericons will hide them from assistive technology automatically.

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
- Rounded line caps and joins
- `currentColor` strokes
- Friendly silhouettes that remain readable at 16px
- Minimal detail, maximum personality
- Accessible defaults

## Development

```bash
npm install
npm run typecheck
npm run build
```

## Roadmap

- More animals, sea creatures, bugs, dinosaurs, and imaginary beasts
- Mood variants such as sleepy, grumpy, excited, and suspicious
- A searchable gallery site
- Framework adapters after the core collection grows

## Contributing

Creature ideas and icon contributions are welcome. Read [CONTRIBUTING.md](./CONTRIBUTING.md) before opening a pull request.

## License

MIT © 2026 teamleaderleo
