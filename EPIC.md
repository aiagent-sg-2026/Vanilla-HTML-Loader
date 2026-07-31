# EPIC.md — Loader Studio epics

Last verified against code: 2026-07-31. Task-level detail lives in [TASK.md](TASK.md); timeline in [ROADMAP.md](ROADMAP.md).

| Epic | Title | Status |
| --- | --- | --- |
| E1 | Studio shell & modular architecture | ✅ Done |
| E2 | Collection performance at scale | ✅ Done |
| E3 | Loader library expansion (30 → 575) | ✅ Done (open-ended: new packs welcome) |
| E4 | Accessibility & motion policy | ✅ Done |
| E5 | Quality gates & review governance | ✅ Done — automated checks landed 2026-07-31 |
| E6 | Documentation & repo hygiene | ✅ Done |
| E7 | Sharing & distribution | ✅ Done — deep links shipped; PWA closed won't-do |
| E8 | CI enforcement & deployment | ✅ Done — both checks gate the deploy |

## E1 — Studio shell & modular architecture ✅

Split the original single-file app into `index.html` + 8 CSS modules + services + `js/ui/` controllers + barrel-module loader registry. Includes sidebar/inspector shell with persisted preferences, sticky topbar stack (`sticky-shell.css`, D-09), global accent palette, dark mode, SVG icon library.
Acceptance: no frameworks/build step; fail-fast boot; original localStorage keys preserved. All met.

## E2 — Collection performance at scale ✅

Make 500+ simultaneously-animated cards viable on mobile.
Delivered: progressive rendering (24/batch, D-04), sentinel-based infinite scroll with accessible manual fallback (D-05), visible-only animation + hidden-tab pause (D-06), masonry/grid layouts with deterministic card sizes (D-08).
Acceptance evidence: mobile initial document height 26,907px → 6,106px; axe zero violations; Chromium/Firefox/WebKit QA.

## E3 — Loader library expansion ✅ (open-ended)

Grow the registry from 30 (post-refactor) to **575** loaders in 15 categories through 10-loader packs, each with its own QA + review record in `review/`.
Highlights: Common UI production packs 1–14, Spinners packs 2–6, CSS 3D packs 2–8, SVG packs 2–9, Text packs 1–5, Bars 2–4, Dots 2–3, Shapes 1–4, Buttons 1–3, research-driven pack (Material/Ant/Bootstrap/MDN patterns), functional Application loaders with JS APIs (AI streaming, ERP transaction, bulk import, network retry, dashboard skeleton).
Registry invariants: unique ids (verified: 0 duplicates), category barrels as SSOT, packs split A/B, per-loader controls schema where interactivity matters (71 loaders), copyable JS APIs (76 loaders).

## E4 — Accessibility & motion policy ✅

44×44px minimum interaction targets; decorative motion markup (`aria-hidden`, `focusable=false`, `inert` preview stages); real `disabled`/`aria-busy` button semantics; feed/progressbar/live-region semantics for the infinite collection; axe zero-violation bar per pack.
Deliberate exception D-07: motion runs by default even under OS reduced-motion; explicit Pause/Resume is the mitigation.

## E5 — Quality gates & review governance ✅

Per-pack pipeline: registry lint → desktop/mobile interaction QA → responsive/network checks → axe audit → 3-browser QA → focused code review. 144 review artifacts in `review/`, audit log in `audit-log/`, research notes in `research/`, release narratives in `knowledge-base/`.

Automation landed 2026-07-31, both zero-dependency so D-01 holds:
- `qa/registry-lint.mjs` — the invariants a shared-CSS registry can break silently: duplicate ids, `@keyframes` redefined with a different body, unscoped generic selectors, missing fields. Self-tested against a poisoned registry so it cannot quietly always pass.
- `qa/snippet-paste-smoke.html` — every loader's combined snippet pasted into a blank page, asserting the overlay mounts and animates. Generic probe, no per-loader selectors.

Remaining risk: both are run by hand, not enforced → E8.

## E6 — Documentation & repo hygiene ✅

DESIGN/SPEC/EPIC/ROADMAP/TASK created from a code-first audit; `docs/modular-refactor.md` corrected (was claiming "30 loaders total"); README (English + Chinese summary) and MIT LICENSE added; `.gitignore` added and the full implementation brought under version control as a baseline commit; stale static counts in `index.html` fixed.

Standing rule, recorded in TASK.md: any change ships with its doc updates in the same round, and every count quoted in a doc is copied from `qa/registry-lint.mjs` output — never hand-counted.

The one gap in the narrative record — SVG packs 6 and 7 shipping without a project-memory entry — was backfilled on 2026-07-31 from surviving evidence, with the reconstructed entries explicitly claiming no QA they cannot evidence (T-207).

## E7 — Sharing & distribution ✅

Delivered: `?loader=<id>` deep links with `replaceState` mirroring (D-16, FR-14), making any loader shareable and bookmarkable.

Closed as won't-do: PWA manifest, service worker and offline support. Product decision D-14 — Loader Studio is a reference gallery whose visitors browse, copy a snippet and leave, so installability buys nothing. PWA audit warnings are expected output, not defects.

The initial cost of a deep link was cut in a follow-up (T-208, D-17): scoping the view to the target's own category rather than the whole library takes the initial render from a mean of 290 cards to 41, worst case 576 to 96, without breaking Load-more contiguity.

## E8 — CI enforcement & deployment ✅

Delivered 2026-07-31: `.github/workflows/deploy.yml` publishes the site to GitHub Pages on every push to `main`, gated on `qa/registry-lint.mjs` exiting 0. A registry violation now blocks the deploy rather than shipping. Only runtime files are published (`index.html`, `css/`, `js/`, `loaders/`, `qa/`) — 175 files instead of the repo's 341.

Node is pinned to 24 because the registry is ESM in `.js` files with no `package.json`; module detection is on by default from 22.7 and the lint dies on Node 20. Verified by running the lint locally with `--no-experimental-detect-module`, which reproduces the failure.

The snippet smoke test is enforced too (T-205). The obstacle was that driving a browser normally means Playwright or Puppeteer — this repository's first dev dependency. `qa/run-smoke-ci.mjs` avoids that: Node's built-in HTTP server, the global `WebSocket` Node has had since 22, and the Chrome CI images already ship are enough to drive the page over CDP. All 575 loaders are checked in about 6 seconds, and D-01 survives intact (D-20).
