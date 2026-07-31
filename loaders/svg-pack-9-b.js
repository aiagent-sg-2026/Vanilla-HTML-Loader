export const svgPack9LoadersB = [
  {
    id: 'svg-lighthouse-beam',
    name: 'SVG Lighthouse Beam',
    category: 'SVG',
    tech: 'Inline SVG',
    description: 'A lighthouse beam sweeps the horizon and the lamp pulses each time it comes back around.',
    markup: `<svg class="vl-svg-lighthouse-beam" viewBox="0 0 96 72" aria-hidden="true" focusable="false">
      <path class="vl-svg-lighthouse-beam-cone" d="M48 26L92 12V40Z" />
      <path class="vl-svg-lighthouse-beam-tower" d="M40 62L43 30H53L56 62Z" />
      <line class="vl-svg-lighthouse-beam-sea" x1="12" y1="62" x2="84" y2="62" />
      <circle class="vl-svg-lighthouse-beam-lamp" cx="48" cy="26" r="4" />
    </svg>`,
    css: `.vl-svg-lighthouse-beam { width: 86px; height: 66px; color: var(--loader-accent); overflow: visible; }
    .vl-svg-lighthouse-beam path, .vl-svg-lighthouse-beam line { fill: none; stroke: currentColor; stroke-linecap: round; stroke-linejoin: round; }
    .vl-svg-lighthouse-beam-tower { stroke-width: 2.4; opacity: .55; }
    .vl-svg-lighthouse-beam-sea { stroke-width: 2; opacity: .25; }
    .vl-svg-lighthouse-beam-lamp { fill: currentColor; stroke: none; transform-origin: 48px 26px; animation: vl-svg-lighthouse-beam-pulse calc(var(--loader-speed) * 2.4) ease-in-out infinite; }
    .vl-svg-lighthouse-beam-cone { fill: currentColor; stroke: none; opacity: .18; transform-origin: 48px 26px; animation: vl-svg-lighthouse-beam-sweep calc(var(--loader-speed) * 2.4) linear infinite; }
    @keyframes vl-svg-lighthouse-beam-sweep { 0% { transform: rotate(-34deg); opacity: .05; } 50% { transform: rotate(0deg); opacity: .28; } 100% { transform: rotate(34deg); opacity: .05; } }
    @keyframes vl-svg-lighthouse-beam-pulse { 0%, 100% { transform: scale(.85); opacity: .6; } 50% { transform: scale(1.25); opacity: 1; } }`
  },
  {
    id: 'svg-zipper-close',
    name: 'SVG Zipper Close',
    category: 'SVG',
    tech: 'Inline SVG',
    description: 'A slider runs up the track and the teeth interlock behind it, closing the seam.',
    markup: `<svg class="vl-svg-zipper-close" viewBox="0 0 96 72" aria-hidden="true" focusable="false">
      <g class="vl-svg-zipper-close-teeth">
        <line x1="40" y1="56" x2="48" y2="56" /><line x1="56" y1="52" x2="48" y2="52" />
        <line x1="40" y1="48" x2="48" y2="48" /><line x1="56" y1="44" x2="48" y2="44" />
        <line x1="40" y1="40" x2="48" y2="40" /><line x1="56" y1="36" x2="48" y2="36" />
        <line x1="40" y1="32" x2="48" y2="32" /><line x1="56" y1="28" x2="48" y2="28" />
        <line x1="40" y1="24" x2="48" y2="24" /><line x1="56" y1="20" x2="48" y2="20" />
      </g>
      <line class="vl-svg-zipper-close-seam" x1="48" y1="14" x2="48" y2="60" />
      <path class="vl-svg-zipper-close-slider" d="M42 0H54L51 8H45Z" />
    </svg>`,
    css: `.vl-svg-zipper-close { width: 86px; height: 66px; color: var(--loader-accent); overflow: visible; }
    .vl-svg-zipper-close line, .vl-svg-zipper-close path { fill: none; stroke: currentColor; stroke-linecap: round; stroke-linejoin: round; }
    .vl-svg-zipper-close-seam { stroke-width: 2; opacity: .2; }
    .vl-svg-zipper-close-slider { fill: currentColor; stroke: none; animation: vl-svg-zipper-close-run calc(var(--loader-speed) * 2.4) ease-in-out infinite; }
    .vl-svg-zipper-close-teeth line { stroke-width: 3; opacity: .18; animation: vl-svg-zipper-close-mesh calc(var(--loader-speed) * 2.4) ease-in-out infinite; }
    .vl-svg-zipper-close-teeth line:nth-child(1), .vl-svg-zipper-close-teeth line:nth-child(2) { animation-delay: calc(var(--loader-speed) * .1); }
    .vl-svg-zipper-close-teeth line:nth-child(3), .vl-svg-zipper-close-teeth line:nth-child(4) { animation-delay: calc(var(--loader-speed) * .3); }
    .vl-svg-zipper-close-teeth line:nth-child(5), .vl-svg-zipper-close-teeth line:nth-child(6) { animation-delay: calc(var(--loader-speed) * .5); }
    .vl-svg-zipper-close-teeth line:nth-child(7), .vl-svg-zipper-close-teeth line:nth-child(8) { animation-delay: calc(var(--loader-speed) * .7); }
    .vl-svg-zipper-close-teeth line:nth-child(9), .vl-svg-zipper-close-teeth line:nth-child(10) { animation-delay: calc(var(--loader-speed) * .9); }
    @keyframes vl-svg-zipper-close-run { 0% { transform: translateY(58px); } 55%, 70% { transform: translateY(16px); } 100% { transform: translateY(58px); } }
    @keyframes vl-svg-zipper-close-mesh { 0%, 100% { opacity: .15; } 45%, 70% { opacity: .95; } }`
  },
  {
    id: 'svg-anemometer-cups',
    name: 'SVG Anemometer Cups',
    category: 'SVG',
    tech: 'Inline SVG',
    description: 'Three cups spin on a weather-station head while a gust indicator swells and eases.',
    markup: `<svg class="vl-svg-anemometer-cups" viewBox="0 0 96 72" aria-hidden="true" focusable="false">
      <line class="vl-svg-anemometer-cups-mast" x1="48" y1="36" x2="48" y2="64" />
      <g class="vl-svg-anemometer-cups-head">
        <line x1="48" y1="36" x2="48" y2="16" />
        <line x1="48" y1="36" x2="65" y2="46" />
        <line x1="48" y1="36" x2="31" y2="46" />
        <circle cx="48" cy="14" r="5" />
        <circle cx="67" cy="47" r="5" />
        <circle cx="29" cy="47" r="5" />
      </g>
      <circle class="vl-svg-anemometer-cups-hub" cx="48" cy="36" r="3" />
    </svg>`,
    css: `.vl-svg-anemometer-cups { width: 86px; height: 66px; color: var(--loader-accent); overflow: visible; }
    .vl-svg-anemometer-cups line, .vl-svg-anemometer-cups circle { fill: none; stroke: currentColor; stroke-linecap: round; }
    .vl-svg-anemometer-cups-mast { stroke-width: 3; opacity: .45; }
    .vl-svg-anemometer-cups-hub { fill: currentColor; stroke: none; }
    .vl-svg-anemometer-cups-head line { stroke-width: 2.4; opacity: .6; }
    .vl-svg-anemometer-cups-head circle { stroke-width: 2.6; }
    .vl-svg-anemometer-cups-head { transform-origin: 48px 36px; animation: vl-svg-anemometer-cups-spin calc(var(--loader-speed) * 1.2) linear infinite, vl-svg-anemometer-cups-gust calc(var(--loader-speed) * 3) ease-in-out infinite; }
    @keyframes vl-svg-anemometer-cups-spin { to { transform: rotate(360deg); } }
    @keyframes vl-svg-anemometer-cups-gust { 0%, 100% { opacity: .6; } 50% { opacity: 1; } }`
  },
  {
    id: 'svg-hourglass-turn',
    name: 'SVG Hourglass Turn',
    category: 'SVG',
    tech: 'Inline SVG',
    description: 'Sand drains through the waist, then the whole glass flips over and the run begins again.',
    markup: `<svg class="vl-svg-hourglass-turn" viewBox="0 0 96 72" aria-hidden="true" focusable="false">
      <g class="vl-svg-hourglass-turn-body">
        <path class="vl-svg-hourglass-turn-frame" d="M32 12H64L48 36L64 60H32L48 36Z" />
        <path class="vl-svg-hourglass-turn-top" d="M36 16H60L48 34Z" />
        <path class="vl-svg-hourglass-turn-bottom" d="M36 56H60L48 38Z" />
        <line class="vl-svg-hourglass-turn-stream" x1="48" y1="34" x2="48" y2="52" />
        <line class="vl-svg-hourglass-turn-cap" x1="30" y1="12" x2="66" y2="12" />
        <line class="vl-svg-hourglass-turn-cap" x1="30" y1="60" x2="66" y2="60" />
      </g>
    </svg>`,
    css: `.vl-svg-hourglass-turn { width: 86px; height: 66px; color: var(--loader-accent); overflow: visible; }
    .vl-svg-hourglass-turn path, .vl-svg-hourglass-turn line { fill: none; stroke: currentColor; stroke-linecap: round; stroke-linejoin: round; }
    .vl-svg-hourglass-turn-frame { stroke-width: 2.6; opacity: .5; }
    .vl-svg-hourglass-turn-cap { stroke-width: 3; opacity: .7; }
    .vl-svg-hourglass-turn-top { fill: currentColor; stroke: none; transform-origin: 48px 16px; animation: vl-svg-hourglass-turn-drain calc(var(--loader-speed) * 3) linear infinite; }
    .vl-svg-hourglass-turn-bottom { fill: currentColor; stroke: none; transform-origin: 48px 56px; animation: vl-svg-hourglass-turn-fill calc(var(--loader-speed) * 3) linear infinite; }
    .vl-svg-hourglass-turn-stream { stroke-width: 2; stroke-dasharray: 3 4; animation: vl-svg-hourglass-turn-pour calc(var(--loader-speed) * .6) linear infinite; }
    .vl-svg-hourglass-turn-body { transform-origin: 48px 36px; animation: vl-svg-hourglass-turn-flip calc(var(--loader-speed) * 3) ease-in-out infinite; }
    @keyframes vl-svg-hourglass-turn-drain { 0% { transform: scaleY(1); opacity: .85; } 80%, 100% { transform: scaleY(.05); opacity: .3; } }
    @keyframes vl-svg-hourglass-turn-fill { 0% { transform: scaleY(.05); opacity: .3; } 80%, 100% { transform: scaleY(1); opacity: .85; } }
    @keyframes vl-svg-hourglass-turn-pour { to { stroke-dashoffset: -7; } }
    @keyframes vl-svg-hourglass-turn-flip { 0%, 82% { transform: rotate(0deg); } 96%, 100% { transform: rotate(180deg); } }`
  },
  {
    id: 'svg-domino-topple',
    name: 'SVG Domino Topple',
    category: 'SVG',
    tech: 'Inline SVG',
    description: 'A line of dominoes falls left to right, each one knocking over the next in sequence.',
    markup: `<svg class="vl-svg-domino-topple" viewBox="0 0 96 72" aria-hidden="true" focusable="false">
      <g class="vl-svg-domino-topple-row">
        <rect x="16" y="26" width="7" height="28" rx="1.5" />
        <rect x="29" y="26" width="7" height="28" rx="1.5" />
        <rect x="42" y="26" width="7" height="28" rx="1.5" />
        <rect x="55" y="26" width="7" height="28" rx="1.5" />
        <rect x="68" y="26" width="7" height="28" rx="1.5" />
      </g>
      <line class="vl-svg-domino-topple-floor" x1="10" y1="55" x2="86" y2="55" />
    </svg>`,
    css: `.vl-svg-domino-topple { width: 86px; height: 66px; color: var(--loader-accent); overflow: visible; }
    .vl-svg-domino-topple rect { fill: currentColor; fill-opacity: .78; stroke: currentColor; stroke-width: 1.4; }
    .vl-svg-domino-topple-floor { stroke: currentColor; stroke-width: 2; opacity: .25; stroke-linecap: round; }
    .vl-svg-domino-topple-row rect { transform-box: fill-box; transform-origin: bottom right; animation: vl-svg-domino-topple-fall calc(var(--loader-speed) * 2.6) ease-in-out infinite; }
    .vl-svg-domino-topple-row rect:nth-child(2) { animation-delay: calc(var(--loader-speed) * .18); }
    .vl-svg-domino-topple-row rect:nth-child(3) { animation-delay: calc(var(--loader-speed) * .36); }
    .vl-svg-domino-topple-row rect:nth-child(4) { animation-delay: calc(var(--loader-speed) * .54); }
    .vl-svg-domino-topple-row rect:nth-child(5) { animation-delay: calc(var(--loader-speed) * .72); }
    @keyframes vl-svg-domino-topple-fall { 0%, 8% { transform: rotate(0deg); } 32%, 78% { transform: rotate(72deg); } 92%, 100% { transform: rotate(0deg); } }`
  }
];
