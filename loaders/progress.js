export const progressLoaders = [
  {
    id: 'adaptive-progress',
    name: 'Adaptive Progress',
    category: 'Progress',
    tech: 'CSS + JavaScript',
    description: 'Starts as an active progress animation and can switch to a real percentage when measurable progress becomes available.',
    markup: `<div class="vl-adaptive-progress is-demo" role="progressbar" aria-label="Processing data" aria-valuemin="0" aria-valuemax="100" aria-valuenow="42" aria-valuetext="Processing data">
  <div class="vl-adaptive-meta">
    <span class="vl-adaptive-status">Processing data…</span>
    <strong class="vl-adaptive-value">42%</strong>
  </div>
  <div class="vl-adaptive-track" aria-hidden="true"><span class="vl-adaptive-fill"></span></div>
</div>`,
    css: `.vl-adaptive-progress {
  width: min(220px, 82vw);
  display: grid;
  gap: 9px;
  color: #172033;
  font: 700 13px/1.35 system-ui, sans-serif;
}
.vl-adaptive-meta { display: flex; align-items: center; justify-content: space-between; gap: 12px; }
.vl-adaptive-status { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.vl-adaptive-value { color: var(--loader-accent); font-size: 12px; font-variant-numeric: tabular-nums; }
.vl-adaptive-track { height: 10px; overflow: hidden; border-radius: 999px; background: color-mix(in srgb, var(--loader-accent) 14%, #e7ecf4); }
.vl-adaptive-fill { display: block; width: 42%; height: 100%; border-radius: inherit; background: var(--loader-accent); box-shadow: 0 0 16px color-mix(in srgb, var(--loader-accent) 45%, transparent); transition: width .28s ease; }
.vl-adaptive-progress.is-demo .vl-adaptive-fill { animation: vl-adaptive-demo calc(var(--loader-speed) * 3.2) ease-in-out infinite; }
.vl-adaptive-progress.is-indeterminate .vl-adaptive-fill { width: 38%; animation: vl-adaptive-indeterminate calc(var(--loader-speed) * 1.25) ease-in-out infinite; }
@keyframes vl-adaptive-demo { 0%, 100% { width: 18%; } 48% { width: 68%; } 76% { width: 88%; } }
@keyframes vl-adaptive-indeterminate { 0% { transform: translateX(-120%); } 100% { transform: translateX(310%); } }`,
    js: `AppLoader.setProgress = function (value, message = 'Processing data…') {
  const root = loaderElement.querySelector('.vl-adaptive-progress');
  if (!root) return;
  const progress = Math.max(0, Math.min(100, Number(value) || 0));
  root.classList.remove('is-demo', 'is-indeterminate');
  root.setAttribute('aria-valuenow', String(progress));
  root.setAttribute('aria-valuetext', message);
  root.querySelector('.vl-adaptive-status').textContent = message;
  root.querySelector('.vl-adaptive-value').textContent = Math.round(progress) + '%';
  root.querySelector('.vl-adaptive-fill').style.width = progress + '%';
};

AppLoader.setIndeterminate = function (message = 'Working…') {
  const root = loaderElement.querySelector('.vl-adaptive-progress');
  if (!root) return;
  root.classList.remove('is-demo');
  root.classList.add('is-indeterminate');
  root.removeAttribute('aria-valuenow');
  root.setAttribute('aria-valuetext', message);
  root.querySelector('.vl-adaptive-status').textContent = message;
  root.querySelector('.vl-adaptive-value').textContent = '';
  root.querySelector('.vl-adaptive-fill').style.width = '';
};`
  },
  {
    id: 'circular-percentage',
    name: 'Circular Percentage Ring',
    category: 'Progress',
    tech: 'Inline SVG + JavaScript',
    description: 'A determinate SVG progress ring with percentage text, item count, and a production-ready progress API.',
    markup: `<div class="vl-percentage-ring is-demo" role="progressbar" aria-label="Processing items" aria-valuemin="0" aria-valuemax="100" aria-valuenow="68">
  <svg viewBox="0 0 96 96" aria-hidden="true">
    <circle class="vl-ring-track" cx="48" cy="48" r="38"></circle>
    <circle class="vl-ring-value" cx="48" cy="48" r="38"></circle>
  </svg>
  <span class="vl-ring-content">
    <strong class="vl-ring-percent">68%</strong>
    <span class="vl-ring-detail">680 / 1,000</span>
  </span>
</div>`,
    css: `.vl-percentage-ring {
  position: relative;
  isolation: isolate;
  width: 96px;
  height: 96px;
  display: grid;
  place-items: center;
  color: #172033;
  font-family: system-ui, sans-serif;
}
.vl-percentage-ring svg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  transform: rotate(-90deg);
  overflow: visible;
}
.vl-percentage-ring circle { fill: none; stroke-width: 6; }
.vl-ring-track { stroke: color-mix(in srgb, var(--loader-accent) 12%, #dfe5ee); }
.vl-ring-value {
  stroke: var(--loader-accent);
  stroke-linecap: round;
  stroke-dasharray: 238.76;
  stroke-dashoffset: 76.40;
  filter: drop-shadow(0 2px 3px color-mix(in srgb, var(--loader-accent) 22%, transparent));
  transition: stroke-dashoffset .3s ease;
}
.vl-percentage-ring.is-demo .vl-ring-value { animation: vl-ring-breathe calc(var(--loader-speed) * 1.8) ease-in-out infinite; }
.vl-ring-content {
  position: relative;
  z-index: 1;
  width: 64px;
  min-height: 42px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2px;
  text-align: center;
  pointer-events: none;
}
.vl-ring-percent {
  color: var(--loader-accent);
  font-size: 18px;
  font-weight: 900;
  line-height: 1;
  letter-spacing: -.03em;
  font-variant-numeric: tabular-nums;
}
.vl-ring-detail {
  color: #667085;
  font-size: 8px;
  font-weight: 700;
  line-height: 1.15;
  white-space: nowrap;
}
@keyframes vl-ring-breathe {
  0%, 100% { opacity: 1; filter: drop-shadow(0 2px 3px color-mix(in srgb, var(--loader-accent) 22%, transparent)); }
  50% { opacity: .82; filter: drop-shadow(0 2px 7px color-mix(in srgb, var(--loader-accent) 34%, transparent)); }
}`,
    js: `AppLoader.setProgress = function (value, detail = '') {
  const root = loaderElement.querySelector('.vl-percentage-ring');
  if (!root) return;
  const progress = Math.max(0, Math.min(100, Number(value) || 0));
  const circumference = 238.76;
  root.classList.remove('is-demo');
  root.setAttribute('aria-valuenow', String(progress));
  root.querySelector('.vl-ring-value').style.strokeDashoffset = String(circumference * (1 - progress / 100));
  root.querySelector('.vl-ring-percent').textContent = Math.round(progress) + '%';
  if (detail) root.querySelector('.vl-ring-detail').textContent = detail;
};`
  },
  {
    id: 'multi-step-process',
    name: 'Multi-step Process',
    category: 'Progress',
    tech: 'CSS + JavaScript',
    description: 'Communicates a long-running workflow through completed, active, and pending stages instead of one ambiguous spinner.',
    markup: `<ol class="vl-process-steps" aria-label="Processing stages">
  <li class="vl-process-step is-complete"><span class="vl-step-marker" aria-hidden="true">✓</span><span>Preparing</span></li>
  <li class="vl-process-step is-active" aria-current="step"><span class="vl-step-marker" aria-hidden="true"></span><span>Validating</span></li>
  <li class="vl-process-step"><span class="vl-step-marker" aria-hidden="true"></span><span>Processing</span></li>
  <li class="vl-process-step"><span class="vl-step-marker" aria-hidden="true"></span><span>Completing</span></li>
</ol>`,
    css: `.vl-process-steps {
  width: 190px;
  display: grid;
  gap: 7px;
  margin: 0;
  padding: 0;
  list-style: none;
  color: #667085;
  font: 700 12px/1.25 system-ui, sans-serif;
}
.vl-process-step { display: grid; grid-template-columns: 22px 1fr; align-items: center; gap: 9px; min-height: 22px; transition: color .2s ease; }
.vl-step-marker { width: 20px; height: 20px; display: grid; place-items: center; border: 2px solid color-mix(in srgb, var(--loader-accent) 22%, #ccd4e0); border-radius: 50%; color: #fff; font-size: 10px; }
.vl-process-step.is-complete { color: #172033; }
.vl-process-step.is-complete .vl-step-marker { border-color: var(--loader-accent); background: var(--loader-accent); }
.vl-process-step.is-active { color: var(--loader-accent); }
.vl-process-step.is-active .vl-step-marker { border-color: var(--loader-accent); box-shadow: 0 0 0 4px color-mix(in srgb, var(--loader-accent) 13%, transparent); animation: vl-step-pulse calc(var(--loader-speed) * 1.25) ease-in-out infinite; }
.vl-process-step.is-active .vl-step-marker::after { content: ''; width: 6px; height: 6px; border-radius: 50%; background: var(--loader-accent); }
@keyframes vl-step-pulse { 50% { box-shadow: 0 0 0 8px color-mix(in srgb, var(--loader-accent) 3%, transparent); } }`,
    js: `AppLoader.setStep = function (index) {
  const steps = [...loaderElement.querySelectorAll('.vl-process-step')];
  if (!steps.length) return;
  const activeIndex = Math.max(0, Math.min(steps.length - 1, Number(index) || 0));
  steps.forEach(function (step, stepIndex) {
    step.classList.toggle('is-complete', stepIndex < activeIndex);
    step.classList.toggle('is-active', stepIndex === activeIndex);
    if (stepIndex === activeIndex) step.setAttribute('aria-current', 'step');
    else step.removeAttribute('aria-current');
    const marker = step.querySelector('.vl-step-marker');
    marker.textContent = stepIndex < activeIndex ? '✓' : '';
  });
};`
  },
  {
    id: 'progress-ring-current',
    name: 'Current Ring Progress',
    category: 'Progress',
    tech: 'CSS',
    description: 'Progress rings exchange energy along a ring of dots and a moving core.',
    markup: `<div class="vl-cat-progress-ring-current" role="img" aria-label="Current ring progress">
  <span class="dot d1"></span>
  <span class="dot d2"></span>
  <span class="dot d3"></span>
  <span class="dot d4"></span>
  <span class="dot d5"></span>
  <span class="core"></span>
</div>`,
    css: `.vl-cat-progress-ring-current {
  width: 108px;
  height: 108px;
  margin: 0 auto;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 22%, #1f5582);
  border-radius: 50%;
  position: relative;
  background: radial-gradient(circle at 50% 50%, color-mix(in srgb, var(--loader-accent) 12%, transparent), transparent 53%), linear-gradient(172deg, #061a2c, #0b2841 62%, #040a14);
}
.vl-cat-progress-ring-current .dot {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 9px;
  height: 9px;
  margin: -4px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-cat-progress-ring-current-dots calc(var(--loader-speed) * 1.14) linear infinite;
}
.vl-cat-progress-ring-current .d1 { transform: rotate(0deg) translateX(44px); animation-delay: 0s; }
.vl-cat-progress-ring-current .d2 { transform: rotate(72deg) translateX(44px); animation-delay: -0.2s; }
.vl-cat-progress-ring-current .d3 { transform: rotate(144deg) translateX(44px); animation-delay: -0.4s; }
.vl-cat-progress-ring-current .d4 { transform: rotate(216deg) translateX(44px); animation-delay: -0.6s; }
.vl-cat-progress-ring-current .d5 { transform: rotate(288deg) translateX(44px); animation-delay: -0.8s; }
.vl-cat-progress-ring-current .core {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 10px;
  height: 10px;
  margin: -5px;
  border-radius: 50%;
  background: color-mix(in srgb, var(--loader-accent) 85%, #fff);
  animation: vl-cat-progress-ring-current-core calc(var(--loader-speed) * 1.05) ease-in-out infinite;
}
@keyframes vl-cat-progress-ring-current-dots {
  to { transform: rotate(360deg) translateX(44px) scale(1.1); opacity: .25; }
}
@keyframes vl-cat-progress-ring-current-core {
  0%,100% { transform: scale(.6); opacity: .35; }
  50% { transform: scale(1.1); opacity: 1; }
}`
  },
  {
    id: 'progress-wave-scaffold',
    name: 'Wave Scaffold Progress',
    category: 'Progress',
    tech: 'CSS',
    description: 'Progress lanes are scaffolded by a looping wave with timed node pulses.',
    markup: `<div class="vl-cat-progress-wave-scaffold" role="img" aria-label="Wave scaffold progress">
  <span class="bar b1"></span>
  <span class="bar b2"></span>
  <span class="bar b3"></span>
  <span class="dot"></span>
</div>`,
    css: `.vl-cat-progress-wave-scaffold {
  width: 190px;
  height: 108px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 22%, #1e6088);
  border-radius: 14px;
  padding: 14px 15px;
  display: grid;
  gap: 8px;
  align-content: center;
  background: linear-gradient(180deg, #071d33, #0b2d47 63%, #040a14);
}
.vl-cat-progress-wave-scaffold .bar {
  height: 10px;
  border-radius: 999px;
  background: color-mix(in srgb, var(--loader-accent) 18%, #e9edf5);
  overflow: hidden;
}
.vl-cat-progress-wave-scaffold .bar::after {
  content: '';
  display: block;
  width: 40%;
  height: 100%;
  background: var(--loader-accent);
  animation: vl-cat-progress-wave-scaffold-run calc(var(--loader-speed) * 1.15) cubic-bezier(.36,.8,.2,1) infinite;
}
.vl-cat-progress-wave-scaffold .b1::after { animation-delay: 0s; }
.vl-cat-progress-wave-scaffold .b2::after { animation-delay: -.2s; }
.vl-cat-progress-wave-scaffold .b3::after { animation-delay: -.4s; }
.vl-cat-progress-wave-scaffold .dot {
  justify-self: center;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-cat-progress-wave-scaffold-dot calc(var(--loader-speed) * 1.2) ease-in-out infinite;
}
@keyframes vl-cat-progress-wave-scaffold-run {
  0% { transform: translateX(-75px); }
  50% { transform: translateX(110px); }
  100% { transform: translateX(110px); }
}
@keyframes vl-cat-progress-wave-scaffold-dot {
  0%,100% { transform: scale(.5); opacity: .3; }
  50% { transform: scale(1.25); opacity: 1; }
}`
  },

];
