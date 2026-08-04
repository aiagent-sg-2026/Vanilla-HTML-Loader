# DESIGN.md — Loader Studio (Vanilla-HTML-Loader)

Last verified against code: 2026-08-04 (counts from `node qa/registry-lint.mjs`).
**Source of truth is the code** (`index.html`, `css/`, `js/`, `loaders/`). This document is a projection; when it disagrees with the code, the code wins.

Related docs: [README.md](README.md) · [SPEC.md](SPEC.md) · [EPIC.md](EPIC.md) · [ROADMAP.md](ROADMAP.md) · [TASK.md](TASK.md) · [docs/modular-refactor.md](docs/modular-refactor.md) · history in [knowledge-base/project-memory.md](knowledge-base/project-memory.md)

## 1. What this is

Loader Studio is a Vite-based vanilla HTML/CSS/ES-module gallery that showcases **1082 loading animations across 17 categories**. Users browse, search, filter, preview, customise (size, speed, accent, label, per-loader application state) and copy production-ready HTML/CSS/JS snippets. The published gallery is Vite-built, while every copied snippet is dependency-free and plain HTML/CSS/JavaScript. The snippet contract is verified per release (D-22).

## 2. Architecture overview

```
index.html                     static shell (sidebar, topbar, toolbar, grid, inspector, full preview, toast)
├─ css/                        one concern per file, loaded in cascade order
│   tokens.css                 design tokens (colours, spacing, typography)
│   layout.css                 app shell layout
│   components.css             cards, inspector, controls (largest file)
│   collection-pagination.css  Load-more / progress UI
│   icons.css                  UI icon styles
│   responsive.css             breakpoint rules
│   collection-layout.css      masonry (CSS columns) + grid layouts
│   sticky-shell.css           sticky topbar/toolbar stack (loaded last, isolated)
├─ js/app.js                   entry point: resolves ~70 required DOM refs (fail-fast),
│                              mounts icons, installs loader styles, starts event controller
├─ js/                         services
│   state.js                   single mutable state object (selection, filters, view,
│                              pagination window, shell prefs, per-loader control values)
│   storage.js                 localStorage persistence behind STORAGE_KEYS
│   snippet-service.js         HTML / CSS / JS / combined snippet generation
│   loader-style-service.js    injects loader CSS into the page for live previews
│   loader-controls.js         renders declarative per-loader control schemas (range/select)
├─ js/ui/                      controllers (each owns one concern)
│   event-controller.js        central orchestrator: binds all events, composes controllers
│   collection-view.js         filtering, card rendering (DOM APIs + trusted DOMParser),
│                              pagination summary/progressbar
│   inspector-view.js          selected-loader panel
│   preview-view.js            preview settings, full-preview dialog, clipboard
│   shell-controller.js        sidebar / inspector open-collapse-pin state
│   accent-controller.js       global accent palette (presets + custom colour)
│   motion-controller.js       global pause/resume (default: running)
│   visibility-controller.js   IntersectionObserver: only visible cards animate;
│                              everything pauses when the tab is hidden
│   infinite-scroll-controller.js  sentinel-based auto-load after genuine user scroll
│   icon-library.js            inline SVG UI icons
└─ loaders/                    loader registry — data, not UI
    index.js                   top-level SSOT: composes 16 imports into `loaders` + `categories`
    *-index.js                 per-category barrel modules (spinners, dots, bars, shapes,
                               buttons, common, text, css-3d, svg)
    *-pack-N-{a,b}.js          10-loader expansion packs, split A/B (~5 each)
    shared.js                  COMMON_OVERLAY_CSS + LOADER_RUNTIME_JS (AppLoader API)
```

### Loader definition contract

Every loader is a plain object: `{ id, name, category, description, markup, css }`, optionally `tech`, `js` (copyable runtime API, 95 loaders), `controls` (declarative Inspector schema, 90 loaders) and `applyControls(container, values)`. IDs are unique across the whole registry (verified 2026-08-04: 1082 loaders, 0 duplicates).

### Category counts (from `loaders/index.js`, 2026-08-04)

| Category | Count | | Category | Count |
| --- | --- | --- | --- | --- |
| SVG | 114 | | Application | 23 |
| CSS 3D | 85 | | Maps | 29 |
| Spinners | 78 | | Holographic | 16 |
| Text | 68 | | Operations | 19 |
| Common UI | 65 | | Matrix | 272 |
| Skeletons | 62 | | Bars | 47 |
| Shapes | 50 | | Charts | 28 |
| Dots | 52 | | Progress | 29 |
|  |  | | Buttons | 45 |

