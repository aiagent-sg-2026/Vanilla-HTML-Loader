export const commonPartyApprovalSkeletons = [
  {
    id: 'approval-comment-skeleton',
    name: 'Approval Comment Skeleton',
    category: 'Skeletons',
    tech: 'CSS',
    description: 'A reviewer-comment placeholder for approvals, rejection reasons, audit remarks, and workflow discussions.',
    markup: `<div class="vl-approval-comment-skeleton" aria-hidden="true">
  <div class="vl-approval-comment-head"><span></span><div><strong></strong><small></small></div><i></i></div>
  <div class="vl-approval-comment-lines"><span></span><span></span><span></span></div>
  <div class="vl-approval-comment-actions"><span></span><span></span></div>
</div>`,
    css: `.vl-approval-comment-skeleton {
  width: min(245px, 86vw);
  display: grid;
  gap: 9px;
  padding: 10px;
  border: 1px solid #dfe5ed;
  border-radius: 10px;
  background: #fff;
}
.vl-approval-comment-head { display: grid; grid-template-columns: 30px 1fr auto; align-items: center; gap: 8px; }
.vl-approval-comment-head > span,
.vl-approval-comment-head strong,
.vl-approval-comment-head small,
.vl-approval-comment-head i,
.vl-approval-comment-lines span,
.vl-approval-comment-actions span {
  position: relative;
  overflow: hidden;
  display: block;
  background: #e7ecf3;
}
.vl-approval-comment-head > span { width: 30px; height: 30px; border-radius: 50%; }
.vl-approval-comment-head div { display: grid; gap: 5px; }
.vl-approval-comment-head strong { width: 58%; height: 9px; border-radius: 4px; }
.vl-approval-comment-head small { width: 34%; height: 6px; border-radius: 3px; }
.vl-approval-comment-head i { width: 46px; height: 18px; border-radius: 999px; }
.vl-approval-comment-lines { display: grid; gap: 5px; }
.vl-approval-comment-lines span { height: 7px; border-radius: 4px; }
.vl-approval-comment-lines span:nth-child(2) { width: 92%; }
.vl-approval-comment-lines span:nth-child(3) { width: 64%; }
.vl-approval-comment-actions { display: flex; justify-content: flex-end; gap: 6px; }
.vl-approval-comment-actions span { width: 48px; height: 23px; border-radius: 6px; }
.vl-approval-comment-head > span::after,
.vl-approval-comment-head strong::after,
.vl-approval-comment-head small::after,
.vl-approval-comment-head i::after,
.vl-approval-comment-lines span::after,
.vl-approval-comment-actions span::after {
  content: '';
  position: absolute;
  inset: 0;
  transform: translateX(-110%);
  background: linear-gradient(90deg, transparent, rgba(255,255,255,.82), transparent);
  animation: vl-approval-comment-shimmer calc(var(--loader-speed) * 1.5) ease-in-out infinite;
}
@keyframes vl-approval-comment-shimmer { to { transform: translateX(110%); } }`
  },
  {
    id: 'party-account-skeleton',
    name: 'Party Account Skeleton',
    category: 'Skeletons',
    tech: 'CSS',
    description: 'A customer or vendor account placeholder with profile, contact, balance, credit, and activity areas.',
    markup: `<div class="vl-party-account-skeleton" aria-hidden="true">
  <div class="vl-party-account-hero"><span></span><div><strong></strong><small></small><small class="short"></small></div></div>
  <div class="vl-party-account-metrics"><span></span><span></span><span></span></div>
  <div class="vl-party-account-row"><i></i><span></span></div>
  <div class="vl-party-account-row short"><i></i><span></span></div>
</div>`,
    css: `.vl-party-account-skeleton {
  width: min(245px, 86vw);
  display: grid;
  gap: 9px;
}
.vl-party-account-hero { display: grid; grid-template-columns: 44px 1fr; align-items: center; gap: 9px; }
.vl-party-account-hero > span,
.vl-party-account-hero strong,
.vl-party-account-hero small,
.vl-party-account-metrics span,
.vl-party-account-row i,
.vl-party-account-row span {
  position: relative;
  overflow: hidden;
  display: block;
  background: #e7ecf3;
}
.vl-party-account-hero > span { width: 44px; height: 44px; border-radius: 12px; }
.vl-party-account-hero div { display: grid; gap: 6px; }
.vl-party-account-hero strong { width: 66%; height: 11px; border-radius: 5px; }
.vl-party-account-hero small { width: 54%; height: 7px; border-radius: 4px; }
.vl-party-account-hero small.short { width: 38%; }
.vl-party-account-metrics { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 7px; }
.vl-party-account-metrics span { height: 42px; border-radius: 8px; background: #edf1f6; }
.vl-party-account-row { display: grid; grid-template-columns: 18px 1fr; align-items: center; gap: 8px; }
.vl-party-account-row i { width: 18px; height: 18px; border-radius: 5px; }
.vl-party-account-row span { width: 74%; height: 8px; border-radius: 4px; }
.vl-party-account-row.short span { width: 52%; }
.vl-party-account-hero > span::after,
.vl-party-account-hero strong::after,
.vl-party-account-hero small::after,
.vl-party-account-metrics span::after,
.vl-party-account-row i::after,
.vl-party-account-row span::after {
  content: '';
  position: absolute;
  inset: 0;
  transform: translateX(-110%);
  background: linear-gradient(90deg, transparent, rgba(255,255,255,.82), transparent);
  animation: vl-party-account-shimmer calc(var(--loader-speed) * 1.5) ease-in-out infinite;
}
@keyframes vl-party-account-shimmer { to { transform: translateX(110%); } }`
  }
];
