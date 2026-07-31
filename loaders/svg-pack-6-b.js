export const svgPack6LoadersB = [
  {
    id: 'svg-maze-pulse',
    name: 'SVG Maze Pulse',
    category: 'SVG',
    tech: 'Inline SVG',
    description: 'A bright pulse traces a compact angular maze from the outer gate toward its center.',
    markup: `<svg class="vl-svg-maze-pulse" viewBox="0 0 96 72" aria-hidden="true" focusable="false">
      <path class="vl-svg-maze-ghost" d="M12 14H82V58H22V24H70V48H34V34H58V38H46" />
      <path class="vl-svg-maze-live" d="M12 14H82V58H22V24H70V48H34V34H58V38H46" />
      <circle cx="46" cy="38" r="4" />
    </svg>`,
    css: `.vl-svg-maze-pulse { width: 86px; height: 66px; color: var(--loader-accent); overflow: visible; }
    .vl-svg-maze-pulse path { fill: none; stroke: currentColor; stroke-linecap: round; stroke-linejoin: round; }
    .vl-svg-maze-ghost { stroke-width: 3; opacity: .16; }
    .vl-svg-maze-live { stroke-width: 4; stroke-dasharray: 24 260; animation: vl-svg-maze-run calc(var(--loader-speed) * 2.2) linear infinite; }
    .vl-svg-maze-pulse circle { fill: currentColor; transform-origin: 46px 38px; animation: vl-svg-maze-core calc(var(--loader-speed) * 1.1) ease-in-out infinite; }
    @keyframes vl-svg-maze-run { to { stroke-dashoffset: -284; } }
    @keyframes vl-svg-maze-core { 50% { transform: scale(1.6); opacity: .42; } }`
  },
  {
    id: 'svg-flow-splitter',
    name: 'SVG Flow Splitter',
    category: 'SVG',
    tech: 'Inline SVG',
    description: 'One incoming flow divides into three illuminated branches with staggered moving packets.',
    markup: `<svg class="vl-svg-flow-splitter" viewBox="0 0 96 72" aria-hidden="true" focusable="false">
      <path class="vl-svg-splitter-base" d="M10 36H42M42 36C55 36 57 14 76 14H86M42 36H86M42 36C55 36 57 58 76 58H86" />
      <path class="vl-svg-splitter-flow" d="M10 36H42M42 36C55 36 57 14 76 14H86M42 36H86M42 36C55 36 57 58 76 58H86" />
      <circle cx="42" cy="36" r="4" />
      <circle cx="86" cy="14" r="3" />
      <circle cx="86" cy="36" r="3" />
      <circle cx="86" cy="58" r="3" />
    </svg>`,
    css: `.vl-svg-flow-splitter { width: 86px; height: 66px; color: var(--loader-accent); overflow: visible; }
    .vl-svg-flow-splitter path { fill: none; stroke: currentColor; stroke-linecap: round; stroke-linejoin: round; }
    .vl-svg-splitter-base { stroke-width: 3; opacity: .16; }
    .vl-svg-splitter-flow { stroke-width: 4; stroke-dasharray: 14 132; animation: vl-svg-splitter-run calc(var(--loader-speed) * 1.85) linear infinite; }
    .vl-svg-flow-splitter circle { fill: currentColor; opacity: .7; animation: vl-svg-splitter-node calc(var(--loader-speed) * 1.4) ease-in-out infinite; }
    .vl-svg-flow-splitter circle:nth-of-type(2) { animation-delay: calc(var(--loader-speed) * -.28); }
    .vl-svg-flow-splitter circle:nth-of-type(3) { animation-delay: calc(var(--loader-speed) * -.56); }
    .vl-svg-flow-splitter circle:nth-of-type(4) { animation-delay: calc(var(--loader-speed) * -.84); }
    @keyframes vl-svg-splitter-run { to { stroke-dashoffset: -146; } }
    @keyframes vl-svg-splitter-node { 50% { opacity: 1; } }`
  },
  {
    id: 'svg-chevron-stream',
    name: 'SVG Chevron Stream',
    category: 'SVG',
    tech: 'Inline SVG',
    description: 'Five clean chevrons advance in a repeating stream with staggered opacity and spacing.',
    markup: `<svg class="vl-svg-chevron-stream" viewBox="0 0 96 72" aria-hidden="true" focusable="false">
      <polyline points="8,24 22,36 8,48" />
      <polyline points="24,24 38,36 24,48" />
      <polyline points="40,24 54,36 40,48" />
      <polyline points="56,24 70,36 56,48" />
      <polyline points="72,24 86,36 72,48" />
    </svg>`,
    css: `.vl-svg-chevron-stream { width: 86px; height: 66px; color: var(--loader-accent); overflow: visible; }
    .vl-svg-chevron-stream polyline { fill: none; stroke: currentColor; stroke-width: 4; stroke-linecap: round; stroke-linejoin: round; transform-box: fill-box; transform-origin: center; animation: vl-svg-chevron-move calc(var(--loader-speed) * 1.45) ease-in-out infinite; }
    .vl-svg-chevron-stream polyline:nth-child(2) { animation-delay: calc(var(--loader-speed) * -.18); opacity: .82; }
    .vl-svg-chevron-stream polyline:nth-child(3) { animation-delay: calc(var(--loader-speed) * -.36); opacity: .66; }
    .vl-svg-chevron-stream polyline:nth-child(4) { animation-delay: calc(var(--loader-speed) * -.54); opacity: .5; }
    .vl-svg-chevron-stream polyline:nth-child(5) { animation-delay: calc(var(--loader-speed) * -.72); opacity: .34; }
    @keyframes vl-svg-chevron-move { 0%, 100% { transform: translateX(-3px); opacity: .25; } 50% { transform: translateX(3px); opacity: 1; } }`
  },
  {
    id: 'svg-crosshair-lock',
    name: 'SVG Crosshair Lock',
    category: 'SVG',
    tech: 'Inline SVG',
    description: 'Four targeting brackets converge on a pulsing center point before releasing outward again.',
    markup: `<svg class="vl-svg-crosshair-lock" viewBox="0 0 96 72" aria-hidden="true" focusable="false">
      <path class="vl-svg-lock-a" d="M14 28V14H28" />
      <path class="vl-svg-lock-b" d="M68 14H82V28" />
      <path class="vl-svg-lock-c" d="M82 44V58H68" />
      <path class="vl-svg-lock-d" d="M28 58H14V44" />
      <circle cx="48" cy="36" r="5" />
      <line x1="48" y1="22" x2="48" y2="50" />
      <line x1="34" y1="36" x2="62" y2="36" />
    </svg>`,
    css: `.vl-svg-crosshair-lock { width: 86px; height: 66px; color: var(--loader-accent); overflow: visible; }
    .vl-svg-crosshair-lock path, .vl-svg-crosshair-lock line { fill: none; stroke: currentColor; stroke-width: 3; stroke-linecap: round; stroke-linejoin: round; }
    .vl-svg-crosshair-lock path { transform-box: fill-box; transform-origin: center; animation: vl-svg-lock-converge calc(var(--loader-speed) * 1.65) ease-in-out infinite; }
    .vl-svg-crosshair-lock .vl-svg-lock-a { --tx: 6px; --ty: 6px; }
    .vl-svg-crosshair-lock .vl-svg-lock-b { --tx: -6px; --ty: 6px; }
    .vl-svg-crosshair-lock .vl-svg-lock-c { --tx: -6px; --ty: -6px; }
    .vl-svg-crosshair-lock .vl-svg-lock-d { --tx: 6px; --ty: -6px; }
    .vl-svg-crosshair-lock circle { fill: currentColor; transform-origin: 48px 36px; animation: vl-svg-lock-core calc(var(--loader-speed) * 1.65) ease-in-out infinite; }
    .vl-svg-crosshair-lock line { opacity: .26; }
    @keyframes vl-svg-lock-converge { 50% { transform: translate(var(--tx), var(--ty)); opacity: .55; } }
    @keyframes vl-svg-lock-core { 50% { transform: scale(1.65); opacity: .35; } }`
  },
  {
    id: 'svg-node-exchange',
    name: 'SVG Node Exchange',
    category: 'SVG',
    tech: 'Inline SVG',
    description: 'Two endpoint nodes exchange opposing packet streams along mirrored curved connections.',
    markup: `<svg class="vl-svg-node-exchange" viewBox="0 0 96 72" aria-hidden="true" focusable="false">
      <path class="vl-svg-node-exchange-base" d="M20 36C32 12 64 12 76 36M20 36C32 60 64 60 76 36" />
      <path class="vl-svg-node-exchange-up" d="M20 36C32 12 64 12 76 36" />
      <path class="vl-svg-node-exchange-down" d="M76 36C64 60 32 60 20 36" />
      <circle cx="20" cy="36" r="7" />
      <circle cx="76" cy="36" r="7" />
      <circle class="vl-svg-node-exchange-core" cx="48" cy="36" r="3.5" />
    </svg>`,
    css: `.vl-svg-node-exchange { width: 86px; height: 66px; color: var(--loader-accent); overflow: visible; }
    .vl-svg-node-exchange path { fill: none; stroke: currentColor; stroke-linecap: round; }
    .vl-svg-node-exchange-base { stroke-width: 2.5; opacity: .16; }
    .vl-svg-node-exchange-up, .vl-svg-node-exchange-down { stroke-width: 4; stroke-dasharray: 12 92; animation: vl-svg-node-exchange-run calc(var(--loader-speed) * 1.7) linear infinite; }
    .vl-svg-node-exchange-down { animation-direction: reverse; opacity: .65; }
    .vl-svg-node-exchange circle { fill: currentColor; opacity: .78; }
    .vl-svg-node-exchange circle:not(.vl-svg-node-exchange-core) { animation: vl-svg-node-exchange-node calc(var(--loader-speed) * 1.7) ease-in-out infinite; }
    .vl-svg-node-exchange circle:nth-of-type(2) { animation-delay: calc(var(--loader-speed) * -.85); }
    .vl-svg-node-exchange-core { transform-origin: 48px 36px; animation: vl-svg-node-exchange-core calc(var(--loader-speed) * .85) ease-in-out infinite; }
    @keyframes vl-svg-node-exchange-run { to { stroke-dashoffset: -104; } }
    @keyframes vl-svg-node-exchange-node { 50% { opacity: .34; } }
    @keyframes vl-svg-node-exchange-core { 50% { transform: scale(1.65); opacity: .35; } }`
  }
];
