export const svgPack11LoadersB = [
  {
    id: 'svg-traffic-signal',
    name: 'SVG Traffic Signal',
    category: 'SVG',
    tech: 'Inline SVG',
    description: 'A signal head cycles red, amber and green, one lamp lit at a time on its post.',
    markup: `<svg class="vl-svg-traffic-signal" viewBox="0 0 96 72" aria-hidden="true" focusable="false">
      <rect class="vl-svg-traffic-signal-case" x="36" y="6" width="24" height="46" rx="5" />
      <line class="vl-svg-traffic-signal-post" x1="48" y1="52" x2="48" y2="66" />
      <line class="vl-svg-traffic-signal-base" x1="38" y1="66" x2="58" y2="66" />
      <g class="vl-svg-traffic-signal-lamps">
        <circle cx="48" cy="17" r="5.5" />
        <circle cx="48" cy="29" r="5.5" />
        <circle cx="48" cy="41" r="5.5" />
      </g>
    </svg>`,
    css: `.vl-svg-traffic-signal { width: 86px; height: 66px; color: var(--loader-accent); overflow: visible; }
    .vl-svg-traffic-signal rect, .vl-svg-traffic-signal line, .vl-svg-traffic-signal circle { fill: none; stroke: currentColor; stroke-linecap: round; }
    .vl-svg-traffic-signal-case { stroke-width: 2.4; opacity: .45; }
    .vl-svg-traffic-signal-post { stroke-width: 3; opacity: .45; }
    .vl-svg-traffic-signal-base { stroke-width: 3; opacity: .3; }
    .vl-svg-traffic-signal-lamps circle { fill: currentColor; stroke: none; opacity: .16; transform-box: fill-box; transform-origin: center; animation: vl-svg-traffic-signal-cycle calc(var(--loader-speed) * 3) steps(1, end) infinite; }
    .vl-svg-traffic-signal-lamps circle:nth-child(2) { animation-delay: calc(var(--loader-speed) * 1); }
    .vl-svg-traffic-signal-lamps circle:nth-child(3) { animation-delay: calc(var(--loader-speed) * 2); }
    @keyframes vl-svg-traffic-signal-cycle { 0% { opacity: 1; transform: scale(1.12); } 33%, 100% { opacity: .16; transform: scale(1); } }`
  },
  {
    id: 'svg-bubble-level',
    name: 'SVG Bubble Level',
    category: 'SVG',
    tech: 'Inline SVG',
    description: 'The vial tilts left and right and the bubble drifts until it settles between the marks.',
    markup: `<svg class="vl-svg-bubble-level" viewBox="0 0 96 72" aria-hidden="true" focusable="false">
      <g class="vl-svg-bubble-level-body">
        <rect class="vl-svg-bubble-level-frame" x="12" y="26" width="72" height="20" rx="6" />
        <rect class="vl-svg-bubble-level-vial" x="30" y="31" width="36" height="10" rx="5" />
        <line class="vl-svg-bubble-level-mark" x1="42" y1="29" x2="42" y2="43" />
        <line class="vl-svg-bubble-level-mark" x1="54" y1="29" x2="54" y2="43" />
        <circle class="vl-svg-bubble-level-bubble" cx="48" cy="36" r="4" />
      </g>
    </svg>`,
    css: `.vl-svg-bubble-level { width: 86px; height: 66px; color: var(--loader-accent); overflow: visible; }
    .vl-svg-bubble-level rect, .vl-svg-bubble-level line, .vl-svg-bubble-level circle { fill: none; stroke: currentColor; stroke-linecap: round; }
    .vl-svg-bubble-level-frame { stroke-width: 2.6; opacity: .55; }
    .vl-svg-bubble-level-vial { stroke-width: 1.8; opacity: .3; fill: currentColor; fill-opacity: .08; }
    .vl-svg-bubble-level-mark { stroke-width: 1.8; opacity: .4; }
    .vl-svg-bubble-level-bubble { fill: currentColor; stroke: none; animation: vl-svg-bubble-level-drift calc(var(--loader-speed) * 3) ease-in-out infinite; }
    .vl-svg-bubble-level-body { transform-origin: 48px 36px; animation: vl-svg-bubble-level-tilt calc(var(--loader-speed) * 3) ease-in-out infinite; }
    @keyframes vl-svg-bubble-level-tilt { 0%, 100% { transform: rotate(0deg); } 25% { transform: rotate(-9deg); } 60% { transform: rotate(7deg); } 85% { transform: rotate(0deg); } }
    @keyframes vl-svg-bubble-level-drift { 0%, 100% { transform: translateX(0); } 25% { transform: translateX(-11px); } 60% { transform: translateX(9px); } 85% { transform: translateX(0); } }`
  },
  {
    id: 'svg-ink-diffuse',
    name: 'SVG Ink Diffuse',
    category: 'SVG',
    tech: 'Inline SVG',
    description: 'A drop lands on the surface and its ink blooms outward in softening rings.',
    markup: `<svg class="vl-svg-ink-diffuse" viewBox="0 0 96 72" aria-hidden="true" focusable="false">
      <circle class="vl-svg-ink-diffuse-drop" cx="48" cy="10" r="3.4" />
      <g class="vl-svg-ink-diffuse-blooms">
        <circle cx="48" cy="42" r="9" />
        <circle cx="48" cy="42" r="9" />
        <circle cx="48" cy="42" r="9" />
      </g>
      <line class="vl-svg-ink-diffuse-surface" x1="14" y1="42" x2="82" y2="42" />
      <circle class="vl-svg-ink-diffuse-core" cx="48" cy="42" r="4" />
    </svg>`,
    css: `.vl-svg-ink-diffuse { width: 86px; height: 66px; color: var(--loader-accent); overflow: visible; }
    .vl-svg-ink-diffuse circle, .vl-svg-ink-diffuse line { fill: none; stroke: currentColor; }
    .vl-svg-ink-diffuse-surface { stroke-width: 1.8; opacity: .22; stroke-linecap: round; }
    .vl-svg-ink-diffuse-drop { fill: currentColor; stroke: none; animation: vl-svg-ink-diffuse-fall calc(var(--loader-speed) * 2.2) cubic-bezier(.5, 0, .9, 1) infinite; }
    .vl-svg-ink-diffuse-core { fill: currentColor; stroke: none; transform-origin: 48px 42px; animation: vl-svg-ink-diffuse-soak calc(var(--loader-speed) * 2.2) ease-out infinite; }
    .vl-svg-ink-diffuse-blooms circle { stroke-width: 2.2; fill: currentColor; fill-opacity: .06; transform-origin: 48px 42px; animation: vl-svg-ink-diffuse-bloom calc(var(--loader-speed) * 2.2) ease-out infinite; }
    .vl-svg-ink-diffuse-blooms circle:nth-child(2) { animation-delay: calc(var(--loader-speed) * .18); }
    .vl-svg-ink-diffuse-blooms circle:nth-child(3) { animation-delay: calc(var(--loader-speed) * .36); }
    @keyframes vl-svg-ink-diffuse-fall { 0% { transform: translateY(0) scale(1); opacity: 0; } 10% { opacity: 1; } 42% { transform: translateY(28px) scale(.8); opacity: 1; } 48%, 100% { transform: translateY(30px) scale(.4); opacity: 0; } }
    @keyframes vl-svg-ink-diffuse-bloom { 0%, 45% { transform: scale(.2); opacity: 0; } 55% { opacity: .8; } 100% { transform: scale(2.6); opacity: 0; } }
    @keyframes vl-svg-ink-diffuse-soak { 0%, 45% { transform: scale(0); opacity: 0; } 60% { transform: scale(1.2); opacity: .9; } 100% { transform: scale(.6); opacity: .2; } }`
  },
  {
    id: 'svg-rocket-ascent',
    name: 'SVG Rocket Ascent',
    category: 'SVG',
    tech: 'Inline SVG',
    description: 'A rocket climbs out of frame on a pulsing exhaust plume, trailing sparks behind it.',
    markup: `<svg class="vl-svg-rocket-ascent" viewBox="0 0 96 72" aria-hidden="true" focusable="false">
      <g class="vl-svg-rocket-ascent-craft">
        <path class="vl-svg-rocket-ascent-body" d="M48 6C56 16 58 28 58 38H38C38 28 40 16 48 6Z" />
        <path class="vl-svg-rocket-ascent-fin" d="M38 30L30 44H38Z" />
        <path class="vl-svg-rocket-ascent-fin" d="M58 30L66 44H58Z" />
        <circle class="vl-svg-rocket-ascent-port" cx="48" cy="24" r="4" />
        <path class="vl-svg-rocket-ascent-flame" d="M42 38Q48 56 54 38Z" />
      </g>
      <g class="vl-svg-rocket-ascent-sparks">
        <circle cx="42" cy="56" r="1.8" />
        <circle cx="54" cy="60" r="1.5" />
        <circle cx="48" cy="64" r="1.6" />
      </g>
    </svg>`,
    css: `.vl-svg-rocket-ascent { width: 86px; height: 66px; color: var(--loader-accent); overflow: visible; }
    .vl-svg-rocket-ascent path, .vl-svg-rocket-ascent circle { fill: none; stroke: currentColor; stroke-linejoin: round; stroke-linecap: round; }
    .vl-svg-rocket-ascent-body { stroke-width: 2.4; fill: currentColor; fill-opacity: .12; }
    .vl-svg-rocket-ascent-fin { stroke-width: 2; fill: currentColor; fill-opacity: .3; }
    .vl-svg-rocket-ascent-port { stroke-width: 2; opacity: .7; }
    .vl-svg-rocket-ascent-flame { fill: currentColor; stroke: none; transform-box: fill-box; transform-origin: top center; animation: vl-svg-rocket-ascent-burn calc(var(--loader-speed) * .35) ease-in-out infinite; }
    .vl-svg-rocket-ascent-craft { animation: vl-svg-rocket-ascent-lift calc(var(--loader-speed) * 2.6) ease-in-out infinite; }
    .vl-svg-rocket-ascent-sparks circle { fill: currentColor; stroke: none; animation: vl-svg-rocket-ascent-spark calc(var(--loader-speed) * 1.3) ease-out infinite; }
    .vl-svg-rocket-ascent-sparks circle:nth-child(2) { animation-delay: calc(var(--loader-speed) * -.43); }
    .vl-svg-rocket-ascent-sparks circle:nth-child(3) { animation-delay: calc(var(--loader-speed) * -.86); }
    @keyframes vl-svg-rocket-ascent-lift { 0%, 100% { transform: translateY(6px); } 50% { transform: translateY(-6px); } }
    @keyframes vl-svg-rocket-ascent-burn { 0%, 100% { transform: scaleY(.7); opacity: .55; } 50% { transform: scaleY(1.25); opacity: 1; } }
    @keyframes vl-svg-rocket-ascent-spark { 0% { transform: translateY(-8px); opacity: .9; } 100% { transform: translateY(10px); opacity: 0; } }`
  },
  {
    id: 'svg-page-flip',
    name: 'SVG Page Flip',
    category: 'SVG',
    tech: 'Inline SVG',
    description: 'Pages turn one after another across the spine of an open book.',
    markup: `<svg class="vl-svg-page-flip" viewBox="0 0 96 72" aria-hidden="true" focusable="false">
      <path class="vl-svg-page-flip-leaf" d="M48 16Q30 12 16 18V54Q30 48 48 54Z" />
      <path class="vl-svg-page-flip-leaf" d="M48 16Q66 12 80 18V54Q66 48 48 54Z" />
      <g class="vl-svg-page-flip-turn">
        <path d="M48 16Q66 12 80 18V54Q66 48 48 54Z" />
        <path d="M48 16Q66 12 80 18V54Q66 48 48 54Z" />
      </g>
      <line class="vl-svg-page-flip-spine" x1="48" y1="14" x2="48" y2="56" />
    </svg>`,
    css: `.vl-svg-page-flip { width: 86px; height: 66px; color: var(--loader-accent); overflow: visible; }
    .vl-svg-page-flip path, .vl-svg-page-flip line { fill: none; stroke: currentColor; stroke-width: 2.2; stroke-linejoin: round; stroke-linecap: round; }
    .vl-svg-page-flip-leaf { fill: currentColor; fill-opacity: .1; opacity: .8; }
    .vl-svg-page-flip-spine { stroke-width: 2.6; opacity: .6; }
    .vl-svg-page-flip-turn path { fill: currentColor; fill-opacity: .22; transform-origin: 48px 35px; animation: vl-svg-page-flip-over calc(var(--loader-speed) * 2.4) ease-in-out infinite; }
    .vl-svg-page-flip-turn path:nth-child(2) { animation-delay: calc(var(--loader-speed) * -1.2); }
    @keyframes vl-svg-page-flip-over {
      0%   { transform: rotateY(0deg); opacity: 0; }
      12%  { opacity: 1; }
      88%  { opacity: 1; }
      100% { transform: rotateY(-180deg); opacity: 0; }
    }`
  }
];
