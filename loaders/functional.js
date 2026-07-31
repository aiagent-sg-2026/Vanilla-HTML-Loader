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
  }
];
