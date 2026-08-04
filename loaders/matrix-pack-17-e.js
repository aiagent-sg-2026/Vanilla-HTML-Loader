export const matrixPack17LoadersE = [
  {
    id: 'matrix-nebula-arc-array',
    name: 'Nebula Arc Array',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Nested nebula arcs pulse at layered timings while sliding across a shallow vector lane.',
    markup: `<div class="vl-matrix17e-nebula" role="img" aria-label="Nebula arc array">
      <span class="vl-matrix17e-arc" style="--i:0;--d:0"></span>
      <span class="vl-matrix17e-arc" style="--i:1;--d:.12"></span>
      <span class="vl-matrix17e-arc" style="--i:2;--d:.24"></span>
      <span class="vl-matrix17e-arc" style="--i:3;--d:.36"></span>
      <span class="vl-matrix17e-arc-core"></span>
    </div>`,
    css: `.vl-matrix17e-nebula {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 24%, #285a7a);
  border-radius: 14px;
  overflow: hidden;
  background: radial-gradient(circle at 50% 52%, #061827 0 18%, #040d16 68%);
}
.vl-matrix17e-arc {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 74px;
  height: 40px;
  margin: -20px -37px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 78%, #e4f5ff);
  border-bottom: none;
  border-radius: 90px 90px 0 0;
  transform: rotate(calc(var(--i) * 45deg));
  animation: vl-matrix17e-arc calc(var(--loader-speed) * 1.6) ease-in-out infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix17e-arc-core {
  position: absolute;
  left: 50%;
  top: 54px;
  width: 9px;
  height: 9px;
  margin: -4.5px;
  border-radius: 50%;
  background: color-mix(in srgb, var(--loader-accent) 90%, #f2fbff);
  animation: vl-matrix17e-arc-core calc(var(--loader-speed) * 1.6) linear infinite;
}
@keyframes vl-matrix17e-arc {
  0%, 100% { transform: rotate(calc(var(--i) * 45deg)) scale(.44); opacity: .2; }
  50% { transform: rotate(calc(var(--i) * 45deg + 180deg)) scale(1.1); opacity: .95; }
}
@keyframes vl-matrix17e-arc-core {
  0%, 100% { transform: translate(-50%, -50%) scale(.8); opacity: .22; }
  50% { transform: translate(-50%, -50%) scale(1.2); opacity: .95; }
}`
  },
  {
    id: 'matrix-vector-inklace-spiral',
    name: 'Vector Inklace Spiral',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Interlaced vectors trace a low-contrast spiral lane and flicker in phase-shifted loops.',
    markup: `<div class="vl-matrix17e-inklace" role="img" aria-label="Vector inklace spiral">
      <span class="vl-matrix17e-inklace-line" style="--t:0deg;--d:0"></span>
      <span class="vl-matrix17e-inklace-line" style="--t:72deg;--d:.1"></span>
      <span class="vl-matrix17e-inklace-line" style="--t:144deg;--d:.2"></span>
      <span class="vl-matrix17e-inklace-line" style="--t:216deg;--d:.3"></span>
      <span class="vl-matrix17e-inklace-line" style="--t:288deg;--d:.4"></span>
    </div>`,
    css: `.vl-matrix17e-inklace {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 24%, #1f5d82);
  border-radius: 14px;
  overflow: hidden;
  background: linear-gradient(155deg, #051523, #0a2e4d 62%, #040d16);
}
.vl-matrix17e-inklace-line {
  position: absolute;
  left: 50%;
  top: 54px;
  width: 82px;
  height: 2px;
  margin-left: -1px;
  transform-origin: 1px 50%;
  border-radius: 999px;
  background: color-mix(in srgb, var(--loader-accent) 84%, #f1fbff);
  animation: vl-matrix17e-inklace calc(var(--loader-speed) * 1.55) ease-in-out infinite;
  animation-delay: calc(var(--d) * 1s);
}
@keyframes vl-matrix17e-inklace {
  0% { transform: rotate(var(--t)) translateX(-18px) scaleX(.52); opacity: .16; }
  50% { transform: rotate(calc(var(--t) + 72deg)) translateX(12px) scaleX(1); opacity: .95; }
  100% { transform: rotate(calc(var(--t) + 144deg)) translateX(-18px) scaleX(.52); opacity: .16; }
}`
  },
  {
    id: 'matrix-crystal-axon-rings',
    name: 'Crystal Axon Rings',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Concentric axon rings contract and expand in a crystalline rhythm.',
    markup: `<div class="vl-matrix17e-crystal-rings" role="img" aria-label="Crystal axon rings">
      <span style="--s:34px;--d:0"></span>
      <span style="--s:46px;--d:.12"></span>
      <span style="--s:58px;--d:.24"></span>
      <span style="--s:70px;--d:.36"></span>
      <span class="vl-matrix17e-crystal-core"></span>
    </div>`,
    css: `.vl-matrix17e-crystal-rings {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 24%, #21648b);
  border-radius: 14px;
  overflow: hidden;
  background: radial-gradient(circle at 50% 50%, #071a28 0 18%, #040b14 68%);
}
.vl-matrix17e-crystal-rings span {
  position: absolute;
  left: 50%;
  top: 54px;
  width: var(--s);
  height: var(--s);
  margin: calc(var(--s) / -2);
  border: 1px solid color-mix(in srgb, var(--loader-accent) 82%, #e5f4ff);
  border-radius: 2px;
  animation: vl-matrix17e-crystal calc(var(--loader-speed) * 1.65) linear infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix17e-crystal-core {
  position: absolute;
  left: 50%;
  top: 54px;
  width: 10px;
  height: 10px;
  margin: -5px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-matrix17e-crystal-core calc(var(--loader-speed) * 1.65) ease-in-out infinite;
}
@keyframes vl-matrix17e-crystal {
  0%, 100% { transform: translate(-50%, -50%) rotate(0deg) scale(.58); opacity: .16; }
  50% { transform: translate(-50%, -50%) rotate(180deg) scale(1.08); opacity: .95; }
}
@keyframes vl-matrix17e-crystal-core {
  0%, 100% { transform: translate(-50%, -50%) scale(.8); opacity: .2; }
  50% { transform: translate(-50%, -50%) scale(1.2); opacity: .95; }
}`
  },
  {
    id: 'matrix-photon-drift-grid',
    name: 'Photon Drift Grid',
    category: 'Matrix',
    tech: 'CSS',
    description: 'A drifting grid of photonic points alternates density and phase over a fixed lattice.',
    markup: `<div class="vl-matrix17e-photon-grid" role="img" aria-label="Photon drift grid">
      <span style="--x:14px;--y:10px;--d:0"></span>
      <span style="--x:42px;--y:10px;--d:.08"></span>
      <span style="--x:70px;--y:10px;--d:.16"></span>
      <span style="--x:98px;--y:10px;--d:.24"></span>
      <span style="--x:126px;--y:10px;--d:.32"></span>
      <span style="--x:154px;--y:10px;--d:.4"></span>
      <span style="--x:28px;--y:46px;--d:.48"></span>
      <span style="--x:56px;--y:46px;--d:.56"></span>
      <span style="--x:84px;--y:46px;--d:.64"></span>
      <span style="--x:112px;--y:46px;--d:.72"></span>
      <span style="--x:140px;--y:46px;--d:.8"></span>
    </div>`,
    css: `.vl-matrix17e-photon-grid {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 20%, #1c5f85);
  border-radius: 14px;
  overflow: hidden;
  background: linear-gradient(145deg, #061320, #0a2c4d 62%, #040d15);
}
.vl-matrix17e-photon-grid span {
  position: absolute;
  left: var(--x);
  top: var(--y);
  width: 8px;
  height: 8px;
  border-radius: 50%;
  margin: -4px;
  background: color-mix(in srgb, var(--loader-accent) 84%, #edf9ff);
  box-shadow: 0 0 8px color-mix(in srgb, var(--loader-accent) 46%, transparent);
  animation: vl-matrix17e-grid-point calc(var(--loader-speed) * 1.35) ease-in-out infinite;
  animation-delay: calc(var(--d) * 1s);
}
@keyframes vl-matrix17e-grid-point {
  0%, 100% { transform: translateY(0) scale(.48); opacity: .18; }
  50% { transform: translateY(-8px) scale(1.04); opacity: .96; }
}`
  },
  {
    id: 'matrix-lattice-bias-gate',
    name: 'Lattice Bias Gate',
    category: 'Matrix',
    tech: 'CSS',
    description: 'A bias gate rotates around a triangular lattice while nodes drift between two energy levels.',
    markup: `<div class="vl-matrix17e-bias-gate" role="img" aria-label="Lattice bias gate">
      <span class="vl-matrix17e-bias" style="--a:0deg;--d:0"></span>
      <span class="vl-matrix17e-bias" style="--a:120deg;--d:.13"></span>
      <span class="vl-matrix17e-bias" style="--a:240deg;--d:.26"></span>
      <span class="vl-matrix17e-bias-core"></span>
    </div>`,
    css: `.vl-matrix17e-bias-gate {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 24%, #1d6387);
  border-radius: 14px;
  overflow: hidden;
  background: radial-gradient(circle at 50% 56%, #071f34 0 22%, #040d16 68%);
}
.vl-matrix17e-bias {
  position: absolute;
  left: 50%;
  top: 54px;
  width: 56px;
  height: 56px;
  margin: -28px;
  transform-origin: 50% 50%;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 76%, #e3f4ff);
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
  opacity: .36;
  animation: vl-matrix17e-bias calc(var(--loader-speed) * 1.7) linear infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix17e-bias-core {
  position: absolute;
  left: 50%;
  top: 54px;
  width: 9px;
  height: 9px;
  margin: -4px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-matrix17e-bias-core calc(var(--loader-speed) * 1.7) ease-in-out infinite;
}
@keyframes vl-matrix17e-bias {
  0% { transform: rotate(var(--a)) scale(.62); opacity: .22; }
  50% { transform: rotate(calc(var(--a) + 180deg)) scale(1); opacity: .95; }
  100% { transform: rotate(calc(var(--a) + 360deg)) scale(.62); opacity: .22; }
}
@keyframes vl-matrix17e-bias-core {
  0%, 100% { transform: translate(-50%, -50%) scale(.8); opacity: .2; }
  50% { transform: translate(-50%, -50%) scale(1.2); opacity: .95; }
}`
  },
  {
    id: 'matrix-orbit-glyph-channel',
    name: 'Orbit Glyph Channel',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Orbiting glyph marks open a channel-like scan through repeating matrix gates.',
    markup: `<div class="vl-matrix17e-glyph-channel" role="img" aria-label="Orbit glyph channel">
      <span class="vl-matrix17e-glyph-dot" style="--x:0;--y:0;--d:0"></span>
      <span class="vl-matrix17e-glyph-dot" style="--x:72px;--y:32px;--d:.12"></span>
      <span class="vl-matrix17e-glyph-dot" style="--x:112px;--y:68px;--d:.24"></span>
      <span class="vl-matrix17e-glyph-dot" style="--x:52px;--y:74px;--d:.36"></span>
      <span class="vl-matrix17e-glyph-dot" style="--x:142px;--y:26px;--d:.48"></span>
      <span class="vl-matrix17e-channel-core"></span>
    </div>`,
    css: `.vl-matrix17e-glyph-channel {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 24%, #1d6086);
  border-radius: 14px;
  overflow: hidden;
  background: linear-gradient(156deg, #061423, #092948 64%, #040d16);
}
.vl-matrix17e-glyph-dot {
  position: absolute;
  left: var(--x);
  top: var(--y);
  width: 10px;
  height: 10px;
  margin: -4px;
  border-radius: 50%;
  background: color-mix(in srgb, var(--loader-accent) 86%, #e9f9ff);
  animation: vl-matrix17e-channel calc(var(--loader-speed) * 1.45) ease-in-out infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix17e-channel-core {
  position: absolute;
  left: 50%;
  top: 54px;
  width: 8px;
  height: 8px;
  margin: -4px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-matrix17e-channel-core calc(var(--loader-speed) * 1.45) ease-in-out infinite;
}
@keyframes vl-matrix17e-channel {
  0%, 100% { transform: scale(.7) translateX(0); opacity: .14; }
  50% { transform: scale(1.16) translateX(16px); opacity: .95; }
}
@keyframes vl-matrix17e-channel-core {
  0%, 100% { transform: translate(-50%, -50%) scale(.82); opacity: .22; }
  50% { transform: translate(-50%, -50%) scale(1.16); opacity: .96; }
}`
  },
  {
    id: 'matrix-quantum-echo-truss',
    name: 'Quantum Echo Truss',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Truss-like bars echo at different delays, creating a pulsing quantum frame.',
    markup: `<div class="vl-matrix17e-echo-truss" role="img" aria-label="Quantum echo truss">
      <span class="vl-matrix17e-truss" style="--p:0;--d:0"></span>
      <span class="vl-matrix17e-truss" style="--p:22px;--d:.12"></span>
      <span class="vl-matrix17e-truss" style="--p:44px;--d:.24"></span>
      <span class="vl-matrix17e-truss" style="--p:66px;--d:.36"></span>
      <span class="vl-matrix17e-truss" style="--p:88px;--d:.48"></span>
      <span class="vl-matrix17e-truss" style="--p:110px;--d:.6"></span>
    </div>`,
    css: `.vl-matrix17e-echo-truss {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 22%, #1f648a);
  border-radius: 14px;
  overflow: hidden;
  background: linear-gradient(145deg, #041725, #0a2d4b 62%, #040d17);
}
.vl-matrix17e-truss {
  position: absolute;
  left: 20px;
  right: 20px;
  top: var(--p);
  width: calc(100% - 40px);
  height: 4px;
  border-radius: 3px;
  background: linear-gradient(90deg, transparent, color-mix(in srgb, var(--loader-accent) 80%, #e5f5ff), transparent);
  animation: vl-matrix17e-truss calc(var(--loader-speed) * 1.35) ease-in-out infinite;
  animation-delay: calc(var(--d) * 1s);
}
@keyframes vl-matrix17e-truss {
  0%, 100% { transform: scaleX(.45); opacity: .18; }
  50% { transform: scaleX(1); opacity: .92; }
}`
  },
  {
    id: 'matrix-harmonic-radial-channel',
    name: 'Harmonic Radial Channel',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Harmonic waves travel through radial channels in timed concentric pulses.',
    markup: `<div class="vl-matrix17e-radial-channel" role="img" aria-label="Harmonic radial channel">
      <span style="--s:18px;--d:0"></span>
      <span style="--s:30px;--d:.11"></span>
      <span style="--s:42px;--d:.22"></span>
      <span style="--s:54px;--d:.33"></span>
      <span style="--s:66px;--d:.44"></span>
      <span style="--s:78px;--d:.55"></span>
      <span class="vl-matrix17e-radial-core"></span>
    </div>`,
    css: `.vl-matrix17e-radial-channel {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 24%, #1c5d84);
  border-radius: 14px;
  overflow: hidden;
  background: radial-gradient(circle at 50% 52%, #071f34 0 18%, #040b14 68%);
}
.vl-matrix17e-radial-channel span {
  position: absolute;
  left: 50%;
  top: 54px;
  width: var(--s);
  height: var(--s);
  margin: calc(var(--s) / -2);
  border-radius: 50%;
  border: 1px dashed color-mix(in srgb, var(--loader-accent) 78%, #def4ff);
  animation: vl-matrix17e-radial calc(var(--loader-speed) * 1.5) ease-in-out infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix17e-radial-core {
  position: absolute;
  left: 50%;
  top: 54px;
  width: 8px;
  height: 8px;
  margin: -4px;
  border-radius: 50%;
  background: color-mix(in srgb, var(--loader-accent) 90%, #f2f9ff);
  animation: vl-matrix17e-radial-core calc(var(--loader-speed) * 1.5) ease-in-out infinite;
}
@keyframes vl-matrix17e-radial {
  0%, 100% { transform: translate(-50%, -50%) scale(.4); opacity: .15; }
  50% { transform: translate(-50%, -50%) scale(1.05); opacity: .94; }
}
@keyframes vl-matrix17e-radial-core {
  0%, 100% { transform: translate(-50%, -50%) scale(.8); opacity: .22; }
  50% { transform: translate(-50%, -50%) scale(1.2); opacity: .95; }
}`
  },
  {
    id: 'matrix-circuit-vortex-cascade',
    name: 'Circuit Vortex Cascade',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Vortexed circuit lines cascade through four quadrants with staggered angular phases.',
    markup: `<div class="vl-matrix17e-vortex-cascade" role="img" aria-label="Circuit vortex cascade">
      <span class="vl-matrix17e-vortex" style="--r:0deg;--d:0"></span>
      <span class="vl-matrix17e-vortex" style="--r:90deg;--d:.1"></span>
      <span class="vl-matrix17e-vortex" style="--r:180deg;--d:.2"></span>
      <span class="vl-matrix17e-vortex" style="--r:270deg;--d:.3"></span>
      <span class="vl-matrix17e-vortex-core"></span>
    </div>`,
    css: `.vl-matrix17e-vortex-cascade {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 22%, #1f6a90);
  border-radius: 14px;
  overflow: hidden;
  background: linear-gradient(155deg, #041522, #0a3550 62%, #040d16);
}
.vl-matrix17e-vortex {
  position: absolute;
  left: 50%;
  top: 54px;
  width: 72px;
  height: 72px;
  margin: -36px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 76%, #e8f4ff);
  border-radius: 50%;
  transform-origin: center;
  animation: vl-matrix17e-vortex calc(var(--loader-speed) * 1.8) ease-in-out infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix17e-vortex-core {
  position: absolute;
  left: 50%;
  top: 54px;
  width: 9px;
  height: 9px;
  margin: -4px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-matrix17e-vortex-core calc(var(--loader-speed) * 1.8) linear infinite;
}
@keyframes vl-matrix17e-vortex {
  0% { transform: rotate(var(--r)) scale(.6); opacity: .2; }
  50% { transform: rotate(calc(var(--r) + 180deg)) scale(1.06); opacity: .95; }
  100% { transform: rotate(calc(var(--r) + 360deg)) scale(.6); opacity: .2; }
}
@keyframes vl-matrix17e-vortex-core {
  0%, 100% { transform: translate(-50%, -50%) scale(.74); opacity: .2; }
  50% { transform: translate(-50%, -50%) scale(1.24); opacity: .94; }
}`
  },
  {
    id: 'matrix-void-lens-node',
    name: 'Void Lens Node',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Void lens nodes flicker from dark to bright while moving on a narrow radial path.',
    markup: `<div class="vl-matrix17e-void-lens" role="img" aria-label="Void lens node">
      <span class="vl-matrix17e-void-dot" style="--a:0deg;--d:0"></span>
      <span class="vl-matrix17e-void-dot" style="--a:72deg;--d:.1"></span>
      <span class="vl-matrix17e-void-dot" style="--a:144deg;--d:.2"></span>
      <span class="vl-matrix17e-void-dot" style="--a:216deg;--d:.3"></span>
      <span class="vl-matrix17e-void-dot" style="--a:288deg;--d:.4"></span>
      <span class="vl-matrix17e-void-core"></span>
    </div>`,
    css: `.vl-matrix17e-void-lens {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 22%, #24698e);
  border-radius: 14px;
  overflow: hidden;
  background: radial-gradient(circle at 50% 56%, #041321 0 22%, #040b14 72%);
}
.vl-matrix17e-void-dot {
  position: absolute;
  left: 50%;
  top: 54px;
  width: 9px;
  height: 9px;
  margin: -4px;
  border-radius: 50%;
  background: color-mix(in srgb, var(--loader-accent) 84%, #f0fbff);
  animation: vl-matrix17e-void calc(var(--loader-speed) * 1.5) ease-in-out infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix17e-void-dot {
  transform: rotate(var(--a)) translateX(28px);
}
.vl-matrix17e-void-core {
  position: absolute;
  left: 50%;
  top: 54px;
  width: 8px;
  height: 8px;
  margin: -4px;
  border-radius: 50%;
  background: var(--loader-accent);
  box-shadow: 0 0 10px color-mix(in srgb, var(--loader-accent) 54%, transparent);
  animation: vl-matrix17e-void-core calc(var(--loader-speed) * 1.5) linear infinite;
}
@keyframes vl-matrix17e-void {
  0%, 100% { transform: rotate(var(--a)) translateX(28px) scale(.56); opacity: .18; }
  50% { transform: rotate(calc(var(--a) + 180deg)) translateX(30px) scale(1.05); opacity: .94; }
}
@keyframes vl-matrix17e-void-core {
  0%, 100% { transform: translate(-50%, -50%) scale(.8); opacity: .22; }
  50% { transform: translate(-50%, -50%) scale(1.2); opacity: .95; }
}`
  }
];
