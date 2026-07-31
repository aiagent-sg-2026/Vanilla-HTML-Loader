export const chartsPack1LoadersA = [
  {
    id: 'chart-bar-build',
    name: 'Bar Chart Build',
    category: 'Charts',
    tech: 'CSS',
    description: 'Columns grow from the axis one after another as a bar chart populates.',
    markup: `<div class="vl-chart-bar-build" aria-hidden="true">
      <div class="vl-chart-bar-build-grid"><i></i><i></i><i></i></div>
      <div class="vl-chart-bar-build-bars"><span></span><span></span><span></span><span></span><span></span></div>
    </div>`,
    css: `.vl-chart-bar-build {
  position: relative;
  width: 116px;
  height: 76px;
  padding: 0 4px 6px;
  border-left: 2px solid color-mix(in srgb, var(--loader-accent) 35%, transparent);
  border-bottom: 2px solid color-mix(in srgb, var(--loader-accent) 35%, transparent);
  box-sizing: border-box;
}
.vl-chart-bar-build-grid { position: absolute; inset: 0 4px 6px 0; display: flex; flex-direction: column; justify-content: space-between; }
.vl-chart-bar-build-grid i { display: block; height: 1px; background: var(--loader-accent); opacity: .12; }
.vl-chart-bar-build-bars { position: relative; height: 100%; display: flex; align-items: flex-end; gap: 7px; }
.vl-chart-bar-build-bars span {
  width: 13px;
  border-radius: 3px 3px 0 0;
  background: var(--loader-accent);
  transform-origin: bottom center;
  animation: vl-chart-bar-build-grow calc(var(--loader-speed) * 2.2) ease-in-out infinite;
}
.vl-chart-bar-build-bars span:nth-child(1) { height: 40%; }
.vl-chart-bar-build-bars span:nth-child(2) { height: 68%; animation-delay: calc(var(--loader-speed) * .12); }
.vl-chart-bar-build-bars span:nth-child(3) { height: 52%; animation-delay: calc(var(--loader-speed) * .24); }
.vl-chart-bar-build-bars span:nth-child(4) { height: 88%; animation-delay: calc(var(--loader-speed) * .36); }
.vl-chart-bar-build-bars span:nth-child(5) { height: 62%; animation-delay: calc(var(--loader-speed) * .48); }
@keyframes vl-chart-bar-build-grow {
  0%, 100% { transform: scaleY(.06); opacity: .35; }
  45%, 72% { transform: scaleY(1); opacity: 1; }
}`
  },
  {
    id: 'chart-line-draw',
    name: 'Line Chart Draw',
    category: 'Charts',
    tech: 'Inline SVG',
    description: 'A trend line draws itself across the plot while a marker rides the leading edge.',
    markup: `<svg class="vl-chart-line-draw" viewBox="0 0 116 76" aria-hidden="true" focusable="false">
      <g class="vl-chart-line-draw-grid">
        <line x1="12" y1="18" x2="110" y2="18" />
        <line x1="12" y1="38" x2="110" y2="38" />
        <line x1="12" y1="58" x2="110" y2="58" />
      </g>
      <polyline class="vl-chart-line-draw-axis" points="12,8 12,66 110,66" />
      <polyline class="vl-chart-line-draw-series" points="16,56 34,40 50,48 66,24 84,32 106,14" />
      <circle class="vl-chart-line-draw-head" cx="0" cy="0" r="3.6" />
    </svg>`,
    css: `.vl-chart-line-draw { width: 116px; height: 76px; color: var(--loader-accent); overflow: visible; }
    .vl-chart-line-draw polyline, .vl-chart-line-draw line { fill: none; stroke: currentColor; stroke-linecap: round; stroke-linejoin: round; }
    .vl-chart-line-draw-grid line { stroke-width: 1; opacity: .12; }
    .vl-chart-line-draw-axis { stroke-width: 2; opacity: .35; }
    .vl-chart-line-draw-series { stroke-width: 3; stroke-dasharray: 130; stroke-dashoffset: 130; animation: vl-chart-line-draw-trace calc(var(--loader-speed) * 2.4) ease-in-out infinite; }
    .vl-chart-line-draw-head { fill: currentColor; stroke: none; animation: vl-chart-line-draw-ride calc(var(--loader-speed) * 2.4) ease-in-out infinite; }
    @keyframes vl-chart-line-draw-trace { 0% { stroke-dashoffset: 130; } 65%, 85% { stroke-dashoffset: 0; } 100% { stroke-dashoffset: 130; } }
    @keyframes vl-chart-line-draw-ride {
      0%   { transform: translate(16px, 56px); opacity: 0; }
      10%  { opacity: 1; }
      20%  { transform: translate(34px, 40px); }
      35%  { transform: translate(50px, 48px); }
      48%  { transform: translate(66px, 24px); }
      58%  { transform: translate(84px, 32px); }
      65%, 85% { transform: translate(106px, 14px); opacity: 1; }
      100% { transform: translate(106px, 14px); opacity: 0; }
    }`
  },
  {
    id: 'chart-donut-fill',
    name: 'Donut Fill',
    category: 'Charts',
    tech: 'Inline SVG',
    description: 'A donut segment sweeps around to a full ring, leaving the centre clear for a value label.',
    markup: `<svg class="vl-chart-donut-fill" viewBox="0 0 76 76" aria-hidden="true" focusable="false">
      <circle class="vl-chart-donut-fill-track" cx="38" cy="38" r="28" />
      <circle class="vl-chart-donut-fill-value" cx="38" cy="38" r="28" />
      <circle class="vl-chart-donut-fill-pip" cx="38" cy="38" r="4" />
    </svg>`,
    // stroke-dasharray rather than a conic-gradient plus a covering disc: the
    // centre stays genuinely transparent, so the loader sits correctly on the
    // light, dark and brand preview backgrounds and on whatever page it is
    // pasted into.
    css: `.vl-chart-donut-fill { width: 76px; height: 76px; color: var(--loader-accent); overflow: visible; }
.vl-chart-donut-fill circle { fill: none; stroke: currentColor; }
.vl-chart-donut-fill-track { stroke-width: 11; opacity: .14; }
.vl-chart-donut-fill-pip { fill: currentColor; stroke: none; opacity: .35; animation: vl-chart-donut-fill-pulse calc(var(--loader-speed) * 2.4) ease-in-out infinite; }
.vl-chart-donut-fill-value {
  stroke-width: 11;
  stroke-linecap: round;
  stroke-dasharray: 176;
  stroke-dashoffset: 176;
  transform: rotate(-90deg);
  transform-origin: 38px 38px;
  animation: vl-chart-donut-fill-sweep calc(var(--loader-speed) * 2.4) ease-in-out infinite;
}
@keyframes vl-chart-donut-fill-sweep {
  0% { stroke-dashoffset: 176; }
  65%, 85% { stroke-dashoffset: 8; }
  100% { stroke-dashoffset: 176; }
}
@keyframes vl-chart-donut-fill-pulse {
  0%, 100% { opacity: .25; transform: scale(.85); }
  65% { opacity: .7; transform: scale(1); }
}`
  },
  {
    id: 'chart-area-rise',
    name: 'Area Chart Rise',
    category: 'Charts',
    tech: 'Inline SVG',
    description: 'The shaded area under a curve rises to meet the line as the series loads.',
    markup: `<svg class="vl-chart-area-rise" viewBox="0 0 116 76" aria-hidden="true" focusable="false">
      <polyline class="vl-chart-area-rise-axis" points="12,8 12,66 110,66" />
      <path class="vl-chart-area-rise-fill" d="M16 66L16 50Q32 30 48 42T80 22T106 30L106 66Z" />
      <path class="vl-chart-area-rise-line" d="M16 50Q32 30 48 42T80 22T106 30" />
    </svg>`,
    css: `.vl-chart-area-rise { width: 116px; height: 76px; color: var(--loader-accent); overflow: visible; }
    .vl-chart-area-rise polyline, .vl-chart-area-rise path { fill: none; stroke: currentColor; stroke-linecap: round; stroke-linejoin: round; }
    .vl-chart-area-rise-axis { stroke-width: 2; opacity: .35; }
    .vl-chart-area-rise-line { stroke-width: 2.6; opacity: .9; }
    .vl-chart-area-rise-fill { fill: currentColor; stroke: none; transform-box: fill-box; transform-origin: bottom center; animation: vl-chart-area-rise-flood calc(var(--loader-speed) * 2.2) ease-in-out infinite; }
    @keyframes vl-chart-area-rise-flood {
      0%, 100% { transform: scaleY(.05); opacity: .12; }
      50%, 78% { transform: scaleY(1); opacity: .3; }
    }`
  },
  {
    id: 'chart-scatter-plot',
    name: 'Scatter Plot Populate',
    category: 'Charts',
    tech: 'CSS',
    description: 'Data points pop into the plot area in waves until the full scatter is visible.',
    markup: `<div class="vl-chart-scatter-plot" aria-hidden="true">
      <span style="--vl-sp-x: 14%; --vl-sp-y: 68%"></span>
      <span style="--vl-sp-x: 28%; --vl-sp-y: 44%"></span>
      <span style="--vl-sp-x: 36%; --vl-sp-y: 74%"></span>
      <span style="--vl-sp-x: 48%; --vl-sp-y: 30%"></span>
      <span style="--vl-sp-x: 56%; --vl-sp-y: 56%"></span>
      <span style="--vl-sp-x: 68%; --vl-sp-y: 22%"></span>
      <span style="--vl-sp-x: 76%; --vl-sp-y: 48%"></span>
      <span style="--vl-sp-x: 88%; --vl-sp-y: 16%"></span>
    </div>`,
    css: `.vl-chart-scatter-plot {
  position: relative;
  width: 112px;
  height: 76px;
  border-left: 2px solid color-mix(in srgb, var(--loader-accent) 35%, transparent);
  border-bottom: 2px solid color-mix(in srgb, var(--loader-accent) 35%, transparent);
  box-sizing: border-box;
}
.vl-chart-scatter-plot span {
  position: absolute;
  left: var(--vl-sp-x);
  top: var(--vl-sp-y);
  width: 9px;
  height: 9px;
  margin: -4.5px 0 0 -4.5px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-chart-scatter-plot-pop calc(var(--loader-speed) * 2.4) ease-in-out infinite;
}
.vl-chart-scatter-plot span:nth-child(2) { animation-delay: calc(var(--loader-speed) * .1); }
.vl-chart-scatter-plot span:nth-child(3) { animation-delay: calc(var(--loader-speed) * .2); }
.vl-chart-scatter-plot span:nth-child(4) { animation-delay: calc(var(--loader-speed) * .3); }
.vl-chart-scatter-plot span:nth-child(5) { animation-delay: calc(var(--loader-speed) * .4); }
.vl-chart-scatter-plot span:nth-child(6) { animation-delay: calc(var(--loader-speed) * .5); }
.vl-chart-scatter-plot span:nth-child(7) { animation-delay: calc(var(--loader-speed) * .6); }
.vl-chart-scatter-plot span:nth-child(8) { animation-delay: calc(var(--loader-speed) * .7); }
@keyframes vl-chart-scatter-plot-pop {
  0%, 100% { transform: scale(0); opacity: 0; }
  8% { transform: scale(1.35); opacity: 1; }
  20%, 76% { transform: scale(1); opacity: .95; }
}`
  }
];
