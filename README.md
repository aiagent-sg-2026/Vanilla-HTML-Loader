# Loader Studio

A zero-dependency gallery of **918 loading animations** across 17 categories. Browse them live, tune size, speed, accent colour and per-loader application state, then copy production-ready HTML, CSS and JavaScript you can paste straight into any page.

No runtime framework. No CDN. The snippets you copy are plain HTML, CSS and JavaScript that run anywhere with no toolchain — and every release proves the build does not alter a single byte of them.

## Run it

```bash
npm install
npm run dev
```

Then open <http://localhost:8765>. Editing a loader hot-reloads.

To produce the static site:

```bash
npm run build     # -> dist/
npm run preview   # serve dist/ locally
```

Deep link straight to a loader by appending its id:

```
http://localhost:8765/?loader=svg-magnetic-field
```

## Using a snippet

Pick a loader, open **Copy full snippet**, and paste the result into your page. What you get is a fixed-position overlay plus a small runtime:

```js
AppLoader.show('Saving…');
AppLoader.hide();
```

The pasted snippet ends with a demo call so the animation is visible immediately. Delete that last call before shipping.

## Repository layout

| Path | Contents |
| --- | --- |
| `index.html` | Application shell and Vite entry point — static structure only |
| `css/` | Design tokens, layout, components, responsive rules, sticky shell |
| `js/` | State, storage, snippet generation, per-loader control schemas |
| `js/ui/` | One controller per concern: collection, inspector, preview, shell, accent, motion, visibility, infinite scroll |
| `loaders/` | The registry: `index.js` composes per-category barrels, which compose 10-loader pack modules |
| `qa/` | `registry-lint.mjs`, the snippet paste smoke test, the snippet parity check, and the shared headless-Chrome plumbing |
| `review/`, `audit-log/`, `research/`, `knowledge-base/` | Per-release QA records, decisions and research notes |

Architecture and the durable decisions behind it: [DESIGN.md](DESIGN.md). Feature status: [SPEC.md](SPEC.md). Work in flight: [ROADMAP.md](ROADMAP.md), [TASK.md](TASK.md), [EPIC.md](EPIC.md).

## Adding a loader pack

The registry is the source of truth for everything the docs claim. The established pattern:

1. Add ten loaders as two modules, `<category>-pack-<n>-a.js` and `-b.js` (roughly five each).
2. Register both in the category barrel, `<category>-index.js`. A brand-new category also needs its own `<category>-index.js`, an entry in `loaders/index.js`, and a line in `getCardSize` in `js/ui/collection-view.js` — without that last one its cards fall to the smallest size.
3. Each loader is a plain object: `{ id, name, category, description, markup, css }`, optionally `tech`, `js` (copyable runtime API), `controls` (declarative Inspector schema) and `applyControls`.
4. Keep CSS scoped to loader-specific class names, keep motion markup decorative (`aria-hidden`, `focusable="false"`), and give button loaders real `disabled` + `aria-busy`.
5. Run the checks below, then update the counts in the root docs from the lint output.

One gotcha when verifying a new pack in a browser: the page keeps the ES module graph it already imported, and a cache-busting query on `loaders/index.js` does **not** propagate to its nested imports — so the page can silently show the previous loader count and appear to pass. Assert the expected total before trusting what you see, or use a fresh origin. `node qa/run-smoke-ci.mjs` is immune: it serves the files itself with `cache-control: no-store`.

## Checks

```bash
npm run lint:registry
```

Verifies unique loader ids, `@keyframes` names that are not redefined with a different body, generic class names never used as unscoped top-level selectors, and required fields. It exits non-zero on violation and prints the category count table that the docs must quote — never hand-count.

In CI, or locally against headless Chrome:

```bash
npm run test:snippets              # against the source tree
npm run test:dist                  # against a built dist/
```

This serves the site, drives the smoke page over the Chrome DevTools Protocol and exits non-zero on any failure. It uses Node's built-in server and global `WebSocket` plus the Chrome that CI images already ship, so Vite stays the only dependency. Add `--category SVG` or `--limit 25` to narrow it.

Because the copied snippet *is* the product, one more check proves bundling never changes it:

```bash
npm run build && node qa/verify-snippet-parity.mjs
```

It generates every loader's snippet from the source modules and from the minified bundle and compares them byte for byte.

To watch it instead, open `qa/snippet-paste-smoke.html` and run it. It pastes each loader's exact combined snippet into a blank page and asserts the overlay mounts and actually animates. A full run over all loaders takes about 6 seconds. Append `?autorun=1` to start immediately, `&category=SVG` to narrow it, `&limit=25` for a quick pass.

## Deployment

Pushing to `main` publishes the site to GitHub Pages via `.github/workflows/deploy.yml`. The workflow installs, lints the registry, builds, runs the smoke test **against the built artifact**, and checks snippet parity — it **only deploys if all four pass**, and publishes `dist/`.

One-time setup in the repository: **Settings → Pages → Build and deployment → Source: GitHub Actions**. Without that, the workflow runs but has nothing to deploy to.

The workflow pins Node 24 because the QA runners drive Chrome over CDP using the global `WebSocket`, which landed in Node 22.

## License

MIT — see [LICENSE](LICENSE). Copy the snippets into anything, including commercial work.

---

## 简介（中文摘要）

Loader Studio 是一个加载动画画廊，**复制出去的代码零依赖**（工作室本身用 Vite 构建），收录 **918 个动画**，分 17 个分类。浏览、调整（尺寸/速度/主色/应用状态）后可直接复制可用于生产的 HTML、CSS 和 JavaScript。

没有运行时框架、没有 CDN。开发与构建：

```bash
npm install && npm run dev
```

`npm run build` 产出静态 `dist/`。复制出来的代码片段自带 `AppLoader.show('Saving…')` / `AppLoader.hide()`，末尾的演示调用在上线前删掉即可。

新增 loader 包时请遵循 `loaders/` 的分层注册模式，并运行 `npm run check`；文档中的数量一律以脚本输出为准，**不要手动计算**。授权协议为 MIT，可自由用于商业项目。
