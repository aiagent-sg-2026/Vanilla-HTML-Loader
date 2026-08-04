export const matrixPack11LoadersA = [
  {
    id: 'matrix-quantum-tide-array',
    name: 'Quantum Tide Array',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Tidal bars ripple through the array at staggered delays and reset on a harmonic beat.',
    markup: `<div class="vl-matrix11-tide-array" aria-hidden="true">
      <span class="vl-matrix11-tide" style="--x:16px;--d:0"></span>
      <span class="vl-matrix11-tide" style="--x:38px;--d:.12"></span>
      <span class="vl-matrix11-tide" style="--x:60px;--d:.24"></span>
      <span class="vl-matrix11-tide" style="--x:82px;--d:.36"></span>
      <span class="vl-matrix11-tide" style="--x:104px;--d:.48"></span>
      <span class="vl-matrix11-tide" style="--x:126px;--d:.6"></span>
      <span class="vl-matrix11-tide" style="--x:148px;--d:.72"></span>
      <span class="vl-matrix11-tide-core"></span>
    </div>`,
    css: `.vl-matrix11-tide-array {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 26%, #2072aa);
  border-radius: 14px;
  overflow: hidden;
  background: linear-gradient(150deg, #06172a, #07334d 58%, #04111f);
}
.vl-matrix11-tide {
  position: absolute;
  left: var(--x);
  top: 50%;
  width: 8px;
  height: 60px;
  margin-top: -30px;
  border-radius: 99px;
  background: linear-gradient(180deg, transparent, color-mix(in srgb, var(--loader-accent) 88%, #e9f5fd), transparent);
  animation: vl-matrix11-tide-wave calc(var(--loader-speed) * 1.5) ease-in-out infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix11-tide-core {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 8px;
  height: 8px;
  margin: -4px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-matrix11-tide-core calc(var(--loader-speed) * 1.1) ease-in-out infinite;
}
@keyframes vl-matrix11-tide-wave {
  0%, 100% { transform: translateY(0) scaleY(.45); opacity: .18; }
  50% { transform: translateY(-12px) scaleY(1); opacity: .94; }
}
@keyframes vl-matrix11-tide-core {
  0%, 100% { transform: scale(.54); opacity: .24; }
  50% { transform: scale(1.08); opacity: 1; }
}`
  },
  {
    id: 'matrix-sparkline-gate-chain',
    name: 'Sparkline Gate Chain',
    category: 'Matrix',
    tech: 'CSS',
    description: 'A chain of sparkline gates animates along one shared sweep rhythm.',
    markup: `<div class="vl-matrix11-spark-gate" aria-hidden="true">
      <span class="vl-matrix11-spark" style="--d:0;--x:16px"></span>
      <span class="vl-matrix11-spark" style="--d:.14;--x:46px"></span>
      <span class="vl-matrix11-spark" style="--d:.28;--x:76px"></span>
      <span class="vl-matrix11-spark" style="--d:.42;--x:106px"></span>
      <span class="vl-matrix11-spark" style="--d:.56;--x:136px"></span>
      <span class="vl-matrix11-spark-core"></span>
    </div>`,
    css: `.vl-matrix11-spark-gate {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 24%, #2373ab);
  border-radius: 14px;
  overflow: hidden;
  background: radial-gradient(circle at 50% 54%, color-mix(in srgb, var(--loader-accent) 20%, transparent), #041422 58%);
}
.vl-matrix11-spark {
  position: absolute;
  left: var(--x);
  top: 24px;
  width: 4px;
  height: 58px;
  border-radius: 99px;
  background: linear-gradient(180deg, transparent, color-mix(in srgb, var(--loader-accent) 86%, #e0f4ff), transparent);
  animation: vl-matrix11-spark-gate calc(var(--loader-speed) * 1.45) ease-in-out infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix11-spark-core {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 9px;
  height: 9px;
  margin: -4px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-matrix11-spark-core calc(var(--loader-speed) * 1.1) linear infinite;
}
@keyframes vl-matrix11-spark-gate {
  0%, 100% { transform: translateY(0) scaleY(.35); opacity: .2; }
  50% { transform: translateY(16px) scaleY(1); opacity: .94; }
}
@keyframes vl-matrix11-spark-core {
  0%, 100% { transform: scale(.54); opacity: .22; }
  50% { transform: scale(1.07); opacity: 1; }
}`
  },
  {
    id: 'matrix-cascade-axon-grid',
    name: 'Cascade Axon Grid',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Axon nodes cascade across a grid and converge into a central gate pulse.',
    markup: `<div class="vl-matrix11-axon-grid" aria-hidden="true">
      <span class="vl-matrix11-axon" style="--x:18px;--d:0"></span>
      <span class="vl-matrix11-axon" style="--x:42px;--d:.11"></span>
      <span class="vl-matrix11-axon" style="--x:66px;--d:.22"></span>
      <span class="vl-matrix11-axon" style="--x:90px;--d:.33"></span>
      <span class="vl-matrix11-axon" style="--x:114px;--d:.44"></span>
      <span class="vl-matrix11-axon" style="--x:138px;--d:.55"></span>
      <span class="vl-matrix11-axon" style="--x:162px;--d:.66"></span>
      <span class="vl-matrix11-axon-core"></span>
    </div>`,
    css: `.vl-matrix11-axon-grid {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 24%, #2370a7);
  border-radius: 14px;
  overflow: hidden;
  background: linear-gradient(140deg, #051824, #072f4a 58%, #04101f);
}
.vl-matrix11-axon {
  position: absolute;
  left: var(--x);
  top: 12px;
  width: 8px;
  height: 8px;
  border-radius: 2px;
  background: color-mix(in srgb, var(--loader-accent) 84%, #e3f3fb);
  animation: vl-matrix11-axon-flit calc(var(--loader-speed) * 1.55) linear infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix11-axon-core {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 9px;
  height: 9px;
  margin: -4px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-matrix11-axon-core calc(var(--loader-speed) * 1.09) cubic-bezier(.2, 0, .35, 1) infinite;
}
@keyframes vl-matrix11-axon-flit {
  0% { transform: translateY(0) scale(.42); opacity: .2; }
  45% { transform: translateY(76px) scale(1); opacity: .9; }
  100% { transform: translateY(0) scale(.42); opacity: .2; }
}
@keyframes vl-matrix11-axon-core {
  0%, 100% { transform: scale(.55); opacity: .22; }
  50% { transform: scale(1.08); opacity: 1; }
}`
  },
  {
    id: 'matrix-nebula-byte-net',
    name: 'Nebula Byte Net',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Nebula bands form a soft byte-like network and fold into a focal anchor.',
    markup: `<div class="vl-matrix11-byte-net" aria-hidden="true">
      <span class="vl-matrix11-byte" style="--d:0;--y:26px"></span>
      <span class="vl-matrix11-byte" style="--d:.16;--y:46px"></span>
      <span class="vl-matrix11-byte" style="--d:.32;--y:66px"></span>
      <span class="vl-matrix11-byte" style="--d:.48;--y:30px"></span>
      <span class="vl-matrix11-byte" style="--d:.64;--y:50px"></span>
      <span class="vl-matrix11-byte-core"></span>
    </div>`,
    css: `.vl-matrix11-byte-net {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 24%, #1e6ea4);
  border-radius: 14px;
  overflow: hidden;
  background: repeating-linear-gradient(100deg, #061a2d 0 10px, #082f4d 10px 11px, #061a2d 11px 22px);
}
.vl-matrix11-byte {
  position: absolute;
  left: 50%;
  top: var(--y);
  width: 130px;
  height: 6px;
  transform: translateX(-65px);
  border-radius: 99px;
  background: linear-gradient(90deg, transparent, color-mix(in srgb, var(--loader-accent) 86%, #e8f3fc), transparent);
  animation: vl-matrix11-byte-net calc(var(--loader-speed) * 1.5) ease-in-out infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix11-byte-core {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 8px;
  height: 8px;
  margin: -4px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-matrix11-byte-core calc(var(--loader-speed) * 1.05) ease-in-out infinite;
}
@keyframes vl-matrix11-byte-net {
  0%, 100% { transform: translateX(-65px) scaleX(.32); opacity: .2; }
  50% { transform: translateX(-65px) scaleX(1); opacity: .94; }
}
@keyframes vl-matrix11-byte-core {
  0%, 100% { transform: scale(.54); opacity: .22; }
  50% { transform: scale(1.07); opacity: 1; }
}`
  },
  {
    id: 'matrix-lagoon-core-fusion',
    name: 'Lagoon Core Fusion',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Circular rings blend around a fusion core with alternating phase and speed.',
    markup: `<div class="vl-matrix11-lagoon-core" aria-hidden="true">
      <span class="vl-matrix11-lagoon-ring" style="--s:28px;--d:0"></span>
      <span class="vl-matrix11-lagoon-ring" style="--s:40px;--d:.14"></span>
      <span class="vl-matrix11-lagoon-ring" style="--s:52px;--d:.28"></span>
      <span class="vl-matrix11-lagoon-ring" style="--s:64px;--d:.42"></span>
      <span class="vl-matrix11-lagoon-core"></span>
    </div>`,
    css: `.vl-matrix11-lagoon-core {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 26%, #1f6da5);
  border-radius: 14px;
  overflow: hidden;
  background: radial-gradient(circle at 50% 52%, color-mix(in srgb, var(--loader-accent) 18%, transparent), #04111f 58%);
}
.vl-matrix11-lagoon-ring {
  position: absolute;
  left: 50%;
  top: 50%;
  width: var(--s);
  height: var(--s);
  margin: calc(var(--s) / -2);
  border: 1px solid color-mix(in srgb, var(--loader-accent) 74%, #dcf0ff);
  border-radius: 50%;
  animation: vl-matrix11-lagoon-ring calc(var(--loader-speed) * 1.72) linear infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix11-lagoon-core {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 8px;
  height: 8px;
  margin: -4px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-matrix11-lagoon-core calc(var(--loader-speed) * 1.12) cubic-bezier(.2, 0, .35, 1) infinite;
}
@keyframes vl-matrix11-lagoon-ring {
  0% { transform: translate(-50%, -50%) scale(.22); opacity: .16; }
  50% { transform: translate(-50%, -50%) scale(1.05); opacity: .96; }
  100% { transform: translate(-50%, -50%) scale(.22); opacity: .16; }
}
@keyframes vl-matrix11-lagoon-core {
  0%, 100% { transform: scale(.53); opacity: .22; }
  50% { transform: scale(1.08); opacity: 1; }
}`
  }
];
