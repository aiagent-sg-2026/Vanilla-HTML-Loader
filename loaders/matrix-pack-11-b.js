export const matrixPack11LoadersB = [
  {
    id: 'matrix-toroidal-matrix-grid',
    name: 'Toroidal Matrix Grid',
    category: 'Matrix',
    tech: 'CSS',
    description: 'A toroidal loop sweeps a compact grid into a closed phase loop.',
    markup: `<div class="vl-matrix11-toroidal-grid" aria-hidden="true">
      <span class="vl-matrix11-toroid" style="--a:0deg;--d:0"></span>
      <span class="vl-matrix11-toroid" style="--a:72deg;--d:.14"></span>
      <span class="vl-matrix11-toroid" style="--a:144deg;--d:.28"></span>
      <span class="vl-matrix11-toroid" style="--a:216deg;--d:.42"></span>
      <span class="vl-matrix11-toroid-core"></span>
    </div>`,
    css: `.vl-matrix11-toroidal-grid {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 25%, #1f73aa);
  border-radius: 14px;
  overflow: hidden;
  background: linear-gradient(145deg, #061a2b, #082f50 58%, #041120);
}
.vl-matrix11-toroid {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 56px;
  height: 22px;
  margin: -11px -28px;
  border-radius: 999px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 82%, #e6f4fc);
  background: linear-gradient(90deg, transparent, color-mix(in srgb, var(--loader-accent) 16%, transparent));
  transform: rotate(var(--a));
  animation: vl-matrix11-toroid-rot calc(var(--loader-speed) * 1.55) linear infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix11-toroid-core {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 8px;
  height: 8px;
  margin: -4px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-matrix11-toroid-core calc(var(--loader-speed) * 1.1) ease-in-out infinite;
}
@keyframes vl-matrix11-toroid-rot {
  0% { transform: rotate(var(--a)) scaleX(.55); opacity: .2; }
  50% { transform: rotate(calc(var(--a) + 200deg)) scaleX(1); opacity: .96; }
  100% { transform: rotate(calc(var(--a) + 360deg)) scaleX(.55); opacity: .2; }
}
@keyframes vl-matrix11-toroid-core {
  0%, 100% { transform: scale(.52); opacity: .22; }
  50% { transform: scale(1.08); opacity: 1; }
}`
  },
  {
    id: 'matrix-binary-lens-mirror',
    name: 'Binary Lens Mirror',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Paired lens-mirrors reflect binary pulses in mirrored arcs.',
    markup: `<div class="vl-matrix11-binary-mirror" aria-hidden="true">
      <span class="vl-matrix11-mirror" style="--d:0;--x:34px;--dir:1"></span>
      <span class="vl-matrix11-mirror" style="--d:.18;--x:90px;--dir:-1"></span>
      <span class="vl-matrix11-mirror" style="--d:.36;--x:146px;--dir:1"></span>
      <span class="vl-matrix11-mirror-core"></span>
    </div>`,
    css: `.vl-matrix11-binary-mirror {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 24%, #1e73a8);
  border-radius: 14px;
  overflow: hidden;
  background: radial-gradient(circle at 50% 50%, color-mix(in srgb, var(--loader-accent) 18%, transparent), #041120 58%);
}
.vl-matrix11-mirror {
  position: absolute;
  left: var(--x);
  top: 16px;
  width: 12px;
  height: 76px;
  border-radius: 99px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 84%, #deeff9);
  transform-origin: center;
  animation: vl-matrix11-mirror-pulse calc(var(--loader-speed) * 1.65) ease-in-out infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix11-mirror::before {
  content: '';
  position: absolute;
  left: -3px;
  top: -3px;
  right: -3px;
  bottom: -3px;
  border-radius: inherit;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 26%, transparent);
  transform: scaleX(calc(var(--dir) * 1));
}
.vl-matrix11-mirror-core {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 8px;
  height: 8px;
  margin: -4px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-matrix11-mirror-core calc(var(--loader-speed) * 1.08) ease-in-out infinite;
}
@keyframes vl-matrix11-mirror-pulse {
  0% { transform: scaleX(.45) rotate(0deg); opacity: .2; }
  50% { transform: scaleX(1) rotate(180deg); opacity: .94; }
  100% { transform: scaleX(.45) rotate(360deg); opacity: .2; }
}
@keyframes vl-matrix11-mirror-core {
  0%, 100% { transform: scale(.54); opacity: .2; }
  50% { transform: scale(1.07); opacity: 1; }
}`
  },
  {
    id: 'matrix-voxel-bridge-lane',
    name: 'Voxel Bridge Lane',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Voxel markers bridge across three lanes and snap into synchronized crossings.',
    markup: `<div class="vl-matrix11-voxel-bridge" aria-hidden="true">
      <span class="vl-matrix11-bridge-lane" style="--y:20px;--d:0"></span>
      <span class="vl-matrix11-bridge-lane" style="--y:44px;--d:.13"></span>
      <span class="vl-matrix11-bridge-lane" style="--y:68px;--d:.26"></span>
      <span class="vl-matrix11-bridge-core"></span>
    </div>`,
    css: `.vl-matrix11-voxel-bridge {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 24%, #1f72a7);
  border-radius: 14px;
  overflow: hidden;
  background: linear-gradient(160deg, #051a2a, #0a3352 59%, #04101d);
}
.vl-matrix11-bridge-lane {
  position: absolute;
  left: 16px;
  top: var(--y);
  width: 158px;
  height: 10px;
  border-radius: 4px;
  background: color-mix(in srgb, var(--loader-accent) 20%, transparent);
  animation: vl-matrix11-bridge-lane calc(var(--loader-speed) * 1.55) ease-in-out infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix11-bridge-lane::before,
.vl-matrix11-bridge-lane::after {
  content: '';
  position: absolute;
  left: 50%;
  top: -3px;
  width: 8px;
  height: 16px;
  transform: translateX(-50%);
  background: color-mix(in srgb, var(--loader-accent) 88%, #e3f2fb);
  box-shadow: 0 0 0 1px color-mix(in srgb, var(--loader-accent) 14%, transparent);
}
.vl-matrix11-bridge-lane::before { left: 20%; }
.vl-matrix11-bridge-lane::after { left: 80%; }
.vl-matrix11-bridge-core {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 9px;
  height: 9px;
  margin: -4px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-matrix11-bridge-core calc(var(--loader-speed) * 1.04) cubic-bezier(.2, 0, .35, 1) infinite;
}
@keyframes vl-matrix11-bridge-lane {
  0% { transform: scaleX(.28); opacity: .18; }
  50% { transform: scaleX(1); opacity: .94; }
  100% { transform: scaleX(.28); opacity: .18; }
}
@keyframes vl-matrix11-bridge-core {
  0%, 100% { transform: scale(.55); opacity: .22; }
  50% { transform: scale(1.08); opacity: 1; }
}`
  },
  {
    id: 'matrix-neural-arc-cascade',
    name: 'Neural Arc Cascade',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Neural arcs cascade through paired anchors and settle back into a central core.',
    markup: `<div class="vl-matrix11-neural-arc" aria-hidden="true">
      <span class="vl-matrix11-arc" style="--d:0;--a:16px"></span>
      <span class="vl-matrix11-arc" style="--d:.15;--a:45px"></span>
      <span class="vl-matrix11-arc" style="--d:.3;--a:74px"></span>
      <span class="vl-matrix11-arc-core"></span>
    </div>`,
    css: `.vl-matrix11-neural-arc {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 25%, #2073a6);
  border-radius: 14px;
  overflow: hidden;
  background: linear-gradient(165deg, #061927, #0a3553 59%, #04111e);
}
.vl-matrix11-arc {
  position: absolute;
  left: var(--a);
  top: 50%;
  width: 48px;
  height: 12px;
  margin-top: -6px;
  border-radius: 99px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 84%, #ddf1ff);
  background: linear-gradient(90deg, transparent, color-mix(in srgb, var(--loader-accent) 86%, #e8f6ff), transparent);
  animation: vl-matrix11-arc calc(var(--loader-speed) * 1.5) ease-in-out infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix11-arc-core {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 9px;
  height: 9px;
  margin: -4px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-matrix11-arc-core calc(var(--loader-speed) * 1.08) cubic-bezier(.2, 0, .35, 1) infinite;
}
@keyframes vl-matrix11-arc {
  0%, 100% { width: 30px; opacity: .2; transform: translateY(-14px); }
  50% { width: 54px; opacity: .95; transform: translateY(14px); }
}
@keyframes vl-matrix11-arc-core {
  0%, 100% { transform: scale(.54); opacity: .22; }
  50% { transform: scale(1.06); opacity: 1; }
}`
  },
  {
    id: 'matrix-circuit-wavelet-loop',
    name: 'Circuit Wavelet Loop',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Wavelets loop through mini-circuit nodes and lock in with a center pulse.',
    markup: `<div class="vl-matrix11-wavelet-loop" aria-hidden="true">
      <span class="vl-matrix11-wavelet" style="--d:0;--x:20px"></span>
      <span class="vl-matrix11-wavelet" style="--d:.12;--x:48px"></span>
      <span class="vl-matrix11-wavelet" style="--d:.24;--x:76px"></span>
      <span class="vl-matrix11-wavelet" style="--d:.36;--x:104px"></span>
      <span class="vl-matrix11-wavelet" style="--d:.48;--x:132px"></span>
      <span class="vl-matrix11-wavelet-core"></span>
    </div>`,
    css: `.vl-matrix11-wavelet-loop {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 23%, #2170a9);
  border-radius: 14px;
  overflow: hidden;
  background: linear-gradient(150deg, #061827, #0a3250 58%, #04111f);
}
.vl-matrix11-wavelet {
  position: absolute;
  left: var(--x);
  top: 15px;
  width: 6px;
  height: 72px;
  border-radius: 6px;
  background: linear-gradient(180deg, transparent, color-mix(in srgb, var(--loader-accent) 86%, #e6f4fe), transparent);
  animation: vl-matrix11-wavelet calc(var(--loader-speed) * 1.45) ease-in-out infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix11-wavelet-core {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 10px;
  height: 10px;
  margin: -5px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-matrix11-wavelet-core calc(var(--loader-speed) * 1.1) linear infinite;
}
@keyframes vl-matrix11-wavelet {
  0%, 100% { transform: translateY(0) scaleY(.4); opacity: .18; }
  50% { transform: translateY(18px) scaleY(1); opacity: .94; }
}
@keyframes vl-matrix11-wavelet-core {
  0%, 100% { transform: scale(.56); opacity: .22; }
  50% { transform: scale(1.07); opacity: 1; }
}`
  }
];