**Total: 1082 loaders, 17 categories** (plus the synthetic "All" filter).

## 3. Durable design decisions

| # | Decision | Rationale |
| --- | --- | --- |
| D-01 | ~~Zero dependencies, no build step~~ **Superseded by D-21 on 2026-07-31.** The *snippets* stay dependency-free; the *studio* is now built with Vite. | The original reasoning — that the studio should prove the same constraint it sells — held until the studio outgrew it. See D-21. |
| D-02 | Barrel-module SSOT registry (`loaders/index.js` → category `*-index.js` → pack files) | Packs of 10 stay reviewable; category order is stable; no file grows unbounded. |
| D-03 | DOM APIs + trusted `DOMParser` instead of `innerHTML` assignment | Security-review outcome (2026-07-20); loader markup is first-party but the renderer avoids the innerHTML pattern anyway. |
| D-04 | Progressive rendering: 24-card initial window, +24 per batch | Full-library render was the mobile bottleneck (26,907px → 6,106px initial document height at 115 loaders). |
| D-05 | Infinite scroll via bottom-sentinel IntersectionObserver, armed only after genuine user scroll/keyboard input; Load More button kept as accessible fallback | Research-backed (research/loading-pattern-research-2026-07-22.md); prevents instant page-load expansion and keyboard exclusion. |
| D-06 | Visible-only animation: per-card IntersectionObserver + pause-all when tab hidden | Keeps full-library simultaneous CSS animations cheap; summary pill reports "N animations · M visible active". |
| D-07 | Motion defaults to running (`state.paused = false`) even under OS reduced-motion; Pause/Resume controls always available | Product decision 2026-07-16: a loader gallery whose loaders don't move fails its purpose; user keeps explicit control. |
| D-08 | Masonry default layout via responsive CSS columns, persisted Masonry/Grid toggle, stable per-loader card sizes (hash of id + category) | Pinterest-style browsing without JS layout thrash; deterministic heights avoid reflow. |
| D-09 | Sticky topbar/toolbar stack isolated in `sticky-shell.css` with `--main-topbar-height` variable | Fixed overlap bugs once; per-breakpoint heights 80/76/72px. |
| D-10 | Snippet contract: overlay markup `#appLoader` + `COMMON_OVERLAY_CSS` + `LOADER_RUNTIME_JS` exposing `AppLoader.show()/hide()`; combined snippet auto-runs a demo after paste | "Paste and see it immediately" is the core UX promise; production users delete the demo call. |
| D-11 | localStorage keys frozen in `storage.js` (`loaderStudioFavorites/Recent/Theme/Accent/Shell/CollectionLayout`) | Backwards compatibility with every earlier release. |
| D-12 | All loader motion elements are decorative: `aria-hidden`, `focusable=false`; buttons use real `disabled` + `aria-busy`; ≥44×44px interaction targets | Accessibility bar established 2026-07-16 and enforced in every pack QA (axe: zero violations). |
| D-13 | Per-loader "Application state" controls are a declarative schema (`controls[]` + `applyControls`) rendered with DOM APIs | Trusted-internal-only control rendering; values persist per loader and sync selected + full previews. |
| D-14 | Loader Studio is a **reference gallery**, not an installable app. PWA (manifest, service worker, offline) is **won't-do**. | Decided 2026-07-31. Visitors arrive to browse and copy a snippet, then leave; installability buys nothing for that journey. PWA audit warnings are expected and are not defects. |
| D-15 | Favorite toggles and selection changes mutate only the affected nodes; only Favorites (membership changes) and Recently viewed (order changes) re-render the collection | A full grid rebuild re-parsed every card and restarted all visible animations for a single star click. |
| D-16 | Selection is mirrored into `?loader=<id>` with `replaceState`, never `pushState` | The address bar stays shareable, but browsing a gallery must not bury the Back button under one history entry per card. |
| D-17 | A deep link scopes the view to the target's **own category**, not the whole library | Both guarantee the card is reachable, but scoping cuts the initial render from a mean of 290 cards to 41 (max 576 → 96) while keeping the visible set a contiguous prefix. Landing among related loaders also suits a gallery; **All** is one click away and resets the window. |
| D-18 | Eager-load the whole registry; no per-category lazy loading | Measured 2026-07-31 (research/lazy-loading-experiment-2026-07-31.md): eager loading costs ~10 ms of CPU total, and deferring the 584 KB of loader CSS saves ~0.6 ms. The 84% payload ceiling is only reachable by splitting every loader into metadata and payload, which breaks D-02. |
| D-19 | Card preview fragments are parsed once per loader and cloned; growing the pagination window appends the new tail instead of rebuilding the grid | Measured 2026-07-31: parsing the whole registry's markup fell from 24.4ms to 4.1ms, and Load more went from 7.6→14.2ms growing with the total rendered to a flat ~4.5ms. Appending also leaves existing cards in place, so their animations no longer restart. Guarded: it only applies when the rendered cards are exactly the unchanged prefix. |
| D-20 | CI drives headless Chrome over CDP with Node built-ins rather than adopting Playwright or Puppeteer | Enforcing the smoke test was worth doing, but a browser driver would have been this repository's first dev dependency and its first `node_modules`, contradicting D-01. Node has had a global `WebSocket` since 22 and CI images ship Chrome, so ~180 lines of `qa/run-smoke-ci.mjs` buy the same coverage with nothing installed. |
| D-21 | The studio is built with Vite (`npm run dev` / `npm run build`); the snippets it produces remain plain HTML, CSS and JS with no dependencies | Supersedes D-01. At full-library scale a visitor was fetching 277 KB over 146 render-blocking requests; bundling takes that to 3 requests and ~178 KB gzipped, and gives editing a loader hot reload instead of a manual refresh. The constraint that actually matters to users — that a copied snippet needs no toolchain — is unaffected, and is now enforced rather than assumed (D-22). |
| D-22 | Every release proves the build did not alter a single byte of any snippet (`qa/verify-snippet-parity.mjs`) | The product *is* the snippet text. A bundler is allowed to rewrite the application around the registry, but a loader's markup and CSS are template-literal data that must reach the clipboard untouched. The check generates all loader snippets from source and from the minified bundle and compares them byte for byte; it is self-tested by tampering with a built chunk and confirming it exits 1. |

