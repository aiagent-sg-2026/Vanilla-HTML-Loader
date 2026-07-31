export const svgPack11LoadersA = [
  {
    id: 'svg-escalator-steps',
    name: 'SVG Escalator Steps',
    category: 'SVG',
    tech: 'Inline SVG',
    description: 'Steps rise along the incline and flatten out at the landing before cycling back.',
    markup: `<svg class="vl-svg-escalator-steps" viewBox="0 0 96 72" aria-hidden="true" focusable="false">
      <path class="vl-svg-escalator-steps-rail" d="M12 60L60 18H86" />
      <path class="vl-svg-escalator-steps-rail" d="M12 66L64 24H86" />
      <g class="vl-svg-escalator-steps-run">
        <rect x="0" y="0" width="12" height="4" rx="1" />
        <rect x="0" y="0" width="12" height="4" rx="1" />
        <rect x="0" y="0" width="12" height="4" rx="1" />
        <rect x="0" y="0" width="12" height="4" rx="1" />
      </g>
    </svg>`,
    css: `.vl-svg-escalator-steps { width: 86px; height: 66px; color: var(--loader-accent); overflow: visible; }
    .vl-svg-escalator-steps path { fill: none; stroke: currentColor; stroke-width: 2.4; stroke-linecap: round; stroke-linejoin: round; opacity: .35; }
    .vl-svg-escalator-steps-run rect { fill: currentColor; fill-opacity: .85; animation: vl-svg-escalator-steps-climb calc(var(--loader-speed) * 2.4) linear infinite; }
    .vl-svg-escalator-steps-run rect:nth-child(2) { animation-delay: calc(var(--loader-speed) * -.6); }
    .vl-svg-escalator-steps-run rect:nth-child(3) { animation-delay: calc(var(--loader-speed) * -1.2); }
    .vl-svg-escalator-steps-run rect:nth-child(4) { animation-delay: calc(var(--loader-speed) * -1.8); }
    @keyframes vl-svg-escalator-steps-climb {
      0%   { transform: translate(14px, 58px); opacity: 0; }
      12%  { opacity: 1; }
      62%  { transform: translate(58px, 20px); opacity: 1; }
      88%  { transform: translate(80px, 20px); opacity: 1; }
      100% { transform: translate(86px, 20px); opacity: 0; }
    }`
  },
  {
    id: 'svg-windmill-sails',
    name: 'SVG Windmill Sails',
    category: 'SVG',
    tech: 'Inline SVG',
    description: 'Four latticed sails turn steadily on a stone tower, catching a slow steady wind.',
    markup: `<svg class="vl-svg-windmill-sails" viewBox="0 0 96 72" aria-hidden="true" focusable="false">
      <path class="vl-svg-windmill-sails-tower" d="M40 64L44 34H56L60 64Z" />
      <line class="vl-svg-windmill-sails-ground" x1="30" y1="64" x2="70" y2="64" />
      <g class="vl-svg-windmill-sails-blades">
        <g class="vl-svg-windmill-sails-blade"><rect x="48" y="6" width="4" height="22" rx="1" /><line x1="50" y1="10" x2="50" y2="26" /></g>
        <g class="vl-svg-windmill-sails-blade" transform="rotate(90 50 30)"><rect x="48" y="6" width="4" height="22" rx="1" /><line x1="50" y1="10" x2="50" y2="26" /></g>
        <g class="vl-svg-windmill-sails-blade" transform="rotate(180 50 30)"><rect x="48" y="6" width="4" height="22" rx="1" /><line x1="50" y1="10" x2="50" y2="26" /></g>
        <g class="vl-svg-windmill-sails-blade" transform="rotate(270 50 30)"><rect x="48" y="6" width="4" height="22" rx="1" /><line x1="50" y1="10" x2="50" y2="26" /></g>
      </g>
      <circle class="vl-svg-windmill-sails-hub" cx="50" cy="30" r="3.5" />
    </svg>`,
    css: `.vl-svg-windmill-sails { width: 86px; height: 66px; color: var(--loader-accent); overflow: visible; }
    .vl-svg-windmill-sails path, .vl-svg-windmill-sails line { fill: none; stroke: currentColor; stroke-linecap: round; stroke-linejoin: round; }
    .vl-svg-windmill-sails-tower { stroke-width: 2.6; opacity: .5; }
    .vl-svg-windmill-sails-ground { stroke-width: 2.6; opacity: .3; }
    .vl-svg-windmill-sails-hub { fill: currentColor; stroke: none; }
    .vl-svg-windmill-sails-blade rect { fill: currentColor; fill-opacity: .28; stroke: currentColor; stroke-width: 1.4; }
    .vl-svg-windmill-sails-blade line { stroke-width: 1.2; opacity: .6; stroke-dasharray: 2 3; }
    .vl-svg-windmill-sails-blades { transform-origin: 50px 30px; animation: vl-svg-windmill-sails-turn calc(var(--loader-speed) * 2.8) linear infinite; }
    @keyframes vl-svg-windmill-sails-turn { to { transform: rotate(360deg); } }`
  },
  {
    id: 'svg-film-reel',
    name: 'SVG Film Reel',
    category: 'SVG',
    tech: 'Inline SVG',
    description: 'Two reels turn while the film strip runs between them, its sprocket holes ticking past.',
    markup: `<svg class="vl-svg-film-reel" viewBox="0 0 96 72" aria-hidden="true" focusable="false">
      <g class="vl-svg-film-reel-left">
        <circle cx="24" cy="24" r="14" />
        <line x1="24" y1="12" x2="24" y2="36" />
        <line x1="14" y1="18" x2="34" y2="30" />
        <line x1="14" y1="30" x2="34" y2="18" />
      </g>
      <g class="vl-svg-film-reel-right">
        <circle cx="72" cy="24" r="14" />
        <line x1="72" y1="12" x2="72" y2="36" />
        <line x1="62" y1="18" x2="82" y2="30" />
        <line x1="62" y1="30" x2="82" y2="18" />
      </g>
      <rect class="vl-svg-film-reel-strip" x="14" y="48" width="68" height="14" rx="2" />
      <line class="vl-svg-film-reel-perf" x1="16" y1="51" x2="80" y2="51" />
      <line class="vl-svg-film-reel-perf" x1="16" y1="59" x2="80" y2="59" />
    </svg>`,
    css: `.vl-svg-film-reel { width: 86px; height: 66px; color: var(--loader-accent); overflow: visible; }
    .vl-svg-film-reel circle, .vl-svg-film-reel line, .vl-svg-film-reel rect { fill: none; stroke: currentColor; stroke-linecap: round; }
    .vl-svg-film-reel-left circle, .vl-svg-film-reel-right circle { stroke-width: 2.4; opacity: .6; }
    .vl-svg-film-reel-left line, .vl-svg-film-reel-right line { stroke-width: 1.8; opacity: .4; }
    .vl-svg-film-reel-strip { stroke-width: 2.2; opacity: .5; }
    .vl-svg-film-reel-perf { stroke-width: 2.6; stroke-dasharray: 3 5; opacity: .8; animation: vl-svg-film-reel-run calc(var(--loader-speed) * .8) linear infinite; }
    .vl-svg-film-reel-left { transform-origin: 24px 24px; animation: vl-svg-film-reel-spin calc(var(--loader-speed) * 2) linear infinite; }
    .vl-svg-film-reel-right { transform-origin: 72px 24px; animation: vl-svg-film-reel-spin calc(var(--loader-speed) * 2) linear infinite; }
    @keyframes vl-svg-film-reel-spin { to { transform: rotate(360deg); } }
    @keyframes vl-svg-film-reel-run { to { stroke-dashoffset: -8; } }`
  },
  {
    id: 'svg-telescope-focus',
    name: 'SVG Telescope Focus',
    category: 'SVG',
    tech: 'Inline SVG',
    description: 'Focus rings draw inward until a blurred point resolves into a sharp bright star.',
    markup: `<svg class="vl-svg-telescope-focus" viewBox="0 0 96 72" aria-hidden="true" focusable="false">
      <g class="vl-svg-telescope-focus-rings">
        <circle cx="48" cy="36" r="26" />
        <circle cx="48" cy="36" r="26" />
        <circle cx="48" cy="36" r="26" />
      </g>
      <g class="vl-svg-telescope-focus-ticks">
        <line x1="48" y1="6" x2="48" y2="12" />
        <line x1="48" y1="60" x2="48" y2="66" />
        <line x1="18" y1="36" x2="24" y2="36" />
        <line x1="72" y1="36" x2="78" y2="36" />
      </g>
      <path class="vl-svg-telescope-focus-star" d="M48 26L51 33L58 36L51 39L48 46L45 39L38 36L45 33Z" />
    </svg>`,
    css: `.vl-svg-telescope-focus { width: 86px; height: 66px; color: var(--loader-accent); overflow: visible; }
    .vl-svg-telescope-focus circle, .vl-svg-telescope-focus line { fill: none; stroke: currentColor; stroke-linecap: round; }
    .vl-svg-telescope-focus-ticks line { stroke-width: 2; opacity: .35; }
    .vl-svg-telescope-focus-rings circle { stroke-width: 2; transform-origin: 48px 36px; animation: vl-svg-telescope-focus-close calc(var(--loader-speed) * 2.6) ease-in-out infinite; }
    .vl-svg-telescope-focus-rings circle:nth-child(2) { animation-delay: calc(var(--loader-speed) * -.4); }
    .vl-svg-telescope-focus-rings circle:nth-child(3) { animation-delay: calc(var(--loader-speed) * -.8); }
    .vl-svg-telescope-focus-star { fill: currentColor; stroke: none; transform-origin: 48px 36px; animation: vl-svg-telescope-focus-sharpen calc(var(--loader-speed) * 2.6) ease-in-out infinite; }
    @keyframes vl-svg-telescope-focus-close { 0% { transform: scale(1); opacity: .05; } 45% { opacity: .6; } 100% { transform: scale(.28); opacity: 0; } }
    @keyframes vl-svg-telescope-focus-sharpen { 0%, 100% { transform: scale(1.5); opacity: .3; } 55% { transform: scale(1); opacity: 1; } }`
  },
  {
    id: 'svg-pulley-hoist',
    name: 'SVG Pulley Hoist',
    category: 'SVG',
    tech: 'Inline SVG',
    description: 'Rope runs over two pulleys as a counterweight drops and the load climbs the other side.',
    markup: `<svg class="vl-svg-pulley-hoist" viewBox="0 0 96 72" aria-hidden="true" focusable="false">
      <line class="vl-svg-pulley-hoist-beam" x1="16" y1="10" x2="80" y2="10" />
      <g class="vl-svg-pulley-hoist-wheel"><circle cx="30" cy="16" r="6" /></g>
      <g class="vl-svg-pulley-hoist-wheel vl-svg-pulley-hoist-wheel-b"><circle cx="66" cy="16" r="6" /></g>
      <path class="vl-svg-pulley-hoist-rope" d="M24 16V44M36 12H60M72 16V44" />
      <rect class="vl-svg-pulley-hoist-load" x="16" y="44" width="16" height="12" rx="2" />
      <rect class="vl-svg-pulley-hoist-weight" x="64" y="44" width="16" height="12" rx="2" />
    </svg>`,
    css: `.vl-svg-pulley-hoist { width: 86px; height: 66px; color: var(--loader-accent); overflow: visible; }
    .vl-svg-pulley-hoist line, .vl-svg-pulley-hoist circle, .vl-svg-pulley-hoist path, .vl-svg-pulley-hoist rect { fill: none; stroke: currentColor; stroke-linecap: round; }
    .vl-svg-pulley-hoist-beam { stroke-width: 3; opacity: .5; }
    .vl-svg-pulley-hoist-wheel circle { stroke-width: 2.4; opacity: .7; }
    .vl-svg-pulley-hoist-rope { stroke-width: 1.8; opacity: .55; }
    .vl-svg-pulley-hoist-load { fill: currentColor; fill-opacity: .85; stroke-width: 1.6; animation: vl-svg-pulley-hoist-up calc(var(--loader-speed) * 2.6) ease-in-out infinite; }
    .vl-svg-pulley-hoist-weight { fill: currentColor; fill-opacity: .35; stroke-width: 1.6; animation: vl-svg-pulley-hoist-down calc(var(--loader-speed) * 2.6) ease-in-out infinite; }
    .vl-svg-pulley-hoist-wheel { transform-origin: 30px 16px; animation: vl-svg-pulley-hoist-roll calc(var(--loader-speed) * 2.6) ease-in-out infinite; }
    .vl-svg-pulley-hoist-wheel-b { transform-origin: 66px 16px; }
    @keyframes vl-svg-pulley-hoist-up { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-24px); } }
    @keyframes vl-svg-pulley-hoist-down { 0%, 100% { transform: translateY(-24px); } 50% { transform: translateY(0); } }
    @keyframes vl-svg-pulley-hoist-roll { 0%, 100% { transform: rotate(0deg); } 50% { transform: rotate(200deg); } }`
  }
];
