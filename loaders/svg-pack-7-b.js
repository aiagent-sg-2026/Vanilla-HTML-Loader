export const svgPack7LoadersB = [
  {
    id: 'svg-satellite-link',
    name: 'SVG Satellite Link',
    category: 'SVG',
    tech: 'Inline SVG',
    description: 'A ground dish holds its aim while widening signal arcs peel away toward orbit.',
    markup: `<svg class="vl-svg-satellite-link" viewBox="0 0 96 72" aria-hidden="true" focusable="false">
      <path class="vl-svg-satellite-link-dish" d="M26 56C20 44 26 30 39 24C52 18 66 22 72 33" />
      <line class="vl-svg-satellite-link-mast" x1="40" y1="42" x2="34" y2="60" />
      <line class="vl-svg-satellite-link-base" x1="24" y1="60" x2="44" y2="60" />
      <g class="vl-svg-satellite-link-waves">
        <path d="M56 44C64 40 68 32 66 24" />
        <path d="M63 49C74 43 79 32 76 21" />
        <path d="M70 54C84 46 90 32 86 18" />
      </g>
    </svg>`,
    css: `.vl-svg-satellite-link { width: 86px; height: 66px; color: var(--loader-accent); overflow: visible; }
    .vl-svg-satellite-link path, .vl-svg-satellite-link line { fill: none; stroke: currentColor; stroke-linecap: round; }
    .vl-svg-satellite-link-dish { stroke-width: 3.4; }
    .vl-svg-satellite-link-mast, .vl-svg-satellite-link-base { stroke-width: 2.8; opacity: .6; }
    .vl-svg-satellite-link-waves path { stroke-width: 2.6; opacity: 0; animation: vl-svg-satellite-link-emit calc(var(--loader-speed) * 1.8) ease-out infinite; }
    .vl-svg-satellite-link-waves path:nth-child(2) { animation-delay: calc(var(--loader-speed) * .32); }
    .vl-svg-satellite-link-waves path:nth-child(3) { animation-delay: calc(var(--loader-speed) * .64); }
    @keyframes vl-svg-satellite-link-emit { 0% { opacity: 0; transform: translate(-5px, 4px) scale(.82); } 30% { opacity: 1; } 100% { opacity: 0; transform: translate(4px, -3px) scale(1.08); } }`
  },
  {
    id: 'svg-sprout-grow',
    name: 'SVG Sprout Grow',
    category: 'SVG',
    tech: 'Inline SVG',
    description: 'A seedling stem climbs out of the soil line and unfurls two leaves before resetting.',
    markup: `<svg class="vl-svg-sprout-grow" viewBox="0 0 96 72" aria-hidden="true" focusable="false">
      <line class="vl-svg-sprout-grow-soil" x1="24" y1="58" x2="72" y2="58" />
      <path class="vl-svg-sprout-grow-stem" d="M48 58C48 46 48 36 48 22" />
      <path class="vl-svg-sprout-grow-leaf vl-svg-sprout-grow-leaf-l" d="M48 40C38 40 31 35 30 28C40 26 47 31 48 40Z" />
      <path class="vl-svg-sprout-grow-leaf vl-svg-sprout-grow-leaf-r" d="M48 32C58 32 65 27 66 20C56 18 49 23 48 32Z" />
    </svg>`,
    css: `.vl-svg-sprout-grow { width: 86px; height: 66px; color: var(--loader-accent); overflow: visible; }
    .vl-svg-sprout-grow line, .vl-svg-sprout-grow path { fill: none; stroke: currentColor; stroke-linecap: round; stroke-linejoin: round; }
    .vl-svg-sprout-grow-soil { stroke-width: 2.4; opacity: .3; }
    .vl-svg-sprout-grow-stem { stroke-width: 3.2; stroke-dasharray: 40; stroke-dashoffset: 40; animation: vl-svg-sprout-grow-climb calc(var(--loader-speed) * 2.4) ease-in-out infinite; }
    .vl-svg-sprout-grow-leaf { stroke-width: 2.4; opacity: 0; }
    .vl-svg-sprout-grow-leaf-l { transform-origin: 48px 40px; animation: vl-svg-sprout-grow-unfurl calc(var(--loader-speed) * 2.4) ease-out infinite; animation-delay: calc(var(--loader-speed) * .7); }
    .vl-svg-sprout-grow-leaf-r { transform-origin: 48px 32px; animation: vl-svg-sprout-grow-unfurl calc(var(--loader-speed) * 2.4) ease-out infinite; animation-delay: calc(var(--loader-speed) * 1); }
    @keyframes vl-svg-sprout-grow-climb { 0% { stroke-dashoffset: 40; } 55%, 85% { stroke-dashoffset: 0; } 100% { stroke-dashoffset: 40; } }
    @keyframes vl-svg-sprout-grow-unfurl { 0% { opacity: 0; transform: scale(.2); } 30%, 55% { opacity: 1; transform: scale(1); } 80%, 100% { opacity: 0; transform: scale(.2); } }`
  },
  {
    id: 'svg-abacus-slide',
    name: 'SVG Abacus Slide',
    category: 'SVG',
    tech: 'Inline SVG',
    description: 'Counting beads slide along three rods in staggered runs, tallying progress bead by bead.',
    markup: `<svg class="vl-svg-abacus-slide" viewBox="0 0 96 72" aria-hidden="true" focusable="false">
      <g class="vl-svg-abacus-slide-rods">
        <line x1="16" y1="22" x2="80" y2="22" />
        <line x1="16" y1="36" x2="80" y2="36" />
        <line x1="16" y1="50" x2="80" y2="50" />
      </g>
      <g class="vl-svg-abacus-slide-beads">
        <circle cx="24" cy="22" r="5" />
        <circle cx="36" cy="22" r="5" />
        <circle cx="24" cy="36" r="5" />
        <circle cx="36" cy="36" r="5" />
        <circle cx="24" cy="50" r="5" />
        <circle cx="36" cy="50" r="5" />
      </g>
    </svg>`,
    css: `.vl-svg-abacus-slide { width: 86px; height: 66px; color: var(--loader-accent); overflow: visible; }
    .vl-svg-abacus-slide-rods line { stroke: currentColor; stroke-width: 2; stroke-linecap: round; opacity: .3; }
    .vl-svg-abacus-slide-beads circle { fill: currentColor; stroke: none; animation: vl-svg-abacus-slide-run calc(var(--loader-speed) * 2.2) ease-in-out infinite; }
    .vl-svg-abacus-slide-beads circle:nth-child(1) { opacity: 1; }
    .vl-svg-abacus-slide-beads circle:nth-child(2) { opacity: 1; animation-delay: calc(var(--loader-speed) * -.15); }
    .vl-svg-abacus-slide-beads circle:nth-child(3) { opacity: .78; animation-delay: calc(var(--loader-speed) * -.3); }
    .vl-svg-abacus-slide-beads circle:nth-child(4) { opacity: .78; animation-delay: calc(var(--loader-speed) * -.45); }
    .vl-svg-abacus-slide-beads circle:nth-child(5) { opacity: .56; animation-delay: calc(var(--loader-speed) * -.6); }
    .vl-svg-abacus-slide-beads circle:nth-child(6) { opacity: .56; animation-delay: calc(var(--loader-speed) * -.75); }
    @keyframes vl-svg-abacus-slide-run { 0%, 100% { transform: translateX(0); } 50% { transform: translateX(32px); } }`
  },
  {
    id: 'svg-caliper-measure',
    name: 'SVG Caliper Measure',
    category: 'SVG',
    tech: 'Inline SVG',
    description: 'Caliper jaws open and close across a ticked scale bar as if taking a repeated measurement.',
    markup: `<svg class="vl-svg-caliper-measure" viewBox="0 0 96 72" aria-hidden="true" focusable="false">
      <line class="vl-svg-caliper-measure-beam" x1="12" y1="42" x2="84" y2="42" />
      <g class="vl-svg-caliper-measure-ticks">
        <line x1="20" y1="42" x2="20" y2="48" />
        <line x1="32" y1="42" x2="32" y2="50" />
        <line x1="44" y1="42" x2="44" y2="48" />
        <line x1="56" y1="42" x2="56" y2="50" />
        <line x1="68" y1="42" x2="68" y2="48" />
        <line x1="80" y1="42" x2="80" y2="50" />
      </g>
      <path class="vl-svg-caliper-measure-jaw-l" d="M22 42V22H27" />
      <path class="vl-svg-caliper-measure-jaw-r" d="M74 42V22H69" />
    </svg>`,
    css: `.vl-svg-caliper-measure { width: 86px; height: 66px; color: var(--loader-accent); overflow: visible; }
    .vl-svg-caliper-measure line, .vl-svg-caliper-measure path { fill: none; stroke: currentColor; stroke-linecap: round; stroke-linejoin: round; }
    .vl-svg-caliper-measure-beam { stroke-width: 3; opacity: .5; }
    .vl-svg-caliper-measure-ticks line { stroke-width: 2; opacity: .32; }
    .vl-svg-caliper-measure-jaw-l, .vl-svg-caliper-measure-jaw-r { stroke-width: 3.4; }
    .vl-svg-caliper-measure-jaw-l { animation: vl-svg-caliper-measure-close-l calc(var(--loader-speed) * 2) ease-in-out infinite; }
    .vl-svg-caliper-measure-jaw-r { animation: vl-svg-caliper-measure-close-r calc(var(--loader-speed) * 2) ease-in-out infinite; }
    @keyframes vl-svg-caliper-measure-close-l { 0%, 100% { transform: translateX(0); } 50% { transform: translateX(20px); } }
    @keyframes vl-svg-caliper-measure-close-r { 0%, 100% { transform: translateX(0); } 50% { transform: translateX(-20px); } }`
  },
  {
    id: 'svg-stitch-seam',
    name: 'SVG Stitch Seam',
    category: 'SVG',
    tech: 'Inline SVG',
    description: 'A needle travels a curved seam, laying dashed stitches behind it on every pass.',
    markup: `<svg class="vl-svg-stitch-seam" viewBox="0 0 96 72" aria-hidden="true" focusable="false">
      <path class="vl-svg-stitch-seam-guide" d="M8 48C26 16 42 60 60 30C70 14 80 20 88 28" />
      <path class="vl-svg-stitch-seam-thread" d="M8 48C26 16 42 60 60 30C70 14 80 20 88 28" />
      <line class="vl-svg-stitch-seam-needle" x1="0" y1="-9" x2="0" y2="7" />
    </svg>`,
    css: `.vl-svg-stitch-seam { width: 86px; height: 66px; color: var(--loader-accent); overflow: visible; }
    .vl-svg-stitch-seam path, .vl-svg-stitch-seam line { fill: none; stroke: currentColor; stroke-linecap: round; }
    .vl-svg-stitch-seam-guide { stroke-width: 1.6; opacity: .18; }
    .vl-svg-stitch-seam-thread { stroke-width: 3; stroke-dasharray: 7 5; stroke-dashoffset: 130; animation: vl-svg-stitch-seam-sew calc(var(--loader-speed) * 2.3) linear infinite; }
    .vl-svg-stitch-seam-needle { stroke-width: 2.6; opacity: .85; animation: vl-svg-stitch-seam-travel calc(var(--loader-speed) * 2.3) linear infinite; }
    @keyframes vl-svg-stitch-seam-sew { from { stroke-dashoffset: 130; } to { stroke-dashoffset: 0; } }
    @keyframes vl-svg-stitch-seam-travel { 0% { transform: translate(8px, 48px); } 25% { transform: translate(30px, 33px); } 50% { transform: translate(54px, 38px); } 75% { transform: translate(72px, 19px); } 100% { transform: translate(88px, 28px); } }`
  }
];
