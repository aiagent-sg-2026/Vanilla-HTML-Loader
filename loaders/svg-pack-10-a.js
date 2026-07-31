export const svgPack10LoadersA = [
  {
    id: 'svg-ferris-wheel',
    name: 'SVG Ferris Wheel',
    category: 'SVG',
    tech: 'Inline SVG',
    description: 'A big wheel turns while its cabins counter-rotate so they stay upright the whole way round.',
    markup: `<svg class="vl-svg-ferris-wheel" viewBox="0 0 96 72" aria-hidden="true" focusable="false">
      <g class="vl-svg-ferris-wheel-turn">
        <circle class="vl-svg-ferris-wheel-rim" cx="48" cy="32" r="24" />
        <line x1="48" y1="8" x2="48" y2="56" />
        <line x1="27" y1="20" x2="69" y2="44" />
        <line x1="27" y1="44" x2="69" y2="20" />
        <g class="vl-svg-ferris-wheel-cabin" style="--vl-fw-x: 48px; --vl-fw-y: 8px"><rect x="44" y="8" width="8" height="7" rx="1.5" /></g>
        <g class="vl-svg-ferris-wheel-cabin" style="--vl-fw-x: 69px; --vl-fw-y: 20px"><rect x="65" y="20" width="8" height="7" rx="1.5" /></g>
        <g class="vl-svg-ferris-wheel-cabin" style="--vl-fw-x: 69px; --vl-fw-y: 44px"><rect x="65" y="44" width="8" height="7" rx="1.5" /></g>
        <g class="vl-svg-ferris-wheel-cabin" style="--vl-fw-x: 48px; --vl-fw-y: 56px"><rect x="44" y="56" width="8" height="7" rx="1.5" /></g>
        <g class="vl-svg-ferris-wheel-cabin" style="--vl-fw-x: 27px; --vl-fw-y: 44px"><rect x="23" y="44" width="8" height="7" rx="1.5" /></g>
        <g class="vl-svg-ferris-wheel-cabin" style="--vl-fw-x: 27px; --vl-fw-y: 20px"><rect x="23" y="20" width="8" height="7" rx="1.5" /></g>
      </g>
      <path class="vl-svg-ferris-wheel-legs" d="M34 66L48 32L62 66" />
      <circle class="vl-svg-ferris-wheel-hub" cx="48" cy="32" r="3.5" />
    </svg>`,
    css: `.vl-svg-ferris-wheel { width: 86px; height: 66px; color: var(--loader-accent); overflow: visible; }
    .vl-svg-ferris-wheel circle, .vl-svg-ferris-wheel line, .vl-svg-ferris-wheel path { fill: none; stroke: currentColor; stroke-linecap: round; }
    .vl-svg-ferris-wheel-rim { stroke-width: 2.6; opacity: .6; }
    .vl-svg-ferris-wheel-turn line { stroke-width: 1.8; opacity: .35; }
    .vl-svg-ferris-wheel-legs { stroke-width: 2.6; opacity: .45; }
    .vl-svg-ferris-wheel-hub { fill: currentColor; stroke: none; }
    .vl-svg-ferris-wheel-cabin rect { fill: currentColor; fill-opacity: .85; stroke: none; }
    .vl-svg-ferris-wheel-turn { transform-origin: 48px 32px; animation: vl-svg-ferris-wheel-spin calc(var(--loader-speed) * 3.4) linear infinite; }
    .vl-svg-ferris-wheel-cabin { transform-origin: var(--vl-fw-x) var(--vl-fw-y); animation: vl-svg-ferris-wheel-level calc(var(--loader-speed) * 3.4) linear infinite; }
    @keyframes vl-svg-ferris-wheel-spin { to { transform: rotate(360deg); } }
    @keyframes vl-svg-ferris-wheel-level { to { transform: rotate(-360deg); } }`
  },
  {
    id: 'svg-water-wheel',
    name: 'SVG Water Wheel',
    category: 'SVG',
    tech: 'Inline SVG',
    description: 'Paddles dip into the stream and carry water up and over as the wheel turns.',
    markup: `<svg class="vl-svg-water-wheel" viewBox="0 0 96 72" aria-hidden="true" focusable="false">
      <g class="vl-svg-water-wheel-turn">
        <circle class="vl-svg-water-wheel-rim" cx="48" cy="32" r="21" />
        <g class="vl-svg-water-wheel-paddles">
          <rect x="45" y="6"  width="6" height="10" rx="1" />
          <rect x="45" y="6"  width="6" height="10" rx="1" transform="rotate(60 48 32)" />
          <rect x="45" y="6"  width="6" height="10" rx="1" transform="rotate(120 48 32)" />
          <rect x="45" y="6"  width="6" height="10" rx="1" transform="rotate(180 48 32)" />
          <rect x="45" y="6"  width="6" height="10" rx="1" transform="rotate(240 48 32)" />
          <rect x="45" y="6"  width="6" height="10" rx="1" transform="rotate(300 48 32)" />
        </g>
      </g>
      <circle class="vl-svg-water-wheel-hub" cx="48" cy="32" r="3" />
      <g class="vl-svg-water-wheel-stream">
        <path d="M8 58Q24 52 40 58T72 58T90 54" />
        <path d="M8 64Q24 58 40 64T72 64T90 60" />
      </g>
    </svg>`,
    css: `.vl-svg-water-wheel { width: 86px; height: 66px; color: var(--loader-accent); overflow: visible; }
    .vl-svg-water-wheel circle, .vl-svg-water-wheel path { fill: none; stroke: currentColor; stroke-linecap: round; }
    .vl-svg-water-wheel-rim { stroke-width: 2.4; opacity: .55; }
    .vl-svg-water-wheel-hub { fill: currentColor; stroke: none; }
    .vl-svg-water-wheel-paddles rect { fill: currentColor; fill-opacity: .75; stroke: none; }
    .vl-svg-water-wheel-turn { transform-origin: 48px 32px; animation: vl-svg-water-wheel-spin calc(var(--loader-speed) * 2.4) linear infinite; }
    .vl-svg-water-wheel-stream path { stroke-width: 2.2; opacity: .3; stroke-dasharray: 14 10; animation: vl-svg-water-wheel-flow calc(var(--loader-speed) * 1.2) linear infinite; }
    .vl-svg-water-wheel-stream path:nth-child(2) { opacity: .18; animation-delay: calc(var(--loader-speed) * -.4); }
    @keyframes vl-svg-water-wheel-spin { to { transform: rotate(360deg); } }
    @keyframes vl-svg-water-wheel-flow { to { stroke-dashoffset: -24; } }`
  },
  {
    id: 'svg-vinyl-spin',
    name: 'SVG Vinyl Spin',
    category: 'SVG',
    tech: 'Inline SVG',
    description: 'A record turns under a tonearm that tracks slowly inward across the grooves.',
    markup: `<svg class="vl-svg-vinyl-spin" viewBox="0 0 96 72" aria-hidden="true" focusable="false">
      <g class="vl-svg-vinyl-spin-disc">
        <circle class="vl-svg-vinyl-spin-edge" cx="42" cy="36" r="26" />
        <circle class="vl-svg-vinyl-spin-groove" cx="42" cy="36" r="20" />
        <circle class="vl-svg-vinyl-spin-groove" cx="42" cy="36" r="14" />
        <circle class="vl-svg-vinyl-spin-label" cx="42" cy="36" r="8" />
        <line class="vl-svg-vinyl-spin-mark" x1="42" y1="16" x2="42" y2="10" />
      </g>
      <circle class="vl-svg-vinyl-spin-spindle" cx="42" cy="36" r="2" />
      <g class="vl-svg-vinyl-spin-arm">
        <line x1="84" y1="14" x2="60" y2="42" />
        <circle cx="84" cy="14" r="3.5" />
      </g>
    </svg>`,
    css: `.vl-svg-vinyl-spin { width: 86px; height: 66px; color: var(--loader-accent); overflow: visible; }
    .vl-svg-vinyl-spin circle, .vl-svg-vinyl-spin line { fill: none; stroke: currentColor; stroke-linecap: round; }
    .vl-svg-vinyl-spin-edge { stroke-width: 2.6; opacity: .6; }
    .vl-svg-vinyl-spin-groove { stroke-width: 1.4; opacity: .22; }
    .vl-svg-vinyl-spin-label { fill: currentColor; fill-opacity: .8; stroke: none; }
    .vl-svg-vinyl-spin-mark { stroke-width: 2.2; opacity: .7; }
    .vl-svg-vinyl-spin-spindle { fill: currentColor; stroke: none; }
    .vl-svg-vinyl-spin-arm line { stroke-width: 2.4; opacity: .75; }
    .vl-svg-vinyl-spin-arm circle { stroke-width: 2.2; opacity: .6; }
    .vl-svg-vinyl-spin-disc { transform-origin: 42px 36px; animation: vl-svg-vinyl-spin-turn calc(var(--loader-speed) * 1.6) linear infinite; }
    .vl-svg-vinyl-spin-arm { transform-origin: 84px 14px; animation: vl-svg-vinyl-spin-track calc(var(--loader-speed) * 5) ease-in-out infinite; }
    @keyframes vl-svg-vinyl-spin-turn { to { transform: rotate(360deg); } }
    @keyframes vl-svg-vinyl-spin-track { 0%, 100% { transform: rotate(0deg); } 50% { transform: rotate(15deg); } }`
  },
  {
    id: 'svg-balance-scale',
    name: 'SVG Balance Scale',
    category: 'SVG',
    tech: 'Inline SVG',
    description: 'A beam tips one way then the other as the pans load, before settling back to level.',
    markup: `<svg class="vl-svg-balance-scale" viewBox="0 0 96 72" aria-hidden="true" focusable="false">
      <line class="vl-svg-balance-scale-post" x1="48" y1="18" x2="48" y2="58" />
      <path class="vl-svg-balance-scale-base" d="M34 60H62" />
      <g class="vl-svg-balance-scale-beam">
        <line x1="20" y1="18" x2="76" y2="18" />
        <g class="vl-svg-balance-scale-pan"><line x1="20" y1="18" x2="20" y2="30" /><path d="M12 30H28L24 38H16Z" /></g>
        <g class="vl-svg-balance-scale-pan"><line x1="76" y1="18" x2="76" y2="30" /><path d="M68 30H84L80 38H72Z" /></g>
      </g>
      <circle class="vl-svg-balance-scale-pivot" cx="48" cy="18" r="3.5" />
    </svg>`,
    css: `.vl-svg-balance-scale { width: 86px; height: 66px; color: var(--loader-accent); overflow: visible; }
    .vl-svg-balance-scale line, .vl-svg-balance-scale path { fill: none; stroke: currentColor; stroke-linecap: round; stroke-linejoin: round; }
    .vl-svg-balance-scale-post { stroke-width: 2.8; opacity: .5; }
    .vl-svg-balance-scale-base { stroke-width: 3.2; opacity: .45; }
    .vl-svg-balance-scale-pivot { fill: currentColor; stroke: none; }
    .vl-svg-balance-scale-beam line { stroke-width: 2.6; }
    .vl-svg-balance-scale-pan path { fill: currentColor; fill-opacity: .18; stroke-width: 2; }
    .vl-svg-balance-scale-pan line { stroke-width: 1.6; opacity: .5; }
    .vl-svg-balance-scale-beam { transform-origin: 48px 18px; animation: vl-svg-balance-scale-tip calc(var(--loader-speed) * 2.8) ease-in-out infinite; }
    .vl-svg-balance-scale-pan { transform-box: fill-box; transform-origin: top center; animation: vl-svg-balance-scale-hang calc(var(--loader-speed) * 2.8) ease-in-out infinite; }
    @keyframes vl-svg-balance-scale-tip { 0%, 100% { transform: rotate(0deg); } 30% { transform: rotate(-11deg); } 65% { transform: rotate(11deg); } }
    @keyframes vl-svg-balance-scale-hang { 0%, 100% { transform: rotate(0deg); } 30% { transform: rotate(11deg); } 65% { transform: rotate(-11deg); } }`
  },
  {
    id: 'svg-combination-lock',
    name: 'SVG Combination Lock',
    category: 'SVG',
    tech: 'Inline SVG',
    description: 'A dial spins back and forth and the tumbler marks lock in one by one until it opens.',
    markup: `<svg class="vl-svg-combination-lock" viewBox="0 0 96 72" aria-hidden="true" focusable="false">
      <circle class="vl-svg-combination-lock-face" cx="48" cy="38" r="24" />
      <g class="vl-svg-combination-lock-dial">
        <line x1="48" y1="18" x2="48" y2="28" />
        <circle class="vl-svg-combination-lock-knob" cx="48" cy="38" r="5" />
      </g>
      <g class="vl-svg-combination-lock-pins">
        <circle cx="30" cy="26" r="2.6" />
        <circle cx="48" cy="20" r="2.6" />
        <circle cx="66" cy="26" r="2.6" />
      </g>
      <path class="vl-svg-combination-lock-shackle" d="M36 22V14A12 12 0 0 1 60 14V22" />
    </svg>`,
    css: `.vl-svg-combination-lock { width: 86px; height: 66px; color: var(--loader-accent); overflow: visible; }
    .vl-svg-combination-lock circle, .vl-svg-combination-lock line, .vl-svg-combination-lock path { fill: none; stroke: currentColor; stroke-linecap: round; }
    .vl-svg-combination-lock-face { stroke-width: 2.6; opacity: .4; stroke-dasharray: 3 6; }
    .vl-svg-combination-lock-knob { fill: currentColor; fill-opacity: .8; stroke: none; }
    .vl-svg-combination-lock-dial line { stroke-width: 3; }
    .vl-svg-combination-lock-shackle { stroke-width: 3; opacity: .55; animation: vl-svg-combination-lock-open calc(var(--loader-speed) * 3.6) ease-in-out infinite; }
    .vl-svg-combination-lock-pins circle { fill: currentColor; stroke: none; opacity: .18; animation: vl-svg-combination-lock-set calc(var(--loader-speed) * 3.6) ease-in-out infinite; }
    .vl-svg-combination-lock-pins circle:nth-child(2) { animation-delay: calc(var(--loader-speed) * .9); }
    .vl-svg-combination-lock-pins circle:nth-child(3) { animation-delay: calc(var(--loader-speed) * 1.8); }
    .vl-svg-combination-lock-dial { transform-origin: 48px 38px; animation: vl-svg-combination-lock-turn calc(var(--loader-speed) * 3.6) ease-in-out infinite; }
    @keyframes vl-svg-combination-lock-turn { 0% { transform: rotate(0deg); } 25% { transform: rotate(155deg); } 55% { transform: rotate(35deg); } 80%, 100% { transform: rotate(250deg); } }
    @keyframes vl-svg-combination-lock-set { 0%, 22% { opacity: .15; } 32%, 100% { opacity: .95; } }
    @keyframes vl-svg-combination-lock-open { 0%, 82% { transform: translateY(0); } 92%, 100% { transform: translateY(-7px); } }`
  }
];
