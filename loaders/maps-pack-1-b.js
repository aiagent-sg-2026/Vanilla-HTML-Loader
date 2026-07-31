export const mapsPack1LoadersB = [
  {
    id: 'map-street-grid',
    name: 'Street Grid Draw',
    category: 'Maps',
    tech: 'Inline SVG',
    description: 'A street network draws itself block by block, with a highway inking in last.',
    markup: `<svg class="vl-map-street-grid" viewBox="0 0 116 76" aria-hidden="true" focusable="false">
      <g class="vl-map-street-grid-streets">
        <line x1="10" y1="22" x2="106" y2="22" />
        <line x1="10" y1="42" x2="106" y2="42" />
        <line x1="10" y1="62" x2="106" y2="62" />
        <line x1="30" y1="8" x2="30" y2="70" />
        <line x1="58" y1="8" x2="58" y2="70" />
        <line x1="86" y1="8" x2="86" y2="70" />
      </g>
      <path class="vl-map-street-grid-highway" d="M6 70L44 42L74 50L110 14" />
    </svg>`,
    css: `.vl-map-street-grid { width: 116px; height: 76px; color: var(--loader-accent); overflow: visible; }
.vl-map-street-grid line, .vl-map-street-grid path { fill: none; stroke: currentColor; stroke-linecap: round; stroke-linejoin: round; }
.vl-map-street-grid-streets line { stroke-width: 2.2; opacity: .3; stroke-dasharray: 100; stroke-dashoffset: 100; animation: vl-map-street-grid-ink calc(var(--loader-speed) * 2.8) ease-in-out infinite; }
.vl-map-street-grid-streets line:nth-child(2) { animation-delay: calc(var(--loader-speed) * .1); }
.vl-map-street-grid-streets line:nth-child(3) { animation-delay: calc(var(--loader-speed) * .2); }
.vl-map-street-grid-streets line:nth-child(4) { animation-delay: calc(var(--loader-speed) * .3); }
.vl-map-street-grid-streets line:nth-child(5) { animation-delay: calc(var(--loader-speed) * .4); }
.vl-map-street-grid-streets line:nth-child(6) { animation-delay: calc(var(--loader-speed) * .5); }
.vl-map-street-grid-highway { stroke-width: 4; stroke-dasharray: 150; stroke-dashoffset: 150; animation: vl-map-street-grid-route calc(var(--loader-speed) * 2.8) ease-in-out infinite; animation-delay: calc(var(--loader-speed) * .6); }
@keyframes vl-map-street-grid-ink { 0% { stroke-dashoffset: 100; } 45%, 80% { stroke-dashoffset: 0; } 100% { stroke-dashoffset: 100; } }
@keyframes vl-map-street-grid-route { 0% { stroke-dashoffset: 150; opacity: .3; } 45%, 80% { stroke-dashoffset: 0; opacity: 1; } 100% { stroke-dashoffset: 150; opacity: .3; } }`
  },
  {
    id: 'map-waypoint-hop',
    name: 'Waypoint Hop',
    category: 'Maps',
    tech: 'CSS',
    description: 'A marker hops from waypoint to waypoint, lighting each stop as it arrives.',
    markup: `<div class="vl-map-waypoint-hop" aria-hidden="true">
      <span></span><span></span><span></span><span></span>
      <b></b>
    </div>`,
    css: `.vl-map-waypoint-hop {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 108px;
  height: 44px;
}
.vl-map-waypoint-hop::before {
  content: '';
  position: absolute;
  left: 5px;
  right: 5px;
  top: 50%;
  height: 2px;
  margin-top: -1px;
  border-radius: 2px;
  background: var(--loader-accent);
  opacity: .18;
}
.vl-map-waypoint-hop span {
  position: relative;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--loader-accent);
  opacity: .22;
  animation: vl-map-waypoint-hop-reach calc(var(--loader-speed) * 2.8) ease-in-out infinite;
}
.vl-map-waypoint-hop span:nth-child(2) { animation-delay: calc(var(--loader-speed) * .7); }
.vl-map-waypoint-hop span:nth-child(3) { animation-delay: calc(var(--loader-speed) * 1.4); }
.vl-map-waypoint-hop span:nth-child(4) { animation-delay: calc(var(--loader-speed) * 2.1); }
.vl-map-waypoint-hop b {
  position: absolute;
  left: 0;
  top: 4px;
  width: 13px;
  height: 13px;
  border-radius: 50% 50% 50% 0;
  transform: rotate(-45deg);
  background: var(--loader-accent);
  animation: vl-map-waypoint-hop-jump calc(var(--loader-speed) * 2.8) ease-in-out infinite;
}
@keyframes vl-map-waypoint-hop-reach {
  0%, 100% { opacity: .2; transform: scale(1); }
  8% { opacity: 1; transform: scale(1.4); }
  25% { opacity: .55; transform: scale(1); }
}
@keyframes vl-map-waypoint-hop-jump {
  0%   { transform: translate(-2px, 0) rotate(-45deg); }
  12%  { transform: translate(14px, -12px) rotate(-45deg); }
  25%  { transform: translate(31px, 0) rotate(-45deg); }
  37%  { transform: translate(48px, -12px) rotate(-45deg); }
  50%  { transform: translate(64px, 0) rotate(-45deg); }
  62%  { transform: translate(80px, -12px) rotate(-45deg); }
  75%, 100% { transform: translate(96px, 0) rotate(-45deg); }
}`
  },
  {
    id: 'map-region-fill',
    name: 'Region Fill',
    category: 'Maps',
    tech: 'Inline SVG',
    description: 'A region outline draws itself and then floods with colour as its data arrives.',
    markup: `<svg class="vl-map-region-fill" viewBox="0 0 96 76" aria-hidden="true" focusable="false">
      <path class="vl-map-region-fill-shape" d="M18 26L34 12L58 16L78 30L72 52L52 64L28 58L14 44Z" />
      <path class="vl-map-region-fill-outline" d="M18 26L34 12L58 16L78 30L72 52L52 64L28 58L14 44Z" />
      <circle class="vl-map-region-fill-capital" cx="48" cy="38" r="4" />
    </svg>`,
    css: `.vl-map-region-fill { width: 96px; height: 76px; color: var(--loader-accent); overflow: visible; }
.vl-map-region-fill path { fill: none; stroke: currentColor; stroke-linejoin: round; stroke-linecap: round; }
.vl-map-region-fill-shape { fill: currentColor; stroke: none; transform-box: fill-box; transform-origin: bottom center; animation: vl-map-region-fill-flood calc(var(--loader-speed) * 2.6) ease-in-out infinite; }
.vl-map-region-fill-outline { stroke-width: 2.6; stroke-dasharray: 230; stroke-dashoffset: 230; animation: vl-map-region-fill-draw calc(var(--loader-speed) * 2.6) ease-in-out infinite; }
.vl-map-region-fill-capital { fill: currentColor; stroke: none; transform-origin: 48px 38px; animation: vl-map-region-fill-mark calc(var(--loader-speed) * 2.6) ease-in-out infinite; }
@keyframes vl-map-region-fill-draw { 0% { stroke-dashoffset: 230; } 45%, 85% { stroke-dashoffset: 0; } 100% { stroke-dashoffset: 230; } }
@keyframes vl-map-region-fill-flood { 0%, 40% { transform: scaleY(0); opacity: 0; } 70%, 85% { transform: scaleY(1); opacity: .22; } 100% { transform: scaleY(0); opacity: 0; } }
@keyframes vl-map-region-fill-mark { 0%, 55% { transform: scale(0); opacity: 0; } 68% { transform: scale(1.4); opacity: 1; } 80%, 100% { transform: scale(1); opacity: .8; } }`
  },
  {
    id: 'map-elevation-profile',
    name: 'Elevation Profile',
    category: 'Maps',
    tech: 'Inline SVG',
    description: 'A terrain profile rises under the route line while a hiker marker climbs the ridge.',
    markup: `<svg class="vl-map-elevation-profile" viewBox="0 0 116 76" aria-hidden="true" focusable="false">
      <line class="vl-map-elevation-profile-base" x1="10" y1="64" x2="108" y2="64" />
      <path class="vl-map-elevation-profile-terrain" d="M10 64L26 46L40 54L58 24L74 40L90 20L108 34V64Z" />
      <path class="vl-map-elevation-profile-ridge" d="M10 64L26 46L40 54L58 24L74 40L90 20L108 34" />
      <circle class="vl-map-elevation-profile-hiker" cx="0" cy="0" r="3.6" />
    </svg>`,
    css: `.vl-map-elevation-profile { width: 116px; height: 76px; color: var(--loader-accent); overflow: visible; }
.vl-map-elevation-profile path, .vl-map-elevation-profile line { fill: none; stroke: currentColor; stroke-linecap: round; stroke-linejoin: round; }
.vl-map-elevation-profile-base { stroke-width: 2; opacity: .3; }
.vl-map-elevation-profile-ridge { stroke-width: 2.8; stroke-dasharray: 150; stroke-dashoffset: 150; animation: vl-map-elevation-profile-draw calc(var(--loader-speed) * 2.6) ease-in-out infinite; }
.vl-map-elevation-profile-terrain { fill: currentColor; stroke: none; transform-box: fill-box; transform-origin: bottom center; animation: vl-map-elevation-profile-rise calc(var(--loader-speed) * 2.6) ease-in-out infinite; }
.vl-map-elevation-profile-hiker { fill: currentColor; stroke: none; animation: vl-map-elevation-profile-climb calc(var(--loader-speed) * 2.6) ease-in-out infinite; }
@keyframes vl-map-elevation-profile-draw { 0% { stroke-dashoffset: 150; } 62%, 86% { stroke-dashoffset: 0; } 100% { stroke-dashoffset: 150; } }
@keyframes vl-map-elevation-profile-rise { 0%, 100% { transform: scaleY(.04); opacity: .08; } 55%, 86% { transform: scaleY(1); opacity: .22; } }
@keyframes vl-map-elevation-profile-climb {
  0% { transform: translate(10px, 64px); opacity: 0; }
  10% { opacity: 1; }
  22% { transform: translate(26px, 46px); }
  34% { transform: translate(40px, 54px); }
  46% { transform: translate(58px, 24px); }
  54% { transform: translate(74px, 40px); }
  62%, 86% { transform: translate(108px, 34px); opacity: 1; }
  100% { transform: translate(108px, 34px); opacity: 0; }
}`
  },
  {
    id: 'map-layer-stack',
    name: 'Layer Stack',
    category: 'Maps',
    tech: 'CSS',
    description: 'Base, roads and labels slide into register one layer at a time as the map assembles.',
    markup: `<div class="vl-map-layer-stack" aria-hidden="true"><i></i><i></i><i></i></div>`,
    css: `.vl-map-layer-stack {
  position: relative;
  width: 100px;
  height: 76px;
}
.vl-map-layer-stack i {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 74px;
  height: 44px;
  margin: -22px 0 0 -37px;
  border-radius: 5px;
  border: 2px solid var(--loader-accent);
  background: color-mix(in srgb, var(--loader-accent) 10%, transparent);
  transform: rotate(-24deg) skewX(-12deg);
  animation: vl-map-layer-stack-settle calc(var(--loader-speed) * 2.4) ease-in-out infinite;
}
.vl-map-layer-stack i:nth-child(1) { --vl-ls-y: 16px; opacity: .35; }
.vl-map-layer-stack i:nth-child(2) { --vl-ls-y: 0px;  opacity: .6;  animation-delay: calc(var(--loader-speed) * .22); }
.vl-map-layer-stack i:nth-child(3) { --vl-ls-y: -16px; opacity: .9; animation-delay: calc(var(--loader-speed) * .44); }
@keyframes vl-map-layer-stack-settle {
  0%, 100% { transform: rotate(-24deg) skewX(-12deg) translate(0, calc(var(--vl-ls-y) + 26px)); opacity: 0; }
  30%, 76% { transform: rotate(-24deg) skewX(-12deg) translate(0, var(--vl-ls-y)); }
  30% { opacity: 1; }
  76% { opacity: 1; }
}`
  }
];
