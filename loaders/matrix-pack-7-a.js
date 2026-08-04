export const matrixPack7LoadersA = [
  {
    id: 'matrix-quantum-lattice-spiral',
    name: 'Quantum Lattice Spiral',
    category: 'Matrix',
    tech: 'CSS',
    description: 'A quantum lattice spiral expands and tightens as synchronized checkpoints settle.',
    markup: `<div class="vl-matrix-quantum-spiral" aria-hidden="true">
      <span style="--p:0;--r:11px;--d:0"></span><span style="--p:1;--r:18px;--d:.08"></span><span style="--p:2;--r:25px;--d:.16"></span><span style="--p:3;--r:32px;--d:.24"></span><span style="--p:4;--r:39px;--d:.32"></span>
      <span style="--p:5;--r:46px;--d:.4"></span><span style="--p:6;--r:53px;--d:.48"></span><span style="--p:7;--r:60px;--d:.56"></span><span style="--p:8;--r:67px;--d:.64"></span><span style="--p:9;--r:74px;--d:.72"></span>
      <span class="vl-matrix-quantum-core"></span>
    </div>`,
    css: `.vl-matrix-quantum-spiral {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 28%, #194a7a);
  border-radius: 14px;
  overflow: hidden;
  background: radial-gradient(circle at 50% 50%, color-mix(in srgb, var(--loader-accent) 16%, transparent), #050f1d);
}
.vl-matrix-quantum-spiral span {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 9px;
  height: 9px;
  margin: -4px;
  border-radius: 50%;
  background: color-mix(in srgb, var(--loader-accent) 84%, #fff);
  transform: rotate(calc(var(--p) * 26deg)) translateY(calc(-1px * var(--r))) scale(.66);
  animation: vl-matrix7-spiral-dot calc(var(--loader-speed) * 1.75) ease-in-out infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix-quantum-core {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 9px;
  height: 9px;
  margin: -4px;
  border-radius: 50%;
  background: var(--loader-accent);
  transform: translate(-50%, -50%);
  animation: vl-matrix7-spiral-core calc(var(--loader-speed) * 1.2) ease-in-out infinite;
}
@keyframes vl-matrix7-spiral-dot {
  0%, 100% { opacity: .2; transform: rotate(calc(var(--p) * 26deg)) translateY(calc(-1px * var(--r))) scale(.48); }
  45%, 55% { opacity: .95; transform: rotate(calc(var(--p) * 26deg + 160deg)) translateY(calc(-1px * var(--r))) scale(.98); }
}
@keyframes vl-matrix7-spiral-core {
  0%, 100% { transform: translate(-50%, -50%) scale(.45); opacity: .24; }
  50% { transform: translate(-50%, -50%) scale(1.08); opacity: 1; }
}`
  },
  {
    id: 'matrix-neural-glyph-cascade',
    name: 'Neural Glyph Cascade',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Glyph nodes cascade through layered rails while the neural core cycles through states.',
    markup: `<div class="vl-matrix-neural-glyph" aria-hidden="true">
      <span class="vl-matrix-glyph" style="--x:16px;--y:18px;--d:0"></span><span class="vl-matrix-glyph" style="--x:52px;--y:24px;--d:.12"></span><span class="vl-matrix-glyph" style="--x:88px;--y:18px;--d:.24"></span><span class="vl-matrix-glyph" style="--x:124px;--y:24px;--d:.36"></span><span class="vl-matrix-glyph" style="--x:160px;--y:18px;--d:.48"></span>
      <span class="vl-matrix-glyph" style="--x:16px;--y:56px;--d:.14"></span><span class="vl-matrix-glyph" style="--x:52px;--y:62px;--d:.26"></span><span class="vl-matrix-glyph" style="--x:88px;--y:56px;--d:.38"></span><span class="vl-matrix-glyph" style="--x:124px;--y:62px;--d:.5"></span><span class="vl-matrix-glyph" style="--x:160px;--y:56px;--d:.62"></span>
      <span class="vl-matrix-glyph-core"></span>
    </div>`,
    css: `.vl-matrix-neural-glyph {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 28%, #1a3f72);
  border-radius: 14px;
  overflow: hidden;
  background: repeating-linear-gradient(90deg, #051423 0 14px, #071d34 14px 15px, #051423 15px 28px);
}
.vl-matrix-glyph {
  position: absolute;
  left: var(--x);
  top: var(--y);
  width: 9px;
  height: 9px;
  border-radius: 2px;
  background: color-mix(in srgb, var(--loader-accent) 80%, #fff 20%);
  transform: rotate(45deg);
  animation: vl-matrix7-glyph-dot calc(var(--loader-speed) * 1.55) cubic-bezier(.4, 0, .2, 1) infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix-glyph-core {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 11px;
  height: 11px;
  margin: -5.5px;
  border-radius: 50%;
  background: var(--loader-accent);
  box-shadow: 0 0 8px color-mix(in srgb, var(--loader-accent) 70%, transparent);
  animation: vl-matrix7-glyph-core calc(var(--loader-speed) * 1.1) ease-in-out infinite;
}
@keyframes vl-matrix7-glyph-dot {
  0%, 100% { opacity: .2; transform: rotate(45deg) scale(.5); }
  50% { opacity: .95; transform: rotate(405deg) scale(1.08); }
}
@keyframes vl-matrix7-glyph-core {
  0%, 100% { transform: scale(.62); opacity: .24; }
  50% { transform: scale(1.08); opacity: 1; }
}`
  },
  {
    id: 'matrix-binary-vector-mirror',
    name: 'Binary Vector Mirror',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Paired vector lanes mirror each other, then diverge and converge again.',
    markup: `<div class="vl-matrix-vector-mirror" aria-hidden="true">
      <span class="vl-matrix-vector-line" style="--x1:14px;--y1:24px;--x2:88px;--y2:18px;--d:0"></span><span class="vl-matrix-vector-line" style="--x1:102px;--y1:18px;--x2:176px;--y2:24px;--d:.17"></span>
      <span class="vl-matrix-vector-line" style="--x1:14px;--y1:54px;--x2:88px;--y2:60px;--d:.08"></span><span class="vl-matrix-vector-line" style="--x1:102px;--y1:60px;--x2:176px;--y2:54px;--d:.25"></span>
      <span class="vl-matrix-vector-line" style="--x1:14px;--y1:84px;--x2:88px;--y2:78px;--d:.16"></span><span class="vl-matrix-vector-line" style="--x1:102px;--y1:78px;--x2:176px;--y2:84px;--d:.33"></span>
      <span class="vl-matrix-vector-core"></span>
    </div>`,
    css: `.vl-matrix-vector-mirror {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 26%, #174b75);
  border-radius: 14px;
  overflow: hidden;
  background: linear-gradient(160deg, #05111d 0 40%, #091f38 40% 100%);
}
.vl-matrix-vector-line {
  position: absolute;
  left: var(--x1);
  top: var(--y1);
  width: calc(var(--x2) - var(--x1));
  height: 2px;
  background: linear-gradient(90deg, transparent, color-mix(in srgb, var(--loader-accent) 84%, #fff), transparent);
  transform-origin: left center;
  transform: rotate(180deg);
  animation: vl-matrix7-mirror-line calc(var(--loader-speed) * 1.8) ease-in-out infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix-vector-core {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 8px;
  height: 8px;
  margin: -4px;
  border-radius: 50%;
  background: color-mix(in srgb, var(--loader-accent) 82%, #fff);
  animation: vl-matrix7-mirror-core calc(var(--loader-speed) * 1.3) linear infinite;
}
.vl-matrix-vector-line:nth-child(2n) {
  transform: scaleX(-1) rotate(-180deg);
}
@keyframes vl-matrix7-mirror-line {
  0%, 100% { opacity: .24; transform: scaleX(.45); }
  50% { opacity: .95; transform: scaleX(1); }
}
@keyframes vl-matrix7-mirror-core {
  0%, 100% { transform: scale(.6); opacity: .4; }
  50% { transform: scale(1.12); opacity: 1; }
}`
  },
  {
    id: 'matrix-pulse-clock-grid',
    name: 'Pulse Clock Grid',
    category: 'Matrix',
    tech: 'CSS',
    description: 'A grid clocks in and out with phase-shifted pulses across each row.',
    markup: `<div class="vl-matrix-pulse-grid" aria-hidden="true">
      <span class="vl-matrix-pulse-cell" style="--x:18px;--y:18px;--d:0"></span><span class="vl-matrix-pulse-cell" style="--x:51px;--y:18px;--d:.12"></span><span class="vl-matrix-pulse-cell" style="--x:84px;--y:18px;--d:.24"></span><span class="vl-matrix-pulse-cell" style="--x:117px;--y:18px;--d:.36"></span><span class="vl-matrix-pulse-cell" style="--x:150px;--y:18px;--d:.48"></span>
      <span class="vl-matrix-pulse-cell" style="--x:18px;--y:54px;--d:.08"></span><span class="vl-matrix-pulse-cell" style="--x:51px;--y:54px;--d:.2"></span><span class="vl-matrix-pulse-cell" style="--x:84px;--y:54px;--d:.32"></span><span class="vl-matrix-pulse-cell" style="--x:117px;--y:54px;--d:.44"></span><span class="vl-matrix-pulse-cell" style="--x:150px;--y:54px;--d:.56"></span>
      <span class="vl-matrix-pulse-core"></span>
    </div>`,
    css: `.vl-matrix-pulse-grid {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 30%, #193f68);
  border-radius: 14px;
  overflow: hidden;
  background: radial-gradient(circle at 50% 44%, color-mix(in srgb, var(--loader-accent) 14%, transparent), #040e1a);
}
.vl-matrix-pulse-cell {
  position: absolute;
  left: var(--x);
  top: var(--y);
  width: 8px;
  height: 8px;
  border-radius: 2px;
  background: color-mix(in srgb, var(--loader-accent) 86%, #fff);
  animation: vl-matrix7-pulse-cell calc(var(--loader-speed) * 1.6) ease-in-out infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix-pulse-core {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 10px;
  height: 10px;
  margin: -5px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-matrix7-pulse-core calc(var(--loader-speed) * 1.2) ease-in-out infinite;
}
@keyframes vl-matrix7-pulse-cell {
  0%, 100% { transform: scale(.62); opacity: .25; }
  50% { transform: scale(1); opacity: .95; }
}
@keyframes vl-matrix7-pulse-core {
  0%, 100% { transform: scale(.48); opacity: .22; }
  50% { transform: scale(1.12); opacity: .98; }
}`
  },
  {
    id: 'matrix-cradle-cascade',
    name: 'Cradle Cascade',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Paired cradle arcs ripple inward while a signal cradle pulse stays centered.',
    markup: `<div class="vl-matrix-cradle" aria-hidden="true">
      <span class="vl-matrix-cradle-ring" style="--r:34px;--d:0"></span><span class="vl-matrix-cradle-ring" style="--r:42px;--d:.18"></span><span class="vl-matrix-cradle-ring" style="--r:50px;--d:.36"></span>
      <span class="vl-matrix-cradle-ring" style="--r:58px;--d:.54"></span><span class="vl-matrix-cradle-ring" style="--r:66px;--d:.72"></span>
      <span class="vl-matrix-cradle-core"></span>
    </div>`,
    css: `.vl-matrix-cradle {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 28%, #165f8f);
  border-radius: 14px;
  overflow: hidden;
  background: linear-gradient(140deg, #051022 0 52%, #0a2542 52% 100%);
}
.vl-matrix-cradle-ring {
  position: absolute;
  left: 50%;
  top: 50%;
  width: calc(var(--r) * 2);
  height: calc(var(--r) * 2);
  margin: calc(-1 * var(--r));
  border-radius: 50%;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 68%, transparent);
  animation: vl-matrix7-cradle-ring calc(var(--loader-speed) * 2.1) linear infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix-cradle-core {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 8px;
  height: 8px;
  margin: -4px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-matrix7-cradle-core calc(var(--loader-speed) * 1.1) ease-in-out infinite;
}
@keyframes vl-matrix7-cradle-ring {
  0% { transform: translate(-50%, -50%) scale(.4) rotate(0deg); opacity: .24; }
  50% { transform: translate(-50%, -50%) scale(1); opacity: .96; }
  100% { transform: translate(-50%, -50%) scale(.4) rotate(360deg); opacity: .24; }
}
@keyframes vl-matrix7-cradle-core {
  0%, 100% { transform: scale(.5); opacity: .28; }
  50% { transform: scale(1.18); opacity: .98; }
}`
  }
];
