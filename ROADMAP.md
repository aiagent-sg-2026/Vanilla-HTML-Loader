# ROADMAP.md — Loader Studio

Last verified against code: 2026-08-04. Epics in [EPIC.md](EPIC.md), tasks in [TASK.md](TASK.md).

## Delivered

| When (2026) | Milestone | Collection size |
| --- | --- | --- |
| ≤ 07-16 | Modular refactor of single-file app; centralized motion control; 44×44px accessibility pass; auto-motion default | 40 |
| 07-20 | Functional loader SDK (controls schema + JS APIs), visible-only animation; Application loaders; Common packs 1–3; DOM-API render refactor (security review) | 75 |
| 07-21 | Common packs 4–7 | 115 |
| 07-22 | Progressive rendering (24/batch); Pinterest masonry + grid toggle; research-driven pack + automatic infinite scroll; Common pack 8; sticky topbar fix; Common packs 9–11 | 165 |
| 07-23 | Common packs 12–14; CSS 3D pack 2; SVG packs 2–4; Bars packs 2–4; duplicate-id fix (`order-price-refresh-progress`) | ~265 |
| 07-24 | Dots packs 2–3; Spinners packs 2–6 | 335 |
| 07-28 | Shapes packs 1–4; Buttons packs 1–3; Text packs 1–5; CSS 3D pack 3 | 465 |
| 07-29 | CSS 3D packs 4–8; SVG packs 5–7 | **545** |

Stable published URL: `https://content.gmb01.xyz/share/project_69be700d-ca6a-4def-8b2a-6e05eeea7d0d/index.html` (persistent Code-MCP project `project_69be700d-…` is the release authority; this git repo mirrors it).

### 2026-07-31 — governance, performance and sharing round

Product positioning settled: Loader Studio is a **reference gallery**, not an installable app (D-14).

| Commit | Delivery |
| --- | --- |
| C1 | Baseline commit: 341 files under version control + `.gitignore` (T-201) |
| C2 | `qa/registry-lint.mjs` — registry invariants, self-tested against a poisoned registry (T-205 part 1) |
| C3 | Stale static counts in `index.html` corrected to 545 (T-202) |
| C4 | Favorites/selection update in place, search debounced 150ms — 8 keystrokes cause 1 render instead of 8 |
| C5 | `?loader=` deep links with `replaceState` (FR-14, D-16) |
| C6 | Snippet paste smoke test generalised from 1 loader to all 545 |
| C7 | README + MIT LICENSE + doc sync (T-206) |
| C8 | GitHub Pages auto-deploy on push to `main`, gated on the registry lint (E8) |
| C9 | SVG Pack 8: 10 new inline SVG loaders (SVG 65 → 75, collection 545 → **555**) |
| C10 | T-208: deep links scope to the target's category — initial render mean 290 → 41 cards, worst 576 → 96 (D-17) |
| C11 | T-207 project-memory backfill for SVG packs 6–7; T-209 lazy-loading experiment measured and closed |
| C12 | T-210: preview fragments cached and window growth appends instead of rebuilding — Load more now flat ~4.5ms (D-19) |
| C13 | T-211: smoke run 9 minutes → 6.3s for all 555 loaders by probing the iframe on load instead of waiting on a throttled timer |
| C14 | T-205: snippet smoke test enforced in CI over CDP with zero dependencies — both checks now gate the deploy (D-20) |
| C15 | Dots Pack 4: 10 new CSS-only Dots loaders (Dots 30 → 40, collection 555 → **565**) |
| C16 | SVG Pack 9: 10 new inline SVG loaders (SVG 75 → 85, collection 565 → **575**) |
| C17 | SVG Pack 10: 10 new inline SVG loaders (SVG 85 → 95, collection 575 → **585**) |
| C18 | SVG Pack 11: 10 new inline SVG loaders (SVG 95 → 105, collection 585 → **595**) |
| C19 | New **Charts** category with 10 data-visualisation loaders (16 categories, collection 595 → **605**) |
| C20 | New **Maps** category with 10 location loaders (17 categories, collection 605 → **615**) |
| C21 | **Vite build tooling** — `npm run dev` / `npm run build`; supersedes D-01; 146 requests → 3, 277 KB → ~178 KB gzipped (D-21, D-22) |

### 2026-08-04 — continued expansion pass

| Commit | Delivery |
| --- | --- |
| C22 | Added 10 category-expansion loaders and updated the root docs snapshot to **1062 loaders in 17 categories** (`Design`/`Spec`/`EPIC`/`ROADMAP`/`TASK`/`README`). |
| C23 | Added 10 more category-expansion loaders; root docs snapshot updated to **1072 loaders in 17 categories**. |
| C24 | Added 10 more category-expansion loaders; root docs snapshot updated to **1082 loaders in 17 categories**. |
| C25 | Added 10 more category-expansion loaders; root docs snapshot updated to **1092 loaders in 17 categories**. |
| C26 | Added 10 more category-expansion loaders; root docs snapshot updated to **1102 loaders in 17 categories**. |

### Live

The site is deployed and serving at <https://yapweijun1996.github.io/Vanilla-HTML-Loader/>. Current codebase verification is 2026-08-04: **1102 loaders**, 17 category filters, deep links and category scoping remain supported.

## Now

Further loader packs are in progress; automated checks continue to gate the deploy (`lint:registry`, snippet smoke, and snippet parity).

## Later

2. Further loader packs (E3 is open-ended) — pattern is established: 10 loaders, A/B modules, barrel registration, lint + smoke + full QA gate, review record.

## Closed — won't do

- **T-209** Per-category lazy loading. Closed 2026-07-31 after measurement — see [research/lazy-loading-experiment-2026-07-31.md](research/lazy-loading-experiment-2026-07-31.md).
- **T-204** PWA manifest / service worker / offline. Closed 2026-07-31 by D-14. Installability warnings from audits are expected and should not be re-filed.

## Blockers

None. Historical notes: KB-MCP was temporarily unavailable around 07-29 (project-local notes were used instead); local workspace server QA once timed out (published-URL QA used as fallback). Neither blocks current work.
