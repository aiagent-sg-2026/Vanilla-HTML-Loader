# TASK.md — Loader Studio task board

Last verified against code: 2026-07-31. Statuses audited against the codebase, `review/`, and `knowledge-base/project-memory.md`. Historical task ids (`task_006`–`task_058`) come from the Code-MCP project tracker.

## Working rules

1. **Code is the source of truth.** Every doc states the date it was last verified against the code.
2. **Docs ship with the change.** Any pack or feature updates its affected docs in the same round — never "later".
3. **Never hand-count.** Every loader/category number quoted in a doc is copied from `node qa/registry-lint.mjs` output.
4. **Both checks before a release.** `node qa/registry-lint.mjs` must exit 0, and `qa/snippet-paste-smoke.html` must show no unexplained failures.

## Open

| ID | Task | Priority | Notes |
| --- | --- | --- | --- |

## Closed — won't do

| ID | Task | Decision |
| --- | --- | --- |
| T-209 | Per-category lazy loading of the registry | Closed 2026-07-31 by **D-18** after measurement — see [research/lazy-loading-experiment-2026-07-31.md](research/lazy-loading-experiment-2026-07-31.md). Eager loading costs about 10 ms of CPU (9 ms registry parse, ~1.2 ms to install all 584 KB of loader CSS); deferring the CSS saves ~0.6 ms. The real cost is 239 KB gzipped over 150 render-blocking requests, and reaching the 84% ceiling means splitting every loader into metadata and payload, which breaks D-02. Revisit only if the registry doubles or a throttled mobile cold load proves unacceptable. |
| T-204 | PWA manifest, service worker, offline | Closed 2026-07-31 by **D-14**: Loader Studio is a reference gallery, not an installable app. PWA audit warnings are expected output and should not be re-filed as defects. |

## Done — 2026-07-31

