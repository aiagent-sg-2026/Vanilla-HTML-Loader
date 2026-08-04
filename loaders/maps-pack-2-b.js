export const mapsPack2LoadersB = [
  {
    id: 'map-weather-radar-sweep',
    name: 'Weather Radar Sweep',
    category: 'Maps',
    tech: 'CSS',
    description: 'Concentric radar rings and a rotating sweep indicate cells updating in an area.',
    markup: `<div class="vl-map-weather-radar-sweep" aria-hidden="true">
      <span class="vl-map-weather-radar-sweep-ring"></span>
      <span class="vl-map-weather-radar-sweep-ring"></span>
      <span class="vl-map-weather-radar-sweep-ring"></span>
      <span class="vl-map-weather-radar-sweep-arm"></span>
      <i></i>
    </div>`,
    css: `.vl-map-weather-radar-sweep {
  position: relative;
  width: 76px;
  height: 76px;
  display: grid;
  place-items: center;
}
.vl-map-weather-radar-sweep-ring {
  position: absolute;
  inset: 7px;
  border: 2px solid color-mix(in srgb, var(--loader-accent) 30%, transparent);
  border-radius: 50%;
  animation: vl-map-weather-radar-sweep-ring calc(var(--loader-speed) * 2.4) linear infinite;
}
.vl-map-weather-radar-sweep-ring:nth-child(2) { inset: 16px; animation-duration: calc(var(--loader-speed) * 2.1); }
.vl-map-weather-radar-sweep-ring:nth-child(3) { inset: 25px; animation-duration: calc(var(--loader-speed) * 1.8); }
.vl-map-weather-radar-sweep-arm {
  position: absolute;
  width: 2px;
  height: 34px;
  border-radius: 2px;
  transform-origin: bottom center;
  background: color-mix(in srgb, var(--loader-accent) 88%, transparent);
  opacity: .7;
  animation: vl-map-weather-radar-sweep-arm calc(var(--loader-speed) * 2.6) linear infinite;
}
.vl-map-weather-radar-sweep i {
  position: absolute;
  width: 2px;
  height: 2px;
  border-radius: 50%;
  background: var(--loader-accent);
  box-shadow: 0 0 0 2px color-mix(in srgb, var(--loader-accent) 16%, transparent);
  animation: vl-map-weather-radar-sweep-dot calc(var(--loader-speed) * 2.6) ease-in-out infinite;
}
@keyframes vl-map-weather-radar-sweep-ring {
  0%, 100% { opacity: .12; transform: scale(0.96); }
  40%, 80% { opacity: .54; transform: scale(1); }
}
@keyframes vl-map-weather-radar-sweep-arm {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
@keyframes vl-map-weather-radar-sweep-dot {
  0%, 40% { transform: rotate(0deg) translateY(-30px); opacity: .2; }
  50%, 72% { opacity: .85; }
  100% { transform: rotate(360deg) translateY(-30px); opacity: .2; }
}`
  },
  {
    id: 'map-globe-connection-arcs',
    name: 'Globe Connection Arcs',
    category: 'Maps',
    tech: 'SVG',
    description: 'Arc links pulse between regions while nodes appear and disappear on a globe projection.',
    markup: `<svg class="vl-map-globe-connection-arcs" viewBox="0 0 132 76" aria-hidden="true" focusable="false">
      <ellipse class="vl-map-globe-connection-arcs-sphere" cx="66" cy="38" rx="54" ry="26" />
      <path class="vl-map-globe-connection-arcs-path" d="M18 38C36 15 58 15 84 20C110 26 114 56 114 56" />
      <path class="vl-map-globe-connection-arcs-path" d="M18 38C44 52 70 48 84 48" />
      <path class="vl-map-globe-connection-arcs-path" d="M18 38C32 50 70 66 114 40" />
      <circle class="vl-map-globe-connection-arcs-node" cx="18" cy="38" r="4" />
      <circle class="vl-map-globe-connection-arcs-node" cx="66" cy="27" r="4" />
      <circle class="vl-map-globe-connection-arcs-node" cx="114" cy="56" r="4" />
      <circle class="vl-map-globe-connection-arcs-pulse" cx="18" cy="38" r="3" />
    </svg>`,
    css: `.vl-map-globe-connection-arcs { width: 132px; height: 76px; color: var(--loader-accent); overflow: visible; }
.vl-map-globe-connection-arcs ellipse,
.vl-map-globe-connection-arcs path,
.vl-map-globe-connection-arcs circle { fill: none; stroke: currentColor; stroke-linecap: round; }
.vl-map-globe-connection-arcs-sphere { stroke-width: 2.6; opacity: .12; }
.vl-map-globe-connection-arcs-path {
  stroke-width: 2.4;
  stroke-dasharray: 130;
  stroke-dashoffset: 130;
  opacity: .75;
  animation: vl-map-globe-connection-arcs-flow calc(var(--loader-speed) * 3) ease-in-out infinite;
}
.vl-map-globe-connection-arcs-path:nth-child(3) { animation-delay: calc(var(--loader-speed) * .2); }
.vl-map-globe-connection-arcs-path:nth-child(4) { animation-delay: calc(var(--loader-speed) * .4); }
.vl-map-globe-connection-arcs-node { fill: currentColor; stroke: none; opacity: .72; animation: vl-map-globe-connection-arcs-node calc(var(--loader-speed) * 3) ease-in-out infinite; }
.vl-map-globe-connection-arcs-node:nth-child(7) { animation-delay: calc(var(--loader-speed) * .8); }
.vl-map-globe-connection-arcs-pulse {
  fill: currentColor;
  opacity: .32;
  animation: vl-map-globe-connection-arcs-pulse calc(var(--loader-speed) * 3) ease-in-out infinite;
}
@keyframes vl-map-globe-connection-arcs-flow {
  0% { stroke-dashoffset: 130; opacity: .25; }
  35%, 74% { stroke-dashoffset: 0; opacity: .85; }
  100% { stroke-dashoffset: -130; opacity: .25; }
}
@keyframes vl-map-globe-connection-arcs-node {
  0%, 100% { opacity: .22; transform: scale(0.7); }
  45%, 70% { opacity: 1; transform: scale(1); }
}
@keyframes vl-map-globe-connection-arcs-pulse {
  0%, 35% { opacity: .18; transform: scale(.4); }
  62% { opacity: .42; transform: scale(1.6); }
  100% { opacity: .18; transform: scale(.4); }
}`
  },
  {
    id: 'map-isoline-draw',
    name: 'Contour / Isoline Draw',
    category: 'Maps',
    tech: 'SVG',
    description: 'Concentric isolation contours draw one by one to represent travel-time bands.',
    markup: `<svg class="vl-map-isoline-draw" viewBox="0 0 96 76" aria-hidden="true" focusable="false">
      <path class="vl-map-isoline-draw-band" d="M48 68C60 60 76 60 82 50C88 40 78 24 60 20C46 17 30 22 18 18" />
      <path class="vl-map-isoline-draw-band" d="M48 60C62 48 74 56 82 46C88 40 78 31 66 30C51 28 41 34 28 28" />
      <path class="vl-map-isoline-draw-band" d="M48 52C56 46 64 48 70 42C76 36 68 28 57 27C47 25 39 34 32 30" />
      <circle class="vl-map-isoline-draw-core" cx="48" cy="38" r="5" />
    </svg>`,
    css: `.vl-map-isoline-draw { width: 96px; height: 76px; color: var(--loader-accent); overflow: visible; }
.vl-map-isoline-draw path { fill: none; stroke: currentColor; stroke-linejoin: round; stroke-linecap: round; }
.vl-map-isoline-draw-band {
  stroke-width: 2;
  stroke-dasharray: 120;
  stroke-dashoffset: 120;
  opacity: .25;
  animation: vl-map-isoline-draw-band calc(var(--loader-speed) * 2.8) ease-in-out infinite;
}
.vl-map-isoline-draw-band:nth-child(2) { animation-delay: calc(var(--loader-speed) * .12); }
.vl-map-isoline-draw-band:nth-child(3) { animation-delay: calc(var(--loader-speed) * .24); }
.vl-map-isoline-draw-core {
  stroke: none;
  fill: currentColor;
  opacity: .35;
  animation: vl-map-isoline-draw-core calc(var(--loader-speed) * 2.8) ease-in-out infinite;
}
@keyframes vl-map-isoline-draw-band {
  0% { stroke-dashoffset: 120; opacity: .15; }
  38%, 78% { stroke-dashoffset: 0; opacity: .8; }
  100% { stroke-dashoffset: 120; opacity: .15; }
}
@keyframes vl-map-isoline-draw-core {
  0%, 100% { transform: scale(.8); opacity: .2; }
  40%, 74% { transform: scale(1); opacity: .75; }
}`
  },
  {
    id: 'map-address-geocoding',
    name: 'Address Geocoding',
    category: 'Maps',
    tech: 'CSS + JavaScript',
    description: 'Input stages move from parsing, resolving, validation to coordinate lock with practical status output.',
    markup: `<div class="vl-map-address-geocoding" aria-label="Address geocoding" role="status" aria-live="polite">
      <div class="vl-map-address-geocoding-head">
        <span class="vl-map-address-geocoding-badge">Parsing</span>
      </div>
      <div class="vl-map-address-geocoding-rows" data-stage="1">
        <span>Input format</span><strong>✓</strong>
      </div>
      <div class="vl-map-address-geocoding-rows" data-stage="2">
        <span>Street resolution</span><strong>•</strong>
      </div>
      <div class="vl-map-address-geocoding-rows" data-stage="3">
        <span>Coordinate match</span><strong>•</strong>
      </div>
      <div class="vl-map-address-geocoding-rows" data-stage="4">
        <span>Ready for use</span><strong>•</strong>
      </div>
      <div class="vl-map-address-geocoding-track" role="progressbar" aria-valuemin="0" aria-valuemax="4" aria-valuenow="1">
        <span></span>
      </div>
      <span class="vl-map-address-geocoding-coord">12.9716, 77.5946</span>
    </div>`,
    css: `.vl-map-address-geocoding {
  width: 116px;
  padding: 10px;
  box-sizing: border-box;
  display: grid;
  gap: 6px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 10%, #dbe2ec);
  border-radius: 10px;
  background: linear-gradient(180deg, #ffffff, #f6f9fe);
  color: #182033;
  font: 700 10px/1.2 system-ui, sans-serif;
  box-shadow: 0 6px 16px rgba(16, 30, 56, 0.08);
}
.vl-map-address-geocoding-head { font-size: 10px; color: #5e6f85; }
.vl-map-address-geocoding-badge {
  display: inline-block;
  padding: 3px 7px;
  border-radius: 999px;
  background: color-mix(in srgb, var(--loader-accent) 18%, #f2f5fd);
}
.vl-map-address-geocoding-rows {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px dashed color-mix(in srgb, var(--loader-accent) 18%, #d6deea);
  padding: 0 0 4px;
  color: #5a6882;
}
.vl-map-address-geocoding-rows strong {
  font-size: 11px;
  color: #9ca6b4;
}
.vl-map-address-geocoding-track {
  position: relative;
  height: 6px;
  margin-top: 2px;
  border-radius: 999px;
  overflow: hidden;
  background: color-mix(in srgb, var(--loader-accent) 12%, #e7ebf4);
}
.vl-map-address-geocoding-track span {
  display: block;
  height: 100%;
  width: 14%;
  border-radius: inherit;
  background: linear-gradient(90deg, var(--loader-accent), color-mix(in srgb, var(--loader-accent) 78%, #cfe6ff));
  animation: vl-map-address-geocoding-progress calc(var(--loader-speed) * 2.8) ease-in-out infinite;
}
.vl-map-address-geocoding-coord {
  display: block;
  font-size: 9px;
  color: #5d6d89;
  opacity: .9;
}
@keyframes vl-map-address-geocoding-progress {
  0% { width: 20%; transform: translateX(0); }
  35%, 75% { width: 88%; transform: translateX(3px); }
  100% { width: 20%; transform: translateX(84px); }
}`
  },
  {
    id: 'map-search-area-expansion',
    name: 'Search Area Expansion',
    category: 'Maps',
    tech: 'CSS',
    description: 'A query radius expands outward and refines in multiple passes around a search origin.',
    markup: `<div class="vl-map-search-area-expansion" aria-hidden="true">
      <span class="vl-map-search-area-expansion-core"></span>
      <span class="vl-map-search-area-expansion-ring" style="--vl-area-d: 0"></span>
      <span class="vl-map-search-area-expansion-ring" style="--vl-area-d: 1"></span>
      <span class="vl-map-search-area-expansion-ring" style="--vl-area-d: 2"></span>
      <span class="vl-map-search-area-expansion-ring" style="--vl-area-d: 3"></span>
    </div>`,
    css: `.vl-map-search-area-expansion {
  position: relative;
  width: 76px;
  height: 76px;
  display: grid;
  place-items: center;
}
.vl-map-search-area-expansion-core {
  position: relative;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  z-index: 1;
  background: var(--loader-accent);
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--loader-accent) 24%, transparent);
}
.vl-map-search-area-expansion-ring {
  position: absolute;
  inset: 0;
  margin: auto;
  border-radius: 50%;
  border: 2px solid color-mix(in srgb, var(--loader-accent) 24%, transparent);
  opacity: 0;
  animation: vl-map-search-area-expansion-wave calc(var(--loader-speed) * 2.6) ease-out infinite;
  animation-delay: calc(var(--vl-area-d) * .25);
  width: calc(16px + var(--vl-area-d) * 13px);
  height: calc(16px + var(--vl-area-d) * 13px);
}
@keyframes vl-map-search-area-expansion-wave {
  0% { transform: scale(.16); opacity: .05; }
  20%, 68% { opacity: .44; transform: scale(1); }
  100% { opacity: 0; transform: scale(2.4); }
}`
  }
];
