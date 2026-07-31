export const commonAccessLoaders = [
  {
    id: 'permission-check-loader',
    name: 'Permission Check Loader',
    category: 'Common UI',
    tech: 'CSS + JavaScript',
    description: 'A compact permission-verification state for protected pages, approvals, reports, and administrative actions.',
    markup: `<div class="vl-permission-loader" role="status" aria-live="polite">
  <span class="vl-permission-loader-shield" aria-hidden="true"><i></i></span>
  <span class="vl-permission-loader-copy"><strong class="vl-permission-loader-title">Checking page access</strong><small>Verifying your assigned permissions…</small></span>
</div>`,
    css: `.vl-permission-loader {
  width: min(240px, 86vw);
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 13px;
  border: 1px solid #e0e6ef;
  border-radius: 10px;
  background: #fff;
  color: #172033;
  font-family: system-ui, sans-serif;
}
.vl-permission-loader-shield {
  width: 30px;
  height: 34px;
  flex: 0 0 30px;
  display: grid;
  place-items: center;
  clip-path: polygon(50% 0, 92% 15%, 84% 70%, 50% 100%, 16% 70%, 8% 15%);
  background: color-mix(in srgb, var(--loader-accent) 14%, #e7ecf3);
}
.vl-permission-loader-shield i {
  width: 15px;
  height: 15px;
  border: 2px solid color-mix(in srgb, var(--loader-accent) 25%, transparent);
  border-top-color: var(--loader-accent);
  border-radius: 50%;
  animation: vl-permission-spin calc(var(--loader-speed) * .76) linear infinite;
}
.vl-permission-loader-copy { min-width: 0; display: grid; gap: 2px; }
.vl-permission-loader-copy strong { font-size: 12px; line-height: 1.3; }
.vl-permission-loader-copy small { color: #667085; font-size: 10px; line-height: 1.35; }
@keyframes vl-permission-spin { to { transform: rotate(360deg); } }`,
    controls: [{
      type: 'select', key: 'resource', label: 'Protected resource', defaultValue: 'page', full: true,
      options: [
        { value: 'page', label: 'Page access' },
        { value: 'approval', label: 'Approval permission' },
        { value: 'report', label: 'Report permission' },
        { value: 'admin', label: 'Admin permission' }
      ]
    }],
    applyControls(container, values) {
      const title = container.querySelector('.vl-permission-loader-title');
      if (!title) return;
      const labels = {
        page: 'Checking page access',
        approval: 'Checking approval permission',
        report: 'Checking report permission',
        admin: 'Checking admin permission'
      };
      title.textContent = labels[values.resource] || labels.page;
    },
    js: `AppLoader.setMessage = function (message) {
  const title = loaderElement.querySelector('.vl-permission-loader-title');
  if (title) title.textContent = message || 'Checking permissions';
};`
  },
  {
    id: 'notification-send-loader',
    name: 'Notification Send Loader',
    category: 'Common UI',
    tech: 'CSS + JavaScript',
    description: 'A clear notification-delivery state for email, in-app alerts, SMS, and workflow messages.',
    markup: `<div class="vl-notification-send" role="status" aria-live="polite">
  <span class="vl-notification-send-icon" aria-hidden="true">↗</span>
  <span class="vl-notification-send-copy"><strong class="vl-notification-send-title">Sending notification</strong><small>Preparing recipient delivery…</small></span>
  <span class="vl-notification-send-dots" aria-hidden="true"><i></i><i></i><i></i></span>
</div>`,
    css: `.vl-notification-send {
  width: min(245px, 88vw);
  display: grid;
  grid-template-columns: 30px 1fr auto;
  align-items: center;
  gap: 10px;
  padding: 11px 12px;
  border: 1px solid #e0e6ef;
  border-radius: 10px;
  background: #fff;
  color: #172033;
  font-family: system-ui, sans-serif;
}
.vl-notification-send-icon {
  width: 30px;
  height: 30px;
  display: grid;
  place-items: center;
  border-radius: 8px;
  background: color-mix(in srgb, var(--loader-accent) 10%, #f8fafc);
  color: var(--loader-accent);
  font-size: 16px;
  font-weight: 900;
}
.vl-notification-send-copy { min-width: 0; display: grid; gap: 2px; }
.vl-notification-send-copy strong { font-size: 12px; }
.vl-notification-send-copy small { color: #667085; font-size: 10px; }
.vl-notification-send-dots { display: inline-flex; gap: 3px; }
.vl-notification-send-dots i {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-notification-dot calc(var(--loader-speed) * 1.05) ease-in-out infinite;
}
.vl-notification-send-dots i:nth-child(2) { animation-delay: .12s; }
.vl-notification-send-dots i:nth-child(3) { animation-delay: .24s; }
@keyframes vl-notification-dot {
  0%, 80%, 100% { transform: scale(.55); opacity: .3; }
  40% { transform: scale(1); opacity: 1; }
}`,
    controls: [{
      type: 'select', key: 'channel', label: 'Delivery channel', defaultValue: 'notification', full: true,
      options: [
        { value: 'notification', label: 'Notification' },
        { value: 'email', label: 'Email alert' },
        { value: 'inapp', label: 'In-app alert' },
        { value: 'sms', label: 'SMS message' }
      ]
    }],
    applyControls(container, values) {
      const title = container.querySelector('.vl-notification-send-title');
      if (!title) return;
      const labels = {
        notification: 'Sending notification',
        email: 'Sending email alert',
        inapp: 'Publishing in-app alert',
        sms: 'Sending SMS message'
      };
      title.textContent = labels[values.channel] || labels.notification;
    },
    js: `AppLoader.setMessage = function (message) {
  const title = loaderElement.querySelector('.vl-notification-send-title');
  if (title) title.textContent = message || 'Sending notification';
};`
  }
];
