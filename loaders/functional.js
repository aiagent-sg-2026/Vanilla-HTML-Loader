function clamp(value, min, max) {
  return Math.max(min, Math.min(max, Number(value) || 0));
}

export const functionalLoaders = [
  {
    id: 'ai-streaming-response',
    name: 'AI Streaming Response',
    category: 'Application',
    tech: 'CSS + JavaScript',
    description: 'Shows the current AI-agent stage, streaming activity, elapsed work, and tool progress without relying on an ambiguous spinner.',
    markup: `<div class="vl-ai-stream" role="status" aria-live="polite" data-stage="searching">
  <div class="vl-ai-orb" aria-hidden="true"><span></span><span></span><span></span></div>
  <div class="vl-ai-copy">
    <strong class="vl-ai-title">Searching company data</strong>
    <span class="vl-ai-detail">Finding relevant records and evidence…</span>
    <span class="vl-ai-stream-line" aria-hidden="true"></span>
  </div>
  <span class="vl-ai-time">00:08</span>
</div>`,
    css: `.vl-ai-stream {
  width: min(280px, 84vw);
  display: grid;
  grid-template-columns: 44px minmax(0, 1fr) auto;
  align-items: center;
  gap: 12px;
  padding: 13px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 22%, #dfe5ee);
  border-radius: 14px;
  background: color-mix(in srgb, var(--loader-accent) 5%, #fff);
  color: #172033;
  font-family: system-ui, sans-serif;
}
.vl-ai-orb { position: relative; width: 42px; height: 42px; display: grid; place-items: center; border-radius: 13px; background: color-mix(in srgb, var(--loader-accent) 13%, #fff); overflow: hidden; }
.vl-ai-orb::before { content: ''; position: absolute; inset: 6px; border: 2px solid color-mix(in srgb, var(--loader-accent) 28%, transparent); border-top-color: var(--loader-accent); border-radius: 50%; animation: vl-ai-spin calc(var(--loader-speed) * 1.1) linear infinite; }
.vl-ai-orb span { position: absolute; width: 5px; height: 5px; border-radius: 50%; background: var(--loader-accent); animation: vl-ai-node calc(var(--loader-speed) * 1.35) ease-in-out infinite; }
.vl-ai-orb span:nth-child(1) { transform: translate(-9px, 4px); }
.vl-ai-orb span:nth-child(2) { animation-delay: -.35s; }
.vl-ai-orb span:nth-child(3) { transform: translate(9px, -4px); animation-delay: -.7s; }
.vl-ai-copy { min-width: 0; display: grid; gap: 3px; }
.vl-ai-title { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-size: 13px; }
.vl-ai-detail { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; color: #667085; font-size: 10px; }
.vl-ai-stream-line { width: 72%; height: 3px; margin-top: 3px; overflow: hidden; border-radius: 999px; background: color-mix(in srgb, var(--loader-accent) 13%, #e8edf5); }
.vl-ai-stream-line::after { content: ''; display: block; width: 35%; height: 100%; border-radius: inherit; background: var(--loader-accent); animation: vl-ai-stream calc(var(--loader-speed) * 1.2) ease-in-out infinite; }
.vl-ai-time { align-self: start; color: #667085; font: 800 9px/1.2 ui-monospace, monospace; }
@keyframes vl-ai-spin { to { transform: rotate(360deg); } }
@keyframes vl-ai-node { 50% { opacity: .25; } }
@keyframes vl-ai-stream { from { transform: translateX(-110%); } to { transform: translateX(300%); } }`,
    controls: [
      {
        key: 'stage',
        label: 'Current AI stage',
        type: 'select',
        defaultValue: 'searching',
        full: true,
        options: [
          { value: 'understanding', label: 'Understanding request' },
          { value: 'searching', label: 'Searching company data' },
          { value: 'analysing', label: 'Analysing results' },
          { value: 'generating', label: 'Generating answer' }
        ]
      },
      { key: 'elapsed', label: 'Elapsed time', type: 'range', min: 1, max: 90, step: 1, defaultValue: 8, suffix: 's', full: true }
    ],
    applyControls(container, values) {
      const root = container.querySelector('.vl-ai-stream');
      if (!root) return;
      const stages = {
        understanding: ['Understanding request', 'Identifying intent and required context…'],
        searching: ['Searching company data', 'Finding relevant records and evidence…'],
        analysing: ['Analysing results', 'Comparing records and checking exceptions…'],
        generating: ['Generating answer', 'Streaming a clear response for the user…']
      };
      const [title, detail] = stages[values.stage] || stages.searching;
      root.dataset.stage = values.stage;
      root.querySelector('.vl-ai-title').textContent = title;
      root.querySelector('.vl-ai-detail').textContent = detail;
      root.querySelector('.vl-ai-time').textContent = `00:${String(clamp(values.elapsed, 0, 99)).padStart(2, '0')}`;
    },
    js: `AppLoader.setStage = function (stage, detail, elapsedSeconds) {
  const root = loaderElement.querySelector('.vl-ai-stream');
  if (!root) return;
  const stages = {
    understanding: ['Understanding request', 'Identifying intent and required context…'],
    searching: ['Searching company data', 'Finding relevant records and evidence…'],
    analysing: ['Analysing results', 'Comparing records and checking exceptions…'],
    generating: ['Generating answer', 'Streaming a clear response for the user…']
  };
  const copy = stages[stage] || stages.searching;
  root.dataset.stage = stage;
  root.querySelector('.vl-ai-title').textContent = copy[0];
  root.querySelector('.vl-ai-detail').textContent = detail || copy[1];
  if (elapsedSeconds !== undefined) root.querySelector('.vl-ai-time').textContent = '00:' + String(Math.max(0, Number(elapsedSeconds) || 0)).padStart(2, '0');
};`
  },
  {
    id: 'erp-transaction-processor',
    name: 'ERP Transaction Processor',
    category: 'Application',
    tech: 'CSS + JavaScript',
    description: 'Explains where an ERP transaction is within validation, stock checking, tax calculation, saving, and ledger posting.',
    markup: `<div class="vl-erp-process" role="status" aria-live="polite" data-status="running">
  <div class="vl-erp-header"><strong>Posting Sales Invoice</strong><span class="vl-erp-badge">In progress</span></div>
  <ol class="vl-erp-steps">
    <li class="is-complete"><span>✓</span><em>Validate document</em></li>
    <li class="is-complete"><span>✓</span><em>Check stock</em></li>
    <li class="is-active"><span></span><em>Calculate tax</em></li>
    <li><span></span><em>Save transaction</em></li>
    <li><span></span><em>Post to ledger</em></li>
  </ol>
</div>`,
    css: `.vl-erp-process { width: min(260px, 84vw); padding: 13px; border: 1px solid #dfe5ee; border-radius: 13px; background: #fff; color: #172033; font-family: system-ui, sans-serif; }
.vl-erp-header { display: flex; align-items: center; justify-content: space-between; gap: 10px; margin-bottom: 10px; }
.vl-erp-header strong { font-size: 12px; }
.vl-erp-badge { padding: 4px 7px; border-radius: 999px; background: color-mix(in srgb, var(--loader-accent) 12%, #fff); color: var(--loader-accent); font-size: 9px; font-weight: 850; }
.vl-erp-steps { display: grid; gap: 4px; margin: 0; padding: 0; list-style: none; }
.vl-erp-steps li { display: grid; grid-template-columns: 22px 1fr; align-items: center; gap: 8px; min-height: 25px; color: #8a94a6; font-size: 10px; font-weight: 750; }
.vl-erp-steps span { width: 18px; height: 18px; display: grid; place-items: center; border: 2px solid #d7deea; border-radius: 50%; color: #fff; font-size: 8px; font-style: normal; }
.vl-erp-steps em { font-style: normal; }
.vl-erp-steps .is-complete { color: #344054; }
.vl-erp-steps .is-complete span { border-color: var(--loader-accent); background: var(--loader-accent); }
.vl-erp-steps .is-active { color: var(--loader-accent); }
.vl-erp-steps .is-active span { border-color: var(--loader-accent); box-shadow: 0 0 0 4px color-mix(in srgb, var(--loader-accent) 12%, transparent); animation: vl-erp-pulse calc(var(--loader-speed) * 1.25) ease-in-out infinite; }
.vl-erp-steps .is-active span::after { content: ''; width: 5px; height: 5px; border-radius: 50%; background: var(--loader-accent); }
.vl-erp-process[data-status="warning"] .vl-erp-badge { background: #fff4d8; color: #9a6700; }
.vl-erp-process[data-status="error"] .vl-erp-badge { background: #ffe8eb; color: #b42332; }
.vl-erp-process[data-status="success"] .vl-erp-badge { background: #e7f8ef; color: #087a46; }
@keyframes vl-erp-pulse { 50% { box-shadow: 0 0 0 8px color-mix(in srgb, var(--loader-accent) 2%, transparent); } }`,
    controls: [
      {
        key: 'step', label: 'Current transaction step', type: 'select', defaultValue: '2', full: true,
        options: [
          { value: '0', label: 'Validate document' },
          { value: '1', label: 'Check stock' },
          { value: '2', label: 'Calculate tax' },
          { value: '3', label: 'Save transaction' },
          { value: '4', label: 'Post to ledger' }
        ]
      },
      {
        key: 'status', label: 'Processing state', type: 'select', defaultValue: 'running', full: true,
        options: [
          { value: 'running', label: 'In progress' },
          { value: 'warning', label: 'Needs attention' },
          { value: 'error', label: 'Failed' },
          { value: 'success', label: 'Completed' }
        ]
      }
    ],
    applyControls(container, values) {
      const root = container.querySelector('.vl-erp-process');
      if (!root) return;
      const steps = [...root.querySelectorAll('.vl-erp-steps li')];
      const active = clamp(values.step, 0, steps.length - 1);
      root.dataset.status = values.status;
      root.querySelector('.vl-erp-badge').textContent = ({ running: 'In progress', warning: 'Needs attention', error: 'Failed', success: 'Completed' })[values.status] || 'In progress';
      steps.forEach((step, index) => {
        step.classList.toggle('is-complete', values.status === 'success' || index < active);
        step.classList.toggle('is-active', values.status !== 'success' && index === active);
        step.querySelector('span').textContent = values.status === 'success' || index < active ? '✓' : '';
      });
    },
    js: `AppLoader.setTransactionState = function (stepIndex, status) {
  const root = loaderElement.querySelector('.vl-erp-process');
  if (!root) return;
  const steps = Array.from(root.querySelectorAll('.vl-erp-steps li'));
  const active = Math.max(0, Math.min(steps.length - 1, Number(stepIndex) || 0));
  status = status || 'running';
  root.dataset.status = status;
  root.querySelector('.vl-erp-badge').textContent = ({ running: 'In progress', warning: 'Needs attention', error: 'Failed', success: 'Completed' })[status] || 'In progress';
  steps.forEach(function (step, index) {
    step.classList.toggle('is-complete', status === 'success' || index < active);
    step.classList.toggle('is-active', status !== 'success' && index === active);
    step.querySelector('span').textContent = status === 'success' || index < active ? '✓' : '';
  });
};`
  },
  {
    id: 'bulk-import-processor',
    name: 'Bulk Import Processor',
    category: 'Application',
    tech: 'CSS + JavaScript',
    description: 'Provides measurable row progress together with successful, warning, and failed counts for CSV or Excel imports.',
    markup: `<div class="vl-import" role="progressbar" aria-label="Importing spreadsheet rows" aria-valuemin="0" aria-valuemax="100" aria-valuenow="64">
  <div class="vl-import-head"><span><strong class="vl-import-count">6,400</strong> / 10,000 rows</span><strong class="vl-import-percent">64%</strong></div>
  <div class="vl-import-track" aria-hidden="true"><span></span></div>
  <div class="vl-import-stats">
    <span class="is-success"><b class="vl-import-success">6,348</b> success</span>
    <span class="is-warning"><b class="vl-import-warning">37</b> warnings</span>
    <span class="is-error"><b class="vl-import-error">15</b> failed</span>
  </div>
  <small>Estimated remaining: <strong class="vl-import-eta">18 seconds</strong></small>
</div>`,
    css: `.vl-import { width: min(280px, 84vw); display: grid; gap: 9px; padding: 13px; border: 1px solid #dfe5ee; border-radius: 13px; background: #fff; color: #172033; font-family: system-ui, sans-serif; }
.vl-import-head { display: flex; align-items: center; justify-content: space-between; gap: 12px; font-size: 10px; color: #667085; }
.vl-import-head strong { color: #172033; font-variant-numeric: tabular-nums; }
.vl-import-percent { color: var(--loader-accent) !important; font-size: 12px; }
.vl-import-track { height: 9px; overflow: hidden; border-radius: 999px; background: color-mix(in srgb, var(--loader-accent) 12%, #e8edf5); }
.vl-import-track span { display: block; width: 64%; height: 100%; border-radius: inherit; background: var(--loader-accent); box-shadow: 0 0 14px color-mix(in srgb, var(--loader-accent) 35%, transparent); transition: width .28s ease; }
.vl-import-stats { display: grid; grid-template-columns: repeat(3, 1fr); gap: 5px; }
.vl-import-stats span { padding: 7px 5px; border-radius: 8px; background: #f7f9fc; color: #667085; text-align: center; font-size: 8px; }
.vl-import-stats b { display: block; margin-bottom: 2px; color: #344054; font-size: 11px; font-variant-numeric: tabular-nums; }
.vl-import-stats .is-success b { color: #087a46; }
.vl-import-stats .is-warning b { color: #9a6700; }
.vl-import-stats .is-error b { color: #b42332; }
.vl-import small { color: #667085; font-size: 9px; }
.vl-import small strong { color: #344054; }`,
    controls: [
      { key: 'progress', label: 'Rows processed', type: 'range', min: 0, max: 100, step: 1, defaultValue: 64, suffix: '%', full: true },
      { key: 'failures', label: 'Failed rows', type: 'range', min: 0, max: 100, step: 1, defaultValue: 15, full: true }
    ],
    applyControls(container, values) {
      const root = container.querySelector('.vl-import');
      if (!root) return;
      const progress = clamp(values.progress, 0, 100);
      const processed = Math.round(progress * 100);
      const failures = clamp(values.failures, 0, processed);
      const warnings = Math.min(Math.max(0, Math.round(processed * .006)), Math.max(0, processed - failures));
      const success = Math.max(0, processed - failures - warnings);
      root.setAttribute('aria-valuenow', String(progress));
      root.querySelector('.vl-import-count').textContent = processed.toLocaleString();
      root.querySelector('.vl-import-percent').textContent = `${progress}%`;
      root.querySelector('.vl-import-track span').style.width = `${progress}%`;
      root.querySelector('.vl-import-success').textContent = success.toLocaleString();
      root.querySelector('.vl-import-warning').textContent = warnings.toLocaleString();
      root.querySelector('.vl-import-error').textContent = failures.toLocaleString();
      root.querySelector('.vl-import-eta').textContent = progress >= 100 ? 'Complete' : `${Math.max(1, Math.round((100 - progress) * .5))} seconds`;
    },
    js: `AppLoader.setImportProgress = function (progress, totalRows, warningRows, failedRows) {
  const root = loaderElement.querySelector('.vl-import');
  if (!root) return;
  progress = Math.max(0, Math.min(100, Number(progress) || 0));
  totalRows = Math.max(1, Number(totalRows) || 10000);
  const processed = Math.round(totalRows * progress / 100);
  warningRows = Math.max(0, Number(warningRows) || 0);
  failedRows = Math.max(0, Number(failedRows) || 0);
  const successRows = Math.max(0, processed - warningRows - failedRows);
  root.setAttribute('aria-valuenow', String(progress));
  root.querySelector('.vl-import-count').textContent = processed.toLocaleString();
  root.querySelector('.vl-import-percent').textContent = Math.round(progress) + '%';
  root.querySelector('.vl-import-track span').style.width = progress + '%';
  root.querySelector('.vl-import-success').textContent = successRows.toLocaleString();
  root.querySelector('.vl-import-warning').textContent = warningRows.toLocaleString();
  root.querySelector('.vl-import-error').textContent = failedRows.toLocaleString();
};`
  },
  {
    id: 'network-retry-reconnect',
    name: 'Network Retry & Reconnect',
    category: 'Application',
    tech: 'CSS + JavaScript',
    description: 'Communicates connecting, retrying, reconnected, and failed network states for APIs, WebSockets, MCP, and mobile connections.',
    markup: `<div class="vl-network" role="status" aria-live="assertive" data-state="retrying">
  <div class="vl-network-icon" aria-hidden="true"><span></span></div>
  <div class="vl-network-copy"><strong class="vl-network-title">Connection interrupted</strong><span class="vl-network-detail">Retrying in 4 seconds…</span></div>
  <span class="vl-network-attempt">2 / 5</span>
</div>`,
    css: `.vl-network { width: min(270px, 84vw); display: grid; grid-template-columns: 42px minmax(0, 1fr) auto; align-items: center; gap: 11px; padding: 13px; border: 1px solid #dfe5ee; border-radius: 13px; background: #fff; color: #172033; font-family: system-ui, sans-serif; }
.vl-network-icon { position: relative; width: 40px; height: 40px; display: grid; place-items: center; border-radius: 12px; background: color-mix(in srgb, var(--loader-accent) 10%, #f4f6fa); }
.vl-network-icon::before, .vl-network-icon::after { content: ''; position: absolute; border: 2px solid var(--loader-accent); border-radius: 50%; animation: vl-network-wave calc(var(--loader-speed) * 1.45) ease-out infinite; }
.vl-network-icon::before { width: 12px; height: 12px; }
.vl-network-icon::after { width: 26px; height: 26px; animation-delay: -.65s; }
.vl-network-icon span { width: 6px; height: 6px; border-radius: 50%; background: var(--loader-accent); }
.vl-network-copy { min-width: 0; display: grid; gap: 3px; }
.vl-network-title { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-size: 12px; }
.vl-network-detail { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; color: #667085; font-size: 9px; }
.vl-network-attempt { align-self: start; padding: 4px 6px; border-radius: 999px; background: #f2f4f7; color: #667085; font-size: 8px; font-weight: 850; }
.vl-network[data-state="reconnected"] .vl-network-icon { background: #e7f8ef; --loader-accent: #087a46; }
.vl-network[data-state="failed"] .vl-network-icon { background: #ffe8eb; --loader-accent: #b42332; }
@keyframes vl-network-wave { from { transform: scale(.35); opacity: 1; } to { transform: scale(1.25); opacity: 0; } }`,
    controls: [
      {
        key: 'networkState', label: 'Connection state', type: 'select', defaultValue: 'retrying', full: true,
        options: [
          { value: 'connecting', label: 'Connecting' },
          { value: 'retrying', label: 'Retrying' },
          { value: 'reconnected', label: 'Reconnected' },
          { value: 'failed', label: 'Failed' }
        ]
      },
      { key: 'attempt', label: 'Retry attempt', type: 'range', min: 1, max: 5, step: 1, defaultValue: 2, full: true }
    ],
    applyControls(container, values) {
      const root = container.querySelector('.vl-network');
      if (!root) return;
      const attempt = clamp(values.attempt, 1, 5);
      const copy = {
        connecting: ['Connecting to service', 'Establishing a secure connection…'],
        retrying: ['Connection interrupted', `Retrying in ${Math.max(1, 6 - attempt)} seconds…`],
        reconnected: ['Connection restored', 'Your session is active again.'],
        failed: ['Unable to reconnect', 'Check your network and try again.']
      }[values.networkState] || ['Connection interrupted', 'Retrying…'];
      root.dataset.state = values.networkState;
      root.querySelector('.vl-network-title').textContent = copy[0];
      root.querySelector('.vl-network-detail').textContent = copy[1];
      root.querySelector('.vl-network-attempt').textContent = values.networkState === 'reconnected' ? 'Online' : `${attempt} / 5`;
    },
    js: `AppLoader.setConnectionState = function (state, attempt, detail) {
  const root = loaderElement.querySelector('.vl-network');
  if (!root) return;
  attempt = Math.max(1, Math.min(5, Number(attempt) || 1));
  const copy = {
    connecting: ['Connecting to service', 'Establishing a secure connection…'],
    retrying: ['Connection interrupted', 'Retrying shortly…'],
    reconnected: ['Connection restored', 'Your session is active again.'],
    failed: ['Unable to reconnect', 'Check your network and try again.']
  }[state] || ['Connection interrupted', 'Retrying shortly…'];
  root.dataset.state = state;
  root.querySelector('.vl-network-title').textContent = copy[0];
  root.querySelector('.vl-network-detail').textContent = detail || copy[1];
  root.querySelector('.vl-network-attempt').textContent = state === 'reconnected' ? 'Online' : attempt + ' / 5';
};`
  },
  {
    id: 'dashboard-skeleton',
    name: 'Dashboard Skeleton',
    category: 'Application',
    tech: 'Vanilla CSS',
    description: 'A complete management-dashboard placeholder with KPI cards, chart, filters, and table rows instead of a generic blank screen.',
    markup: `<div class="vl-dashboard-skeleton" aria-label="Loading dashboard" data-density="comfortable">
  <div class="vl-dash-toolbar"><span></span><i></i><i></i></div>
  <div class="vl-dash-kpis"><span></span><span></span><span></span></div>
  <div class="vl-dash-main"><div class="vl-dash-chart"><b></b><b></b><b></b><b></b><b></b></div><div class="vl-dash-side"><span></span><span></span><span></span></div></div>
  <div class="vl-dash-table"><span></span><span></span><span></span></div>
</div>`,
    css: `.vl-dashboard-skeleton { width: min(300px, 86vw); display: grid; gap: 7px; padding: 10px; border: 1px solid #e2e7ef; border-radius: 13px; background: #fff; }
.vl-dashboard-skeleton span, .vl-dashboard-skeleton i, .vl-dashboard-skeleton b { position: relative; display: block; overflow: hidden; border-radius: 6px; background: #e9edf3; }
.vl-dashboard-skeleton span::after, .vl-dashboard-skeleton i::after, .vl-dashboard-skeleton b::after { content: ''; position: absolute; inset: 0; transform: translateX(-110%); background: linear-gradient(90deg, transparent, color-mix(in srgb, var(--loader-accent) 13%, #fff), transparent); animation: vl-dashboard-shimmer calc(var(--loader-speed) * 1.35) ease-in-out infinite; }
.vl-dash-toolbar { display: grid; grid-template-columns: 1fr 38px 38px; gap: 6px; }
.vl-dash-toolbar span, .vl-dash-toolbar i { height: 20px; }
.vl-dash-kpis { display: grid; grid-template-columns: repeat(3, 1fr); gap: 6px; }
.vl-dash-kpis span { height: 42px; }
.vl-dash-main { display: grid; grid-template-columns: 1.7fr .8fr; gap: 6px; min-height: 78px; }
.vl-dash-chart { display: flex; align-items: end; gap: 5px; padding: 8px; border-radius: 7px; background: #f5f7fa; }
.vl-dash-chart b { flex: 1; min-width: 8px; }
.vl-dash-chart b:nth-child(1) { height: 28%; } .vl-dash-chart b:nth-child(2) { height: 55%; } .vl-dash-chart b:nth-child(3) { height: 42%; } .vl-dash-chart b:nth-child(4) { height: 74%; } .vl-dash-chart b:nth-child(5) { height: 62%; }
.vl-dash-side { display: grid; gap: 5px; }
.vl-dash-side span { min-height: 20px; }
.vl-dash-table { display: grid; gap: 5px; }
.vl-dash-table span { height: 13px; }
.vl-dashboard-skeleton[data-density="compact"] { gap: 4px; padding: 7px; }
.vl-dashboard-skeleton[data-density="compact"] .vl-dash-kpis span { height: 34px; }
.vl-dashboard-skeleton[data-density="spacious"] { gap: 10px; padding: 13px; }
.vl-dashboard-skeleton[data-density="spacious"] .vl-dash-kpis span { height: 48px; }
@keyframes vl-dashboard-shimmer { to { transform: translateX(110%); } }`,
    controls: [
      {
        key: 'density', label: 'Dashboard density', type: 'select', defaultValue: 'comfortable', full: true,
        options: [
          { value: 'compact', label: 'Compact ERP dashboard' },
          { value: 'comfortable', label: 'Comfortable analytics dashboard' },
          { value: 'spacious', label: 'Spacious management dashboard' }
        ]
      }
    ],
    applyControls(container, values) {
      const root = container.querySelector('.vl-dashboard-skeleton');
      if (root) root.dataset.density = values.density;
    },
    js: `AppLoader.setDashboardDensity = function (density) {
  const root = loaderElement.querySelector('.vl-dashboard-skeleton');
  if (root) root.dataset.density = density || 'comfortable';
};`
  },
  {
    id: 'ai-tool-calling-timeline',
    name: 'AI Tool Calling Timeline',
    category: 'Application',
    tech: 'CSS + JavaScript',
    description: 'Shows MCP/SQL/Search/API tool calls as a production-style staged timeline with retry and completion semantics.',
    markup: `<div class="vl-tool-timeline" role="status" aria-live="polite" data-step="search">
  <strong class="vl-tool-timeline-title">Tool Calling Progress</strong>
  <ol class="vl-tool-timeline-steps">
    <li class="vl-tool-timeline-step is-done" data-id="search">
      <span class="vl-tool-timeline-dot" aria-hidden="true"></span>
      <span class="vl-tool-timeline-copy"><strong>Search Tool</strong><small>discovering context</small></span>
      <span class="vl-tool-timeline-status">Done</span>
    </li>
    <li class="vl-tool-timeline-step is-active" data-id="sql">
      <span class="vl-tool-timeline-dot" aria-hidden="true"></span>
      <span class="vl-tool-timeline-copy"><strong>SQL Tool</strong><small>querying business tables</small></span>
      <span class="vl-tool-timeline-status">Queued</span>
    </li>
    <li class="vl-tool-timeline-step" data-id="mcp">
      <span class="vl-tool-timeline-dot" aria-hidden="true"></span>
      <span class="vl-tool-timeline-copy"><strong>MCP Tool</strong><small>invoking external systems</small></span>
      <span class="vl-tool-timeline-status">Queued</span>
    </li>
    <li class="vl-tool-timeline-step" data-id="browser">
      <span class="vl-tool-timeline-dot" aria-hidden="true"></span>
      <span class="vl-tool-timeline-copy"><strong>Browser Tool</strong><small>loading fallback evidence</small></span>
      <span class="vl-tool-timeline-status">Queued</span>
    </li>
    <li class="vl-tool-timeline-step" data-id="finalise">
      <span class="vl-tool-timeline-dot" aria-hidden="true"></span>
      <span class="vl-tool-timeline-copy"><strong>Finalise</strong><small>assembling final answer</small></span>
      <span class="vl-tool-timeline-status">Queued</span>
    </li>
  </ol>
  <p class="vl-tool-timeline-note">Elapsed 00:12 · 0/5 tools</p>
</div>`,
    css: `.vl-tool-timeline { width: min(300px, 84vw); display: grid; gap: 8px; padding: 10px; border: 1px solid #dfe5ee; border-radius: 13px; background: #fff; color: #172033; font-family: system-ui, sans-serif; }
.vl-tool-timeline-title { font-size: 12px; }
.vl-tool-timeline-steps { margin: 0; padding: 0; display: grid; gap: 4px; list-style: none; }
.vl-tool-timeline-step { display: grid; grid-template-columns: 18px 1fr auto; align-items: center; gap: 8px; min-height: 29px; padding: 4px 0; }
.vl-tool-timeline-dot { width: 10px; height: 10px; border-radius: 50%; background: #cfd6df; justify-self: center; }
.vl-tool-timeline-copy { min-width: 0; display: grid; gap: 2px; }
.vl-tool-timeline-copy strong { font-size: 10px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.vl-tool-timeline-copy small { font-size: 8px; color: #667085; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.vl-tool-timeline-status { font-size: 9px; color: #667085; font-weight: 750; min-width: 58px; text-align: right; }
.vl-tool-timeline-step.is-done .vl-tool-timeline-dot { background: var(--loader-accent); box-shadow: 0 0 0 4px color-mix(in srgb, var(--loader-accent) 12%, transparent); }
.vl-tool-timeline-step.is-active .vl-tool-timeline-dot { animation: vl-tool-pulse calc(var(--loader-speed) * 1.1) ease-in-out infinite; background: var(--loader-accent); }
.vl-tool-timeline-step.is-active { color: var(--loader-accent); }
.vl-tool-timeline-note { margin: 0; font-size: 9px; color: #667085; }
@keyframes vl-tool-pulse { 50% { transform: scale(1.25); opacity: .4; } }`,
    controls: [
      { key: 'step', label: 'Current timeline step', type: 'range', min: 0, max: 4, step: 1, defaultValue: 1, full: true },
      { key: 'duration', label: 'Elapsed seconds', type: 'range', min: 1, max: 120, step: 1, defaultValue: 12, suffix: 's', full: true }
    ],
    applyControls(container, values) {
      const root = container.querySelector('.vl-tool-timeline');
      if (!root) return;
      const step = clamp(values.step, 0, 4);
      root.querySelector('.vl-tool-timeline-note').textContent = `Elapsed 00:${String(values.duration).padStart(2, '0')} · ${step}/5 tools`;
      [...root.querySelectorAll('.vl-tool-timeline-step')].forEach((item, index) => {
        item.classList.toggle('is-active', index === step);
        item.classList.toggle('is-done', index < step);
        if (index === step) item.querySelector('.vl-tool-timeline-status').textContent = 'Running';
        else if (index < step) item.querySelector('.vl-tool-timeline-status').textContent = 'Done';
        else item.querySelector('.vl-tool-timeline-status').textContent = 'Queued';
      });
    },
    js: `AppLoader.setToolCallingState = function (stepIndex, toolName, elapsedSeconds) {
  const root = loaderElement.querySelector('.vl-tool-timeline');
  if (!root) return;
  const steps = root.querySelectorAll('.vl-tool-timeline-step');
  const index = Math.max(0, Math.min(steps.length - 1, Number(stepIndex) || 0));
  const names = { search: 'Search Tool', sql: 'SQL Tool', mcp: 'MCP Tool', browser: 'Browser Tool', finalise: 'Finalise' };
  const elapsed = Math.max(0, Number(elapsedSeconds) || 0);
  root.querySelector('.vl-tool-timeline-note').textContent = 'Elapsed 00:' + String(elapsed).padStart(2, '0') + ' · ' + index + '/5 tools';
  steps.forEach((step, i) => {
    step.classList.toggle('is-active', i === index);
    step.classList.toggle('is-done', i < index);
    step.querySelector('.vl-tool-timeline-status').textContent = i < index ? 'Done' : i === index ? 'Running' : 'Queued';
    if (toolName && names[step.dataset.id]) step.dataset.tool = toolName;
  });
};`
  },
  {
    id: 'rag-retrieval-pipeline',
    name: 'RAG Retrieval Pipeline',
    category: 'Application',
    tech: 'CSS + JavaScript',
    description: 'Displays retrieval pipeline progress from understanding to reranking and generation for retrieval-augmented generation loading states.',
    markup: `<div class="vl-rag-pipeline" role="status" aria-live="polite">
  <strong class="vl-rag-title">RAG Pipeline</strong>
  <div class="vl-rag-stage"><span class="vl-rag-chip"></span><strong class="vl-rag-stage-name">Understanding</strong><span class="vl-rag-stage-duration">01s</span></div>
  <div class="vl-rag-track"><i class="vl-rag-fill" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="8"></i></div>
  <div class="vl-rag-metrics">
    <span class="vl-rag-embedding"><strong>12</strong> chunks embedded</span>
    <span class="vl-rag-score"><strong>0.74</strong> confidence</span>
  </div>
  <small class="vl-rag-state-note">Waiting to start</small>
</div>`,
    css: `.vl-rag-pipeline { width: min(270px, 84vw); display: grid; gap: 7px; padding: 10px; border: 1px solid #dfe5ee; border-radius: 13px; background: #fff; color: #172033; font-family: system-ui, sans-serif; }
.vl-rag-title { font-size: 11px; }
.vl-rag-stage { display: grid; grid-template-columns: 12px 1fr auto; align-items: center; gap: 7px; }
.vl-rag-chip { width: 10px; height: 10px; border-radius: 50%; background: var(--loader-accent); animation: vl-rag-beat calc(var(--loader-speed) * .95) ease-in-out infinite; }
.vl-rag-stage-name { font-size: 11px; }
.vl-rag-stage-duration { color: #667085; font-size: 9px; font-weight: 750; }
.vl-rag-track { height: 7px; border-radius: 999px; background: color-mix(in srgb, var(--loader-accent) 12%, #e8edf5); overflow: hidden; }
.vl-rag-fill { display: block; width: 8%; height: 100%; border-radius: inherit; background: var(--loader-accent); transition: width .35s ease; box-shadow: 0 0 9px color-mix(in srgb, var(--loader-accent) 20%, transparent); }
.vl-rag-metrics { display: flex; justify-content: space-between; gap: 8px; color: #667085; font-size: 8px; }
.vl-rag-metrics strong { color: #172033; font-size: 10px; font-weight: 800; }
.vl-rag-state-note { margin: 0; color: #667085; font-size: 8px; }
.vl-rag-pipeline[data-stage="retrieving"] .vl-rag-chip { animation-duration: calc(var(--loader-speed) * 1.2); }
.vl-rag-pipeline[data-stage="extracting"] .vl-rag-chip,
.vl-rag-pipeline[data-stage="validating"] .vl-rag-chip,
.vl-rag-pipeline[data-stage="generating"] .vl-rag-chip { animation-duration: calc(var(--loader-speed) * .72); }
@keyframes vl-rag-beat { 50% { transform: scale(.7); opacity: .45; } }`,
    controls: [
      { key: 'stageIndex', label: 'Pipeline stage', type: 'range', min: 0, max: 4, step: 1, defaultValue: 2, full: true },
      { key: 'confidence', label: 'Confidence', type: 'range', min: 0, max: 100, step: 1, defaultValue: 74, suffix: '%', full: true }
    ],
    applyControls(container, values) {
      const root = container.querySelector('.vl-rag-pipeline');
      if (!root) return;
      const stageIndex = clamp(values.stageIndex, 0, 4);
      const stages = [
        ['understanding', 'Understanding'],
        ['embedding', 'Embedding'],
        ['searching', 'Searching'],
        ['reranking', 'Reranking'],
        ['generating', 'Generating']
      ];
      const [stage, title] = stages[stageIndex] || stages[0];
      const conf = clamp(values.confidence, 0, 100);
      const progress = Math.round((stageIndex / 4) * 100);
      root.dataset.stage = stage;
      root.querySelector('.vl-rag-stage').style.setProperty('--unused', '1');
      root.querySelector('.vl-rag-stage-name').textContent = `${title} phase`;
      root.querySelector('.vl-rag-stage-duration').textContent = `${String(4 + stageIndex).padStart(2, '0')}s`;
      root.querySelector('.vl-rag-fill').style.width = `${progress}%`;
      root.querySelector('.vl-rag-fill').setAttribute('aria-valuenow', String(progress));
      root.querySelector('.vl-rag-embedding').innerHTML = `<strong>${12 + (stageIndex * 9)}</strong> chunks embedded`;
      root.querySelector('.vl-rag-score').innerHTML = `<strong>${(conf / 100).toFixed(2)}</strong> confidence`;
      root.querySelector('.vl-rag-state-note').textContent = progress === 100 ? 'Generation complete' : `Queued for ${title.toLowerCase()} stage`;
    },
    js: `AppLoader.setRAGStage = function (stageIndex, confidence) {
  const root = loaderElement.querySelector('.vl-rag-pipeline');
  if (!root) return;
  stageIndex = Math.max(0, Math.min(4, Number(stageIndex) || 0));
  const stages = ['understanding', 'embedding', 'searching', 'reranking', 'generating'];
  const labels = ['Understanding', 'Embedding', 'Searching', 'Reranking', 'Generating'];
  const stage = stages[stageIndex] || stages[0];
  const score = Math.max(0, Math.min(100, Number(confidence) || 0));
  const progress = Math.round((stageIndex / 4) * 100);
  root.dataset.stage = stage;
  root.querySelector('.vl-rag-stage-name').textContent = labels[stageIndex] + ' phase';
  root.querySelector('.vl-rag-stage-duration').textContent = String(4 + stageIndex).padStart(2, '0') + 's';
  root.querySelector('.vl-rag-fill').style.width = progress + '%';
  root.querySelector('.vl-rag-fill').setAttribute('aria-valuenow', progress);
  root.querySelector('.vl-rag-embedding').innerHTML = '<strong>' + (12 + (stageIndex * 9)) + '</strong> chunks embedded';
  root.querySelector('.vl-rag-score').innerHTML = '<strong>' + (score / 100).toFixed(2) + '</strong> confidence';
  root.querySelector('.vl-rag-state-note').textContent = progress === 100 ? 'Generation complete' : 'Queued for ' + labels[stageIndex].toLowerCase() + ' stage';
};`
  },
  {
    id: 'mcp-connection-handshake',
    name: 'MCP Connection Handshake',
    category: 'Application',
    tech: 'CSS + JavaScript',
    description: 'Visualises MCP lifecycle from transport connect through authenticate, discover tools, and ready state.',
    markup: `<div class="vl-mcp-handshake" role="status" aria-live="polite" data-state="connecting">
  <strong class="vl-mcp-title">MCP Handshake</strong>
  <div class="vl-mcp-flow">
    <span class="vl-mcp-circle">1</span><span>Connecting</span><strong class="vl-mcp-status">Connecting transport</strong>
  </div>
  <p class="vl-mcp-detail">Waiting for transport...</p>
  <span class="vl-mcp-attempt">Attempt 1 / 3</span>
</div>`,
    css: `.vl-mcp-handshake { width: min(270px, 84vw); display: grid; gap: 8px; padding: 12px; border: 1px solid #dfe5ee; border-radius: 13px; background: #fff; color: #172033; font-family: system-ui, sans-serif; }
.vl-mcp-title { font-size: 11px; }
.vl-mcp-flow { display: grid; grid-template-columns: 17px 1fr auto; align-items: center; gap: 8px; }
.vl-mcp-circle { width: 17px; height: 17px; border-radius: 50%; color: #fff; display: grid; place-items: center; font-size: 9px; font-weight: 900; background: var(--loader-accent); animation: vl-mcp-spin calc(var(--loader-speed) * 1.25) linear infinite; }
.vl-mcp-status { font-size: 10px; color: var(--loader-accent); }
.vl-mcp-detail { margin: 0; font-size: 9px; color: #667085; }
.vl-mcp-attempt { justify-self: start; font-size: 8px; padding: 4px 7px; border-radius: 999px; background: #f2f4f7; color: #667085; font-weight: 850; }
.vl-mcp-handshake[data-state="auth"] .vl-mcp-circle { background: #0f766e; }
.vl-mcp-handshake[data-state="discover"] .vl-mcp-circle { background: #7c3aed; }
.vl-mcp-handshake[data-state="ready"] .vl-mcp-circle { background: #0f9d58; }
.vl-mcp-handshake[data-state="failed"] .vl-mcp-circle { background: #b42332; }
@keyframes vl-mcp-spin { to { transform: rotate(360deg); } }`,
    controls: [
      {
        key: 'mcpState', label: 'Handshake state', type: 'select', defaultValue: 'auth', full: true,
        options: [
          { value: 'connecting', label: 'Connecting' },
          { value: 'auth', label: 'Authenticating' },
          { value: 'discover', label: 'Discovering tools' },
          { value: 'ready', label: 'Ready' },
          { value: 'failed', label: 'Failed' }
        ]
      },
      { key: 'attempt', label: 'Attempt number', type: 'range', min: 1, max: 3, step: 1, defaultValue: 1, full: true }
    ],
    applyControls(container, values) {
      const root = container.querySelector('.vl-mcp-handshake');
      if (!root) return;
      const detail = {
        connecting: ['Connecting to transport', 'Waiting for pipe'],
        auth: ['Authenticating credentials', 'Negotiating MCP session'],
        discover: ['Discovering tools', 'Loading available tool schema'],
        ready: ['Session ready', 'Tools discovered and callable'],
        failed: ['Handshake failed', 'User intervention required']
      }[values.mcpState] || ['Connecting', 'Waiting…'];
      root.dataset.state = values.mcpState;
      root.querySelector('.vl-mcp-status').textContent = detail[0];
      root.querySelector('.vl-mcp-detail').textContent = detail[1];
      root.querySelector('.vl-mcp-attempt').textContent = `Attempt ${clamp(values.attempt, 1, 3)} / 3`;
    },
    js: `AppLoader.setMCPState = function (state, attempt, detail) {
  const root = loaderElement.querySelector('.vl-mcp-handshake');
  if (!root) return;
  const map = {
    connecting: ['Connecting to transport', 'Waiting for pipe'],
    auth: ['Authenticating credentials', 'Negotiating MCP session'],
    discover: ['Discovering tools', 'Loading available tool schema'],
    ready: ['Session ready', 'Tools discovered and callable'],
    failed: ['Handshake failed', 'User intervention required']
  };
  const entry = map[state] || map.connecting;
  root.dataset.state = state || 'connecting';
  root.querySelector('.vl-mcp-status').textContent = detail || entry[0];
  root.querySelector('.vl-mcp-detail').textContent = entry[1];
  root.querySelector('.vl-mcp-attempt').textContent = 'Attempt ' + Math.max(1, Math.min(3, Number(attempt) || 1)) + ' / 3';
};`
  },
  {
    id: 'sql-query-executor',
    name: 'SQL Query Executor',
    category: 'Application',
    tech: 'CSS + JavaScript',
    description: 'Shows parser, planner, execution, row fetching, and rendering stages for database query-driven applications.',
    markup: `<div class="vl-sql-executor" role="status" aria-live="polite" aria-label="SQL execution in progress">
  <div class="vl-sql-top">
    <strong class="vl-sql-name">SELECT ...</strong>
    <span class="vl-sql-phase">Parsing query</span>
  </div>
  <div class="vl-sql-track"><span></span></div>
  <div class="vl-sql-metrics">
    <span>Rows fetched <strong class="vl-sql-rows">0</strong></span>
    <span>Latency <strong class="vl-sql-latency">120 ms</strong></span>
  </div>
</div>`,
    css: `.vl-sql-executor { width: min(280px, 84vw); display: grid; gap: 8px; padding: 12px; border: 1px solid #dfe5ee; border-radius: 12px; background: #fff; color: #172033; font-family: system-ui, sans-serif; }
.vl-sql-top { display: flex; justify-content: space-between; align-items: baseline; gap: 8px; }
.vl-sql-name { font-size: 11px; }
.vl-sql-phase { font-size: 9px; color: var(--loader-accent); font-weight: 750; }
.vl-sql-track { height: 7px; border-radius: 999px; background: color-mix(in srgb, var(--loader-accent) 12%, #e8edf5); overflow: hidden; }
.vl-sql-track span { display: block; width: 0; height: 100%; background: var(--loader-accent); box-shadow: 0 0 12px color-mix(in srgb, var(--loader-accent) 22%, transparent); transition: width .25s ease; }
.vl-sql-metrics { display: flex; justify-content: space-between; gap: 8px; font-size: 8px; color: #667085; }
.vl-sql-metrics strong { color: #172033; font-size: 10px; font-weight: 800; }
`,
    controls: [
      { key: 'phase', label: 'Query phase', type: 'select', defaultValue: 'planning', full: true, options: ['parsing', 'planning', 'executing', 'fetching', 'rendering'].map(v => ({ value: v, label: v[0].toUpperCase() + v.slice(1) })) },
      { key: 'rows', label: 'Rows fetched', type: 'range', min: 0, max: 100, step: 1, defaultValue: 1200, suffix: ' rows', full: true },
      { key: 'latency', label: 'Latency', type: 'range', min: 40, max: 2000, step: 20, defaultValue: 120, suffix: 'ms', full: true }
    ],
    applyControls(container, values) {
      const root = container.querySelector('.vl-sql-executor');
      if (!root) return;
      const phaseMap = {
        parsing: ['Parsing query', 18],
        planning: ['Planning execution', 36],
        executing: ['Executing query', 54],
        fetching: ['Fetching rows', 82],
        rendering: ['Rendering output', 100]
      };
      const [label, progress] = phaseMap[values.phase] || ['Parsing query', 0];
      root.querySelector('.vl-sql-phase').textContent = label;
      root.querySelector('.vl-sql-track span').style.width = `${progress}%`;
      root.querySelector('.vl-sql-rows').textContent = Number(values.rows || 0).toLocaleString();
      root.querySelector('.vl-sql-latency').textContent = `${clamp(values.latency, 40, 5000)} ms`;
      root.querySelector('.vl-sql-name').textContent = 'Query ' + String(Math.floor(clamp(values.rows, 0, 10000) / 40).padStart(3, '0'));
    },
    js: `AppLoader.setSqlExecution = function (phase, rows, latencyMs) {
  const root = loaderElement.querySelector('.vl-sql-executor');
  if (!root) return;
  const phaseMap = { parsing: [18, 'Parsing query'], planning: [36, 'Planning execution'], executing: [54, 'Executing query'], fetching: [82, 'Fetching rows'], rendering: [100, 'Rendering output'] };
  const [progress, label] = phaseMap[phase] || phaseMap.parsing;
  root.querySelector('.vl-sql-phase').textContent = label;
  root.querySelector('.vl-sql-track span').style.width = progress + '%';
  const rowValue = Math.max(0, Math.round(Number(rows) || 0));
  const latency = Math.max(1, Number(latencyMs) || 0);
  root.querySelector('.vl-sql-rows').textContent = rowValue.toLocaleString();
  root.querySelector('.vl-sql-latency').textContent = latency + ' ms';
};`
  },
  {
    id: 'report-generation-pipeline',
    name: 'Report Generation Pipeline',
    category: 'Application',
    tech: 'CSS + JavaScript',
    description: 'Tracks end-to-end report generation from query to chart rendering and file packaging.',
    markup: `<div class="vl-report-pipeline" role="status" aria-live="polite">
  <strong class="vl-report-title">Report Pipeline</strong>
  <p class="vl-report-step">Querying data warehouse…</p>
  <div class="vl-report-track"><span></span></div>
  <div class="vl-report-stats"><span>Rows aggregated <strong class="vl-report-rows">18,200</strong></span><span>File size <strong class="vl-report-file">1.4 MB</strong></span></div>
</div>`,
    css: `.vl-report-pipeline { width: min(280px, 84vw); display: grid; gap: 7px; padding: 10px; border: 1px solid #dfe5ee; border-radius: 13px; background: #fff; color: #172033; font-family: system-ui, sans-serif; }
.vl-report-title { font-size: 12px; }
.vl-report-step { margin: 0; font-size: 10px; color: var(--loader-accent); }
.vl-report-track { height: 8px; border-radius: 999px; background: color-mix(in srgb, var(--loader-accent) 14%, #e8edf5); overflow: hidden; }
.vl-report-track span { display: block; width: 26%; height: 100%; border-radius: inherit; background: var(--loader-accent); animation: vl-report-progress calc(var(--loader-speed) * 1.05) ease-in-out infinite; }
.vl-report-stats { display: flex; justify-content: space-between; gap: 8px; color: #667085; font-size: 8px; }
.vl-report-stats strong { color: #172033; font-size: 10px; font-weight: 800; }
@keyframes vl-report-progress { 0% { transform: translateX(-110%); } 100% { transform: translateX(110%); } }`,
    controls: [
      {
        key: 'stage', label: 'Report stage', type: 'select', defaultValue: 'building', full: true,
        options: [
          { value: 'querying', label: 'Querying data' },
          { value: 'aggregating', label: 'Aggregating' },
          { value: 'charting', label: 'Building chart' },
          { value: 'rendering', label: 'Rendering report' },
          { value: 'packaging', label: 'Packaging output' }
        ]
      },
      { key: 'rows', label: 'Aggregated rows', type: 'range', min: 1000, max: 100000, step: 1000, defaultValue: 18200, suffix: ' rows', full: true }
    ],
    applyControls(container, values) {
      const root = container.querySelector('.vl-report-pipeline');
      if (!root) return;
      const rows = clamp(values.rows, 1000, 100000);
      const stageNames = {
        querying: 'Querying data warehouse…',
        aggregating: 'Aggregating dimensions…',
        charting: 'Building chart visuals…',
        rendering: 'Rendering report sections…',
        packaging: 'Packaging PDF bundle…'
      };
      const fileMb = Math.max(0.2, rows / 100000 * 5).toFixed(1);
      root.querySelector('.vl-report-step').textContent = stageNames[values.stage] || 'Processing…';
      root.querySelector('.vl-report-rows').textContent = rows.toLocaleString();
      root.querySelector('.vl-report-file').textContent = fileMb + ' MB';
    },
    js: `AppLoader.setReportProgress = function (stage, rows) {
  const root = loaderElement.querySelector('.vl-report-pipeline');
  if (!root) return;
  const names = {
    querying: 'Querying data warehouse…',
    aggregating: 'Aggregating dimensions…',
    charting: 'Building chart visuals…',
    rendering: 'Rendering report sections…',
    packaging: 'Packaging PDF bundle…'
  };
  const stageRows = Math.max(1000, Math.round(Number(rows) || 1000));
  root.querySelector('.vl-report-step').textContent = names[stage] || 'Processing…';
  root.querySelector('.vl-report-rows').textContent = stageRows.toLocaleString();
  root.querySelector('.vl-report-file').textContent = (Math.max(0.2, stageRows / 100000 * 5)).toFixed(1) + ' MB';
};`
  },
  {
    id: 'einvoice-submission',
    name: 'E-Invoice Submission',
    category: 'Application',
    tech: 'CSS + JavaScript',
    description: 'Tracks invoice validation, signing, government submission, and acknowledgement in a legal workflow.',
    markup: `<div class="vl-einvoice" role="status" aria-live="polite">
  <strong class="vl-einvoice-title">E-Invoice Submission</strong>
  <div class="vl-einvoice-track">
    <span class="vl-einvoice-step active">Validating</span>
    <span class="vl-einvoice-step">Signing</span>
    <span class="vl-einvoice-step">Submitting</span>
    <span class="vl-einvoice-step">Acknowledged</span>
  </div>
  <p class="vl-einvoice-msg">Validating payload against tax schema</p>
  <small class="vl-einvoice-ref">Ref: INV-2026-08</small>
</div>`,
    css: `.vl-einvoice { width: min(270px, 84vw); display: grid; gap: 7px; padding: 10px; border: 1px solid #dfe5ee; border-radius: 13px; background: #fff; color: #172033; font-family: system-ui, sans-serif; }
.vl-einvoice-title { font-size: 11px; }
.vl-einvoice-track { display: grid; grid-template-columns: repeat(4, 1fr); gap: 4px; }
.vl-einvoice-step { display: block; text-align: center; border-radius: 10px; padding: 4px 2px; background: #f3f6fb; color: #667085; font-size: 8px; font-weight: 820; text-overflow: ellipsis; overflow: hidden; white-space: nowrap; }
.vl-einvoice-step.active { background: color-mix(in srgb, var(--loader-accent) 14%, #fff); color: var(--loader-accent); }
.vl-einvoice-msg { margin: 0; font-size: 9px; color: #667085; }
.vl-einvoice-ref { color: #667085; font-size: 8px; }`,
    controls: [
      { key: 'index', label: 'Current step', type: 'range', min: 0, max: 3, step: 1, defaultValue: 0, full: true },
      { key: 'invoice', label: 'Invoice suffix', type: 'range', min: 1000, max: 9999, step: 1, defaultValue: 2026, full: true }
    ],
    applyControls(container, values) {
      const root = container.querySelector('.vl-einvoice');
      if (!root) return;
      const idx = clamp(values.index, 0, 3);
      const msgs = ['Validating payload against tax schema', 'Signing payload with compliant certificate', 'Submitting to government endpoint', 'Acknowledgement received'];
      [...root.querySelectorAll('.vl-einvoice-step')].forEach((step, index) => step.classList.toggle('active', index <= idx));
      root.querySelector('.vl-einvoice-msg').textContent = msgs[idx] || msgs[0];
      root.querySelector('.vl-einvoice-ref').textContent = `Ref: INV-2026-${clamp(values.invoice, 1000, 9999)}`;
    },
    js: `AppLoader.setEInvoiceStage = function (stepIndex, invoiceNo) {
  const root = loaderElement.querySelector('.vl-einvoice');
  if (!root) return;
  const idx = Math.max(0, Math.min(3, Number(stepIndex) || 0));
  const messages = ['Validating payload against tax schema', 'Signing payload with compliant certificate', 'Submitting to government endpoint', 'Acknowledgement received'];
  [...root.querySelectorAll('.vl-einvoice-step')].forEach((step, i) => step.classList.toggle('active', i <= idx));
  root.querySelector('.vl-einvoice-msg').textContent = messages[idx] || messages[0];
  if (invoiceNo) root.querySelector('.vl-einvoice-ref').textContent = 'Ref: ' + invoiceNo;
};`
  },
  {
    id: 'payment-verification',
    name: 'Payment Verification',
    category: 'Application',
    tech: 'CSS + JavaScript',
    description: 'Shows payment gateway lifecycle from authorization to completion or rejection with explicit exception handling.',
    markup: `<div class="vl-payment" role="status" aria-live="polite" aria-busy="true">
  <strong class="vl-payment-title">Payment Verification</strong>
  <div class="vl-payment-progress">
    <span class="vl-payment-state is-active">Authorising</span>
    <span class="vl-payment-state">Processing</span>
    <span class="vl-payment-state">Confirming</span>
    <span class="vl-payment-state">Completed</span>
  </div>
  <div class="vl-payment-meta"><span>Card: **** **** **** 4021</span><strong class="vl-payment-amount">$6,240.00</strong></div>
  <small class="vl-payment-msg">Authorization request sent</small>
</div>`,
    css: `.vl-payment { width: min(280px, 84vw); display: grid; gap: 7px; padding: 10px; border: 1px solid #dfe5ee; border-radius: 13px; background: #fff; color: #172033; font-family: system-ui, sans-serif; }
.vl-payment-title { font-size: 11px; }
.vl-payment-progress { display: grid; grid-template-columns: repeat(4, 1fr); gap: 4px; }
.vl-payment-state { border-radius: 999px; background: #f3f6fb; color: #667085; text-align: center; padding: 5px 4px; font-size: 8px; font-weight: 800; text-overflow: ellipsis; overflow: hidden; white-space: nowrap; }
.vl-payment-state.is-active { background: color-mix(in srgb, var(--loader-accent) 16%, #fff); color: var(--loader-accent); }
.vl-payment-state.is-success { background: #e7f8ef; color: #087a46; }
.vl-payment-state.is-failed { background: #ffe8eb; color: #b42332; }
.vl-payment-meta { display: flex; justify-content: space-between; gap: 8px; font-size: 9px; color: #667085; }
.vl-payment-meta strong { color: #172033; font-size: 11px; }
.vl-payment-msg { margin: 0; color: #667085; font-size: 8px; }`,
    controls: [
      {
        key: 'state', label: 'Payment status', type: 'select', defaultValue: 'authorizing', full: true,
        options: [
          { value: 'authorizing', label: 'Authorising' },
          { value: 'processing', label: 'Processing' },
          { value: 'confirming', label: 'Confirming' },
          { value: 'completed', label: 'Completed' },
          { value: 'rejected', label: 'Rejected' }
        ]
      },
      { key: 'amount', label: 'Amount ($)', type: 'range', min: 20, max: 25000, step: 10, defaultValue: 6240, full: true }
    ],
    applyControls(container, values) {
      const root = container.querySelector('.vl-payment');
      if (!root) return;
      const states = ['authorizing', 'processing', 'confirming', 'completed'];
      [...root.querySelectorAll('.vl-payment-state')].forEach((state, index) => {
        const key = ['Authorising', 'Processing', 'Confirming', 'Completed'][index];
        state.className = 'vl-payment-state';
        state.textContent = key;
      });
      if (values.state === 'rejected') {
        const all = root.querySelectorAll('.vl-payment-state');
        all.forEach(state => state.classList.add('is-failed'));
        root.querySelector('.vl-payment-msg').textContent = 'Gateway rejected payment';
        all[2].textContent = 'Rejected';
        return;
      }
      const index = Math.max(0, Math.min(states.length - 1, states.indexOf(values.state)));
      const labels = {
        authorizing: ['Authorising payment', 'Authorization request sent'],
        processing: ['Processing payment', 'Authorizing card payment'],
        confirming: ['Confirming settlement', 'Checking settlement result'],
        completed: ['Payment completed', 'Capture and settlement confirmed']
      };
      for (let i = 0; i <= index; i++) root.querySelectorAll('.vl-payment-state')[i].classList.add('is-active');
      root.querySelector('.vl-payment-state.is-active:last-child').classList.toggle('is-success', values.state === 'completed');
      root.querySelector('.vl-payment-state.is-active:last-child').textContent = values.state === 'completed' ? 'Completed' : root.querySelectorAll('.vl-payment-state')[index].textContent;
      root.querySelector('.vl-payment-msg').textContent = labels[values.state]?.[1] || 'Processing';
      root.querySelector('.vl-payment-amount').textContent = '$' + (Math.max(20, Number(values.amount) || 6240)).toLocaleString();
    },
    js: `AppLoader.setPaymentState = function (status, amount) {
  const root = loaderElement.querySelector('.vl-payment');
  if (!root) return;
  const states = ['authorizing', 'processing', 'confirming', 'completed'];
  const labels = {
    authorizing: ['Authorizing payment', 'Authorization request sent'],
    processing: ['Processing payment', 'Card transaction in progress'],
    confirming: ['Confirming settlement', 'Checking settlement result'],
    completed: ['Payment completed', 'Capture and settlement confirmed'],
    rejected: ['Payment rejected', 'Gateway declined the transaction']
  };
  const nodes = root.querySelectorAll('.vl-payment-state');
  nodes.forEach(node => node.className = 'vl-payment-state');
  if (status === 'rejected') {
    nodes.forEach(node => node.classList.add('is-failed'));
    nodes[3].textContent = 'Rejected';
    root.querySelector('.vl-payment-msg').textContent = 'Gateway declined the transaction';
  } else {
    const index = Math.max(0, Math.min(states.length - 1, states.indexOf(status)));
    for (let i = 0; i <= index; i++) nodes[i].classList.add('is-active');
    nodes[Math.min(states.length - 1, index)].classList.toggle('is-success', status === 'completed');
    root.querySelector('.vl-payment-msg').textContent = labels[status] ? labels[status][1] : 'Processing';
  }
  root.querySelector('.vl-payment-amount').textContent = '$' + (Math.max(20, Number(amount) || 6240)).toLocaleString();
};`
  },
  {
    id: 'order-fulfillment-tracker',
    name: 'Order Fulfilment',
    category: 'Application',
    tech: 'CSS + JavaScript',
    description: 'Tracks order pipeline states for ecommerce operations: confirmed, picking, packing, shipping and delivered.',
    markup: `<div class="vl-order" role="status" aria-live="polite">
  <strong class="vl-order-title">Order Fulfilment</strong>
  <div class="vl-order-steps">
    <span class="vl-order-step is-done">Confirmed</span>
    <span class="vl-order-step is-active">Picking</span>
    <span class="vl-order-step">Packing</span>
    <span class="vl-order-step">Shipping</span>
    <span class="vl-order-step">Delivered</span>
  </div>
  <p class="vl-order-msg">Inventory allocation is complete</p>
  <small class="vl-order-location">Warehouse A → City Hub</small>
</div>`,
    css: `.vl-order { width: min(300px, 84vw); display: grid; gap: 7px; padding: 10px; border: 1px solid #dfe5ee; border-radius: 13px; background: #fff; color: #172033; font-family: system-ui, sans-serif; }
.vl-order-title { font-size: 11px; }
.vl-order-steps { display: grid; grid-template-columns: repeat(5, 1fr); gap: 3px; }
.vl-order-step { text-align: center; border-radius: 8px; padding: 5px 2px; background: #f3f6fb; color: #667085; font-size: 7px; font-weight: 800; text-overflow: ellipsis; overflow: hidden; white-space: nowrap; }
.vl-order-step.is-done { background: color-mix(in srgb, var(--loader-accent) 13%, #fff); color: var(--loader-accent); }
.vl-order-step.is-active { animation: vl-order-pulse calc(var(--loader-speed) * 1.2) ease-in-out infinite; background: color-mix(in srgb, var(--loader-accent) 26%, #fff); color: #0f766e; }
.vl-order-msg, .vl-order-location { margin: 0; color: #667085; font-size: 9px; }
@keyframes vl-order-pulse { 50% { opacity: .6; } }`,
    controls: [
      { key: 'stage', label: 'Fulfilment stage', type: 'range', min: 0, max: 4, step: 1, defaultValue: 1, full: true },
      { key: 'eta', label: 'ETA minutes', type: 'range', min: 10, max: 240, step: 5, defaultValue: 95, suffix: 'm', full: true }
    ],
    applyControls(container, values) {
      const root = container.querySelector('.vl-order');
      if (!root) return;
      const index = clamp(values.stage, 0, 4);
      const messages = ['Order confirmed', 'Items picked', 'Package prepared', 'In transit to customer', 'Delivered to destination'];
      [...root.querySelectorAll('.vl-order-step')].forEach((step, idx) => {
        step.className = 'vl-order-step';
        if (idx < index) step.classList.add('is-done');
        if (idx === index) step.classList.add('is-active');
      });
      root.querySelector('.vl-order-msg').textContent = messages[index] + ` (${values.eta}m remaining)`;
      root.querySelector('.vl-order-location').textContent = `Warehouse A → ${index >= 4 ? 'Customer' : index >= 3 ? 'City Hub' : 'Dispatch Yard'}`;
    },
    js: `AppLoader.setFulfilmentStage = function (stage, etaMinutes) {
  const root = loaderElement.querySelector('.vl-order');
  if (!root) return;
  const index = Math.max(0, Math.min(4, Number(stage) || 0));
  const messages = ['Order confirmed', 'Items picked', 'Package prepared', 'In transit to customer', 'Delivered to destination'];
  const eta = Math.max(1, Number(etaMinutes) || 0);
  const steps = root.querySelectorAll('.vl-order-step');
  steps.forEach((step, idx) => {
    step.className = 'vl-order-step';
    if (idx < index) step.classList.add('is-done');
    if (idx === index) step.classList.add('is-active');
  });
  root.querySelector('.vl-order-msg').textContent = messages[index] + ' (' + eta + 'm remaining)';
  root.querySelector('.vl-order-location').textContent = 'Warehouse A → ' + (index >= 4 ? 'Customer' : index >= 3 ? 'City Hub' : 'Dispatch Yard');
};`
  },
  {
    id: 'permission-synchronisation',
    name: 'Permission Synchronisation',
    category: 'Application',
    tech: 'CSS + JavaScript',
    description: 'Synchronises roles, modules, UAR rules, and tenant permissions across identity providers and target services.',
    markup: `<div class="vl-permission-sync" role="status" aria-live="polite">
  <strong class="vl-permission-title">Permission Synchronisation</strong>
  <div class="vl-permission-grid">
    <span><b>Roles</b><small class="vl-permission-roles">120 synced</small></span>
    <span><b>Modules</b><small class="vl-permission-modules">27 synced</small></span>
    <span><b>Rules</b><small class="vl-permission-rules">89 synced</small></span>
    <span><b>Tenants</b><small class="vl-permission-tenants">12 synced</small></span>
  </div>
  <small class="vl-permission-state">Syncing roles from source system</small>
</div>`,
    css: `.vl-permission-sync { width: min(280px, 84vw); display: grid; gap: 7px; padding: 10px; border: 1px solid #dfe5ee; border-radius: 13px; background: #fff; color: #172033; font-family: system-ui, sans-serif; }
.vl-permission-title { font-size: 11px; }
.vl-permission-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 4px; }
.vl-permission-grid span { display: grid; gap: 3px; padding: 6px; border-radius: 8px; background: #f3f6fb; }
.vl-permission-grid b { font-size: 9px; color: #667085; }
.vl-permission-grid small { color: #172033; font-size: 10px; font-weight: 800; }
.vl-permission-state { color: #667085; font-size: 8px; }`,
    controls: [
      {
        key: 'phase', label: 'Sync phase', type: 'select', defaultValue: 'roles', full: true,
        options: [
          { value: 'roles', label: 'Syncing roles' },
          { value: 'modules', label: 'Syncing modules' },
          { value: 'rules', label: 'Syncing UAR rules' },
          { value: 'tenants', label: 'Syncing tenants' },
          { value: 'complete', label: 'Sync complete' }
        ]
      },
      { key: 'count', label: 'Records synced', type: 'range', min: 1, max: 250, step: 1, defaultValue: 120, full: true }
    ],
    applyControls(container, values) {
      const root = container.querySelector('.vl-permission-sync');
      if (!root) return;
      const count = clamp(values.count, 1, 250);
      const map = {
        roles: ['Syncing roles from source system', 'roles', '.vl-permission-roles'],
        modules: ['Syncing modules from policy store', 'modules', '.vl-permission-modules'],
        rules: ['Synchronizing UAR rules', 'rules', '.vl-permission-rules'],
        tenants: ['Synchronizing tenant matrix', 'tenants', '.vl-permission-tenants'],
        complete: ['Permissions up to date', 'roles', '.vl-permission-roles']
      };
      const [state, key, selector] = map[values.phase] || map.roles;
      root.querySelector('.vl-permission-state').textContent = state;
      if (selector) root.querySelector(selector).textContent = `${count} synced`;
      const total = (key === 'roles' ? 4 : key === 'modules' ? 3 : key === 'rules' ? 4 : key === 'tenants' ? 2 : 1) * 12;
      if (key !== 'roles') root.querySelector('.vl-permission-modules').textContent = `${Math.max(5, Math.round(total * .6))} synced`;
      if (key !== 'roles' && key !== 'modules') root.querySelector('.vl-permission-rules').textContent = `${Math.max(10, Math.round(total * .7))} synced`;
      if (key !== 'roles' && key !== 'modules' && key !== 'rules') root.querySelector('.vl-permission-tenants').textContent = `${Math.max(3, Math.round(total * .4))} synced`;
    },
    js: `AppLoader.setPermissionSync = function (phase, synced) {
  const root = loaderElement.querySelector('.vl-permission-sync');
  if (!root) return;
  const syncedValue = Math.max(1, Number(synced) || 0);
  const map = {
    roles: ['Syncing roles from source system', '.vl-permission-roles'],
    modules: ['Syncing modules from policy store', '.vl-permission-modules'],
    rules: ['Synchronizing UAR rules', '.vl-permission-rules'],
    tenants: ['Synchronizing tenant matrix', '.vl-permission-tenants'],
    complete: ['Permissions up to date', '.vl-permission-roles']
  };
  const entry = map[phase] || map.roles;
  root.querySelector('.vl-permission-state').textContent = entry[0];
  const target = root.querySelector(entry[1]);
  if (target) target.textContent = syncedValue + ' synced';
};`
  },
  {
    id: 'financial-reconciliation',
    name: 'Financial Reconciliation',
    category: 'Application',
    tech: 'CSS + JavaScript',
    description: 'Presents reconciliation of invoices, payments, and bank entries with matched counts and unresolved exceptions.',
    markup: `<div class="vl-reconcile" role="status" aria-live="polite">
  <strong class="vl-reconcile-title">Financial Reconciliation</strong>
  <div class="vl-reconcile-grid">
    <span>Invoices <strong class="vl-reconcile-invoices">8,420</strong></span>
    <span>Payments <strong class="vl-reconcile-payments">8,410</strong></span>
    <span>Bank Tx <strong class="vl-reconcile-bank">8,418</strong></span>
    <span>Exceptions <strong class="vl-reconcile-exceptions">12</strong></span>
  </div>
  <div class="vl-reconcile-track" aria-hidden="true"><span></span></div>
  <p class="vl-reconcile-msg">Matching ledger rows…</p>
</div>`,
    css: `.vl-reconcile { width: min(290px, 84vw); display: grid; gap: 7px; padding: 10px; border: 1px solid #dfe5ee; border-radius: 13px; background: #fff; color: #172033; font-family: system-ui, sans-serif; }
.vl-reconcile-title { font-size: 11px; }
.vl-reconcile-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 5px; }
.vl-reconcile-grid span { display: grid; gap: 2px; padding: 5px; border-radius: 8px; background: #f3f6fb; color: #667085; font-size: 8px; }
.vl-reconcile-grid strong { color: #172033; font-size: 10px; font-weight: 800; }
.vl-reconcile-track { height: 8px; border-radius: 999px; background: color-mix(in srgb, var(--loader-accent) 14%, #e8edf5); overflow: hidden; }
.vl-reconcile-track span { display: block; width: 0; height: 100%; background: var(--loader-accent); border-radius: inherit; transition: width .4s ease; }
.vl-reconcile-msg { margin: 0; color: #667085; font-size: 9px; }`,
    controls: [
      { key: 'match', label: 'Matched records', type: 'range', min: 1000, max: 9000, step: 50, defaultValue: 8400, full: true },
      { key: 'exceptions', label: 'Exception count', type: 'range', min: 0, max: 80, step: 1, defaultValue: 12, full: true },
      { key: 'phase', label: 'Reconciliation stage', type: 'select', defaultValue: 'pairing', full: true,
        options: [
          { value: 'pairing', label: 'Pairing invoices and payments' },
          { value: 'banking', label: 'Matching bank entries' },
          { value: 'validation', label: 'Validation and close' },
          { value: 'done', label: 'Completed' }
        ]
      }
    ],
    applyControls(container, values) {
      const root = container.querySelector('.vl-reconcile');
      if (!root) return;
      const matched = clamp(values.match, 1000, 9000);
      const exceptions = clamp(values.exceptions, 0, 80);
      const stageMap = {
        pairing: ['Matching invoices and payments…', 60],
        banking: ['Reconciling bank statements…', 82],
        validation: ['Validating exception rules…', 92],
        done: ['Reconciliation complete', 100]
      };
      const [message, progress] = stageMap[values.phase] || stageMap.pairing;
      root.querySelector('.vl-reconcile-msg').textContent = message;
      root.querySelector('.vl-reconcile-invoices').textContent = matched.toLocaleString();
      root.querySelector('.vl-reconcile-payments').textContent = (matched - Math.max(1, exceptions)).toLocaleString();
      root.querySelector('.vl-reconcile-bank').textContent = (matched - Math.max(0, Math.round(exceptions / 2))).toLocaleString();
      root.querySelector('.vl-reconcile-exceptions').textContent = exceptions.toLocaleString();
      root.querySelector('.vl-reconcile-track span').style.width = `${progress}%`;
    },
    js: `AppLoader.setReconcileProgress = function (matched, exceptions, phase) {
  const root = loaderElement.querySelector('.vl-reconcile');
  if (!root) return;
  matched = Math.max(1000, Math.min(9000, Number(matched) || 0));
  exceptions = Math.max(0, Math.min(80, Number(exceptions) || 0));
  const map = { pairing: [60, 'Matching invoices and payments…'], banking: [82, 'Reconciling bank statements…'], validation: [92, 'Validating exception rules…'], done: [100, 'Reconciliation complete'] };
  const [progress, message] = map[phase] || map.pairing;
  root.querySelector('.vl-reconcile-msg').textContent = message;
  root.querySelector('.vl-reconcile-invoices').textContent = matched.toLocaleString();
  root.querySelector('.vl-reconcile-payments').textContent = (matched - Math.max(1, exceptions)).toLocaleString();
  root.querySelector('.vl-reconcile-bank').textContent = (matched - Math.max(0, Math.round(exceptions / 2))).toLocaleString();
  root.querySelector('.vl-reconcile-exceptions').textContent = exceptions.toLocaleString();
  root.querySelector('.vl-reconcile-track span').style.width = progress + '%';
};`
  },
  {
    id: 'application-pipeline-pulse',
    name: 'Pipeline Pulse Application',
    category: 'Application',
    tech: 'CSS',
    description: 'A compact pipeline shows three service phases as they pass through.',
    markup: `<div class="vl-cat-application-pipeline-pulse" role="img" aria-label="Pipeline pulse application">
  <span class="seg s1"></span>
  <span class="seg s2"></span>
  <span class="seg s3"></span>
  <span class="dot d1"></span>
  <span class="dot d2"></span>
  <span class="dot d3"></span>
</div>`,
    css: `.vl-cat-application-pipeline-pulse {
  width: 188px;
  height: 40px;
  margin: 34px auto;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 28%, #1f5f8a);
  border-radius: 10px;
  overflow: hidden;
}
.vl-cat-application-pipeline-pulse .seg {
  position: absolute;
  inset: 0;
  opacity: .24;
  background: color-mix(in srgb, var(--loader-accent) 35%, transparent);
}
.vl-cat-application-pipeline-pulse .s1 { clip-path: polygon(0 0, 36% 0, 31% 100%, 0 100%); }
.vl-cat-application-pipeline-pulse .s2 { clip-path: polygon(35% 0, 66% 0, 61% 100%, 30% 100%); }
.vl-cat-application-pipeline-pulse .s3 { clip-path: polygon(65% 0, 100% 0, 100% 100%, 60% 100%); }
.vl-cat-application-pipeline-pulse .dot {
  position: absolute;
  top: 50%;
  width: 10px;
  height: 10px;
  margin: -5px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-cat-application-pipeline-pulse-dot calc(var(--loader-speed) * 1.2) linear infinite;
}
.vl-cat-application-pipeline-pulse .d1 { animation-delay: -0.2s; }
.vl-cat-application-pipeline-pulse .d2 { animation-delay: -0.4s; }
.vl-cat-application-pipeline-pulse .d3 { animation-delay: -0.6s; }
@keyframes vl-cat-application-pipeline-pulse-dot {
  0% { left: 8%; opacity: .2; }
  50% { left: 92%; opacity: 1; }
  100% { left: 8%; opacity: .2; }
}`
  },

];
