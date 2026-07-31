export const researchProgressLoaders = [
  {
    id: 'native-progress-element',
    name: 'Native Progress Element',
    category: 'Progress',
    tech: 'HTML + CSS + JavaScript',
    description: 'A semantic determinate progress indicator built with the native progress element for imports, exports, and report generation.',
    markup: `<label class="vl-native-progress">
  <span class="vl-native-progress-head">
    <strong class="vl-native-progress-label">Generating report</strong>
    <em class="vl-native-progress-value">58%</em>
  </span>
  <progress value="58" max="100">58%</progress>
</label>`,
    css: `.vl-native-progress {
  width: min(230px, 82vw);
  display: grid;
  gap: 8px;
  color: #344054;
  font: 700 11px/1.3 system-ui, sans-serif;
}
.vl-native-progress-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}
.vl-native-progress-value {
  color: var(--loader-accent);
  font-style: normal;
  font-variant-numeric: tabular-nums;
}
.vl-native-progress progress {
  width: 100%;
  height: 10px;
  overflow: hidden;
  border: 0;
  border-radius: 999px;
  background: color-mix(in srgb, var(--loader-accent) 14%, #e7ecf3);
  accent-color: var(--loader-accent);
}
.vl-native-progress progress::-webkit-progress-bar {
  border-radius: 999px;
  background: color-mix(in srgb, var(--loader-accent) 14%, #e7ecf3);
}
.vl-native-progress progress::-webkit-progress-value {
  border-radius: 999px;
  background: var(--loader-accent);
  transition: width .25s ease;
}
.vl-native-progress progress::-moz-progress-bar {
  border-radius: 999px;
  background: var(--loader-accent);
}`,
    controls: [
      { type: 'range', key: 'progress', label: 'Progress', min: 0, max: 100, step: 1, defaultValue: 58, suffix: '%', full: true },
      {
        type: 'select',
        key: 'message',
        label: 'Progress message',
        defaultValue: 'report',
        full: true,
        options: [
          { value: 'report', label: 'Generating report' },
          { value: 'import', label: 'Importing records' },
          { value: 'export', label: 'Preparing export' },
          { value: 'sync', label: 'Synchronising data' }
        ]
      }
    ],
    applyControls(container, values) {
      const root = container.querySelector('.vl-native-progress');
      if (!root) return;
      const progress = Math.max(0, Math.min(100, Number(values.progress) || 0));
      const messages = {
        report: 'Generating report',
        import: 'Importing records',
        export: 'Preparing export',
        sync: 'Synchronising data'
      };
      const progressElement = root.querySelector('progress');
      progressElement.value = progress;
      progressElement.textContent = `${Math.round(progress)}%`;
      root.querySelector('.vl-native-progress-value').textContent = `${Math.round(progress)}%`;
      root.querySelector('.vl-native-progress-label').textContent = messages[values.message] || messages.report;
    },
    js: `AppLoader.setProgress = function (value, message = 'Generating report') {
  const root = loaderElement.querySelector('.vl-native-progress');
  if (!root) return;
  const progress = Math.max(0, Math.min(100, Number(value) || 0));
  const bar = root.querySelector('progress');
  bar.value = progress;
  bar.textContent = Math.round(progress) + '%';
  root.querySelector('.vl-native-progress-value').textContent = Math.round(progress) + '%';
  root.querySelector('.vl-native-progress-label').textContent = message;
};`
  },
  {
    id: 'buffered-progress-bar',
    name: 'Buffered Progress Bar',
    category: 'Progress',
    tech: 'CSS + JavaScript',
    description: 'A two-layer progress bar that distinguishes completed work from prefetched or buffered work.',
    markup: `<div class="vl-buffer-progress" role="progressbar" aria-label="Loading resources" aria-valuemin="0" aria-valuemax="100" aria-valuenow="42" aria-valuetext="42% loaded, 68% buffered">
  <div class="vl-buffer-progress-head"><span>Loading resources</span><strong>42%</strong></div>
  <div class="vl-buffer-progress-track">
    <span class="vl-buffer-progress-buffer"></span>
    <span class="vl-buffer-progress-value"></span>
  </div>
  <small>68% buffered</small>
</div>`,
    css: `.vl-buffer-progress {
  width: min(230px, 82vw);
  display: grid;
  gap: 7px;
  color: #344054;
  font: 700 11px/1.3 system-ui, sans-serif;
}
.vl-buffer-progress-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}
.vl-buffer-progress-head strong { color: var(--loader-accent); font-variant-numeric: tabular-nums; }
.vl-buffer-progress-track {
  position: relative;
  height: 10px;
  overflow: hidden;
  border-radius: 999px;
  background: #e7ecf3;
}
.vl-buffer-progress-buffer,
.vl-buffer-progress-value {
  position: absolute;
  inset-block: 0;
  left: 0;
  border-radius: inherit;
  transition: width .25s ease;
}
.vl-buffer-progress-buffer {
  width: 68%;
  background: color-mix(in srgb, var(--loader-accent) 28%, #e7ecf3);
}
.vl-buffer-progress-value {
  width: 42%;
  background: var(--loader-accent);
}
.vl-buffer-progress small { color: #667085; font-size: 10px; }`,
    controls: [
      { type: 'range', key: 'progress', label: 'Completed', min: 0, max: 100, step: 1, defaultValue: 42, suffix: '%', full: true },
      { type: 'range', key: 'buffer', label: 'Buffered', min: 0, max: 100, step: 1, defaultValue: 68, suffix: '%', full: true }
    ],
    applyControls(container, values) {
      const root = container.querySelector('.vl-buffer-progress');
      if (!root) return;
      const progress = Math.max(0, Math.min(100, Number(values.progress) || 0));
      const buffer = Math.max(progress, Math.min(100, Number(values.buffer) || 0));
      root.setAttribute('aria-valuenow', String(progress));
      root.setAttribute('aria-valuetext', `${Math.round(progress)}% loaded, ${Math.round(buffer)}% buffered`);
      root.querySelector('.vl-buffer-progress-value').style.width = `${progress}%`;
      root.querySelector('.vl-buffer-progress-buffer').style.width = `${buffer}%`;
      root.querySelector('.vl-buffer-progress-head strong').textContent = `${Math.round(progress)}%`;
      root.querySelector('small').textContent = `${Math.round(buffer)}% buffered`;
    },
    js: `AppLoader.setProgress = function (value, bufferedValue) {
  const root = loaderElement.querySelector('.vl-buffer-progress');
  if (!root) return;
  const progress = Math.max(0, Math.min(100, Number(value) || 0));
  const buffer = Math.max(progress, Math.min(100, Number(bufferedValue) || progress));
  root.setAttribute('aria-valuenow', String(progress));
  root.setAttribute('aria-valuetext', Math.round(progress) + '% loaded, ' + Math.round(buffer) + '% buffered');
  root.querySelector('.vl-buffer-progress-value').style.width = progress + '%';
  root.querySelector('.vl-buffer-progress-buffer').style.width = buffer + '%';
  root.querySelector('.vl-buffer-progress-head strong').textContent = Math.round(progress) + '%';
  root.querySelector('small').textContent = Math.round(buffer) + '% buffered';
};`
  },
  {
    id: 'file-queue-progress',
    name: 'File Queue Progress',
    category: 'Progress',
    tech: 'CSS + JavaScript',
    description: 'A compact multi-file queue with overall determinate progress and per-file status feedback.',
    markup: `<div class="vl-file-queue" role="progressbar" aria-label="File queue progress" aria-valuemin="0" aria-valuemax="100" aria-valuenow="64">
  <div class="vl-file-queue-head"><strong>Uploading 3 files</strong><span>64%</span></div>
  <div class="vl-file-queue-track"><i></i></div>
  <ul>
    <li><span>customers.csv</span><em>Complete</em></li>
    <li class="is-active"><span>sales.xlsx</span><em>Uploading</em></li>
    <li><span>stock.json</span><em>Waiting</em></li>
  </ul>
</div>`,
    css: `.vl-file-queue {
  width: min(240px, 84vw);
  display: grid;
  gap: 8px;
  padding: 12px;
  border: 1px solid #e1e7ef;
  border-radius: 10px;
  background: #fff;
  color: #344054;
  font: 700 10px/1.3 system-ui, sans-serif;
}
.vl-file-queue-head { display: flex; align-items: center; justify-content: space-between; gap: 12px; }
.vl-file-queue-head strong { font-size: 11px; }
.vl-file-queue-head span { color: var(--loader-accent); font-variant-numeric: tabular-nums; }
.vl-file-queue-track { height: 8px; overflow: hidden; border-radius: 999px; background: #e7ecf3; }
.vl-file-queue-track i { display: block; width: 64%; height: 100%; border-radius: inherit; background: var(--loader-accent); transition: width .25s ease; }
.vl-file-queue ul { display: grid; gap: 6px; margin: 0; padding: 0; list-style: none; }
.vl-file-queue li { display: flex; justify-content: space-between; gap: 10px; color: #667085; }
.vl-file-queue li span { min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.vl-file-queue li em { flex: 0 0 auto; font-style: normal; }
.vl-file-queue li.is-active { color: #344054; }
.vl-file-queue li.is-active em { color: var(--loader-accent); }`,
    controls: [
      { type: 'range', key: 'progress', label: 'Overall progress', min: 0, max: 100, step: 1, defaultValue: 64, suffix: '%', full: true },
      {
        type: 'select',
        key: 'phase',
        label: 'Active file status',
        defaultValue: 'uploading',
        full: true,
        options: [
          { value: 'uploading', label: 'Uploading' },
          { value: 'scanning', label: 'Scanning' },
          { value: 'processing', label: 'Processing' },
          { value: 'finalizing', label: 'Finalizing' }
        ]
      }
    ],
    applyControls(container, values) {
      const root = container.querySelector('.vl-file-queue');
      if (!root) return;
      const progress = Math.max(0, Math.min(100, Number(values.progress) || 0));
      const phases = { uploading: 'Uploading', scanning: 'Scanning', processing: 'Processing', finalizing: 'Finalizing' };
      root.setAttribute('aria-valuenow', String(progress));
      root.querySelector('.vl-file-queue-track i').style.width = `${progress}%`;
      root.querySelector('.vl-file-queue-head span').textContent = `${Math.round(progress)}%`;
      root.querySelector('li.is-active em').textContent = phases[values.phase] || phases.uploading;
    },
    js: `AppLoader.setProgress = function (value, phase = 'Uploading') {
  const root = loaderElement.querySelector('.vl-file-queue');
  if (!root) return;
  const progress = Math.max(0, Math.min(100, Number(value) || 0));
  root.setAttribute('aria-valuenow', String(progress));
  root.querySelector('.vl-file-queue-track i').style.width = progress + '%';
  root.querySelector('.vl-file-queue-head span').textContent = Math.round(progress) + '%';
  root.querySelector('li.is-active em').textContent = phase;
};`
  }
];
