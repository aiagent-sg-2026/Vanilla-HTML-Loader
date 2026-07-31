export const commonBusinessSkeletonLoadersE = [
  {
    id: 'search-suggestions-skeleton',
    name: 'Search Suggestions Skeleton',
    category: 'Skeletons',
    tech: 'CSS',
    description: 'A realistic autocomplete placeholder with grouped suggestions, labels, and secondary metadata.',
    markup: `<div class="vl-suggestion-skeleton" aria-hidden="true">
  <div class="vl-suggestion-search"><span></span><i></i></div>
  <div class="vl-suggestion-row"><b></b><span></span><small></small></div>
  <div class="vl-suggestion-row"><b></b><span></span><small></small></div>
  <div class="vl-suggestion-row short"><b></b><span></span><small></small></div>
</div>`,
    css: `.vl-suggestion-skeleton {
  width: min(235px, 84vw);
  display: grid;
  gap: 6px;
  padding: 8px;
  border: 1px solid #dfe5ed;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0 10px 24px rgba(15,23,42,.08);
}
.vl-suggestion-search,
.vl-suggestion-row { display: grid; align-items: center; gap: 8px; }
.vl-suggestion-search { grid-template-columns: 1fr 20px; min-height: 31px; padding: 0 9px; border: 1px solid #e3e8ef; border-radius: 7px; background: #f8fafc; }
.vl-suggestion-row { grid-template-columns: 20px 1fr 38px; min-height: 31px; padding: 0 9px; }
.vl-suggestion-search span,
.vl-suggestion-search i,
.vl-suggestion-row b,
.vl-suggestion-row span,
.vl-suggestion-row small {
  position: relative;
  overflow: hidden;
  display: block;
  border-radius: 4px;
  background: #e7ecf3;
}
.vl-suggestion-search span { width: 64%; height: 8px; }
.vl-suggestion-search i { width: 18px; height: 18px; border-radius: 6px; }
.vl-suggestion-row b { width: 20px; height: 20px; border-radius: 6px; }
.vl-suggestion-row span { width: 76%; height: 8px; }
.vl-suggestion-row.short span { width: 48%; }
.vl-suggestion-row small { width: 38px; height: 7px; }
.vl-suggestion-search span::after,
.vl-suggestion-search i::after,
.vl-suggestion-row b::after,
.vl-suggestion-row span::after,
.vl-suggestion-row small::after {
  content: '';
  position: absolute;
  inset: 0;
  transform: translateX(-110%);
  background: linear-gradient(90deg, transparent, rgba(255,255,255,.82), transparent);
  animation: vl-suggestion-shimmer calc(var(--loader-speed) * 1.5) ease-in-out infinite;
}
@keyframes vl-suggestion-shimmer { to { transform: translateX(110%); } }`
  },
  {
    id: 'transaction-summary-skeleton',
    name: 'Transaction Summary Skeleton',
    category: 'Skeletons',
    tech: 'CSS',
    description: 'A transaction-summary placeholder with document metadata, monetary totals, and status areas.',
    markup: `<div class="vl-transaction-summary-skeleton" aria-hidden="true">
  <div class="vl-transaction-summary-head"><span></span><i></i></div>
  <div class="vl-transaction-summary-row"><small></small><b></b></div>
  <div class="vl-transaction-summary-row"><small></small><b></b></div>
  <div class="vl-transaction-summary-row"><small></small><b></b></div>
  <div class="vl-transaction-summary-total"><span></span><strong></strong></div>
</div>`,
    css: `.vl-transaction-summary-skeleton {
  width: min(230px, 82vw);
  display: grid;
  gap: 8px;
  padding: 11px;
  border: 1px solid #e0e6ee;
  border-radius: 10px;
  background: #fff;
}
.vl-transaction-summary-head,
.vl-transaction-summary-row,
.vl-transaction-summary-total { display: flex; align-items: center; justify-content: space-between; gap: 12px; }
.vl-transaction-summary-head { padding-bottom: 7px; border-bottom: 1px solid #e7ecf3; }
.vl-transaction-summary-total { padding-top: 8px; border-top: 2px solid #dfe5ed; }
.vl-transaction-summary-head span,
.vl-transaction-summary-head i,
.vl-transaction-summary-row small,
.vl-transaction-summary-row b,
.vl-transaction-summary-total span,
.vl-transaction-summary-total strong {
  position: relative;
  overflow: hidden;
  display: block;
  border-radius: 4px;
  background: #e7ecf3;
}
.vl-transaction-summary-head span { width: 58%; height: 11px; }
.vl-transaction-summary-head i { width: 48px; height: 18px; border-radius: 6px; }
.vl-transaction-summary-row small { width: 42%; height: 7px; }
.vl-transaction-summary-row b { width: 28%; height: 8px; }
.vl-transaction-summary-total span { width: 36%; height: 9px; background: #dde4ed; }
.vl-transaction-summary-total strong { width: 34%; height: 12px; background: #dde4ed; }
.vl-transaction-summary-skeleton span::after,
.vl-transaction-summary-skeleton i::after,
.vl-transaction-summary-skeleton small::after,
.vl-transaction-summary-skeleton b::after,
.vl-transaction-summary-skeleton strong::after {
  content: '';
  position: absolute;
  inset: 0;
  transform: translateX(-110%);
  background: linear-gradient(90deg, transparent, rgba(255,255,255,.82), transparent);
  animation: vl-transaction-summary-shimmer calc(var(--loader-speed) * 1.5) ease-in-out infinite;
}
@keyframes vl-transaction-summary-shimmer { to { transform: translateX(110%); } }`
  },
  {
    id: 'dashboard-widget-skeleton',
    name: 'Dashboard Widget Skeleton',
    category: 'Skeletons',
    tech: 'CSS',
    description: 'A compact dashboard-widget placeholder with metric, trend, mini chart, and footer metadata.',
    markup: `<div class="vl-widget-skeleton" aria-hidden="true">
  <div class="vl-widget-skeleton-head"><span></span><i></i></div>
  <strong></strong>
  <div class="vl-widget-skeleton-chart"><span></span><span></span><span></span><span></span><span></span></div>
  <small></small>
</div>`,
    css: `.vl-widget-skeleton {
  width: min(220px, 80vw);
  display: grid;
  gap: 9px;
  padding: 12px;
  border: 1px solid #e0e6ee;
  border-radius: 11px;
  background: #fff;
}
.vl-widget-skeleton-head { display: flex; align-items: center; justify-content: space-between; gap: 12px; }
.vl-widget-skeleton-head span,
.vl-widget-skeleton-head i,
.vl-widget-skeleton > strong,
.vl-widget-skeleton-chart span,
.vl-widget-skeleton > small {
  position: relative;
  overflow: hidden;
  display: block;
  border-radius: 4px;
  background: #e7ecf3;
}
.vl-widget-skeleton-head span { width: 48%; height: 8px; }
.vl-widget-skeleton-head i { width: 34px; height: 17px; border-radius: 6px; }
.vl-widget-skeleton > strong { width: 42%; height: 19px; background: #dde4ed; }
.vl-widget-skeleton-chart { height: 58px; display: flex; align-items: flex-end; gap: 7px; padding-top: 4px; }
.vl-widget-skeleton-chart span { flex: 1; border-radius: 4px 4px 2px 2px; }
.vl-widget-skeleton-chart span:nth-child(1) { height: 34%; }
.vl-widget-skeleton-chart span:nth-child(2) { height: 62%; }
.vl-widget-skeleton-chart span:nth-child(3) { height: 45%; }
.vl-widget-skeleton-chart span:nth-child(4) { height: 78%; }
.vl-widget-skeleton-chart span:nth-child(5) { height: 56%; }
.vl-widget-skeleton > small { width: 64%; height: 7px; }
.vl-widget-skeleton-head span::after,
.vl-widget-skeleton-head i::after,
.vl-widget-skeleton > strong::after,
.vl-widget-skeleton-chart span::after,
.vl-widget-skeleton > small::after {
  content: '';
  position: absolute;
  inset: 0;
  transform: translateX(-110%);
  background: linear-gradient(90deg, transparent, rgba(255,255,255,.82), transparent);
  animation: vl-widget-shimmer calc(var(--loader-speed) * 1.5) ease-in-out infinite;
}
@keyframes vl-widget-shimmer { to { transform: translateX(110%); } }`
  },
  {
    id: 'notification-center-skeleton',
    name: 'Notification Center Skeleton',
    category: 'Skeletons',
    tech: 'CSS',
    description: 'A notification-center placeholder with unread markers, messages, timestamps, and grouped rows.',
    markup: `<div class="vl-notification-center-skeleton" aria-hidden="true">
  <div class="vl-notification-center-head"><span></span><i></i></div>
  <div class="vl-notification-center-row"><b></b><span><strong></strong><small></small></span><i></i></div>
  <div class="vl-notification-center-row"><b></b><span><strong></strong><small></small></span><i></i></div>
  <div class="vl-notification-center-row short"><b></b><span><strong></strong><small></small></span><i></i></div>
</div>`,
    css: `.vl-notification-center-skeleton {
  width: min(240px, 86vw);
  display: grid;
  gap: 4px;
  padding: 9px;
  border: 1px solid #e0e6ee;
  border-radius: 10px;
  background: #fff;
}
.vl-notification-center-head { display: flex; align-items: center; justify-content: space-between; gap: 12px; padding: 2px 5px 8px; border-bottom: 1px solid #e7ecf3; }
.vl-notification-center-row { display: grid; grid-template-columns: 24px 1fr 32px; align-items: center; gap: 8px; min-height: 42px; padding: 5px; }
.vl-notification-center-row > span { display: grid; gap: 5px; }
.vl-notification-center-head span,
.vl-notification-center-head i,
.vl-notification-center-row > b,
.vl-notification-center-row strong,
.vl-notification-center-row small,
.vl-notification-center-row > i {
  position: relative;
  overflow: hidden;
  display: block;
  border-radius: 4px;
  background: #e7ecf3;
}
.vl-notification-center-head span { width: 52%; height: 10px; }
.vl-notification-center-head i { width: 42px; height: 17px; border-radius: 6px; }
.vl-notification-center-row > b { width: 24px; height: 24px; border-radius: 50%; }
.vl-notification-center-row strong { width: 78%; height: 8px; }
.vl-notification-center-row.short strong { width: 52%; }
.vl-notification-center-row small { width: 92%; height: 7px; }
.vl-notification-center-row > i { width: 32px; height: 7px; }
.vl-notification-center-head span::after,
.vl-notification-center-head i::after,
.vl-notification-center-row > b::after,
.vl-notification-center-row strong::after,
.vl-notification-center-row small::after,
.vl-notification-center-row > i::after {
  content: '';
  position: absolute;
  inset: 0;
  transform: translateX(-110%);
  background: linear-gradient(90deg, transparent, rgba(255,255,255,.82), transparent);
  animation: vl-notification-center-shimmer calc(var(--loader-speed) * 1.5) ease-in-out infinite;
}
@keyframes vl-notification-center-shimmer { to { transform: translateX(110%); } }`
  }
];
