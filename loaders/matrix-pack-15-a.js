export const matrixPack15LoadersA = [
  {
    id: 'matrix-crystal-vector-bloom',
    name: 'Crystal Vector Bloom',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Vector bursts bloom from a crystal core, then fade along nested rails.',
    markup: `<div class="vl-matrix15-crystal-bloom" aria-hidden="true">
      <span class="vl-matrix15-crystal-core"></span>
      <span class="vl-matrix15-crystal-ray" style="--d:0;--a:0deg"></span>
      <span class="vl-matrix15-crystal-ray" style="--d:.12;--a:72deg"></span>
      <span class="vl-matrix15-crystal-ray" style="--d:.24;--a:144deg"></span>
      <span class="vl-matrix15-crystal-ray" style="--d:.36;--a:216deg"></span>
      <span class="vl-matrix15-crystal-ray" style="--d:.48;--a:288deg"></span>
    </div>`,
    css: `.vl-matrix15-crystal-bloom {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 24%, #1f5f8c);
  border-radius: 14px;
  overflow: hidden;
  background: radial-gradient(circle at 50% 54%, color-mix(in srgb, var(--loader-accent) 20%, transparent), #04121f 68%);
}
.vl-matrix15-crystal-core {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 8px;
  height: 8px;
  margin: -4px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-matrix15-crystal-core calc(var(--loader-speed) * 1.07) linear infinite;
}
.vl-matrix15-crystal-ray {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 2px;
  height: 36px;
  margin-top: -18px;
  transform-origin: center 18px;
  transform: rotate(var(--a));
  border-radius: 99px;
  background: linear-gradient(180deg, transparent, color-mix(in srgb, var(--loader-accent) 84%, #e4f3fd));
  animation: vl-matrix15-crystal-ray calc(var(--loader-speed) * 1.48) ease-in-out infinite;
  animation-delay: calc(var(--d) * 1s);
}
@keyframes vl-matrix15-crystal-core {
  0%, 100% { transform: scale(.52); opacity: .2; }
  50% { transform: scale(1.08); opacity: 1; }
}
@keyframes vl-matrix15-crystal-ray {
  0%, 100% { transform: rotate(var(--a)) scaleY(.33); opacity: .2; }
  50% { transform: rotate(calc(var(--a) + 360deg)) scaleY(1); opacity: .94; }
}`
  },
  {
    id: 'matrix-ribbon-photon-lace',
    name: 'Ribbon Photon Lace',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Interleaving photon ribbons fold into a repeating lace pattern.',
    markup: `<div class="vl-matrix15-photon-lace" aria-hidden="true">
      <span class="vl-matrix15-photon-ribbon" style="--d:0;--y:12px;--x:12px"></span>
      <span class="vl-matrix15-photon-ribbon" style="--d:.14;--y:24px;--x:28px"></span>
      <span class="vl-matrix15-photon-ribbon" style="--d:.28;--y:36px;--x:44px"></span>
      <span class="vl-matrix15-photon-ribbon" style="--d:.42;--y:48px;--x:60px"></span>
      <span class="vl-matrix15-photon-ribbon" style="--d:.56;--y:60px;--x:76px"></span>
      <span class="vl-matrix15-photon-core"></span>
    </div>`,
    css: `.vl-matrix15-photon-lace {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 22%, #1e608e);
  border-radius: 14px;
  overflow: hidden;
  background: linear-gradient(145deg, #051826, #0d3553 58%, #04111d);
}
.vl-matrix15-photon-ribbon {
  position: absolute;
  left: var(--x);
  top: var(--y);
  width: 120px;
  height: 4px;
  border-radius: 99px;
  background: linear-gradient(90deg, transparent, color-mix(in srgb, var(--loader-accent) 90%, #dff3fd), transparent);
  opacity: .7;
  animation: vl-matrix15-photon-ribbon calc(var(--loader-speed) * 1.52) ease-in-out infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix15-photon-core {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 9px;
  height: 9px;
  margin: -4px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-matrix15-photon-core calc(var(--loader-speed) * 1.06) linear infinite;
}
@keyframes vl-matrix15-photon-ribbon {
  0%, 100% { transform: scaleX(.34); opacity: .18; }
  50% { transform: scaleX(1); opacity: .94; }
}
@keyframes vl-matrix15-photon-core {
  0%, 100% { transform: scale(.54); opacity: .2; }
  50% { transform: scale(1.09); opacity: 1; }
}`
  },
  {
    id: 'matrix-vector-wave-orbit',
    name: 'Vector Wave Orbit',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Wavefronts orbit through a compact matrix and collapse into a steady node.',
    markup: `<div class="vl-matrix15-vector-orbit" aria-hidden="true">
      <span class="vl-matrix15-wave" style="--d:0;--s:12px"></span>
      <span class="vl-matrix15-wave" style="--d:.17;--s:18px"></span>
      <span class="vl-matrix15-wave" style="--d:.34;--s:24px"></span>
      <span class="vl-matrix15-wave" style="--d:.51;--s:30px"></span>
      <span class="vl-matrix15-wave-core"></span>
    </div>`,
    css: `.vl-matrix15-vector-orbit {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 22%, #1c5f8f);
  border-radius: 14px;
  overflow: hidden;
  background: radial-gradient(circle at 50% 56%, color-mix(in srgb, var(--loader-accent) 18%, transparent), #04111f 68%);
}
.vl-matrix15-wave {
  position: absolute;
  left: 50%;
  top: 50%;
  width: calc(var(--s) * 2);
  height: calc(var(--s) * 2);
  margin: calc(var(--s) * -1);
  border-radius: 50%;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 80%, #dff3fe);
  animation: vl-matrix15-wave-ring calc(var(--loader-speed) * 1.64) linear infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix15-wave-core {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 8px;
  height: 8px;
  margin: -4px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-matrix15-wave-core calc(var(--loader-speed) * 1.06) ease-in-out infinite;
}
@keyframes vl-matrix15-wave-ring {
  0%, 100% { transform: scale(.34); opacity: .2; }
  50% { transform: scale(1.08); opacity: .94; }
}
@keyframes vl-matrix15-wave-core {
  0%, 100% { transform: scale(.54); opacity: .18; }
  50% { transform: scale(1.08); opacity: 1; }
}`
  },
  {
    id: 'matrix-luminous-thread-lattice',
    name: 'Luminous Thread Lattice',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Vertical threads pulse in and out, then synchronize into a crossbar lattice.',
    markup: `<div class="vl-matrix15-thread-lattice" aria-hidden="true">
      <span class="vl-matrix15-thread" style="--d:0;--x:24px"></span>
      <span class="vl-matrix15-thread" style="--d:.15;--x:54px"></span>
      <span class="vl-matrix15-thread" style="--d:.30;--x:84px"></span>
      <span class="vl-matrix15-thread" style="--d:.45;--x:114px"></span>
      <span class="vl-matrix15-thread" style="--d:.60;--x:144px"></span>
      <span class="vl-matrix15-thread-core"></span>
    </div>`,
    css: `.vl-matrix15-thread-lattice {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 22%, #1e5f8f);
  border-radius: 14px;
  overflow: hidden;
  background: repeating-linear-gradient(130deg, #061628 0 6px, #0a3352 6px 7px, #061628 7px 14px);
}
.vl-matrix15-thread {
  position: absolute;
  left: var(--x);
  top: 9px;
  width: 7px;
  height: 86px;
  border-radius: 99px;
  background: linear-gradient(180deg, transparent, color-mix(in srgb, var(--loader-accent) 86%, #e5f3fd) 58%, transparent);
  animation: vl-matrix15-thread-bloom calc(var(--loader-speed) * 1.38) cubic-bezier(.2, .62, .2, 1) infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix15-thread-core {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 9px;
  height: 9px;
  margin: -4px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-matrix15-thread-core calc(var(--loader-speed) * 1.08) linear infinite;
}
@keyframes vl-matrix15-thread-bloom {
  0%, 100% { transform: scaleY(.4); opacity: .2; }
  50% { transform: scaleY(1.06); opacity: .96; }
}
@keyframes vl-matrix15-thread-core {
  0%, 100% { transform: scale(.54); opacity: .18; }
  50% { transform: scale(1.07); opacity: 1; }
}`
  },
  {
    id: 'matrix-neural-fiber-grid',
    name: 'Neural Fiber Grid',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Neural fibers sweep in layered strokes and settle into a stable pulse grid.',
    markup: `<div class="vl-matrix15-fiber-grid" aria-hidden="true">
      <span class="vl-matrix15-fiber" style="--d:0;--y:16px;--x:18px"></span>
      <span class="vl-matrix15-fiber" style="--d:.16;--y:34px;--x:42px"></span>
      <span class="vl-matrix15-fiber" style="--d:.32;--y:52px;--x:66px"></span>
      <span class="vl-matrix15-fiber" style="--d:.48;--y:70px;--x:90px"></span>
      <span class="vl-matrix15-fiber" style="--d:.64;--y:88px;--x:114px"></span>
      <span class="vl-matrix15-fiber-core"></span>
    </div>`,
    css: `.vl-matrix15-fiber-grid {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 24%, #1d5f8d);
  border-radius: 14px;
  overflow: hidden;
  background: linear-gradient(170deg, #061625, #0a3552 58%, #04111d);
}
.vl-matrix15-fiber {
  position: absolute;
  left: var(--x);
  top: var(--y);
  width: 60px;
  height: 6px;
  border-radius: 99px;
  background: linear-gradient(90deg, transparent, color-mix(in srgb, var(--loader-accent) 78%, #e4f3fd), transparent);
  animation: vl-matrix15-fiber-spark calc(var(--loader-speed) * 1.44) ease-in-out infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix15-fiber-core {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 8px;
  height: 8px;
  margin: -4px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-matrix15-fiber-core calc(var(--loader-speed) * 1.06) ease-in-out infinite;
}
@keyframes vl-matrix15-fiber-spark {
  0%, 100% { transform: scaleX(.32); opacity: .2; }
  50% { transform: scaleX(1); opacity: .95; }
}
@keyframes vl-matrix15-fiber-core {
  0%, 100% { transform: scale(.54); opacity: .18; }
  50% { transform: scale(1.08); opacity: 1; }
}`
  }
];
