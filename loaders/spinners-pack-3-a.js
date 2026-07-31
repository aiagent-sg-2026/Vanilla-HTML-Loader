export const spinnersPack3LoadersA = [
  {
    id: 'spinner-turbine',
    name: 'Turbine Spinner',
    category: 'Spinners',
    tech: 'CSS',
    description: 'Six curved blades rotate around a compact hub for processing, compute, and engine-like loading states.',
    markup: `<div class="vl-spinner-turbine" aria-hidden="true"><span></span><span></span><span></span><span></span><span></span><span></span></div>`,
    css: `.vl-spinner-turbine {
  position: relative;
  width: 64px;
  height: 64px;
  animation: vl-spinner-turbine-spin calc(var(--loader-speed) * 1.15) linear infinite;
}
.vl-spinner-turbine::after {
  content: '';
  position: absolute;
  left: 25px;
  top: 25px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: var(--loader-accent);
  box-shadow: 0 0 0 5px color-mix(in srgb, var(--loader-accent) 16%, transparent);
}
.vl-spinner-turbine span {
  position: absolute;
  left: 27px;
  top: 5px;
  width: 10px;
  height: 23px;
  border-radius: 10px 10px 3px 10px;
  background: linear-gradient(to bottom, var(--loader-accent), color-mix(in srgb, var(--loader-accent) 35%, transparent));
  transform-origin: 5px 27px;
}
.vl-spinner-turbine span:nth-child(2) { transform: rotate(60deg); }
.vl-spinner-turbine span:nth-child(3) { transform: rotate(120deg); }
.vl-spinner-turbine span:nth-child(4) { transform: rotate(180deg); }
.vl-spinner-turbine span:nth-child(5) { transform: rotate(240deg); }
.vl-spinner-turbine span:nth-child(6) { transform: rotate(300deg); }
@keyframes vl-spinner-turbine-spin { to { transform: rotate(360deg); } }`
  },
  {
    id: 'spinner-segment-dial',
    name: 'Segment Dial Spinner',
    category: 'Spinners',
    tech: 'CSS',
    description: 'A segmented dial sweeps around a soft inner ring for status refresh and timed operations.',
    markup: `<div class="vl-spinner-segment-dial" aria-hidden="true"></div>`,
    css: `.vl-spinner-segment-dial {
  width: 62px;
  height: 62px;
  border-radius: 50%;
  background: repeating-conic-gradient(
    from 0deg,
    var(--loader-accent) 0deg 13deg,
    color-mix(in srgb, var(--loader-accent) 14%, transparent) 13deg 30deg
  );
  -webkit-mask: radial-gradient(circle, transparent 0 20px, #000 21px);
  mask: radial-gradient(circle, transparent 0 20px, #000 21px);
  animation: vl-spinner-segment-dial calc(var(--loader-speed) * 1.25) cubic-bezier(.5,.1,.5,.9) infinite;
}
@keyframes vl-spinner-segment-dial {
  0% { transform: rotate(0deg); opacity: .62; }
  50% { transform: rotate(210deg); opacity: 1; }
  100% { transform: rotate(360deg); opacity: .62; }
}`
  },
  {
    id: 'spinner-infinity-loop',
    name: 'Infinity Loop Spinner',
    category: 'Spinners',
    tech: 'CSS',
    description: 'Two linked loops counter-rotate to suggest continuous synchronization and never-blocking activity.',
    markup: `<div class="vl-spinner-infinity-loop" aria-hidden="true"><span></span><span></span></div>`,
    css: `.vl-spinner-infinity-loop {
  position: relative;
  width: 92px;
  height: 48px;
}
.vl-spinner-infinity-loop span {
  position: absolute;
  top: 4px;
  width: 40px;
  height: 40px;
  border: 4px solid color-mix(in srgb, var(--loader-accent) 18%, transparent);
  border-top-color: var(--loader-accent);
  border-right-color: color-mix(in srgb, var(--loader-accent) 62%, transparent);
  border-radius: 50%;
  animation: vl-spinner-infinity-left var(--loader-speed) linear infinite;
}
.vl-spinner-infinity-loop span:first-child { left: 7px; }
.vl-spinner-infinity-loop span:last-child {
  right: 7px;
  animation-name: vl-spinner-infinity-right;
}
@keyframes vl-spinner-infinity-left { to { transform: rotate(360deg); } }
@keyframes vl-spinner-infinity-right { to { transform: rotate(-360deg); } }`
  },
  {
    id: 'spinner-tri-blade',
    name: 'Tri-Blade Spinner',
    category: 'Spinners',
    tech: 'CSS',
    description: 'Three broad blades accelerate around a central point for compact action and processing feedback.',
    markup: `<div class="vl-spinner-tri-blade" aria-hidden="true"><span></span><span></span><span></span></div>`,
    css: `.vl-spinner-tri-blade {
  position: relative;
  width: 64px;
  height: 64px;
  animation: vl-spinner-tri-blade calc(var(--loader-speed) * .95) cubic-bezier(.55,.15,.45,.85) infinite;
}
.vl-spinner-tri-blade::after {
  content: '';
  position: absolute;
  left: 26px;
  top: 26px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--loader-accent);
}
.vl-spinner-tri-blade span {
  position: absolute;
  left: 27px;
  top: 3px;
  width: 10px;
  height: 26px;
  border-radius: 10px 10px 4px 4px;
  background: var(--loader-accent);
  transform-origin: 5px 29px;
}
.vl-spinner-tri-blade span:nth-child(2) { transform: rotate(120deg); opacity: .72; }
.vl-spinner-tri-blade span:nth-child(3) { transform: rotate(240deg); opacity: .42; }
@keyframes vl-spinner-tri-blade {
  0% { transform: rotate(0deg); }
  70%, 100% { transform: rotate(360deg); }
}`
  },
  {
    id: 'spinner-radar-ring',
    name: 'Radar Ring Spinner',
    category: 'Spinners',
    tech: 'CSS',
    description: 'A radar dot travels around concentric rings for discovery, lookup, and scanning states.',
    markup: `<div class="vl-spinner-radar-ring" aria-hidden="true"><span></span></div>`,
    css: `.vl-spinner-radar-ring {
  position: relative;
  width: 66px;
  height: 66px;
  border: 2px solid color-mix(in srgb, var(--loader-accent) 24%, transparent);
  border-radius: 50%;
  box-shadow: inset 0 0 0 11px color-mix(in srgb, var(--loader-accent) 6%, transparent), inset 0 0 0 13px color-mix(in srgb, var(--loader-accent) 20%, transparent);
}
.vl-spinner-radar-ring::after {
  content: '';
  position: absolute;
  left: 30px;
  top: 30px;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--loader-accent);
}
.vl-spinner-radar-ring span {
  position: absolute;
  inset: 0;
  animation: vl-spinner-radar-ring calc(var(--loader-speed) * 1.3) linear infinite;
}
.vl-spinner-radar-ring span::before {
  content: '';
  position: absolute;
  left: 28px;
  top: 1px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--loader-accent);
  box-shadow: 0 0 0 5px color-mix(in srgb, var(--loader-accent) 16%, transparent);
}
@keyframes vl-spinner-radar-ring { to { transform: rotate(360deg); } }`
  }
];
