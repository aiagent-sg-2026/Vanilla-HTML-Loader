export const matrixPack9LoadersB = [
  {
    id: 'matrix-signal-phaser-ring',
    name: 'Signal Phaser Ring',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Phased arcs sweep repeatedly through a ring and converge into a central pulse.',
    markup: `<div class="vl-matrix9-phaser-ring" aria-hidden="true">
      <span class="vl-matrix9-phaser-arc" style="--d:0;--w:66px"></span>
      <span class="vl-matrix9-phaser-arc" style="--d:.13;--w:58px"></span>
      <span class="vl-matrix9-phaser-arc" style="--d:.26;--w:50px"></span>
      <span class="vl-matrix9-phaser-arc" style="--d:.39;--w:42px"></span>
      <span class="vl-matrix9-phaser-core"></span>
    </div>`,
    css: `.vl-matrix9-phaser-ring {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 30%, #1e628f);
  border-radius: 14px;
  overflow: hidden;
  background: radial-gradient(circle at 50% 55%, color-mix(in srgb, var(--loader-accent) 20%, transparent), #04131f 56%);
}
.vl-matrix9-phaser-arc {
  position: absolute;
  left: 50%;
  top: 50%;
  width: var(--w);
  height: calc(var(--w) / 2);
  margin-left: calc(var(--w) / -2);
  margin-top: calc(var(--w) / -2);
  border-top: 1px solid transparent;
  border-right: 1px solid color-mix(in srgb, var(--loader-accent) 84%, #dfeffd);
  border-bottom: 1px solid color-mix(in srgb, var(--loader-accent) 14%, transparent);
  border-left: 1px solid transparent;
  border-radius: 50%;
  opacity: .28;
  transform-origin: 50% 100%;
  animation: vl-matrix9-phaser-arc calc(var(--loader-speed) * 1.75) ease-in-out infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix9-phaser-core {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 9px;
  height: 9px;
  margin: -4px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-matrix9-phaser-core calc(var(--loader-speed) * 1.1) cubic-bezier(.25, 1, .5, 1) infinite;
}
@keyframes vl-matrix9-phaser-arc {
  0%, 100% { transform: rotate(0deg) scale(.62); opacity: .2; }
  50% { transform: rotate(220deg) scale(1); opacity: .95; }
}
@keyframes vl-matrix9-phaser-core {
  0%, 100% { transform: scale(.56); opacity: .2; }
  50% { transform: scale(1.06); opacity: 1; }
}`
  },
  {
    id: 'matrix-byte-wave-grid',
    name: 'Byte Wave Grid',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Byte-like bars pulse in a staggered grid, then phase-shift into a single sweep.',
    markup: `<div class="vl-matrix9-byte-grid" aria-hidden="true">
      <span class="vl-matrix9-byte-bar" style="--x:20px;--d:0"></span>
      <span class="vl-matrix9-byte-bar" style="--x:42px;--d:.09"></span>
      <span class="vl-matrix9-byte-bar" style="--x:64px;--d:.18"></span>
      <span class="vl-matrix9-byte-bar" style="--x:86px;--d:.27"></span>
      <span class="vl-matrix9-byte-bar" style="--x:108px;--d:.36"></span>
      <span class="vl-matrix9-byte-bar" style="--x:130px;--d:.45"></span>
      <span class="vl-matrix9-byte-bar" style="--x:152px;--d:.54"></span>
      <span class="vl-matrix9-byte-core"></span>
    </div>`,
    css: `.vl-matrix9-byte-grid {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 22%, #1f6290);
  border-radius: 14px;
  overflow: hidden;
  background: linear-gradient(160deg, #05111d, #082643 58%, #04101a);
}
.vl-matrix9-byte-bar {
  position: absolute;
  left: var(--x);
  bottom: 10px;
  width: 6px;
  height: 70px;
  border-radius: 4px;
  background: linear-gradient(180deg, transparent, color-mix(in srgb, var(--loader-accent) 86%, #e4f1ff), transparent);
  transform-origin: bottom;
  opacity: .23;
  animation: vl-matrix9-byte-bar calc(var(--loader-speed) * 1.4) ease-in-out infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix9-byte-core {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 8px;
  height: 8px;
  margin: -4px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-matrix9-byte-core calc(var(--loader-speed) * 1.08) linear infinite;
}
@keyframes vl-matrix9-byte-bar {
  0%, 100% { transform: scaleY(.22); opacity: .2; }
  50% { transform: scaleY(1); opacity: .9; }
}
@keyframes vl-matrix9-byte-core {
  0%, 100% { transform: scale(.52); opacity: .22; }
  50% { transform: scale(1.08); opacity: 1; }
}`
  },
  {
    id: 'matrix-fractal-node-braid',
    name: 'Fractal Node Braid',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Brazed node arcs braid left-to-right while the center marker toggles each braid turn.',
    markup: `<div class="vl-matrix9-fractal-braid" aria-hidden="true">
      <span class="vl-matrix9-braid-line" style="--y:22px;--d:0"></span>
      <span class="vl-matrix9-braid-line" style="--y:44px;--d:.16"></span>
      <span class="vl-matrix9-braid-line" style="--y:66px;--d:.32"></span>
      <span class="vl-matrix9-braid-line" style="--y:88px;--d:.48"></span>
      <span class="vl-matrix9-fractal-core"></span>
    </div>`,
    css: `.vl-matrix9-fractal-braid {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 24%, #1d608f);
  border-radius: 14px;
  overflow: hidden;
  background: repeating-linear-gradient(100deg, #061524 0 11px, #092e4a 11px 12px, #061524 12px 23px);
}
.vl-matrix9-braid-line {
  position: absolute;
  left: 14px;
  top: var(--y);
  width: 160px;
  height: 4px;
  border-radius: 99px;
  opacity: .3;
  background: linear-gradient(90deg, transparent, color-mix(in srgb, var(--loader-accent) 88%, #e8f4ff), transparent);
  transform-origin: center;
  animation: vl-matrix9-fractal-braid calc(var(--loader-speed) * 1.55) ease-in-out infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix9-fractal-core {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 9px;
  height: 9px;
  margin: -4px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-matrix9-fractal-core calc(var(--loader-speed) * 1.12) cubic-bezier(.2, 0, .3, 1) infinite;
}
@keyframes vl-matrix9-fractal-braid {
  0%, 100% { width: 40px; opacity: .16; }
  50% { width: 160px; opacity: .96; }
}
@keyframes vl-matrix9-fractal-core {
  0%, 100% { transform: scale(.58); opacity: .24; }
  50% { transform: scale(1.06); opacity: 1; }
}`
  },
  {
    id: 'matrix-logic-orbit-loom',
    name: 'Logic Orbit Loom',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Nested orbiting lanes weave logic pulses around a center that keeps cadence.',
    markup: `<div class="vl-matrix9-logic-looom" aria-hidden="true">
      <span class="vl-matrix9-loom-ring" style="--r:18px;--d:0"></span>
      <span class="vl-matrix9-loom-ring" style="--r:28px;--d:.18"></span>
      <span class="vl-matrix9-loom-ring" style="--r:38px;--d:.36"></span>
      <span class="vl-matrix9-loom-ring" style="--r:48px;--d:.54"></span>
      <span class="vl-matrix9-logic-core"></span>
    </div>`,
    css: `.vl-matrix9-logic-looom {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 26%, #206591);
  border-radius: 14px;
  overflow: hidden;
  background: radial-gradient(circle at 50% 52%, color-mix(in srgb, var(--loader-accent) 18%, transparent), #04131f 59%);
}
.vl-matrix9-loom-ring {
  position: absolute;
  left: 50%;
  top: 50%;
  width: calc(var(--r) * 2);
  height: calc(var(--r) * 2);
  margin: calc(var(--r) * -1);
  border-radius: 50%;
  border: 1px dashed color-mix(in srgb, var(--loader-accent) 76%, #e6f2fc);
  opacity: .2;
  animation: vl-matrix9-logic-looom calc(var(--loader-speed) * 1.7) linear infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix9-logic-core {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 8px;
  height: 8px;
  margin: -4px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-matrix9-logic-core calc(var(--loader-speed) * 1.05) ease-in-out infinite;
}
@keyframes vl-matrix9-logic-looom {
  0%, 100% { transform: translate(-50%, -50%) rotate(0deg) scale(.35); opacity: .15; }
  50% { transform: translate(-50%, -50%) rotate(220deg) scale(1); opacity: .95; }
}
@keyframes vl-matrix9-logic-core {
  0%, 100% { transform: translate(-50%, -50%) scale(.52); }
  50% { transform: translate(-50%, -50%) scale(1.08); }
}`
  },
  {
    id: 'matrix-hyperlane-bridge',
    name: 'Hyperlane Bridge',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Two pulse lanes cross repeatedly and bridge at the center in synchronized handoffs.',
    markup: `<div class="vl-matrix9-hyperlane-bridge" aria-hidden="true">
      <span class="vl-matrix9-hyper-lane" style="--d:0;--x:16px"></span>
      <span class="vl-matrix9-hyper-lane" style="--d:.15;--x:64px"></span>
      <span class="vl-matrix9-hyper-lane" style="--d:.3;--x:112px"></span>
      <span class="vl-matrix9-hyper-lane" style="--d:.45;--x:160px"></span>
      <span class="vl-matrix9-hyper-core"></span>
    </div>`,
    css: `.vl-matrix9-hyperlane-bridge {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 24%, #17608f);
  border-radius: 14px;
  overflow: hidden;
  background: linear-gradient(130deg, #041322, #0b3252 58%, #04111c);
}
.vl-matrix9-hyper-lane {
  position: absolute;
  left: var(--x);
  top: 20px;
  width: 1px;
  height: 66px;
  background: linear-gradient(180deg, color-mix(in srgb, var(--loader-accent) 12%, transparent), color-mix(in srgb, var(--loader-accent) 86%, #e7f3fc), color-mix(in srgb, var(--loader-accent) 12%, transparent));
  opacity: .22;
  animation: vl-matrix9-hyper-lane calc(var(--loader-speed) * 1.55) ease-in-out infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix9-hyper-core {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 9px;
  height: 9px;
  margin: -4.5px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-matrix9-hyper-core calc(var(--loader-speed) * 1.15) cubic-bezier(.2, 0, .3, 1) infinite;
}
@keyframes vl-matrix9-hyper-lane {
  0%, 100% { transform: scaleY(.35); opacity: .18; }
  50% { transform: scaleY(1); opacity: .98; }
}
@keyframes vl-matrix9-hyper-core {
  0%, 100% { transform: scale(.58); opacity: .24; }
  50% { transform: scale(1.08); opacity: 1; }
}`
  }
];
