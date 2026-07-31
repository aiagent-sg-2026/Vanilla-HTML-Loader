export const commonProgressLoaders = [
  {
    id: 'compact-progress-ring',
    name: 'Compact Progress Ring',
    category: 'Progress',
    tech: 'CSS + JavaScript',
    description: 'A small determinate ring for cards, uploads, compact dashboards, and inline batch operations.',
    markup: `<div class="vl-compact-ring" role="progressbar" aria-label="Progress" aria-valuemin="0" aria-valuemax="100" aria-valuenow="72">
  <span class="vl-compact-ring-value">72%</span>
</div>`,
    css: `.vl-compact-ring {
  --vl-progress: 72;
  position: relative;
  width: 74px;
  height: 74px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: conic-gradient(
    var(--loader-accent) calc(var(--vl-progress) * 1%),
    color-mix(in srgb, var(--loader-accent) 14%, #e7ecf3) 0
  );
  color: #172033;
  font-family: system-ui, sans-serif;
}
.vl-compact-ring::before {
  content: '';
  position: absolute;
  inset: 8px;
  border-radius: 50%;
  background: #fff;
}
.vl-compact-ring-value {
  position: relative;
  z-index: 1;
  color: var(--loader-accent);
  font-size: 14px;
  font-weight: 900;
  font-variant-numeric: tabular-nums;
}`,
    controls: [
      { type: 'range', key: 'progress', label: 'Progress', min: 0, max: 100, step: 1, defaultValue: 72, suffix: '%', full: true }
    ],
    applyControls(container, values) {
      const root = container.querySelector('.vl-compact-ring');
      if (!root) return;
      const progress = Math.max(0, Math.min(100, Number(values.progress) || 0));
      root.style.setProperty('--vl-progress', String(progress));
      root.setAttribute('aria-valuenow', String(progress));
      root.querySelector('.vl-compact-ring-value').textContent = `${Math.round(progress)}%`;
    },
    js: `AppLoader.setProgress = function (value) {
  const root = loaderElement.querySelector('.vl-compact-ring');
  if (!root) return;
  const progress = Math.max(0, Math.min(100, Number(value) || 0));
  root.style.setProperty('--vl-progress', String(progress));
  root.setAttribute('aria-valuenow', String(progress));
  root.querySelector('.vl-compact-ring-value').textContent = Math.round(progress) + '%';
};`
  },
  {
    id: 'file-transfer-progress',
    name: 'File Transfer Progress',
    category: 'Progress',
    tech: 'CSS + JavaScript',
    description: 'A practical file-transfer row with filename, percentage, status, and determinate progress.',
    markup: `<div class="vl-file-transfer" role="progressbar" aria-label="File transfer" aria-valuemin="0" aria-valuemax="100" aria-valuenow="58">
  <div class="vl-file-transfer-head">
    <span class="vl-file-transfer-file">sales-report.xlsx</span>
    <strong class="vl-file-transfer-percent">58%</strong>
  </div>
  <div class="vl-file-transfer-track"><span class="vl-file-transfer-fill"></span></div>
  <span class="vl-file-transfer-status">Uploading…</span>
</div>`,
    css: `.vl-file-transfer {
  width: min(230px, 82vw);
  display: grid;
  gap: 8px;
  color: #344054;
  font: 700 11px/1.3 system-ui, sans-serif;
}
.vl-file-transfer-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}
.vl-file-transfer-file {
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.vl-file-transfer-percent { color: var(--loader-accent); font-variant-numeric: tabular-nums; }
.vl-file-transfer-track {
  height: 9px;
  overflow: hidden;
  border-radius: 999px;
  background: color-mix(in srgb, var(--loader-accent) 14%, #e8edf4);
}
.vl-file-transfer-fill {
  display: block;
  width: 58%;
  height: 100%;
  border-radius: inherit;
  background: var(--loader-accent);
  transition: width .25s ease;
}
.vl-file-transfer-status { color: #667085; }`,
    controls: [
      { type: 'range', key: 'progress', label: 'Transfer progress', min: 0, max: 100, step: 1, defaultValue: 58, suffix: '%', full: true },
      {
        type: 'select',
        key: 'status',
        label: 'Transfer status',
        defaultValue: 'uploading',
        full: true,
        options: [
          { value: 'uploading', label: 'Uploading' },
          { value: 'downloading', label: 'Downloading' },
          { value: 'processing', label: 'Processing' },
          { value: 'complete', label: 'Complete' }
        ]
      }
    ],
    applyControls(container, values) {
      const root = container.querySelector('.vl-file-transfer');
      if (!root) return;
      const progress = Math.max(0, Math.min(100, Number(values.progress) || 0));
      const statusLabels = {
        uploading: 'Uploading…',
        downloading: 'Downloading…',
        processing: 'Processing file…',
        complete: 'Transfer complete'
      };
      root.setAttribute('aria-valuenow', String(progress));
      root.querySelector('.vl-file-transfer-fill').style.width = `${progress}%`;
      root.querySelector('.vl-file-transfer-percent').textContent = `${Math.round(progress)}%`;
      root.querySelector('.vl-file-transfer-status').textContent = statusLabels[values.status] || statusLabels.uploading;
    },
    js: `AppLoader.setProgress = function (value, status = 'Uploading…') {
  const root = loaderElement.querySelector('.vl-file-transfer');
  if (!root) return;
  const progress = Math.max(0, Math.min(100, Number(value) || 0));
  root.setAttribute('aria-valuenow', String(progress));
  root.querySelector('.vl-file-transfer-fill').style.width = progress + '%';
  root.querySelector('.vl-file-transfer-percent').textContent = Math.round(progress) + '%';
  root.querySelector('.vl-file-transfer-status').textContent = status;
};`
  },
  {
    id: 'article-skeleton',
    name: 'Article Skeleton',
    category: 'Skeletons',
    tech: 'CSS',
    description: 'A simple content-page skeleton with heading, metadata, image, and paragraph placeholders.',
    markup: `<div class="vl-article-skeleton" aria-hidden="true">
  <span class="vl-article-title"></span>
  <span class="vl-article-meta"></span>
  <span class="vl-article-image"></span>
  <span class="vl-article-line"></span>
  <span class="vl-article-line short"></span>
</div>`,
    css: `.vl-article-skeleton {
  width: min(230px, 82vw);
  display: grid;
  gap: 8px;
}
.vl-article-skeleton span {
  position: relative;
  overflow: hidden;
  display: block;
  border-radius: 6px;
  background: #e7ecf3;
}
.vl-article-title { width: 86%; height: 14px; }
.vl-article-meta { width: 46%; height: 9px; }
.vl-article-image { width: 100%; height: 70px; border-radius: 9px !important; }
.vl-article-line { width: 100%; height: 9px; }
.vl-article-line.short { width: 68%; }
.vl-article-skeleton span::after {
  content: '';
  position: absolute;
  inset: 0;
  transform: translateX(-110%);
  background: linear-gradient(90deg, transparent, rgba(255,255,255,.82), transparent);
  animation: vl-article-skeleton calc(var(--loader-speed) * 1.5) ease-in-out infinite;
}
@keyframes vl-article-skeleton { to { transform: translateX(110%); } }`
  }
];
