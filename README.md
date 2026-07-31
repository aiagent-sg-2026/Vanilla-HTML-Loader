# Loader Studio

A zero-dependency gallery of **545 loading animations** across 15 categories. Browse them live, tune size, speed, accent colour and per-loader application state, then copy production-ready HTML, CSS and JavaScript you can paste straight into any page.

No framework. No bundler. No CDN. No build step. Open the folder and it runs.

## Run it

It is a static site, so any static server works:

```bash
python -m http.server 8765
```

Then open <http://localhost:8765>. ES modules require `http://`, so opening `index.html` from the filesystem will not work.

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
| `index.html` | Application shell — static structure only |
| `css/` | Design tokens, layout, components, responsive rules, sticky shell |
| `js/` | State, storage, snippet generation, per-loader control schemas |
| `js/ui/` | One controller per concern: collection, inspector, preview, shell, accent, motion, visibility, infinite scroll |
| `loaders/` | The registry: `index.js` composes per-category barrels, which compose 10-loader pack modules |
| `qa/` | `registry-lint.mjs` and the snippet paste smoke test |
| `review/`, `audit-log/`, `research/`, `knowledge-base/` | Per-release QA records, decisions and research notes |

Architecture and the durable decisions behind it: [DESIGN.md](DESIGN.md). Feature status: [SPEC.md](SPEC.md). Work in flight: [ROADMAP.md](ROADMAP.md), [TASK.md](TASK.md), [EPIC.md](EPIC.md).

## Adding a loader pack

The registry is the source of truth for everything the docs claim. The established pattern:

1. Add ten loaders as two modules, `<category>-pack-<n>-a.js` and `-b.js` (roughly five each).
2. Register both in the category barrel, `<category>-index.js`. Only add to `loaders/index.js` when introducing a brand-new category.
3. Each loader is a plain object: `{ id, name, category, description, markup, css }`, optionally `tech`, `js` (copyable runtime API), `controls` (declarative Inspector schema) and `applyControls`.
4. Keep CSS scoped to loader-specific class names, keep motion markup decorative (`aria-hidden`, `focusable="false"`), and give button loaders real `disabled` + `aria-busy`.
5. Run the checks below, then update the counts in the root docs from the lint output.

## Checks

```bash
node qa/registry-lint.mjs
```

Verifies unique loader ids, `@keyframes` names that are not redefined with a different body, generic class names never used as unscoped top-level selectors, and required fields. It exits non-zero on violation and prints the category count table that the docs must quote — never hand-count.

For snippet integrity, open `qa/snippet-paste-smoke.html` and run it. It pastes each loader's exact combined snippet into a blank page and asserts the overlay mounts and actually animates. Append `?autorun=1` to start immediately, `&limit=25` for a quick pass.

## License

MIT — see [LICENSE](LICENSE). Copy the snippets into anything, including commercial work.

---

## 简介（中文摘要）

Loader Studio 是一个**零依赖**的加载动画画廊，收录 **545 个动画**，分 15 个分类。浏览、调整（尺寸/速度/主色/应用状态）后可直接复制可用于生产的 HTML、CSS 和 JavaScript。

没有框架、没有打包工具、没有构建步骤。用任意静态服务器打开即可（ES 模块不支持 `file://` 直接打开）：

```bash
python -m http.server 8765
```

复制出来的代码片段自带 `AppLoader.show('Saving…')` / `AppLoader.hide()`，末尾的演示调用在上线前删掉即可。

新增 loader 包时请遵循 `loaders/` 的分层注册模式，并运行 `node qa/registry-lint.mjs`；文档中的数量一律以该脚本输出为准，**不要手动计算**。授权协议为 MIT，可自由用于商业项目。
