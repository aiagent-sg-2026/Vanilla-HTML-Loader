export const operationLoaders = [
  {
    id: 'file-upload-queue',
    name: 'File Upload Queue',
    category: 'Operations',
    tech: 'CSS + JavaScript',
    description: 'A multi-file upload state with active progress, queued work, completed items, and a production update API.',
    markup: `<div class="vl-upload-queue is-demo" aria-label="File upload progress">
  <div class="vl-upload-row is-active" data-file-id="invoice">
    <div class="vl-upload-meta"><span class="vl-upload-name">invoice.pdf</span><strong class="vl-upload-status">72%</strong></div>
    <div class="vl-upload-track" role="progressbar" aria-label="invoice.pdf" aria-valuemin="0" aria-valuemax="100" aria-valuenow="72"><span style="width:72%"></span></div>
  </div>
  <div class="vl-upload-row" data-file-id="products">
    <div class="vl-upload-meta"><span class="vl-upload-name">products.xlsx</span><strong class="vl-upload-status">Queued</strong></div>
    <div class="vl-upload-track" role="progressbar" aria-label="products.xlsx" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0"><span style="width:0%"></span></div>
  </div>
  <div class="vl-upload-row is-complete" data-file-id="photo">
    <div class="vl-upload-meta"><span class="vl-upload-name">photo.jpg</span><strong class="vl-upload-status">Done</strong></div>
    <div class="vl-upload-track" role="progressbar" aria-label="photo.jpg" aria-valuemin="0" aria-valuemax="100" aria-valuenow="100"><span style="width:100%"></span></div>
  </div>
</div>`,
    css: `.vl-upload-queue {
  width: min(250px, 84vw);
  display: grid;
  gap: 9px;
  color: #172033;
  font: 700 11px/1.25 system-ui, sans-serif;
}
.vl-upload-row { display: grid; gap: 5px; padding: 8px 10px; border: 1px solid color-mix(in srgb, var(--loader-accent) 10%, #dfe5ee); border-radius: 9px; background: #fff; box-shadow: 0 5px 16px rgba(23, 32, 51, .05); }
.vl-upload-meta { display: flex; align-items: center; justify-content: space-between; gap: 12px; }
.vl-upload-name { min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.vl-upload-status { color: #667085; font-size: 10px; font-variant-numeric: tabular-nums; }
.vl-upload-row.is-active .vl-upload-status { color: var(--loader-accent); }
.vl-upload-row.is-complete .vl-upload-status { color: #138a5b; }
.vl-upload-track { height: 6px; overflow: hidden; border-radius: 999px; background: color-mix(in srgb, var(--loader-accent) 10%, #e7ecf4); }
.vl-upload-track span { display: block; height: 100%; border-radius: inherit; background: var(--loader-accent); transition: width .3s ease; }
.vl-upload-queue.is-demo .vl-upload-row.is-active .vl-upload-track span { animation: vl-upload-demo calc(var(--loader-speed) * 3.4) ease-in-out infinite; }
.vl-upload-row.is-complete .vl-upload-track span { background: #18a66d; }
.vl-upload-row.is-error { border-color: #f1b9bf; background: #fff8f8; }
.vl-upload-row.is-error .vl-upload-status { color: #c43d4b; }
.vl-upload-row.is-error .vl-upload-track span { background: #d9485a; animation: none; }
@keyframes vl-upload-demo { 0%, 100% { width: 36%; } 55% { width: 78%; } 80% { width: 92%; } }`,
    js: `AppLoader.updateFile = function (fileId, progress, status = '') {
  const queue = loaderElement.querySelector('.vl-upload-queue');
  const row = loaderElement.querySelector('[data-file-id="' + fileId + '"]');
  if (!queue || !row) return;
  queue.classList.remove('is-demo');
  const value = Math.max(0, Math.min(100, Number(progress) || 0));
  const track = row.querySelector('[role="progressbar"]');
  const fill = row.querySelector('.vl-upload-track span');
  const statusElement = row.querySelector('.vl-upload-status');
  row.classList.remove('is-active', 'is-complete', 'is-error');
  if (status === 'error') row.classList.add('is-error');
  else if (value >= 100) row.classList.add('is-complete');
  else if (value > 0) row.classList.add('is-active');
  track.setAttribute('aria-valuenow', String(value));
  fill.style.width = value + '%';
  statusElement.textContent = status || (value >= 100 ? 'Done' : Math.round(value) + '%');
};`
  }
];
