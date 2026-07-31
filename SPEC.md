# SPEC.md — Loader Studio functional specification

Last verified against code: 2026-07-31. Code is the source of truth; statuses below were checked against the implementation, not against intentions.

Related docs: [README.md](README.md) · [DESIGN.md](DESIGN.md) · [EPIC.md](EPIC.md) · [ROADMAP.md](ROADMAP.md) · [TASK.md](TASK.md)

Status legend: ✅ Implemented · 🟡 Partial · ⬜ Not implemented · ❌ Won't-do

## FR-1 Loader collection browsing — ✅

- 555 loaders in 15 categories exposed from `loaders/index.js`; category filter row is generated from the registry (`All` + unique categories).
- Views: **Library**, **Favorites**, **Recently viewed** (last 8, most recent first). Switching view resets category, search, and the pagination window.
- Text search matches name + category + description (case-insensitive substring).
- Empty result set renders a friendly empty state.
- Evidence: `js/ui/collection-view.js` (`getCurrentCollection`, `renderCollection`), `js/ui/event-controller.js`.

## FR-2 Progressive rendering & infinite scroll — ✅

- Initial window 24 cards; each batch adds up to 24 (`state.collection.pageSize`).
- Auto-load requires a genuine user scroll (wheel/touch/scroll delta > 8px after a 450ms arming delay) or navigation keys (PageDown/End/ArrowDown/Space); a sentinel IntersectionObserver (`rootMargin 650px/420px`) then triggers batches.
- Manual **Load more** button always available; announces "Load N more" with remaining count; without IntersectionObserver support the UI degrades to manual-only with an explanatory status.
- Feed semantics: grid is `role="feed"` with `aria-busy` during loads; summary + progressbar (`aria-valuemin/max/now`) + `aria-live` status line stay synchronized.
- Search/category/view changes reset the window and re-arm scroll detection.
- Growing the window appends only the new page; the cards already on screen are left in place, so Load more costs a flat ~4.5ms instead of growing with the total rendered, and existing animations do not restart. A filter, search or reorder still rebuilds (D-19).
- Evidence: `js/ui/infinite-scroll-controller.js`, `renderPagination` and `tryAppendVisibleTail` in `collection-view.js`.

## FR-3 Card layouts — ✅

- Masonry (default, responsive CSS columns) and aligned Grid; segmented toggle persisted under `loaderStudioCollectionLayout`.
- Card preview heights are stable per loader (deterministic hash of id, sized sm/md/lg/xl by category) so layout does not shift between renders.
- Evidence: `css/collection-layout.css`, `getCardSize` in `collection-view.js`, `storage.js`.

## FR-4 Performance: visible-only animation — ✅

- Card previews animate only while intersecting (±180px margin); offscreen cards get `is-offscreen` / `data-motion-visibility="paused"`.
- All motion pauses when the tab is hidden (`page-hidden` class + summary message).
- Summary pill reports `${total} animations · ${visible} visible active`, or paused variants.
- Evidence: `js/ui/visibility-controller.js`, `css/components.css`.

## FR-5 Inspector & customisation — ✅

- Inspector shows name, category, description, live large preview with light/dark/brand preview background.
- Preview settings: size 70–150%, speed Slow/Normal/Fast, accent colour, loading-label toggle.
- **Application state** controls: declarative per-loader schema (`range`/`select`, labels, suffixes, descriptions); values persist per loader in `state.controlValues` and apply to both Inspector preview and Full Preview. 71 loaders define controls.
- Inspector shell: pinned/unpinned, collapsible, closable; preferences persisted (`loaderStudioShell`); mobile uses backdrop overlay; Escape closes the active overlay.
- Evidence: `js/loader-controls.js`, `js/ui/inspector-view.js`, `js/ui/shell-controller.js`.

## FR-6 Snippet generation & copy — ✅

- Tabs: HTML / CSS / JS / All. HTML wraps loader markup in the `#appLoader` overlay with status semantics; CSS = `COMMON_OVERLAY_CSS` + loader CSS with the current accent rewritten into `--loader-accent`; JS = `LOADER_RUNTIME_JS` (`AppLoader.show(label)/hide()`, motion force/pause attributes) + optional per-loader API (76 loaders).
- Combined snippet is paste-and-run: includes a demo call so the animation shows immediately after pasting; production guidance shown in the Inspector tip.
- Copy uses the clipboard with toast confirmation; **Copy full snippet** and per-tab **Copy code** both covered.
- Verification harness: `qa/snippet-paste-smoke.html` mounts the exact combined snippet in an iframe and asserts the animation play state.
- Evidence: `js/snippet-service.js`, `loaders/shared.js`, `js/ui/preview-view.js`.

