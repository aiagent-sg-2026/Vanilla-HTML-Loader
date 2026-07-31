export const svgPack5LoadersB = [
  {
    id: 'svg-spiral-gauge',
    name: 'SVG Spiral Gauge',
    category: 'SVG',
    tech: 'Inline SVG',
    description: 'A compact spiral gauge fills and clears with a continuous dash-trace motion.',
    markup: `<svg class="vl-svg-spiral-gauge" viewBox="0 0 96 72" aria-hidden="true" focusable="false">
      <path class="vl-svg-spiral-gauge-track" d="M48 36C48 29 58 28 61 35C65 45 52 53 41 48C27 42 28 22 42 16C62 8 82 27 77 47C71 68 42 70 23 55" />
      <path class="vl-svg-spiral-gauge-live" d="M48 36C48 29 58 28 61 35C65 45 52 53 41 48C27 42 28 22 42 16C62 8 82 27 77 47C71 68 42 70 23 55" />
      <circle cx="48" cy="36" r="4" />
    </svg>`,
    css: `.vl-svg-spiral-gauge { width: 84px; height: 64px; color: var(--loader-accent); overflow: visible; }
      .vl-svg-spiral-gauge path { fill: none; stroke: currentColor; stroke-linecap: round; stroke-linejoin: round; }
      .vl-svg-spiral-gauge-track { stroke-width: 3; opacity: .14; }
      .vl-svg-spiral-gauge-live { stroke-width: 4; stroke-dasharray: 26 150; animation: vl-svg-spiral-gauge-flow calc(var(--loader-speed) * 2.1) linear infinite; }
      .vl-svg-spiral-gauge circle { fill: currentColor; transform-box: fill-box; transform-origin: center; animation: vl-svg-spiral-gauge-core calc(var(--loader-speed) * 1.25) ease-in-out infinite; }
      @keyframes vl-svg-spiral-gauge-flow { to { stroke-dashoffset: -176; } }
      @keyframes vl-svg-spiral-gauge-core { 0%, 100% { transform: scale(.68); opacity: .35; } 50% { transform: scale(1.35); opacity: 1; } }`
  },
  {
    id: 'svg-compass-sweep',
    name: 'SVG Compass Sweep',
    category: 'SVG',
    tech: 'Inline SVG',
    description: 'A rotating compass needle scans a segmented SVG dial with a soft radar pulse.',
    markup: `<svg class="vl-svg-compass-sweep" viewBox="0 0 96 72" aria-hidden="true" focusable="false">
      <circle class="vl-svg-compass-ring" cx="48" cy="36" r="27" />
      <path class="vl-svg-compass-ticks" d="M48 9V16M48 56V63M21 36H28M68 36H75M29 17L34 22M62 50L67 55M67 17L62 22M34 50L29 55" />
      <g class="vl-svg-compass-needle">
        <path d="M48 15L54 38L48 34L42 38Z" />
        <circle cx="48" cy="36" r="4" />
      </g>
    </svg>`,
    css: `.vl-svg-compass-sweep { width: 82px; height: 62px; color: var(--loader-accent); overflow: visible; }
      .vl-svg-compass-ring { fill: none; stroke: currentColor; stroke-width: 3; stroke-dasharray: 5 7; opacity: .32; animation: vl-svg-compass-ring calc(var(--loader-speed) * 1.7) linear infinite; }
      .vl-svg-compass-ticks { fill: none; stroke: currentColor; stroke-width: 3; stroke-linecap: round; opacity: .48; }
      .vl-svg-compass-needle { transform-origin: 48px 36px; animation: vl-svg-compass-sweep calc(var(--loader-speed) * 2.15) cubic-bezier(.45,0,.55,1) infinite; }
      .vl-svg-compass-needle path, .vl-svg-compass-needle circle { fill: currentColor; }
      @keyframes vl-svg-compass-ring { to { stroke-dashoffset: -48; } }
      @keyframes vl-svg-compass-sweep { 0% { transform: rotate(-120deg); } 50% { transform: rotate(120deg); } 100% { transform: rotate(240deg); } }`
  },
  {
    id: 'svg-bridge-current',
    name: 'SVG Bridge Current',
    category: 'SVG',
    tech: 'Inline SVG',
    description: 'Energy pulses cross a curved bridge while anchor nodes illuminate in sequence.',
    markup: `<svg class="vl-svg-bridge-current" viewBox="0 0 96 72" aria-hidden="true" focusable="false">
      <path class="vl-svg-bridge-base" d="M8 55H88" />
      <path class="vl-svg-bridge-track" d="M14 55C25 15 71 15 82 55" />
      <path class="vl-svg-bridge-live" d="M14 55C25 15 71 15 82 55" />
      <line x1="29" y1="35" x2="29" y2="55" />
      <line x1="48" y1="27" x2="48" y2="55" />
      <line x1="67" y1="35" x2="67" y2="55" />
      <circle cx="14" cy="55" r="4" />
      <circle cx="48" cy="27" r="4" />
      <circle cx="82" cy="55" r="4" />
    </svg>`,
    css: `.vl-svg-bridge-current { width: 88px; height: 66px; color: var(--loader-accent); overflow: visible; }
      .vl-svg-bridge-current path, .vl-svg-bridge-current line { fill: none; stroke: currentColor; stroke-linecap: round; }
      .vl-svg-bridge-base { stroke-width: 3; opacity: .22; }
      .vl-svg-bridge-track { stroke-width: 3; opacity: .14; }
      .vl-svg-bridge-live { stroke-width: 5; stroke-dasharray: 14 70; animation: vl-svg-bridge-current calc(var(--loader-speed) * 1.85) linear infinite; }
      .vl-svg-bridge-current line { stroke-width: 2; opacity: .28; }
      .vl-svg-bridge-current circle { fill: currentColor; transform-box: fill-box; transform-origin: center; animation: vl-svg-bridge-node calc(var(--loader-speed) * 1.5) ease-in-out infinite; }
      .vl-svg-bridge-current circle:nth-of-type(2) { animation-delay: calc(var(--loader-speed) * -.5); }
      .vl-svg-bridge-current circle:nth-of-type(3) { animation-delay: calc(var(--loader-speed) * -1); }
      @keyframes vl-svg-bridge-current { to { stroke-dashoffset: -84; } }
      @keyframes vl-svg-bridge-node { 0%, 100% { transform: scale(.7); opacity: .3; } 40% { transform: scale(1.28); opacity: 1; } }`
  },
  {
    id: 'svg-fractal-branch',
    name: 'SVG Fractal Branch',
    category: 'SVG',
    tech: 'Inline SVG',
    description: 'A branching SVG tree draws itself outward in staggered recursive strokes.',
    markup: `<svg class="vl-svg-fractal-branch" viewBox="0 0 96 72" aria-hidden="true" focusable="false">
      <path class="vl-svg-fractal-trunk" d="M48 64V38" />
      <path class="vl-svg-fractal-level-1" d="M48 43L32 28M48 43L64 28" />
      <path class="vl-svg-fractal-level-2" d="M32 28L22 17M32 28L38 15M64 28L58 15M64 28L74 17" />
      <path class="vl-svg-fractal-level-3" d="M22 17L16 10M22 17L26 8M38 15L34 8M38 15L44 7M58 15L52 7M58 15L62 8M74 17L70 8M74 17L80 10" />
    </svg>`,
    css: `.vl-svg-fractal-branch { width: 84px; height: 64px; color: var(--loader-accent); overflow: visible; }
      .vl-svg-fractal-branch path { fill: none; stroke: currentColor; stroke-width: 3; stroke-linecap: round; stroke-linejoin: round; stroke-dasharray: 80; stroke-dashoffset: 80; animation: vl-svg-fractal-draw calc(var(--loader-speed) * 1.9) ease-in-out infinite; }
      .vl-svg-fractal-level-1 { animation-delay: calc(var(--loader-speed) * -.18); opacity: .85; }
      .vl-svg-fractal-level-2 { animation-delay: calc(var(--loader-speed) * -.36); opacity: .68; }
      .vl-svg-fractal-level-3 { animation-delay: calc(var(--loader-speed) * -.54); opacity: .5; }
      @keyframes vl-svg-fractal-draw { 0%, 12% { stroke-dashoffset: 80; } 55%, 82% { stroke-dashoffset: 0; } 100% { stroke-dashoffset: -80; } }`
  },
  {
    id: 'svg-prism-refraction',
    name: 'SVG Prism Refraction',
    category: 'SVG',
    tech: 'Inline SVG',
    description: 'A light beam enters an SVG prism and fans into three animated refracted rays.',
    markup: `<svg class="vl-svg-prism-refraction" viewBox="0 0 96 72" aria-hidden="true" focusable="false">
      <path class="vl-svg-prism-shape" d="M48 10L72 58H24Z" />
      <path class="vl-svg-prism-input" d="M4 34H39" />
      <path class="vl-svg-prism-output vl-svg-prism-output-a" d="M57 34L92 20" />
      <path class="vl-svg-prism-output vl-svg-prism-output-b" d="M57 36L92 36" />
      <path class="vl-svg-prism-output vl-svg-prism-output-c" d="M57 38L92 52" />
      <circle cx="48" cy="36" r="4" />
    </svg>`,
    css: `.vl-svg-prism-refraction { width: 88px; height: 66px; color: var(--loader-accent); overflow: visible; }
      .vl-svg-prism-refraction path { fill: none; stroke: currentColor; stroke-linecap: round; stroke-linejoin: round; }
      .vl-svg-prism-shape { stroke-width: 3; opacity: .5; animation: vl-svg-prism-pulse calc(var(--loader-speed) * 1.45) ease-in-out infinite; }
      .vl-svg-prism-input { stroke-width: 4; stroke-dasharray: 12 24; animation: vl-svg-prism-input calc(var(--loader-speed) * 1.2) linear infinite; }
      .vl-svg-prism-output { stroke-width: 3; stroke-dasharray: 10 28; animation: vl-svg-prism-output calc(var(--loader-speed) * 1.35) linear infinite; }
      .vl-svg-prism-output-b { opacity: .68; animation-delay: calc(var(--loader-speed) * -.2); }
      .vl-svg-prism-output-c { opacity: .42; animation-delay: calc(var(--loader-speed) * -.4); }
      .vl-svg-prism-refraction circle { fill: currentColor; transform-box: fill-box; transform-origin: center; animation: vl-svg-prism-core calc(var(--loader-speed) * 1.1) ease-in-out infinite; }
      @keyframes vl-svg-prism-input { to { stroke-dashoffset: -36; } }
      @keyframes vl-svg-prism-output { to { stroke-dashoffset: -38; } }
      @keyframes vl-svg-prism-pulse { 0%, 100% { opacity: .28; } 50% { opacity: .8; } }
      @keyframes vl-svg-prism-core { 0%, 100% { transform: scale(.72); opacity: .4; } 50% { transform: scale(1.25); opacity: 1; } }`
  }
];