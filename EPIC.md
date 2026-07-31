# EPIC.md — Loader Studio epics

Last verified against code: 2026-07-31. Task-level detail lives in [TASK.md](TASK.md); timeline in [ROADMAP.md](ROADMAP.md).

| Epic | Title | Status |
| --- | --- | --- |
| E1 | Studio shell & modular architecture | ✅ Done |
| E2 | Collection performance at scale | ✅ Done |
| E3 | Loader library expansion (30 → 545) | ✅ Done (open-ended: new packs welcome) |
| E4 | Accessibility & motion policy | ✅ Done |
| E5 | Quality gates & review governance | ✅ Done (manual), automation open under E7 |
| E6 | Documentation & repo hygiene | 🟡 In progress |
| E7 | Productionisation (PWA, tests/CI) | ⬜ Not started |

## E1 — Studio shell & modular architecture ✅

Split the original single-file app into `index.html` + 8 CSS modules + services + `js/ui/` controllers + barrel-module loader registry. Includes sidebar/inspector shell with persisted preferences, sticky topbar stack (`sticky-shell.css`, D-09), global accent palette, dark mode, SVG icon library.
Acceptance: no frameworks/build step; fail-fast boot; original localStorage keys preserved. All met.

## E2 — Collection performance at scale ✅

Make 500+ simultaneously-animated cards viable on mobile.
Delivered: progressive rendering (24/batch, D-04), sentinel-based infinite scroll with accessible manual fallback (D-05), visible-only animation + hidden-tab pause (D-06), masonry/grid layouts with deterministic card sizes (D-08).
Acceptance evidence: mobile initial document height 26,907px → 6,106px; axe zero violations; Chromium/Firefox/WebKit QA.

## E3 — Loader library expansion ✅ (open-ended)

Grow the registry from 30 (post-refactor) to **545** loaders in 15 categories through 10-loader packs, each with its own QA + review record in `review/`.
Highlights: Common UI production packs 1–14, Spinners packs 2–6, CSS 3D packs 2–8, SVG packs 2–7, Text packs 1–5, Bars 2–4, Dots 2–3, Shapes 1–4, Buttons 1–3, research-driven pack (Material/Ant/Bootstrap/MDN patterns), functional Application loaders with JS APIs (AI streaming, ERP transaction, bulk import, network retry, dashboard skeleton).
Registry invariants: unique ids (verified: 0 duplicates), category barrels as SSOT, packs split A/B, per-loader controls schema where interactivity matters (71 loaders), copyable JS APIs (76 loaders).

## E4 — Accessibility & motion policy ✅

44×44px minimum interaction targets; decorative motion markup (`aria-hidden`, `focusable=false`, `inert` preview stages); real `disabled`/`aria-busy` button semantics; feed/progressbar/live-region semantics for the infinite collection; axe zero-violation bar per pack.
Deliberate exception D-07: motion runs by default even under OS reduced-motion; explicit Pause/Resume is the mitigation.

## E5 — Quality gates & review governance ✅ (manual)

Per-pack pipeline: static validation → desktop/mobile interaction QA → responsive/network checks → axe audit → 3-browser QA → focused code review. 144 review artifacts in `review/`, audit log in `audit-log/`, research notes in `research/`, release narratives in `knowledge-base/`. Snippet integrity harness: `qa/snippet-paste-smoke.html`.
Remaining risk: the pipeline is human/agent-driven, not CI-enforced → E7.

## E6 — Documentation & repo hygiene 🟡

Done (2026-07-31): DESIGN/SPEC/EPIC/ROADMAP/TASK created from a code-first audit; `docs/modular-refactor.md` corrected (was claiming "30 loaders total").
Open: initial git commit of the entire implementation (T-201), README + LICENSE + .gitignore (T-206), backfill `knowledge-base/project-memory.md` for SVG packs 6–7 (T-207), fix stale static fallback literals in `index.html` (T-202).

## E7 — Productionisation ⬜

Candidate scope, not yet committed: PWA manifest + service worker + offline (repeat audit finding, T-204); automated regression tests and CI enforcement of the E5 gate (T-205). Needs a product decision on whether Loader Studio is a hosted tool (PWA worth it) or a reference gallery (skip).
