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

## Now (highest value, small effort)

1. **T-201** Commit the implementation to git (everything except the initial commit is untracked) with a `.gitignore`; the repo currently cannot serve as rollback or diff history.
2. **T-202** Fix stale static fallback literals in `index.html` (hero "30 animations running", "Showing 24 of 115 loaders", `aria-valuemax="125"`).
3. **T-206** Add README (what it is, how to run, how to add a pack) and LICENSE.

## Next

4. **T-207** Backfill `knowledge-base/project-memory.md` for SVG packs 6–7 so the narrative record matches the code (or explicitly declare `review/` + code as the only records going forward).
5. **T-203** Keep DESIGN/SPEC/EPIC/ROADMAP/TASK refreshed at each release (established 2026-07-31; re-verify counts against `loaders/index.js`).

## Later / needs product decision

6. **T-204** PWA: manifest + service worker + offline support — only if Loader Studio is positioned as an installable tool rather than a reference gallery.
7. **T-205** Automated regression tests (snippet smoke, registry invariants like unique ids/category counts, pagination behaviour) and CI to enforce the per-pack quality gate.
8. Further loader packs (E3 is open-ended) — pattern is established: 10 loaders, A/B modules, barrel registration, full QA gate, review record.

## Blockers

None hard. Historical notes: KB-MCP was temporarily unavailable around 07-29 (project-local notes were used instead); local workspace server QA once timed out (published-URL QA used as fallback). Neither blocks current work.
