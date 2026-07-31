# ROADMAP.md — Loader Studio

Last verified against code: 2026-07-31. Epics in [EPIC.md](EPIC.md), tasks in [TASK.md](TASK.md).

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

## Now

1. **T-212** Enable **Settings → Pages → Source: GitHub Actions**, then confirm the first deployment served. The workflow is committed but has never run, and without that setting the deploy job fails.
2. **T-207** Backfill `knowledge-base/project-memory.md` for SVG packs 6–7 so the narrative record matches the code — or explicitly declare `review/` + code as the only records going forward.

## Next

3. **T-205** CI enforcement of the snippet smoke test (E8). The registry lint already gates deploys; the smoke page needs a headless browser, which would be the first dev dependency — decide against D-01.

## Later

4. **T-209** Per-category lazy loading of the registry (~1.3MB of modules and 571KB of loader CSS load eagerly). Measure first; treat as an experiment against D-02.
5. **T-210** Cache parsed card fragments by loader id and clone them instead of re-parsing markup on every render.
6. **T-211** Smoke harness slows as its results table grows (~1s → ~5s per loader).
7. Further loader packs (E3 is open-ended) — pattern is established: 10 loaders, A/B modules, barrel registration, lint + smoke + full QA gate, review record.

## Closed — won't do

- **T-204** PWA manifest / service worker / offline. Closed 2026-07-31 by D-14. Installability warnings from audits are expected and should not be re-filed.

## Blockers

None. Historical notes: KB-MCP was temporarily unavailable around 07-29 (project-local notes were used instead); local workspace server QA once timed out (published-URL QA used as fallback). Neither blocks current work.
