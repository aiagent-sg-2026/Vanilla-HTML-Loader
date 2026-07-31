export const commonApplicationLoaders = [
  {
    id: 'soft-ring-spinner',
    name: 'Soft Ring Spinner',
    category: 'Spinners',
    tech: 'CSS',
    description: 'A soft, familiar ring spinner for page sections, dialogs, forms, and background requests.',
    markup: `<div class="vl-soft-ring" role="status" aria-label="Loading"></div>`,
    css: `.vl-soft-ring {
  width: 48px;
  height: 48px;
  border: 5px solid color-mix(in srgb, var(--loader-accent) 13%, #edf1f6);
  border-top-color: var(--loader-accent);
  border-radius: 50%;
  box-shadow: inset 0 0 0 1px rgba(15, 23, 42, .02);
  animation: vl-soft-ring calc(var(--loader-speed) * .88) linear infinite;
}
@keyframes vl-soft-ring { to { transform: rotate(360deg); } }`
  },
  {
    id: 'sliding-dots',
    name: 'Sliding Dots',
    category: 'Dots',
    tech: 'CSS',
    description: 'Three restrained dots slide in sequence for compact lookup, validation, and polling states.',
    markup: `<div class="vl-sliding-dots" role="status" aria-label="Loading"><span></span><span></span><span></span></div>`,
    css: `.vl-sliding-dots {
  width: 70px;
  height: 20px;
  display: flex;
  align-items: center;
  gap: 7px;
}
.vl-sliding-dots span {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-sliding-dots calc(var(--loader-speed) * 1.2) ease-in-out infinite;
}
.vl-sliding-dots span:nth-child(2) { animation-delay: .14s; }
.vl-sliding-dots span:nth-child(3) { animation-delay: .28s; }
@keyframes vl-sliding-dots {
  0%, 100% { transform: translateX(0); opacity: .25; }
  50% { transform: translateX(9px); opacity: 1; }
}`
  },
  {
    id: 'inline-activity-line',
    name: 'Inline Activity Line',
    category: 'Bars',
    tech: 'CSS',
    description: 'A narrow activity line suitable for headers, table refreshes, route changes, and inline panels.',
    markup: `<div class="vl-activity-line" role="progressbar" aria-label="Loading"><span></span></div>`,
    css: `.vl-activity-line {
  width: min(180px, 68vw);
  height: 3px;
  overflow: hidden;
  border-radius: 999px;
  background: color-mix(in srgb, var(--loader-accent) 12%, #e8edf4);
}
.vl-activity-line span {
  display: block;
  width: 32%;
  height: 100%;
  border-radius: inherit;
  background: var(--loader-accent);
  transform: translateX(-110%);
  animation: vl-activity-line calc(var(--loader-speed) * 1.25) ease-in-out infinite;
}
@keyframes vl-activity-line {
  55% { width: 48%; }
  100% { transform: translateX(410%); width: 30%; }
}`
  },
  {
    id: 'button-progress-fill',
    name: 'Button Progress Fill',
    category: 'Buttons',
    tech: 'CSS + JavaScript',
    description: 'A production button whose background fill communicates real progress during export, upload, or save actions.',
    markup: `<button class="vl-progress-button" type="button" disabled aria-busy="true" aria-valuemin="0" aria-valuemax="100" aria-valuenow="42">
  <span class="vl-progress-button-fill" aria-hidden="true"></span>
  <span class="vl-progress-button-label">Exporting 42%</span>
</button>`,
    css: `.vl-progress-button {
  position: relative;
  min-width: 150px;
  min-height: 44px;
  overflow: hidden;
  display: inline-grid;
  place-items: center;
  padding: 10px 16px;
  border: 1px solid var(--loader-accent);
  border-radius: 9px;
  background: color-mix(in srgb, var(--loader-accent) 8%, #fff);
  color: var(--loader-accent);
  font: 800 13px/1.2 system-ui, sans-serif;
}
.vl-progress-button-fill {
  position: absolute;
  inset-block: 0;
  left: 0;
  width: 42%;
  background: color-mix(in srgb, var(--loader-accent) 18%, transparent);
  transition: width .25s ease;
}
.vl-progress-button-label { position: relative; z-index: 1; }
`,
    controls: [
      { type: 'range', key: 'progress', label: 'Progress', min: 0, max: 100, step: 1, defaultValue: 42, suffix: '%', full: true },
      {
        type: 'select',
        key: 'action',
        label: 'Button action',
        defaultValue: 'exporting',
        full: true,
        options: [
          { value: 'exporting', label: 'Exporting' },
          { value: 'uploading', label: 'Uploading' },
          { value: 'saving', label: 'Saving' },
          { value: 'processing', label: 'Processing' }
        ]
      }
    ],
    applyControls(container, values) {
      const root = container.querySelector('.vl-progress-button');
      if (!root) return;
      const progress = Math.max(0, Math.min(100, Number(values.progress) || 0));
      const actions = { exporting: 'Exporting', uploading: 'Uploading', saving: 'Saving', processing: 'Processing' };
      root.setAttribute('aria-valuenow', String(progress));
      root.querySelector('.vl-progress-button-fill').style.width = `${progress}%`;
      root.querySelector('.vl-progress-button-label').textContent = `${actions[values.action] || actions.exporting} ${Math.round(progress)}%`;
    },
    js: `AppLoader.setProgress = function (value, action = 'Processing') {
  const root = loaderElement.querySelector('.vl-progress-button');
  if (!root) return;
  const progress = Math.max(0, Math.min(100, Number(value) || 0));
  root.setAttribute('aria-valuenow', String(progress));
  root.querySelector('.vl-progress-button-fill').style.width = progress + '%';
  root.querySelector('.vl-progress-button-label').textContent = action + ' ' + Math.round(progress) + '%';
};`
  },
  {
    id: 'upload-dropzone-loader',
    name: 'Upload Dropzone Loader',
    category: 'Common UI',
    tech: 'CSS + JavaScript',
    description: 'A realistic dropzone processing state with filename, phase, progress bar, and percentage.',
    markup: `<div class="vl-upload-dropzone" role="progressbar" aria-label="File upload" aria-valuemin="0" aria-valuemax="100" aria-valuenow="36">
  <span class="vl-upload-icon" aria-hidden="true">↑</span>
  <strong class="vl-upload-title">Uploading document.pdf</strong>
  <span class="vl-upload-phase">Transferring file…</span>
  <span class="vl-upload-track"><i></i></span>
  <span class="vl-upload-percent">36%</span>
</div>`,
    css: `.vl-upload-dropzone {
  width: min(235px, 84vw);
  min-height: 145px;
  display: grid;
  place-items: center;
  align-content: center;
  gap: 7px;
  padding: 15px;
  border: 1px dashed color-mix(in srgb, var(--loader-accent) 45%, #cad3df);
  border-radius: 11px;
  background: color-mix(in srgb, var(--loader-accent) 3%, #fff);
  color: #172033;
  text-align: center;
  font-family: system-ui, sans-serif;
}
.vl-upload-icon {
  width: 31px;
  height: 31px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: color-mix(in srgb, var(--loader-accent) 12%, #fff);
  color: var(--loader-accent);
  font-size: 18px;
  font-weight: 900;
  animation: vl-upload-icon calc(var(--loader-speed) * 1.25) ease-in-out infinite;
}
.vl-upload-title { max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-size: 12px; }
.vl-upload-phase { color: #667085; font-size: 10px; }
.vl-upload-track { width: 86%; height: 8px; overflow: hidden; border-radius: 999px; background: #e7ecf3; }
.vl-upload-track i { display: block; width: 36%; height: 100%; border-radius: inherit; background: var(--loader-accent); transition: width .25s ease; }
.vl-upload-percent { color: var(--loader-accent); font-size: 11px; font-weight: 900; font-variant-numeric: tabular-nums; }
@keyframes vl-upload-icon { 50% { transform: translateY(-4px); } }`,
    controls: [
      { type: 'range', key: 'progress', label: 'Upload progress', min: 0, max: 100, step: 1, defaultValue: 36, suffix: '%', full: true },
      {
        type: 'select',
        key: 'phase',
        label: 'Upload phase',
        defaultValue: 'uploading',
        full: true,
        options: [
          { value: 'uploading', label: 'Uploading' },
          { value: 'scanning', label: 'Scanning' },
          { value: 'processing', label: 'Processing' },
          { value: 'complete', label: 'Complete' }
        ]
      }
    ],
    applyControls(container, values) {
      const root = container.querySelector('.vl-upload-dropzone');
      if (!root) return;
      const progress = Math.max(0, Math.min(100, Number(values.progress) || 0));
      const phases = { uploading: 'Transferring file…', scanning: 'Scanning file…', processing: 'Processing file…', complete: 'Upload complete' };
      root.setAttribute('aria-valuenow', String(progress));
      root.querySelector('.vl-upload-track i').style.width = `${progress}%`;
      root.querySelector('.vl-upload-percent').textContent = `${Math.round(progress)}%`;
      root.querySelector('.vl-upload-phase').textContent = phases[values.phase] || phases.uploading;
    },
    js: `AppLoader.setProgress = function (value, phase = 'Transferring file…') {
  const root = loaderElement.querySelector('.vl-upload-dropzone');
  if (!root) return;
  const progress = Math.max(0, Math.min(100, Number(value) || 0));
  root.setAttribute('aria-valuenow', String(progress));
  root.querySelector('.vl-upload-track i').style.width = progress + '%';
  root.querySelector('.vl-upload-percent').textContent = Math.round(progress) + '%';
  root.querySelector('.vl-upload-phase').textContent = phase;
};`
  }
];
