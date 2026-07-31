export const commonFeedbackLoaders = [
  {
    id: 'dotted-ring-spinner',
    name: 'Dotted Ring Spinner',
    category: 'Spinners',
    tech: 'CSS',
    description: 'A conventional dotted ring spinner for page, form, dialog, and inline loading states.',
    markup: `<div class="vl-dotted-ring" role="status" aria-label="Loading"><span></span><span></span><span></span><span></span><span></span><span></span></div>`,
    css: `.vl-dotted-ring {
  position: relative;
  width: 52px;
  height: 52px;
  animation: vl-dotted-ring-rotate calc(var(--loader-speed) * 1.2) linear infinite;
}
.vl-dotted-ring span {
  position: absolute;
  left: 22px;
  top: 2px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--loader-accent);
  transform-origin: 4px 24px;
}
.vl-dotted-ring span:nth-child(1) { transform: rotate(0deg); opacity: 1; }
.vl-dotted-ring span:nth-child(2) { transform: rotate(60deg); opacity: .82; }
.vl-dotted-ring span:nth-child(3) { transform: rotate(120deg); opacity: .66; }
.vl-dotted-ring span:nth-child(4) { transform: rotate(180deg); opacity: .5; }
.vl-dotted-ring span:nth-child(5) { transform: rotate(240deg); opacity: .34; }
.vl-dotted-ring span:nth-child(6) { transform: rotate(300deg); opacity: .18; }
@keyframes vl-dotted-ring-rotate { to { transform: rotate(360deg); } }`
  },
  {
    id: 'triple-pulse-ring',
    name: 'Triple Pulse Ring',
    category: 'Spinners',
    tech: 'CSS',
    description: 'Three soft rings expand in sequence for connection, refresh, and background processing feedback.',
    markup: `<div class="vl-triple-pulse" role="status" aria-label="Loading"><span></span><span></span><span></span></div>`,
    css: `.vl-triple-pulse {
  position: relative;
  width: 54px;
  height: 54px;
}
.vl-triple-pulse span {
  position: absolute;
  inset: 7px;
  border: 3px solid var(--loader-accent);
  border-radius: 50%;
  animation: vl-triple-pulse calc(var(--loader-speed) * 1.55) ease-out infinite;
}
.vl-triple-pulse span:nth-child(2) { animation-delay: .24s; }
.vl-triple-pulse span:nth-child(3) { animation-delay: .48s; }
@keyframes vl-triple-pulse {
  0% { transform: scale(.4); opacity: .9; }
  100% { transform: scale(1.35); opacity: 0; }
}`
  },
  {
    id: 'horizontal-wave-dots',
    name: 'Horizontal Wave Dots',
    category: 'Dots',
    tech: 'CSS',
    description: 'Five dots rise in a gentle wave for compact loading messages and table-cell activity.',
    markup: `<div class="vl-wave-dots" role="status" aria-label="Loading"><span></span><span></span><span></span><span></span><span></span></div>`,
    css: `.vl-wave-dots {
  height: 30px;
  display: inline-flex;
  align-items: center;
  gap: 6px;
}
.vl-wave-dots span {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-wave-dots calc(var(--loader-speed) * 1.15) ease-in-out infinite;
}
.vl-wave-dots span:nth-child(2) { animation-delay: .1s; }
.vl-wave-dots span:nth-child(3) { animation-delay: .2s; }
.vl-wave-dots span:nth-child(4) { animation-delay: .3s; }
.vl-wave-dots span:nth-child(5) { animation-delay: .4s; }
@keyframes vl-wave-dots {
  0%, 100% { transform: translateY(5px); opacity: .35; }
  50% { transform: translateY(-5px); opacity: 1; }
}`
  },
  {
    id: 'header-loading-bar',
    name: 'Header Loading Bar',
    category: 'Progress',
    tech: 'CSS + JavaScript',
    description: 'A thin determinate bar for page headers, route changes, reports, and data refreshes.',
    markup: `<div class="vl-header-progress" role="progressbar" aria-label="Page progress" aria-valuemin="0" aria-valuemax="100" aria-valuenow="42">
  <div class="vl-header-progress-meta"><span>Loading page</span><strong>42%</strong></div>
  <div class="vl-header-progress-track"><span class="vl-header-progress-fill"></span></div>
</div>`,
    css: `.vl-header-progress {
  width: min(240px, 84vw);
  display: grid;
  gap: 7px;
  color: #344054;
  font: 700 11px/1.3 system-ui, sans-serif;
}
.vl-header-progress-meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}
.vl-header-progress-meta strong {
  color: var(--loader-accent);
  font-variant-numeric: tabular-nums;
}
.vl-header-progress-track {
  height: 5px;
  overflow: hidden;
  border-radius: 999px;
  background: color-mix(in srgb, var(--loader-accent) 14%, #e7ecf3);
}
.vl-header-progress-fill {
  display: block;
  width: 42%;
  height: 100%;
  border-radius: inherit;
  background: var(--loader-accent);
  transition: width .25s ease;
}`,
    controls: [
      { type: 'range', key: 'progress', label: 'Progress', min: 0, max: 100, step: 1, defaultValue: 42, suffix: '%', full: true },
      {
        type: 'select',
        key: 'message',
        label: 'Header message',
        defaultValue: 'page',
        full: true,
        options: [
          { value: 'page', label: 'Loading page' },
          { value: 'report', label: 'Generating report' },
          { value: 'refresh', label: 'Refreshing data' },
          { value: 'sync', label: 'Synchronising' }
        ]
      }
    ],
    applyControls(container, values) {
      const root = container.querySelector('.vl-header-progress');
      if (!root) return;
      const progress = Math.max(0, Math.min(100, Number(values.progress) || 0));
      const labels = {
        page: 'Loading page',
        report: 'Generating report',
        refresh: 'Refreshing data',
        sync: 'Synchronising'
      };
      root.setAttribute('aria-valuenow', String(progress));
      root.querySelector('.vl-header-progress-fill').style.width = `${progress}%`;
      root.querySelector('.vl-header-progress-meta strong').textContent = `${Math.round(progress)}%`;
      root.querySelector('.vl-header-progress-meta span').textContent = labels[values.message] || labels.page;
    },
    js: `AppLoader.setProgress = function (value, message = 'Loading page') {
  const root = loaderElement.querySelector('.vl-header-progress');
  if (!root) return;
  const progress = Math.max(0, Math.min(100, Number(value) || 0));
  root.setAttribute('aria-valuenow', String(progress));
  root.querySelector('.vl-header-progress-fill').style.width = progress + '%';
  root.querySelector('.vl-header-progress-meta strong').textContent = Math.round(progress) + '%';
  root.querySelector('.vl-header-progress-meta span').textContent = message;
};`
  },
  {
    id: 'icon-button-spinner',
    name: 'Icon Button Spinner',
    category: 'Buttons',
    tech: 'CSS + JavaScript',
    description: 'A compact square loading button for refresh, sync, retry, and toolbar actions.',
    markup: `<button class="vl-icon-loader-button" type="button" disabled aria-busy="true" aria-label="Refreshing">
  <span class="vl-icon-loader-ring" aria-hidden="true"></span>
</button>`,
    css: `.vl-icon-loader-button {
  width: 44px;
  height: 44px;
  display: inline-grid;
  place-items: center;
  border: 1px solid #d6dee8;
  border-radius: 9px;
  background: #fff;
  color: var(--loader-accent);
  box-shadow: 0 4px 12px rgba(15, 23, 42, .06);
}
.vl-icon-loader-ring {
  width: 18px;
  height: 18px;
  border: 2px solid color-mix(in srgb, var(--loader-accent) 20%, transparent);
  border-top-color: var(--loader-accent);
  border-radius: 50%;
  animation: vl-icon-loader-button calc(var(--loader-speed) * .72) linear infinite;
}
@keyframes vl-icon-loader-button { to { transform: rotate(360deg); } }`,
    controls: [
      {
        type: 'select',
        key: 'action',
        label: 'Button action',
        defaultValue: 'refreshing',
        full: true,
        options: [
          { value: 'refreshing', label: 'Refreshing' },
          { value: 'syncing', label: 'Synchronising' },
          { value: 'retrying', label: 'Retrying' },
          { value: 'loading', label: 'Loading' }
        ]
      }
    ],
    applyControls(container, values) {
      const button = container.querySelector('.vl-icon-loader-button');
      if (!button) return;
      const labels = {
        refreshing: 'Refreshing',
        syncing: 'Synchronising',
        retrying: 'Retrying',
        loading: 'Loading'
      };
      button.setAttribute('aria-label', labels[values.action] || labels.refreshing);
    },
    js: `AppLoader.setMessage = function (message) {
  const button = loaderElement.querySelector('.vl-icon-loader-button');
  if (button) button.setAttribute('aria-label', message || 'Loading');
};`
  }
];
