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
| T-207 | Backfill project-memory for SVG packs 6–7 | P2 | `knowledge-base/project-memory.md` ends at SVG pack 5 (525); code is at 545. `review/svg-loader-pack-6/7-review.*` exist. Alternative: declare `review/` + code the only records going forward. |
| T-208 | Reduce deep-link window cost for late loaders | P2 | Measured 2026-07-31: `?loader=` at collection position 500 renders 504 cards, 59k px document, 354ms load, 9,699 DOM nodes — against a 24-card baseline of 3.3k px, 135ms, 622 nodes. Visible-only animation holds the animation cost flat (7 running), so this is DOM weight. Any fix must keep Load-more contiguity. |
| T-205 | CI enforcement of the two checks (E8) | P3 | The checks exist and are dependency-free; wiring the snippet smoke page into CI needs a headless driver, which would be the project's first dev dependency — decide against D-01 first. |
| T-209 | Per-category lazy loading of the registry | P3 | ~1.3MB of modules and 571KB of loader CSS load eagerly. Measure first; experiment against D-02. |
| T-210 | Cache parsed card fragments by loader id | P3 | `parseTrustedMarkup` re-parses identical markup on every render; cache + `cloneNode(true)`. Verify cloned nodes keep animation and `inert` behaviour. |
| T-211 | Smoke harness slows down as its results table grows | P3 | A full 545 run starts at ~1s per loader and degrades to ~5s once several hundred rows exist, because every `insertRow` relayouts a large table. Batch the rows, virtualise them, or only render failures plus a running tally. Cosmetic — the verdict is unaffected. |

## Closed — won't do

| ID | Task | Decision |
| --- | --- | --- |
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

Intermediate totals are as narrated in `knowledge-base/project-memory.md`; the authoritative current total (545) comes from `qa/registry-lint.mjs`.

## Watch

- Determinate progress loaders (e.g. `labelled-progress-bar`, `compact-progress-ring`) legitimately have no CSS animation — they render a percentage driven by their JS API. The snippet smoke test derives its expectation from each loader's own CSS rather than assuming every loader animates.
- Pre-existing, accepted: host iframe sandbox warning in the QA harness; PWA installability warnings (expected under D-14).
