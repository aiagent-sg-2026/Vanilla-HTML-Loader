export const matrixPack10LoadersA = [
  {
    id: 'matrix-ripple-frame-weave',
    name: 'Ripple Frame Weave',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Nested frames ripple into and out of focus while a central anchor maintains the sequence.',
    markup: `<div class="vl-matrix10-ripple-weave" aria-hidden="true">
      <span class="vl-matrix10-frame" style="--s:22px;--d:0"></span>
      <span class="vl-matrix10-frame" style="--s:34px;--d:.16"></span>
      <span class="vl-matrix10-frame" style="--s:46px;--d:.32"></span>
      <span class="vl-matrix10-frame" style="--s:58px;--d:.48"></span>
      <span class="vl-matrix10-core"></span>
    </div>`,
    css: `.vl-matrix10-ripple-weave {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 26%, #1e6492);
  border-radius: 14px;
  overflow: hidden;
  background: radial-gradient(circle at 50% 52%, color-mix(in srgb, var(--loader-accent) 18%, transparent), #041422 58%);
}
.vl-matrix10-frame {
  position: absolute;
  left: 50%;
  top: 50%;
  width: var(--s);
  height: var(--s);
  margin: calc(var(--s) / -2);
  border: 1px solid color-mix(in srgb, var(--loader-accent) 82%, #e3f2fb);
  border-radius: 50%;
  animation: vl-matrix10-ripple-frame calc(var(--loader-speed) * 1.82) ease-in-out infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix10-core {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 9px;
  height: 9px;
  margin: -4px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-matrix10-ripple-core calc(var(--loader-speed) * 1.15) cubic-bezier(.28, 0, .35, 1) infinite;
}
@keyframes vl-matrix10-ripple-frame {
  0%, 100% { transform: translate(-50%, -50%) scale(.24); opacity: .18; }
  50% { transform: translate(-50%, -50%) scale(1.03); opacity: .96; }
}
@keyframes vl-matrix10-ripple-core {
  0%, 100% { transform: scale(.56); opacity: .22; }
  50% { transform: scale(1.06); opacity: 1; }
}`
  },
  {
    id: 'matrix-sine-lattice-gate',
    name: 'Sine Lattice Gate',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Sine tracks sweep across a lattice and trigger a gate cadence on shared nodes.',
    markup: `<div class="vl-matrix10-sine-lattice" aria-hidden="true">
      <span class="vl-matrix10-sine" style="--x:14px;--d:0"></span>
      <span class="vl-matrix10-sine" style="--x:44px;--d:.12"></span>
      <span class="vl-matrix10-sine" style="--x:74px;--d:.24"></span>
      <span class="vl-matrix10-sine" style="--x:104px;--d:.36"></span>
      <span class="vl-matrix10-sine" style="--x:134px;--d:.48"></span>
      <span class="vl-matrix10-sine" style="--x:164px;--d:.6"></span>
      <span class="vl-matrix10-sine-core"></span>
    </div>`,
    css: `.vl-matrix10-sine-lattice {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 24%, #1d6391);
  border-radius: 14px;
  overflow: hidden;
  background: linear-gradient(155deg, #061623, #0a3557 57%, #04111f);
}
.vl-matrix10-sine {
  position: absolute;
  left: var(--x);
  top: 16px;
  width: 6px;
  height: 72px;
  border-radius: 4px;
  background: linear-gradient(180deg, color-mix(in srgb, var(--loader-accent) 20%, transparent), color-mix(in srgb, var(--loader-accent) 88%, #e7f4fd), color-mix(in srgb, var(--loader-accent) 20%, transparent));
  transform-origin: center;
  animation: vl-matrix10-sine-track calc(var(--loader-speed) * 1.45) ease-in-out infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix10-sine-core {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 9px;
  height: 9px;
  margin: -4px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-matrix10-sine-core calc(var(--loader-speed) * 1.12) ease-in-out infinite;
}
@keyframes vl-matrix10-sine-track {
  0%, 100% { transform: translateY(0) scaleY(.44); opacity: .2; }
  50% { transform: translateY(22px) scaleY(1); opacity: 1; }
}
@keyframes vl-matrix10-sine-core {
  0%, 100% { transform: scale(.56); opacity: .22; }
  50% { transform: scale(1.08); opacity: .98; }
}`
  },
  {
    id: 'matrix-plasma-bridge-band',
    name: 'Plasma Bridge Band',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Three bridge bands pulse with alternating phase delay and converge at a plasma-like center.',
    markup: `<div class="vl-matrix10-plasma-band" aria-hidden="true">
      <span class="vl-matrix10-plasma" style="--d:0;--w:42px"></span>
      <span class="vl-matrix10-plasma" style="--d:.14;--w:52px"></span>
      <span class="vl-matrix10-plasma" style="--d:.28;--w:62px"></span>
      <span class="vl-matrix10-plasma-core"></span>
    </div>`,
    css: `.vl-matrix10-plasma-band {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 26%, #1e6590);
  border-radius: 14px;
  overflow: hidden;
  background: radial-gradient(circle at 50% 52%, color-mix(in srgb, var(--loader-accent) 18%, transparent), #04121d 58%);
}
.vl-matrix10-plasma {
  position: absolute;
  left: 50%;
  top: 50%;
  width: var(--w);
  height: 4px;
  margin-left: calc(var(--w) / -2);
  border-radius: 99px;
  background: linear-gradient(90deg, transparent, color-mix(in srgb, var(--loader-accent) 92%, #e7f4fe), transparent);
  opacity: .24;
  animation: vl-matrix10-plasma-band calc(var(--loader-speed) * 1.72) ease-in-out infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix10-plasma-core {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 8px;
  height: 8px;
  margin: -4px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-matrix10-plasma-core calc(var(--loader-speed) * 1.08) linear infinite;
}
@keyframes vl-matrix10-plasma-band {
  0%, 100% { transform: translate(-50%, -50%) scaleX(.34); opacity: .16; }
  50% { transform: translate(-50%, -50%) scaleX(1.05); opacity: .98; }
}
@keyframes vl-matrix10-plasma-core {
  0%, 100% { transform: scale(.55); }
  50% { transform: scale(1.05); }
}`
  },
  {
    id: 'matrix-cascade-beacon-rings',
    name: 'Cascade Beacon Rings',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Beacon rings cascade outward and fold back in one shared rhythmic pass.',
    markup: `<div class="vl-matrix10-beacon-rings" aria-hidden="true">
      <span class="vl-matrix10-beacon" style="--s:32px;--d:0"></span>
      <span class="vl-matrix10-beacon" style="--s:44px;--d:.14"></span>
      <span class="vl-matrix10-beacon" style="--s:56px;--d:.28"></span>
      <span class="vl-matrix10-beacon" style="--s:68px;--d:.42"></span>
      <span class="vl-matrix10-beacon-core"></span>
    </div>`,
    css: `.vl-matrix10-beacon-rings {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 26%, #1d6793);
  border-radius: 14px;
  overflow: hidden;
  background: linear-gradient(140deg, #071727, #0a3457 60%, #04101c);
}
.vl-matrix10-beacon {
  position: absolute;
  left: 50%;
  top: 50%;
  width: var(--s);
  height: var(--s);
  margin: calc(var(--s) / -2);
  border: 1px solid color-mix(in srgb, var(--loader-accent) 78%, #dff1fb);
  border-radius: 50%;
  animation: vl-matrix10-beacon-ring calc(var(--loader-speed) * 1.9) ease-in-out infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix10-beacon-core {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 7px;
  height: 7px;
  margin: -3px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-matrix10-beacon-core calc(var(--loader-speed) * 1.15) cubic-bezier(.2, 0, .35, 1) infinite;
}
@keyframes vl-matrix10-beacon-ring {
  0% { transform: translate(-50%, -50%) scale(.24) rotate(0deg); opacity: .18; }
  50% { transform: translate(-50%, -50%) scale(1) rotate(168deg); opacity: .95; }
  100% { transform: translate(-50%, -50%) scale(.24) rotate(360deg); opacity: .18; }
}
@keyframes vl-matrix10-beacon-core {
  0%, 100% { transform: scale(.56); opacity: .2; }
  50% { transform: scale(1.04); opacity: 1; }
}`
  },
  {
    id: 'matrix-orbit-scan-lattice',
    name: 'Orbit Scan Lattice',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Diagonal lattice scans are repeated by orbiting markers around a ringed anchor.',
    markup: `<div class="vl-matrix10-orbit-scan" aria-hidden="true">
      <span class="vl-matrix10-orbit-scan-beam" style="--d:0"></span>
      <span class="vl-matrix10-orbit-scan-beam" style="--d:.16"></span>
      <span class="vl-matrix10-orbit-scan-beam" style="--d:.32"></span>
      <span class="vl-matrix10-orbit-scan-beam" style="--d:.48"></span>
      <span class="vl-matrix10-orbit-scan-core"></span>
    </div>`,
    css: `.vl-matrix10-orbit-scan {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 24%, #1d638f);
  border-radius: 14px;
  overflow: hidden;
  background: radial-gradient(circle at 50% 54%, color-mix(in srgb, var(--loader-accent) 22%, transparent), #04111f 58%);
}
.vl-matrix10-orbit-scan-beam {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 58px;
  height: 58px;
  margin: -29px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 70%, #dbefff);
  border-radius: 50%;
  border-right-color: transparent;
  border-left-color: transparent;
  animation: vl-matrix10-orbit-scan calc(var(--loader-speed) * 1.7) ease-in-out infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix10-orbit-scan-core {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 9px;
  height: 9px;
  margin: -4px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-matrix10-orbit-scan-core calc(var(--loader-speed) * 1.1) ease-in-out infinite;
}
@keyframes vl-matrix10-orbit-scan {
  0% { transform: translate(-50%, -50%) rotate(0deg); opacity: .2; }
  50% { transform: translate(-50%, -50%) rotate(180deg); opacity: .96; }
  100% { transform: translate(-50%, -50%) rotate(360deg); opacity: .2; }
}
@keyframes vl-matrix10-orbit-scan-core {
  0%, 100% { transform: scale(.54); opacity: .24; }
  50% { transform: scale(1.08); opacity: 1; }
}`
  }
];