## FR-7 Full preview — ✅

- Modal dialog (`role="dialog"`, `aria-modal`) with the selected loader at full size, label, dedicated motion toggle, close by button/backdrop/Escape.
- Evidence: `index.html`, `js/ui/preview-view.js`, `event-controller.js`.

## FR-8 Theming & accent — ✅

- Light/dark app theme toggle persisted (`loaderStudioTheme`).
- Global accent: 8 preset swatches + custom colour input, persisted (`loaderStudioAccent`, validated `#RRGGBB`), applied to UI and loader previews, and injected into copied CSS. Reset control returns to `#3B63F3`.
- Evidence: `js/ui/accent-controller.js`, `storage.js`, `snippet-service.js`.

## FR-9 Motion control — ✅

- Global Pause/Resume in topbar and inside Full Preview; default is **running** for all loaders regardless of OS reduced-motion (deliberate product decision D-07, see DESIGN.md).
- Pausing pauses CSS animation play-state everywhere (cards, previews) and updates the summary.
- Evidence: `js/ui/motion-controller.js`, `css/components.css`.

## FR-10 Favorites & recents — ✅

- Star toggle on every card; Favorites view lists starred loaders; persisted as `loaderStudioFavorites`.
- Selecting a loader records it in recents (deduped, max 8), persisted as `loaderStudioRecent`.
- Evidence: `event-controller.js`, `storage.js`, `collection-view.js`.

## FR-11 Accessibility — ✅ (with product exception)

- Interaction targets ≥ 44×44 CSS px (established 2026-07-16).
- Loader motion markup is decorative (`aria-hidden`, `focusable="false"`); button loaders use real `disabled` + `aria-busy`; card preview stages are `inert`.
- Feed/progressbar/status semantics per FR-2; toast is `role="status"`; every pack passed an axe audit with zero violations.
- Product exception: animations run by default even under `prefers-reduced-motion` (D-07); explicit pause controls are the mitigation.

## FR-12 Persistence keys — ✅ (frozen contract)

`loaderStudioFavorites`, `loaderStudioRecent`, `loaderStudioTheme`, `loaderStudioAccent`, `loaderStudioShell`, `loaderStudioCollectionLayout` — all JSON/string values validated on read with safe fallbacks. Do not rename.

## FR-13 Runtime constraints — ✅

- No frameworks, no CDN, no build step, ES modules only (`<script type="module">`), works as static files.
- Fail-fast startup on missing DOM refs.

## FR-14 Shareable deep links — ✅

- `?loader=<id>` opens directly on that loader: the view resets to `library`, the category is set to **the target's own category**, the query is cleared, the pagination window grows in whole pages until the card exists, and the card is selected, scrolled into view and shown in the Inspector.
- Every subsequent selection mirrors the id into the URL with `replaceState`, so the address bar always matches the screen without adding a history entry per card (D-16).
- Unknown or malformed ids fall through to the default selection with no error.
- Scoping to the category rather than the whole library keeps the render window small: across all 555 loaders the initial render drops from a mean of 290 cards (max 576) to a mean of 41 (max 96, and 76 in practice because categories cap it). The visible set stays a contiguous prefix of the filtered collection, so Load more is unchanged; clicking **All** returns to the full library with the window reset to one page.
- Evidence: `applyDeepLink`, `revealLoader`, `syncLocation` in `js/ui/event-controller.js`.

## FR-15 Automated registry and snippet checks — ✅

- `node qa/registry-lint.mjs`: unique ids, `@keyframes` redefinition conflicts, unscoped generic selectors, required fields; non-zero exit on violation; prints the canonical category count table.
- `qa/snippet-paste-smoke.html`: pastes every loader's combined snippet into a blank page and asserts the overlay mounts and animates; supports `?autorun=1`, `&limit=`, `&category=`, and exposes `window.__smokeResult`. A full 555-loader run takes about 6 seconds.
- `node qa/run-smoke-ci.mjs`: runs the smoke page in headless Chrome over CDP and exits non-zero on failure. Both checks gate the GitHub Pages deploy.
- None of these introduces a dependency, preserving D-01 (D-20).

## NFR / not implemented

| Item | Status | Note |
| --- | --- | --- |
| PWA installability (manifest, service worker, offline) | ❌ Won't-do | Product decision D-14: this is a reference gallery, not an installable app. Audit warnings are expected. |
| Automated tests wired into CI | ✅ | Both checks run on every push to `main` and gate the deploy. Still zero-dependency (D-20). |
| Deep-link window cost for late loaders | ✅ | Resolved by T-208 / D-17 — see FR-14. Worst case measured at 76 cards and 1,704 DOM nodes, down from 504 cards and 9,699 nodes. |
