export const matrixPack13LoadersA = [
  {
    id: 'matrix-quantum-tile-veil',
    name: 'Quantum Tile Veil',
    category: 'Matrix',
    tech: 'CSS',
    description: 'A quantum tile field fades in layered strips while a central veil keeps phase sync.',
    markup: `<div class="vl-matrix13-quantum-veil" aria-hidden="true">
      <span class="vl-matrix13-tile" style="--d:0;--x:22px;--y:16px"></span>
      <span class="vl-matrix13-tile" style="--d:.12;--x:52px;--y:24px"></span>
      <span class="vl-matrix13-tile" style="--d:.24;--x:82px;--y:16px"></span>
      <span class="vl-matrix13-tile" style="--d:.36;--x:112px;--y:24px"></span>
      <span class="vl-matrix13-tile" style="--d:.48;--x:142px;--y:16px"></span>
      <span class="vl-matrix13-quantum-core"></span>
    </div>`,
    css: `.vl-matrix13-quantum-veil {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 24%, #1e6ca2);
  border-radius: 14px;
  overflow: hidden;
  background: linear-gradient(160deg, #041524, #0a3656 58%, #04101d);
}
.vl-matrix13-tile {
  position: absolute;
  left: var(--x);
  top: var(--y);
  width: 8px;
  height: 76px;
  border-radius: 99px;
  background: linear-gradient(180deg, transparent, color-mix(in srgb, var(--loader-accent) 84%, #e8f6ff), transparent);
  animation: vl-matrix13-tile-wave calc(var(--loader-speed) * 1.62) ease-in-out infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix13-quantum-core {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 10px;
  height: 10px;
  margin: -5px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-matrix13-core-pulse calc(var(--loader-speed) * 1.1) cubic-bezier(.2, 0, .35, 1) infinite;
}
@keyframes vl-matrix13-tile-wave {
  0%, 100% { transform: translateY(0) scaleY(.32); opacity: .18; }
  50% { transform: translateY(12px) scaleY(1.04); opacity: .95; }
}
@keyframes vl-matrix13-core-pulse {
  0%, 100% { transform: scale(.56); opacity: .22; }
  50% { transform: scale(1.08); opacity: 1; }
}`
  },
  {
    id: 'matrix-nano-gate-matrix',
    name: 'Nano Gate Matrix',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Small gates flicker between phases and then realign at a repeating node.',
    markup: `<div class="vl-matrix13-nano-gates" aria-hidden="true">
      <span class="vl-matrix13-gate" style="--d:0;--x:24px"></span>
      <span class="vl-matrix13-gate" style="--d:.14;--x:56px"></span>
      <span class="vl-matrix13-gate" style="--d:.28;--x:88px"></span>
      <span class="vl-matrix13-gate" style="--d:.42;--x:120px"></span>
      <span class="vl-matrix13-gate" style="--d:.56;--x:152px"></span>
      <span class="vl-matrix13-gate-core"></span>
    </div>`,
    css: `.vl-matrix13-nano-gates {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 24%, #1d6998);
  border-radius: 14px;
  overflow: hidden;
  background: radial-gradient(circle at 50% 52%, color-mix(in srgb, var(--loader-accent) 18%, transparent), #03101b 58%);
}
.vl-matrix13-gate {
  position: absolute;
  top: 14px;
  left: var(--x);
  width: 8px;
  height: 78px;
  border-radius: 2px;
  background: color-mix(in srgb, var(--loader-accent) 70%, #e9f4fd);
  border: 1px solid color-mix(in srgb, var(--loader-accent) 90%, transparent);
  animation: vl-matrix13-gate-flash calc(var(--loader-speed) * 1.35) ease-in-out infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix13-gate-core {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 9px;
  height: 9px;
  margin: -4px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-matrix13-core-core calc(var(--loader-speed) * 1.06) linear infinite;
}
@keyframes vl-matrix13-gate-flash {
  0%, 100% { opacity: .2; transform: scaleY(.42); }
  50% { opacity: .96; transform: scaleY(1.08); }
}
@keyframes vl-matrix13-core-core {
  0%, 100% { transform: scale(.54); opacity: .22; }
  50% { transform: scale(1.07); opacity: 1; }
}`
  },
  {
    id: 'matrix-synaptic-bridge-wave',
    name: 'Synaptic Bridge Wave',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Twin bridge lines create a synchronized wave across three heights then settle into the center.',
    markup: `<div class="vl-matrix13-synaptic-bridge" aria-hidden="true">
      <span class="vl-matrix13-bridge-line" style="--d:0;--y:22px"></span>
      <span class="vl-matrix13-bridge-line" style="--d:.14;--y:45px"></span>
      <span class="vl-matrix13-bridge-line" style="--d:.28;--y:68px"></span>
      <span class="vl-matrix13-bridge-core"></span>
    </div>`,
    css: `.vl-matrix13-synaptic-bridge {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 22%, #1f6ea2);
  border-radius: 14px;
  overflow: hidden;
  background: linear-gradient(165deg, #051523, #0a3652 58%, #04101d);
}
.vl-matrix13-bridge-line {
  position: absolute;
  left: 14px;
  top: var(--y);
  width: 160px;
  height: 7px;
  border-radius: 99px;
  background: linear-gradient(90deg, transparent, color-mix(in srgb, var(--loader-accent) 88%, #eaf5ff), transparent);
  animation: vl-matrix13-bridge-wave calc(var(--loader-speed) * 1.46) ease-in-out infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix13-bridge-core {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 8px;
  height: 8px;
  margin: -4px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-matrix13-bridge-core calc(var(--loader-speed) * 1.04) cubic-bezier(.2, 0, .35, 1) infinite;
}
@keyframes vl-matrix13-bridge-wave {
  0%, 100% { transform: scaleX(.3); opacity: .2; }
  50% { transform: scaleX(1); opacity: .95; }
}
@keyframes vl-matrix13-bridge-core {
  0%, 100% { transform: scale(.55); opacity: .22; }
  50% { transform: scale(1.08); opacity: 1; }
}`
  },
  {
    id: 'matrix-prism-array-surge',
    name: 'Prism Array Surge',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Prism bars rotate together and pulse a burst at the center axis.',
    markup: `<div class="vl-matrix13-prism-array" aria-hidden="true">
      <span class="vl-matrix13-prism-bar" style="--d:0;--a:0deg"></span>
      <span class="vl-matrix13-prism-bar" style="--d:.17;--a:72deg"></span>
      <span class="vl-matrix13-prism-bar" style="--d:.34;--a:144deg"></span>
      <span class="vl-matrix13-prism-bar" style="--d:.51;--a:216deg"></span>
      <span class="vl-matrix13-prism-bar" style="--d:.68;--a:288deg"></span>
      <span class="vl-matrix13-prism-core"></span>
    </div>`,
    css: `.vl-matrix13-prism-array {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 23%, #1d6796);
  border-radius: 14px;
  overflow: hidden;
  background: radial-gradient(circle at 50% 54%, color-mix(in srgb, var(--loader-accent) 20%, transparent), #04111f 58%);
}
.vl-matrix13-prism-bar {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 50px;
  height: 14px;
  margin: -7px -25px;
  border-radius: 99px;
  background: linear-gradient(90deg, transparent, color-mix(in srgb, var(--loader-accent) 88%, #e6f3fd), transparent);
  transform: rotate(var(--a));
  transform-origin: center;
  animation: vl-matrix13-prism-bar calc(var(--loader-speed) * 1.8) linear infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix13-prism-core {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 8px;
  height: 8px;
  margin: -4px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-matrix13-prism-core calc(var(--loader-speed) * 1.1) ease-in-out infinite;
}
@keyframes vl-matrix13-prism-bar {
  0%, 100% { transform: rotate(var(--a)) scaleX(.4); opacity: .2; }
  50% { transform: rotate(calc(var(--a) + 360deg)) scaleX(1); opacity: .95; }
}
@keyframes vl-matrix13-prism-core {
  0%, 100% { transform: scale(.54); opacity: .22; }
  50% { transform: scale(1.09); opacity: 1; }
}`
  },
  {
    id: 'matrix-hollow-axon-grid',
    name: 'Hollow Axon Grid',
    category: 'Matrix',
    tech: 'CSS',
    description: 'A hollow axon lattice expands and contracts through staged opacity bands.',
    markup: `<div class="vl-matrix13-hollow-axon" aria-hidden="true">
      <span class="vl-matrix13-axon-cell" style="--d:0;--x:22px;--y:18px"></span>
      <span class="vl-matrix13-axon-cell" style="--d:.12;--x:52px;--y:34px"></span>
      <span class="vl-matrix13-axon-cell" style="--d:.24;--x:82px;--y:18px"></span>
      <span class="vl-matrix13-axon-cell" style="--d:.36;--x:112px;--y:34px"></span>
      <span class="vl-matrix13-axon-cell" style="--d:.48;--x:142px;--y:18px"></span>
      <span class="vl-matrix13-hollow-core"></span>
    </div>`,
    css: `.vl-matrix13-hollow-axon {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 24%, #1d6795);
  border-radius: 14px;
  overflow: hidden;
  background: repeating-linear-gradient(120deg, #06172a 0 8px, #092f4f 8px 9px, #06172a 9px 18px);
}
.vl-matrix13-axon-cell {
  position: absolute;
  left: var(--x);
  top: var(--y);
  width: 12px;
  height: 12px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 76%, #dcf2ff);
  border-radius: 2px;
  background: color-mix(in srgb, var(--loader-accent) 22%, transparent);
  animation: vl-matrix13-axon-cell calc(var(--loader-speed) * 1.5) ease-in-out infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix13-hollow-core {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 9px;
  height: 9px;
  margin: -4px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-matrix13-hollow-core calc(var(--loader-speed) * 1.05) linear infinite;
}
@keyframes vl-matrix13-axon-cell {
  0%, 100% { transform: scale(.5); opacity: .18; }
  50% { transform: scale(1); opacity: .96; }
}
@keyframes vl-matrix13-hollow-core {
  0%, 100% { transform: scale(.55); opacity: .22; }
  50% { transform: scale(1.08); opacity: 1; }
}`
  }
];
