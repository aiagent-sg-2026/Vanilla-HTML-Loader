export const mapsPack1LoadersA = [
  {
    id: 'map-pin-drop',
    name: 'Pin Drop',
    category: 'Maps',
    tech: 'Inline SVG',
    description: 'A marker falls onto the map, settles with a bounce and casts a spreading shadow.',
    markup: `<svg class="vl-map-pin-drop" viewBox="0 0 96 76" aria-hidden="true" focusable="false">
      <ellipse class="vl-map-pin-drop-shadow" cx="48" cy="66" rx="12" ry="3.5" />
      <g class="vl-map-pin-drop-marker">
        <path d="M48 20a11 11 0 0 0-11 11c0 8 11 21 11 21s11-13 11-21a11 11 0 0 0-11-11Z" />
        <circle cx="48" cy="31" r="4" />
      </g>
    </svg>`,
    css: `.vl-map-pin-drop { width: 96px; height: 76px; color: var(--loader-accent); overflow: visible; }
.vl-map-pin-drop path { fill: currentColor; stroke: none; }
.vl-map-pin-drop circle { fill: none; stroke: currentColor; stroke-width: 2.4; opacity: .35; }
.vl-map-pin-drop-shadow { fill: currentColor; stroke: none; opacity: .18; animation: vl-map-pin-drop-shade calc(var(--loader-speed) * 1.8) ease-in-out infinite; }
.vl-map-pin-drop-marker { transform-origin: 48px 52px; animation: vl-map-pin-drop-fall calc(var(--loader-speed) * 1.8) cubic-bezier(.5, 0, .5, 1.4) infinite; }
@keyframes vl-map-pin-drop-fall {
  0% { transform: translateY(-46px) scale(.8); opacity: 0; }
  18% { opacity: 1; }
  46% { transform: translateY(0) scale(1); }
  56% { transform: translateY(-7px) scale(1); }
  70%, 88% { transform: translateY(0) scale(1); opacity: 1; }
  100% { transform: translateY(0) scale(1); opacity: 0; }
}
@keyframes vl-map-pin-drop-shade {
  0%, 100% { transform: scale(.3); opacity: 0; }
  46% { transform: scale(1); opacity: .22; }
  70%, 88% { transform: scale(1); opacity: .18; }
}`
  },
  {
    id: 'map-route-trace',
    name: 'Route Trace',
    category: 'Maps',
    tech: 'Inline SVG',
    description: 'A route draws from origin to destination while a vehicle dot follows the line.',
    markup: `<svg class="vl-map-route-trace" viewBox="0 0 116 76" aria-hidden="true" focusable="false">
      <path class="vl-map-route-trace-road" d="M14 62Q34 62 42 46T62 26T96 18" />
      <path class="vl-map-route-trace-line" d="M14 62Q34 62 42 46T62 26T96 18" />
      <circle class="vl-map-route-trace-origin" cx="14" cy="62" r="5" />
      <path class="vl-map-route-trace-flag" d="M96 18V6M96 6h10l-3 4 3 4H96" />
      <circle class="vl-map-route-trace-car" cx="0" cy="0" r="4" />
    </svg>`,
    css: `.vl-map-route-trace { width: 116px; height: 76px; color: var(--loader-accent); overflow: visible; }
.vl-map-route-trace path, .vl-map-route-trace circle { fill: none; stroke: currentColor; stroke-linecap: round; stroke-linejoin: round; }
.vl-map-route-trace-road { stroke-width: 6; opacity: .14; }
.vl-map-route-trace-origin { stroke-width: 2.6; opacity: .6; }
.vl-map-route-trace-flag { stroke-width: 2; opacity: .55; }
.vl-map-route-trace-line { stroke-width: 3.4; stroke-dasharray: 128; stroke-dashoffset: 128; animation: vl-map-route-trace-draw calc(var(--loader-speed) * 2.6) ease-in-out infinite; }
.vl-map-route-trace-car { fill: currentColor; stroke: none; animation: vl-map-route-trace-drive calc(var(--loader-speed) * 2.6) ease-in-out infinite; }
@keyframes vl-map-route-trace-draw { 0% { stroke-dashoffset: 128; } 70%, 88% { stroke-dashoffset: 0; } 100% { stroke-dashoffset: 128; } }
@keyframes vl-map-route-trace-drive {
  0% { transform: translate(14px, 62px); opacity: 0; }
  10% { opacity: 1; }
  30% { transform: translate(42px, 46px); }
  50% { transform: translate(62px, 26px); }
  70%, 88% { transform: translate(96px, 18px); opacity: 1; }
  100% { transform: translate(96px, 18px); opacity: 0; }
}`
  },
  {
    id: 'map-tile-load',
    name: 'Tile Load',
    category: 'Maps',
    tech: 'CSS',
    description: 'Map tiles fade in across the viewport in a diagonal sweep as they finish downloading.',
    markup: `<div class="vl-map-tile-load" aria-hidden="true">
      <i></i><i></i><i></i><i></i>
      <i></i><i></i><i></i><i></i>
      <i></i><i></i><i></i><i></i>
    </div>`,
    css: `.vl-map-tile-load {
  display: grid;
  grid-template-columns: repeat(4, 26px);
  grid-auto-rows: 24px;
  gap: 3px;
  width: 113px;
}
.vl-map-tile-load i {
  border-radius: 2px;
  background: var(--loader-accent);
  opacity: .1;
  animation: vl-map-tile-load-in calc(var(--loader-speed) * 2.4) ease-in-out infinite;
}
.vl-map-tile-load i:nth-child(4n+2) { animation-delay: calc(var(--loader-speed) * .12); }
.vl-map-tile-load i:nth-child(4n+3) { animation-delay: calc(var(--loader-speed) * .24); }
.vl-map-tile-load i:nth-child(4n+4) { animation-delay: calc(var(--loader-speed) * .36); }
.vl-map-tile-load i:nth-child(n+5) { animation-duration: calc(var(--loader-speed) * 2.6); }
.vl-map-tile-load i:nth-child(n+9) { animation-duration: calc(var(--loader-speed) * 2.8); }
@keyframes vl-map-tile-load-in {
  0%, 100% { opacity: .08; transform: scale(.94); }
  40%, 74% { opacity: .8; transform: scale(1); }
}`
  },
  {
    id: 'map-geo-locate',
    name: 'Geo Locate',
    category: 'Maps',
    tech: 'CSS',
    description: 'An accuracy circle pulses outward from a position dot while a fix is acquired.',
    markup: `<div class="vl-map-geo-locate" aria-hidden="true"><span></span><span></span><i></i></div>`,
    css: `.vl-map-geo-locate {
  position: relative;
  width: 76px;
  height: 76px;
  display: grid;
  place-items: center;
}
.vl-map-geo-locate span {
  position: absolute;
  width: 76px;
  height: 76px;
  border-radius: 50%;
  border: 2px solid var(--loader-accent);
  background: color-mix(in srgb, var(--loader-accent) 8%, transparent);
  animation: vl-map-geo-locate-spread calc(var(--loader-speed) * 2.2) ease-out infinite;
}
.vl-map-geo-locate span:nth-child(2) { animation-delay: calc(var(--loader-speed) * -1.1); }
.vl-map-geo-locate i {
  position: relative;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: var(--loader-accent);
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--loader-accent) 25%, transparent);
  animation: vl-map-geo-locate-fix calc(var(--loader-speed) * 2.2) ease-in-out infinite;
}
@keyframes vl-map-geo-locate-spread {
  0% { transform: scale(.18); opacity: .9; }
  100% { transform: scale(1); opacity: 0; }
}
@keyframes vl-map-geo-locate-fix {
  0%, 100% { transform: scale(.82); }
  50% { transform: scale(1); }
}`
  },
  {
    id: 'map-cluster-split',
    name: 'Cluster Split',
    category: 'Maps',
    tech: 'CSS',
    description: 'A cluster badge breaks apart into individual markers, then gathers back together.',
    markup: `<div class="vl-map-cluster-split" aria-hidden="true">
      <b></b>
      <span style="--vl-cs-x: -26px; --vl-cs-y: -18px"></span>
      <span style="--vl-cs-x: 24px;  --vl-cs-y: -22px"></span>
      <span style="--vl-cs-x: 30px;  --vl-cs-y: 14px"></span>
      <span style="--vl-cs-x: -8px;  --vl-cs-y: 26px"></span>
      <span style="--vl-cs-x: -30px; --vl-cs-y: 10px"></span>
    </div>`,
    css: `.vl-map-cluster-split {
  position: relative;
  width: 92px;
  height: 76px;
  display: grid;
  place-items: center;
}
.vl-map-cluster-split b {
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background: var(--loader-accent);
  box-shadow: 0 0 0 5px color-mix(in srgb, var(--loader-accent) 20%, transparent);
  animation: vl-map-cluster-split-badge calc(var(--loader-speed) * 2.6) ease-in-out infinite;
}
.vl-map-cluster-split span {
  position: absolute;
  width: 11px;
  height: 11px;
  border-radius: 50% 50% 50% 0;
  transform: rotate(-45deg);
  background: var(--loader-accent);
  opacity: 0;
  animation: vl-map-cluster-split-fly calc(var(--loader-speed) * 2.6) ease-in-out infinite;
}
.vl-map-cluster-split span:nth-child(3) { animation-delay: calc(var(--loader-speed) * .06); }
.vl-map-cluster-split span:nth-child(4) { animation-delay: calc(var(--loader-speed) * .12); }
.vl-map-cluster-split span:nth-child(5) { animation-delay: calc(var(--loader-speed) * .18); }
.vl-map-cluster-split span:nth-child(6) { animation-delay: calc(var(--loader-speed) * .24); }
@keyframes vl-map-cluster-split-badge {
  0%, 100% { transform: scale(1); opacity: 1; }
  35%, 70% { transform: scale(.35); opacity: .25; }
}
@keyframes vl-map-cluster-split-fly {
  0%, 100% { transform: translate(0, 0) rotate(-45deg) scale(.4); opacity: 0; }
  35%, 70% { transform: translate(var(--vl-cs-x), var(--vl-cs-y)) rotate(-45deg) scale(1); opacity: 1; }
}`
  }
];
