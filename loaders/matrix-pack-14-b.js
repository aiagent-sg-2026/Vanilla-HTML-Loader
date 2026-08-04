export const matrixPack14LoadersB = [
  {
    id: 'matrix-spectral-gate-array',
    name: 'Spectral Gate Array',
    category: 'Matrix',
    tech: 'CSS',
    description: 'A rotating gate array opens and closes spectral lanes around a centered node.',
    markup: `<div class="vl-matrix14-spectral-array" aria-hidden="true">
      <span class="vl-matrix14-spectral-gate" style="--a:0deg;--d:0"></span>
      <span class="vl-matrix14-spectral-gate" style="--a:72deg;--d:.16"></span>
      <span class="vl-matrix14-spectral-gate" style="--a:144deg;--d:.32"></span>
      <span class="vl-matrix14-spectral-gate" style="--a:216deg;--d:.48"></span>
      <span class="vl-matrix14-spectral-gate" style="--a:288deg;--d:.64"></span>
      <span class="vl-matrix14-spectral-core"></span>
    </div>`,
    css: `.vl-matrix14-spectral-array {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 24%, #1d5e8f);
  border-radius: 14px;
  overflow: hidden;
  background: linear-gradient(145deg, #061726, #0d3452 58%, #04111f);
}
.vl-matrix14-spectral-gate {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 44px;
  height: 44px;
  margin: -22px;
  border-radius: 50%;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 80%, #def2ff);
  transform: rotate(var(--a));
  animation: vl-matrix14-spectral-gate calc(var(--loader-speed) * 1.7) linear infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix14-spectral-core {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 7px;
  height: 7px;
  margin: -3px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-matrix14-spectral-core calc(var(--loader-speed) * 1.08) ease-in-out infinite;
}
@keyframes vl-matrix14-spectral-gate {
  0%, 100% { transform: rotate(var(--a)) scale(.36); opacity: .2; }
  50% { transform: rotate(calc(var(--a) + 360deg)) scale(1.06); opacity: .95; }
}
@keyframes vl-matrix14-spectral-core {
  0%, 100% { transform: scale(.54); opacity: .2; }
  50% { transform: scale(1.06); opacity: 1; }
}`
  },
  {
    id: 'matrix-lattice-echo-thread',
    name: 'Lattice Echo Thread',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Threads ping in sequence, then echo into a woven lattice around the midpoint.',
    markup: `<div class="vl-matrix14-lattice-thread" aria-hidden="true">
      <span class="vl-matrix14-thread" style="--d:0;--x:24px;--o:.7"></span>
      <span class="vl-matrix14-thread" style="--d:.14;--x:57px;--o:.82"></span>
      <span class="vl-matrix14-thread" style="--d:.28;--x:90px;--o:.64"></span>
      <span class="vl-matrix14-thread" style="--d:.42;--x:123px;--o:.78"></span>
      <span class="vl-matrix14-thread" style="--d:.56;--x:156px;--o:.58"></span>
      <span class="vl-matrix14-thread-core"></span>
    </div>`,
    css: `.vl-matrix14-lattice-thread {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 22%, #1e6295);
  border-radius: 14px;
  overflow: hidden;
  background: repeating-linear-gradient(100deg, #06172c 0 9px, #0c3352 9px 10px, #06172c 10px 19px);
}
.vl-matrix14-thread {
  position: absolute;
  left: var(--x);
  top: 14px;
  width: 7px;
  height: 80px;
  border-radius: 4px;
  opacity: var(--o);
  background: linear-gradient(180deg, transparent, color-mix(in srgb, var(--loader-accent) 84%, #e5f3fd), transparent);
  animation: vl-matrix14-thread-wave calc(var(--loader-speed) * 1.38) ease-in-out infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix14-thread-core {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 8px;
  height: 8px;
  margin: -4px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-matrix14-thread-core calc(var(--loader-speed) * 1.1) linear infinite;
}
@keyframes vl-matrix14-thread-wave {
  0%, 100% { transform: scaleY(.3); opacity: .18; }
  50% { transform: scaleY(1.08); opacity: .94; }
}
@keyframes vl-matrix14-thread-core {
  0%, 100% { transform: scale(.54); opacity: .18; }
  50% { transform: scale(1.08); opacity: 1; }
}`
  },
  {
    id: 'matrix-pulse-lattice-vein',
    name: 'Pulse Lattice Vein',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Pulse veins open along a lattice and travel in counter-phase across the frame.',
    markup: `<div class="vl-matrix14-lattice-vein" aria-hidden="true">
      <span class="vl-matrix14-vein" style="--d:0;--x:22px"></span>
      <span class="vl-matrix14-vein" style="--d:.18;--x:54px"></span>
      <span class="vl-matrix14-vein" style="--d:.36;--x:86px"></span>
      <span class="vl-matrix14-vein" style="--d:.54;--x:118px"></span>
      <span class="vl-matrix14-vein" style="--d:.72;--x:150px"></span>
      <span class="vl-matrix14-vein-core"></span>
    </div>`,
    css: `.vl-matrix14-lattice-vein {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 24%, #1d618f);
  border-radius: 14px;
  overflow: hidden;
  background: radial-gradient(circle at 50% 50%, color-mix(in srgb, var(--loader-accent) 16%, transparent), #051423 62%);
}
.vl-matrix14-vein {
  position: absolute;
  left: var(--x);
  top: 10px;
  width: 9px;
  height: 88px;
  border-radius: 7px;
  background: linear-gradient(180deg, color-mix(in srgb, var(--loader-accent) 20%, transparent), color-mix(in srgb, var(--loader-accent) 80%, #e9f4fe), color-mix(in srgb, var(--loader-accent) 20%, transparent));
  box-shadow: 0 0 9px color-mix(in srgb, var(--loader-accent) 40%, transparent);
  animation: vl-matrix14-vein-pulse calc(var(--loader-speed) * 1.6) ease-in-out infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix14-vein-core {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 9px;
  height: 9px;
  margin: -4px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-matrix14-vein-core calc(var(--loader-speed) * 1.07) ease-in-out infinite;
}
@keyframes vl-matrix14-vein-pulse {
  0%, 100% { transform: scaleY(.34); opacity: .2; }
  50% { transform: scaleY(1.04); opacity: .96; }
}
@keyframes vl-matrix14-vein-core {
  0%, 100% { transform: scale(.52); opacity: .18; }
  50% { transform: scale(1.08); opacity: 1; }
}`
  },
  {
    id: 'matrix-binary-veil-grid',
    name: 'Binary Veil Grid',
    category: 'Matrix',
    tech: 'CSS',
    description: 'A binary veil flickers in short bars over a thin matrix grid backbone.',
    markup: `<div class="vl-matrix14-binary-veil" aria-hidden="true">
      <span class="vl-matrix14-binary-row" style="--d:0;--y:18px"></span>
      <span class="vl-matrix14-binary-row" style="--d:.13;--y:34px"></span>
      <span class="vl-matrix14-binary-row" style="--d:.26;--y:50px"></span>
      <span class="vl-matrix14-binary-row" style="--d:.39;--y:66px"></span>
      <span class="vl-matrix14-binary-row" style="--d:.52;--y:82px"></span>
      <span class="vl-matrix14-binary-core"></span>
    </div>`,
    css: `.vl-matrix14-binary-veil {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 24%, #1d5f8d);
  border-radius: 14px;
  overflow: hidden;
  background: linear-gradient(180deg, #061727, #082f4e 56%, #04121f);
}
.vl-matrix14-binary-row {
  position: absolute;
  left: 10px;
  top: var(--y);
  width: 170px;
  height: 8px;
  border-radius: 6px;
  background: linear-gradient(90deg, transparent, color-mix(in srgb, var(--loader-accent) 80%, #e4f2fd), transparent);
  animation: vl-matrix14-binary-row calc(var(--loader-speed) * 1.34) linear infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix14-binary-core {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 8px;
  height: 8px;
  margin: -4px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-matrix14-binary-core calc(var(--loader-speed) * 1.05) linear infinite;
}
@keyframes vl-matrix14-binary-row {
  0%, 100% { opacity: .18; transform: scaleX(.34); }
  50% { opacity: .95; transform: scaleX(1); }
}
@keyframes vl-matrix14-binary-core {
  0%, 100% { transform: scale(.52); opacity: .18; }
  50% { transform: scale(1.08); opacity: 1; }
}`
  },
  {
    id: 'matrix-fractal-pulse-ribbon',
    name: 'Fractal Pulse Ribbon',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Nested ribbons bloom from fractal nodes and pulse in a repeating recursion rhythm.',
    markup: `<div class="vl-matrix14-fractal-ribbon" aria-hidden="true">
      <span class="vl-matrix14-fractal-segment" style="--d:0;--s:1;--x:28px"></span>
      <span class="vl-matrix14-fractal-segment" style="--d:.18;--s:.74;--x:66px"></span>
      <span class="vl-matrix14-fractal-segment" style="--d:.36;--s:.58;--x:104px"></span>
      <span class="vl-matrix14-fractal-segment" style="--d:.54;--s:.4;--x:142px"></span>
      <span class="vl-matrix14-fractal-core"></span>
    </div>`,
    css: `.vl-matrix14-fractal-ribbon {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 22%, #1d5f8e);
  border-radius: 14px;
  overflow: hidden;
  background: radial-gradient(circle at 50% 54%, color-mix(in srgb, var(--loader-accent) 16%, transparent), #051421 62%);
}
.vl-matrix14-fractal-segment {
  position: absolute;
  left: var(--x);
  top: 50%;
  width: 30px;
  height: 2px;
  margin-top: -1px;
  border-radius: 99px;
  transform-origin: center;
  background: linear-gradient(90deg, transparent, color-mix(in srgb, var(--loader-accent) 84%, #ebf3fd), transparent);
  transform: scaleX(var(--s));
  animation: vl-matrix14-fractal-segment calc(var(--loader-speed) * 1.54) ease-in-out infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix14-fractal-core {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 8px;
  height: 8px;
  margin: -4px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-matrix14-fractal-core calc(var(--loader-speed) * 1.05) ease-in-out infinite;
}
@keyframes vl-matrix14-fractal-segment {
  0%, 100% { transform: scaleX(var(--s)) scaleY(.9); opacity: .2; }
  50% { transform: scaleX(var(--s)) scaleY(1.5); opacity: .94; }
}
@keyframes vl-matrix14-fractal-core {
  0%, 100% { transform: scale(.52); opacity: .18; }
  50% { transform: scale(1.08); opacity: 1; }
}`
  }
];
