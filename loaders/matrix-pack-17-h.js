export const matrixPack17LoadersH = [
  {
    id: 'matrix-prism-vector-nova',
    name: 'Prism Vector Nova',
    category: 'Matrix',
    tech: 'CSS',
    description: 'A nova pulse splits into refracted vectors that pulse from a central node in timed bursts.',
    markup: `<div class="vl-matrix17h-prism-nova" role="img" aria-label="Prism vector nova">
      <span class="vl-matrix17h-prism" style="--d:0;--a:0deg"></span>
      <span class="vl-matrix17h-prism" style="--d:.12;--a:72deg"></span>
      <span class="vl-matrix17h-prism" style="--d:.24;--a:144deg"></span>
      <span class="vl-matrix17h-prism" style="--d:.36;--a:216deg"></span>
      <span class="vl-matrix17h-prism" style="--d:.48;--a:288deg"></span>
      <span class="vl-matrix17h-prism-core"></span>
    </div>`,
    css: `.vl-matrix17h-prism-nova {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 24%, #1f6d97);
  border-radius: 14px;
  overflow: hidden;
  background: radial-gradient(circle at 50% 56%, #061a2e 0 18%, #040a13 68%);
}
.vl-matrix17h-prism {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 64px;
  height: 64px;
  margin: -32px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 80%, #dcf2ff);
  transform-origin: 50% 50%;
  transform: rotate(var(--a));
  clip-path: polygon(50% 0%, 100% 38%, 100% 100%, 0 100%, 0 38%);
  opacity: .26;
  animation: vl-matrix17h-prism calc(var(--loader-speed) * 1.55) ease-in-out infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix17h-prism-core {
  position: absolute;
  left: 50%;
  top: 54px;
  width: 8px;
  height: 8px;
  margin: -4px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-matrix17h-core calc(var(--loader-speed) * 1.55) linear infinite;
}
@keyframes vl-matrix17h-prism {
  0%, 100% { transform: rotate(var(--a)) scale(.52); opacity: .16; }
  50% { transform: rotate(calc(var(--a) + 360deg)) scale(1.05); opacity: .95; }
}
@keyframes vl-matrix17h-core {
  0%, 100% { transform: translate(-50%, -50%) scale(.82); opacity: .2; }
  50% { transform: translate(-50%, -50%) scale(1.24); opacity: .95; }
}`
  },
  {
    id: 'matrix-axon-lattice-halo',
    name: 'Axon Lattice Halo',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Halo loops orbit axon points while preserving a layered lattice rhythm.',
    markup: `<div class="vl-matrix17h-axon-halo" role="img" aria-label="Axon lattice halo">
      <span class="vl-matrix17h-axon" style="--x:20px;--y:20px;--d:0"></span>
      <span class="vl-matrix17h-axon" style="--x:95px;--y:20px;--d:.1"></span>
      <span class="vl-matrix17h-axon" style="--x:170px;--y:20px;--d:.2"></span>
      <span class="vl-matrix17h-axon" style="--x:20px;--y:88px;--d:.3"></span>
      <span class="vl-matrix17h-axon" style="--x:95px;--y:88px;--d:.4"></span>
      <span class="vl-matrix17h-axon" style="--x:170px;--y:88px;--d:.5"></span>
      <span class="vl-matrix17h-axon-core"></span>
    </div>`,
    css: `.vl-matrix17h-axon-halo {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 22%, #1f6a95);
  border-radius: 14px;
  overflow: hidden;
  background: linear-gradient(142deg, #061727, #0a2e52 62%, #040a13);
}
.vl-matrix17h-axon {
  position: absolute;
  left: var(--x);
  top: var(--y);
  width: 10px;
  height: 10px;
  margin: -5px;
  border-radius: 50%;
  background: color-mix(in srgb, var(--loader-accent) 90%, #eaf7ff);
  box-shadow: 0 0 10px color-mix(in srgb, var(--loader-accent) 60%, transparent);
  animation: vl-matrix17h-axon calc(var(--loader-speed) * 1.25) ease-in-out infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix17h-axon-core {
  position: absolute;
  left: 50%;
  top: 54px;
  width: 8px;
  height: 8px;
  margin: -4px;
  border-radius: 50%;
  background: color-mix(in srgb, var(--loader-accent) 94%, #f5fbff);
  animation: vl-matrix17h-axon-core calc(var(--loader-speed) * 1.25) linear infinite;
}
@keyframes vl-matrix17h-axon {
  0%, 100% { transform: scale(.58); opacity: .18; }
  50% { transform: scale(1.12); opacity: .95; }
}
@keyframes vl-matrix17h-axon-core {
  0%, 100% { transform: translate(-50%, -50%) scale(.8); opacity: .2; }
  50% { transform: translate(-50%, -50%) scale(1.2); opacity: .95; }
}`
  },
  {
    id: 'matrix-quantum-lattice-gate',
    name: 'Quantum Lattice Gate',
    category: 'Matrix',
    tech: 'CSS',
    description: 'A gated lattice opens through concentric pulses and closes with phase inversion.',
    markup: `<div class="vl-matrix17h-quantum-gate" role="img" aria-label="Quantum lattice gate">
      <span class="vl-matrix17h-gate" style="--s:22px;--d:0"></span>
      <span class="vl-matrix17h-gate" style="--s:36px;--d:.13"></span>
      <span class="vl-matrix17h-gate" style="--s:50px;--d:.26"></span>
      <span class="vl-matrix17h-gate" style="--s:64px;--d:.39"></span>
      <span class="vl-matrix17h-gate" style="--s:78px;--d:.52"></span>
      <span class="vl-matrix17h-gate-core"></span>
    </div>`,
    css: `.vl-matrix17h-quantum-gate {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 23%, #226d93);
  border-radius: 14px;
  overflow: hidden;
  background: linear-gradient(168deg, #061727, #0a3151 62%, #040a13);
}
.vl-matrix17h-gate {
  position: absolute;
  left: 50%;
  top: 50%;
  width: var(--s);
  height: var(--s);
  margin: calc(var(--s) / -2);
  border: 1px dashed color-mix(in srgb, var(--loader-accent) 82%, #dff3ff);
  border-radius: 50%;
  opacity: .2;
  animation: vl-matrix17h-gate calc(var(--loader-speed) * 1.45) linear infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix17h-gate-core {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 7px;
  height: 7px;
  margin: -3px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-matrix17h-gate-core calc(var(--loader-speed) * 1.45) ease-in-out infinite;
}
@keyframes vl-matrix17h-gate {
  0%, 100% { transform: translate(-50%, -50%) scale(.45); opacity: .16; }
  50% { transform: translate(-50%, -50%) scale(1.08); opacity: .95; }
}
@keyframes vl-matrix17h-gate-core {
  0%, 100% { transform: translate(-50%, -50%) scale(.84); opacity: .22; }
  50% { transform: translate(-50%, -50%) scale(1.22); opacity: .95; }
}`
  },
  {
    id: 'matrix-pulse-ribbon-lattice',
    name: 'Pulse Ribbon Lattice',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Ribbons pulse through a lattice while nodes flicker on each passing rhythm.',
    markup: `<div class="vl-matrix17h-pulse-ribbon" role="img" aria-label="Pulse ribbon lattice">
      <span class="vl-matrix17h-ribbon" style="--y:22px;--d:0"></span>
      <span class="vl-matrix17h-ribbon" style="--y:44px;--d:.15"></span>
      <span class="vl-matrix17h-ribbon" style="--y:66px;--d:.3"></span>
      <span class="vl-matrix17h-ribbon" style="--y:88px;--d:.45"></span>
      <span class="vl-matrix17h-ribbon-core"></span>
    </div>`,
    css: `.vl-matrix17h-pulse-ribbon {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 24%, #1e6d95);
  border-radius: 14px;
  overflow: hidden;
  background: radial-gradient(circle at 50% 55%, #061a2f 0 20%, #040a14 68%);
}
.vl-matrix17h-ribbon {
  position: absolute;
  left: 8px;
  top: var(--y);
  width: calc(100% - 16px);
  height: 2px;
  border-radius: 999px;
  background: linear-gradient(90deg, transparent, color-mix(in srgb, var(--loader-accent) 86%, #dff5ff), transparent);
  animation: vl-matrix17h-ribbon calc(var(--loader-speed) * 1.35) ease-in-out infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix17h-ribbon-core {
  position: absolute;
  left: 50%;
  top: 54px;
  width: 7px;
  height: 7px;
  margin: -3px;
  border-radius: 50%;
  background: color-mix(in srgb, var(--loader-accent) 90%, #f4fbff);
  animation: vl-matrix17h-ribbon-core calc(var(--loader-speed) * 1.35) linear infinite;
}
@keyframes vl-matrix17h-ribbon {
  0%, 100% { transform: scaleX(.5); opacity: .16; }
  50% { transform: scaleX(1); opacity: .95; }
}
@keyframes vl-matrix17h-ribbon-core {
  0%, 100% { transform: translate(-50%, -50%) scale(.8); opacity: .2; }
  50% { transform: translate(-50%, -50%) scale(1.2); opacity: .96; }
}`
  },
  {
    id: 'matrix-chronicle-scan-mesh',
    name: 'Chronicle Scan Mesh',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Scan waves travel across a dense mesh and leave short-lived echoes at each intersection.',
    markup: `<div class="vl-matrix17h-scan-mesh" role="img" aria-label="Chronicle scan mesh">
      <span class="vl-matrix17h-scan" style="--x:0;--d:0"></span>
      <span class="vl-matrix17h-scan" style="--x:1;--d:.11"></span>
      <span class="vl-matrix17h-scan" style="--x:2;--d:.22"></span>
      <span class="vl-matrix17h-scan" style="--x:3;--d:.33"></span>
      <span class="vl-matrix17h-scan" style="--x:4;--d:.44"></span>
      <span class="vl-matrix17h-scan" style="--x:5;--d:.55"></span>
      <span class="vl-matrix17h-scan" style="--x:6;--d:.66"></span>
      <span class="vl-matrix17h-scan" style="--x:7;--d:.77"></span>
      <span class="vl-matrix17h-scan" style="--x:8;--d:.88"></span>
      <span class="vl-matrix17h-scan" style="--x:9;--d:.99"></span>
    </div>`,
    css: `.vl-matrix17h-scan-mesh {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 22%, #1e6790);
  border-radius: 14px;
  overflow: hidden;
  background: linear-gradient(146deg, #061724, #0a2f52 62%, #040a13);
}
.vl-matrix17h-scan {
  --w: calc(100% / 11 * 1px);
  position: absolute;
  top: 0;
  left: calc(var(--x) * 18px + 8px);
  width: 4px;
  height: 100%;
  opacity: .18;
  background: linear-gradient(180deg, transparent, color-mix(in srgb, var(--loader-accent) 82%, #dbf6ff) 42%, transparent);
  animation: vl-matrix17h-scan calc(var(--loader-speed) * 1.45) ease-in-out infinite;
  animation-delay: calc(var(--d) * 1s);
}
@keyframes vl-matrix17h-scan {
  0%, 100% { transform: scaleY(.4); opacity: .12; }
  50% { transform: scaleY(1); opacity: .95; }
}`
  },
  {
    id: 'matrix-cascade-vector-nucleus',
    name: 'Cascade Vector Nucleus',
    category: 'Matrix',
    tech: 'CSS',
    description: 'A nucleus core emits vector bursts along diagonally cascading lanes.',
    markup: `<div class="vl-matrix17h-cascade-nucleus" role="img" aria-label="Cascade vector nucleus">
      <span class="vl-matrix17h-nucleus" style="--x:24px;--y:24px;--d:0"></span>
      <span class="vl-matrix17h-nucleus" style="--x:60px;--y:74px;--d:.13"></span>
      <span class="vl-matrix17h-nucleus" style="--x:102px;--y:32px;--d:.26"></span>
      <span class="vl-matrix17h-nucleus" style="--x:146px;--y:78px;--d:.39"></span>
      <span class="vl-matrix17h-nucleus-core"></span>
    </div>`,
    css: `.vl-matrix17h-cascade-nucleus {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 24%, #2a6e98);
  border-radius: 14px;
  overflow: hidden;
  background: radial-gradient(circle at 50% 56%, #061929 0 20%, #040a14 68%);
}
.vl-matrix17h-nucleus {
  position: absolute;
  left: var(--x);
  top: var(--y);
  width: 10px;
  height: 10px;
  margin: -5px;
  border-radius: 50%;
  background: color-mix(in srgb, var(--loader-accent) 86%, #e9f9ff);
  box-shadow: 0 0 10px color-mix(in srgb, var(--loader-accent) 52%, transparent);
  animation: vl-matrix17h-nucleus calc(var(--loader-speed) * 1.4) ease-in-out infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix17h-nucleus-core {
  position: absolute;
  left: 50%;
  top: 54px;
  width: 8px;
  height: 8px;
  margin: -4px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-matrix17h-nucleus-core calc(var(--loader-speed) * 1.4) linear infinite;
}
@keyframes vl-matrix17h-nucleus {
  0%, 100% { transform: scale(.62); opacity: .18; }
  50% { transform: scale(1.12); opacity: .95; }
}
@keyframes vl-matrix17h-nucleus-core {
  0%, 100% { transform: translate(-50%, -50%) scale(.82); opacity: .22; }
  50% { transform: translate(-50%, -50%) scale(1.2); opacity: .95; }
}`
  },
  {
    id: 'matrix-oscillating-rim-lattice',
    name: 'Oscillating Rim Lattice',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Rim segments pulse and shrink alternately, generating a breathing lattice perimeter.',
    markup: `<div class="vl-matrix17h-rim-lattice" role="img" aria-label="Oscillating rim lattice">
      <span class="vl-matrix17h-rim" style="--d:0;--p:0"></span>
      <span class="vl-matrix17h-rim" style="--d:.12;--p:2px"></span>
      <span class="vl-matrix17h-rim" style="--d:.24;--p:4px"></span>
      <span class="vl-matrix17h-rim" style="--d:.36;--p:6px"></span>
      <span class="vl-matrix17h-rim" style="--d:.48;--p:8px"></span>
    </div>`,
    css: `.vl-matrix17h-rim-lattice {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 24%, #1d6890);
  border-radius: 14px;
  overflow: hidden;
  background: linear-gradient(170deg, #061728, #0a2c4e 62%, #040a13);
}
.vl-matrix17h-rim {
  position: absolute;
  left: 50%;
  top: 50%;
  width: calc(100% - 16px - (var(--p) * 2));
  height: calc(100% - 16px - (var(--p) * 2));
  margin: calc((16px + var(--p)) / -2);
  border: 1px solid color-mix(in srgb, var(--loader-accent) 74%, #dcf3ff);
  border-radius: 14px;
  transform: translate(-50%, -50%);
  animation: vl-matrix17h-rim calc(var(--loader-speed) * 1.5) ease-in-out infinite;
  animation-delay: calc(var(--d) * 1s);
}
@keyframes vl-matrix17h-rim {
  0%, 100% { transform: translate(-50%, -50%) scale(.65); opacity: .18; }
  50% { transform: translate(-50%, -50%) scale(1.04); opacity: .95; }
}`
  },
  {
    id: 'matrix-glyph-drift-orbit',
    name: 'Glyph Drift Orbit',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Miniature glyphs drift on four orbital tracks and drift back on alternating timing.',
    markup: `<div class="vl-matrix17h-glyph-orbit" role="img" aria-label="Glyph drift orbit">
      <span class="vl-matrix17h-glyph" style="--r:0deg;--d:0"></span>
      <span class="vl-matrix17h-glyph" style="--r:90deg;--d:.16"></span>
      <span class="vl-matrix17h-glyph" style="--r:180deg;--d:.32"></span>
      <span class="vl-matrix17h-glyph" style="--r:270deg;--d:.48"></span>
      <span class="vl-matrix17h-glyph-core"></span>
    </div>`,
    css: `.vl-matrix17h-glyph-orbit {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 22%, #236f99);
  border-radius: 14px;
  overflow: hidden;
  background: radial-gradient(circle at 50% 56%, #061926 0 20%, #040a14 68%);
}
.vl-matrix17h-glyph {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 9px;
  height: 9px;
  margin: -4.5px;
  border-radius: 2px;
  background: color-mix(in srgb, var(--loader-accent) 90%, #ecf8ff);
  box-shadow: 0 0 9px color-mix(in srgb, var(--loader-accent) 54%, transparent);
  transform: rotate(var(--r));
  animation: vl-matrix17h-glyph calc(var(--loader-speed) * 1.5) ease-in-out infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix17h-glyph-core {
  position: absolute;
  left: 50%;
  top: 54px;
  width: 8px;
  height: 8px;
  margin: -4px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-matrix17h-glyph-core calc(var(--loader-speed) * 1.5) linear infinite;
}
@keyframes vl-matrix17h-glyph {
  0%, 100% { transform: rotate(var(--r)) translateX(34px) scale(.62); opacity: .16; }
  50% { transform: rotate(calc(var(--r) + 180deg)) translateX(-34px) scale(1.08); opacity: .95; }
}
@keyframes vl-matrix17h-glyph-core {
  0%, 100% { transform: translate(-50%, -50%) scale(.8); opacity: .22; }
  50% { transform: translate(-50%, -50%) scale(1.2); opacity: .95; }
}`
  },
  {
    id: 'matrix-neural-rift-wave',
    name: 'Neural Rift Wave',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Rift-like waves push through a neural lattice and ripple to mirrored edges.',
    markup: `<div class="vl-matrix17h-neural-rift" role="img" aria-label="Neural rift wave">
      <span class="vl-matrix17h-rift" style="--d:0;--y:14px"></span>
      <span class="vl-matrix17h-rift" style="--d:.11;--y:33px"></span>
      <span class="vl-matrix17h-rift" style="--d:.22;--y:52px"></span>
      <span class="vl-matrix17h-rift" style="--d:.33;--y:71px"></span>
      <span class="vl-matrix17h-rift" style="--d:.44;--y:90px"></span>
    </div>`,
    css: `.vl-matrix17h-neural-rift {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 24%, #1c688f);
  border-radius: 14px;
  overflow: hidden;
  background: linear-gradient(150deg, #061a2a, #0a2f51 62%, #040a13);
}
.vl-matrix17h-rift {
  position: absolute;
  left: 0;
  width: 100%;
  top: var(--y);
  height: 3px;
  background: linear-gradient(90deg, transparent, color-mix(in srgb, var(--loader-accent) 82%, #dcf4ff), transparent);
  opacity: .14;
  animation: vl-matrix17h-rift calc(var(--loader-speed) * 1.35) ease-in-out infinite;
  animation-delay: calc(var(--d) * 1s);
    }
@keyframes vl-matrix17h-rift {
  0%, 100% { transform: scaleY(.5); opacity: .16; }
  50% { transform: scaleY(1.2); opacity: .95; }
}`
  },
  {
    id: 'matrix-halo-bloom-lattice',
    name: 'Halo Drift Bloom Lattice',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Blooming nodes drift in opposite directions across a thin lattice plane.',
    markup: `<div class="vl-matrix17h-drift-bloom" role="img" aria-label="Halo drift bloom lattice">
      <span class="vl-matrix17h-bloom-node" style="--x:14px;--y:72px;--d:0"></span>
      <span class="vl-matrix17h-bloom-node" style="--x:42px;--y:34px;--d:.11"></span>
      <span class="vl-matrix17h-bloom-node" style="--x:70px;--y:84px;--d:.22"></span>
      <span class="vl-matrix17h-bloom-node" style="--x:98px;--y:26px;--d:.33"></span>
      <span class="vl-matrix17h-bloom-node" style="--x:126px;--y:72px;--d:.44"></span>
      <span class="vl-matrix17h-bloom-node" style="--x:154px;--y:40px;--d:.55"></span>
      <span class="vl-matrix17h-bloom-core"></span>
    </div>`,
    css: `.vl-matrix17h-drift-bloom {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 22%, #1f6d95);
  border-radius: 14px;
  overflow: hidden;
  background: linear-gradient(138deg, #061827, #0a2f4f 62%, #040a13);
}
.vl-matrix17h-bloom-node {
  position: absolute;
  left: var(--x);
  top: var(--y);
  width: 8px;
  height: 8px;
  margin: -4px;
  border-radius: 50%;
  background: color-mix(in srgb, var(--loader-accent) 90%, #f0faff);
  box-shadow: 0 0 8px color-mix(in srgb, var(--loader-accent) 52%, transparent);
  animation: vl-matrix17h-bloom calc(var(--loader-speed) * 1.35) ease-in-out infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix17h-bloom-core {
  position: absolute;
  left: 50%;
  top: 54px;
  width: 7px;
  height: 7px;
  margin: -3px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-matrix17h-bloom-core calc(var(--loader-speed) * 1.35) linear infinite;
}
@keyframes vl-matrix17h-bloom {
  0%, 100% { transform: scale(.52); opacity: .18; }
  50% { transform: scale(1.14); opacity: .95; }
}
@keyframes vl-matrix17h-bloom-core {
  0%, 100% { transform: translate(-50%, -50%) scale(.8); opacity: .22; }
  50% { transform: translate(-50%, -50%) scale(1.16); opacity: .95; }
}`
  }
];
