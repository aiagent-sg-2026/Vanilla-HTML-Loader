export const svgPack6LoadersA = [
  {
    id: 'svg-contour-bands',
    name: 'SVG Contour Bands',
    category: 'SVG',
    tech: 'Inline SVG',
    description: 'Layered contour lines pulse and carry a moving dash around an organic topographic form.',
    markup: `<svg class="vl-svg-contour-bands" viewBox="0 0 96 72" aria-hidden="true" focusable="false">
      <path d="M17 38C17 20 32 11 49 13C67 14 81 25 79 42C78 57 63 63 47 59C29 64 16 54 17 38Z" />
      <path d="M25 38C25 25 36 18 49 20C63 20 72 29 71 41C70 52 60 56 48 53C35 57 25 49 25 38Z" />
      <path d="M33 38C33 30 40 25 49 27C58 27 64 33 63 41C62 47 56 50 48 47C40 50 33 45 33 38Z" />
      <path d="M41 38C41 34 44 32 49 33C54 33 57 36 56 40C56 44 52 45 48 44C44 45 41 42 41 38Z" />
    </svg>`,
    css: `.vl-svg-contour-bands { width: 86px; height: 66px; color: var(--loader-accent); overflow: visible; }
    .vl-svg-contour-bands path { fill: none; stroke: currentColor; stroke-width: 2.4; stroke-linecap: round; stroke-linejoin: round; stroke-dasharray: 14 160; animation: vl-svg-contour-flow calc(var(--loader-speed) * 2.4) linear infinite; }
    .vl-svg-contour-bands path:nth-child(1) { opacity: .3; animation-delay: calc(var(--loader-speed) * -.6); }
    .vl-svg-contour-bands path:nth-child(2) { opacity: .5; animation-delay: calc(var(--loader-speed) * -.4); }
    .vl-svg-contour-bands path:nth-child(3) { opacity: .72; animation-delay: calc(var(--loader-speed) * -.2); }
    .vl-svg-contour-bands path:nth-child(4) { opacity: 1; }
    @keyframes vl-svg-contour-flow { to { stroke-dashoffset: -174; } }`
  },
  {
    id: 'svg-vector-rain',
    name: 'SVG Vector Rain',
    category: 'SVG',
    tech: 'Inline SVG',
    description: 'Four directional vectors stream downward in staggered lanes like compact data rain.',
    markup: `<svg class="vl-svg-vector-rain" viewBox="0 0 96 72" aria-hidden="true" focusable="false">
      <path d="M18 8V63M13 57L18 63L23 57" />
      <path d="M38 8V63M33 57L38 63L43 57" />
      <path d="M58 8V63M53 57L58 63L63 57" />
      <path d="M78 8V63M73 57L78 63L83 57" />
    </svg>`,
    css: `.vl-svg-vector-rain { width: 86px; height: 66px; color: var(--loader-accent); overflow: visible; }
    .vl-svg-vector-rain path { fill: none; stroke: currentColor; stroke-width: 3; stroke-linecap: round; stroke-linejoin: round; stroke-dasharray: 12 54; animation: vl-svg-vector-rain-flow calc(var(--loader-speed) * 1.7) linear infinite; }
    .vl-svg-vector-rain path:nth-child(2) { animation-delay: calc(var(--loader-speed) * -.32); opacity: .78; }
    .vl-svg-vector-rain path:nth-child(3) { animation-delay: calc(var(--loader-speed) * -.64); opacity: .62; }
    .vl-svg-vector-rain path:nth-child(4) { animation-delay: calc(var(--loader-speed) * -.96); opacity: .46; }
    @keyframes vl-svg-vector-rain-flow { from { stroke-dashoffset: 0; opacity: .28; } 45% { opacity: 1; } to { stroke-dashoffset: -66; opacity: .28; } }`
  },
  {
    id: 'svg-lens-sweep',
    name: 'SVG Lens Sweep',
    category: 'SVG',
    tech: 'Inline SVG',
    description: 'Two optical lens arcs hold steady while a bright scanner line sweeps through their shared center.',
    markup: `<svg class="vl-svg-lens-sweep" viewBox="0 0 96 72" aria-hidden="true" focusable="false">
      <path class="vl-svg-lens-left" d="M47 14C27 18 18 28 18 36S27 54 47 58" />
      <path class="vl-svg-lens-right" d="M49 14C69 18 78 28 78 36S69 54 49 58" />
      <circle cx="48" cy="36" r="5" />
      <line class="vl-svg-lens-ray" x1="48" y1="10" x2="48" y2="62" />
    </svg>`,
    css: `.vl-svg-lens-sweep { width: 86px; height: 66px; color: var(--loader-accent); overflow: visible; }
    .vl-svg-lens-sweep path, .vl-svg-lens-sweep line { fill: none; stroke: currentColor; stroke-linecap: round; }
    .vl-svg-lens-sweep path { stroke-width: 3; opacity: .45; animation: vl-svg-lens-breathe calc(var(--loader-speed) * 1.8) ease-in-out infinite; }
    .vl-svg-lens-sweep circle { fill: currentColor; opacity: .8; animation: vl-svg-lens-core calc(var(--loader-speed) * 1.8) ease-in-out infinite; transform-origin: 48px 36px; }
    .vl-svg-lens-ray { stroke-width: 3.5; transform-origin: 48px 36px; animation: vl-svg-lens-scan calc(var(--loader-speed) * 1.8) linear infinite; }
    @keyframes vl-svg-lens-breathe { 50% { opacity: .9; } }
    @keyframes vl-svg-lens-core { 50% { transform: scale(1.45); opacity: 1; } }
    @keyframes vl-svg-lens-scan { to { transform: rotate(360deg); } }`
  },
  {
    id: 'svg-arc-cascade',
    name: 'SVG Arc Cascade',
    category: 'SVG',
    tech: 'Inline SVG',
    description: 'Stacked semicircular arcs light in sequence to create a rising cascade of curved signals.',
    markup: `<svg class="vl-svg-arc-cascade" viewBox="0 0 96 72" aria-hidden="true" focusable="false">
      <path d="M12 58A36 36 0 0 1 84 58" />
      <path d="M20 58A28 28 0 0 1 76 58" />
      <path d="M28 58A20 20 0 0 1 68 58" />
      <path d="M36 58A12 12 0 0 1 60 58" />
      <circle cx="48" cy="58" r="3.5" />
    </svg>`,
    css: `.vl-svg-arc-cascade { width: 86px; height: 66px; color: var(--loader-accent); overflow: visible; }
    .vl-svg-arc-cascade path { fill: none; stroke: currentColor; stroke-width: 3; stroke-linecap: round; stroke-dasharray: 14 130; animation: vl-svg-arc-cascade-run calc(var(--loader-speed) * 2) linear infinite; }
    .vl-svg-arc-cascade path:nth-child(2) { animation-delay: calc(var(--loader-speed) * -.3); opacity: .8; }
    .vl-svg-arc-cascade path:nth-child(3) { animation-delay: calc(var(--loader-speed) * -.6); opacity: .62; }
    .vl-svg-arc-cascade path:nth-child(4) { animation-delay: calc(var(--loader-speed) * -.9); opacity: .46; }
    .vl-svg-arc-cascade circle { fill: currentColor; animation: vl-svg-arc-cascade-dot calc(var(--loader-speed) * 1.2) ease-in-out infinite; transform-origin: 48px 58px; }
    @keyframes vl-svg-arc-cascade-run { to { stroke-dashoffset: -144; } }
    @keyframes vl-svg-arc-cascade-dot { 50% { transform: scale(1.65); opacity: .5; } }`
  },
  {
    id: 'svg-tangent-chords',
    name: 'SVG Tangent Chords',
    category: 'SVG',
    tech: 'Inline SVG',
    description: 'Rotating chord lines sweep across a circular guide while their intersections pulse at the center.',
    markup: `<svg class="vl-svg-tangent-chords" viewBox="0 0 96 72" aria-hidden="true" focusable="false">
      <circle class="vl-svg-tangent-guide" cx="48" cy="36" r="25" />
      <g class="vl-svg-tangent-lines">
        <line x1="24" y1="28" x2="72" y2="44" />
        <line x1="26" y1="48" x2="70" y2="24" />
        <line x1="34" y1="13" x2="62" y2="59" />
      </g>
      <circle class="vl-svg-tangent-core" cx="48" cy="36" r="4" />
    </svg>`,
    css: `.vl-svg-tangent-chords { width: 86px; height: 66px; color: var(--loader-accent); overflow: visible; }
    .vl-svg-tangent-guide { fill: none; stroke: currentColor; stroke-width: 2; opacity: .24; stroke-dasharray: 4 6; }
    .vl-svg-tangent-lines { transform-origin: 48px 36px; animation: vl-svg-tangent-spin calc(var(--loader-speed) * 2.2) linear infinite; }
    .vl-svg-tangent-lines line { stroke: currentColor; stroke-width: 3; stroke-linecap: round; opacity: .78; }
    .vl-svg-tangent-core { fill: currentColor; transform-origin: 48px 36px; animation: vl-svg-tangent-core calc(var(--loader-speed) * 1.1) ease-in-out infinite; }
    @keyframes vl-svg-tangent-spin { to { transform: rotate(360deg); } }
    @keyframes vl-svg-tangent-core { 50% { transform: scale(1.75); opacity: .45; } }`
  }
];
