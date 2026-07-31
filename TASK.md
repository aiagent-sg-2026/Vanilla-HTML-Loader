# TASK.md — Loader Studio task board

Last verified against code: 2026-07-31. Statuses audited against the codebase, `review/`, and `knowledge-base/project-memory.md`. Historical task ids (`task_006`–`task_058`) come from the Code-MCP project tracker.

## Open

| ID | Task | Priority | Notes |
| --- | --- | --- | --- |
| T-201 | Initial full commit of the implementation + `.gitignore` | P1 | Only commit in repo is `b4715b4 Initial commit`; all 336 files are untracked. Blocks meaningful diffs/rollback in git. |
| T-202 | Fix stale static fallback text in `index.html` | P2 | Line 104 "30 animations running"; lines 142–143 "Showing 24 of 115 loaders", `aria-valuemax="125"`. Runtime JS overwrites them, so impact is no-JS/first-paint only. |
| T-206 | README + LICENSE | P2 | Repo has no top-level readme; document run instructions (static serve) and the add-a-pack workflow. |
| T-207 | Backfill project-memory for SVG packs 6–7 | P3 | `knowledge-base/project-memory.md` ends at SVG pack 5 (525); code is at 545. `review/svg-loader-pack-6/7-review.*` exist. |
| T-204 | PWA manifest + service worker decision | P3 | Repeat audit finding since 07-21; needs product decision first (installable tool vs reference gallery). |
| T-205 | Automated tests + CI | P3 | Candidates: registry invariants (unique ids, counts), snippet smoke (`qa/snippet-paste-smoke.html`), pagination/infinite-scroll behaviour. |

## Done — 2026-07-31 (this session)

| ID | Task |
| --- | --- |
| T-203 | Code-first audit; created DESIGN.md, SPEC.md, EPIC.md, ROADMAP.md, TASK.md; corrected stale `docs/modular-refactor.md` (claimed "30 loaders total"). Verified: 545 loaders, 15 categories, 0 duplicate ids, 71 loaders with controls, 76 with JS APIs. |

## Done — release history (mapped from Code-MCP tasks)

| Date (2026) | Tracker | Delivery |
| --- | --- | --- |
| 07-16 | — | Centralized motion control; 44×44px accessibility pass; auto-motion default (40 loaders) |
| 07-20 | task_006–009 | Functional loader SDK + visible-only animation + 5 Application loaders (45); Common packs 1–3 (55→75); DOM-API render refactor |
| 07-21 | task_011–013 | Common packs 5–7 (95→115) |
| 07-22 | task_014–021 | Progressive rendering; masonry layout; research pack + infinite scroll (125); Common pack 8 (135); sticky topbar fix; Common packs 9–11 (145→165) |
| 07-23 | task_022–032 | Common packs 12–13 (175→185); Common pack 14; CSS 3D pack 2; SVG packs 2–4 (195→215*); Bars packs 2–4 (245→265); duplicate-id fix |
| 07-24 | task_033–039 | Dots packs 2–3 (275→285); Spinners packs 2–6 (295→335) |
| 07-28 | task_040–051 | Shapes packs 1–4 (345→375); Buttons packs 1–3 (385→405); Text packs 1–5 (415→455) |
| 07-28/29 | task_052–058 | CSS 3D packs 3–8 (465→515); SVG packs 5–7 (525→545) |

\* Intermediate totals are as narrated in `knowledge-base/project-memory.md`; the authoritative current total (545) is computed from `loaders/index.js`.

## Watch

- Pre-existing, accepted: host iframe sandbox warning in QA harness; PWA installability audit warnings (until T-204 is decided).
- Registry invariant to re-check whenever a pack lands: unique loader ids across all 545+ entries (`loaders/index.js`).
