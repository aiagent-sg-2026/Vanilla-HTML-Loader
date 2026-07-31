export const commonWorkspaceSkeletonLoadersA = [
  {
    id: 'command-palette-skeleton',
    name: 'Command Palette Skeleton',
    category: 'Skeletons',
    tech: 'CSS',
    description: 'A command-palette placeholder with search, grouped actions, and keyboard shortcut areas.',
    markup: `<div class="vl-command-skeleton" aria-hidden="true">
  <div class="vl-command-skeleton-search"><span></span><i></i></div>
  <div class="vl-command-skeleton-group"><small></small><span></span><i></i></div>
  <div class="vl-command-skeleton-group"><small></small><span></span><i></i></div>
  <div class="vl-command-skeleton-group short"><small></small><span></span><i></i></div>
</div>`,
    css: `.vl-command-skeleton {
  width: min(235px, 84vw);
  display: grid;
  gap: 6px;
  padding: 8px;
  border: 1px solid #dfe5ed;
  border-radius: 11px;
  background: #fff;
  box-shadow: 0 12px 28px rgba(15,23,42,.09);
}
.vl-command-skeleton-search,
.vl-command-skeleton-group {
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  gap: 10px;
  min-height: 32px;
  padding: 0 9px;
  border-radius: 7px;
}
.vl-command-skeleton-search { border: 1px solid #e3e8ef; background: #f8fafc; }
.vl-command-skeleton-group { grid-template-columns: 16px 1fr 34px; }
.vl-command-skeleton span,
.vl-command-skeleton small,
.vl-command-skeleton i {
  position: relative;
  overflow: hidden;
  display: block;
  border-radius: 4px;
  background: #e7ecf3;
}
.vl-command-skeleton-search span { width: 68%; height: 9px; }
.vl-command-skeleton-search i { width: 18px; height: 18px; border-radius: 6px; }
.vl-command-skeleton-group small { width: 16px; height: 16px; border-radius: 5px; }
.vl-command-skeleton-group span { width: 72%; height: 8px; }
.vl-command-skeleton-group.short span { width: 48%; }
.vl-command-skeleton-group i { width: 34px; height: 17px; border-radius: 5px; }
.vl-command-skeleton span::after,
.vl-command-skeleton small::after,
.vl-command-skeleton i::after {
  content: '';
  position: absolute;
  inset: 0;
  transform: translateX(-110%);
  background: linear-gradient(90deg, transparent, rgba(255,255,255,.82), transparent);
  animation: vl-command-skeleton-shimmer calc(var(--loader-speed) * 1.5) ease-in-out infinite;
}
@keyframes vl-command-skeleton-shimmer { to { transform: translateX(110%); } }`
  },
  {
    id: 'stepper-form-skeleton',
    name: 'Stepper Form Skeleton',
    category: 'Skeletons',
    tech: 'CSS',
    description: 'A multi-step form skeleton for onboarding, transaction entry, checkout, and configuration workflows.',
    markup: `<div class="vl-stepper-form-skeleton" aria-hidden="true">
  <div class="vl-stepper-form-steps"><span></span><i></i><span></span><i></i><span></span></div>
  <div class="vl-stepper-form-title"></div>
  <div class="vl-stepper-form-label"></div><div class="vl-stepper-form-field"></div>
  <div class="vl-stepper-form-label short"></div><div class="vl-stepper-form-field"></div>
  <div class="vl-stepper-form-actions"><span></span><span></span></div>
</div>`,
    css: `.vl-stepper-form-skeleton {
  width: min(235px, 84vw);
  display: grid;
  gap: 7px;
}
.vl-stepper-form-steps {
  display: grid;
  grid-template-columns: 22px 1fr 22px 1fr 22px;
  align-items: center;
  gap: 6px;
  margin-bottom: 4px;
}
.vl-stepper-form-steps span {
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: #dfe6ef;
}
.vl-stepper-form-steps i { height: 3px; border-radius: 999px; background: #e7ecf3; }
.vl-stepper-form-title,
.vl-stepper-form-label,
.vl-stepper-form-field,
.vl-stepper-form-actions span,
.vl-stepper-form-steps span,
.vl-stepper-form-steps i {
  position: relative;
  overflow: hidden;
}
.vl-stepper-form-title { width: 62%; height: 13px; border-radius: 5px; background: #dde4ed; }
.vl-stepper-form-label { width: 38%; height: 8px; border-radius: 4px; background: #e7ecf3; }
.vl-stepper-form-label.short { width: 26%; }
.vl-stepper-form-field { height: 28px; border-radius: 8px; background: #e7ecf3; }
.vl-stepper-form-actions { display: flex; justify-content: flex-end; gap: 7px; margin-top: 3px; }
.vl-stepper-form-actions span { width: 58px; height: 26px; border-radius: 7px; background: #e2e8f0; }
.vl-stepper-form-title::after,
.vl-stepper-form-label::after,
.vl-stepper-form-field::after,
.vl-stepper-form-actions span::after,
.vl-stepper-form-steps span::after,
.vl-stepper-form-steps i::after {
  content: '';
  position: absolute;
  inset: 0;
  transform: translateX(-110%);
  background: linear-gradient(90deg, transparent, rgba(255,255,255,.82), transparent);
  animation: vl-stepper-form-shimmer calc(var(--loader-speed) * 1.5) ease-in-out infinite;
}
@keyframes vl-stepper-form-shimmer { to { transform: translateX(110%); } }`
  },
  {
    id: 'navigation-menu-skeleton',
    name: 'Navigation Menu Skeleton',
    category: 'Skeletons',
    tech: 'CSS',
    description: 'A sidebar navigation skeleton with brand, menu groups, icons, and account controls.',
    markup: `<div class="vl-navigation-skeleton" aria-hidden="true">
  <div class="vl-navigation-brand"><span></span><i></i></div>
  <small></small>
  <div class="vl-navigation-item active"><i></i><span></span></div>
  <div class="vl-navigation-item"><i></i><span></span></div>
  <div class="vl-navigation-item short"><i></i><span></span></div>
  <small class="second"></small>
  <div class="vl-navigation-item"><i></i><span></span></div>
</div>`,
    css: `.vl-navigation-skeleton {
  width: min(205px, 74vw);
  display: grid;
  gap: 7px;
  padding: 11px;
  border: 1px solid #e0e6ee;
  border-radius: 10px;
  background: #fff;
}
.vl-navigation-brand,
.vl-navigation-item { display: flex; align-items: center; gap: 9px; min-height: 28px; }
.vl-navigation-brand { margin-bottom: 3px; }
.vl-navigation-brand span,
.vl-navigation-brand i,
.vl-navigation-item i,
.vl-navigation-item span,
.vl-navigation-skeleton small {
  position: relative;
  overflow: hidden;
  display: block;
  background: #e7ecf3;
}
.vl-navigation-brand span { width: 28px; height: 28px; border-radius: 8px; }
.vl-navigation-brand i { width: 62%; height: 11px; border-radius: 5px; }
.vl-navigation-skeleton small { width: 34%; height: 6px; border-radius: 3px; margin: 2px 0; }
.vl-navigation-skeleton small.second { width: 26%; margin-top: 7px; }
.vl-navigation-item { padding: 0 7px; border-radius: 7px; }
.vl-navigation-item.active { background: color-mix(in srgb, var(--loader-accent) 7%, #f8fafc); }
.vl-navigation-item i { width: 16px; height: 16px; border-radius: 5px; }
.vl-navigation-item span { width: 66%; height: 8px; border-radius: 4px; }
.vl-navigation-item.short span { width: 44%; }
.vl-navigation-skeleton span::after,
.vl-navigation-skeleton i::after,
.vl-navigation-skeleton small::after {
  content: '';
  position: absolute;
  inset: 0;
  transform: translateX(-110%);
  background: linear-gradient(90deg, transparent, rgba(255,255,255,.82), transparent);
  animation: vl-navigation-shimmer calc(var(--loader-speed) * 1.5) ease-in-out infinite;
}
@keyframes vl-navigation-shimmer { to { transform: translateX(110%); } }`
  }
];
