export const chartsPack2LoadersA = [
  {
    id: 'chart-waterfall-build',
    name: 'Waterfall Chart Build',
    category: 'Charts',
    tech: 'CSS',
    description: 'Cumulative bars animate upward then settle, then reset like a waterfall total rebuild.',
    markup: `<div class="vl-chart-waterfall-build" aria-hidden="true">
      <div class="vl-chart-waterfall-track">
        <span style="--vl-wf-height: 22%; --vl-wf-shift: 0"></span>
        <span style="--vl-wf-height: 31%; --vl-wf-shift: 8"></span>
        <span style="--vl-wf-height: 14%; --vl-wf-shift: 16"></span>
        <span style="--vl-wf-height: 38%; --vl-wf-shift: 24"></span>
        <span style="--vl-wf-height: 50%; --vl-wf-shift: 34"></span>
        <span style="--vl-wf-height: 26%; --vl-wf-shift: 44"></span>
        <span style="--vl-wf-height: 46%; --vl-wf-shift: 54"></span>
      </div>
      <span class="vl-chart-waterfall-baseline"></span>
    </div>`,
    css: `.vl-chart-waterfall-build {
  width: 128px;
  position: relative;
  height: 76px;
  padding: 0 4px 4px;
  box-sizing: border-box;
  border-left: 2px solid color-mix(in srgb, var(--loader-accent) 32%, transparent);
  border-bottom: 2px solid color-mix(in srgb, var(--loader-accent) 32%, transparent);
}
.vl-chart-waterfall-track {
  display: flex;
  align-items: flex-end;
  gap: 6px;
  height: 100%;
}
.vl-chart-waterfall-track span {
  width: 13px;
  border-radius: 3px 3px 1px 1px;
  background: linear-gradient(180deg, color-mix(in srgb, var(--loader-accent) 28%, transparent), var(--loader-accent));
  height: var(--vl-wf-height);
  animation: vl-chart-waterfall-rise calc(var(--loader-speed) * 2.35) ease-in-out infinite;
  animation-delay: calc((var(--vl-wf-shift) * 1ms) * 0.1);
}
.vl-chart-waterfall-track span:nth-child(2n) { animation-delay: calc(var(--loader-speed) * .12); }
.vl-chart-waterfall-track span:nth-child(3n) { animation-delay: calc(var(--loader-speed) * .24); }
.vl-chart-waterfall-baseline {
  display: block;
  position: absolute;
  left: -2px;
  right: -2px;
  bottom: 2px;
  height: 3px;
  opacity: .16;
  background: color-mix(in srgb, var(--loader-accent) 50%, transparent);
}
@keyframes vl-chart-waterfall-rise {
  0% { transform: translateY(20px) scaleY(0.2); opacity: .25; }
  28%, 72% { transform: translateY(0) scaleY(1); opacity: .96; }
  100% { transform: translateY(20px) scaleY(0.2); opacity: .25; }
}`
  },
  {
    id: 'chart-radar-scan',
    name: 'Radar Chart Scan',
    category: 'Charts',
    tech: 'Inline SVG',
    description: 'Concentric radar rings and radial points reveal a business dimension scan.',
    markup: `<svg class="vl-chart-radar-scan" viewBox="0 0 100 100" aria-hidden="true" focusable="false">
      <circle class="vl-chart-radar-ring" cx="50" cy="50" r="11" />
      <circle class="vl-chart-radar-ring" cx="50" cy="50" r="23" />
      <circle class="vl-chart-radar-ring" cx="50" cy="50" r="35" />
      <line x1="50" y1="15" x2="50" y2="85" />
      <line x1="15" y1="50" x2="85" y2="50" />
      <line x1="22" y1="22" x2="78" y2="78" />
      <line x1="22" y1="78" x2="78" y2="22" />
      <polygon class="vl-chart-radar-region" points="50,20 61,30 72,27 83,43 73,58 69,74 50,83 31,74 28,56 17,44 26,29 39,24" />
      <circle class="vl-chart-radar-dot" cx="50" cy="20" r="2.4" />
      <circle class="vl-chart-radar-dot" cx="73" cy="74" r="2.4" />
      <circle class="vl-chart-radar-dot" cx="28" cy="56" r="2.4" />
    </svg>`,
    css: `.vl-chart-radar-scan { width: 100px; height: 100px; color: var(--loader-accent); overflow: visible; }
.vl-chart-radar-scan line,
.vl-chart-radar-scan circle { fill: none; stroke: currentColor; }
.vl-chart-radar-scan line { opacity: .22; stroke-width: 1; }
.vl-chart-radar-scan .vl-chart-radar-ring:nth-child(1) { opacity: .14; stroke-width: 8; }
.vl-chart-radar-scan .vl-chart-radar-ring:nth-child(2) { opacity: .12; stroke-width: 8; }
.vl-chart-radar-scan .vl-chart-radar-ring:nth-child(3) { opacity: .12; stroke-width: 8; }
.vl-chart-radar-region {
  fill: color-mix(in srgb, var(--loader-accent) 34%, transparent);
  stroke: currentColor;
  stroke-width: 1;
  transform-origin: 50px 50px;
  animation: vl-chart-radar-sweep calc(var(--loader-speed) * 3.1) linear infinite;
}
.vl-chart-radar-dot {
  fill: currentColor;
  stroke: none;
  animation: vl-chart-radar-dot calc(var(--loader-speed) * 3.1) ease-in-out infinite;
}
.vl-chart-radar-dot:nth-of-type(2) { animation-delay: calc(var(--loader-speed) * .7); }
.vl-chart-radar-dot:nth-of-type(3) { animation-delay: calc(var(--loader-speed) * 1.4); }
@keyframes vl-chart-radar-sweep { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
@keyframes vl-chart-radar-dot { 0%, 100% { opacity: .35; transform: scale(0.6); } 45%, 70% { opacity: 1; transform: scale(1.2); } }`
  },
  {
    id: 'chart-funnel-assemble',
    name: 'Funnel Segment Assemble',
    category: 'Charts',
    tech: 'CSS',
    description: 'Segments slide in and lock into a funnel, showing conversion stages.',
    markup: `<div class="vl-chart-funnel-assemble" aria-hidden="true">
      <span style="--vl-funnel-w: 100%; --vl-funnel-d: 0"></span>
      <span style="--vl-funnel-w: 78%; --vl-funnel-d: 1"></span>
      <span style="--vl-funnel-w: 63%; --vl-funnel-d: 2"></span>
      <span style="--vl-funnel-w: 47%; --vl-funnel-d: 3"></span>
      <span style="--vl-funnel-w: 32%; --vl-funnel-d: 4"></span>
      <span style="--vl-funnel-w: 22%; --vl-funnel-d: 5"></span>
    </div>`,
    css: `.vl-chart-funnel-assemble {
  width: 120px;
  height: 76px;
  display: grid;
  align-content: center;
  gap: 5px;
}
.vl-chart-funnel-assemble span {
  justify-self: center;
  width: var(--vl-funnel-w);
  min-height: 10px;
  border-radius: 4px;
  border: 2px solid color-mix(in srgb, var(--loader-accent) 42%, transparent);
  background: color-mix(in srgb, var(--loader-accent) 18%, transparent);
  transform-origin: center;
  animation: vl-chart-funnel-slide calc(var(--loader-speed) * 2.5) ease-in-out infinite;
  animation-delay: calc(var(--loader-speed) * var(--vl-funnel-d) * .18);
}
@keyframes vl-chart-funnel-slide {
  0% { opacity: 0; transform: translateX(-42px) scaleX(.6); }
  22%, 78% { opacity: 1; transform: translateX(0) scaleX(1); }
  100% { opacity: 0; transform: translateX(42px) scaleX(.65); }
}`
  },
  {
    id: 'chart-treemap-tile',
    name: 'Treemap Tile Populate',
    category: 'Charts',
    tech: 'CSS',
    description: 'Rectangular tiles populate one-by-one, mimicking a treemap filling by weight.',
    markup: `<div class="vl-chart-treemap-tile" aria-hidden="true">
      <i class="a"></i><i class="b"></i><i class="c"></i><i class="d"></i><i class="e"></i>
    </div>`,
    css: `.vl-chart-treemap-tile {
  width: 118px;
  height: 76px;
  display: grid;
  grid-template-columns: 44px 26px 24px;
  grid-template-rows: 34px 34px;
  gap: 4px;
}
.vl-chart-treemap-tile i {
  border-radius: 4px;
  background: color-mix(in srgb, var(--loader-accent) 60%, transparent);
  opacity: .22;
  animation: vl-chart-treemap-pop calc(var(--loader-speed) * 2.6) ease-in-out infinite;
}
.vl-chart-treemap-tile .a { grid-column: 1 / 3; }
.vl-chart-treemap-tile .b { grid-column: 3; grid-row: 1 / 3; }
.vl-chart-treemap-tile .c { grid-column: 1; }
.vl-chart-treemap-tile .d { grid-column: 2; }
.vl-chart-treemap-tile .e { grid-column: 1 / 3; }
.vl-chart-treemap-tile .a { animation-delay: calc(var(--loader-speed) * .02); }
.vl-chart-treemap-tile .b { animation-delay: calc(var(--loader-speed) * .19); }
.vl-chart-treemap-tile .c { animation-delay: calc(var(--loader-speed) * .35); }
.vl-chart-treemap-tile .d { animation-delay: calc(var(--loader-speed) * .42); }
.vl-chart-treemap-tile .e { animation-delay: calc(var(--loader-speed) * .58); }
@keyframes vl-chart-treemap-pop {
  0% { opacity: .14; transform: scale(0.82); }
  16%, 77% { opacity: .95; transform: scale(1); }
  100% { opacity: .14; transform: scale(0.82); }
}`
  },
  {
    id: 'chart-sankey-flow',
    name: 'Sankey Flow',
    category: 'Charts',
    tech: 'Inline SVG',
    description: 'Flow ribbons move between nodes to reflect source-to-target conversion weights.',
    markup: `<svg class="vl-chart-sankey-flow" viewBox="0 0 132 76" aria-hidden="true" focusable="false">
      <g fill="none" stroke="currentColor" stroke-linecap="round">
        <path class="vl-chart-sankey-node" d="M10 18h38" />
        <path class="vl-chart-sankey-node" d="M84 18h38" />
        <path class="vl-chart-sankey-node" d="M10 58h38" />
        <path class="vl-chart-sankey-node" d="M84 58h38" />
      </g>
      <path class="vl-chart-sankey-ribbon" d="M48 18C70 18 62 58 84 58" />
      <path class="vl-chart-sankey-ribbon" d="M48 18C62 25 66 58 84 58" />
      <path class="vl-chart-sankey-ribbon" d="M48 58C65 46 70 18 84 18" />
      <circle class="vl-chart-sankey-dot" cx="12" cy="18" r="3" />
      <circle class="vl-chart-sankey-dot" cx="12" cy="58" r="3" />
      <circle class="vl-chart-sankey-dot" cx="120" cy="58" r="3" />
      <circle class="vl-chart-sankey-dot" cx="120" cy="18" r="3" />
    </svg>`,
    css: `.vl-chart-sankey-flow { width: 132px; height: 76px; color: var(--loader-accent); overflow: visible; }
.vl-chart-sankey-flow path { fill: none; stroke: currentColor; }
.vl-chart-sankey-flow .vl-chart-sankey-node {
  stroke-width: 2;
  stroke: color-mix(in srgb, var(--loader-accent) 35%, transparent);
}
.vl-chart-sankey-flow .vl-chart-sankey-ribbon {
  stroke-width: 8;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-dasharray: 130;
  stroke-dashoffset: 130;
  animation: vl-chart-sankey-flow-run calc(var(--loader-speed) * 2.8) ease-in-out infinite;
}
.vl-chart-sankey-flow .vl-chart-sankey-ribbon:nth-child(7) { animation-delay: calc(var(--loader-speed) * .17); }
.vl-chart-sankey-flow .vl-chart-sankey-ribbon:nth-child(8) { animation-delay: calc(var(--loader-speed) * .34); }
.vl-chart-sankey-flow .vl-chart-sankey-dot {
  fill: currentColor;
  stroke: none;
  animation: vl-chart-sankey-dot calc(var(--loader-speed) * 2.8) ease-in-out infinite;
}
.vl-chart-sankey-flow .vl-chart-sankey-dot:nth-of-type(2) { animation-delay: .15s; }
.vl-chart-sankey-flow .vl-chart-sankey-dot:nth-of-type(3) { animation-delay: .3s; }
.vl-chart-sankey-flow .vl-chart-sankey-dot:nth-of-type(4) { animation-delay: .45s; }
@keyframes vl-chart-sankey-flow-run { 0% { stroke-dashoffset: 130; opacity: .2; } 48%, 76% { opacity: .95; stroke-dashoffset: 0; } 100% { stroke-dashoffset: -130; opacity: .2; } }
@keyframes vl-chart-sankey-dot { 0%, 100% { opacity: .2; transform: scale(.7); } 55%, 80% { opacity: 1; transform: scale(1.2); } }`
  }
];
