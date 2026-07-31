export const svgPack8LoadersB = [
  {
    id: 'svg-turnstile-gate',
    name: 'SVG Turnstile Gate',
    category: 'SVG',
    tech: 'Inline SVG',
    description: 'Three turnstile arms rotate a quarter turn at a time as each entry is cleared.',
    markup: `<svg class="vl-svg-turnstile-gate" viewBox="0 0 96 72" aria-hidden="true" focusable="false">
      <circle class="vl-svg-turnstile-gate-post" cx="48" cy="36" r="22" />
      <g class="vl-svg-turnstile-gate-arms">
        <line x1="48" y1="36" x2="48" y2="12" />
        <line x1="48" y1="36" x2="69" y2="48" />
        <line x1="48" y1="36" x2="27" y2="48" />
      </g>
      <circle class="vl-svg-turnstile-gate-hub" cx="48" cy="36" r="5" />
    </svg>`,
    css: `.vl-svg-turnstile-gate { width: 86px; height: 66px; color: var(--loader-accent); overflow: visible; }
    .vl-svg-turnstile-gate circle, .vl-svg-turnstile-gate line { fill: none; stroke: currentColor; stroke-linecap: round; }
    .vl-svg-turnstile-gate-post { stroke-width: 2.2; opacity: .22; stroke-dasharray: 8 10; }
    .vl-svg-turnstile-gate-arms { transform-origin: 48px 36px; animation: vl-svg-turnstile-gate-step calc(var(--loader-speed) * 2.4) cubic-bezier(.7, 0, .3, 1) infinite; }
    .vl-svg-turnstile-gate-arms line { stroke-width: 3.4; }
    .vl-svg-turnstile-gate-hub { fill: currentColor; stroke: none; }
    @keyframes vl-svg-turnstile-gate-step { 0%, 18% { transform: rotate(0deg); } 33%, 51% { transform: rotate(120deg); } 66%, 84% { transform: rotate(240deg); } 100% { transform: rotate(360deg); } }`
  },
  {
    id: 'svg-kite-tail',
    name: 'SVG Kite Tail',
    category: 'SVG',
    tech: 'Inline SVG',
    description: 'A kite drifts on a thermal while its ribboned tail trails behind in a lazy S curve.',
    markup: `<svg class="vl-svg-kite-tail" viewBox="0 0 96 72" aria-hidden="true" focusable="false">
      <g class="vl-svg-kite-tail-body">
        <polygon class="vl-svg-kite-tail-sail" points="48,10 62,28 48,46 34,28" />
        <line class="vl-svg-kite-tail-spar" x1="34" y1="28" x2="62" y2="28" />
        <path class="vl-svg-kite-tail-ribbon" d="M48 46Q40 54 48 60T44 70" />
      </g>
    </svg>`,
    css: `.vl-svg-kite-tail { width: 86px; height: 66px; color: var(--loader-accent); overflow: visible; }
    .vl-svg-kite-tail polygon, .vl-svg-kite-tail line, .vl-svg-kite-tail path { fill: none; stroke: currentColor; stroke-linecap: round; stroke-linejoin: round; }
    .vl-svg-kite-tail-sail { stroke-width: 2.8; fill: currentColor; fill-opacity: .16; }
    .vl-svg-kite-tail-spar { stroke-width: 1.8; opacity: .5; }
    .vl-svg-kite-tail-ribbon { stroke-width: 2.4; opacity: .7; stroke-dasharray: 6 5; animation: vl-svg-kite-tail-flutter calc(var(--loader-speed) * 1.4) linear infinite; }
    .vl-svg-kite-tail-body { transform-origin: 48px 28px; animation: vl-svg-kite-tail-drift calc(var(--loader-speed) * 2.8) ease-in-out infinite; }
    @keyframes vl-svg-kite-tail-drift { 0%, 100% { transform: translate(-7px, 2px) rotate(-8deg); } 50% { transform: translate(7px, -3px) rotate(8deg); } }
    @keyframes vl-svg-kite-tail-flutter { to { stroke-dashoffset: -22; } }`
  },
  {
    id: 'svg-piston-cycle',
    name: 'SVG Piston Cycle',
    category: 'SVG',
    tech: 'Inline SVG',
    description: 'A piston head pumps in its cylinder while the crank wheel turns through the same cycle.',
    markup: `<svg class="vl-svg-piston-cycle" viewBox="0 0 96 72" aria-hidden="true" focusable="false">
      <rect class="vl-svg-piston-cycle-cylinder" x="34" y="8" width="28" height="34" rx="4" />
      <g class="vl-svg-piston-cycle-head">
        <rect x="37" y="14" width="22" height="8" rx="2" />
        <line x1="48" y1="22" x2="48" y2="40" />
      </g>
      <circle class="vl-svg-piston-cycle-crank" cx="48" cy="52" r="12" />
      <circle class="vl-svg-piston-cycle-pin" cx="48" cy="52" r="3" />
    </svg>`,
    css: `.vl-svg-piston-cycle { width: 86px; height: 66px; color: var(--loader-accent); overflow: visible; }
    .vl-svg-piston-cycle rect, .vl-svg-piston-cycle circle, .vl-svg-piston-cycle line { fill: none; stroke: currentColor; stroke-linecap: round; }
    .vl-svg-piston-cycle-cylinder { stroke-width: 2.4; opacity: .3; }
    .vl-svg-piston-cycle-crank { stroke-width: 2.6; opacity: .55; stroke-dasharray: 6 6; transform-origin: 48px 52px; animation: vl-svg-piston-cycle-turn calc(var(--loader-speed) * 1.3) linear infinite; }
    .vl-svg-piston-cycle-pin { fill: currentColor; stroke: none; }
    .vl-svg-piston-cycle-head rect { fill: currentColor; stroke: none; }
    .vl-svg-piston-cycle-head line { stroke-width: 2.6; }
    .vl-svg-piston-cycle-head { animation: vl-svg-piston-cycle-pump calc(var(--loader-speed) * 1.3) ease-in-out infinite; }
    @keyframes vl-svg-piston-cycle-turn { to { transform: rotate(360deg); } }
    @keyframes vl-svg-piston-cycle-pump { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(14px); } }`
  },
  {
    id: 'svg-ripple-stones',
    name: 'SVG Ripple Stones',
    category: 'SVG',
    tech: 'Inline SVG',
    description: 'Stones land in still water at staggered intervals, each throwing its own spreading ring.',
    markup: `<svg class="vl-svg-ripple-stones" viewBox="0 0 96 72" aria-hidden="true" focusable="false">
      <line class="vl-svg-ripple-stones-surface" x1="8" y1="40" x2="88" y2="40" />
      <g class="vl-svg-ripple-stones-set">
        <ellipse cx="28" cy="40" rx="8" ry="3" />
        <ellipse cx="48" cy="40" rx="8" ry="3" />
        <ellipse cx="68" cy="40" rx="8" ry="3" />
      </g>
      <g class="vl-svg-ripple-stones-drops">
        <circle cx="28" cy="40" r="3" />
        <circle cx="48" cy="40" r="3" />
        <circle cx="68" cy="40" r="3" />
      </g>
    </svg>`,
    css: `.vl-svg-ripple-stones { width: 86px; height: 66px; color: var(--loader-accent); overflow: visible; }
    .vl-svg-ripple-stones line, .vl-svg-ripple-stones ellipse { fill: none; stroke: currentColor; stroke-linecap: round; }
    .vl-svg-ripple-stones-surface { stroke-width: 1.8; opacity: .2; }
    .vl-svg-ripple-stones-set ellipse { stroke-width: 2.2; transform-box: fill-box; transform-origin: center; animation: vl-svg-ripple-stones-spread calc(var(--loader-speed) * 2.1) ease-out infinite; }
    .vl-svg-ripple-stones-set ellipse:nth-child(2) { animation-delay: calc(var(--loader-speed) * -.7); }
    .vl-svg-ripple-stones-set ellipse:nth-child(3) { animation-delay: calc(var(--loader-speed) * -1.4); }
    .vl-svg-ripple-stones-drops circle { fill: currentColor; transform-box: fill-box; transform-origin: center; animation: vl-svg-ripple-stones-plop calc(var(--loader-speed) * 2.1) ease-in infinite; }
    .vl-svg-ripple-stones-drops circle:nth-child(2) { animation-delay: calc(var(--loader-speed) * -.7); }
    .vl-svg-ripple-stones-drops circle:nth-child(3) { animation-delay: calc(var(--loader-speed) * -1.4); }
    @keyframes vl-svg-ripple-stones-spread { 0% { transform: scale(.2); opacity: 0; } 20% { opacity: .9; } 100% { transform: scale(2.2); opacity: 0; } }
    @keyframes vl-svg-ripple-stones-plop { 0% { transform: translateY(-22px) scale(.8); opacity: 0; } 12% { opacity: 1; } 20% { transform: translateY(0) scale(1); opacity: 1; } 32%, 100% { transform: translateY(0) scale(.3); opacity: 0; } }`
  },
  {
    id: 'svg-elevator-floors',
    name: 'SVG Elevator Floors',
    category: 'SVG',
    tech: 'Inline SVG',
    description: 'A lift car travels a shaft and pauses at each floor, lighting the indicator as it arrives.',
    markup: `<svg class="vl-svg-elevator-floors" viewBox="0 0 96 72" aria-hidden="true" focusable="false">
      <rect class="vl-svg-elevator-floors-shaft" x="34" y="8" width="28" height="56" rx="3" />
      <g class="vl-svg-elevator-floors-levels">
        <line x1="36" y1="22" x2="60" y2="22" />
        <line x1="36" y1="36" x2="60" y2="36" />
        <line x1="36" y1="50" x2="60" y2="50" />
      </g>
      <g class="vl-svg-elevator-floors-lamps">
        <circle cx="70" cy="22" r="3" />
        <circle cx="70" cy="36" r="3" />
        <circle cx="70" cy="50" r="3" />
      </g>
      <rect class="vl-svg-elevator-floors-car" x="38" y="12" width="20" height="12" rx="2" />
    </svg>`,
    css: `.vl-svg-elevator-floors { width: 86px; height: 66px; color: var(--loader-accent); overflow: visible; }
    .vl-svg-elevator-floors rect, .vl-svg-elevator-floors line, .vl-svg-elevator-floors circle { fill: none; stroke: currentColor; stroke-linecap: round; }
    .vl-svg-elevator-floors-shaft { stroke-width: 2.2; opacity: .28; }
    .vl-svg-elevator-floors-levels line { stroke-width: 1.6; opacity: .22; }
    .vl-svg-elevator-floors-lamps circle { stroke-width: 1.8; opacity: .25; animation: vl-svg-elevator-floors-lamp calc(var(--loader-speed) * 3) ease-in-out infinite; }
    .vl-svg-elevator-floors-lamps circle:nth-child(2) { animation-delay: calc(var(--loader-speed) * -1); }
    .vl-svg-elevator-floors-lamps circle:nth-child(3) { animation-delay: calc(var(--loader-speed) * -2); }
    .vl-svg-elevator-floors-car { fill: currentColor; fill-opacity: .8; stroke-width: 1.6; animation: vl-svg-elevator-floors-ride calc(var(--loader-speed) * 3) ease-in-out infinite; }
    @keyframes vl-svg-elevator-floors-ride { 0%, 12% { transform: translateY(0); } 33%, 45% { transform: translateY(14px); } 66%, 78% { transform: translateY(28px); } 95%, 100% { transform: translateY(0); } }
    @keyframes vl-svg-elevator-floors-lamp { 0%, 20%, 100% { opacity: .2; } 8% { opacity: 1; } }`
  }
];
