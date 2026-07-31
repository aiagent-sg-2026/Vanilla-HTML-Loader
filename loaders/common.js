export const commonLoaders = [
  {
    id: 'mini-inline-spinner',
    name: 'Mini Inline Spinner',
    category: 'Spinners',
    tech: 'CSS',
    description: 'A small familiar spinner for inline fields, table cells, toolbars, and compact actions.',
    markup: `<span class="vl-mini-spinner" role="status" aria-label="Loading"></span>`,
    css: `.vl-mini-spinner {
  display: inline-block;
  width: 22px;
  height: 22px;
  border: 3px solid color-mix(in srgb, var(--loader-accent) 20%, transparent);
  border-top-color: var(--loader-accent);
  border-radius: 50%;
  animation: vl-mini-spinner calc(var(--loader-speed) * .72) linear infinite;
}
@keyframes vl-mini-spinner { to { transform: rotate(360deg); } }`
  },
  {
    id: 'segmented-spinner',
    name: 'Segmented Spinner',
    category: 'Spinners',
    tech: 'CSS',
    description: 'A clean segmented circular spinner commonly used in desktop and mobile applications.',
    markup: `<div class="vl-segmented-spinner" role="status" aria-label="Loading"></div>`,
    css: `.vl-segmented-spinner {
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background: repeating-conic-gradient(
    from 0deg,
    var(--loader-accent) 0deg 18deg,
    transparent 18deg 30deg
  );
  -webkit-mask: radial-gradient(circle, transparent 50%, #000 52%);
  mask: radial-gradient(circle, transparent 50%, #000 52%);
  animation: vl-segmented-spinner var(--loader-speed) linear infinite;
}
@keyframes vl-segmented-spinner { to { transform: rotate(360deg); } }`
  },
  {
    id: 'dotted-circle',
    name: 'Dotted Circle',
    category: 'Spinners',
    tech: 'CSS',
    description: 'Eight fading dots form a conventional circular activity indicator without visual noise.',
    markup: `<div class="vl-dotted-circle" role="status" aria-label="Loading">
  <span></span><span></span><span></span><span></span>
  <span></span><span></span><span></span><span></span>
</div>`,
    css: `.vl-dotted-circle {
  position: relative;
  width: 52px;
  height: 52px;
}
.vl-dotted-circle span {
  position: absolute;
  left: 22px;
  top: 2px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--loader-accent);
  transform-origin: 4px 24px;
  animation: vl-dotted-fade calc(var(--loader-speed) * 1.1) linear infinite;
}
.vl-dotted-circle span:nth-child(1) { transform: rotate(0deg); animation-delay: 0s; }
.vl-dotted-circle span:nth-child(2) { transform: rotate(45deg); animation-delay: -.1375s; }
.vl-dotted-circle span:nth-child(3) { transform: rotate(90deg); animation-delay: -.275s; }
.vl-dotted-circle span:nth-child(4) { transform: rotate(135deg); animation-delay: -.4125s; }
.vl-dotted-circle span:nth-child(5) { transform: rotate(180deg); animation-delay: -.55s; }
.vl-dotted-circle span:nth-child(6) { transform: rotate(225deg); animation-delay: -.6875s; }
.vl-dotted-circle span:nth-child(7) { transform: rotate(270deg); animation-delay: -.825s; }
.vl-dotted-circle span:nth-child(8) { transform: rotate(315deg); animation-delay: -.9625s; }
@keyframes vl-dotted-fade {
  0%, 100% { opacity: 1; }
  50% { opacity: .18; }
}`
  },
  {
    id: 'twin-bounce',
    name: 'Twin Bounce',
    category: 'Spinners',
    tech: 'CSS',
    description: 'Two overlapping circles scale in sequence for a simple lightweight loading state.',
    markup: `<div class="vl-twin-bounce" role="status" aria-label="Loading"><span></span><span></span></div>`,
    css: `.vl-twin-bounce {
  position: relative;
  width: 52px;
  height: 52px;
}
.vl-twin-bounce span {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: var(--loader-accent);
  opacity: .58;
  animation: vl-twin-bounce calc(var(--loader-speed) * 1.8) ease-in-out infinite;
}
.vl-twin-bounce span:nth-child(2) { animation-delay: calc(var(--loader-speed) * -.9); }
@keyframes vl-twin-bounce {
  0%, 100% { transform: scale(0); }
  50% { transform: scale(1); }
}`
  },
  {
    id: 'fade-ellipsis',
    name: 'Fade Ellipsis',
    category: 'Dots',
    tech: 'CSS',
    description: 'Three dots fade in sequence without jumping, suitable for subtle form and chat feedback.',
    markup: `<div class="vl-fade-ellipsis" role="status" aria-label="Loading"><span></span><span></span><span></span></div>`,
    css: `.vl-fade-ellipsis {
  display: inline-flex;
  align-items: center;
  gap: 7px;
}
.vl-fade-ellipsis span {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-fade-ellipsis calc(var(--loader-speed) * 1.25) ease-in-out infinite;
}
.vl-fade-ellipsis span:nth-child(2) { animation-delay: .16s; }
.vl-fade-ellipsis span:nth-child(3) { animation-delay: .32s; }
@keyframes vl-fade-ellipsis {
  0%, 80%, 100% { opacity: .2; }
  40% { opacity: 1; }
}`
  },
  {
    id: 'spinner-message',
    name: 'Spinner with Message',
    category: 'Common UI',
    tech: 'CSS + JavaScript',
    description: 'A standard spinner and status message combination for forms, panels, and background requests.',
    markup: `<div class="vl-spinner-message" role="status" aria-live="polite">
  <span class="vl-spinner-message-ring" aria-hidden="true"></span>
  <span class="vl-spinner-message-text">Loading data…</span>
</div>`,
    css: `.vl-spinner-message {
  display: inline-flex;
  align-items: center;
  gap: 11px;
  color: #344054;
  font: 700 13px/1.35 system-ui, sans-serif;
}
.vl-spinner-message-ring {
  width: 24px;
  height: 24px;
  flex: 0 0 24px;
  border: 3px solid color-mix(in srgb, var(--loader-accent) 20%, transparent);
  border-top-color: var(--loader-accent);
  border-radius: 50%;
  animation: vl-spinner-message calc(var(--loader-speed) * .78) linear infinite;
}
@keyframes vl-spinner-message { to { transform: rotate(360deg); } }`,
    js: `AppLoader.setMessage = function (message) {
  const text = loaderElement.querySelector('.vl-spinner-message-text');
  if (text) text.textContent = message || 'Loading…';
};`
  },
  {
    id: 'slim-page-bar',
    name: 'Slim Page Bar',
    category: 'Bars',
    tech: 'CSS',
    description: 'A thin indeterminate progress line for page navigation, route changes, and background refreshes.',
    markup: `<div class="vl-slim-page-bar" role="progressbar" aria-label="Loading page"><span></span></div>`,
    css: `.vl-slim-page-bar {
  position: relative;
  width: min(210px, 76vw);
  height: 4px;
  overflow: hidden;
  border-radius: 999px;
  background: color-mix(in srgb, var(--loader-accent) 14%, #e8edf5);
}
.vl-slim-page-bar span {
  position: absolute;
  inset-block: 0;
  left: -38%;
  width: 38%;
  border-radius: inherit;
  background: var(--loader-accent);
  animation: vl-slim-page-bar calc(var(--loader-speed) * 1.2) ease-in-out infinite;
}
@keyframes vl-slim-page-bar {
  0% { left: -38%; width: 30%; }
  55% { width: 52%; }
  100% { left: 108%; width: 30%; }
}`
  },
  {
    id: 'striped-progress',
    name: 'Striped Progress',
    category: 'Progress',
    tech: 'CSS + JavaScript',
    description: 'A familiar determinate progress bar with a real percentage and optional animated stripes.',
    markup: `<div class="vl-striped-progress" role="progressbar" aria-label="Upload progress" aria-valuemin="0" aria-valuemax="100" aria-valuenow="64">
  <div class="vl-striped-progress-meta"><span>Processing…</span><strong>64%</strong></div>
  <div class="vl-striped-progress-track"><span class="vl-striped-progress-fill"></span></div>
</div>`,
    css: `.vl-striped-progress {
  width: min(210px, 78vw);
  display: grid;
  gap: 8px;
  color: #344054;
  font: 700 12px/1.3 system-ui, sans-serif;
}
.vl-striped-progress-meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}
.vl-striped-progress-meta strong {
  color: var(--loader-accent);
  font-variant-numeric: tabular-nums;
}
.vl-striped-progress-track {
  height: 10px;
  overflow: hidden;
  border-radius: 999px;
  background: color-mix(in srgb, var(--loader-accent) 14%, #e8edf5);
}
.vl-striped-progress-fill {
  display: block;
  width: 64%;
  height: 100%;
  border-radius: inherit;
  background-color: var(--loader-accent);
  background-image: linear-gradient(
    45deg,
    rgba(255,255,255,.24) 25%,
    transparent 25%,
    transparent 50%,
    rgba(255,255,255,.24) 50%,
    rgba(255,255,255,.24) 75%,
    transparent 75%,
    transparent
  );
  background-size: 18px 18px;
  transition: width .25s ease;
  animation: vl-striped-progress calc(var(--loader-speed) * .8) linear infinite;
}
@keyframes vl-striped-progress { to { background-position: 18px 0; } }`,
    controls: [
      { type: 'range', key: 'progress', label: 'Progress', min: 0, max: 100, step: 1, defaultValue: 64, suffix: '%', full: true }
    ],
    applyControls(container, values) {
      const root = container.querySelector('.vl-striped-progress');
      if (!root) return;
      const progress = Math.max(0, Math.min(100, Number(values.progress) || 0));
      root.setAttribute('aria-valuenow', String(progress));
      root.querySelector('.vl-striped-progress-fill').style.width = `${progress}%`;
      root.querySelector('.vl-striped-progress-meta strong').textContent = `${Math.round(progress)}%`;
    },
    js: `AppLoader.setProgress = function (value, message = 'Processing…') {
  const root = loaderElement.querySelector('.vl-striped-progress');
  if (!root) return;
  const progress = Math.max(0, Math.min(100, Number(value) || 0));
  root.setAttribute('aria-valuenow', String(progress));
  root.querySelector('.vl-striped-progress-fill').style.width = progress + '%';
  root.querySelector('.vl-striped-progress-meta span').textContent = message;
  root.querySelector('.vl-striped-progress-meta strong').textContent = Math.round(progress) + '%';
};`
  },
  {
    id: 'centered-page-loader',
    name: 'Centered Page Loader',
    category: 'Common UI',
    tech: 'CSS + JavaScript',
    description: 'A restrained centred loading panel for page sections, reports, dialogs, and ERP transactions.',
    markup: `<div class="vl-page-loader" role="status" aria-live="polite">
  <span class="vl-page-loader-ring" aria-hidden="true"></span>
  <strong class="vl-page-loader-title">Loading data</strong>
  <span class="vl-page-loader-note">Please wait a moment…</span>
</div>`,
    css: `.vl-page-loader {
  width: min(220px, 80vw);
  min-height: 118px;
  display: grid;
  place-items: center;
  align-content: center;
  gap: 8px;
  padding: 18px;
  border: 1px solid #e1e7f0;
  border-radius: 12px;
  background: #fff;
  color: #172033;
  box-shadow: 0 10px 28px rgba(15, 23, 42, .08);
  text-align: center;
  font-family: system-ui, sans-serif;
}
.vl-page-loader-ring {
  width: 34px;
  height: 34px;
  border: 4px solid color-mix(in srgb, var(--loader-accent) 18%, transparent);
  border-top-color: var(--loader-accent);
  border-radius: 50%;
  animation: vl-page-loader calc(var(--loader-speed) * .82) linear infinite;
}
.vl-page-loader-title { font-size: 14px; line-height: 1.2; }
.vl-page-loader-note { color: #667085; font-size: 11px; line-height: 1.3; }
@keyframes vl-page-loader { to { transform: rotate(360deg); } }`,
    controls: [
      {
        type: 'select',
        key: 'message',
        label: 'Status message',
        defaultValue: 'loading',
        full: true,
        options: [
          { value: 'loading', label: 'Loading data' },
          { value: 'saving', label: 'Saving changes' },
          { value: 'report', label: 'Preparing report' }
        ]
      }
    ],
    applyControls(container, values) {
      const title = container.querySelector('.vl-page-loader-title');
      const note = container.querySelector('.vl-page-loader-note');
      if (!title || !note) return;
      const messages = {
        loading: ['Loading data', 'Please wait a moment…'],
        saving: ['Saving changes', 'Do not close this page…'],
        report: ['Preparing report', 'Collecting the latest records…']
      };
      const [heading, detail] = messages[values.message] || messages.loading;
      title.textContent = heading;
      note.textContent = detail;
    },
    js: `AppLoader.setMessage = function (title, detail = '') {
  const root = loaderElement.querySelector('.vl-page-loader');
  if (!root) return;
  root.querySelector('.vl-page-loader-title').textContent = title || 'Loading…';
  root.querySelector('.vl-page-loader-note').textContent = detail;
};`
  },
  {
    id: 'list-row-skeleton',
    name: 'List Row Skeleton',
    category: 'Skeletons',
    tech: 'CSS',
    description: 'A conventional three-row skeleton for tables, customer lists, search results, and master-data screens.',
    markup: `<div class="vl-list-skeleton" aria-hidden="true">
  <div class="vl-list-skeleton-row"><span class="vl-list-avatar"></span><span class="vl-list-lines"><i></i><i></i></span></div>
  <div class="vl-list-skeleton-row"><span class="vl-list-avatar"></span><span class="vl-list-lines"><i></i><i></i></span></div>
  <div class="vl-list-skeleton-row"><span class="vl-list-avatar"></span><span class="vl-list-lines"><i></i><i></i></span></div>
</div>`,
    css: `.vl-list-skeleton {
  width: min(220px, 80vw);
  display: grid;
  gap: 10px;
}
.vl-list-skeleton-row {
  display: grid;
  grid-template-columns: 34px 1fr;
  align-items: center;
  gap: 10px;
}
.vl-list-avatar,
.vl-list-lines i {
  position: relative;
  overflow: hidden;
  display: block;
  background: #e7ecf3;
}
.vl-list-avatar {
  width: 34px;
  height: 34px;
  border-radius: 50%;
}
.vl-list-lines {
  display: grid;
  gap: 6px;
}
.vl-list-lines i {
  height: 9px;
  border-radius: 999px;
}
.vl-list-lines i:first-child { width: 82%; }
.vl-list-lines i:last-child { width: 56%; }
.vl-list-avatar::after,
.vl-list-lines i::after {
  content: '';
  position: absolute;
  inset: 0;
  transform: translateX(-110%);
  background: linear-gradient(90deg, transparent, rgba(255,255,255,.8), transparent);
  animation: vl-list-skeleton calc(var(--loader-speed) * 1.45) ease-in-out infinite;
}
@keyframes vl-list-skeleton { to { transform: translateX(110%); } }`
  }
];
