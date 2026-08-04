export const chartsPack2LoadersB = [
  {
    id: 'chart-histogram-columns',
    name: 'Histogram Populate',
    category: 'Charts',
    tech: 'CSS',
    description: 'Bins fill in sequence with measured heights and slight easing for distribution preview.',
    markup: `<div class="vl-chart-histogram-columns" aria-hidden="true">
      <span style="--vl-hist-h: 44%; --vl-hist-d: 0"></span>
      <span style="--vl-hist-h: 36%; --vl-hist-d: 1"></span>
      <span style="--vl-hist-h: 52%; --vl-hist-d: 2"></span>
      <span style="--vl-hist-h: 64%; --vl-hist-d: 3"></span>
      <span style="--vl-hist-h: 50%; --vl-hist-d: 4"></span>
      <span style="--vl-hist-h: 34%; --vl-hist-d: 5"></span>
      <span style="--vl-hist-h: 68%; --vl-hist-d: 6"></span>
      <span style="--vl-hist-h: 24%; --vl-hist-d: 7"></span>
      <span style="--vl-hist-h: 58%; --vl-hist-d: 8"></span>
    </div>`,
    css: `.vl-chart-histogram-columns {
  width: 120px;
  height: 76px;
  display: flex;
  align-items: flex-end;
  gap: 5px;
  border-left: 2px solid color-mix(in srgb, var(--loader-accent) 35%, transparent);
  border-bottom: 2px solid color-mix(in srgb, var(--loader-accent) 35%, transparent);
  padding: 0 3px 4px 0;
  box-sizing: border-box;
}
.vl-chart-histogram-columns span {
  width: 10px;
  border-radius: 3px 3px 0 0;
  align-self: flex-end;
  height: var(--vl-hist-h);
  background: color-mix(in srgb, var(--loader-accent) 76%, transparent);
  transform-origin: bottom;
  animation: vl-chart-histogram-rise calc(var(--loader-speed) * 2.2) cubic-bezier(.18,.8,.2,1) infinite;
  animation-delay: calc(var(--loader-speed) * var(--vl-hist-d) * 0.11);
}
@keyframes vl-chart-histogram-rise {
  0% { transform: scaleY(.1); opacity: .25; }
  34%, 74% { transform: scaleY(1); opacity: .95; }
  100% { transform: scaleY(.1); opacity: .22; }
}`
  },
  {
    id: 'chart-box-plot',
    name: 'Box Plot Resolve',
    category: 'Charts',
    tech: 'Inline SVG',
    description: 'A box-and-whisker plot expands and contracts through data distribution cycles.',
    markup: `<svg class="vl-chart-box-plot" viewBox="0 0 116 76" aria-hidden="true" focusable="false">
      <line x1="20" y1="8" x2="20" y2="68" />
      <line x1="96" y1="8" x2="96" y2="68" />
      <rect class="vl-chart-box-plot-box" x="32" y="20" width="52" height="34" rx="3" />
      <line class="vl-chart-box-plot-median" x1="32" y1="37" x2="84" y2="37" />
      <line class="vl-chart-box-plot-cap" x1="20" y1="21" x2="32" y2="21" />
      <line class="vl-chart-box-plot-cap" x1="84" y1="55" x2="96" y2="55" />
      <line class="vl-chart-box-plot-cap" x1="20" y1="57" x2="32" y2="57" />
      <line class="vl-chart-box-plot-cap" x1="84" y1="21" x2="96" y2="21" />
    </svg>`,
    css: `.vl-chart-box-plot { width: 116px; height: 76px; color: var(--loader-accent); }
.vl-chart-box-plot line, .vl-chart-box-plot rect { fill: none; stroke: currentColor; stroke-linecap: round; }
.vl-chart-box-plot line { stroke-width: 2; opacity: .6; }
.vl-chart-box-plot-box {
  stroke-width: 3;
  animation: vl-chart-box-plot-box calc(var(--loader-speed) * 2.5) ease-in-out infinite;
}
.vl-chart-box-plot-median {
  stroke-width: 4;
  animation: vl-chart-box-plot-median calc(var(--loader-speed) * 2.5) ease-in-out infinite;
}
.vl-chart-box-plot-cap { opacity: .5; animation: vl-chart-box-plot-whisker calc(var(--loader-speed) * 2.5) ease-in-out infinite; }
@keyframes vl-chart-box-plot-box {
  0%, 100% { transform: scaleY(.45); transform-origin: center; opacity: .35; }
  50%, 72% { transform: scaleY(1); opacity: .95; }
}
@keyframes vl-chart-box-plot-median { 0%, 100% { transform: scaleX(.75); opacity: .4; } 45%, 75% { transform: scaleX(1); opacity: 1; } }
@keyframes vl-chart-box-plot-whisker { 0%, 100% { opacity: .2; } 45%, 75% { opacity: .8; } }`
  },
  {
    id: 'chart-bubble-population',
    name: 'Bubble Chart Inflate',
    category: 'Charts',
    tech: 'CSS',
    description: 'Bubbles expand according to concentration tiers and pulse in waves.',
    markup: `<div class="vl-chart-bubble-chart" aria-hidden="true">
      <span style="--vl-bub-x: 20%; --vl-bub-y: 36%; --vl-bub-r: 10px; --vl-bub-delay: 0"></span>
      <span style="--vl-bub-x: 43%; --vl-bub-y: 14%; --vl-bub-r: 7px; --vl-bub-delay: 1"></span>
      <span style="--vl-bub-x: 62%; --vl-bub-y: 58%; --vl-bub-r: 12px; --vl-bub-delay: 2"></span>
      <span style="--vl-bub-x: 80%; --vl-bub-y: 31%; --vl-bub-r: 8px; --vl-bub-delay: 3"></span>
      <span style="--vl-bub-x: 52%; --vl-bub-y: 40%; --vl-bub-r: 16px; --vl-bub-delay: 4"></span>
      <span style="--vl-bub-x: 35%; --vl-bub-y: 62%; --vl-bub-r: 9px; --vl-bub-delay: 5"></span>
      <span style="--vl-bub-x: 70%; --vl-bub-y: 16%; --vl-bub-r: 9px; --vl-bub-delay: 6"></span>
      <span style="--vl-bub-x: 89%; --vl-bub-y: 68%; --vl-bub-r: 7px; --vl-bub-delay: 7"></span>
    </div>`,
    css: `.vl-chart-bubble-chart {
  width: 116px;
  height: 76px;
  position: relative;
  border-left: 2px solid color-mix(in srgb, var(--loader-accent) 33%, transparent);
  border-bottom: 2px solid color-mix(in srgb, var(--loader-accent) 33%, transparent);
  overflow: hidden;
}
.vl-chart-bubble-chart span {
  position: absolute;
  left: var(--vl-bub-x);
  top: var(--vl-bub-y);
  width: var(--vl-bub-r);
  height: var(--vl-bub-r);
  margin: calc(var(--vl-bub-r) / -2) 0 0 calc(var(--vl-bub-r) / -2);
  border-radius: 50%;
  background: color-mix(in srgb, var(--loader-accent) 78%, transparent);
  animation: vl-chart-bubble-pop calc(var(--loader-speed) * 2.8) ease-in-out infinite;
  animation-delay: calc(var(--loader-speed) * 0.15 * var(--vl-bub-delay));
}
@keyframes vl-chart-bubble-pop {
  0%, 100% { opacity: .25; transform: scale(.35); }
  38%, 68% { opacity: 1; transform: scale(1); }
}`
  },
  {
    id: 'chart-gantt-load',
    name: 'Gantt Timeline Load',
    category: 'Charts',
    tech: 'CSS',
    description: 'Rows and milestones advance across a timeline to simulate project scheduling.',
    markup: `<div class="vl-chart-gantt-timeline" aria-hidden="true">
      <span style="--vl-gantt-x: 5%; --vl-gantt-l: 46%; --vl-gantt-d: 0"></span>
      <span style="--vl-gantt-x: 14%; --vl-gantt-l: 34%; --vl-gantt-d: 1"></span>
      <span style="--vl-gantt-x: 34%; --vl-gantt-l: 56%; --vl-gantt-d: 2"></span>
      <span style="--vl-gantt-x: 58%; --vl-gantt-l: 28%; --vl-gantt-d: 3"></span>
      <span style="--vl-gantt-x: 22%; --vl-gantt-l: 40%; --vl-gantt-d: 4"></span>
    </div>`,
    css: `.vl-chart-gantt-timeline {
  width: 120px;
  height: 76px;
  padding: 2px 0;
  position: relative;
  display: grid;
  align-content: center;
  gap: 7px;
}
.vl-chart-gantt-timeline span {
  position: relative;
  left: var(--vl-gantt-x);
  width: var(--vl-gantt-l);
  height: 10px;
  border-radius: 6px;
  background: color-mix(in srgb, var(--loader-accent) 75%, transparent);
  box-shadow: 0 0 0 2px color-mix(in srgb, var(--loader-accent) 16%, transparent);
  transform-origin: left center;
  animation: vl-chart-gantt-run calc(var(--loader-speed) * 2.6) ease-in-out infinite;
  animation-delay: calc(var(--loader-speed) * var(--vl-gantt-d) * 0.16);
}
.vl-chart-gantt-timeline span::after {
  content: '';
  position: absolute;
  right: 0;
  top: -3px;
  width: 10px;
  height: 16px;
  border-radius: 999px;
  background: var(--loader-accent);
  animation: vl-chart-gantt-marker calc(var(--loader-speed) * 2.6) ease-in-out infinite;
}
@keyframes vl-chart-gantt-run {
  0% { opacity: .22; transform: scaleX(.62); }
  34%, 74% { opacity: .95; transform: scaleX(1); }
  100% { opacity: .22; transform: scaleX(.62); }
}
@keyframes vl-chart-gantt-marker {
  0%, 100% { transform: translateX(-2px) scale(0.6); opacity: .35; }
  30%, 68% { transform: translateX(0) scale(1); opacity: 1; }
}`
  },
  {
    id: 'chart-pie-segment-assemble',
    name: 'Pie Segment Assemble',
    category: 'Charts',
    tech: 'CSS',
    description: 'Pie sectors appear and rotate into place, one segment at a time.',
    markup: `<div class="vl-chart-pie-assemble" aria-hidden="true">
      <span class="s1"></span>
      <span class="s2"></span>
      <span class="s3"></span>
      <span class="s4"></span>
      <span class="s5"></span>
      <span class="center"></span>
    </div>`,
    css: `.vl-chart-pie-assemble {
  width: 76px;
  height: 76px;
  position: relative;
  border-radius: 50%;
  border: 8px solid transparent;
  --start: color-mix(in srgb, var(--loader-accent) 38%, transparent);
  --accent: var(--loader-accent);
}
.vl-chart-pie-assemble span {
  position: absolute;
  inset: 4px;
  border-radius: 50%;
  border: 7px solid transparent;
  border-left-color: var(--loader-accent);
  border-top-color: var(--loader-accent);
  opacity: .15;
  transform-origin: 50% 50%;
  animation: vl-chart-pie-segment calc(var(--loader-speed) * 2.6) linear infinite;
}
.vl-chart-pie-assemble .s1 { clip-path: inset(0 50% 50% 0); animation-delay: calc(var(--loader-speed) * 0); }
.vl-chart-pie-assemble .s2 { clip-path: inset(0 0 50% 50%); animation-delay: calc(var(--loader-speed) * .2); }
.vl-chart-pie-assemble .s3 { clip-path: inset(50% 0 0 50%); animation-delay: calc(var(--loader-speed) * .4); }
.vl-chart-pie-assemble .s4 { clip-path: inset(50% 50% 0 0); animation-delay: calc(var(--loader-speed) * .6); }
.vl-chart-pie-assemble .s5 { border-style: solid; inset: 14px; border-width: 13px; clip-path: polygon(50% 50%, 50% 0%, 100% 0, 100% 50%, 50% 50%); border-left-color: color-mix(in srgb, var(--loader-accent) 48%, transparent); border-top-color: color-mix(in srgb, var(--loader-accent) 74%, transparent); animation-delay: calc(var(--loader-speed) * .8); }
.vl-chart-pie-assemble .center { inset: 26px; border: none; background: var(--surface); opacity: .85; }
@keyframes vl-chart-pie-segment {
  0% { transform: rotate(0deg) scale(0.85); opacity: .12; }
  18%, 72% { opacity: .86; transform: rotate(360deg) scale(1); }
  100% { opacity: .12; transform: rotate(1080deg) scale(.85); }
}`
  }
];
