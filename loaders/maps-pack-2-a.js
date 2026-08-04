export const mapsPack2LoadersA = [
  {
    id: 'map-gps-satellite-lock',
    name: 'GPS Satellite Lock',
    category: 'Maps',
    tech: 'CSS',
    description: 'A lock signal stabilizes from weak to strong, confirming GPS fix with confidence rings and status pulses.',
    markup: `<div class="vl-map-gps-satellite-lock" aria-hidden="true">
      <span class="vl-map-gps-satellite-lock-orbit"></span>
      <span class="vl-map-gps-satellite-lock-orbit"></span>
      <span class="vl-map-gps-satellite-lock-satellite"></span>
      <span class="vl-map-gps-satellite-lock-dot"></span>
      <span class="vl-map-gps-satellite-lock-text">Fixing signal…</span>
    </div>`,
    css: `.vl-map-gps-satellite-lock {
  position: relative;
  width: 76px;
  height: 76px;
  display: grid;
  place-items: center;
}
.vl-map-gps-satellite-lock-orbit {
  position: absolute;
  inset: 6px;
  border-radius: 50%;
  border: 2px solid var(--loader-accent);
  opacity: 0;
  animation: vl-map-gps-satellite-lock-orbit calc(var(--loader-speed) * 2.2) ease-in-out infinite;
}
.vl-map-gps-satellite-lock-orbit:nth-child(2) {
  inset: 14px;
  animation-delay: calc(var(--loader-speed) * .35);
}
.vl-map-gps-satellite-lock-satellite {
  position: relative;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--loader-accent);
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--loader-accent) 22%, transparent);
  animation: vl-map-gps-satellite-lock-jump calc(var(--loader-speed) * 2.2) cubic-bezier(.2, .9, .3, 1) infinite;
}
.vl-map-gps-satellite-lock-dot {
  position: absolute;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: color-mix(in srgb, var(--loader-accent) 82%, white);
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--loader-accent) 30%, transparent);
  animation: vl-map-gps-satellite-lock-lock calc(var(--loader-speed) * 2.2) ease-in-out infinite;
}
.vl-map-gps-satellite-lock-text {
  position: absolute;
  top: 56px;
  font: 700 9px/1 system-ui, sans-serif;
  letter-spacing: .02em;
  color: #5e6f84;
  opacity: .75;
  animation: vl-map-gps-satellite-lock-status calc(var(--loader-speed) * 2.2) ease-in-out infinite;
}
@keyframes vl-map-gps-satellite-lock-orbit {
  0%, 100% { opacity: 0; transform: scale(.45); }
  18%, 72% { opacity: .38; transform: scale(1); }
}
@keyframes vl-map-gps-satellite-lock-jump {
  0% { transform: translate(0, -2px) scale(.86); }
  18% { transform: translate(0, 0) scale(1); }
  52% { transform: translate(0, 0) scale(1); }
  100% { transform: translate(0, 6px) scale(.9); }
}
@keyframes vl-map-gps-satellite-lock-lock {
  0% { transform: scale(0); opacity: 0; }
  35% { transform: scale(1); opacity: 1; }
  60%, 100% { transform: scale(.82); opacity: 0; }
}
@keyframes vl-map-gps-satellite-lock-status {
  0%, 35% { opacity: .55; }
  52% { opacity: 1; }
  68%, 100% { opacity: .55; }
}`
  },
  {
    id: 'map-geofence-detection',
    name: 'Geofence Detection',
    category: 'Maps',
    tech: 'SVG',
    description: 'A perimeter ring expands while points enter and exit, revealing geofence state transitions.',
    markup: `<svg class="vl-map-geofence-detection" viewBox="0 0 96 76" aria-hidden="true" focusable="false">
      <path class="vl-map-geofence-detection-boundary" d="M14 18h66a8 8 0 0 1 8 8v34a8 8 0 0 1-8 8H14a8 8 0 0 1-8-8V26a8 8 0 0 1 8-8Z" />
      <circle class="vl-map-geofence-detection-dot" cx="26" cy="36" r="4" />
      <circle class="vl-map-geofence-detection-dot" cx="58" cy="32" r="4" />
      <circle class="vl-map-geofence-detection-dot" cx="70" cy="52" r="4" />
      <path class="vl-map-geofence-detection-pulse" d="M48 8L56 27L77 27L60 41L66 62L48 50L30 62L36 41L19 27L40 27Z" />
    </svg>`,
    css: `.vl-map-geofence-detection {
  width: 96px;
  height: 76px;
  color: var(--loader-accent);
  overflow: visible;
}
.vl-map-geofence-detection path,
.vl-map-geofence-detection circle { fill: none; stroke: currentColor; stroke-linejoin: round; stroke-linecap: round; }
.vl-map-geofence-detection-boundary {
  stroke-width: 2.4;
  stroke-dasharray: 246;
  stroke-dashoffset: 246;
  animation: vl-map-geofence-detection-boundary calc(var(--loader-speed) * 2.4) ease-in-out infinite;
}
.vl-map-geofence-detection-dot {
  stroke: none;
  fill: currentColor;
  opacity: .25;
  animation: vl-map-geofence-detection-dot calc(var(--loader-speed) * 2.4) ease-in-out infinite;
}
.vl-map-geofence-detection-dot:nth-of-type(2) { animation-delay: calc(var(--loader-speed) * .2); }
.vl-map-geofence-detection-dot:nth-of-type(3) { animation-delay: calc(var(--loader-speed) * .4); }
.vl-map-geofence-detection-dot:nth-of-type(4) { animation-delay: calc(var(--loader-speed) * .6); }
.vl-map-geofence-detection-pulse {
  fill: color-mix(in srgb, var(--loader-accent) 24%, transparent);
  stroke-width: 2;
  opacity: .18;
  transform-origin: 48px 38px;
  animation: vl-map-geofence-detection-pulse calc(var(--loader-speed) * 2.4) ease-in-out infinite;
}
@keyframes vl-map-geofence-detection-boundary {
  0%, 100% { stroke-dashoffset: 246; opacity: .16; }
  26%, 76% { stroke-dashoffset: 0; opacity: .65; }
}
@keyframes vl-map-geofence-detection-dot {
  0%, 100% { opacity: .18; transform: scale(.75); }
  18%, 68% { opacity: 1; transform: scale(1); }
}
@keyframes vl-map-geofence-detection-pulse {
  0% { transform: scale(.68); opacity: .05; }
  40%, 65% { transform: scale(1); opacity: .2; }
  100% { transform: scale(1.05); opacity: 0; }
}`
  },
  {
    id: 'map-route-recalc',
    name: 'Route Recalculation',
    category: 'Maps',
    tech: 'CSS',
    description: 'A planned path is invalidated and a fresher route computes in staged waves.',
    markup: `<div class="vl-map-route-recalc" aria-hidden="true">
      <span style="--vl-mrr-x: 8px; --vl-mrr-d: 0"></span>
      <span style="--vl-mrr-x: 22px; --vl-mrr-d: 1"></span>
      <span style="--vl-mrr-x: 36px; --vl-mrr-d: 2"></span>
      <span style="--vl-mrr-x: 50px; --vl-mrr-d: 3"></span>
      <span style="--vl-mrr-x: 64px; --vl-mrr-d: 4"></span>
      <span style="--vl-mrr-x: 80px; --vl-mrr-d: 5"></span>
      <i class="vl-map-route-recalc-car" style="--vl-mrr-y: 8px;"></i>
      <i class="vl-map-route-recalc-car" style="--vl-mrr-y: 39px;"></i>
      <i class="vl-map-route-recalc-car" style="--vl-mrr-y: 18px;"></i>
      <i class="vl-map-route-recalc-car" style="--vl-mrr-y: 52px;"></i>
    </div>`,
    css: `.vl-map-route-recalc {
  position: relative;
  width: 96px;
  height: 76px;
  display: block;
}
.vl-map-route-recalc span {
  position: absolute;
  left: var(--vl-mrr-x);
  top: 50%;
  width: 16px;
  height: 16px;
  margin-top: -8px;
  border-radius: 50%;
  border: 2px solid color-mix(in srgb, var(--loader-accent) 20%, transparent);
  opacity: .22;
  transform: rotate(0deg);
  animation: vl-map-route-recalc-node calc(var(--loader-speed) * 2.6) ease-in-out infinite;
  animation-delay: calc(var(--loader-speed) * var(--vl-mrr-d) * .16);
}
.vl-map-route-recalc span:nth-child(5) { left: 76px; }
.vl-map-route-recalc-car {
  position: absolute;
  left: 8px;
  top: var(--vl-mrr-y);
  width: 11px;
  height: 11px;
  border-radius: 50% 50% 50% 0;
  transform: rotate(-35deg);
  background: var(--loader-accent);
  box-shadow: 0 0 0 2px color-mix(in srgb, var(--loader-accent) 28%, transparent);
  animation: vl-map-route-recalc-reroute calc(var(--loader-speed) * 2.6) ease-in-out infinite;
  animation-delay: calc(var(--loader-speed) * 0.8);
}
.vl-map-route-recalc-car:nth-child(8) { animation-delay: calc(var(--loader-speed) * 1.2); }
.vl-map-route-recalc-car:nth-child(9) { animation-delay: calc(var(--loader-speed) * 1.8); }
.vl-map-route-recalc-car:nth-child(10) { animation-delay: calc(var(--loader-speed) * 2.1); }
@keyframes vl-map-route-recalc-node {
  0%, 100% { transform: scale(.6); opacity: .12; }
  30%, 70% { transform: scale(1); opacity: .65; }
}
@keyframes vl-map-route-recalc-reroute {
  0%, 10% { transform: translateX(0) rotate(-35deg); opacity: .3; }
  20%, 80% { transform: translateX(76px) rotate(-35deg); opacity: .95; }
  100% { transform: translateX(88px) rotate(-35deg); opacity: 0; }
}`
  },
  {
    id: 'map-delivery-fleet-tracking',
    name: 'Delivery Fleet Tracking',
    category: 'Maps',
    tech: 'CSS',
    description: 'Multiple vehicles move on stacked lanes to emulate live fleet dispatch and handoff.',
    markup: `<div class="vl-map-delivery-fleet-tracking" aria-hidden="true">
      <b style="--vl-fleet-y: 14px; --vl-fleet-delay: 0"></b>
      <b style="--vl-fleet-y: 31px; --vl-fleet-delay: .16"></b>
      <b style="--vl-fleet-y: 48px; --vl-fleet-delay: .3"></b>
      <i style="--vl-fleet-track: 1"></i>
      <i style="--vl-fleet-track: 2"></i>
      <i style="--vl-fleet-track: 3"></i>
    </div>`,
    css: `.vl-map-delivery-fleet-tracking {
  position: relative;
  width: 114px;
  height: 76px;
  padding: 0 4px;
  box-sizing: border-box;
}
.vl-map-delivery-fleet-tracking b {
  position: absolute;
  left: 0;
  top: var(--vl-fleet-y);
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 2px solid color-mix(in srgb, var(--loader-accent) 30%, transparent);
  animation: vl-map-delivery-fleet-reposition calc(var(--loader-speed) * 2.8) ease-in-out infinite;
  animation-delay: calc(var(--loader-speed) * var(--vl-fleet-delay));
}
.vl-map-delivery-fleet-tracking i {
  position: absolute;
  left: 6px;
  top: 16px;
  width: 18px;
  height: 9px;
  margin-top: calc((var(--vl-fleet-track) - 1) * 17px);
  border-radius: 999px;
  background: color-mix(in srgb, var(--loader-accent) 75%, transparent);
  border: 1px solid var(--loader-accent);
  animation: vl-map-delivery-fleet-drive calc(var(--loader-speed) * 2.8) linear infinite;
}
.vl-map-delivery-fleet-tracking i:nth-child(5) { animation-delay: calc(var(--loader-speed) * .4); }
.vl-map-delivery-fleet-tracking i:nth-child(6) { animation-delay: calc(var(--loader-speed) * .8); }
@keyframes vl-map-delivery-fleet-reposition {
  0% { transform: translateX(0); opacity: .15; }
  15%, 72% { opacity: 1; }
  100% { transform: translateX(94px); opacity: .15; }
}
@keyframes vl-map-delivery-fleet-drive {
  0% { transform: translateX(-6px); opacity: .2; }
  10% { opacity: 1; }
  70% { transform: translateX(98px); opacity: 1; }
  100% { transform: translateX(118px); opacity: .18; }
}`
  },
  {
    id: 'map-transit-line-loading',
    name: 'Transit Line Loading',
    category: 'Maps',
    tech: 'Inline SVG',
    description: 'Stations and train cars animate in a fixed interval while the line headlight sweeps.',
    markup: `<svg class="vl-map-transit-line-loading" viewBox="0 0 128 76" aria-hidden="true" focusable="false">
      <line class="vl-map-transit-line-loading-rail" x1="12" y1="38" x2="116" y2="38" />
      <circle class="vl-map-transit-line-loading-station" cx="18" cy="38" r="5" />
      <circle class="vl-map-transit-line-loading-station" cx="42" cy="38" r="5" />
      <circle class="vl-map-transit-line-loading-station" cx="72" cy="38" r="5" />
      <circle class="vl-map-transit-line-loading-station" cx="102" cy="38" r="5" />
      <rect class="vl-map-transit-line-loading-car" x="24" y="29" width="18" height="10" rx="3" />
      <rect class="vl-map-transit-line-loading-car" x="56" y="29" width="18" height="10" rx="3" />
      <circle class="vl-map-transit-line-loading-headlight" cx="12" cy="34" r="5" />
    </svg>`,
    css: `.vl-map-transit-line-loading { width: 128px; height: 76px; color: var(--loader-accent); }
.vl-map-transit-line-loading-line, .vl-map-transit-line-loading-station,
.vl-map-transit-line-loading-car, .vl-map-transit-line-loading-headlight,
.vl-map-transit-line-loading-rail { fill: none; stroke: currentColor; }
.vl-map-transit-line-loading-rail {
  stroke-width: 6;
  opacity: .14;
}
.vl-map-transit-line-loading-station { stroke-width: 2; opacity: .7; fill: color-mix(in srgb, var(--loader-accent) 85%, transparent); }
.vl-map-transit-line-loading-car {
  stroke-width: 0;
  fill: color-mix(in srgb, var(--loader-accent) 65%, transparent);
  opacity: .75;
  animation: vl-map-transit-line-loading-car calc(var(--loader-speed) * 3.2) ease-in-out infinite;
}
.vl-map-transit-line-loading-car:nth-child(7) { animation-delay: calc(var(--loader-speed) * .8); }
.vl-map-transit-line-loading-headlight {
  fill: var(--loader-accent);
  animation: vl-map-transit-line-loading-headlight calc(var(--loader-speed) * 3.2) linear infinite;
}
@keyframes vl-map-transit-line-loading-car {
  0% { transform: translateX(0); opacity: .25; }
  20%, 70% { opacity: .9; }
  100% { transform: translateX(82px); opacity: .25; }
}
@keyframes vl-map-transit-line-loading-headlight {
  0% { opacity: .2; transform: translateX(-2px); }
  12% { opacity: 1; transform: translateX(108px); }
  100% { opacity: .2; transform: translateX(108px); }
}`
  }
];
