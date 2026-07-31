export const commonSaveSendLoaders = [
  {
    id: 'save-status-loader',
    name: 'Save Status Loader',
    category: 'Common UI',
    tech: 'CSS + JavaScript',
    description: 'A compact save-state indicator for transaction forms, notes, preferences, and document editing.',
    markup: `<div class="vl-save-status" role="status" aria-live="polite">
  <span class="vl-save-status-ring" aria-hidden="true"></span>
  <span class="vl-save-status-copy"><strong class="vl-save-status-title">Saving changes</strong><small class="vl-save-status-note">Keeping your draft up to date</small></span>
</div>`,
    css: `.vl-save-status {
  width: min(230px, 82vw);
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 12px;
  border: 1px solid #e0e6ee;
  border-radius: 9px;
  background: #fff;
  color: #172033;
  font-family: system-ui, sans-serif;
}
.vl-save-status-ring {
  width: 20px;
  height: 20px;
  flex: 0 0 20px;
  border: 3px solid color-mix(in srgb, var(--loader-accent) 18%, transparent);
  border-top-color: var(--loader-accent);
  border-radius: 50%;
  animation: vl-save-status-spin calc(var(--loader-speed) * .74) linear infinite;
}
.vl-save-status-copy { min-width: 0; display: grid; gap: 2px; }
.vl-save-status-title { font-size: 12px; line-height: 1.25; }
.vl-save-status-note { color: #667085; font-size: 10px; line-height: 1.3; }
@keyframes vl-save-status-spin { to { transform: rotate(360deg); } }`,
    controls: [
      {
        type: 'select',
        key: 'state',
        label: 'Save state',
        defaultValue: 'changes',
        full: true,
        options: [
          { value: 'changes', label: 'Saving changes' },
          { value: 'draft', label: 'Saving draft' },
          { value: 'settings', label: 'Saving settings' },
          { value: 'note', label: 'Saving note' }
        ]
      }
    ],
    applyControls(container, values) {
      const title = container.querySelector('.vl-save-status-title');
      const note = container.querySelector('.vl-save-status-note');
      if (!title || !note) return;
      const states = {
        changes: ['Saving changes', 'Keeping your draft up to date'],
        draft: ['Saving draft', 'Your work is being stored'],
        settings: ['Saving settings', 'Applying the latest preferences'],
        note: ['Saving note', 'Updating the activity record']
      };
      const [heading, detail] = states[values.state] || states.changes;
      title.textContent = heading;
      note.textContent = detail;
    },
    js: `AppLoader.setMessage = function (title, detail = '') {
  const root = loaderElement.querySelector('.vl-save-status');
  if (!root) return;
  root.querySelector('.vl-save-status-title').textContent = title || 'Saving…';
  root.querySelector('.vl-save-status-note').textContent = detail;
};`
  },
  {
    id: 'email-send-loader',
    name: 'Email Send Loader',
    category: 'Common UI',
    tech: 'CSS + JavaScript',
    description: 'A simple email-delivery status for quotations, invoices, reports, reminders, and notifications.',
    markup: `<div class="vl-email-loader" role="status" aria-live="polite">
  <span class="vl-email-loader-icon" aria-hidden="true">✉</span>
  <span class="vl-email-loader-copy"><strong class="vl-email-loader-title">Sending email</strong><small>Connecting to the mail service…</small></span>
  <span class="vl-email-loader-dots" aria-hidden="true"><i></i><i></i><i></i></span>
</div>`,
    css: `.vl-email-loader {
  width: min(238px, 84vw);
  min-height: 54px;
  display: grid;
  grid-template-columns: 30px 1fr auto;
  align-items: center;
  gap: 9px;
  padding: 9px 11px;
  border: 1px solid #e0e6ee;
  border-radius: 9px;
  background: #fff;
  color: #172033;
  font-family: system-ui, sans-serif;
}
.vl-email-loader-icon {
  width: 30px;
  height: 30px;
  display: grid;
  place-items: center;
  border-radius: 8px;
  background: color-mix(in srgb, var(--loader-accent) 10%, #fff);
  color: var(--loader-accent);
  font-size: 15px;
}
.vl-email-loader-copy { min-width: 0; display: grid; gap: 2px; }
.vl-email-loader-copy strong { font-size: 11px; line-height: 1.25; }
.vl-email-loader-copy small { color: #667085; font-size: 9px; line-height: 1.3; }
.vl-email-loader-dots { display: inline-flex; gap: 3px; }
.vl-email-loader-dots i {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-email-loader-dot calc(var(--loader-speed) * 1.08) ease-in-out infinite;
}
.vl-email-loader-dots i:nth-child(2) { animation-delay: .12s; }
.vl-email-loader-dots i:nth-child(3) { animation-delay: .24s; }
@keyframes vl-email-loader-dot {
  0%, 80%, 100% { transform: scale(.6); opacity: .3; }
  40% { transform: scale(1); opacity: 1; }
}`,
    controls: [
      {
        type: 'select',
        key: 'document',
        label: 'Email content',
        defaultValue: 'email',
        full: true,
        options: [
          { value: 'email', label: 'Sending email' },
          { value: 'quotation', label: 'Sending quotation' },
          { value: 'invoice', label: 'Sending invoice' },
          { value: 'report', label: 'Sending report' }
        ]
      }
    ],
    applyControls(container, values) {
      const title = container.querySelector('.vl-email-loader-title');
      if (!title) return;
      const labels = {
        email: 'Sending email',
        quotation: 'Sending quotation',
        invoice: 'Sending invoice',
        report: 'Sending report'
      };
      title.textContent = labels[values.document] || labels.email;
    },
    js: `AppLoader.setMessage = function (message) {
  const target = loaderElement.querySelector('.vl-email-loader-title');
  if (target) target.textContent = message || 'Sending email';
};`
  }
];
