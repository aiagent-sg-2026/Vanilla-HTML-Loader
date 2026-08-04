export const matrixPack3LoadersB = [
  {
    id: 'matrix-node-cluster-loop',
    name: 'Node Cluster Loop',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Linked nodes trace rotating loops before collapsing into a stable checkpoint.',
    markup: `<div class="vl-matrix-node-cluster" aria-hidden="true">
      <span style="--x:28px;--y:22px;--d:0"></span><span style="--x:78px;--y:22px;--d:.14"></span><span style="--x:128px;--y:22px;--d:.28"></span>
      <span style="--x:28px;--y:52px;--d:.1"></span><span style="--x:78px;--y:52px;--d:.24"></span><span style="--x:128px;--y:52px;--d:.38"></span>
      <span style="--x:28px;--y:82px;--d:.2"></span><span style="--x:78px;--y:82px;--d:.34"></span><span style="--x:128px;--y:82px;--d:.48"></span>
      <span class="vl-matrix-cluster-pulse"></span>
    </div>`,
    css: `.vl-matrix-node-cluster {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 30%, #153f66);
  border-radius: 14px;
  background: repeating-linear-gradient(90deg, transparent 0 22px, color-mix(in srgb, var(--loader-accent) 10%, transparent) 22px 23px);
  overflow: hidden;
}
.vl-matrix-node-cluster span {
  position: absolute;
  left: var(--x);
  top: var(--y);
  width: 14px;
  height: 14px;
  border-radius: 4px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 84%, white 16%);
  transform: translateZ(0);
  background: color-mix(in srgb, var(--loader-accent) 18%, transparent);
  box-shadow: 0 0 8px color-mix(in srgb, var(--loader-accent) 40%, transparent);
  animation: vl-matrix3-node-cluster calc(var(--loader-speed) * 1.95) ease-in-out infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix-cluster-pulse {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 26px;
  height: 26px;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background: color-mix(in srgb, var(--loader-accent) 88%, #fff 12%);
  opacity: .32;
  animation: vl-matrix3-cluster-core calc(var(--loader-speed) * 1.95) ease-in-out infinite;
}
.vl-matrix-cluster-pulse::after {
  content: '';
  position: absolute;
  inset: 4px;
  border-radius: 50%;
  background: color-mix(in srgb, var(--loader-accent) 34%, transparent);
  transform: scale(.55);
}
@keyframes vl-matrix3-node-cluster {
  0%, 100% { transform: translateY(0) scale(.58); opacity: .22; }
  50% { transform: translateY(-9px) scale(1.06); opacity: .95; }
}
@keyframes vl-matrix3-cluster-core {
  0%, 100% { transform: translate(-50%, -50%) scale(.68); opacity: .18; }
  50% { transform: translate(-50%, -50%) scale(1.2); opacity: .75; }
}`
  },
  {
    id: 'matrix-entropy-gate-array',
    name: 'Entropy Gate Array',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Gate nodes open and close in a checksum pattern across a compact array.',
    markup: `<div class="vl-matrix-gate-array" aria-hidden="true">
      <span style="--left:9px;--delay:0"></span>
      <span style="--left:35px;--delay:.12"></span>
      <span style="--left:61px;--delay:.24"></span>
      <span style="--left:87px;--delay:.36"></span>
      <span style="--left:113px;--delay:.48"></span>
      <span style="--left:139px;--delay:.6"></span>
      <span style="--left:165px;--delay:.72"></span>
    </div>`,
    css: `.vl-matrix-gate-array {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 24%, #14314f);
  border-radius: 14px;
  background: #050d16;
  overflow: hidden;
}
.vl-matrix-gate-array span {
  --gate-w: 10px;
  position: absolute;
  left: var(--left);
  bottom: 6px;
  width: var(--gate-w);
  height: 86px;
  transform-origin: center bottom;
  border-radius: 6px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 62%, #bdd3ea);
  background: linear-gradient(180deg, color-mix(in srgb, var(--loader-accent) 18%, transparent), color-mix(in srgb, var(--loader-accent) 72%, transparent));
  animation: vl-matrix3-gate-array calc(var(--loader-speed) * 1.85) ease-in-out infinite;
  animation-delay: calc(var(--delay) * 1s);
}
.vl-matrix-gate-array span:nth-child(odd) { animation-duration: calc(var(--loader-speed) * 1.45); }
.vl-matrix-gate-array span:nth-child(3n) { animation-duration: calc(var(--loader-speed) * 2.05); }
@keyframes vl-matrix3-gate-array {
  0%, 100% { transform: scaleY(.28); opacity: .2; }
  18%, 68% { transform: scaleY(1); opacity: .9; }
}`
  },
  {
    id: 'matrix-orbital-data-grid',
    name: 'Orbital Data Grid',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Data points sweep across a torus-like orbit and settle into a planar route.',
    markup: `<div class="vl-matrix-orbital-grid" aria-hidden="true">
      <span style="--p:0"></span><span style="--p:72"></span><span style="--p:144"></span><span style="--p:216"></span>
      <span style="--p:288"></span><span style="--p:360"></span><span style="--p:432"></span>
      <span class="vl-matrix-orbital-core"></span>
    </div>`,
    css: `.vl-matrix-orbital-grid {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 28%, #1a3657);
  border-radius: 14px;
  overflow: hidden;
  background: radial-gradient(circle at 50% 58%, color-mix(in srgb, var(--loader-accent) 14%, transparent), #050d16 58%);
}
.vl-matrix-orbital-grid span {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 15px;
  height: 9px;
  margin: -4px -7px;
  border-radius: 5px;
  background: color-mix(in srgb, var(--loader-accent) 80%, #e8f3ff);
  transform: rotate(calc(var(--p) * 1deg)) translate(34px, -16px);
  transform-origin: 0 38px;
  opacity: .28;
  animation: vl-matrix3-orbital-tile calc(var(--loader-speed) * 2.1) linear infinite;
  animation-delay: calc(var(--p) * .012s);
}
.vl-matrix-orbital-core {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 14px;
  height: 14px;
  margin: -7px;
  border-radius: 50%;
  background: var(--loader-accent);
  box-shadow: 0 0 15px color-mix(in srgb, var(--loader-accent) 70%, transparent);
  animation: vl-matrix3-orbital-core calc(var(--loader-speed) * 2.1) ease-in-out infinite;
}
@keyframes vl-matrix3-orbital-tile {
  0% { transform: rotate(calc(var(--p) * 1deg)) translate(34px, -16px) scale(.65); opacity: .17; }
  42% { transform: rotate(calc(var(--p) * 1deg + 95deg)) translate(34px, -16px) scale(1.06); opacity: .95; }
  100% { transform: rotate(calc(var(--p) * 1deg + 360deg)) translate(34px, -16px) scale(.65); opacity: .17; }
}
@keyframes vl-matrix3-orbital-core {
  0%, 100% { transform: scale(.82); opacity: .28; }
  55% { transform: scale(1.18); opacity: 1; }
}`
  },
  {
    id: 'matrix-bitfield-mosaic',
    name: 'Bitfield Mosaic',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Mosaic pixels blink by layer, simulating distributed bitfield synchronization.',
    markup: `<div class="vl-matrix-bitfield-mosaic" aria-hidden="true">
      <span style="--x:12px;--y:8px;--t:0"></span>
      <span style="--x:40px;--y:8px;--t:.09"></span>
      <span style="--x:68px;--y:8px;--t:.18"></span>
      <span style="--x:96px;--y:8px;--t:.27"></span>
      <span style="--x:124px;--y:8px;--t:.36"></span>
      <span style="--x:152px;--y:8px;--t:.45"></span>
      <span style="--x:12px;--y:39px;--t:.22"></span>
      <span style="--x:40px;--y:39px;--t:.31"></span>
      <span style="--x:68px;--y:39px;--t:.4"></span>
      <span style="--x:96px;--y:39px;--t:.49"></span>
      <span style="--x:124px;--y:39px;--t:.58"></span>
      <span style="--x:152px;--y:39px;--t:.67"></span>
      <span style="--x:12px;--y:70px;--t:.36"></span>
      <span style="--x:40px;--y:70px;--t:.45"></span>
      <span style="--x:68px;--y:70px;--t:.54"></span>
      <span style="--x:96px;--y:70px;--t:.63"></span>
      <span style="--x:124px;--y:70px;--t:.72"></span>
      <span style="--x:152px;--y:70px;--t:.81"></span>
    </div>`,
    css: `.vl-matrix-bitfield-mosaic {
  width: 190px;
  height: 108px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 28%, #123350);
  border-radius: 14px;
  position: relative;
  background: repeating-linear-gradient(0deg, transparent 0 18px, color-mix(in srgb, var(--loader-accent) 7%, transparent) 18px 19px),
    linear-gradient(180deg, #05111f, #091b2f);
  overflow: hidden;
}
.vl-matrix-bitfield-mosaic span {
  position: absolute;
  left: var(--x);
  top: var(--y);
  width: 8px;
  height: 8px;
  border-radius: 2px;
  background: color-mix(in srgb, var(--loader-accent) 90%, #fff 10%);
  box-shadow: 0 0 8px color-mix(in srgb, var(--loader-accent) 46%, transparent);
  animation: vl-matrix3-bit-mosaic calc(var(--loader-speed) * 1.7) ease-in-out infinite;
  animation-delay: calc(var(--t) * 1s);
  opacity: .2;
}
@keyframes vl-matrix3-bit-mosaic {
  0%, 100% { opacity: .14; transform: scale(.56); }
  32%, 58% { opacity: .95; transform: scale(1.12); }
}`
  },
  {
    id: 'matrix-bridge-scanline',
    name: 'Bridge Scanline',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Scanlines sweep across bridge segments to validate and reconnect fragmented channels.',
    markup: `<div class="vl-matrix-bridge-scanline" aria-hidden="true">
      <span class="vl-matrix-bridge-pillar"></span>
      <span class="vl-matrix-bridge-pillar"></span>
      <span class="vl-matrix-bridge-pillar"></span>
      <span class="vl-matrix-bridge-bridge"></span>
    </div>`,
    css: `.vl-matrix-bridge-scanline {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 30%, #183c62);
  border-radius: 14px;
  overflow: hidden;
  background: linear-gradient(180deg, #060f1c, #0a2039 58%, #040b13);
}
.vl-matrix-bridge-pillar {
  position: absolute;
  width: 14px;
  height: 44px;
  top: 16px;
  border-radius: 7px;
  background: linear-gradient(180deg, color-mix(in srgb, var(--loader-accent) 45%, transparent), color-mix(in srgb, var(--loader-accent) 88%, #fff));
  opacity: .22;
}
.vl-matrix-bridge-pillar:nth-child(1) { left: 40px; animation: vl-matrix3-bridge-pillar calc(var(--loader-speed) * 1.7) ease-in-out infinite; }
.vl-matrix-bridge-pillar:nth-child(2) { left: 88px; animation: vl-matrix3-bridge-pillar calc(var(--loader-speed) * 1.7) ease-in-out infinite .12s; }
.vl-matrix-bridge-pillar:nth-child(3) { left: 136px; animation: vl-matrix3-bridge-pillar calc(var(--loader-speed) * 1.7) ease-in-out infinite .24s; }
.vl-matrix-bridge-bridge {
  position: absolute;
  left: 34px;
  top: 62px;
  width: 122px;
  height: 6px;
  border-radius: 999px;
  background: color-mix(in srgb, var(--loader-accent) 72%, white 8%);
  animation: vl-matrix3-bridge-bridge calc(var(--loader-speed) * 1.9) linear infinite;
}
@keyframes vl-matrix3-bridge-pillar {
  0%, 100% { transform: scaleY(.4); opacity: .14; }
  50% { transform: scaleY(1); opacity: .9; }
}
@keyframes vl-matrix3-bridge-bridge {
  0% { opacity: .14; transform: scaleX(.45); }
  44%, 60% { opacity: .95; transform: scaleX(1); }
  100% { opacity: .14; transform: scaleX(.45); }
}`
  }
];
