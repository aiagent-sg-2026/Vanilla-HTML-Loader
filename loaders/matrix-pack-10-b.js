export const matrixPack10LoadersB = [
  {
    id: 'matrix-magnetic-threshold-mesh',
    name: 'Magnetic Threshold Mesh',
    category: 'Matrix',
    tech: 'CSS',
    description: 'A magnetic mesh tightens around threshold points and loosens on each cycle.',
    markup: `<div class="vl-matrix10-magnetic-mesh" aria-hidden="true">
      <span class="vl-matrix10-magnetic-node" style="--x:18px;--y:16px;--d:0"></span>
      <span class="vl-matrix10-magnetic-node" style="--x:42px;--y:34px;--d:.12"></span>
      <span class="vl-matrix10-magnetic-node" style="--x:66px;--y:16px;--d:.24"></span>
      <span class="vl-matrix10-magnetic-node" style="--x:90px;--y:34px;--d:.36"></span>
      <span class="vl-matrix10-magnetic-node" style="--x:114px;--y:16px;--d:.48"></span>
      <span class="vl-matrix10-magnetic-node" style="--x:138px;--y:34px;--d:.6"></span>
      <span class="vl-matrix10-magnetic-core"></span>
    </div>`,
    css: `.vl-matrix10-magnetic-mesh {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 22%, #1f6591);
  border-radius: 14px;
  overflow: hidden;
  background: linear-gradient(160deg, #05121f, #0a3251 56%, #04101c);
}
.vl-matrix10-magnetic-node {
  position: absolute;
  left: var(--x);
  top: var(--y);
  width: 8px;
  height: 8px;
  border-radius: 2px;
  background: color-mix(in srgb, var(--loader-accent) 84%, #e8f4fb);
  animation: vl-matrix10-magnetic-node calc(var(--loader-speed) * 1.4) ease-in-out infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix10-magnetic-core {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 10px;
  height: 10px;
  margin: -5px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-matrix10-magnetic-core calc(var(--loader-speed) * 1.1) cubic-bezier(.2, 0, .35, 1) infinite;
}
@keyframes vl-matrix10-magnetic-node {
  0%, 100% { transform: translateY(0) scale(.42); opacity: .2; }
  50% { transform: translateY(12px) scale(1.08); opacity: .96; }
}
@keyframes vl-matrix10-magnetic-core {
  0%, 100% { transform: scale(.54); opacity: .24; }
  50% { transform: scale(1.06); opacity: 1; }
}`
  },
  {
    id: 'matrix-datastream-flare-spiral',
    name: 'Datastream Flare Spiral',
    category: 'Matrix',
    tech: 'CSS',
    description: 'A flare chain spirals through staged datastream segments and resets at the center.',
    markup: `<div class="vl-matrix10-data-flare" aria-hidden="true">
      <span class="vl-matrix10-flare" style="--d:0;--r:14px"></span>
      <span class="vl-matrix10-flare" style="--d:.13;--r:22px"></span>
      <span class="vl-matrix10-flare" style="--d:.26;--r:30px"></span>
      <span class="vl-matrix10-flare" style="--d:.39;--r:38px"></span>
      <span class="vl-matrix10-data-core"></span>
    </div>`,
    css: `.vl-matrix10-data-flare {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 24%, #1c6492);
  border-radius: 14px;
  overflow: hidden;
  background: radial-gradient(circle at 50% 56%, color-mix(in srgb, var(--loader-accent) 20%, transparent), #041323 58%);
}
.vl-matrix10-flare {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 6px;
  height: 24px;
  margin-left: -3px;
  margin-top: -12px;
  border-radius: 999px;
  background: linear-gradient(180deg, color-mix(in srgb, var(--loader-accent) 10%, transparent), color-mix(in srgb, var(--loader-accent) 86%, #eff8ff), color-mix(in srgb, var(--loader-accent) 10%, transparent));
  transform-origin: 50% 50%;
  animation: vl-matrix10-flare calc(var(--loader-speed) * 1.55) ease-in-out infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix10-data-core {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 8px;
  height: 8px;
  margin: -4px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-matrix10-data-core calc(var(--loader-speed) * 1.04) ease-in-out infinite;
}
@keyframes vl-matrix10-flare {
  0% { transform: rotate(0deg) translateY(0) scaleY(.56); opacity: .2; }
  50% { transform: rotate(210deg) translateY(0) scaleY(1); opacity: .95; }
  100% { transform: rotate(360deg) translateY(0) scaleY(.56); opacity: .2; }
}
@keyframes vl-matrix10-data-core {
  0%, 100% { transform: scale(.56); opacity: .22; }
  50% { transform: scale(1.08); opacity: 1; }
}`
  },
  {
    id: 'matrix-axon-rail-matrix',
    name: 'Axon Rail Matrix',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Axon rails pulse along fixed tracks with synchronized handoff at each junction.',
    markup: `<div class="vl-matrix10-axon-rail" aria-hidden="true">
      <span class="vl-matrix10-axon-rail-line" style="--y:26px;--d:0"></span>
      <span class="vl-matrix10-axon-rail-line" style="--y:40px;--d:.14"></span>
      <span class="vl-matrix10-axon-rail-line" style="--y:54px;--d:.28"></span>
      <span class="vl-matrix10-axon-junction" style="--d:0"></span>
      <span class="vl-matrix10-axon-junction" style="--d:.16"></span>
      <span class="vl-matrix10-axon-core"></span>
    </div>`,
    css: `.vl-matrix10-axon-rail {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 24%, #1e6290);
  border-radius: 14px;
  overflow: hidden;
  background: linear-gradient(170deg, #041321, #082847 58%, #04101a);
}
.vl-matrix10-axon-rail-line {
  position: absolute;
  left: 14px;
  top: var(--y);
  width: 160px;
  height: 2px;
  border-radius: 99px;
  background: linear-gradient(90deg, color-mix(in srgb, var(--loader-accent) 12%, transparent), color-mix(in srgb, var(--loader-accent) 88%, #e3f4ff), color-mix(in srgb, var(--loader-accent) 12%, transparent));
  animation: vl-matrix10-axon-rail calc(var(--loader-speed) * 1.7) ease-in-out infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix10-axon-junction {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 6px;
  height: 6px;
  margin: -3px;
  border-radius: 50%;
  background: color-mix(in srgb, var(--loader-accent) 88%, #f0f7fc);
  animation: vl-matrix10-axon-junction calc(var(--loader-speed) * 1.3) ease-in-out infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix10-axon-core {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 10px;
  height: 10px;
  margin: -5px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-matrix10-axon-core calc(var(--loader-speed) * 1.05) cubic-bezier(.25, 0, .35, 1) infinite;
}
@keyframes vl-matrix10-axon-rail {
  0%, 100% { transform: scaleX(.2); opacity: .18; }
  50% { transform: scaleX(1); opacity: .9; }
}
@keyframes vl-matrix10-axon-junction {
  0%, 100% { transform: scale(.55); opacity: .18; }
  50% { transform: scale(1.2); opacity: .9; }
}
@keyframes vl-matrix10-axon-core {
  0%, 100% { transform: scale(.55); opacity: .22; }
  50% { transform: scale(1.07); opacity: 1; }
}`
  },
  {
    id: 'matrix-pulse-hollow-grid',
    name: 'Pulse Hollow Grid',
    category: 'Matrix',
    tech: 'CSS',
    description: 'A hollow cell grid expands and contracts while pulse markers travel diagonally.',
    markup: `<div class="vl-matrix10-hollow-grid" aria-hidden="true">
      <span class="vl-matrix10-hollow-cell" style="--x:14px;--y:18px;--d:0"></span>
      <span class="vl-matrix10-hollow-cell" style="--x:42px;--y:24px;--d:.12"></span>
      <span class="vl-matrix10-hollow-cell" style="--x:70px;--y:18px;--d:.24"></span>
      <span class="vl-matrix10-hollow-cell" style="--x:98px;--y:24px;--d:.36"></span>
      <span class="vl-matrix10-hollow-cell" style="--x:126px;--y:18px;--d:.48"></span>
      <span class="vl-matrix10-hollow-cell" style="--x:154px;--y:24px;--d:.6"></span>
      <span class="vl-matrix10-hollow-core"></span>
    </div>`,
    css: `.vl-matrix10-hollow-grid {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 26%, #1f658e);
  border-radius: 14px;
  overflow: hidden;
  background: repeating-linear-gradient(130deg, #051523 0 10px, #092e4f 10px 11px, #051523 11px 21px);
}
.vl-matrix10-hollow-cell {
  position: absolute;
  left: var(--x);
  top: var(--y);
  width: 10px;
  height: 10px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 78%, #dff3fb);
  border-radius: 2px;
  opacity: .2;
  animation: vl-matrix10-hollow-cell calc(var(--loader-speed) * 1.5) ease-in-out infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix10-hollow-core {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 8px;
  height: 8px;
  margin: -4px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-matrix10-hollow-core calc(var(--loader-speed) * 1.12) ease-in-out infinite;
}
@keyframes vl-matrix10-hollow-cell {
  0%, 100% { transform: scale(.42); opacity: .18; }
  50% { transform: scale(1.08); opacity: .96; }
}
@keyframes vl-matrix10-hollow-core {
  0%, 100% { transform: scale(.54); opacity: .22; }
  50% { transform: scale(1.08); opacity: 1; }
}`
  },
  {
    id: 'matrix-neon-anchor-lattice',
    name: 'Neon Anchor Lattice',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Neon anchors pull and release lattice points in alternating radial waves.',
    markup: `<div class="vl-matrix10-neon-anchor" aria-hidden="true">
      <span class="vl-matrix10-anchor" style="--x:16px;--y:22px;--d:0"></span>
      <span class="vl-matrix10-anchor" style="--x:56px;--y:22px;--d:.16"></span>
      <span class="vl-matrix10-anchor" style="--x:96px;--y:22px;--d:.32"></span>
      <span class="vl-matrix10-anchor" style="--x:136px;--y:22px;--d:.48"></span>
      <span class="vl-matrix10-neon-core"></span>
    </div>`,
    css: `.vl-matrix10-neon-anchor {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 26%, #21628e);
  border-radius: 14px;
  overflow: hidden;
  background: linear-gradient(175deg, #061825, #0a3356 58%, #04111d);
}
.vl-matrix10-anchor {
  position: absolute;
  left: var(--x);
  top: var(--y);
  width: 6px;
  height: 52px;
  border-radius: 99px;
  background: linear-gradient(180deg, transparent, color-mix(in srgb, var(--loader-accent) 86%, #e6f4ff), transparent);
  transform-origin: top;
  animation: vl-matrix10-neon-anchor calc(var(--loader-speed) * 1.5) ease-in-out infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix10-neon-core {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 9px;
  height: 9px;
  margin: -4px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-matrix10-neon-core calc(var(--loader-speed) * 1.05) cubic-bezier(.2, 0, .3, 1) infinite;
}
@keyframes vl-matrix10-neon-anchor {
  0% { transform: translateY(0) scaleY(.42); opacity: .16; }
  50% { transform: translateY(14px) scaleY(.94); opacity: .96; }
  100% { transform: translateY(0) scaleY(.42); opacity: .16; }
}
@keyframes vl-matrix10-neon-core {
  0%, 100% { transform: scale(.56); opacity: .24; }
  50% { transform: scale(1.06); opacity: 1; }
}`
  },
];
