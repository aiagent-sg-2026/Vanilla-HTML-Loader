export const COMMON_OVERLAY_CSS = `.vl-loader-overlay {
  position: fixed !important;
  inset: 0 !important;
  width: 100vw;
  height: 100vh;
  height: 100dvh;
  min-height: 100vh;
  z-index: 2147483647;
  display: grid;
  place-items: center;
  box-sizing: border-box;
  padding: 24px;
  overflow: hidden;
  isolation: isolate;
  background: var(--loader-overlay-bg, rgba(7, 12, 24, .78));
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  --loader-accent: #3b63f3;
  --loader-speed: 1s;
  --loader-label-color: #ffffff;
}
.vl-loader-overlay[hidden] { display: none !important; }
.vl-loader-content {
  width: min(100%, 520px);
  max-height: 100%;
  display: grid;
  place-items: center;
  gap: 16px;
  box-sizing: border-box;
}
.vl-loader-label {
  margin: 0;
  color: var(--loader-label-color);
  font: 700 14px/1.4 system-ui, sans-serif;
  text-align: center;
  text-shadow: 0 1px 10px rgba(0, 0, 0, .45);
}
html.vl-loader-active,
html.vl-loader-active body {
  overflow: hidden !important;
  overscroll-behavior: none;
}
.vl-loader-overlay[data-motion="force"] *,
.vl-loader-overlay[data-motion="force"] *::before,
.vl-loader-overlay[data-motion="force"] *::after {
  animation-play-state: running !important;
}
.vl-loader-overlay[data-motion="paused"] *,
.vl-loader-overlay[data-motion="paused"] *::before,
.vl-loader-overlay[data-motion="paused"] *::after {
  animation-play-state: paused !important;
}
@keyframes vl-spin { to { transform: rotate(360deg); } }`;

export const LOADER_RUNTIME_JS = `const loaderElement = document.getElementById('appLoader');

if (!loaderElement) {
  throw new Error('Loader markup is missing: expected #appLoader.');
}

const VALID_MOTION_MODES = new Set(['auto', 'force', 'paused']);

function mountLoaderAtViewportRoot() {
  if (document.body && loaderElement.parentElement !== document.body) {
    document.body.appendChild(loaderElement);
  }
}

function setLoaderMotion(mode = 'auto') {
  const normalizedMode = VALID_MOTION_MODES.has(mode) ? mode : 'auto';
  if (normalizedMode === 'auto') {
    loaderElement.removeAttribute('data-motion');
  } else {
    loaderElement.dataset.motion = normalizedMode;
  }
  return normalizedMode;
}

function showLoader(message = 'Loading…', options = {}) {
  mountLoaderAtViewportRoot();
  const settings = options && typeof options === 'object' ? options : {};
  setLoaderMotion(settings.motion || 'auto');
  const label = loaderElement.querySelector('.vl-loader-label');
  if (label) label.textContent = message;
  loaderElement.hidden = false;
  loaderElement.setAttribute('aria-hidden', 'false');
  document.documentElement.classList.add('vl-loader-active');
  document.body.setAttribute('aria-busy', 'true');
}

function hideLoader() {
  loaderElement.hidden = true;
  loaderElement.setAttribute('aria-hidden', 'true');
  document.documentElement.classList.remove('vl-loader-active');
  document.body.removeAttribute('aria-busy');
}

window.AppLoader = {
  show: showLoader,
  hide: hideLoader,
  setMotion: setLoaderMotion
};

// Demo mode: force animation so the loader visibly runs immediately in CodePen.
// Remove the next line in production, then call AppLoader.show('Saving…').
// Production calls default to motion: 'auto' and respect reduced-motion settings.
AppLoader.show('Loading…', { motion: 'force' });`;

export const PREVIEW_BASE_CSS = `@keyframes vl-spin { to { transform: rotate(360deg); } }`;
