export const commonBusinessSkeletonLoadersC = [
  {
    id: 'chat-conversation-skeleton',
    name: 'Chat Conversation Skeleton',
    category: 'Skeletons',
    tech: 'CSS',
    description: 'A conversation skeleton for support chat, AI assistants, internal messaging, and customer service panels.',
    markup: `<div class="vl-chat-skeleton" aria-hidden="true">
  <div class="vl-chat-row left"><span class="avatar"></span><div><span class="line wide"></span><span class="line short"></span></div></div>
  <div class="vl-chat-row right"><div><span class="line medium"></span><span class="line short"></span></div></div>
  <div class="vl-chat-row left"><span class="avatar"></span><div><span class="line medium"></span></div></div>
  <div class="vl-chat-input"><span></span><i></i></div>
</div>`,
    css: `.vl-chat-skeleton {
  width: min(235px, 84vw);
  display: grid;
  gap: 9px;
}
.vl-chat-row { display: flex; align-items: flex-start; gap: 8px; }
.vl-chat-row.right { justify-content: flex-end; }
.vl-chat-row > div {
  width: 68%;
  display: grid;
  gap: 5px;
  padding: 8px;
  border-radius: 9px;
  background: #eef2f7;
}
.vl-chat-row.right > div { background: color-mix(in srgb, var(--loader-accent) 8%, #eef2f7); }
.vl-chat-skeleton .avatar,
.vl-chat-skeleton .line,
.vl-chat-input span,
.vl-chat-input i {
  position: relative;
  overflow: hidden;
  display: block;
  background: #dfe6ef;
}
.vl-chat-skeleton .avatar { width: 28px; height: 28px; flex: 0 0 28px; border-radius: 50%; }
.vl-chat-skeleton .line { height: 7px; border-radius: 4px; }
.vl-chat-skeleton .line.wide { width: 92%; }
.vl-chat-skeleton .line.medium { width: 72%; }
.vl-chat-skeleton .line.short { width: 48%; }
.vl-chat-input {
  min-height: 31px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  padding: 0 8px;
  border: 1px solid #e0e6ee;
  border-radius: 8px;
  background: #fff;
}
.vl-chat-input span { width: 62%; height: 7px; border-radius: 4px; }
.vl-chat-input i { width: 20px; height: 20px; border-radius: 6px; }
.vl-chat-skeleton span::after,
.vl-chat-skeleton i::after {
  content: '';
  position: absolute;
  inset: 0;
  transform: translateX(-110%);
  background: linear-gradient(90deg, transparent, rgba(255,255,255,.82), transparent);
  animation: vl-chat-shimmer calc(var(--loader-speed) * 1.5) ease-in-out infinite;
}
@keyframes vl-chat-shimmer { to { transform: translateX(110%); } }`
  },
  {
    id: 'master-detail-skeleton',
    name: 'Master Detail Skeleton',
    category: 'Skeletons',
    tech: 'CSS',
    description: 'A master-detail skeleton for customer lists, transaction inquiries, stock browsers, and administration screens.',
    markup: `<div class="vl-master-detail-skeleton" aria-hidden="true">
  <div class="vl-master-list"><span></span><span></span><span></span><span></span></div>
  <div class="vl-detail-pane"><strong></strong><small></small><div></div><div class="short"></div></div>
</div>`,
    css: `.vl-master-detail-skeleton {
  width: min(245px, 88vw);
  display: grid;
  grid-template-columns: 38% 1fr;
  gap: 8px;
}
.vl-master-list,
.vl-detail-pane {
  min-width: 0;
  display: grid;
  align-content: start;
  gap: 7px;
  padding: 8px;
  border: 1px solid #e1e7ef;
  border-radius: 8px;
  background: #fff;
}
.vl-master-list span,
.vl-detail-pane strong,
.vl-detail-pane small,
.vl-detail-pane div {
  position: relative;
  overflow: hidden;
  display: block;
  border-radius: 5px;
  background: #e7ecf3;
}
.vl-master-list span { height: 24px; border-radius: 6px; }
.vl-master-list span:first-child { background: color-mix(in srgb, var(--loader-accent) 10%, #e7ecf3); }
.vl-detail-pane strong { width: 64%; height: 11px; }
.vl-detail-pane small { width: 38%; height: 7px; }
.vl-detail-pane div { width: 100%; height: 28px; margin-top: 3px; border-radius: 7px; }
.vl-detail-pane div.short { width: 72%; height: 9px; margin-top: 0; }
.vl-master-list span::after,
.vl-detail-pane strong::after,
.vl-detail-pane small::after,
.vl-detail-pane div::after {
  content: '';
  position: absolute;
  inset: 0;
  transform: translateX(-110%);
  background: linear-gradient(90deg, transparent, rgba(255,255,255,.82), transparent);
  animation: vl-master-detail-shimmer calc(var(--loader-speed) * 1.5) ease-in-out infinite;
}
@keyframes vl-master-detail-shimmer { to { transform: translateX(110%); } }`
  },
  {
    id: 'audit-log-skeleton',
    name: 'Audit Log Skeleton',
    category: 'Skeletons',
    tech: 'CSS',
    description: 'An audit-history skeleton with timestamps, actors, actions, and change-summary placeholders.',
    markup: `<div class="vl-audit-skeleton" aria-hidden="true">
  <div class="vl-audit-row"><span class="time"></span><i></i><div><strong></strong><small></small></div></div>
  <div class="vl-audit-row"><span class="time"></span><i></i><div><strong></strong><small class="short"></small></div></div>
  <div class="vl-audit-row"><span class="time"></span><i></i><div><strong></strong><small></small></div></div>
</div>`,
    css: `.vl-audit-skeleton {
  width: min(235px, 84vw);
  display: grid;
  gap: 9px;
}
.vl-audit-row {
  display: grid;
  grid-template-columns: 36px 10px minmax(0, 1fr);
  align-items: start;
  gap: 8px;
}
.vl-audit-row > div { display: grid; gap: 5px; padding-bottom: 5px; border-bottom: 1px solid #edf1f5; }
.vl-audit-row .time,
.vl-audit-row i,
.vl-audit-row strong,
.vl-audit-row small {
  position: relative;
  overflow: hidden;
  display: block;
  border-radius: 4px;
  background: #e7ecf3;
}
.vl-audit-row .time { width: 34px; height: 7px; margin-top: 3px; }
.vl-audit-row i { width: 9px; height: 9px; border-radius: 50%; background: color-mix(in srgb, var(--loader-accent) 24%, #dfe6ef); }
.vl-audit-row strong { width: 78%; height: 8px; }
.vl-audit-row small { width: 92%; height: 7px; }
.vl-audit-row small.short { width: 58%; }
.vl-audit-skeleton span::after,
.vl-audit-skeleton i::after,
.vl-audit-skeleton strong::after,
.vl-audit-skeleton small::after {
  content: '';
  position: absolute;
  inset: 0;
  transform: translateX(-110%);
  background: linear-gradient(90deg, transparent, rgba(255,255,255,.82), transparent);
  animation: vl-audit-shimmer calc(var(--loader-speed) * 1.5) ease-in-out infinite;
}
@keyframes vl-audit-shimmer { to { transform: translateX(110%); } }`
  },
  {
    id: 'filter-chips-skeleton',
    name: 'Filter Chips Skeleton',
    category: 'Skeletons',
    tech: 'CSS',
    description: 'A filter-chip placeholder for search pages, report criteria, dashboards, and faceted browsing.',
    markup: `<div class="vl-filter-chips-skeleton" aria-hidden="true">
  <span class="wide"></span><span></span><span class="short"></span><span></span><span class="wide"></span>
</div>`,
    css: `.vl-filter-chips-skeleton {
  width: min(235px, 84vw);
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 7px;
}
.vl-filter-chips-skeleton span {
  position: relative;
  overflow: hidden;
  width: 58px;
  height: 28px;
  border-radius: 999px;
  background: #e7ecf3;
}
.vl-filter-chips-skeleton span.wide { width: 82px; }
.vl-filter-chips-skeleton span.short { width: 42px; }
.vl-filter-chips-skeleton span::after {
  content: '';
  position: absolute;
  inset: 0;
  transform: translateX(-110%);
  background: linear-gradient(90deg, transparent, rgba(255,255,255,.82), transparent);
  animation: vl-filter-chip-shimmer calc(var(--loader-speed) * 1.45) ease-in-out infinite;
}
@keyframes vl-filter-chip-shimmer { to { transform: translateX(110%); } }`
  },
  {
    id: 'form-section-skeleton',
    name: 'Form Section Skeleton',
    category: 'Skeletons',
    tech: 'CSS',
    description: 'A grouped form-section skeleton for transaction headers, settings panels, and party maintenance pages.',
    markup: `<div class="vl-form-section-skeleton" aria-hidden="true">
  <div class="vl-form-section-head"><strong></strong><small></small></div>
  <div class="vl-form-section-grid"><span></span><span></span><span></span><span></span></div>
  <div class="vl-form-section-note"></div>
</div>`,
    css: `.vl-form-section-skeleton {
  width: min(240px, 86vw);
  display: grid;
  gap: 9px;
  padding: 10px;
  border: 1px solid #e1e7ef;
  border-radius: 10px;
  background: #fff;
}
.vl-form-section-head { display: flex; align-items: center; justify-content: space-between; gap: 10px; }
.vl-form-section-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 7px; }
.vl-form-section-head strong,
.vl-form-section-head small,
.vl-form-section-grid span,
.vl-form-section-note {
  position: relative;
  overflow: hidden;
  display: block;
  border-radius: 5px;
  background: #e7ecf3;
}
.vl-form-section-head strong { width: 52%; height: 10px; }
.vl-form-section-head small { width: 28px; height: 16px; border-radius: 5px; }
.vl-form-section-grid span { height: 28px; border-radius: 7px; }
.vl-form-section-note { width: 76%; height: 8px; }
.vl-form-section-head strong::after,
.vl-form-section-head small::after,
.vl-form-section-grid span::after,
.vl-form-section-note::after {
  content: '';
  position: absolute;
  inset: 0;
  transform: translateX(-110%);
  background: linear-gradient(90deg, transparent, rgba(255,255,255,.82), transparent);
  animation: vl-form-section-shimmer calc(var(--loader-speed) * 1.5) ease-in-out infinite;
}
@keyframes vl-form-section-shimmer { to { transform: translateX(110%); } }`
  }
];
