export const holographicPack2Loaders = [
  {
    id: 'holographic-quantum-core',
    name: 'Quantum Processing Core',
    category: 'Holographic',
    tech: 'CSS + Inline SVG',
    description: 'Entangled qubits ripple through a holo-core as states entangle, stabilise and resolve.',
    markup: `<div class="vl-holo-quantum-core" aria-hidden="true" role="img" aria-label="Quantum processing core">
      <div class="vl-holo-quantum-core-plane">
        <span class="vl-holo-quantum-ring" style="--d:0"></span>
        <span class="vl-holo-quantum-ring" style="--d:1"></span>
        <span class="vl-holo-quantum-ring" style="--d:2"></span>
        <span class="vl-holo-quantum-node" style="--x:8px; --y:-12px; --n:0"></span>
        <span class="vl-holo-quantum-node" style="--x:-5px; --y:6px; --n:1"></span>
        <span class="vl-holo-quantum-node" style="--x:12px; --y:18px; --n:2"></span>
        <span class="vl-holo-quantum-link"></span>
      </div>
    </div>`,
    css: `.vl-holo-quantum-core {
  width: 190px;
  height: 108px;
  display: grid;
  place-items: center;
  background: linear-gradient(168deg, #071223, #0a182f 64%, #030812);
  border: 1px solid color-mix(in srgb, var(--loader-accent) 28%, #14213a);
  border-radius: 14px;
  color: var(--loader-accent);
  box-shadow: inset 0 0 30px rgba(0,0,0,.45);
  overflow: hidden;
}
.vl-holo-quantum-core-plane {
  position: relative;
  width: 132px;
  height: 84px;
}
.vl-holo-quantum-ring {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 70%, transparent);
  transform: translate(-50%, -50%);
  animation: vl-holo-quantum-orbit calc(var(--loader-speed) * 2.2) linear infinite;
}
.vl-holo-quantum-ring:nth-child(2) {
  width: 52px;
  height: 52px;
  border-width: 1px;
  opacity: .45;
  animation-delay: calc(var(--loader-speed) * -.7);
}
.vl-holo-quantum-ring:nth-child(3) {
  width: 76px;
  height: 76px;
  border-width: 1px;
  opacity: .28;
  animation-direction: reverse;
  animation-delay: calc(var(--loader-speed) * -.35);
}
.vl-holo-quantum-node {
  position: absolute;
  width: 11px;
  height: 11px;
  left: 50%;
  top: 50%;
  border-radius: 50%;
  background: color-mix(in srgb, var(--loader-accent) 84%, white 16%);
  box-shadow: 0 0 9px var(--loader-accent);
  transform: translate(calc(-50% + var(--x)), calc(-50% + var(--y)));
  animation: vl-holo-quantum-node-pulse calc(var(--loader-speed) * 1.9) ease-in-out infinite;
  animation-delay: calc(var(--n) * .2s);
}
.vl-holo-quantum-link {
  position: absolute;
  inset: 18px 22px;
  border-radius: 50%;
  border: 2px dashed color-mix(in srgb, var(--loader-accent) 24%, transparent);
  animation: vl-holo-quantum-link-spin calc(var(--loader-speed) * 3.4) linear infinite;
}
@keyframes vl-holo-quantum-orbit {
  0% { transform: translate(-50%, -50%) scale(1) rotate(0deg); }
  100% { transform: translate(-50%, -50%) scale(.88) rotate(360deg); }
}
@keyframes vl-holo-quantum-link-spin {
  0% { transform: rotate(0deg); opacity: .28; }
  45%, 80% { opacity: .8; }
  100% { transform: rotate(-360deg); opacity: .28; }
}
@keyframes vl-holo-quantum-node-pulse {
  0%, 100% { transform: translate(calc(-50% + var(--x)), calc(-50% + var(--y))) scale(.74); opacity: .45; }
  48% { transform: translate(calc(-50% + var(--x)), calc(-50% + var(--y))) scale(1.2); opacity: 1; }
}`
  },
  {
    id: 'holographic-dna-scanner',
    name: 'DNA Sequence Scanner',
    category: 'Holographic',
    tech: 'CSS + Inline SVG',
    description: 'A holographic strand scans codons and marks each base as it resolves into readable bands.',
    markup: `<svg class="vl-holo-dna-scanner" viewBox="0 0 190 108" aria-hidden="true">
      <line class="vl-holo-dna-track" x1="16" y1="54" x2="174" y2="54"></line>
      <path class="vl-holo-dna-helix" d="M20 48C54 48 58 60 92 60 126 60 130 48 164 48" />
      <path class="vl-holo-dna-helix" d="M20 60C54 60 58 48 92 48 126 48 130 60 164 60" />
      <circle class="vl-holo-dna-bp" cx="37" cy="53" r="4"></circle>
      <circle class="vl-holo-dna-bp" cx="66" cy="53" r="4"></circle>
      <circle class="vl-holo-dna-bp" cx="95" cy="53" r="4"></circle>
      <circle class="vl-holo-dna-bp" cx="124" cy="53" r="4"></circle>
      <circle class="vl-holo-dna-bp" cx="153" cy="53" r="4"></circle>
      <path class="vl-holo-dna-cursor" d="M20 52l8 -8 8 8 -8 8z"></path>
    </svg>`,
    css: `.vl-holo-dna-scanner {
  width: 190px;
  height: 108px;
  color: var(--loader-accent);
  overflow: visible;
}
.vl-holo-dna-scanner line,
.vl-holo-dna-scanner path,
.vl-holo-dna-scanner circle,
.vl-holo-dna-scanner polygon,
.vl-holo-dna-scanner path { fill: none; stroke: currentColor; }
.vl-holo-dna-track { stroke-width: 2; opacity: .22; }
.vl-holo-dna-helix {
  stroke-width: 3;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-dasharray: 170;
  stroke-dashoffset: 170;
  animation: vl-holo-dna-scan calc(var(--loader-speed) * 2.6) ease-in-out infinite;
}
.vl-holo-dna-helix:nth-child(3) { animation-delay: calc(var(--loader-speed) * .35); }
.vl-holo-dna-bp {
  fill: currentColor;
  stroke: none;
  opacity: .15;
  animation: vl-holo-dna-base calc(var(--loader-speed) * 2.6) ease-in-out infinite;
}
.vl-holo-dna-bp:nth-child(5) { animation-delay: .12s; }
.vl-holo-dna-bp:nth-child(6) { animation-delay: .24s; }
.vl-holo-dna-bp:nth-child(7) { animation-delay: .36s; }
.vl-holo-dna-bp:nth-child(8) { animation-delay: .48s; }
.vl-holo-dna-bp:nth-child(9) { animation-delay: .6s; }
.vl-holo-dna-cursor {
  fill: color-mix(in srgb, var(--loader-accent) 78%, white 22%);
  stroke: none;
  animation: vl-holo-dna-cursor calc(var(--loader-speed) * 2.6) ease-in-out infinite;
}
@keyframes vl-holo-dna-scan {
  0% { stroke-dashoffset: 170; opacity: .12; }
  38%, 74% { stroke-dashoffset: 0; opacity: .9; }
  100% { stroke-dashoffset: -170; opacity: .12; }
}
@keyframes vl-holo-dna-base {
  0%, 100% { opacity: .15; transform: scale(.6); }
  45%, 70% { opacity: .95; transform: scale(1.08); }
}
@keyframes vl-holo-dna-cursor {
  0% { transform: translateX(0); opacity: .2; }
  28%, 70% { transform: translateX(136px); opacity: .9; }
  100% { transform: translateX(0); opacity: .2; }
}`
  },
  {
    id: 'holographic-cybersecurity-shield',
    name: 'Cybersecurity Shield Scan',
    category: 'Holographic',
    tech: 'CSS',
    description: 'A rotating shield scans for threats while perimeter traces raise and resolve alarms.',
    markup: `<div class="vl-holo-cyber-shield" aria-hidden="true">
      <span class="vl-holo-cyber-ring"></span>
      <span class="vl-holo-cyber-ring"></span>
      <span class="vl-holo-cyber-core"></span>
      <span class="vl-holo-cyber-scan"></span>
      <span class="vl-holo-cyber-tip"></span>
      <span class="vl-holo-cyber-tip"></span>
      <span class="vl-holo-cyber-tip"></span>
    </div>`,
    css: `.vl-holo-cyber-shield {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  position: relative;
  margin: 8px auto 0;
  background: radial-gradient(circle at 50% 50%, color-mix(in srgb, var(--loader-accent) 11%, transparent), transparent 44%);
}
.vl-holo-cyber-ring {
  position: absolute;
  left: 50%;
  top: 50%;
  border-radius: 50%;
  border: 2px solid color-mix(in srgb, var(--loader-accent) 30%, transparent);
  transform: translate(-50%, -50%);
  animation: vl-holo-cyber-rotate calc(var(--loader-speed) * 2.4) linear infinite;
}
.vl-holo-cyber-ring:first-child {
  width: 84px;
  height: 84px;
}
.vl-holo-cyber-ring:last-of-type {
  width: 56px;
  height: 56px;
  border-width: 1px;
  opacity: .65;
  animation-direction: reverse;
  animation-duration: calc(var(--loader-speed) * 1.55);
}
.vl-holo-cyber-core {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  background: color-mix(in srgb, var(--loader-accent) 70%, #0a1630);
  box-shadow: 0 0 14px color-mix(in srgb, var(--loader-accent) 75%, transparent);
  animation: vl-holo-cyber-core calc(var(--loader-speed) * .95) ease-in-out infinite;
}
.vl-holo-cyber-scan {
  position: absolute;
  inset: 2px;
  border-radius: 50%;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 55%, transparent);
  opacity: .15;
  animation: vl-holo-cyber-sweep calc(var(--loader-speed) * 2.4) linear infinite;
}
.vl-holo-cyber-tip {
  position: absolute;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: color-mix(in srgb, var(--loader-accent) 82%, white 18%);
  left: 50%;
  top: 9px;
  transform-origin: 3px 41px;
  transform: translateX(-50%);
  animation: vl-holo-cyber-tips calc(var(--loader-speed) * 2.4) linear infinite;
}
.vl-holo-cyber-tip:nth-child(6) { animation-delay: .16s; transform-origin: 30px 34px; }
.vl-holo-cyber-tip:nth-child(7) { animation-delay: .32s; transform-origin: 50px 34px; }
@keyframes vl-holo-cyber-rotate {
  0% { transform: translate(-50%, -50%) rotate(0deg); }
  100% { transform: translate(-50%, -50%) rotate(360deg); }
}
@keyframes vl-holo-cyber-sweep {
  0% { clip-path: polygon(50% 50%, 50% 50%, 50% 50%); opacity: .12; }
  12% { clip-path: polygon(50% 50%, 50% 0%, 100% 50%, 50% 100%, 0% 50%); opacity: .55; }
  100% { clip-path: polygon(50% 50%, 50% 0%, 100% 50%, 50% 100%, 0% 50%); opacity: .12; }
}
@keyframes vl-holo-cyber-core { 0%,100% { transform: translate(-50%, -50%) scale(.85); opacity: .55; } 50% { transform: translate(-50%, -50%) scale(1.1); opacity: 1; } }
@keyframes vl-holo-cyber-tips { 0% { opacity: .14; transform: rotate(0deg) translateX(-50%); } 50% { opacity: 1; transform: rotate(180deg) translateX(-50%); } 100% { opacity: .14; transform: rotate(360deg) translateX(-50%); } }`
  },
  {
    id: 'holographic-cube-assembly',
    name: 'Holographic Cube Assembly',
    category: 'Holographic',
    tech: 'CSS 3D',
    description: 'Discrete cube modules align across two axes and form a stable stack before dissolving.',
    markup: `<div class="vl-holo-cube-assembly" aria-hidden="true">
      <i style="--x:-46px;--y:-12px;--z:0;--d:0"></i>
      <i style="--x:-18px;--y:-12px;--z:18px;--d:1"></i>
      <i style="--x:12px;--y:-12px;--z:0;--d:2"></i>
      <i style="--x:40px;--y:-12px;--z:18px;--d:3"></i>
      <i style="--x:-46px;--y:16px;--z:18px;--d:4"></i>
      <i style="--x:-18px;--y:16px;--z:0;--d:5"></i>
      <i style="--x:12px;--y:16px;--z:18px;--d:6"></i>
      <i style="--x:40px;--y:16px;--z:0;--d:7"></i>
      <span class="vl-holo-cube-core"></span>
    </div>`,
    css: `.vl-holo-cube-assembly {
  width: 190px;
  height: 108px;
  position: relative;
  display: grid;
  place-items: center;
  overflow: hidden;
  perspective: 460px;
  border-radius: 12px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 32%, #10253e);
  background:
    radial-gradient(circle at 50% 54%, color-mix(in srgb, var(--loader-accent) 17%, transparent), transparent 36%),
    linear-gradient(150deg, #07111f, #0b1a2d 56%, #040911);
}
.vl-holo-cube-assembly i {
  position: absolute;
  width: 18px;
  height: 18px;
  left: 50%;
  top: 50%;
  transform-style: preserve-3d;
  transform: translate(calc(-50% + var(--x)), calc(-50% + var(--y))) translateZ(var(--z));
  border-radius: 2px;
  background: color-mix(in srgb, var(--loader-accent) 70%, #d8ecff 30%);
  box-shadow: 0 0 12px color-mix(in srgb, var(--loader-accent) 25%, transparent);
  animation: vl-holo-cube-part calc(var(--loader-speed) * 2.1) cubic-bezier(.35, 0, .2, 1) infinite;
  animation-delay: calc(var(--n) * .11s);
}
.vl-holo-cube-core {
  position: absolute;
  width: 16px;
  height: 16px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background: color-mix(in srgb, var(--loader-accent) 76%, white 24%);
  box-shadow: 0 0 20px color-mix(in srgb, var(--loader-accent) 70%, transparent);
  animation: vl-holo-cube-core calc(var(--loader-speed) * 2.1) ease-in-out infinite;
}
@keyframes vl-holo-cube-part {
  0%, 100% { transform: translate(calc(-50% + var(--x)), calc(-50% + var(--y))) translateZ(var(--z)) rotateX(6deg); opacity: .25; }
  40%, 70% { transform: translate(calc(-50% + var(--x)), calc(-50% + var(--y))) translateZ(calc(var(--z) + 20px)) rotateX(28deg); opacity: .92; }
}
@keyframes vl-holo-cube-core {
  0%, 100% { transform: translate(-50%, -50%) scale(.7); opacity: .2; }
  35%, 72% { transform: translate(-50%, -50%) scale(1.08); opacity: 1; }
}`
  },
  {
    id: 'holographic-orbital-data-sync',
    name: 'Orbital Data Synchronisation',
    category: 'Holographic',
    tech: 'CSS',
    description: 'Ground nodes and orbital hubs exchange packets in phased rounds until a full sync lock.',
    markup: `<div class="vl-holo-orbital-sync" aria-hidden="true">
      <span class="vl-holo-orbital-node" style="--x:-44px;--y:-14px;--d:0"></span>
      <span class="vl-holo-orbital-node" style="--x:-6px;--y:-12px;--d:1"></span>
      <span class="vl-holo-orbital-node" style="--x:38px;--y:-14px;--d:2"></span>
      <span class="vl-holo-orbital-node" style="--x:-44px;--y:28px;--d:3"></span>
      <span class="vl-holo-orbital-node" style="--x:38px;--y:28px;--d:4"></span>
      <span class="vl-holo-orbital-hub"></span>
      <span class="vl-holo-orbital-signal"></span>
      <span class="vl-holo-orbital-line"></span>
      <span class="vl-holo-orbital-line"></span>
    </div>`,
    css: `.vl-holo-orbital-sync {
  width: 190px;
  height: 108px;
  position: relative;
  overflow: hidden;
  display: grid;
  place-items: center;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 30%, #12253c);
  border-radius: 14px;
  background: linear-gradient(165deg, #071523, #0d1f34 62%, #040910);
}
.vl-holo-orbital-hub {
  position: absolute;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: color-mix(in srgb, var(--loader-accent) 70%, white 30%);
  box-shadow: 0 0 15px color-mix(in srgb, var(--loader-accent) 74%, transparent);
  animation: vl-holo-orbital-hub calc(var(--loader-speed) * 1.1) ease-in-out infinite;
}
.vl-holo-orbital-node {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  transform: translate(calc(-50% + var(--x)), calc(-50% + var(--y));
  background: color-mix(in srgb, var(--loader-accent) 64%, #eff8ff);
  box-shadow: 0 0 8px color-mix(in srgb, var(--loader-accent) 48%, transparent);
  animation: vl-holo-orbital-node calc(var(--loader-speed) * 2.2) ease-in-out infinite;
  animation-delay: calc(var(--d) * .2s);
}
.vl-holo-orbital-line {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 88px;
  height: 1px;
  transform-origin: 50% 50%;
  background: linear-gradient(90deg, transparent, color-mix(in srgb, var(--loader-accent) 58%, transparent));
  opacity: .2;
  animation: vl-holo-orbital-line calc(var(--loader-speed) * 2.2) ease-in-out infinite;
}
.vl-holo-orbital-line:nth-child(8) { transform: translateX(-44px) rotate(0deg); animation-delay: .18s; }
.vl-holo-orbital-line:nth-child(9) { transform: translateX(-44px) rotate(38deg); animation-delay: .36s; }
.vl-holo-orbital-signal {
  position: absolute;
  width: 4px;
  height: 4px;
  border-radius: 999px;
  left: 50%;
  top: 50%;
  background: color-mix(in srgb, var(--loader-accent) 82%, white);
  transform: translate(-50%, -50%);
  animation: vl-holo-orbital-signal calc(var(--loader-speed) * 2.2) linear infinite;
}
@keyframes vl-holo-orbital-node {
  0%, 100% { opacity: .22; transform: translate(calc(-50% + var(--x)), calc(-50% + var(--y))) scale(.78); }
  42%, 70% { opacity: 1; transform: translate(calc(-50% + var(--x)), calc(-50% + var(--y))) scale(1.2); }
}
@keyframes vl-holo-orbital-line { 0% { opacity: .08; transform: scaleX(.06); } 45%, 80% { opacity: .72; transform: scaleX(1); } 100% { opacity: .08; transform: scaleX(.06); } }
@keyframes vl-holo-orbital-signal {
  0% { opacity: 0; transform: translate(-50%, -50%) translateX(-34px); }
  32% { opacity: .9; transform: translate(-50%, -50%) translateX(34px); }
  100% { opacity: 0; transform: translate(-50%, -50%) translateX(-34px); }
}
@keyframes vl-holo-orbital-hub {
  0%,100% { transform: scale(.78); opacity: .48; }
  45%, 70% { transform: scale(1.08); opacity: 1; }
}`
  }
];