## 4. Cross-cutting behaviours

- **State flow**: single `state` object; `event-controller.js` mutates it and re-renders affected views. No framework, no pub/sub — controller composition through explicit callbacks.
- **Fail-fast boot**: `app.js` throws on any missing required element, so an incomplete `index.html` fails loudly at startup.
- **Views**: Library / Favorites / Recently-viewed (max 8) share the same collection pipeline: view filter → category filter → text search → pagination window.
- **Theming**: light/dark body theme, global accent (8 presets + custom, propagated into copied CSS via `--loader-accent` rewrite), per-preview background (light/dark/brand).

## 5. Quality gates (as practised per pack release)

Two automated checks, both zero-dependency:

- `node qa/registry-lint.mjs` — registry invariants: unique ids, no `@keyframes` name redefined with a different body, no generic class name used as an unscoped top-level selector, required fields present. Exits non-zero on violation and prints the category count table that every doc must quote.
- `qa/snippet-paste-smoke.html` — pastes each loader's exact combined snippet into a blank page and asserts the overlay mounts and something inside it is genuinely animating. The parent reads the srcdoc iframe directly on its load event, so a full run over all loaders takes about 6 seconds. `?autorun=1` runs headlessly enough for a driver to read `window.__smokeResult`.

Both run in CI on every push to `main` and gate the deploy (`.github/workflows/deploy.yml`). `qa/run-smoke-ci.mjs` drives the smoke page in headless Chrome over CDP using only Node built-ins and the browser CI images already provide, so the repository still has no dependencies.

Around those, each 10-loader pack ships with: desktop + mobile interaction QA (Inspector, Full Preview, progressive loading to the final card) → responsive/network inspection → axe accessibility audit (zero-violation bar) → Chromium/Firefox/WebKit cross-browser QA → focused code review recorded in `review/` (JSON + MD pair).

## 6. Known gaps / accepted debt

- Automated checks run in CI (TASK T-205) and also run locally before release. The two checks above plus the snippet parity build check are the hard gate.
- PWA installability warnings will keep appearing in audits. Expected — see D-14, not a defect.