| ID / Commit | Task |
| --- | --- |
| T-203 | Code-first audit; created DESIGN.md, SPEC.md, EPIC.md, ROADMAP.md, TASK.md; corrected stale `docs/modular-refactor.md` (claimed "30 loaders total"). Verified 545 loaders, 15 categories, 0 duplicate ids, 71 with controls, 76 with JS APIs. |
| T-201 / C1 | Baseline commit: 341 files under version control, plus a minimal `.gitignore`. Git history starts here; earlier releases live in Code-MCP backups. |
| T-205 (part) / C2 | `qa/registry-lint.mjs`: unique ids, `@keyframes` redefinition conflicts, unscoped generic selectors, required fields, canonical category table. Non-zero exit on violation. Self-tested against a poisoned registry so it cannot silently always pass. |
| T-202 / C3 | Stale static counts in `index.html` corrected to 545 (hero pill, pagination summary, `aria-valuemax`). |
| C4 | Favorites and selection now update in place; only Favorites (membership) and Recently viewed (order) re-render. Search debounced at 150ms. Verified: card node identity preserved across a favorite toggle and a selection change, exactly one `is-selected`/`aria-current`, and 8 keystrokes produce 1 render instead of 8. |
| FR-14 / C5 | `?loader=<id>` deep links; `replaceState` mirroring; unknown ids fall back safely. Verified at collection position 500, across three consecutive selections (history length unchanged), and against an encoded `<script>` id. |
| C6 | Snippet paste smoke test generalised from one hardcoded loader to the whole registry, with a generic animation probe, per-loader timeout, category filter and `?autorun=1`. Fixed a harness defect where `requestAnimationFrame` never fired in a hidden tab and reported healthy loaders as timeouts. |
| T-206 / C7 | README (English + Chinese summary) and MIT LICENSE; all five root docs synced. |
| C8 | GitHub Pages auto-deploy on push to `main`, gated on the registry lint. Staging verified locally: 175 files / 1.5MB, every asset `index.html` references present, the staged copy boots with 545 loaders and a working deep link, no console errors. |
| C17 | SVG Pack 10 — 10 inline SVG loaders (Ferris Wheel, Water Wheel, Vinyl Spin, Balance Scale, Combination Lock, Semaphore Flags, Bellows Breath, Snowflake Grow, Paper Plane, Thermometer Rise). SVG 85 to 95, collection 575 to 585. |
| C16 | SVG Pack 9 — 10 inline SVG loaders (Sundial Shadow, Suspension Bridge, Galaxy Arms, Crane Lift, Fountain Jets, Lighthouse Beam, Zipper Close, Anemometer Cups, Hourglass Turn, Domino Topple). SVG 75 to 85, collection 565 to 575; SVG is now the largest category. |
| C15 | Dots Pack 4 — 10 CSS-only Dots loaders (Metronome Arc, Carousel Swap, Gravity Well, Relay Baton, Scatter Gather, Conveyor Belt, Newton Cradle, Radar Sweep, Stack Tower, Morse Signal). Dots 30 → 40, collection 555 → 565. First pack to go through the fully automated gate. |
| T-212 | GitHub Pages deployment confirmed live at https://yapweijun1996.github.io/Vanilla-HTML-Loader/ — 565 loaders serving, deep links and category scoping working, 277 KB across 146 requests on a cold visit. |
| T-205 / C14 | Snippet smoke test now runs in CI and gates the deploy, without adding a dependency. `qa/run-smoke-ci.mjs` serves the repo from `node:http`, launches the Chrome already present on the runner, and drives the page over CDP using Node's global `WebSocket` (D-20). Verified locally: 555/555 in 5.6s exit 0, and exit 1 with the offending loader named when a deliberate regression suppressed animations inside the overlay. |
| T-211 / C13 | Snippet smoke run cut from about 9 minutes to 6.3 seconds for all 555 loaders. The cause was not the results table: the injected probe waited on a `setTimeout`, and hidden-tab timer clamping turned a nominal 200ms into ~1000ms per loader. The parent now reads the srcdoc iframe directly on its load event — no timer, no postMessage, and nothing injected into the page under test. Pass rows are also batched to the end. All six failure modes re-verified against deliberately broken pages, plus healthy animated and determinate controls. |
| T-210 / C12 | Card preview fragments cached per loader and cloned (registry-wide parse 24.4ms → 4.1ms), and growing the window now appends the new page instead of rebuilding the grid (Load more 7.6→14.2ms growing → flat ~4.5ms; deep link to the last CSS 3D loader 258ms → 167ms). Verified clones keep `inert`, `aria-hidden` and the button→div preview transform across three renders, and that filter, search, empty state, Favorites unstar and Recently-viewed reorder all still rebuild (D-19). |
| T-207 / C11 | Backfilled `knowledge-base/project-memory.md` for SVG packs 6 and 7 from surviving evidence — the pack modules, their registration, and the static review reports. Both entries are labelled reconstructed and deliberately claim no browser, accessibility or cross-browser QA, because no such record survives. Invariants re-verified today: all 20 loaders decorative, accent/speed aware, no shared defs ids. |
| T-209 / C11 | Lazy-loading experiment run and written up; closed as not worth the structural cost. |
| T-208 / C10 | Deep links now scope to the target's own category (D-17). Initial render across all 555 loaders drops from a mean of 290 cards / max 576 to a mean of 41 / max 96 — measured worst case 76 cards and 1,704 DOM nodes for the last CSS 3D loader, against 504 cards and 9,699 nodes before. Load-more contiguity verified as a true prefix; **All** resets to 24. Also hardened the deep-link scroll with a bounded verify-and-retry after finding it can land unscrolled on a cold load. |
| C9 | SVG Pack 8 — 10 inline SVG loaders (Metronome Swing, Sonar Ping, Typewriter Carriage, Origami Fold, Funnel Drip, Turnstile Gate, Kite Tail, Piston Cycle, Ripple Stones, Elevator Floors). SVG 65 → 75, collection 545 → 555. First pack gated by the automated checks. |
| — | Snippet smoke coverage completed across all 545 loaders, zero failures. Assembled from the main run (indices 0–489) plus full category runs for SVG 65/65, Skeletons 53/53, Progress 19/19, Application 5/5, Matrix 3/3, Holographic 2/2, Operations 1/1 — the original single continuous run was lost when its tab closed at 490/545. |

## Done — release history (mapped from Code-MCP tasks)

| Date (2026) | Tracker | Delivery |
| --- | --- | --- |
| 07-16 | — | Centralized motion control; 44×44px accessibility pass; auto-motion default (40 loaders) |
| 07-20 | task_006–009 | Functional loader SDK + visible-only animation + 5 Application loaders (45); Common packs 1–3 (55→75); DOM-API render refactor |
| 07-21 | task_011–013 | Common packs 5–7 (95→115) |
| 07-22 | task_014–021 | Progressive rendering; masonry layout; research pack + infinite scroll (125); Common pack 8 (135); sticky topbar fix; Common packs 9–11 (145→165) |
| 07-23 | task_022–032 | Common packs 12–13 (175→185); Common pack 14; CSS 3D pack 2; SVG packs 2–4; Bars packs 2–4 (245→265); duplicate-id fix |
| 07-24 | task_033–039 | Dots packs 2–3 (275→285); Spinners packs 2–6 (295→335) |
| 07-28 | task_040–051 | Shapes packs 1–4 (345→375); Buttons packs 1–3 (385→405); Text packs 1–5 (415→455) |
| 07-28/29 | task_052–058 | CSS 3D packs 3–8 (465→515); SVG packs 5–7 (525→545) |

Intermediate totals are as narrated in `knowledge-base/project-memory.md`; the authoritative current total (585) comes from `qa/registry-lint.mjs`.

## Watch

- Determinate progress loaders (e.g. `labelled-progress-bar`, `compact-progress-ring`) legitimately have no CSS animation — they render a percentage driven by their JS API. The snippet smoke test derives its expectation from each loader's own CSS rather than assuming every loader animates.
- Pre-existing, accepted: host iframe sandbox warning in the QA harness; PWA installability warnings (expected under D-14).
