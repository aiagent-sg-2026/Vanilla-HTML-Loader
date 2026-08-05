import { holographicPack2Loaders } from './holographic-pack-2.js';

const baseLoaders = [
  {
    id: 'holographic-data-core',
    name: 'Holographic Data Core',
    category: 'Holographic',
    tech: 'Inline SVG + CSS 3D',
    description: 'Counter-rotating holographic rings, scanning beams, and a pulsing central core create a cinematic processing display.',
    markup: `<div class="vl-holo-core" role="img" aria-label="Holographic data core processing">
  <svg viewBox="0 0 190 108" aria-hidden="true">
    <g class="vl-holo-grid">
      <path d="M42 74H148M50 82H140M58 90H132"></path>
      <path d="M62 66L48 92M82 66L74 92M108 66L116 92M128 66L142 92"></path>
    </g>
    <g class="vl-holo-ring vl-holo-ring-a">
      <ellipse cx="95" cy="50" rx="52" ry="20"></ellipse>
      <path d="M43 50h12M135 50h12"></path>
    </g>
    <g class="vl-holo-ring vl-holo-ring-b">
      <ellipse cx="95" cy="50" rx="37" ry="37"></ellipse>
      <path d="M95 13v10M95 77v10"></path>
    </g>
    <g class="vl-holo-ring vl-holo-ring-c">
      <ellipse cx="95" cy="50" rx="25" ry="10"></ellipse>
      <path d="M70 50h7M113 50h7"></path>
    </g>
    <circle class="vl-holo-orbit-dot" cx="43" cy="50" r="3"></circle>
    <circle class="vl-holo-orbit-dot vl-holo-orbit-dot-b" cx="95" cy="13" r="2.4"></circle>
    <circle class="vl-holo-orb" cx="95" cy="50" r="10"></circle>
    <circle class="vl-holo-orb-core" cx="95" cy="50" r="3.6"></circle>
    <path class="vl-holo-scan" d="M54 29H136"></path>
  </svg>
  <span class="vl-holo-caption">CORE SYNC</span>
</div>`,
    css: `.vl-holo-core {
  position: relative;
  width: 190px;
  height: 108px;
  overflow: hidden;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 34%, #12243e);
  border-radius: 14px;
  color: var(--loader-accent);
  background:
    radial-gradient(ellipse at 50% 48%, color-mix(in srgb, var(--loader-accent) 20%, transparent), transparent 38%),
    linear-gradient(155deg, #06101d, #0a1729 64%, #030810);
  box-shadow: inset 0 0 32px rgba(0, 0, 0, .64), 0 10px 24px rgba(2, 8, 23, .24);
  perspective: 420px;
}
.vl-holo-core::before {
  content: '';
  position: absolute;
  inset: 0;
  opacity: .22;
  background-image: linear-gradient(color-mix(in srgb, var(--loader-accent) 18%, transparent) 1px, transparent 1px);
  background-size: 100% 8px;
}
.vl-holo-core svg { position: absolute; inset: 0; width: 100%; height: 100%; overflow: visible; }
.vl-holo-grid { fill: none; stroke: color-mix(in srgb, var(--loader-accent) 30%, transparent); stroke-width: .8; }
.vl-holo-ring { fill: none; stroke: color-mix(in srgb, var(--loader-accent) 78%, white 22%); stroke-width: 1.2; stroke-linecap: round; transform-box: fill-box; transform-origin: center; filter: drop-shadow(0 0 4px color-mix(in srgb, var(--loader-accent) 55%, transparent)); }
.vl-holo-ring-a { animation: vl-holo-spin-a calc(var(--loader-speed) * 1.7) linear infinite; }
.vl-holo-ring-b { stroke-dasharray: 8 5; animation: vl-holo-spin-b calc(var(--loader-speed) * 1.35) linear infinite reverse; }
.vl-holo-ring-c { stroke-width: 2.1; animation: vl-holo-tilt calc(var(--loader-speed) * 1.15) ease-in-out infinite; }
.vl-holo-orbit-dot { fill: color-mix(in srgb, var(--loader-accent) 80%, white 20%); filter: drop-shadow(0 0 5px var(--loader-accent)); animation: vl-holo-dot calc(var(--loader-speed) * .8) ease-in-out infinite; }
.vl-holo-orbit-dot-b { animation-delay: calc(var(--loader-speed) * -.55); }
.vl-holo-orb { fill: color-mix(in srgb, var(--loader-accent) 18%, transparent); stroke: color-mix(in srgb, var(--loader-accent) 86%, white 14%); stroke-width: 1.2; filter: drop-shadow(0 0 8px color-mix(in srgb, var(--loader-accent) 70%, transparent)); animation: vl-holo-orb calc(var(--loader-speed) * .85) ease-in-out infinite; }
.vl-holo-orb-core { fill: color-mix(in srgb, var(--loader-accent) 80%, white 20%); filter: drop-shadow(0 0 8px var(--loader-accent)); }
.vl-holo-scan { fill: none; stroke: color-mix(in srgb, var(--loader-accent) 78%, white 22%); stroke-width: 1.2; stroke-linecap: round; filter: drop-shadow(0 0 5px var(--loader-accent)); animation: vl-holo-scan calc(var(--loader-speed) * .95) ease-in-out infinite; }
.vl-holo-caption { position: absolute; right: 10px; bottom: 7px; color: color-mix(in srgb, var(--loader-accent) 80%, white 20%); font: 800 7px/1 system-ui, sans-serif; letter-spacing: .17em; }
@keyframes vl-holo-spin-a { to { transform: rotate(360deg); } }
@keyframes vl-holo-spin-b { to { transform: rotate(360deg); } }
@keyframes vl-holo-tilt { 50% { transform: rotate(180deg) scaleX(1.45) scaleY(.72); opacity: .5; } }
@keyframes vl-holo-dot { 0%, 100% { opacity: .2; transform: scale(.65); } 50% { opacity: 1; transform: scale(1.55); } }
@keyframes vl-holo-orb { 0%, 100% { transform: scale(.82); opacity: .48; } 50% { transform: scale(1.55); opacity: 1; } }
@keyframes vl-holo-scan { 0% { transform: translateY(-22px) scaleX(.58); opacity: 0; } 12% { opacity: 1; } 50% { transform: translateY(26px) scaleX(1.08); opacity: .92; } 88% { opacity: .8; } 100% { transform: translateY(62px) scaleX(.58); opacity: 0; } }
@media (prefers-reduced-motion: reduce) {
  .vl-holo-ring, .vl-holo-orbit-dot, .vl-holo-orb, .vl-holo-scan { animation-play-state: paused; }
}`
  },
  {
    id: 'neural-matrix-pulse',
    name: 'Neural Matrix Pulse',
    category: 'Holographic',
    tech: 'Inline SVG + CSS',
    description: 'A perspective neural lattice sends luminous signals through connected nodes for AI and inference workflows.',
    markup: `<div class="vl-neural-matrix" role="img" aria-label="Neural matrix processing signals">
  <svg viewBox="0 0 190 108" aria-hidden="true">
    <g class="vl-neural-plane">
      <g class="vl-neural-links">
        <path d="M34 32L72 22L104 34L148 24"></path>
        <path d="M34 32L54 58L92 52L132 62L148 24"></path>
        <path d="M54 58L40 82L82 84L132 62L154 86"></path>
        <path d="M72 22L92 52L82 84"></path>
        <path d="M104 34L92 52L132 62"></path>
        <path d="M40 82L92 52L154 86"></path>
      </g>
      <g class="vl-neural-signal">
        <path d="M34 32L72 22L104 34L148 24"></path>
        <path d="M54 58L92 52L132 62L154 86"></path>
        <path d="M40 82L92 52L104 34"></path>
      </g>
      <g class="vl-neural-nodes">
        <circle cx="34" cy="32" r="3.6" style="--d:0"></circle>
        <circle cx="72" cy="22" r="3.6" style="--d:1"></circle>
        <circle cx="104" cy="34" r="3.6" style="--d:2"></circle>
        <circle cx="148" cy="24" r="3.6" style="--d:3"></circle>
        <circle cx="54" cy="58" r="3.6" style="--d:2"></circle>
        <circle class="vl-neural-hub" cx="92" cy="52" r="6" style="--d:4"></circle>
        <circle cx="132" cy="62" r="3.6" style="--d:5"></circle>
        <circle cx="40" cy="82" r="3.6" style="--d:4"></circle>
        <circle cx="82" cy="84" r="3.6" style="--d:6"></circle>
        <circle cx="154" cy="86" r="3.6" style="--d:7"></circle>
      </g>
    </g>
  </svg>
  <span class="vl-neural-caption">NEURAL LINK</span>
</div>`,
    css: `.vl-neural-matrix {
  position: relative;
  width: 190px;
  height: 108px;
  overflow: hidden;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 34%, #12243e);
  border-radius: 14px;
  background:
    radial-gradient(circle at 49% 50%, color-mix(in srgb, var(--loader-accent) 20%, transparent), transparent 34%),
    linear-gradient(145deg, #06101d, #0a1729 62%, #030810);
  box-shadow: inset 0 0 32px rgba(0, 0, 0, .66), 0 10px 24px rgba(2, 8, 23, .24);
  perspective: 420px;
}
.vl-neural-matrix::before {
  content: '';
  position: absolute;
  inset: 0;
  opacity: .18;
  background-image:
    linear-gradient(color-mix(in srgb, var(--loader-accent) 20%, transparent) 1px, transparent 1px),
    linear-gradient(90deg, color-mix(in srgb, var(--loader-accent) 20%, transparent) 1px, transparent 1px);
  background-size: 14px 14px;
}
.vl-neural-matrix svg { position: absolute; inset: 0; width: 100%; height: 100%; overflow: visible; }
.vl-neural-plane { transform-box: fill-box; transform-origin: center; transform: perspective(280px) rotateX(14deg) rotateZ(-2deg); animation: vl-neural-plane-drift calc(var(--loader-speed) * 2.2) ease-in-out infinite; }
.vl-neural-links path { fill: none; stroke: color-mix(in srgb, var(--loader-accent) 34%, #8aa0b8); stroke-width: 1.1; }
.vl-neural-signal path { fill: none; stroke: color-mix(in srgb, var(--loader-accent) 84%, white 16%); stroke-width: 1.8; stroke-linecap: round; stroke-dasharray: 5 10; filter: drop-shadow(0 0 5px var(--loader-accent)); animation: vl-neural-flow calc(var(--loader-speed) * .72) linear infinite; }
.vl-neural-signal path:nth-child(2) { animation-delay: calc(var(--loader-speed) * -.43); }
.vl-neural-signal path:nth-child(3) { animation-delay: calc(var(--loader-speed) * -.78); }
.vl-neural-nodes circle { fill: color-mix(in srgb, var(--loader-accent) 68%, #dff7ff 32%); stroke: color-mix(in srgb, var(--loader-accent) 88%, white 12%); stroke-width: 1; transform-box: fill-box; transform-origin: center; filter: drop-shadow(0 0 5px color-mix(in srgb, var(--loader-accent) 72%, transparent)); animation: vl-neural-node calc(var(--loader-speed) * .95) ease-in-out infinite; animation-delay: calc(var(--d) * -.13s); }
.vl-neural-nodes .vl-neural-hub { fill: color-mix(in srgb, var(--loader-accent) 28%, transparent); stroke-width: 1.7; filter: drop-shadow(0 0 9px var(--loader-accent)); }
.vl-neural-caption { position: absolute; right: 10px; bottom: 7px; color: color-mix(in srgb, var(--loader-accent) 80%, white 20%); font: 800 7px/1 system-ui, sans-serif; letter-spacing: .17em; }
@keyframes vl-neural-plane-drift {
  0%, 100% { transform: perspective(280px) rotateX(10deg) rotateZ(-4deg) scale(.96); }
  50% { transform: perspective(280px) rotateX(22deg) rotateZ(4deg) scale(1.06); }
}
@keyframes vl-neural-flow { to { stroke-dashoffset: -60; } }
@keyframes vl-neural-node { 0%, 100% { transform: scale(.62); opacity: .28; } 42%, 58% { transform: scale(1.62); opacity: 1; } }
@media (prefers-reduced-motion: reduce) {
  .vl-neural-plane, .vl-neural-signal path, .vl-neural-nodes circle { animation-play-state: paused; }
}`
  },
  {
    id: 'holographic-orbit-ribbon',
    name: 'Orbit Ribbon Holographic',
    category: 'Holographic',
    tech: 'CSS',
    description: 'Ribbons orbit in layered planes with subtle alpha flicker.',
    markup: `<div class="vl-cat-holographic-orbit-ribbon" role="img" aria-label="Orbit ribbon holographic">
  <span class="r1"></span>
  <span class="r2"></span>
  <span class="r3"></span>
  <span class="core"></span>
</div>`,
    css: `.vl-cat-holographic-orbit-ribbon {
  width: 108px;
  height: 108px;
  margin: 0 auto;
  border-radius: 50%;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 22%, #1f5f8d);
  background: radial-gradient(circle at 50% 50%, color-mix(in srgb, var(--loader-accent) 18%, transparent), transparent 48%), linear-gradient(170deg, #071d31, #0f3045 68%, #040a13);
  overflow: hidden;
}
.vl-cat-holographic-orbit-ribbon span {
  position: absolute;
  left: 8px;
  right: 8px;
  top: 8px;
  bottom: 8px;
  border-radius: 50%;
  border: 2px solid color-mix(in srgb, var(--loader-accent) 50%, transparent);
  animation: vl-cat-holographic-orbit-ribbon-spin calc(var(--loader-speed) * 1.5) linear infinite;
}
.vl-cat-holographic-orbit-ribbon .r1 { animation-delay: 0s; opacity: .58; }
.vl-cat-holographic-orbit-ribbon .r2 { inset: 20px; animation-delay: -.5s; border-style: dashed; }
.vl-cat-holographic-orbit-ribbon .r3 { inset: 30px; animation-delay: -1s; }
.vl-cat-holographic-orbit-ribbon .core {
  left: 47px;
  right: 47px;
  top: 47px;
  bottom: 47px;
  border-radius: 50%;
  background: color-mix(in srgb, var(--loader-accent) 84%, white 16%);
  border: 0;
  animation: vl-cat-holographic-orbit-ribbon-core calc(var(--loader-speed) * 1.2) ease-in-out infinite;
}
@keyframes vl-cat-holographic-orbit-ribbon-spin {
  0% { transform: rotate(0deg); opacity: .35; }
  50% { transform: rotate(180deg); opacity: .85; }
  100% { transform: rotate(360deg); opacity: .35; }
}
@keyframes vl-cat-holographic-orbit-ribbon-core {
  0%,100% { transform: scale(.62); opacity: .3; }
  50% { transform: scale(1.05); opacity: 1; }
}`
  }

];

export const holographicLoaders = [...baseLoaders, ...holographicPack2Loaders];
