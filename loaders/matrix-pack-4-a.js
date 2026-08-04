export const matrixPack4LoadersA = [
  {
    id: 'matrix-fractal-core-lattice',
    name: 'Fractal Core Lattice',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Nested lattice shells breathe in and out, then rotate into new alignment points.',
    markup: `<div class="vl-matrix-fractal-core" aria-hidden="true">
      <span class="vl-matrix-fractal-shell" style="--delay:0"></span>
      <span class="vl-matrix-fractal-shell" style="--delay:.16"></span>
      <span class="vl-matrix-fractal-shell" style="--delay:.32"></span>
    </div>`,
    css: `.vl-matrix-fractal-core {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 28%, #142a4d);
  border-radius: 14px;
  overflow: hidden;
  background:
    radial-gradient(circle at 50% 56%, color-mix(in srgb, var(--loader-accent) 16%, transparent), transparent 49%),
    linear-gradient(180deg, #050c19, #081727 60%, #04101a);
}
.vl-matrix-fractal-shell {
  --size: 96px;
  position: absolute;
  left: 50%;
  top: 50%;
  width: var(--size);
  height: var(--size);
  margin: calc(var(--size) / -2);
  border: 1px solid color-mix(in srgb, var(--loader-accent) 44%, #d8ecff);
  border-radius: 22% 78% 34% 66% / 18% 20% 80% 82%;
  transform: rotate(36deg);
  opacity: .28;
  animation: vl-matrix4-fractal-shell calc(var(--loader-speed) * 2.3) cubic-bezier(.34, .04, .32, 1) infinite;
  animation-delay: calc(var(--delay) * 1s);
  box-shadow: 0 0 10px color-mix(in srgb, var(--loader-accent) 24%, transparent);
}
.vl-matrix-fractal-shell:nth-child(2) {
  --size: 74px;
  border-style: dashed;
  animation-direction: reverse;
}
.vl-matrix-fractal-shell:nth-child(3) {
  --size: 54px;
  border-radius: 72% 28% 78% 22%;
  opacity: .52;
}
@keyframes vl-matrix4-fractal-shell {
  0% { transform: rotate(36deg) scale(.72); opacity: .2; }
  42% { transform: rotate(156deg) scale(1); opacity: .56; }
  100% { transform: rotate(396deg) scale(.72); opacity: .2; }
}`
  },
  {
    id: 'matrix-signal-orbit-field',
    name: 'Signal Orbit Field',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Paired signal nodes orbit a control core and trade timing ownership each cycle.',
    markup: `<div class="vl-matrix-signal-orbit" aria-hidden="true">
      <span class="vl-matrix-orbit-core"></span>
      <span style="--a:0;--d:0"></span><span style="--a:90;--d:.16"></span><span style="--a:180;--d:.32"></span><span style="--a:270;--d:.48"></span>
      <span class="vl-matrix-orbit-tail"></span>
    </div>`,
    css: `.vl-matrix-signal-orbit {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 30%, #1b3a64);
  border-radius: 14px;
  overflow: hidden;
  background: linear-gradient(180deg, #050d17, #0a1f34);
}
.vl-matrix-orbit-core {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 16px;
  height: 16px;
  margin: -8px;
  border-radius: 50%;
  background: var(--loader-accent);
  box-shadow: 0 0 11px color-mix(in srgb, var(--loader-accent) 75%, transparent);
  animation: vl-matrix4-orbit-core calc(var(--loader-speed) * 1.9) ease-in-out infinite;
}
.vl-matrix-signal-orbit span {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 9px;
  height: 9px;
  margin: -4px;
  border-radius: 50%;
  background: color-mix(in srgb, var(--loader-accent) 80%, #fff);
  transform: rotate(calc(var(--a) * 1deg)) translate(34px) rotate(calc(var(--a) * -1deg));
  animation: vl-matrix4-orbit-pulse calc(var(--loader-speed) * 2.1) ease-in-out infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix-orbit-tail {
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  height: 1px;
  transform: translateY(-50%);
  background: linear-gradient(90deg, transparent, color-mix(in srgb, var(--loader-accent) 60%, transparent), transparent);
  animation: vl-matrix4-orbit-tail calc(var(--loader-speed) * 2.1) linear infinite;
}
@keyframes vl-matrix4-orbit-core {
  0%, 100% { transform: scale(.72); opacity: .6; }
  50% { transform: scale(1.06); opacity: 1; }
}
@keyframes vl-matrix4-orbit-pulse {
  0%, 100% { transform: rotate(calc(var(--a) * 1deg)) translate(34px) rotate(calc(var(--a) * -1deg)) scale(.62); opacity: .28; }
  48%, 68% { transform: rotate(calc(var(--a) * 1deg + 120deg)) translate(34px) rotate(calc(var(--a) * -1deg - 120deg)) scale(1); opacity: .95; }
}
@keyframes vl-matrix4-orbit-tail {
  0%, 100% { opacity: .1; transform: translateY(-50%) scaleX(.35); }
  48% { opacity: .9; transform: translateY(-50%) scaleX(1); }
}`
  },
  {
    id: 'matrix-wave-ribcage',
    name: 'Wave Ribcage',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Concentric ribs stretch and release in synchronized intervals, like protocol pressure waves.',
    markup: `<div class="vl-matrix-wave-ribcage" aria-hidden="true">
      <span class="vl-matrix-rib" style="--d:0"></span>
      <span class="vl-matrix-rib" style="--d:.1"></span>
      <span class="vl-matrix-rib" style="--d:.2"></span>
      <span class="vl-matrix-rib" style="--d:.3"></span>
      <span class="vl-matrix-rib" style="--d:.4"></span>
      <span class="vl-matrix-rib-core"></span>
    </div>`,
    css: `.vl-matrix-wave-ribcage {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 27%, #16385a);
  border-radius: 14px;
  overflow: hidden;
  background: linear-gradient(165deg, #050f1d, #0a2033 57%, #040b12);
}
.vl-matrix-rib {
  --len: 132px;
  position: absolute;
  left: 50%;
  top: 52%;
  width: var(--len);
  height: 1px;
  margin-left: -66px;
  border-top: 1px solid color-mix(in srgb, var(--loader-accent) 56%, #fff);
  transform-origin: center;
  opacity: .18;
  animation: vl-matrix4-wave-rib calc(var(--loader-speed) * 1.85) ease-in-out infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix-rib:nth-child(2) { --len: 108px; margin-left: -54px; top: 50%; }
.vl-matrix-rib:nth-child(3) { --len: 84px; margin-left: -42px; top: 48%; }
.vl-matrix-rib:nth-child(4) { --len: 108px; margin-left: -54px; top: 56%; }
.vl-matrix-rib:nth-child(5) { --len: 132px; margin-left: -66px; top: 58%; }
.vl-matrix-rib-core {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 14px;
  height: 14px;
  margin: -7px;
  border-radius: 50%;
  background: color-mix(in srgb, var(--loader-accent) 88%, #fff 12%);
  animation: vl-matrix4-rib-core calc(var(--loader-speed) * 1.85) ease-in-out infinite;
}
@keyframes vl-matrix4-wave-rib {
  0% { transform: scaleX(.36) rotate(-7deg); opacity: .16; }
  42% { transform: scaleX(1) rotate(5deg); opacity: .9; }
  100% { transform: scaleX(.36) rotate(-7deg); opacity: .16; }
}
@keyframes vl-matrix4-rib-core {
  0%, 100% { box-shadow: 0 0 7px transparent; transform: scale(.72); }
  50% { box-shadow: 0 0 16px color-mix(in srgb, var(--loader-accent) 72%, transparent); transform: scale(1.12); }
}`
  },
  {
    id: 'matrix-data-flux-rings',
    name: 'Data Flux Rings',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Rings expand and contract like flux boundaries, then exchange charge bursts.',
    markup: `<div class="vl-matrix-flux-rings" aria-hidden="true">
      <span class="vl-matrix-flux-ring" style="--d:0"></span>
      <span class="vl-matrix-flux-ring" style="--d:.2"></span>
      <span class="vl-matrix-flux-ring" style="--d:.4"></span>
      <span class="vl-matrix-flux-center"></span>
    </div>`,
    css: `.vl-matrix-flux-rings {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 30%, #10395b);
  border-radius: 14px;
  overflow: hidden;
  background: radial-gradient(circle at 50% 52%, color-mix(in srgb, var(--loader-accent) 12%, transparent), #040c16);
}
.vl-matrix-flux-ring {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 12px;
  height: 12px;
  margin: -6px;
  border-radius: 50%;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 78%, #d6e7ff);
  animation: vl-matrix4-flux-ring calc(var(--loader-speed) * 2) ease-in-out infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix-flux-ring:nth-child(2) { border-style: dashed; }
.vl-matrix-flux-ring:nth-child(3) { animation-timing-function: linear; }
.vl-matrix-flux-center {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 8px;
  height: 8px;
  margin: -4px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-matrix4-flux-center calc(var(--loader-speed) * 1.25) ease-in-out infinite;
}
@keyframes vl-matrix4-flux-ring {
  0% { transform: translate(-50%, -50%) scale(0.2); opacity: .22; }
  45%, 75% { opacity: .96; }
  100% { transform: translate(-50%, -50%) scale(4); opacity: .12; }
}
@keyframes vl-matrix4-flux-center {
  0%, 100% { transform: translate(-50%, -50%) scale(.72); box-shadow: 0 0 8px color-mix(in srgb, var(--loader-accent) 42%, transparent); }
  50% { transform: translate(-50%, -50%) scale(1.15); box-shadow: 0 0 14px color-mix(in srgb, var(--loader-accent) 82%, transparent); }
}`
  },
  {
    id: 'matrix-spiral-checker-lane',
    name: 'Spiral Checker Lane',
    category: 'Matrix',
    tech: 'CSS',
    description: 'A checker stream rotates in spirals and validates alternating lanes.',
    markup: `<div class="vl-matrix-spi-checker" aria-hidden="true">
      <span style="--x:16;--y:6;--d:0"></span>
      <span style="--x:48;--y:16;--d:.12"></span>
      <span style="--x:80;--y:26;--d:.24"></span>
      <span style="--x:112;--y:36;--d:.36"></span>
      <span style="--x:144;--y:46;--d:.48"></span>
      <span style="--x:16;--y:56;--d:.6"></span>
      <span style="--x:48;--y:66;--d:.72"></span>
      <span class="vl-matrix-spi-core"></span>
    </div>`,
    css: `.vl-matrix-spi-checker {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 31%, #12395b);
  border-radius: 14px;
  overflow: hidden;
  background: linear-gradient(140deg, #050d16, #0a1f36 60%, #03090f);
}
.vl-matrix-spi-checker span {
  position: absolute;
  left: calc(var(--x) * 1px);
  top: calc(var(--y) * 1px);
  width: 12px;
  height: 12px;
  border-radius: 3px;
  background: color-mix(in srgb, var(--loader-accent) 72%, #fff 28%);
  animation: vl-matrix4-spi-dot calc(var(--loader-speed) * 2.1) cubic-bezier(.37, .06, .2, 1) infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix-spi-checker span:nth-child(even) {
  background: color-mix(in srgb, var(--loader-accent) 45%, #d8e6f2);
}
.vl-matrix-spi-core {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 11px;
  height: 11px;
  margin: -5px;
  border-radius: 50%;
  background: var(--loader-accent);
  opacity: .84;
  animation: vl-matrix4-spi-core calc(var(--loader-speed) * 2.2) ease-in-out infinite;
}
@keyframes vl-matrix4-spi-dot {
  0%, 100% { transform: translate(0, 0) scale(.55); opacity: .2; }
  45%, 68% { transform: translate(52px, 28px) rotate(30deg) scale(1); opacity: .95; }
}
@keyframes vl-matrix4-spi-core {
  0%, 100% { transform: translate(-50%, -50%) scale(.72); }
  50% { transform: translate(-50%, -50%) scale(1.12); }
}`
  }
];
