# Art direction research

This note records visual lessons from established icon and emoji systems. The reference assets are studied for principles only. Crittericons must remain original; do not trace paths, copy silhouettes, or import third-party artwork into the package.

## Reference systems

### OpenMoji

OpenMoji separates color and line layers, uses a controlled palette, and applies a consistent rounded black outline. Its style guide says large-bodied animals should usually be shown from the side with organic body forms and strongly reduced detail.

Useful lessons:

- Separate silhouette, color, and facial marks conceptually.
- Let the body pose identify the species before the face does.
- Keep a disciplined palette across the full collection.
- Use one consistent line treatment.

License note: OpenMoji graphics are CC BY-SA 4.0. Study only; copying or adapting would create attribution and share-alike obligations.

### Twemoji

Twemoji relies on solid color regions, large readable features, and very little outline work. The cat and dog faces remain recognizable because their ears, muzzle patches, and eye spacing are exaggerated.

Useful lessons:

- Build recognition from large color masses.
- Make eyes, ears, and muzzle placement survive aggressive downscaling.
- Remove tiny decorative marks before they become noise.

License note: Twemoji graphics are CC BY 4.0. Study only.

### Noto Emoji

Noto uses oversized heads, bold asymmetry, and large expressive eyes. Its source SVGs contain far more detail than a 24×24 interface icon can support.

Useful lessons:

- Slight asymmetry makes a character feel alive.
- Large faces can carry emotion with very few marks.
- Preserve the emotional read while reducing the path count dramatically.

License note: Noto SVG artwork is Apache 2.0. Study only.

### Microsoft Fluent Emoji

Fluent Emoji emphasizes tactile volume, distinct poses, species-specific proportions, and a coherent palette. Its 3D rendering is too complex for Crittericons, but the pose and silhouette work is excellent reference material.

Useful lessons:

- Give each animal one memorable gesture or posture.
- Avoid making every critter face forward in the same neutral stance.
- Use proportion exaggeration deliberately: large head, small feet, short limbs, or oversized shell.

License note: the Fluent Emoji repository is MIT licensed. Crittericons still uses original artwork.

### MingCute and Cute Color packs

MingCute demonstrates the value of a strict 24×24 grid, smooth rounded corners, consistent stroke behavior, and matching filled/outline families. Commercial Cute Color libraries also show how a limited recurring palette helps hundreds of unrelated subjects feel like one collection.

Useful lessons:

- Standardize the visual grammar before expanding the set.
- Keep optical weight consistent even when silhouettes differ.
- Use a small family palette with predictable primary, shadow, muzzle, and accent roles.
- Test the complete collection together, not only one icon at a time.

## Crittericons decisions

1. **Silhouette first.** Every animal must read as a black blob at 16px before facial details are considered.
2. **One pose per critter.** Cat loafs, dog sits or bows, turtle walks, dinosaur leans or stomps.
3. **Large color regions.** Use two or three fills plus dark ink. Tiny spots and cheeks are optional and should disappear first.
4. **Deliberate asymmetry.** A tail curl, tilted head, uneven ears, or offset feet should add life without damaging balance.
5. **Face economy.** Two eyes and one mouth/nose gesture are usually enough.
6. **Consistent occupancy.** Main silhouettes should occupy roughly 18–20px of the 24px canvas and share a common optical baseline.
7. **Palette roles.** Each icon gets a primary fill, secondary/shadow fill, optional cream or highlight, and shared ink.
8. **Original paths only.** External SVGs remain references and never enter the distributed package.

## Next review questions

- Does each animal read before its label is visible?
- Does the pose create affection or personality?
- Are the eyes and mouth still legible at 16px?
- Does any interior line compete with the silhouette?
- Do all four look like members of the same collection?
