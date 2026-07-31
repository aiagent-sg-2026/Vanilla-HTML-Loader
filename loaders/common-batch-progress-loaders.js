export const commonBatchProgressLoaders = [
  {
    id: 'batch-operation-progress',
    name: 'Batch Operation Progress',
    category: 'Progress',
    tech: 'CSS + JavaScript',
    description: 'A practical batch-job progress state for posting, importing, recalculating, and updating multiple records.',
    markup: `<div class="vl-batch-progress" role="progressbar" aria-label="Batch operation progress" aria-valuemin="0" aria-valuemax="100" aria-valuenow="42">
  <div class="vl-batch-progress-head"><span class="vl-batch-progress-title">Updating 42 of 100 records</span><strong>42%</strong></div>
  <div class="vl-batch-progress-track"><span class="vl-batch-progress-fill"></span></div>
  <div class="vl-batch-progress-foot"><span>Batch job running</span><span class="vl-batch-progress-dots" aria-hidden="true"><i></i><i></i><i></i></span></div>
</div>`,
    css: `.vl-batch-progress {
  width: min(245px, 88vw);
  display: grid;
  gap: 8px;
  color: #344054;
  font: 800 10px/1.3 system-ui, sans-serif;
}
.vl-batch-progress-head,
.vl-batch-progress-foot { display: flex; align-items: center; justify-content: space-between; gap: 10px; }
.vl-batch-progress-title { min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.vl-batch-progress-head strong { color: var(--loader-accent); font-variant-numeric: tabular-nums; }
.vl-batch-progress-track {
  height: 10px;
  overflow: hidden;
  border-radius: 999px;
  background: color-mix(in srgb, var(--loader-accent) 14%, #e7ecf3);
}
.vl-batch-progress-fill {
  display: block;
  width: 42%;
  height: 100%;
  border-radius: inherit;
  background: var(--loader-accent);
  transition: width .25s ease;
}
.vl-batch-progress-foot { color: #667085; font-size: 9px; }
.vl-batch-progress-dots { display: inline-flex; gap: 3px; }
.vl-batch-progress-dots i {
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-batch-dot calc(var(--loader-speed) * 1.05) ease-in-out infinite;
}
.vl-batch-progress-dots i:nth-child(2) { animation-delay: .12s; }
.vl-batch-progress-dots i:nth-child(3) { animation-delay: .24s; }
@keyframes vl-batch-dot {
  0%, 80%, 100% { transform: scale(.55); opacity: .3; }
  40% { transform: scale(1); opacity: 1; }
}`,
    controls: [
      { type: 'range', key: 'progress', label: 'Batch progress', min: 0, max: 100, step: 1, defaultValue: 42, suffix: '%', full: true },
      {
        type: 'select',
        key: 'operation',
        label: 'Batch operation',
        defaultValue: 'updating',
        full: true,
        options: [
          { value: 'updating', label: 'Updating records' },
          { value: 'posting', label: 'Posting transactions' },
          { value: 'importing', label: 'Importing rows' },
          { value: 'calculating', label: 'Recalculating values' }
        ]
      }
    ],
    applyControls(container, values) {
      const root = container.querySelector('.vl-batch-progress');
      if (!root) return;
      const progress = Math.max(0, Math.min(100, Number(values.progress) || 0));
      const labels = {
        updating: 'Updating',
        posting: 'Posting',
        importing: 'Importing',
        calculating: 'Recalculating'
      };
      const action = labels[values.operation] || labels.updating;
      root.setAttribute('aria-valuenow', String(progress));
      root.querySelector('.vl-batch-progress-fill').style.width = `${progress}%`;
      root.querySelector('.vl-batch-progress-head strong').textContent = `${Math.round(progress)}%`;
      root.querySelector('.vl-batch-progress-title').textContent = `${action} ${Math.round(progress)} of 100 records`;
    },
    js: `AppLoader.setProgress = function (value, operation = 'Updating') {
  const root = loaderElement.querySelector('.vl-batch-progress');
  if (!root) return;
  const progress = Math.max(0, Math.min(100, Number(value) || 0));
  root.setAttribute('aria-valuenow', String(progress));
  root.querySelector('.vl-batch-progress-fill').style.width = progress + '%';
  root.querySelector('.vl-batch-progress-head strong').textContent = Math.round(progress) + '%';
  root.querySelector('.vl-batch-progress-title').textContent = operation + ' ' + Math.round(progress) + ' of 100 records';
};`
  },
  {
    id: 'checklist-progress-loader',
    name: 'Checklist Progress Loader',
    category: 'Progress',
    tech: 'CSS + JavaScript',
    description: 'A checklist-style progress state for document preparation, onboarding, approvals, and transaction validation.',
    markup: `<div class="vl-checklist-progress" role="progressbar" aria-label="Checklist progress" aria-valuemin="1" aria-valuemax="4" aria-valuenow="2">
  <div class="vl-checklist-row is-done"><i>✓</i><span>Validate data</span></div>
  <div class="vl-checklist-row is-active"><i></i><span>Check references</span></div>
  <div class="vl-checklist-row"><i></i><span>Calculate totals</span></div>
  <div class="vl-checklist-row"><i></i><span>Prepare document</span></div>
</div>`,
    css: `.vl-checklist-progress {
  width: min(225px, 82vw);
  display: grid;
  gap: 7px;
  color: #667085;
  font: 800 10px/1.3 system-ui, sans-serif;
}
.vl-checklist-row {
  min-height: 27px;
  display: grid;
  grid-template-columns: 20px 1fr;
  align-items: center;
  gap: 8px;
}
.vl-checklist-row i {
  width: 18px;
  height: 18px;
  display: grid;
  place-items: center;
  border: 2px solid #d7dee8;
  border-radius: 50%;
  color: #fff;
  font-size: 9px;
  font-style: normal;
}
.vl-checklist-row.is-done { color: #344054; }
.vl-checklist-row.is-done i { border-color: var(--loader-accent); background: var(--loader-accent); }
.vl-checklist-row.is-active { color: var(--loader-accent); }
.vl-checklist-row.is-active i {
  border-color: color-mix(in srgb, var(--loader-accent) 22%, transparent);
  border-top-color: var(--loader-accent);
  animation: vl-checklist-spin calc(var(--loader-speed) * .72) linear infinite;
}
@keyframes vl-checklist-spin { to { transform: rotate(360deg); } }`,
    controls: [
      { type: 'range', key: 'step', label: 'Current checklist step', min: 1, max: 4, step: 1, defaultValue: 2, full: true }
    ],
    applyControls(container, values) {
      const root = container.querySelector('.vl-checklist-progress');
      if (!root) return;
      const step = Math.max(1, Math.min(4, Number(values.step) || 1));
      root.setAttribute('aria-valuenow', String(step));
      [...root.children].forEach((row, index) => {
        row.classList.toggle('is-done', index + 1 < step);
        row.classList.toggle('is-active', index + 1 === step);
        const icon = row.querySelector('i');
        if (icon) icon.textContent = index + 1 < step ? '✓' : '';
      });
    },
    js: `AppLoader.setStep = function (value) {
  const root = loaderElement.querySelector('.vl-checklist-progress');
  if (!root) return;
  const step = Math.max(1, Math.min(4, Number(value) || 1));
  root.setAttribute('aria-valuenow', String(step));
  [...root.children].forEach((row, index) => {
    row.classList.toggle('is-done', index + 1 < step);
    row.classList.toggle('is-active', index + 1 === step);
    const icon = row.querySelector('i');
    if (icon) icon.textContent = index + 1 < step ? '✓' : '';
  });
};`
  }
];
