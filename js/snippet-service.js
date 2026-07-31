import { COMMON_OVERLAY_CSS, LOADER_RUNTIME_JS } from '../loaders/shared.js';

const DEFAULT_ACCENT = '#3B63F3';

function applyAccentToCss(css, accent = DEFAULT_ACCENT) {
  const normalized = /^#[0-9a-f]{6}$/i.test(accent) ? accent.toUpperCase() : DEFAULT_ACCENT;
  const declaration = `--loader-accent: ${normalized};`;
  return /--loader-accent:\s*[^;]+;/.test(css)
    ? css.replace(/--loader-accent:\s*[^;]+;/, declaration)
    : `:root { ${declaration} }\n${css}`;
}

export function getHtmlSnippet(loader) {
  return `<div class="vl-loader-overlay" id="appLoader" role="status" aria-live="polite" aria-label="Loading" aria-hidden="true" hidden>
  <div class="vl-loader-content">
    ${loader.markup}
    <p class="vl-loader-label">Loading…</p>
  </div>
</div>`;
}

export function getCssSnippet(loader, accent = DEFAULT_ACCENT) {
  return applyAccentToCss(`${COMMON_OVERLAY_CSS}\n\n${loader.css}`, accent);
}

export function getRuntimeSnippet(loader) {
  return [LOADER_RUNTIME_JS, loader.js].filter(Boolean).join('\n\n');
}

export function getCombinedSnippet(loader, accent = DEFAULT_ACCENT) {
  const openScript = '<scr' + 'ipt>';
  const closeScript = '</scr' + 'ipt>';
  return `${getHtmlSnippet(loader)}\n\n<style>\n${getCssSnippet(loader, accent)}\n</style>\n\n${openScript}\n${getRuntimeSnippet(loader)}\n${closeScript}`;
}

export function getSnippet(loader, tab, accent = DEFAULT_ACCENT) {
  if (tab === 'html') return getHtmlSnippet(loader);
  if (tab === 'css') return getCssSnippet(loader, accent);
  if (tab === 'js') return getRuntimeSnippet(loader);
  return getCombinedSnippet(loader, accent);
}

export function escapeHtml(value) {
  return value.replace(/[&<>"']/g, character => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  })[character]);
}
