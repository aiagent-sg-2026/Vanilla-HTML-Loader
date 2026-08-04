export const matrixPack8LoadersB = [
  {
    id: 'matrix-quantum-spiral-hub',
    name: 'Quantum Spiral Hub',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Interlinked spiral nodes spiral toward a luminous hub with phase-randomized pulse timing.',
    markup: `<div class="vl-matrix8-quantum-hub" aria-hidden="true">
      <span class="vl-matrix8-quantum-orbit" style="--d:0;--r:19px;--w:5px"></span>
      <span class="vl-matrix8-quantum-orbit" style="--d:.12;--r:33px;--w:6px"></span>
      <span class="vl-matrix8-quantum-orbit" style="--d:.24;--r:45px;--w:4px"></span>
      <span class="vl-matrix8-quantum-orbit" style="--d:.36;--r:58px;--w:7px"></span>
      <span class="vl-matrix8-quantum-orbit" style="--d:.48;--r:70px;--w:5px"></span>
      <span class="vl-matrix8-quantum-core"></span>
    </div>`,
    css: `.vl-matrix8-quantum-hub {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 24%, #1d6294);
  border-radius: 14px;
  overflow: hidden;
  background: linear-gradient(135deg, #041220, #06233c 58%, #040d19);
}
.vl-matrix8-quantum-orbit {
  position: absolute;
  left: 50%;
  top: 50%;
  width: calc(6px + var(--w));
  height: calc(6px + var(--w));
  margin: calc(-3px - var(--w) / 2);
  border-radius: 50%;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 86%, #e8f2fb);
  transform: rotate(0deg);
  animation: vl-matrix8-quantum-orbit calc(var(--loader-speed) * 1.7) linear infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix8-quantum-core {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 9px;
  height: 9px;
  margin: -4px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-matrix8-quantum-core calc(var(--loader-speed) * 1.05) cubic-bezier(.22, 0, .4, 1) infinite;
}
.vl-matrix8-quantum-orbit::before {
  content: '';
  position: absolute;
  inset: -16px;
  border: 1px solid transparent;
  border-top-color: color-mix(in srgb, var(--loader-accent) 74%, #fff);
  border-radius: 50%;
  animation: vl-matrix8-quantum-ring calc(var(--loader-speed) * 1.7) linear infinite;
  animation-delay: calc(var(--d) * 1s);
}
@keyframes vl-matrix8-quantum-orbit {
  0% { transform: rotate(0deg) scale(0.86); opacity: .25; }
  100% { transform: rotate(360deg) scale(1.04); opacity: .92; }
}
@keyframes vl-matrix8-quantum-ring {
  0% { transform: rotate(0deg); opacity: .2; }
  100% { transform: rotate(-360deg); opacity: .78; }
}
@keyframes vl-matrix8-quantum-core {
  0%, 100% { transform: scale(.54); }
  50% { transform: scale(1.08); }
}`
  },
  {
    id: 'matrix-lens-tangle-matrix',
    name: 'Lens Tangle Matrix',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Nested lens-like bands overlap and drift in and out of phase, creating a braided core.',
    markup: `<div class="vl-matrix8-lens-tangle" aria-hidden="true">
      <span class="vl-matrix8-lens-band" style="--x:24px;--y:18px;--d:0;--r:18px"></span>
      <span class="vl-matrix8-lens-band" style="--x:100px;--y:16px;--d:.12;--r:22px"></span>
      <span class="vl-matrix8-lens-band" style="--x:176px;--y:20px;--d:.24;--r:16px"></span>
      <span class="vl-matrix8-lens-band" style="--x:58px;--y:72px;--d:.36;--r:20px"></span>
      <span class="vl-matrix8-lens-band" style="--x:134px;--y:74px;--d:.48;--r:14px"></span>
      <span class="vl-matrix8-lens-core"></span>
    </div>`,
    css: `.vl-matrix8-lens-tangle {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 26%, #1a5a82);
  border-radius: 14px;
  overflow: hidden;
  background: radial-gradient(circle at 50% 54%, color-mix(in srgb, var(--loader-accent) 18%, transparent), #04101a 56%);
}
.vl-matrix8-lens-band {
  position: absolute;
  left: var(--x);
  top: var(--y);
  width: calc(var(--r) * 2);
  height: calc(var(--r) * 1.45);
  margin: calc(var(--r) * -0.72) calc(var(--r) * -1);
  border-radius: 30px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 84%, #ebf3fa);
  border-left-color: transparent;
  transform: rotate(12deg);
  animation: vl-matrix8-lens-band calc(var(--loader-speed) * 1.9) ease-in-out infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix8-lens-core {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 11px;
  height: 11px;
  margin: -5px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-matrix8-lens-core calc(var(--loader-speed) * 1.2) ease-in-out infinite;
}
@keyframes vl-matrix8-lens-band {
  0% { transform: rotate(12deg) scaleX(.58); opacity: .28; }
  52% { transform: rotate(192deg) scaleX(1.08); opacity: .96; }
  100% { transform: rotate(372deg) scaleX(.58); opacity: .28; }
}
@keyframes vl-matrix8-lens-core {
  0%, 100% { transform: scale(.52); opacity: .25; }
  50% { transform: scale(1.05); opacity: 1; }
}`
  },
  {
    id: 'matrix-photon-moire-grid',
    name: 'Photon Moiré Grid',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Two offset pulse grids weave a moiré-like interference pattern around a stable anchor point.',
    markup: `<div class="vl-matrix8-photon-grid" aria-hidden="true">
      <span class="vl-matrix8-photon-gridline" style="--p:0;--d:0;--y:24px"></span>
      <span class="vl-matrix8-photon-gridline" style="--p:22px;--d:.15;--y:24px"></span>
      <span class="vl-matrix8-photon-gridline" style="--p:44px;--d:.3;--y:24px"></span>
      <span class="vl-matrix8-photon-gridline" style="--p:66px;--d:.45;--y:24px"></span>
      <span class="vl-matrix8-photon-gridline" style="--p:88px;--d:.6;--y:24px"></span>
      <span class="vl-matrix8-photon-gridline" style="--p:110px;--d:.2;--y:24px"></span>
      <span class="vl-matrix8-photon-center"></span>
    </div>`,
    css: `.vl-matrix8-photon-grid {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 28%, #1f5b87);
  border-radius: 14px;
  overflow: hidden;
  background: linear-gradient(148deg, #05111f, #08243f 66%, #040d18);
}
.vl-matrix8-photon-gridline {
  position: absolute;
  left: var(--p);
  top: var(--y);
  width: 12px;
  height: 64px;
  border-radius: 10px;
  background: linear-gradient(90deg, transparent, color-mix(in srgb, var(--loader-accent) 86%, #e8f2fb), transparent);
  opacity: .16;
  animation: vl-matrix8-photon-gridline calc(var(--loader-speed) * 1.7) ease-in-out infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix8-photon-center {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 10px;
  height: 10px;
  margin: -5px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-matrix8-photon-core calc(var(--loader-speed) * 1.15) ease-in-out infinite;
}
@keyframes vl-matrix8-photon-gridline {
  0%, 100% { transform: translateX(0) scaleY(.72); opacity: .18; }
  50% { transform: translateX(8px) scaleY(1); opacity: .9; }
}
@keyframes vl-matrix8-photon-core {
  0%, 100% { transform: scale(.5); opacity: .2; }
  50% { transform: scale(1.1); opacity: 1; }
}`
  },
  {
    id: 'matrix-cascade-node-weave',
    name: 'Cascade Node Weave',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Rows of nodes cascade and reweave, simulating braided data lanes over a moving anchor.',
    markup: `<div class="vl-matrix8-node-weave" aria-hidden="true">
      <span class="vl-matrix8-node" style="--x:24px;--y:18px;--d:0"></span>
      <span class="vl-matrix8-node" style="--x:58px;--y:28px;--d:.11"></span>
      <span class="vl-matrix8-node" style="--x:92px;--y:18px;--d:.22"></span>
      <span class="vl-matrix8-node" style="--x:126px;--y:28px;--d:.33"></span>
      <span class="vl-matrix8-node" style="--x:160px;--y:18px;--d:.44"></span>
      <span class="vl-matrix8-node" style="--x:24px;--y:64px;--d:.22"></span>
      <span class="vl-matrix8-node" style="--x:58px;--y:74px;--d:.33"></span>
      <span class="vl-matrix8-node" style="--x:92px;--y:64px;--d:.44"></span>
      <span class="vl-matrix8-node" style="--x:126px;--y:74px;--d:.55"></span>
      <span class="vl-matrix8-node" style="--x:160px;--y:64px;--d:.66"></span>
      <span class="vl-matrix8-node-core"></span>
    </div>`,
    css: `.vl-matrix8-node-weave {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 24%, #195a86);
  border-radius: 14px;
  overflow: hidden;
  background: repeating-linear-gradient(110deg, #05131f 0 11px, #07243f 11px 12px);
}
.vl-matrix8-node {
  position: absolute;
  left: var(--x);
  top: var(--y);
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: color-mix(in srgb, var(--loader-accent) 90%, #f0f7fd);
  animation: vl-matrix8-node-flit calc(var(--loader-speed) * 1.45) cubic-bezier(.4, 0, .2, 1) infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix8-node-core {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 9px;
  height: 9px;
  margin: -4px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-matrix8-node-core calc(var(--loader-speed) * 1.05) ease-in-out infinite;
}
@keyframes vl-matrix8-node-flit {
  0%, 100% { transform: translateY(0) scale(.45); opacity: .22; }
  50% { transform: translateY(16px) scale(1.1); opacity: .92; }
}
@keyframes vl-matrix8-node-core {
  0%, 100% { transform: scale(.58); opacity: .2; }
  50% { transform: scale(1.06); opacity: 1; }
}`
  },
  {
    id: 'matrix-sine-phase-matrix',
    name: 'Sine Phase Matrix',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Three sine sweeps modulate phase against a central matrix lock, creating rolling harmonics.',
    markup: `<div class="vl-matrix8-sine-phase" aria-hidden="true">
      <span class="vl-matrix8-sine-wave" style="--d:0;--x:10px"></span>
      <span class="vl-matrix8-sine-wave" style="--d:.17;--x:34px"></span>
      <span class="vl-matrix8-sine-wave" style="--d:.34;--x:58px"></span>
      <span class="vl-matrix8-sine-wave" style="--d:.51;--x:82px"></span>
      <span class="vl-matrix8-sine-wave" style="--d:.68;--x:106px"></span>
      <span class="vl-matrix8-sine-wave" style="--d:.85;--x:130px"></span>
      <span class="vl-matrix8-sine-wave" style="--d:1.02;--x:154px"></span>
      <span class="vl-matrix8-sine-core"></span>
    </div>`,
    css: `.vl-matrix8-sine-phase {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 22%, #1d5990);
  border-radius: 14px;
  overflow: hidden;
  background: radial-gradient(circle at 50% 48%, color-mix(in srgb, var(--loader-accent) 20%, transparent), #04111d 58%);
}
.vl-matrix8-sine-wave {
  position: absolute;
  left: var(--x);
  top: 50%;
  width: 8px;
  height: 36px;
  margin-top: -18px;
  border-radius: 999px;
  background: linear-gradient(180deg, transparent 0, color-mix(in srgb, var(--loader-accent) 80%, #e8f2ff) 50%, transparent 100%);
  transform-origin: center;
  animation: vl-matrix8-sine-wave calc(var(--loader-speed) * 1.4) ease-in-out infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix8-sine-core {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 10px;
  height: 10px;
  margin: -5px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-matrix8-sine-core calc(var(--loader-speed) * 1.2) ease-in-out infinite;
}
@keyframes vl-matrix8-sine-wave {
  0% { transform: translateY(0) rotate(0deg); opacity: .25; }
  50% { transform: translateY(-22px) rotate(22deg); opacity: .9; }
  100% { transform: translateY(0) rotate(44deg); opacity: .25; }
}
@keyframes vl-matrix8-sine-core {
  0%, 100% { transform: scale(.5); }
  50% { transform: scale(1.04); }
}`
  }
];
