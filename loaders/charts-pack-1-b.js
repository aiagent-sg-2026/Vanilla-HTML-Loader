export const chartsPack1LoadersB = [
  {
    id: 'chart-candlestick-stream',
    name: 'Candlestick Stream',
    category: 'Charts',
    tech: 'CSS',
    description: 'Price candles arrive one at a time with their wicks, as a market feed fills in.',
    markup: `<div class="vl-chart-candlestick-stream" aria-hidden="true">
      <span style="--vl-cs-h: 58%; --vl-cs-b: 34%; --vl-cs-o: 12%"></span>
      <span style="--vl-cs-h: 76%; --vl-cs-b: 46%; --vl-cs-o: 20%"></span>
      <span style="--vl-cs-h: 46%; --vl-cs-b: 26%; --vl-cs-o: 8%"></span>
      <span style="--vl-cs-h: 88%; --vl-cs-b: 52%; --vl-cs-o: 26%"></span>
      <span style="--vl-cs-h: 66%; --vl-cs-b: 38%; --vl-cs-o: 16%"></span>
      <span style="--vl-cs-h: 80%; --vl-cs-b: 44%; --vl-cs-o: 30%"></span>
    </div>`,
    css: `.vl-chart-candlestick-stream {
  display: flex;
  align-items: flex-end;
  gap: 9px;
  height: 76px;
  padding-bottom: 4px;
  border-bottom: 2px solid color-mix(in srgb, var(--loader-accent) 35%, transparent);
  box-sizing: border-box;
}
.vl-chart-candlestick-stream span {
  position: relative;
  width: 3px;
  height: var(--vl-cs-h);
  background: color-mix(in srgb, var(--loader-accent) 55%, transparent);
  transform-origin: bottom center;
  animation: vl-chart-candlestick-stream-arrive calc(var(--loader-speed) * 2.4) ease-out infinite;
}
.vl-chart-candlestick-stream span::after {
  content: '';
  position: absolute;
  left: -4px;
  right: -4px;
  bottom: var(--vl-cs-o);
  height: var(--vl-cs-b);
  border-radius: 2px;
  background: var(--loader-accent);
}
.vl-chart-candlestick-stream span:nth-child(2) { animation-delay: calc(var(--loader-speed) * .14); }
.vl-chart-candlestick-stream span:nth-child(3) { animation-delay: calc(var(--loader-speed) * .28); }
.vl-chart-candlestick-stream span:nth-child(4) { animation-delay: calc(var(--loader-speed) * .42); }
.vl-chart-candlestick-stream span:nth-child(5) { animation-delay: calc(var(--loader-speed) * .56); }
.vl-chart-candlestick-stream span:nth-child(6) { animation-delay: calc(var(--loader-speed) * .7); }
@keyframes vl-chart-candlestick-stream-arrive {
  0%, 100% { transform: scaleY(.05) translateY(0); opacity: 0; }
  14% { opacity: 1; }
  34%, 78% { transform: scaleY(1) translateY(0); opacity: 1; }
}`
  },
  {
    id: 'chart-gauge-needle',
    name: 'Gauge Needle',
    category: 'Charts',
    tech: 'Inline SVG',
    description: 'A needle swings across a graded arc and settles, as a KPI dial takes a reading.',
    markup: `<svg class="vl-chart-gauge-needle" viewBox="0 0 108 72" aria-hidden="true" focusable="false">
      <path class="vl-chart-gauge-needle-track" d="M14 60A40 40 0 0 1 94 60" />
      <path class="vl-chart-gauge-needle-value" d="M14 60A40 40 0 0 1 94 60" />
      <g class="vl-chart-gauge-needle-ticks">
        <line x1="18" y1="46" x2="24" y2="48" />
        <line x1="54" y1="20" x2="54" y2="27" />
        <line x1="90" y1="46" x2="84" y2="48" />
      </g>
      <g class="vl-chart-gauge-needle-hand">
        <line x1="54" y1="60" x2="54" y2="30" />
      </g>
      <circle class="vl-chart-gauge-needle-hub" cx="54" cy="60" r="4.5" />
    </svg>`,
    css: `.vl-chart-gauge-needle { width: 108px; height: 72px; color: var(--loader-accent); overflow: visible; }
.vl-chart-gauge-needle path, .vl-chart-gauge-needle line { fill: none; stroke: currentColor; stroke-linecap: round; }
.vl-chart-gauge-needle-track { stroke-width: 8; opacity: .14; }
.vl-chart-gauge-needle-ticks line { stroke-width: 2; opacity: .3; }
.vl-chart-gauge-needle-hub { fill: currentColor; stroke: none; }
.vl-chart-gauge-needle-hand line { stroke-width: 3; }
.vl-chart-gauge-needle-value { stroke-width: 8; stroke-dasharray: 126; stroke-dashoffset: 126; animation: vl-chart-gauge-needle-fill calc(var(--loader-speed) * 2.6) ease-in-out infinite; }
.vl-chart-gauge-needle-hand { transform-origin: 54px 60px; animation: vl-chart-gauge-needle-swing calc(var(--loader-speed) * 2.6) ease-in-out infinite; }
@keyframes vl-chart-gauge-needle-fill { 0%, 100% { stroke-dashoffset: 126; } 55%, 80% { stroke-dashoffset: 40; } }
@keyframes vl-chart-gauge-needle-swing { 0%, 100% { transform: rotate(-82deg); } 40% { transform: rotate(20deg); } 55%, 80% { transform: rotate(3deg); } }`
  },
  {
    id: 'chart-sparkline-pulse',
    name: 'Sparkline Pulse',
    category: 'Charts',
    tech: 'Inline SVG',
    description: 'A compact inline sparkline redraws itself, sized to sit beside a metric in a table.',
    markup: `<svg class="vl-chart-sparkline-pulse" viewBox="0 0 96 28" aria-hidden="true" focusable="false">
      <polyline class="vl-chart-sparkline-pulse-line" points="4,20 14,12 24,17 34,7 44,14 54,5 64,15 74,9 92,18" />
      <circle class="vl-chart-sparkline-pulse-dot" cx="92" cy="18" r="3" />
    </svg>`,
    css: `.vl-chart-sparkline-pulse { width: 96px; height: 28px; color: var(--loader-accent); overflow: visible; }
.vl-chart-sparkline-pulse polyline { fill: none; stroke: currentColor; stroke-width: 2.4; stroke-linecap: round; stroke-linejoin: round; }
.vl-chart-sparkline-pulse-line { stroke-dasharray: 120; stroke-dashoffset: 120; animation: vl-chart-sparkline-pulse-draw calc(var(--loader-speed) * 1.8) ease-in-out infinite; }
.vl-chart-sparkline-pulse-dot { fill: currentColor; stroke: none; transform-origin: 92px 18px; animation: vl-chart-sparkline-pulse-tip calc(var(--loader-speed) * 1.8) ease-in-out infinite; }
@keyframes vl-chart-sparkline-pulse-draw { 0% { stroke-dashoffset: 120; } 60%, 82% { stroke-dashoffset: 0; } 100% { stroke-dashoffset: 120; } }
@keyframes vl-chart-sparkline-pulse-tip { 0%, 55% { transform: scale(0); opacity: 0; } 66% { transform: scale(1.4); opacity: 1; } 82% { transform: scale(1); opacity: 1; } 100% { transform: scale(0); opacity: 0; } }`
  },
  {
    id: 'chart-heatmap-cells',
    name: 'Heatmap Cells',
    category: 'Charts',
    tech: 'CSS',
    description: 'Grid cells warm up to their intensity in a diagonal wave, as a heatmap resolves.',
    markup: `<div class="vl-chart-heatmap-cells" aria-hidden="true">
      <i></i><i></i><i></i><i></i><i></i><i></i>
      <i></i><i></i><i></i><i></i><i></i><i></i>
      <i></i><i></i><i></i><i></i><i></i><i></i>
      <i></i><i></i><i></i><i></i><i></i><i></i>
    </div>`,
    css: `.vl-chart-heatmap-cells {
  display: grid;
  grid-template-columns: repeat(6, 16px);
  grid-auto-rows: 16px;
  gap: 4px;
  width: 116px;
}
.vl-chart-heatmap-cells i {
  border-radius: 3px;
  background: var(--loader-accent);
  opacity: .1;
  animation: vl-chart-heatmap-cells-warm calc(var(--loader-speed) * 2.6) ease-in-out infinite;
}
.vl-chart-heatmap-cells i:nth-child(6n+2) { animation-delay: calc(var(--loader-speed) * .1); }
.vl-chart-heatmap-cells i:nth-child(6n+3) { animation-delay: calc(var(--loader-speed) * .2); }
.vl-chart-heatmap-cells i:nth-child(6n+4) { animation-delay: calc(var(--loader-speed) * .3); }
.vl-chart-heatmap-cells i:nth-child(6n+5) { animation-delay: calc(var(--loader-speed) * .4); }
.vl-chart-heatmap-cells i:nth-child(6n+6) { animation-delay: calc(var(--loader-speed) * .5); }
.vl-chart-heatmap-cells i:nth-child(n+7)  { animation-duration: calc(var(--loader-speed) * 2.8); }
.vl-chart-heatmap-cells i:nth-child(n+13) { animation-duration: calc(var(--loader-speed) * 3); }
.vl-chart-heatmap-cells i:nth-child(n+19) { animation-duration: calc(var(--loader-speed) * 3.2); }
@keyframes vl-chart-heatmap-cells-warm {
  0%, 100% { opacity: .08; }
  45% { opacity: .95; }
  70% { opacity: .4; }
}`
  },
  {
    id: 'chart-stacked-bars',
    name: 'Stacked Bars',
    category: 'Charts',
    tech: 'CSS',
    description: 'Segments stack up one layer at a time until each column reaches its total.',
    markup: `<div class="vl-chart-stacked-bars" aria-hidden="true">
      <span><i></i><i></i><i></i></span>
      <span><i></i><i></i><i></i></span>
      <span><i></i><i></i><i></i></span>
      <span><i></i><i></i><i></i></span>
    </div>`,
    css: `.vl-chart-stacked-bars {
  display: flex;
  align-items: flex-end;
  gap: 10px;
  height: 76px;
  padding-bottom: 4px;
  border-bottom: 2px solid color-mix(in srgb, var(--loader-accent) 35%, transparent);
  box-sizing: border-box;
}
.vl-chart-stacked-bars span { display: flex; flex-direction: column-reverse; gap: 2px; width: 18px; }
.vl-chart-stacked-bars i {
  display: block;
  border-radius: 2px;
  background: var(--loader-accent);
  transform-origin: bottom center;
  animation: vl-chart-stacked-bars-stack calc(var(--loader-speed) * 2.6) ease-in-out infinite;
}
.vl-chart-stacked-bars i:nth-child(1) { height: 20px; opacity: 1; }
.vl-chart-stacked-bars i:nth-child(2) { height: 16px; opacity: .68; animation-delay: calc(var(--loader-speed) * .18); }
.vl-chart-stacked-bars i:nth-child(3) { height: 12px; opacity: .38; animation-delay: calc(var(--loader-speed) * .36); }
.vl-chart-stacked-bars span:nth-child(2) i { animation-delay: calc(var(--loader-speed) * .12); }
.vl-chart-stacked-bars span:nth-child(2) i:nth-child(2) { animation-delay: calc(var(--loader-speed) * .3); }
.vl-chart-stacked-bars span:nth-child(2) i:nth-child(3) { animation-delay: calc(var(--loader-speed) * .48); }
.vl-chart-stacked-bars span:nth-child(3) i { animation-delay: calc(var(--loader-speed) * .24); }
.vl-chart-stacked-bars span:nth-child(3) i:nth-child(2) { animation-delay: calc(var(--loader-speed) * .42); }
.vl-chart-stacked-bars span:nth-child(3) i:nth-child(3) { animation-delay: calc(var(--loader-speed) * .6); }
.vl-chart-stacked-bars span:nth-child(4) i { animation-delay: calc(var(--loader-speed) * .36); }
.vl-chart-stacked-bars span:nth-child(4) i:nth-child(2) { animation-delay: calc(var(--loader-speed) * .54); }
.vl-chart-stacked-bars span:nth-child(4) i:nth-child(3) { animation-delay: calc(var(--loader-speed) * .72); }
@keyframes vl-chart-stacked-bars-stack {
  0%, 100% { transform: scaleY(0); }
  30%, 76% { transform: scaleY(1); }
}`
  }
];
