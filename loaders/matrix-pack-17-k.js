export const matrixPack17LoadersK = [
  {
    id: 'matrix-lattice-resonance-pulse',
    name: 'Lattice Resonance Pulse',
    category: 'Matrix',
    tech: 'CSS',
    description: 'A soft lattice of pulses resonates through a compact matrix field in phase-shifted rhythm.',
    markup: `<div class="vl-matrix17k-lattice" role="img" aria-label="Lattice resonance pulse">
      <span class="vl-matrix17k-node" style="--x:14px;--y:17px;--d:0"></span>
      <span class="vl-matrix17k-node" style="--x:53px;--y:17px;--d:.1"></span>
      <span class="vl-matrix17k-node" style="--x:92px;--y:17px;--d:.2"></span>
      <span class="vl-matrix17k-node" style="--x:131px;--y:17px;--d:.3"></span>
      <span class="vl-matrix17k-node" style="--x:170px;--y:17px;--d:.4"></span>
      <span class="vl-matrix17k-node" style="--x:14px;--y:45px;--d:.1"></span>
      <span class="vl-matrix17k-node" style="--x:53px;--y:45px;--d:.2"></span>
      <span class="vl-matrix17k-node" style="--x:92px;--y:45px;--d:.3"></span>
      <span class="vl-matrix17k-node" style="--x:131px;--y:45px;--d:.4"></span>
      <span class="vl-matrix17k-node" style="--x:170px;--y:45px;--d:.5"></span>
      <span class="vl-matrix17k-node" style="--x:14px;--y:73px;--d:.2"></span>
      <span class="vl-matrix17k-node" style="--x:53px;--y:73px;--d:.3"></span>
      <span class="vl-matrix17k-node" style="--x:92px;--y:73px;--d:.4"></span>
      <span class="vl-matrix17k-node" style="--x:131px;--y:73px;--d:.5"></span>
      <span class="vl-matrix17k-node" style="--x:170px;--y:73px;--d:.6"></span>
      <span class="vl-matrix17k-core"></span>
    </div>`,
    css: `.vl-matrix17k-lattice {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 24%, #1f6892);
  border-radius: 14px;
  overflow: hidden;
  background: linear-gradient(165deg, #041929, #0a2d4f 62%, #030a14);
}
.vl-matrix17k-node {
  position: absolute;
  left: var(--x);
  top: var(--y);
  width: 8px;
  height: 8px;
  margin: -4px;
  border-radius: 50%;
  background: color-mix(in srgb, var(--loader-accent) 86%, #ebf7ff);
  box-shadow: 0 0 10px color-mix(in srgb, var(--loader-accent) 52%, transparent);
  animation: vl-matrix17k-lattice calc(var(--loader-speed) * 1.35) cubic-bezier(.4, 0, .2, 1) infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix17k-core {
  position: absolute;
  left: 50%;
  top: 54px;
  width: 8px;
  height: 8px;
  margin: -4px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-matrix17k-core calc(var(--loader-speed) * 1.15) linear infinite;
}
@keyframes vl-matrix17k-lattice {
  0%, 100% { transform: scale(.55); opacity: .16; }
  50% { transform: scale(1); opacity: .95; }
}
@keyframes vl-matrix17k-core {
  0%, 100% { transform: translate(-50%, -50%) scale(.72); opacity: .25; }
  50% { transform: translate(-50%, -50%) scale(1.16); opacity: .95; }
}`
  },
  {
    id: 'matrix-crystal-tide-orbit',
    name: 'Crystal Tide Orbit',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Crystal-shaped glyphs rotate around a bright tide axis and fold back through each loop.',
    markup: `<div class="vl-matrix17k-tide" role="img" aria-label="Crystal tide orbit">
      <span class="vl-matrix17k-crystal" style="--a:0deg;--d:0"></span>
      <span class="vl-matrix17k-crystal" style="--a:72deg;--d:.08"></span>
      <span class="vl-matrix17k-crystal" style="--a:144deg;--d:.16"></span>
      <span class="vl-matrix17k-crystal" style="--a:216deg;--d:.24"></span>
      <span class="vl-matrix17k-crystal" style="--a:288deg;--d:.32"></span>
      <span class="vl-matrix17k-tide-core"></span>
    </div>`,
    css: `.vl-matrix17k-tide {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 22%, #1e6a95);
  border-radius: 14px;
  overflow: hidden;
  background: radial-gradient(circle at 50% 56%, #061f32 0 18%, #040912 68%);
}
.vl-matrix17k-crystal {
  position: absolute;
  left: 50%;
  top: 54px;
  width: 24px;
  height: 12px;
  margin-left: -12px;
  margin-top: -6px;
  background: color-mix(in srgb, var(--loader-accent) 76%, #dff2ff);
  clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);
  transform: rotate(var(--a));
  animation: vl-matrix17k-tide calc(var(--loader-speed) * 1.5) ease-in-out infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix17k-tide-core {
  position: absolute;
  left: 50%;
  top: 54px;
  width: 7px;
  height: 7px;
  margin: -3px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-matrix17k-tide-core calc(var(--loader-speed) * 1.2) linear infinite;
}
@keyframes vl-matrix17k-tide {
  0%, 100% { transform: rotate(var(--a)) scale(.58); opacity: .16; }
  50% { transform: rotate(calc(var(--a) + 180deg)) scale(1); opacity: .95; }
}
@keyframes vl-matrix17k-tide-core {
  0%, 100% { transform: translate(-50%, -50%) scale(.78); }
  50% { transform: translate(-50%, -50%) scale(1.2); }
}`
  },
  {
    id: 'matrix-photon-micro-bloom',
    name: 'Photon Micro Bloom',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Micro bloom points radiate from a matrix edge and contract into a central pulse.',
    markup: `<div class="vl-matrix17k-bloom" role="img" aria-label="Photon micro bloom">
      <span class="vl-matrix17k-bloom-point" style="--x:20px;--y:22px;--d:0"></span>
      <span class="vl-matrix17k-bloom-point" style="--x:55px;--y:28px;--d:.08"></span>
      <span class="vl-matrix17k-bloom-point" style="--x:90px;--y:20px;--d:.16"></span>
      <span class="vl-matrix17k-bloom-point" style="--x:125px;--y:30px;--d:.24"></span>
      <span class="vl-matrix17k-bloom-point" style="--x:160px;--y:24px;--d:.32"></span>
      <span class="vl-matrix17k-bloom-point" style="--x:34px;--y:74px;--d:.1"></span>
      <span class="vl-matrix17k-bloom-point" style="--x:74px;--y:64px;--d:.18"></span>
      <span class="vl-matrix17k-bloom-point" style="--x:114px;--y:76px;--d:.26"></span>
      <span class="vl-matrix17k-bloom-point" style="--x:154px;--y:68px;--d:.34"></span>
      <span class="vl-matrix17k-bloom-core"></span>
    </div>`,
    css: `.vl-matrix17k-bloom {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 24%, #1d6f95);
  border-radius: 14px;
  overflow: hidden;
  background: linear-gradient(160deg, #051a2d, #0a2f50 62%, #040a14);
}
.vl-matrix17k-bloom-point {
  position: absolute;
  left: var(--x);
  top: var(--y);
  width: 6px;
  height: 6px;
  margin: -3px;
  border-radius: 2px;
  background: color-mix(in srgb, var(--loader-accent) 90%, #eaf8ff);
  box-shadow: 0 0 6px color-mix(in srgb, var(--loader-accent) 60%, transparent);
  animation: vl-matrix17k-bloom-point calc(var(--loader-speed) * 1.52) ease-in-out infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix17k-bloom-core {
  position: absolute;
  left: 50%;
  top: 54px;
  width: 8px;
  height: 8px;
  margin: -4px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-matrix17k-bloom-core calc(var(--loader-speed) * 1.12) linear infinite;
}
@keyframes vl-matrix17k-bloom-point {
  0%, 100% { opacity: .14; transform: scale(.58); }
  50% { opacity: .96; transform: scale(1.65); }
}
@keyframes vl-matrix17k-bloom-core {
  0%, 100% { transform: translate(-50%, -50%) scale(.84); }
  50% { transform: translate(-50%, -50%) scale(1.18); }
}`
  },
  {
    id: 'matrix-rune-grid-ribbon',
    name: 'Rune Grid Ribbon',
    category: 'Matrix',
    tech: 'CSS',
    description: 'A ribbon of rune-like blocks sweeps the matrix in mirrored phase and folds inward.',
    markup: `<div class="vl-matrix17k-rune" role="img" aria-label="Rune grid ribbon">
      <span class="vl-matrix17k-rune-band" style="--y:12px;--d:0"></span>
      <span class="vl-matrix17k-rune-band" style="--y:32px;--d:.12"></span>
      <span class="vl-matrix17k-rune-band" style="--y:52px;--d:.24"></span>
      <span class="vl-matrix17k-rune-band" style="--y:72px;--d:.36"></span>
      <span class="vl-matrix17k-rune-core"></span>
    </div>`,
    css: `.vl-matrix17k-rune {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 21%, #1e6b96);
  border-radius: 14px;
  overflow: hidden;
  background: linear-gradient(152deg, #051c32, #0a3354 62%, #040915);
}
.vl-matrix17k-rune-band {
  position: absolute;
  left: 8px;
  top: var(--y);
  width: calc(100% - 16px);
  height: 5px;
  border-radius: 99px;
  background: color-mix(in srgb, var(--loader-accent) 82%, #e0f6ff);
  transform-origin: 50% 50%;
  opacity: .22;
  animation: vl-matrix17k-rune calc(var(--loader-speed) * 1.52) linear infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix17k-rune-core {
  position: absolute;
  left: 50%;
  top: 54px;
  width: 7px;
  height: 7px;
  margin: -3px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-matrix17k-rune-core calc(var(--loader-speed) * 1.22) linear infinite;
}
@keyframes vl-matrix17k-rune {
  0%, 100% { transform: scaleX(.45); opacity: .2; }
  50% { transform: scaleX(1); opacity: .96; }
}
@keyframes vl-matrix17k-rune-core {
  0%, 100% { transform: translate(-50%, -50%) scale(.82); }
  50% { transform: translate(-50%, -50%) scale(1.18); }
}`
  },
  {
    id: 'matrix-axis-shadow-chain',
    name: 'Axis Shadow Chain',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Shadowed nodes trace chained axes and pulse as they slide across the visual field.',
    markup: `<div class="vl-matrix17k-axis" role="img" aria-label="Axis shadow chain">
      <span class="vl-matrix17k-axis-node" style="--x:10px;--d:0"></span>
      <span class="vl-matrix17k-axis-node" style="--x:44px;--d:.1"></span>
      <span class="vl-matrix17k-axis-node" style="--x:78px;--d:.2"></span>
      <span class="vl-matrix17k-axis-node" style="--x:112px;--d:.3"></span>
      <span class="vl-matrix17k-axis-node" style="--x:146px;--d:.4"></span>
      <span class="vl-matrix17k-axis-node" style="--x:180px;--d:.5"></span>
      <span class="vl-matrix17k-axis-core"></span>
    </div>`,
    css: `.vl-matrix17k-axis {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 24%, #1f6d95);
  border-radius: 14px;
  overflow: hidden;
  background: radial-gradient(circle at 50% 56%, #051b2f 0 20%, #040913 68%);
}
.vl-matrix17k-axis-node {
  position: absolute;
  left: var(--x);
  top: 50%;
  width: 10px;
  height: 10px;
  margin-top: -5px;
  border-radius: 50%;
  transform-origin: 50% 50%;
  background: color-mix(in srgb, var(--loader-accent) 88%, #ecfbff);
  box-shadow: 0 0 10px color-mix(in srgb, var(--loader-accent) 56%, transparent);
  animation: vl-matrix17k-axis calc(var(--loader-speed) * 1.35) ease-in-out infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix17k-axis-node::after {
  content: '';
  position: absolute;
  inset: 1px;
  border-radius: inherit;
  box-shadow: -2px -2px 0 rgba(255, 255, 255, .2);
}
.vl-matrix17k-axis-core {
  position: absolute;
  left: 50%;
  top: 54px;
  width: 6px;
  height: 6px;
  margin: -3px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-matrix17k-axis-core calc(var(--loader-speed) * 1.15) linear infinite;
}
@keyframes vl-matrix17k-axis {
  0%, 100% { transform: translateY(0) scale(.56); opacity: .18; }
  50% { transform: translateY(-10px) scale(1); opacity: .96; }
}
@keyframes vl-matrix17k-axis-core {
  0%, 100% { transform: translate(-50%, -50%) scale(.75); }
  50% { transform: translate(-50%, -50%) scale(1.2); }
}`
  },
  {
    id: 'matrix-axiom-scan-lane',
    name: 'Axiom Scan Lane',
    category: 'Matrix',
    tech: 'CSS',
    description: 'A moving lane of axis markers scans left-to-right while a core marker reorients.',
    markup: `<div class="vl-matrix17k-axiom" role="img" aria-label="Axiom scan lane">
      <span class="vl-matrix17k-lane"></span>
      <span class="vl-matrix17k-lane-dot" style="--d:0"></span>
      <span class="vl-matrix17k-lane-dot" style="--d:.14"></span>
      <span class="vl-matrix17k-lane-dot" style="--d:.28"></span>
      <span class="vl-matrix17k-lane-dot" style="--d:.42"></span>
      <span class="vl-matrix17k-axiom-core"></span>
    </div>`,
    css: `.vl-matrix17k-axiom {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 22%, #1c6d94);
  border-radius: 14px;
  overflow: hidden;
  background: linear-gradient(148deg, #061a2f, #0a3250 62%, #040913);
}
.vl-matrix17k-lane {
  position: absolute;
  left: 10px;
  right: 10px;
  top: 53px;
  height: 2px;
  background: linear-gradient(90deg, transparent, color-mix(in srgb, var(--loader-accent) 80%, #dff3ff), transparent);
  opacity: .35;
  animation: vl-matrix17k-axiom-lane calc(var(--loader-speed) * 1.3) linear infinite;
}
.vl-matrix17k-lane-dot {
  position: absolute;
  left: -2px;
  top: 53px;
  width: 4px;
  height: 4px;
  margin-top: -2px;
  border-radius: 50%;
  background: color-mix(in srgb, var(--loader-accent) 85%, #e5f7ff);
  animation: vl-matrix17k-axiom-dot calc(var(--loader-speed) * 1.3) linear infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix17k-axiom-core {
  position: absolute;
  left: 95px;
  top: 53px;
  width: 8px;
  height: 8px;
  margin: -4px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-matrix17k-axiom-core calc(var(--loader-speed) * 1.1) linear infinite;
}
@keyframes vl-matrix17k-axiom-lane {
  0%, 100% { transform: scaleX(.62); opacity: .25; }
  50% { transform: scaleX(1); opacity: .95; }
}
@keyframes vl-matrix17k-axiom-dot {
  0% { transform: translateX(0) scale(.58); opacity: .16; }
  50% { transform: translateX(190px) scale(1.1); opacity: .96; }
  100% { transform: translateX(380px) scale(.58); opacity: .16; }
}
@keyframes vl-matrix17k-axiom-core {
  0%, 100% { transform: translate(-50%, -50%) scale(.8); }
  50% { transform: translate(-50%, -50%) scale(1.16); }
}`
  },
  {
    id: 'matrix-helix-cascade-lens',
    name: 'Helix Cascade Lens',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Helical nodes cascade from mirrored offsets and rebound at the central lens.',
    markup: `<div class="vl-matrix17k-helix" role="img" aria-label="Helix cascade lens">
      <span class="vl-matrix17k-helix-node" style="--x:0px;--d:0"></span>
      <span class="vl-matrix17k-helix-node" style="--x:4px;--d:.12"></span>
      <span class="vl-matrix17k-helix-node" style="--x:8px;--d:.24"></span>
      <span class="vl-matrix17k-helix-node" style="--x:12px;--d:.36"></span>
      <span class="vl-matrix17k-helix-node" style="--x:16px;--d:.48"></span>
      <span class="vl-matrix17k-helix-lens"></span>
    </div>`,
    css: `.vl-matrix17k-helix {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 22%, #1f6f97);
  border-radius: 14px;
  overflow: hidden;
  background: radial-gradient(circle at 50% 56%, #051f35 0 18%, #040a15 68%);
}
.vl-matrix17k-helix-node {
  position: absolute;
  left: 50%;
  top: 100%;
  width: 8px;
  height: 8px;
  margin-left: calc(var(--x) - 4px);
  margin-top: -4px;
  border-radius: 50%;
  background: color-mix(in srgb, var(--loader-accent) 92%, #ddf4ff);
  animation: vl-matrix17k-helix calc(var(--loader-speed) * 1.5) linear infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix17k-helix-lens {
  position: absolute;
  left: 50%;
  top: 54px;
  width: 7px;
  height: 7px;
  margin: -3px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-matrix17k-helix-lens calc(var(--loader-speed) * 1.2) linear infinite;
}
@keyframes vl-matrix17k-helix {
  0% { transform: translate(-50%, -110px) scale(.55); opacity: .18; }
  50% { transform: translate(-50%, 42px) scale(1); opacity: .96; }
  100% { transform: translate(-50%, 164px) scale(.55); opacity: .18; }
}
@keyframes vl-matrix17k-helix-lens {
  0%, 100% { transform: translate(-50%, -50%) scale(.82); }
  50% { transform: translate(-50%, -50%) scale(1.22); }
}`
  },
  {
    id: 'matrix-fractal-glyph-vector',
    name: 'Fractal Glyph Vector',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Nested glyph tiles expand and collapse in a recursive vector pattern with a central anchor.',
    markup: `<div class="vl-matrix17k-fractal" role="img" aria-label="Fractal glyph vector">
      <span class="vl-matrix17k-fractal-tile" style="--x:30px;--y:18px;--d:0;--s:20px"></span>
      <span class="vl-matrix17k-fractal-tile" style="--x:80px;--y:26px;--d:.12;--s:18px"></span>
      <span class="vl-matrix17k-fractal-tile" style="--x:130px;--y:18px;--d:.24;--s:16px"></span>
      <span class="vl-matrix17k-fractal-tile" style="--x:30px;--y:54px;--d:.36;--s:18px"></span>
      <span class="vl-matrix17k-fractal-tile" style="--x:80px;--y:62px;--d:.48;--s:20px"></span>
      <span class="vl-matrix17k-fractal-tile" style="--x:130px;--y:54px;--d:.6;--s:18px"></span>
      <span class="vl-matrix17k-fractal-core"></span>
    </div>`,
    css: `.vl-matrix17k-fractal {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 23%, #1e6a95);
  border-radius: 14px;
  overflow: hidden;
  background: linear-gradient(152deg, #051c2f, #0a3153 62%, #040a17);
}
.vl-matrix17k-fractal-tile {
  position: absolute;
  left: var(--x);
  top: var(--y);
  width: var(--s);
  height: var(--s);
  margin: calc(var(--s) / -2);
  border-radius: 3px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 84%, #ddf4ff);
  transform: rotate(45deg);
  opacity: .18;
  animation: vl-matrix17k-fractal calc(var(--loader-speed) * 1.4) cubic-bezier(.4, 0, .2, 1) infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix17k-fractal-core {
  position: absolute;
  left: 50%;
  top: 54px;
  width: 8px;
  height: 8px;
  margin: -4px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-matrix17k-fractal-core calc(var(--loader-speed) * 1.15) linear infinite;
}
@keyframes vl-matrix17k-fractal {
  0%, 100% { transform: rotate(45deg) scale(.55); opacity: .16; }
  50% { transform: rotate(225deg) scale(1.05); opacity: .94; }
}
@keyframes vl-matrix17k-fractal-core {
  0%, 100% { transform: translate(-50%, -50%) scale(.8); }
  50% { transform: translate(-50%, -50%) scale(1.18); }
}`
  },
  {
    id: 'matrix-vector-gate-rain',
    name: 'Vector Gate Rain',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Vertical gate rails drop and fade while a central anchor pulses like a metronome.',
    markup: `<div class="vl-matrix17k-gate-rain" role="img" aria-label="Vector gate rain">
      <span class="vl-matrix17k-gate" style="--x:14px;--d:0"></span>
      <span class="vl-matrix17k-gate" style="--x:36px;--d:.08"></span>
      <span class="vl-matrix17k-gate" style="--x:58px;--d:.16"></span>
      <span class="vl-matrix17k-gate" style="--x:80px;--d:.24"></span>
      <span class="vl-matrix17k-gate" style="--x:102px;--d:.32"></span>
      <span class="vl-matrix17k-gate" style="--x:124px;--d:.4"></span>
      <span class="vl-matrix17k-gate" style="--x:146px;--d:.48"></span>
      <span class="vl-matrix17k-gate" style="--x:168px;--d:.56"></span>
      <span class="vl-matrix17k-gate-core"></span>
    </div>`,
    css: `.vl-matrix17k-gate-rain {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 25%, #1e6c95);
  border-radius: 14px;
  overflow: hidden;
  background: linear-gradient(168deg, #051926, #0a3053 62%, #040912);
}
.vl-matrix17k-gate {
  position: absolute;
  left: var(--x);
  top: 0;
  width: 2px;
  height: 108px;
  transform-origin: top;
  background: linear-gradient(180deg, color-mix(in srgb, var(--loader-accent) 88%, #e7f7ff), transparent);
  opacity: .18;
  animation: vl-matrix17k-gate calc(var(--loader-speed) * 1.35) linear infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix17k-gate-core {
  position: absolute;
  left: 50%;
  top: 54px;
  width: 8px;
  height: 8px;
  margin: -4px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-matrix17k-gate-core calc(var(--loader-speed) * 1.2) linear infinite;
}
@keyframes vl-matrix17k-gate {
  0%, 100% { opacity: .14; transform: scaleY(.45); }
  50% { opacity: .95; transform: scaleY(1.1); }
}
@keyframes vl-matrix17k-gate-core {
  0%, 100% { transform: translate(-50%, -50%) scale(.78); }
  50% { transform: translate(-50%, -50%) scale(1.2); }
}`
  },
  {
    id: 'matrix-skyline-matrix-loom',
    name: 'Skyline Matrix Loom',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Skyline-like bars and center pulse weaves a dense loom of matrix energy.',
    markup: `<div class="vl-matrix17k-skyline" role="img" aria-label="Skyline matrix loom">
      <span class="vl-matrix17k-skyline-bar" style="--h:12px;--d:0"></span>
      <span class="vl-matrix17k-skyline-bar" style="--h:24px;--d:.1"></span>
      <span class="vl-matrix17k-skyline-bar" style="--h:36px;--d:.2"></span>
      <span class="vl-matrix17k-skyline-bar" style="--h:28px;--d:.3"></span>
      <span class="vl-matrix17k-skyline-bar" style="--h:18px;--d:.4"></span>
      <span class="vl-matrix17k-skyline-bar" style="--h:32px;--d:.5"></span>
      <span class="vl-matrix17k-skyline-bar" style="--h:20px;--d:.6"></span>
      <span class="vl-matrix17k-skyline-bar" style="--h:16px;--d:.7"></span>
      <span class="vl-matrix17k-skyline-core"></span>
    </div>`,
    css: `.vl-matrix17k-skyline {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 23%, #1e6894);
  border-radius: 14px;
  overflow: hidden;
  background: radial-gradient(circle at 50% 56%, #051d35 0 18%, #040910 68%);
}
.vl-matrix17k-skyline-bar {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 6px;
  height: var(--h);
  margin-left: calc((var(--h) * 4));
  left: 14px;
  border-radius: 99px 99px 0 0;
  background: color-mix(in srgb, var(--loader-accent) 84%, #ddf6ff);
  transform: translateY(0);
  transform-origin: 50% 100%;
  opacity: .7;
  animation: vl-matrix17k-skyline calc(var(--loader-speed) * 1.45) cubic-bezier(.45, 0, .2, 1) infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix17k-skyline-core {
  position: absolute;
  left: 50%;
  top: 54px;
  width: 7px;
  height: 7px;
  margin: -3px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-matrix17k-skyline-core calc(var(--loader-speed) * 1.2) linear infinite;
}
.vl-matrix17k-skyline-bar:nth-child(1) { left: 14px; }
.vl-matrix17k-skyline-bar:nth-child(2) { left: 34px; }
.vl-matrix17k-skyline-bar:nth-child(3) { left: 54px; }
.vl-matrix17k-skyline-bar:nth-child(4) { left: 74px; }
.vl-matrix17k-skyline-bar:nth-child(5) { left: 94px; }
.vl-matrix17k-skyline-bar:nth-child(6) { left: 114px; }
.vl-matrix17k-skyline-bar:nth-child(7) { left: 134px; }
.vl-matrix17k-skyline-bar:nth-child(8) { left: 154px; }
@keyframes vl-matrix17k-skyline {
  0%, 100% { transform: translateY(0) scaleY(.55); opacity: .2; }
  50% { transform: translateY(-6px) scaleY(1.08); opacity: .95; }
}
@keyframes vl-matrix17k-skyline-core {
  0%, 100% { transform: translate(-50%, -50%) scale(.82); }
  50% { transform: translate(-50%, -50%) scale(1.24); }
}`
  }
];
