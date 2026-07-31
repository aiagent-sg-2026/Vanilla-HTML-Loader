export const commonContentLoaders = [
  {
    id: 'toast-loading-state',
    name: 'Toast Loading State',
    category: 'Common UI',
    tech: 'CSS + JavaScript',
    description: 'A familiar toast-style loader for save, sync, export, and background operation feedback.',
    markup: `<div class="vl-toast-loader" role="status" aria-live="polite">
  <span class="vl-toast-loader-ring" aria-hidden="true"></span>
  <span class="vl-toast-loader-copy"><strong>Saving changes</strong><small>Please keep this page open.</small></span>
</div>`,
    css: `.vl-toast-loader {
  width: min(235px, 84vw);
  display: flex;
  align-items: center;
  gap: 11px;
  padding: 12px 13px;
  border: 1px solid #e0e6ef;
  border-radius: 10px;
  background: #fff;
  color: #172033;
  box-shadow: 0 10px 24px rgba(15, 23, 42, .1);
  font-family: system-ui, sans-serif;
}
.vl-toast-loader-ring {
  width: 24px;
  height: 24px;
  flex: 0 0 24px;
  border: 3px solid color-mix(in srgb, var(--loader-accent) 18%, transparent);
  border-top-color: var(--loader-accent);
  border-radius: 50%;
  animation: vl-toast-loader calc(var(--loader-speed) * .76) linear infinite;
}
.vl-toast-loader-copy { min-width: 0; display: grid; gap: 2px; }
.vl-toast-loader-copy strong { font-size: 12px; line-height: 1.3; }
.vl-toast-loader-copy small { color: #667085; font-size: 10px; line-height: 1.35; }
@keyframes vl-toast-loader { to { transform: rotate(360deg); } }`,
    controls: [
      {
        type: 'select',
        key: 'message',
        label: 'Toast message',
        defaultValue: 'saving',
        full: true,
        options: [
          { value: 'saving', label: 'Saving changes' },
          { value: 'syncing', label: 'Synchronising data' },
          { value: 'exporting', label: 'Preparing export' },
          { value: 'checking', label: 'Checking status' }
        ]
      }
    ],
    applyControls(container, values) {
      const title = container.querySelector('.vl-toast-loader-copy strong');
      const detail = container.querySelector('.vl-toast-loader-copy small');
      if (!title || !detail) return;
      const messages = {
        saving: ['Saving changes', 'Please keep this page open.'],
        syncing: ['Synchronising data', 'Fetching the latest records.'],
        exporting: ['Preparing export', 'Building your download file.'],
        checking: ['Checking status', 'Reviewing the current request.']
      };
      const [heading, note] = messages[values.message] || messages.saving;
      title.textContent = heading;
      detail.textContent = note;
    },
    js: `AppLoader.setMessage = function (title, detail = '') {
  const root = loaderElement.querySelector('.vl-toast-loader');
  if (!root) return;
  root.querySelector('.vl-toast-loader-copy strong').textContent = title || 'Working…';
  root.querySelector('.vl-toast-loader-copy small').textContent = detail;
};`
  },
  {
    id: 'step-progress-loader',
    name: 'Step Progress Loader',
    category: 'Progress',
    tech: 'CSS + JavaScript',
    description: 'A straightforward four-step process indicator for forms, posting, checkout, and setup flows.',
    markup: `<div class="vl-step-progress" role="progressbar" aria-label="Process progress" aria-valuemin="1" aria-valuemax="4" aria-valuenow="2">
  <span class="is-done"><i>1</i><small>Validate</small></span>
  <span class="is-active"><i>2</i><small>Process</small></span>
  <span><i>3</i><small>Save</small></span>
  <span><i>4</i><small>Done</small></span>
</div>`,
    css: `.vl-step-progress {
  width: min(240px, 86vw);
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  color: #667085;
  font-family: system-ui, sans-serif;
}
.vl-step-progress span {
  position: relative;
  display: grid;
  place-items: center;
  gap: 5px;
  text-align: center;
}
.vl-step-progress span:not(:last-child)::after {
  content: '';
  position: absolute;
  left: 62%;
  top: 13px;
  width: 76%;
  height: 2px;
  background: #dfe5ed;
}
.vl-step-progress i {
  position: relative;
  z-index: 1;
  width: 26px;
  height: 26px;
  display: grid;
  place-items: center;
  border: 2px solid #d7dee8;
  border-radius: 50%;
  background: #fff;
  color: #98a2b3;
  font-size: 10px;
  font-style: normal;
  font-weight: 900;
}
.vl-step-progress small { font-size: 9px; font-weight: 800; }
.vl-step-progress .is-done i,
.vl-step-progress .is-active i {
  border-color: var(--loader-accent);
  color: #fff;
  background: var(--loader-accent);
}
.vl-step-progress .is-done:not(:last-child)::after { background: var(--loader-accent); }
.vl-step-progress .is-active i { animation: vl-step-progress calc(var(--loader-speed) * 1.15) ease-in-out infinite; }
@keyframes vl-step-progress {
  0%, 100% { box-shadow: 0 0 0 0 color-mix(in srgb, var(--loader-accent) 25%, transparent); }
  50% { box-shadow: 0 0 0 7px transparent; }
}`,
    controls: [
      { type: 'range', key: 'step', label: 'Current step', min: 1, max: 4, step: 1, defaultValue: 2, full: true }
    ],
    applyControls(container, values) {
      const root = container.querySelector('.vl-step-progress');
      if (!root) return;
      const step = Math.max(1, Math.min(4, Number(values.step) || 1));
      root.setAttribute('aria-valuenow', String(step));
      [...root.children].forEach((item, index) => {
        item.classList.toggle('is-done', index + 1 < step);
        item.classList.toggle('is-active', index + 1 === step);
      });
    },
    js: `AppLoader.setStage = function (value) {
  const root = loaderElement.querySelector('.vl-step-progress');
  if (!root) return;
  const step = Math.max(1, Math.min(4, Number(value) || 1));
  root.setAttribute('aria-valuenow', String(step));
  [...root.children].forEach((item, index) => {
    item.classList.toggle('is-done', index + 1 < step);
    item.classList.toggle('is-active', index + 1 === step);
  });
};`
  },
  {
    id: 'search-results-skeleton',
    name: 'Search Results Skeleton',
    category: 'Skeletons',
    tech: 'CSS',
    description: 'A conventional search-result skeleton with headings, excerpts, and metadata placeholders.',
    markup: `<div class="vl-search-skeleton" aria-hidden="true">
  <div><span class="title"></span><span class="meta"></span><span class="line"></span><span class="line short"></span></div>
  <div><span class="title"></span><span class="meta"></span><span class="line"></span><span class="line short"></span></div>
</div>`,
    css: `.vl-search-skeleton {
  width: min(235px, 84vw);
  display: grid;
  gap: 13px;
}
.vl-search-skeleton > div { display: grid; gap: 6px; }
.vl-search-skeleton span {
  position: relative;
  overflow: hidden;
  display: block;
  border-radius: 5px;
  background: #e7ecf3;
}
.vl-search-skeleton .title { width: 72%; height: 12px; }
.vl-search-skeleton .meta { width: 38%; height: 7px; }
.vl-search-skeleton .line { width: 100%; height: 8px; }
.vl-search-skeleton .line.short { width: 66%; }
.vl-search-skeleton span::after {
  content: '';
  position: absolute;
  inset: 0;
  transform: translateX(-110%);
  background: linear-gradient(90deg, transparent, rgba(255,255,255,.82), transparent);
  animation: vl-search-skeleton calc(var(--loader-speed) * 1.5) ease-in-out infinite;
}
@keyframes vl-search-skeleton { to { transform: translateX(110%); } }`
  },
  {
    id: 'profile-card-skeleton',
    name: 'Profile Card Skeleton',
    category: 'Skeletons',
    tech: 'CSS',
    description: 'A simple avatar-and-details skeleton for party, customer, supplier, and user cards.',
    markup: `<div class="vl-profile-skeleton" aria-hidden="true">
  <span class="avatar"></span>
  <div><span class="name"></span><span class="role"></span><span class="line"></span></div>
</div>`,
    css: `.vl-profile-skeleton {
  width: min(230px, 82vw);
  display: grid;
  grid-template-columns: 48px 1fr;
  align-items: center;
  gap: 12px;
}
.vl-profile-skeleton > div { display: grid; gap: 7px; }
.vl-profile-skeleton span {
  position: relative;
  overflow: hidden;
  display: block;
  border-radius: 6px;
  background: #e7ecf3;
}
.vl-profile-skeleton .avatar { width: 48px; height: 48px; border-radius: 50%; }
.vl-profile-skeleton .name { width: 72%; height: 12px; }
.vl-profile-skeleton .role { width: 48%; height: 8px; }
.vl-profile-skeleton .line { width: 92%; height: 8px; }
.vl-profile-skeleton span::after {
  content: '';
  position: absolute;
  inset: 0;
  transform: translateX(-110%);
  background: linear-gradient(90deg, transparent, rgba(255,255,255,.82), transparent);
  animation: vl-profile-skeleton calc(var(--loader-speed) * 1.5) ease-in-out infinite;
}
@keyframes vl-profile-skeleton { to { transform: translateX(110%); } }`
  },
  {
    id: 'pagination-skeleton',
    name: 'Pagination Skeleton',
    category: 'Skeletons',
    tech: 'CSS',
    description: 'A compact pagination placeholder for data grids and search-result pages.',
    markup: `<div class="vl-pagination-skeleton" aria-hidden="true"><span></span><span></span><span></span><span></span><span></span></div>`,
    css: `.vl-pagination-skeleton {
  display: inline-flex;
  align-items: center;
  gap: 7px;
}
.vl-pagination-skeleton span {
  position: relative;
  overflow: hidden;
  width: 30px;
  height: 30px;
  border-radius: 7px;
  background: #e7ecf3;
}
.vl-pagination-skeleton span:first-child,
.vl-pagination-skeleton span:last-child { width: 38px; }
.vl-pagination-skeleton span::after {
  content: '';
  position: absolute;
  inset: 0;
  transform: translateX(-110%);
  background: linear-gradient(90deg, transparent, rgba(255,255,255,.82), transparent);
  animation: vl-pagination-skeleton calc(var(--loader-speed) * 1.45) ease-in-out infinite;
}
@keyframes vl-pagination-skeleton { to { transform: translateX(110%); } }`
  }
];
