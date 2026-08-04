export const matrixPack5LoadersA = [
  {
    id: 'matrix-synapse-lamp-grid',
    name: 'Synapse Lamp Grid',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Twin pulse lines travel through synchronized synapse columns and reset on offset loops.',
    markup: `<div class="vl-matrix-synapse-grid" aria-hidden="true">
      <span class="vl-matrix-synapse-line" style="--x:16;--d:0"></span>
      <span class="vl-matrix-synapse-line" style="--x:38;--d:.12"></span>
      <span class="vl-matrix-synapse-line" style="--x:60;--d:.24"></span>
      <span class="vl-matrix-synapse-line" style="--x:82;--d:.36"></span>
      <span class="vl-matrix-synapse-line" style="--x:104;--d:.48"></span>
      <span class="vl-matrix-synapse-line" style="--x:126;--d:.6"></span>
      <span class="vl-matrix-synapse-line" style="--x:148;--d:.72"></span>
      <span class="vl-matrix-synapse-line" style="--x:170;--d:.84"></span>
      <span class="vl-matrix-synapse-core"></span>
    </div>`,
    css: `.vl-matrix-synapse-grid {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 32%, #163b66);
  border-radius: 14px;
  overflow: hidden;
  background:
    linear-gradient(180deg, #050d17, #0a2035 55%, #04101f),
    radial-gradient(circle at 50% 22%, color-mix(in srgb, var(--loader-accent) 18%, transparent), transparent 47%);
}
.vl-matrix-synapse-line {
  position: absolute;
  left: calc(var(--x) * 1px);
  top: 10px;
  bottom: 10px;
  width: 7px;
  border-radius: 5px;
  background: linear-gradient(180deg, transparent, color-mix(in srgb, var(--loader-accent) 84%, #fff), transparent);
  animation: vl-matrix5-synapse-line calc(var(--loader-speed) * 1.85) ease-in-out infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix-synapse-core {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 8px;
  height: 8px;
  margin: -4px;
  border-radius: 50%;
  background: color-mix(in srgb, var(--loader-accent) 80%, #fff 20%);
  animation: vl-matrix5-synapse-core calc(var(--loader-speed) * 1.4) ease-in-out infinite;
}
@keyframes vl-matrix5-synapse-line {
  0%, 100% { transform: scaleY(.22); opacity: .28; }
  40%, 65% { transform: scaleY(1); opacity: .94; }
}
@keyframes vl-matrix5-synapse-core {
  0%, 100% { transform: scale(.68); opacity: .36; box-shadow: 0 0 4px transparent; }
  50% { transform: scale(1.17); opacity: .96; box-shadow: 0 0 12px color-mix(in srgb, var(--loader-accent) 64%, transparent); }
}`
  },
  {
    id: 'matrix-quantum-ripple-lattice',
    name: 'Quantum Ripple Lattice',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Ripples propagate through a lattice scaffold, then swap energy orientation.',
    markup: `<div class="vl-matrix-ripple-lattice" aria-hidden="true">
      <span class="vl-matrix-ripple-wave" style="--d:0"></span>
      <span class="vl-matrix-ripple-wave" style="--d:.2"></span>
      <span class="vl-matrix-ripple-wave" style="--d:.4"></span>
      <span class="vl-matrix-ripple-wave" style="--d:.6"></span>
      <span class="vl-matrix-ripple-node" style="--x:52px;--y:28px;--d:.1"></span>
      <span class="vl-matrix-ripple-node" style="--x:96px;--y:58px;--d:.3"></span>
      <span class="vl-matrix-ripple-node" style="--x:132px;--y:34px;--d:.5"></span>
    </div>`,
    css: `.vl-matrix-ripple-lattice {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 30%, #17395f);
  border-radius: 14px;
  overflow: hidden;
  background: repeating-radial-gradient(circle at 50% 52%, transparent 0 16px, #081826 16px 17px), #060f1b;
}
.vl-matrix-ripple-wave {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 20px;
  height: 20px;
  margin: -10px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 72%, #d8e7f2);
  border-radius: 50%;
  animation: vl-matrix5-ripple-wave calc(var(--loader-speed) * 2) ease-out infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix-ripple-wave:nth-child(2) { animation-duration: calc(var(--loader-speed) * 2.25); }
.vl-matrix-ripple-wave:nth-child(3) { animation-duration: calc(var(--loader-speed) * 1.8); }
.vl-matrix-ripple-wave:nth-child(4) { animation-duration: calc(var(--loader-speed) * 2.4); }
.vl-matrix-ripple-node {
  position: absolute;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  left: var(--x);
  top: var(--y);
  background: color-mix(in srgb, var(--loader-accent) 72%, #e7f2ff);
  animation: vl-matrix5-ripple-node calc(var(--loader-speed) * 1.6) ease-in-out infinite;
  animation-delay: calc(var(--d) * 1s);
}
@keyframes vl-matrix5-ripple-wave {
  0% { transform: translate(-50%, -50%) scale(.15); opacity: .2; }
  28% { opacity: .95; }
  100% { transform: translate(-50%, -50%) scale(4.3); opacity: 0; }
}
@keyframes vl-matrix5-ripple-node {
  0%, 100% { transform: scale(.56); opacity: .22; }
  52% { transform: scale(1.12); opacity: .94; }
}`
  },
  {
    id: 'matrix-axon-signal-ribbon',
    name: 'Axon Signal Ribbon',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Ribbon threads sweep in crossing axon tracks, each carrying a delayed pulse.',
    markup: `<div class="vl-matrix-axon-ribbon" aria-hidden="true">
      <span style="--y:18px;--d:0;--dx:16px;--dy:68px"></span>
      <span style="--y:28px;--d:.12;--dx:8px;--dy:60px"></span>
      <span style="--y:44px;--d:.24;--dx:24px;--dy:52px"></span>
      <span style="--y:60px;--d:.36;--dx:2px;--dy:40px"></span>
      <span style="--y:74px;--d:.48;--dx:-10px;--dy:30px"></span>
      <span class="vl-matrix-axon-core"></span>
    </div>`,
    css: `.vl-matrix-axon-ribbon {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 28%, #15466d);
  border-radius: 14px;
  overflow: hidden;
  background: linear-gradient(165deg, #05111e, #091f3a);
}
.vl-matrix-axon-ribbon span:not(.vl-matrix-axon-core) {
  position: absolute;
  left: 4px;
  right: 4px;
  top: var(--y);
  height: 3px;
  border-radius: 99px;
  transform-origin: left center;
  background: linear-gradient(90deg, transparent, color-mix(in srgb, var(--loader-accent) 64%, #fff), transparent);
  animation: vl-matrix5-axon-ribbon calc(var(--loader-speed) * 1.7) ease-in-out infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix-axon-ribbon span::after {
  content: '';
  position: absolute;
  left: 0;
  width: 18px;
  height: 3px;
  border-radius: inherit;
  background: var(--loader-accent);
  box-shadow: 0 0 8px color-mix(in srgb, var(--loader-accent) 80%, transparent);
  animation: vl-matrix5-axon-head calc(var(--loader-speed) * 1.7) linear infinite;
}
.vl-matrix-axon-ribbon span {
  transform: translateX(0);
}
.vl-matrix-axon-ribbon span:nth-child(2) { transform: rotate(-10deg); }
.vl-matrix-axon-ribbon span:nth-child(3) { transform: rotate(-2deg); }
.vl-matrix-axon-ribbon span:nth-child(4) { transform: rotate(6deg); }
.vl-matrix-axon-ribbon span:nth-child(5) { transform: rotate(14deg); }
.vl-matrix-axon-ribbon span:nth-child(6) { transform: rotate(21deg); }
.vl-matrix-axon-core {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 10px;
  height: 10px;
  margin: -5px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-matrix5-axon-core calc(var(--loader-speed) * 1.2) cubic-bezier(.35, 0, .2, 1) infinite;
}
@keyframes vl-matrix5-axon-ribbon {
  0% { opacity: .12; filter: saturate(.62); }
  45%, 75% { opacity: .92; filter: saturate(1); }
  100% { opacity: .12; filter: saturate(.62); }
}
@keyframes vl-matrix5-axon-head {
  0% { transform: translateX(0); opacity: .22; }
  50% { transform: translateX(120px); opacity: .9; }
  100% { transform: translateX(182px); opacity: .1; }
}
@keyframes vl-matrix5-axon-core {
  0%, 100% { transform: scale(.66); opacity: .56; }
  50% { transform: scale(1.06); opacity: 1; }
}`
  },
  {
    id: 'matrix-lattice-timestamp-bands',
    name: 'Lattice Timestamp Bands',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Horizontal bands shift through a lattice, revealing timestamp-style markers on phase transitions.',
    markup: `<div class="vl-matrix-timestamp-bands" aria-hidden="true">
      <span class="vl-matrix-time-band" style="--top:14px;--d:0;--w:1"></span>
      <span class="vl-matrix-time-band" style="--top:30px;--d:.2;--w:2"></span>
      <span class="vl-matrix-time-band" style="--top:46px;--d:.4;--w:3"></span>
      <span class="vl-matrix-time-band" style="--top:62px;--d:.6;--w:2"></span>
      <span class="vl-matrix-time-band" style="--top:78px;--d:.8;--w:1"></span>
      <span class="vl-matrix-time-digits">T+0  |  T+1</span>
    </div>`,
    css: `.vl-matrix-timestamp-bands {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 26%, #18446b);
  border-radius: 14px;
  overflow: hidden;
  background: linear-gradient(180deg, #050f20, #0a2440 72%);
}
.vl-matrix-time-band {
  position: absolute;
  left: 14px;
  right: 14px;
  top: var(--top);
  height: var(--w);
  border-radius: 99px;
  background: linear-gradient(90deg, color-mix(in srgb, var(--loader-accent) 16%, transparent), color-mix(in srgb, var(--loader-accent) 82%, #fff), color-mix(in srgb, var(--loader-accent) 16%, transparent));
  animation: vl-matrix5-timestamp-band calc(var(--loader-speed) * 1.9) ease-in-out infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix-time-band:nth-child(1) { animation-delay: 0s; }
.vl-matrix-time-band:nth-child(2) { animation-delay: .12s; }
.vl-matrix-time-band:nth-child(3) { animation-delay: .24s; }
.vl-matrix-time-band:nth-child(4) { animation-delay: .36s; }
.vl-matrix-time-band:nth-child(5) { animation-delay: .48s; }
.vl-matrix-time-digits {
  position: absolute;
  left: 10px;
  top: 90px;
  font: 700 9px/1 ui-monospace, SFMono-Regular, Consolas, monospace;
  color: color-mix(in srgb, var(--loader-accent) 70%, #fff);
  letter-spacing: .09em;
  opacity: .4;
}
@keyframes vl-matrix5-timestamp-band {
  0%, 100% { transform: scaleX(.34); opacity: .16; }
  52% { transform: scaleX(1); opacity: .94; }
}`
  },
  {
    id: 'matrix-gate-spiral-matrix',
    name: 'Gate Spiral Matrix',
    category: 'Matrix',
    tech: 'CSS',
    description: 'A spiral scan follows a sequence of gate windows, then re-enters from the opposite edge.',
    markup: `<div class="vl-matrix-gate-spiral" aria-hidden="true">
      <span style="--p:1;--d:0"></span><span style="--p:2;--d:.08"></span><span style="--p:3;--d:.16"></span>
      <span style="--p:4;--d:.24"></span><span style="--p:5;--d:.32"></span><span style="--p:6;--d:.4"></span>
      <span style="--p:7;--d:.48"></span><span style="--p:8;--d:.56"></span><span style="--p:9;--d:.64"></span>
      <span class="vl-matrix-gate-glyph" style="--d:0">g1</span><span class="vl-matrix-gate-glyph" style="--d:.4">g2</span><span class="vl-matrix-gate-glyph" style="--d:.8">g3</span>
    </div>`,
    css: `.vl-matrix-gate-spiral {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 28%, #1a3d64);
  border-radius: 14px;
  overflow: hidden;
  background: linear-gradient(145deg, #040d16, #0b2445 56%, #030b12);
}
.vl-matrix-gate-spiral span:not(.vl-matrix-gate-glyph) {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 112px;
  height: 112px;
  margin: -56px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 40%, #d5e4f3);
  border-radius: 50%;
  border-right-color: transparent;
  animation: vl-matrix5-gate-spiral calc(var(--loader-speed) * 2) linear infinite;
  animation-delay: calc(var(--d) * 1s);
  transform: rotate(calc((var(--p) - 1) * 18deg));
}
.vl-matrix-gate-glyph {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 16px;
  height: 10px;
  margin: -5px -8px;
  color: color-mix(in srgb, var(--loader-accent) 68%, #dbe7f4);
  font: 700 7px/10px ui-monospace, Consolas, SFMono-Regular, monospace;
  text-transform: uppercase;
  letter-spacing: .03em;
  animation: vl-matrix5-gate-glyph calc(var(--loader-speed) * 1.6) ease-in-out infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix-gate-glyph:nth-child(10) { left: 34px; top: 34px; }
.vl-matrix-gate-glyph:nth-child(11) { left: 50%; top: 12px; }
.vl-matrix-gate-glyph:nth-child(12) { left: 166px; top: 34px; }
@keyframes vl-matrix5-gate-spiral {
  0% { transform: rotate(calc((var(--p) - 1) * 18deg)) scale(.86); opacity: .2; }
  52% { transform: rotate(calc((var(--p) - 1) * 18deg + 216deg)) scale(1.08); opacity: .94; }
  100% { transform: rotate(calc((var(--p) - 1) * 18deg + 360deg)) scale(.86); opacity: .2; }
}
@keyframes vl-matrix5-gate-glyph {
  0%, 100% { opacity: .2; transform: translate(-50%, -50%) scale(.58); }
  50% { opacity: .94; transform: translate(-50%, -50%) scale(1); }
}`
  }
];
