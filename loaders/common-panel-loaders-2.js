export const commonPanelLoaders2 = [
  {
    id: 'accordion-loading',
    name: 'Accordion Loading',
    category: 'Common UI',
    tech: 'CSS + JavaScript',
    description: 'A loading state for expanding memo, terms, addresses, history, and flexible ERP detail sections.',
    markup: `<div class="vl-accordion-loader" role="status" aria-live="polite">
  <div class="vl-accordion-loader-head"><strong>Transaction details</strong><span>⌃</span></div>
  <div class="vl-accordion-loader-body">
    <i class="vl-accordion-loader-ring" aria-hidden="true"></i>
    <span class="vl-accordion-loader-message">Loading section…</span>
  </div>
  <div class="vl-accordion-loader-line"></div>
  <div class="vl-accordion-loader-line short"></div>
</div>`,
    css: `.vl-accordion-loader {
  width: min(235px, 84vw);
  overflow: hidden;
  border: 1px solid #dfe5ed;
  border-radius: 10px;
  background: #fff;
  color: #344054;
  font: 750 10px/1.3 system-ui, sans-serif;
}
.vl-accordion-loader-head {
  min-height: 36px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 0 11px;
  border-bottom: 1px solid #e6ebf1;
  background: #f8fafc;
}
.vl-accordion-loader-head span { color: #98a2b3; font-size: 14px; }
.vl-accordion-loader-body {
  min-height: 42px;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 11px;
  color: #667085;
}
.vl-accordion-loader-ring {
  width: 15px;
  height: 15px;
  border: 2px solid color-mix(in srgb, var(--loader-accent) 18%, transparent);
  border-top-color: var(--loader-accent);
  border-radius: 50%;
  animation: vl-accordion-loader-spin calc(var(--loader-speed) * .72) linear infinite;
}
.vl-accordion-loader-line {
  position: relative;
  overflow: hidden;
  width: calc(100% - 22px);
  height: 8px;
  margin: 0 11px 8px;
  border-radius: 4px;
  background: #e7ecf3;
}
.vl-accordion-loader-line.short { width: 56%; margin-bottom: 11px; }
.vl-accordion-loader-line::after {
  content: '';
  position: absolute;
  inset: 0;
  transform: translateX(-110%);
  background: linear-gradient(90deg, transparent, rgba(255,255,255,.82), transparent);
  animation: vl-accordion-loader-shimmer calc(var(--loader-speed) * 1.45) ease-in-out infinite;
}
@keyframes vl-accordion-loader-spin { to { transform: rotate(360deg); } }
@keyframes vl-accordion-loader-shimmer { to { transform: translateX(110%); } }`,
    controls: [
      {
        type: 'select',
        key: 'section',
        label: 'Section message',
        defaultValue: 'section',
        full: true,
        options: [
          { value: 'section', label: 'Loading section' },
          { value: 'history', label: 'Loading history' },
          { value: 'terms', label: 'Loading terms' },
          { value: 'addresses', label: 'Loading addresses' }
        ]
      }
    ],
    applyControls(container, values) {
      const message = container.querySelector('.vl-accordion-loader-message');
      if (!message) return;
      const labels = {
        section: 'Loading section…',
        history: 'Loading history…',
        terms: 'Loading terms…',
        addresses: 'Loading addresses…'
      };
      message.textContent = labels[values.section] || labels.section;
    },
    js: `AppLoader.setMessage = function (message) {
  const target = loaderElement.querySelector('.vl-accordion-loader-message');
  if (target) target.textContent = message || 'Loading section…';
};`
  },
  {
    id: 'activity-feed-loader',
    name: 'Activity Feed Loader',
    category: 'Common UI',
    tech: 'CSS + JavaScript',
    description: 'An inline activity-feed loading row for customer timelines, audit trails, comments, and transaction history.',
    markup: `<div class="vl-activity-loader" role="status" aria-live="polite">
  <span class="vl-activity-loader-avatar"></span>
  <span class="vl-activity-loader-copy">
    <strong class="vl-activity-loader-message">Loading recent activity</strong>
    <small>Checking the latest updates…</small>
  </span>
  <span class="vl-activity-loader-dots" aria-hidden="true"><i></i><i></i><i></i></span>
</div>`,
    css: `.vl-activity-loader {
  width: min(240px, 86vw);
  min-height: 62px;
  display: grid;
  grid-template-columns: 34px 1fr auto;
  align-items: center;
  gap: 10px;
  padding: 10px 11px;
  border: 1px solid #e0e6ee;
  border-radius: 10px;
  background: #fff;
  color: #344054;
  font-family: system-ui, sans-serif;
}
.vl-activity-loader-avatar {
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background: color-mix(in srgb, var(--loader-accent) 16%, #e7ecf3);
  animation: vl-activity-loader-avatar calc(var(--loader-speed) * 1.25) ease-in-out infinite;
}
.vl-activity-loader-copy { min-width: 0; display: grid; gap: 3px; }
.vl-activity-loader-copy strong { font-size: 11px; line-height: 1.3; }
.vl-activity-loader-copy small { color: #667085; font-size: 9px; line-height: 1.3; }
.vl-activity-loader-dots { display: inline-flex; gap: 3px; }
.vl-activity-loader-dots i {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-activity-loader-dot calc(var(--loader-speed) * 1.05) ease-in-out infinite;
}
.vl-activity-loader-dots i:nth-child(2) { animation-delay: .12s; }
.vl-activity-loader-dots i:nth-child(3) { animation-delay: .24s; }
@keyframes vl-activity-loader-avatar { 50% { transform: scale(.86); opacity: .55; } }
@keyframes vl-activity-loader-dot {
  0%, 80%, 100% { transform: scale(.55); opacity: .3; }
  40% { transform: scale(1); opacity: 1; }
}`,
    controls: [
      {
        type: 'select',
        key: 'activity',
        label: 'Activity source',
        defaultValue: 'recent',
        full: true,
        options: [
          { value: 'recent', label: 'Loading recent activity' },
          { value: 'audit', label: 'Loading audit trail' },
          { value: 'comments', label: 'Loading comments' },
          { value: 'history', label: 'Loading transaction history' }
        ]
      }
    ],
    applyControls(container, values) {
      const message = container.querySelector('.vl-activity-loader-message');
      if (!message) return;
      const labels = {
        recent: 'Loading recent activity',
        audit: 'Loading audit trail',
        comments: 'Loading comments',
        history: 'Loading transaction history'
      };
      message.textContent = labels[values.activity] || labels.recent;
    },
    js: `AppLoader.setMessage = function (message) {
  const target = loaderElement.querySelector('.vl-activity-loader-message');
  if (target) target.textContent = message || 'Loading recent activity';
};`
  }
];
