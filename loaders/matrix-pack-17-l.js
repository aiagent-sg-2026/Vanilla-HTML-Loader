export const matrixPack17LoadersL = [
  {
    id: 'matrix-cascade-lens-vector',
    name: 'Cascade Lens Vector',
    category: 'Matrix',
    tech: 'CSS',
    description: 'A dense lens field collapses inward and rebounds as vector pulses cascade in sequence.',
    markup: `<div class="vl-matrix17l-cascade-lens" role="img" aria-label="Cascade lens vector">
      <span class="vl-matrix17l-cascade-dot" style="--x:16px;--y:16px;--d:0"></span>
      <span class="vl-matrix17l-cascade-dot" style="--x:44px;--y:20px;--d:.08"></span>
      <span class="vl-matrix17l-cascade-dot" style="--x:72px;--y:28px;--d:.16"></span>
      <span class="vl-matrix17l-cascade-dot" style="--x:100px;--y:18px;--d:.24"></span>
      <span class="vl-matrix17l-cascade-dot" style="--x:128px;--y:22px;--d:.32"></span>
      <span class="vl-matrix17l-cascade-dot" style="--x:156px;--y:26px;--d:.4"></span>
      <span class="vl-matrix17l-cascade-dot" style="--x:40px;--y:46px;--d:.12"></span>
      <span class="vl-matrix17l-cascade-dot" style="--x:68px;--y:58px;--d:.2"></span>
      <span class="vl-matrix17l-cascade-dot" style="--x:96px;--y:46px;--d:.28"></span>
      <span class="vl-matrix17l-cascade-dot" style="--x:124px;--y:58px;--d:.36"></span>
      <span class="vl-matrix17l-cascade-dot" style="--x:152px;--y:46px;--d:.44"></span>
      <span class="vl-matrix17l-cascade-core"></span>
    </div>`,
    css: `.vl-matrix17l-cascade-lens {
  width: 190px;
  height: 108px;
  position: relative;
  overflow: hidden;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 24%, #1f6896);
  border-radius: 14px;
  background: radial-gradient(circle at 50% 54%, #061b2f 0 20%, #040a13 68%);
}
.vl-matrix17l-cascade-dot {
  position: absolute;
  width: 9px;
  height: 9px;
  left: var(--x);
  top: var(--y);
  margin: -4px;
  border-radius: 50%;
  background: color-mix(in srgb, var(--loader-accent) 88%, #ecf8ff);
  box-shadow: 0 0 8px color-mix(in srgb, var(--loader-accent) 54%, transparent);
  animation: vl-matrix17l-cascade-dot calc(var(--loader-speed) * 1.35) ease-in-out infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix17l-cascade-core {
  position: absolute;
  left: 50%;
  top: 54px;
  width: 8px;
  height: 8px;
  margin: -4px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-matrix17l-cascade-core calc(var(--loader-speed) * 1.2) linear infinite;
}
@keyframes vl-matrix17l-cascade-dot {
  0%, 100% { transform: scale(.55); opacity: .18; }
  50% { transform: scale(1.16); opacity: .96; }
}
@keyframes vl-matrix17l-cascade-core {
  0%, 100% { transform: translate(-50%, -50%) scale(.8); }
  50% { transform: translate(-50%, -50%) scale(1.22); }
}`
  },
  {
    id: 'matrix-holo-spiral-beacon',
    name: 'Holo Spiral Beacon',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Holographic rings spiral around a rotating core while radial pulses travel inward and out.',
    markup: `<div class="vl-matrix17l-holo" role="img" aria-label="Holo spiral beacon">
      <span class="vl-matrix17l-holo-beam" style="--r:0deg;--d:0"></span>
      <span class="vl-matrix17l-holo-beam" style="--r:72deg;--d:.08"></span>
      <span class="vl-matrix17l-holo-beam" style="--r:144deg;--d:.16"></span>
      <span class="vl-matrix17l-holo-beam" style="--r:216deg;--d:.24"></span>
      <span class="vl-matrix17l-holo-beam" style="--r:288deg;--d:.32"></span>
      <span class="vl-matrix17l-holo-core"></span>
    </div>`,
    css: `.vl-matrix17l-holo {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 22%, #1f6f96);
  border-radius: 14px;
  overflow: hidden;
  background: linear-gradient(158deg, #051d35, #0b3151 62%, #030a14);
}
.vl-matrix17l-holo-beam {
  position: absolute;
  left: 50%;
  top: 54px;
  width: 90px;
  height: 90px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 70%, transparent);
  border-radius: 50%;
  transform: translate(-50%, -50%) rotate(var(--r));
  transform-origin: 50% 50%;
  opacity: .22;
  animation: vl-matrix17l-holo-beam calc(var(--loader-speed) * 1.45) linear infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix17l-holo-core {
  position: absolute;
  left: 50%;
  top: 54px;
  width: 7px;
  height: 7px;
  margin: -3px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-matrix17l-holo-core calc(var(--loader-speed) * 1.2) ease-in-out infinite;
}
@keyframes vl-matrix17l-holo-beam {
  0%, 100% { transform: translate(-50%, -50%) rotate(var(--r)) scale(.48); opacity: .15; }
  50% { transform: translate(-50%, -50%) rotate(calc(var(--r) + 180deg)) scale(1); opacity: .92; }
}
@keyframes vl-matrix17l-holo-core {
  0%, 100% { transform: translate(-50%, -50%) scale(.8); }
  50% { transform: translate(-50%, -50%) scale(1.18); }
}`
  },
  {
    id: 'matrix-nebula-ribbon-scan',
    name: 'Nebula Ribbon Scan',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Ribbon-like scans sweep across a nebula field and bounce off a centered beacon.',
    markup: `<div class="vl-matrix17l-ribbon" role="img" aria-label="Nebula ribbon scan">
      <span class="vl-matrix17l-ribbon-line" style="--y:12px;--d:0"></span>
      <span class="vl-matrix17l-ribbon-line" style="--y:24px;--d:.1"></span>
      <span class="vl-matrix17l-ribbon-line" style="--y:36px;--d:.2"></span>
      <span class="vl-matrix17l-ribbon-line" style="--y:48px;--d:.3"></span>
      <span class="vl-matrix17l-ribbon-line" style="--y:60px;--d:.4"></span>
      <span class="vl-matrix17l-ribbon-line" style="--y:72px;--d:.5"></span>
      <span class="vl-matrix17l-ribbon-line" style="--y:84px;--d:.6"></span>
      <span class="vl-matrix17l-ribbon-core"></span>
    </div>`,
    css: `.vl-matrix17l-ribbon {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 24%, #1f6b94);
  border-radius: 14px;
  overflow: hidden;
  background: radial-gradient(circle at 50% 54%, #041a2c 0 18%, #030914 68%);
}
.vl-matrix17l-ribbon-line {
  position: absolute;
  left: 0;
  right: 0;
  top: var(--y);
  height: 3px;
  border-radius: 99px;
  opacity: .25;
  background: color-mix(in srgb, var(--loader-accent) 82%, #dff7ff);
  transform-origin: 50% 50%;
  animation: vl-matrix17l-ribbon-line calc(var(--loader-speed) * 1.45) linear infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix17l-ribbon-core {
  position: absolute;
  left: 50%;
  top: 54px;
  width: 8px;
  height: 8px;
  margin: -4px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-matrix17l-ribbon-core calc(var(--loader-speed) * 1.1) linear infinite;
}
@keyframes vl-matrix17l-ribbon-line {
  0%, 100% { transform: scaleX(.52); opacity: .16; }
  50% { transform: scaleX(1); opacity: .95; }
}
@keyframes vl-matrix17l-ribbon-core {
  0%, 100% { transform: translate(-50%, -50%) scale(.8); }
  50% { transform: translate(-50%, -50%) scale(1.18); }
}`
  },
  {
    id: 'matrix-vortex-glyph-array',
    name: 'Vortex Glyph Array',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Small glyph tiles spin through a mini-vortex before folding around the axis.',
    markup: `<div class="vl-matrix17l-vortex" role="img" aria-label="Vortex glyph array">
      <span class="vl-matrix17l-vortex-tile" style="--x:16px;--y:18px;--d:0;--r:20deg"></span>
      <span class="vl-matrix17l-vortex-tile" style="--x:58px;--y:24px;--d:.08;--r:62deg"></span>
      <span class="vl-matrix17l-vortex-tile" style="--x:94px;--y:20px;--d:.16;--r:98deg"></span>
      <span class="vl-matrix17l-vortex-tile" style="--x:138px;--y:28px;--d:.24;--r:148deg"></span>
      <span class="vl-matrix17l-vortex-tile" style="--x:172px;--y:16px;--d:.32;--r:196deg"></span>
      <span class="vl-matrix17l-vortex-tile" style="--x:30px;--y:66px;--d:.4;--r:244deg"></span>
      <span class="vl-matrix17l-vortex-tile" style="--x:66px;--y:70px;--d:.48;--r:292deg"></span>
      <span class="vl-matrix17l-vortex-tile" style="--x:102px;--y:76px;--d:.56;--r:332deg"></span>
      <span class="vl-matrix17l-vortex-tile" style="--x:144px;--y:66px;--d:.64;--r:16deg"></span>
      <span class="vl-matrix17l-vortex-core"></span>
    </div>`,
    css: `.vl-matrix17l-vortex {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 25%, #1e6b95);
  border-radius: 14px;
  overflow: hidden;
  background: linear-gradient(170deg, #051f35, #0a3353 62%, #030915);
}
.vl-matrix17l-vortex-tile {
  position: absolute;
  left: var(--x);
  top: var(--y);
  width: 9px;
  height: 9px;
  margin: -4px;
  border-radius: 2px;
  background: color-mix(in srgb, var(--loader-accent) 88%, #daf4ff);
  transform: rotate(var(--r));
  animation: vl-matrix17l-vortex-tile calc(var(--loader-speed) * 1.4) ease-in-out infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix17l-vortex-core {
  position: absolute;
  left: 50%;
  top: 54px;
  width: 7px;
  height: 7px;
  margin: -3px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-matrix17l-vortex-core calc(var(--loader-speed) * 1.15) linear infinite;
}
@keyframes vl-matrix17l-vortex-tile {
  0%, 100% { transform: rotate(var(--r)) scale(.58); opacity: .2; }
  50% { transform: rotate(calc(var(--r) + 180deg)) scale(1.15); opacity: .94; }
}
@keyframes vl-matrix17l-vortex-core {
  0%, 100% { transform: translate(-50%, -50%) scale(.78); }
  50% { transform: translate(-50%, -50%) scale(1.2); }
}`
  },
  {
    id: 'matrix-quantum-grid-needle',
    name: 'Quantum Grid Needle',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Needle-like bars climb and fall across a quantum grid in alternating phases.',
    markup: `<div class="vl-matrix17l-needle" role="img" aria-label="Quantum grid needle">
      <span class="vl-matrix17l-needle-bar" style="--x:12px;--d:0"></span>
      <span class="vl-matrix17l-needle-bar" style="--x:34px;--d:.09"></span>
      <span class="vl-matrix17l-needle-bar" style="--x:56px;--d:.18"></span>
      <span class="vl-matrix17l-needle-bar" style="--x:78px;--d:.27"></span>
      <span class="vl-matrix17l-needle-bar" style="--x:100px;--d:.36"></span>
      <span class="vl-matrix17l-needle-bar" style="--x:122px;--d:.45"></span>
      <span class="vl-matrix17l-needle-bar" style="--x:144px;--d:.54"></span>
      <span class="vl-matrix17l-needle-bar" style="--x:166px;--d:.63"></span>
      <span class="vl-matrix17l-needle-core"></span>
    </div>`,
    css: `.vl-matrix17l-needle {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 22%, #1c6992);
  border-radius: 14px;
  overflow: hidden;
  background: linear-gradient(168deg, #051927, #0a3150 62%, #040913);
}
.vl-matrix17l-needle-bar {
  position: absolute;
  left: var(--x);
  bottom: 0;
  width: 3px;
  height: 108px;
  background: linear-gradient(180deg, transparent, color-mix(in srgb, var(--loader-accent) 82%, #dff2ff));
  transform-origin: 50% 100%;
  animation: vl-matrix17l-needle-bar calc(var(--loader-speed) * 1.3) linear infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix17l-needle-core {
  position: absolute;
  left: 50%;
  top: 54px;
  width: 8px;
  height: 8px;
  margin: -4px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-matrix17l-needle-core calc(var(--loader-speed) * 1.15) linear infinite;
}
@keyframes vl-matrix17l-needle-bar {
  0%, 100% { transform: scaleY(.45); opacity: .12; }
  50% { transform: scaleY(1.05); opacity: .95; }
}
@keyframes vl-matrix17l-needle-core {
  0%, 100% { transform: translate(-50%, -50%) scale(.78); }
  50% { transform: translate(-50%, -50%) scale(1.22); }
}`
  },
  {
    id: 'matrix-photon-strobe-rack',
    name: 'Photon Strobe Rack',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Strobing photon rails flip through a staged sequence to build a moving rack.',
    markup: `<div class="vl-matrix17l-strobe" role="img" aria-label="Photon strobe rack">
      <span class="vl-matrix17l-strobe-rack" style="--x:14px;--d:0"></span>
      <span class="vl-matrix17l-strobe-rack" style="--x:34px;--d:.1"></span>
      <span class="vl-matrix17l-strobe-rack" style="--x:54px;--d:.2"></span>
      <span class="vl-matrix17l-strobe-rack" style="--x:74px;--d:.3"></span>
      <span class="vl-matrix17l-strobe-rack" style="--x:94px;--d:.4"></span>
      <span class="vl-matrix17l-strobe-rack" style="--x:114px;--d:.5"></span>
      <span class="vl-matrix17l-strobe-rack" style="--x:134px;--d:.6"></span>
      <span class="vl-matrix17l-strobe-rack" style="--x:154px;--d:.7"></span>
      <span class="vl-matrix17l-strobe-core"></span>
    </div>`,
    css: `.vl-matrix17l-strobe {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 23%, #1e6a95);
  border-radius: 14px;
  overflow: hidden;
  background: radial-gradient(circle at 50% 56%, #041f34 0 18%, #040912 68%);
}
.vl-matrix17l-strobe-rack {
  position: absolute;
  left: var(--x);
  top: 0;
  width: 4px;
  height: 108px;
  border-radius: 99px;
  background: linear-gradient(180deg, color-mix(in srgb, var(--loader-accent) 85%, transparent), transparent);
  opacity: .28;
  animation: vl-matrix17l-strobe-rack calc(var(--loader-speed) * 1.2) ease-in-out infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix17l-strobe-core {
  position: absolute;
  left: 50%;
  top: 54px;
  width: 7px;
  height: 7px;
  margin: -3px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-matrix17l-strobe-core calc(var(--loader-speed) * 1.2) linear infinite;
}
@keyframes vl-matrix17l-strobe-rack {
  0%, 100% { transform: scaleY(.42); opacity: .14; }
  50% { transform: scaleY(1.08); opacity: .94; }
}
@keyframes vl-matrix17l-strobe-core {
  0%, 100% { transform: translate(-50%, -50%) scale(.8); }
  50% { transform: translate(-50%, -50%) scale(1.2); }
}`
  },
  {
    id: 'matrix-orbital-rail-gate',
    name: 'Orbital Rail Gate',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Orbital rails shift in mirrored phases between outer and inner rails as gates gate.',
    markup: `<div class="vl-matrix17l-orbital" role="img" aria-label="Orbital rail gate">
      <span class="vl-matrix17l-orbital-rail" style="--r:0deg;--d:0"></span>
      <span class="vl-matrix17l-orbital-rail" style="--r:45deg;--d:.1"></span>
      <span class="vl-matrix17l-orbital-rail" style="--r:90deg;--d:.2"></span>
      <span class="vl-matrix17l-orbital-rail" style="--r:135deg;--d:.3"></span>
      <span class="vl-matrix17l-orbital-rail" style="--r:180deg;--d:.4"></span>
      <span class="vl-matrix17l-orbital-core"></span>
    </div>`,
    css: `.vl-matrix17l-orbital {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 20%, #1d6e98);
  border-radius: 14px;
  overflow: hidden;
  background: linear-gradient(166deg, #051c32, #0b3254 62%, #040913);
}
.vl-matrix17l-orbital-rail {
  position: absolute;
  left: 50%;
  top: 54px;
  width: 78px;
  height: 3px;
  border-radius: 99px;
  background: color-mix(in srgb, var(--loader-accent) 80%, #dff5ff);
  transform-origin: 50% 50%;
  transform: translate(-50%, -50%) rotate(var(--r));
  opacity: .28;
  animation: vl-matrix17l-orbital-rail calc(var(--loader-speed) * 1.35) linear infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix17l-orbital-core {
  position: absolute;
  left: 50%;
  top: 54px;
  width: 8px;
  height: 8px;
  margin: -4px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-matrix17l-orbital-core calc(var(--loader-speed) * 1.1) linear infinite;
}
@keyframes vl-matrix17l-orbital-rail {
  0%, 100% { transform: translate(-50%, -50%) rotate(var(--r)) scaleX(.62); opacity: .16; }
  50% { transform: translate(-50%, -50%) rotate(calc(var(--r) + 180deg)) scaleX(1); opacity: .94; }
}
@keyframes vl-matrix17l-orbital-core {
  0%, 100% { transform: translate(-50%, -50%) scale(.8); }
  50% { transform: translate(-50%, -50%) scale(1.2); }
}`
  },
  {
    id: 'matrix-axiom-wave-cascade',
    name: 'Axiom Wave Cascade',
    category: 'Matrix',
    tech: 'CSS',
    description: 'A short wave cascade pulses through axiom bars while the middle anchor bounces.',
    markup: `<div class="vl-matrix17l-axiom" role="img" aria-label="Axiom wave cascade">
      <span class="vl-matrix17l-axiom-wave" style="--d:0"></span>
      <span class="vl-matrix17l-axiom-wave" style="--d:.1"></span>
      <span class="vl-matrix17l-axiom-wave" style="--d:.2"></span>
      <span class="vl-matrix17l-axiom-wave" style="--d:.3"></span>
      <span class="vl-matrix17l-axiom-wave" style="--d:.4"></span>
      <span class="vl-matrix17l-axiom-anchor"></span>
    </div>`,
    css: `.vl-matrix17l-axiom {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 22%, #1c6d95);
  border-radius: 14px;
  overflow: hidden;
  background: radial-gradient(circle at 50% 56%, #051d35 0 18%, #040913 68%);
}
.vl-matrix17l-axiom-wave {
  position: absolute;
  left: 0;
  right: 0;
  top: calc(12px + var(--d) * 70px);
  height: 4px;
  background: linear-gradient(90deg, transparent, color-mix(in srgb, var(--loader-accent) 80%, #def3ff), transparent);
  border-radius: 99px;
  opacity: .22;
  animation: vl-matrix17l-axiom-wave calc(var(--loader-speed) * 1.32) ease-in-out infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix17l-axiom-anchor {
  position: absolute;
  left: 50%;
  top: 54px;
  width: 7px;
  height: 7px;
  margin: -3px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-matrix17l-axiom-anchor calc(var(--loader-speed) * 1.12) linear infinite;
}
@keyframes vl-matrix17l-axiom-wave {
  0%, 100% { transform: translateX(-4px) scaleX(.55); opacity: .16; }
  50% { transform: translateX(4px) scaleX(1); opacity: .94; }
}
@keyframes vl-matrix17l-axiom-anchor {
  0%, 100% { transform: translate(-50%, -50%) scale(.78); }
  50% { transform: translate(-50%, -50%) scale(1.18); }
}`
  },
  {
    id: 'matrix-fractal-vector-loom',
    name: 'Fractal Vector Loom',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Nested vector tiles expand and contract like a fractal loom across the field.',
    markup: `<div class="vl-matrix17l-fractal-loom" role="img" aria-label="Fractal vector loom">
      <span class="vl-matrix17l-fractal-cell" style="--x:24px;--y:20px;--s:16px;--d:0"></span>
      <span class="vl-matrix17l-fractal-cell" style="--x:60px;--y:24px;--s:12px;--d:.12"></span>
      <span class="vl-matrix17l-fractal-cell" style="--x:96px;--y:18px;--s:18px;--d:.24"></span>
      <span class="vl-matrix17l-fractal-cell" style="--x:136px;--y:22px;--s:14px;--d:.36"></span>
      <span class="vl-matrix17l-fractal-cell" style="--x:44px;--y:58px;--s:12px;--d:.48"></span>
      <span class="vl-matrix17l-fractal-cell" style="--x:82px;--y:64px;--s:14px;--d:.6"></span>
      <span class="vl-matrix17l-fractal-cell" style="--x:124px;--y:58px;--s:16px;--d:.72"></span>
      <span class="vl-matrix17l-fractal-core"></span>
    </div>`,
    css: `.vl-matrix17l-fractal-loom {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 23%, #1d6a96);
  border-radius: 14px;
  overflow: hidden;
  background: linear-gradient(170deg, #051d33, #0a2f51 62%, #040913);
}
.vl-matrix17l-fractal-cell {
  position: absolute;
  left: var(--x);
  top: var(--y);
  width: var(--s);
  height: var(--s);
  margin: calc(var(--s) / -2);
  border-radius: 3px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 86%, #daf5ff);
  transform: rotate(45deg);
  animation: vl-matrix17l-fractal-cell calc(var(--loader-speed) * 1.42) linear infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix17l-fractal-core {
  position: absolute;
  left: 50%;
  top: 54px;
  width: 8px;
  height: 8px;
  margin: -4px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-matrix17l-fractal-core calc(var(--loader-speed) * 1.16) linear infinite;
}
@keyframes vl-matrix17l-fractal-cell {
  0%, 100% { transform: rotate(45deg) scale(.55); opacity: .15; }
  50% { transform: rotate(405deg) scale(1.1); opacity: .95; }
}
@keyframes vl-matrix17l-fractal-core {
  0%, 100% { transform: translate(-50%, -50%) scale(.82); }
  50% { transform: translate(-50%, -50%) scale(1.2); }
}`
  },
  {
    id: 'matrix-helix-pulse-lattice',
    name: 'Helix Pulse Lattice',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Helical pulses drift up and down through a lattice as synchronized wave peaks.',
    markup: `<div class="vl-matrix17l-helix-pulse" role="img" aria-label="Helix pulse lattice">
      <span class="vl-matrix17l-helix-node" style="--x:16px;--d:0"></span>
      <span class="vl-matrix17l-helix-node" style="--x:44px;--d:.08"></span>
      <span class="vl-matrix17l-helix-node" style="--x:72px;--d:.16"></span>
      <span class="vl-matrix17l-helix-node" style="--x:100px;--d:.24"></span>
      <span class="vl-matrix17l-helix-node" style="--x:128px;--d:.32"></span>
      <span class="vl-matrix17l-helix-node" style="--x:156px;--d:.4"></span>
      <span class="vl-matrix17l-helix-node" style="--x:30px;--d:.48"></span>
      <span class="vl-matrix17l-helix-node" style="--x:58px;--d:.56"></span>
      <span class="vl-matrix17l-helix-node" style="--x:86px;--d:.64"></span>
      <span class="vl-matrix17l-helix-core"></span>
    </div>`,
    css: `.vl-matrix17l-helix-pulse {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 24%, #1f6a95);
  border-radius: 14px;
  overflow: hidden;
  background: radial-gradient(circle at 50% 56%, #051f35 0 18%, #040913 68%);
}
.vl-matrix17l-helix-node {
  position: absolute;
  left: var(--x);
  top: 54px;
  width: 8px;
  height: 8px;
  margin: -4px;
  border-radius: 50%;
  background: color-mix(in srgb, var(--loader-accent) 92%, #e0f5ff);
  animation: vl-matrix17l-helix-node calc(var(--loader-speed) * 1.25) ease-in-out infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix17l-helix-core {
  position: absolute;
  left: 50%;
  top: 54px;
  width: 7px;
  height: 7px;
  margin: -3px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-matrix17l-helix-core calc(var(--loader-speed) * 1.15) linear infinite;
}
@keyframes vl-matrix17l-helix-node {
  0%, 100% { transform: translateY(-2px) scale(.6); opacity: .16; }
  50% { transform: translateY(-26px) scale(1.2); opacity: .95; }
}
@keyframes vl-matrix17l-helix-core {
  0%, 100% { transform: translate(-50%, -50%) scale(.8); }
  50% { transform: translate(-50%, -50%) scale(1.2); }
}`
  }
];
