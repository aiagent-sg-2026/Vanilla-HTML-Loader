# Loader Studio modular refactor

The single-file Loader Studio was split into focused vanilla HTML, CSS, and ES module files. This note records the refactor itself; for the current architecture see [../DESIGN.md](../DESIGN.md) and for feature status see [../SPEC.md](../SPEC.md).

## Architecture

- `index.html`: static application structure only.
- `css/`: design tokens, layout, components, pagination, icons, responsive rules, collection layouts, and the sticky shell.
- `loaders/`: loader definitions grouped by category behind barrel modules (`*-index.js`), with `loaders/index.js` as the top-level registry. Each definition owns its preview markup and copyable CSS.
- `js/loader-style-service.js`: injects the same loader CSS used by copied snippets into live previews.
- `js/snippet-service.js`: creates HTML, CSS, JavaScript, and complete snippets.
- `js/state.js` and `js/storage.js`: runtime state and localStorage persistence.
- `js/ui/`: collection, inspector, preview, shell, accent, motion, visibility, infinite-scroll, and event-controller responsibilities.

## Preserved contract

- Complete snippets auto-show after pasting.
- Favorites, recents, and theme use the original localStorage keys (see `js/storage.js`).
- No frameworks, CDN assets, or build step.

## Historical note

At refactor time the collection held 30 loaders (Text 6, CSS 3D 6, SVG 5, and others). The library has since grown to **878 loaders across 17 categories** through incremental 10-loader packs — see [../ROADMAP.md](../ROADMAP.md) for the release history and `loaders/index.js` for the authoritative registry.
