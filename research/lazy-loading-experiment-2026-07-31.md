# Experiment — is per-category lazy loading worth it? (T-209)

Date: 2026-07-31. Registry at 555 loaders / 150 modules.

## Question

`loaders/index.js` statically imports every category barrel, so a visit downloads and evaluates the whole registry before anything renders. T-209 asked whether deferring that per category is worth breaking D-02 (the barrel-module SSOT registry).

## What was measured

Payload composition, computed from the registry itself:

| Part | Size | Share |
| --- | --- | --- |
| Metadata (id, name, category, description, tech) | 108 KB | 12.5% |
| Loader CSS | 582 KB | 68% |
| Loader markup | 140 KB | 16% |
| Copyable JS APIs | 28 KB | 3% |
| **Total** | **858 KB** | |

Transfer cost of `loaders/` (150 modules, 988 KB on disk):

| Encoding | Size |
| --- | --- |
| Raw | 988 KB |
| gzip (what GitHub Pages serves) | 239 KB |
| brotli | 198 KB |

Runtime cost in the browser, warm cache on localhost:

| Step | Measured |
| --- | --- |
| Re-import of the whole registry (parse + evaluate) | 9 ms |
| Installing all 555 loaders' CSS — 584 KB, 4,160 rules | 1.2–1.5 ms |
| Installing only the first 24 loaders' CSS — 23 KB, 166 rules | 0.6–1.1 ms |
| DOMContentLoaded | 326 ms |
| Wall time across the 146 loader-module requests | 168 ms |

## Findings

**The CPU cost of eager loading is about 10 ms.** Parsing the entire registry costs 9 ms and installing every loader's CSS costs a little over 1 ms. Deferring the CSS — the intuitively expensive part at 68% of the payload — saves roughly **0.6 ms**. The initial hypothesis that the 584 KB stylesheet was the bottleneck is simply wrong; 4,160 rules is small work for a CSS engine.

**The real cost is network, not CPU:** 239 KB gzipped across 150 requests, all of which must arrive before the app renders anything, because `app.js` cannot start until `loaders/index.js` resolves. Over HTTP/2 on a good connection that is unremarkable. On a slow mobile connection it is the dominant part of time-to-first-render.

**The ceiling is high but the price is structural.** An ideal boot would ship metadata plus the first 24 cards — about 138 KB instead of 858 KB, an 84% reduction. Reaching it requires splitting every loader into a metadata record and a payload record, because search, the category filter and deep-link resolution all need *some* field from *every* loader before the first render. That breaks the one-object-per-loader contract that keeps packs reviewable, roughly doubles the file count, and makes `loaders/index.js` asynchronous for every consumer.

## Recommendation

**Do not implement per-category lazy loading.** The measurable win on a normal connection is ~10 ms of CPU and some network parallelism; the cost is the registry structure that D-02 exists to protect and that every pack workflow depends on.

Revisit only if one of these changes:

- The registry roughly doubles again (~1,000 loaders / 500 KB gzipped), or
- Mobile time-to-first-render on a real slow connection is measured and found unacceptable — this experiment used a warm localhost cache and did **not** measure a throttled cold load, which is its main gap.

If it is revisited, target the request count and the render-blocking dependency, not the CSS.
