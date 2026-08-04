export const matrixPack2Loaders = [
  {
    id: 'matrix-hex-wave',
    name: 'Hex Matrix Wave',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Hex cells light up in a ripple that transforms into expanding interference rings.',
    markup: `<div class="vl-matrix-hex-wave" aria-hidden="true">
      <span class="vl-matrix-hex" style="--i:0"></span><span class="vl-matrix-hex" style="--i:1"></span><span class="vl-matrix-hex" style="--i:2"></span><span class="vl-matrix-hex" style="--i:3"></span>
      <span class="vl-matrix-hex" style="--i:4"></span><span class="vl-matrix-hex" style="--i:5"></span><span class="vl-matrix-hex" style="--i:6"></span><span class="vl-matrix-hex" style="--i:7"></span>
      <span class="vl-matrix-hex" style="--i:8"></span><span class="vl-matrix-hex" style="--i:9"></span><span class="vl-matrix-hex" style="--i:10"></span><span class="vl-matrix-hex" style="--i:11"></span>
      <span class="vl-matrix-hex" style="--i:12"></span><span class="vl-matrix-hex" style="--i:13"></span><span class="vl-matrix-hex" style="--i:14"></span><span class="vl-matrix-hex" style="--i:15"></span>
    </div>`,
    css: `.vl-matrix-hex-wave {
  width: 190px;
  height: 108px;
  position: relative;
  display: grid;
  grid-template-columns: repeat(4, 32px);
  grid-auto-rows: 26px;
  padding: 8px 12px;
  align-items: start;
  justify-items: start;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 30%, #11263f);
  border-radius: 13px;
  background: linear-gradient(150deg, #05101f, #0a1831 60%, #03070e);
  overflow: hidden;
}
.vl-matrix-hex {
  width: 22px;
  height: 20px;
  clip-path: polygon(25% 4%, 75% 4%, 100% 50%, 75% 96%, 25% 96%, 0% 50%);
  margin-left: calc((var(--i) % 2) * 11px);
  background: color-mix(in srgb, var(--loader-accent) 24%, #f7fbff);
  opacity: .16;
  transform: translateY(calc((var(--i) * 2px) % 18px));
  animation: vl-matrix-hex-wave calc(var(--loader-speed) * 2.25) ease-in-out infinite;
  animation-delay: calc(var(--i) * .07s);
}
@keyframes vl-matrix-hex-wave {
  0%, 100% { transform: translateY(0) scale(.6); opacity: .14; }
  42%, 74% { transform: translateY(-4px) scale(1); opacity: .98; }
}`
  },
  {
    id: 'matrix-packet-routing-grid',
    name: 'Packet Routing Grid',
    category: 'Matrix',
    tech: 'Inline SVG + CSS',
    description: 'Packets traverse routed channels while congestion markers pulse in bottleneck nodes.',
    markup: `<svg class="vl-matrix-packet-grid" viewBox="0 0 190 108" aria-hidden="true">
      <g class="vl-matrix-packet-hubs">
        <circle cx="44" cy="22" r="3" />
        <circle cx="95" cy="18" r="3" />
        <circle cx="146" cy="22" r="3" />
        <circle cx="44" cy="56" r="3" />
        <circle cx="95" cy="56" r="3" />
        <circle cx="146" cy="56" r="3" />
        <circle cx="95" cy="86" r="3" />
      </g>
      <g class="vl-matrix-packet-paths" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path d="M44 22L95 18L146 22"></path>
        <path d="M44 22L44 56L95 56L146 56L146 22"></path>
        <path d="M44 56L95 86"></path>
        <path d="M95 56L95 86"></path>
        <path d="M146 56L95 86"></path>
      </g>
      <g class="vl-matrix-packet-dots">
        <circle cx="72" cy="20" r="2.2" />
        <circle cx="118" cy="38" r="2.2" />
        <circle cx="95" cy="67" r="2.2" />
      </g>
      <g class="vl-matrix-packet-heads">
        <polygon points="56 16 56 28 68 22"></polygon>
        <polygon points="130 52 130 62 142 57"></polygon>
        <polygon points="97 70 86 76 108 76"></polygon>
      </g>
    </svg>`,
    css: `.vl-matrix-packet-grid { width: 190px; height: 108px; color: var(--loader-accent); }
.vl-matrix-packet-grid circle, .vl-matrix-packet-grid path, .vl-matrix-packet-grid polygon {
  fill: none;
  stroke: currentColor;
}
.vl-matrix-packet-hubs circle { fill: color-mix(in srgb, var(--loader-accent) 84%, #fff); stroke: none; animation: vl-matrix-packet-hub calc(var(--loader-speed) * 2.2) ease-in-out infinite; }
.vl-matrix-packet-hubs circle:nth-child(3) { animation-delay: calc(var(--loader-speed) * .22); }
.vl-matrix-packet-hubs circle:nth-child(4) { animation-delay: calc(var(--loader-speed) * .44); }
.vl-matrix-packet-hubs circle:nth-child(7) { animation-delay: calc(var(--loader-speed) * .66); }
.vl-matrix-packet-paths path {
  stroke-width: 2;
  stroke-dasharray: 120;
  stroke-dashoffset: 120;
  opacity: .22;
  animation: vl-matrix-packet-path calc(var(--loader-speed) * 2.4) ease-in-out infinite;
}
.vl-matrix-packet-paths path:nth-child(3) { animation-delay: .12s; }
.vl-matrix-packet-paths path:nth-child(4) { animation-delay: .24s; }
.vl-matrix-packet-dots circle {
  fill: currentColor;
  stroke: none;
  animation: vl-matrix-packet-dot calc(var(--loader-speed) * 2.4) linear infinite;
}
.vl-matrix-packet-dots circle:nth-child(2) { animation-delay: .25s; }
.vl-matrix-packet-dots circle:nth-child(3) { animation-delay: .45s; }
.vl-matrix-packet-heads polygon {
  fill: color-mix(in srgb, var(--loader-accent) 78%, white 22%);
  stroke: none;
  animation: vl-matrix-packet-head calc(var(--loader-speed) * 2.4) ease-in-out infinite;
}
.vl-matrix-packet-heads polygon:nth-child(2) { animation-delay: .2s; }
.vl-matrix-packet-heads polygon:nth-child(3) { animation-delay: .45s; }
@keyframes vl-matrix-packet-hub {
  0%,100% { opacity: .2; transform: scale(.72); }
  45%, 78% { opacity: 1; transform: scale(1.32); }
}
@keyframes vl-matrix-packet-path {
  0% { stroke-dashoffset: 120; opacity: .2; }
  42%, 78% { stroke-dashoffset: 0; opacity: .78; }
  100% { stroke-dashoffset: -120; opacity: .2; }
}
@keyframes vl-matrix-packet-dot {
  0%,100% { opacity: .15; transform: translateX(0); }
  40%,72% { opacity: .85; transform: translateX(3px); }
}
@keyframes vl-matrix-packet-head {
  0%, 100% { transform: scale(.7); opacity: .2; }
  50% { transform: scale(1.25); opacity: 1; }
}`
  },
  {
    id: 'matrix-memory-defragment',
    name: 'Memory Defragment',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Memory blocks compact from fragmented positions into contiguous sectors.',
    markup: `<div class="vl-matrix-memory-defrag" aria-hidden="true">
      <span style="--w:14;--y:5px;--x:0px;--d:0"></span>
      <span style="--w:22;--y:24px;--x:16px;--d:1"></span>
      <span style="--w:10;--y:24px;--x:44px;--d:2"></span>
      <span style="--w:20;--y:43px;--x:8px;--d:3"></span>
      <span style="--w:16;--y:43px;--x:32px;--d:4"></span>
      <span style="--w:18;--y:62px;--x:2px;--d:5"></span>
      <span style="--w:12;--y:62px;--x:24px;--d:6"></span>
      <span class="vl-matrix-defrag-fill"></span>
    </div>`,
    css: `.vl-matrix-memory-defrag {
  width: 190px;
  height: 108px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 28%, #12253d);
  border-radius: 12px;
  position: relative;
  padding: 12px;
  overflow: hidden;
  background: linear-gradient(180deg, #070f1c, #09182b);
}
.vl-matrix-memory-defrag span {
  position: absolute;
  left: calc(12px + var(--x));
  top: calc(12px + var(--y));
  height: 14px;
  width: calc(var(--w) * 1px);
  border-radius: 2px;
  background: color-mix(in srgb, var(--loader-accent) 74%, white 26%);
  transform-origin: left center;
  opacity: .24;
  animation: vl-matrix-defrag-block calc(var(--loader-speed) * 2.1) cubic-bezier(.25, 0, .2, 1) infinite;
  animation-delay: calc(var(--d) * .18s);
}
.vl-matrix-memory-defrag .vl-matrix-defrag-fill {
  position: absolute;
  left: 12px;
  bottom: 18px;
  height: 16px;
  width: 0;
  border-radius: 8px;
  background: linear-gradient(90deg, color-mix(in srgb, var(--loader-accent) 78%, transparent), color-mix(in srgb, var(--loader-accent) 42%, transparent));
  animation: vl-matrix-defrag-fill calc(var(--loader-speed) * 2.1) ease-in-out infinite;
}
@keyframes vl-matrix-defrag-block {
  0%, 100% { transform: scaleX(.56); opacity: .16; }
  34%, 72% { transform: scaleX(1); opacity: .95; }
}
@keyframes vl-matrix-defrag-fill {
  0% { width: 0; opacity: .18; }
  20% { opacity: .25; }
  56%, 80% { width: 160px; opacity: .92; }
  100% { width: 0; opacity: .18; }
}`
  },
  {
    id: 'matrix-circuit-board-trace',
    name: 'Circuit Board Trace',
    category: 'Matrix',
    tech: 'CSS',
    description: 'PCB-like traces illuminate progressively while timing pulses jump between joints.',
    markup: `<div class="vl-matrix-circuit-trace" aria-hidden="true">
      <span style="--x:10px;--y:9px;--d:0"></span>
      <span style="--x:10px;--y:28px;--d:.14"></span>
      <span style="--x:44px;--y:28px;--d:.28"></span>
      <span style="--x:44px;--y:49px;--d:.42"></span>
      <span style="--x:78px;--y:49px;--d:.56"></span>
      <span style="--x:78px;--y:28px;--d:.7"></span>
      <span style="--x:112px;--y:28px;--d:.84"></span>
      <span style="--x:112px;--y:62px;--d:.98"></span>
      <span style="--x:142px;--y:62px;--d:1.12"></span>
      <span style="--x:142px;--y:14px;--d:1.26"></span>
      <b></b>
    </div>`,
    css: `.vl-matrix-circuit-trace {
  width: 190px;
  height: 108px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 30%, #12253f);
  border-radius: 14px;
  position: relative;
  background:
    linear-gradient(90deg, #05111e 0 22px, transparent 22px 28px, #05111e 28px 58px, transparent 58px 64px, #05111e 64px 94px, transparent 94px 100%, #05111e 100%),
    linear-gradient(#04101e, #07172a);
  overflow: hidden;
}
.vl-matrix-circuit-trace span {
  position: absolute;
  left: calc(4px + var(--x));
  top: calc(10px + var(--y));
  width: 22px;
  height: 8px;
  border-radius: 4px;
  background: color-mix(in srgb, var(--loader-accent) 62%, #e6f2ff);
  box-shadow: 0 0 10px color-mix(in srgb, var(--loader-accent) 40%, transparent);
  animation: vl-matrix-circuit-segment calc(var(--loader-speed) * 2.2) ease-in-out infinite;
  animation-delay: calc(var(--d) * 1.2s);
}
.vl-matrix-circuit-trace b {
  position: absolute;
  left: 22px;
  top: 62px;
  width: 150px;
  height: 2px;
  border-radius: 999px;
  background: linear-gradient(90deg, color-mix(in srgb, var(--loader-accent) 16%, transparent), color-mix(in srgb, var(--loader-accent) 74%, #fff), color-mix(in srgb, var(--loader-accent) 16%, transparent));
  opacity: .12;
  animation: vl-matrix-circuit-bar calc(var(--loader-speed) * 2.2) linear infinite;
}
@keyframes vl-matrix-circuit-segment {
  0%,100% { opacity: .2; transform: translateY(0) scaleX(.56); }
  36%, 74% { opacity: .95; transform: translateY(-2px) scaleX(1); }
}
@keyframes vl-matrix-circuit-bar {
  0%, 100% { transform: scaleX(.05); opacity: .08; }
  42%, 74% { transform: scaleX(1); opacity: .7; }
}`
  },
  {
    id: 'matrix-binary-data-tunnel',
    name: 'Binary Data Tunnel',
    category: 'Matrix',
    tech: 'CSS Text + 3D',
    description: 'Binary packets stream down through tunnel layers and coalesce at decode gates.',
    markup: `<div class="vl-matrix-binary-tunnel" aria-hidden="true">
      <i style="--x:16px;--y:2px;--d:0">1001</i>
      <i style="--x:50px;--y:12px;--d:.16">0110</i>
      <i style="--x:84px;--y:22px;--d:.32">1101</i>
      <i style="--x:118px;--y:4px;--d:.48">0100</i>
      <i style="--x:152px;--y:18px;--d:.64">1010</i>
      <i style="--x:30px;--y:36px;--d:.80">1110</i>
      <i style="--x:70px;--y:48px;--d:.96">0011</i>
      <i style="--x:106px;--y:30px;--d:1.12">1000</i>
      <i style="--x:144px;--y:44px;--d:1.28">0111</i>
      <span class="vl-matrix-tunnel-core"></span>
    </div>`,
    css: `.vl-matrix-binary-tunnel {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 24%, #112c45);
  border-radius: 12px;
  overflow: hidden;
  background: linear-gradient(145deg, #060f1a, #0c1e38 56%, #040a14);
  box-shadow: inset 0 0 22px rgba(0,0,0,.6);
}
.vl-matrix-binary-tunnel i {
  position: absolute;
  left: var(--x);
  top: var(--y);
  font: 700 10px/1 ui-monospace, SFMono-Regular, Consolas, monospace;
  color: color-mix(in srgb, var(--loader-accent) 88%, white 12%);
  text-shadow: 0 0 8px color-mix(in srgb, var(--loader-accent) 55%, transparent);
  animation: vl-matrix-binary-fall calc(var(--loader-speed) * 2.0) cubic-bezier(.2, .8, .2, 1) infinite;
  animation-delay: calc(var(--d) * 1.2s);
}
.vl-matrix-tunnel-core {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 9px;
  height: 9px;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  background: color-mix(in srgb, var(--loader-accent) 80%, #fff);
  box-shadow: 0 0 17px color-mix(in srgb, var(--loader-accent) 72%, transparent);
  animation: vl-matrix-binary-core calc(var(--loader-speed) * 1.3) ease-in-out infinite;
}
@keyframes vl-matrix-binary-fall {
  0% { transform: translateY(-6px); opacity: .1; }
  22%, 74% { transform: translateY(60px); opacity: .95; }
  100% { transform: translateY(124px); opacity: .06; }
}
@keyframes vl-matrix-binary-core {
  0%, 100% { transform: translate(-50%, -50%) scale(.7); opacity: .25; }
  60% { transform: translate(-50%, -50%) scale(1.12); opacity: .95; }
}`,
  },
  {
    id: 'matrix-neural-lattice-build',
    name: 'Neural Lattice Build',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Neural links appear and collapse as matrix nodes reconcile into a final lattice.',
    markup: `<div class="vl-matrix-neural-lattice" aria-hidden="true">
      <span class="vl-matrix-neural-node" style="--x:16px;--y:16px;--d:0"></span>
      <span class="vl-matrix-neural-node" style="--x:70px;--y:26px;--d:.12"></span>
      <span class="vl-matrix-neural-node" style="--x:124px;--y:16px;--d:.24"></span>
      <span class="vl-matrix-neural-node" style="--x:28px;--y:52px;--d:.18"></span>
      <span class="vl-matrix-neural-node" style="--x:82px;--y:56px;--d:.3"></span>
      <span class="vl-matrix-neural-node" style="--x:136px;--y:52px;--d:.42"></span>
      <span class="vl-matrix-neural-node" style="--x:16px;--y:86px;--d:.22"></span>
      <span class="vl-matrix-neural-node" style="--x:70px;--y:82px;--d:.34"></span>
      <span class="vl-matrix-neural-node" style="--x:124px;--y:86px;--d:.46"></span>
      <span class="vl-matrix-neural-link vl-matrix-neural-link-a"></span>
      <span class="vl-matrix-neural-link vl-matrix-neural-link-b"></span>
      <span class="vl-matrix-neural-link vl-matrix-neural-link-c"></span>
    </div>`,
    css: `.vl-matrix-neural-lattice {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 28%, #102a45);
  border-radius: 14px;
  background: radial-gradient(circle at 50% 58%, color-mix(in srgb, var(--loader-accent) 16%, transparent), transparent 46%), #050b14;
  overflow: hidden;
}
.vl-matrix-neural-node {
  position: absolute;
  left: var(--x);
  top: var(--y);
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 80%, #fff);
  background: color-mix(in srgb, var(--loader-accent) 70%, transparent);
  transform: scale(.45);
  opacity: .16;
  animation: vl-matrix-neural-node calc(var(--loader-speed) * 1.65) ease-in-out infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix-neural-link {
  position: absolute;
  left: 44px;
  top: 34px;
  width: 104px;
  height: 2px;
  transform-origin: left center;
  background: linear-gradient(90deg, color-mix(in srgb, var(--loader-accent) 80%, transparent), color-mix(in srgb, var(--loader-accent) 26%, transparent));
  border-radius: 999px;
  opacity: .25;
  animation: vl-matrix-neural-link calc(var(--loader-speed) * 1.9) ease-in-out infinite;
}
.vl-matrix-neural-link-a { left: 28px; top: 22px; width: 72px; animation-delay: 0s; transform: rotate(18deg); transform-origin: center left; }
.vl-matrix-neural-link-b { left: 76px; top: 56px; width: 86px; animation-delay: .2s; transform: rotate(-19deg); transform-origin: center left; }
.vl-matrix-neural-link-c { left: 40px; top: 84px; width: 104px; animation-delay: .45s; }
@keyframes vl-matrix-neural-node {
  0%, 100% { opacity: .14; transform: scale(.45); }
  45%, 75% { opacity: .96; transform: scale(1.08); }
}
@keyframes vl-matrix-neural-link {
  0%, 100% { opacity: .16; }
  50% { opacity: .9; }
}`
  },
  {
    id: 'matrix-data-cube-merge',
    name: 'Data Cube Merge',
    category: 'Matrix',
    tech: 'CSS 3D',
    description: 'Distributed cube fragments shift, align, and merge into one compact processing cube.',
    markup: `<div class="vl-matrix-cube-merge" aria-hidden="true">
      <span class="vl-matrix-cube" style="--x:22px;--y:36px;--d:0;--s:1"></span>
      <span class="vl-matrix-cube" style="--x:68px;--y:36px;--d:.2;--s:.75"></span>
      <span class="vl-matrix-cube" style="--x:114px;--y:36px;--d:.4;--s:.55"></span>
      <span class="vl-matrix-cube" style="--x:58px;--y:66px;--d:.6;--s:.6"></span>
      <span class="vl-matrix-cube" style="--x:104px;--y:66px;--d:.8;--s:.85"></span>
      <span class="vl-matrix-merge-core"></span>
    </div>`,
    css: `.vl-matrix-cube-merge {
  width: 190px;
  height: 108px;
  position: relative;
  perspective: 280px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 30%, #0d3559);
  border-radius: 14px;
  overflow: hidden;
  background: linear-gradient(180deg, #05121d, #0a1829);
}
.vl-matrix-cube {
  position: absolute;
  left: var(--x);
  top: var(--y);
  width: 16px;
  height: 16px;
  transform: scale(var(--s));
  transform-origin: center;
  animation: vl-matrix-cube-shift calc(var(--loader-speed) * 2.1) ease-in-out infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix-cube::before,
.vl-matrix-cube::after,
.vl-matrix-cube {
  content: '';
  position: absolute;
  inset: 0;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 78%, white 22%);
  background: color-mix(in srgb, var(--loader-accent) 15%, transparent);
}
.vl-matrix-cube::before { transform: rotateY(90deg) translateZ(7px); }
.vl-matrix-cube::after { transform: rotateX(90deg) translateZ(7px); }
.vl-matrix-merge-core {
  position: absolute;
  left: 50%;
  top: 54%;
  width: 12px;
  height: 12px;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background: var(--loader-accent);
  box-shadow: 0 0 14px color-mix(in srgb, var(--loader-accent) 80%, transparent);
}
@keyframes vl-matrix-cube-shift {
  0%, 100% { opacity: .4; transform: scale(var(--s)) translate3d(0, 0, 0) rotateY(0deg); }
  35% { opacity: 1; transform: scale(1) translate3d(-16px, -14px, 20px) rotateY(45deg); }
  66% { opacity: .7; transform: scale(.96) translate3d(6px, 7px, 4px) rotateY(0deg); }
}
}`,
  },
  {
    id: 'matrix-terminal-cascade',
    name: 'Terminal Cascade',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Terminal-style rows cascade through staged execution status in a compact loading pipeline.',
    markup: `<div class="vl-matrix-terminal-cascade" role="img" aria-label="Matrix terminal cascade">
  <span class="vl-matrix-terminal-row">[14:32:11] stage=collecting...</span>
  <span class="vl-matrix-terminal-row">[14:32:12] matrix-shards: queued 42</span>
  <span class="vl-matrix-terminal-row is-active">[14:32:13] merge-window: syncing blocks</span>
  <span class="vl-matrix-terminal-row">[14:32:14] confirm-channel: pending</span>
  <span class="vl-matrix-terminal-row">[14:32:15] ready-state: waiting</span>
</div>`,
    css: `.vl-matrix-terminal-cascade {
  width: 190px;
  height: 108px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 28%, #11243d);
  border-radius: 14px;
  padding: 8px 9px;
  color: color-mix(in srgb, var(--loader-accent) 90%, white 10%);
  background: linear-gradient(180deg, #050d17, #091523);
  font: 700 8px/1.42 ui-monospace, SFMono-Regular, Consolas, monospace;
  overflow: hidden;
}
.vl-matrix-terminal-row {
  display: block;
  color: color-mix(in srgb, var(--loader-accent) 52%, #7d8aa0);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  opacity: .72;
  animation: vl-matrix-terminal-fade calc(var(--loader-speed) * 2.4) ease-in-out infinite;
}
.vl-matrix-terminal-row:nth-child(1) { animation-delay: calc(var(--loader-speed) * .2); }
.vl-matrix-terminal-row:nth-child(2) { animation-delay: calc(var(--loader-speed) * .45); }
.vl-matrix-terminal-row:nth-child(3) { animation-delay: calc(var(--loader-speed) * .7); }
.vl-matrix-terminal-row:nth-child(4) { animation-delay: calc(var(--loader-speed) * .95); }
.vl-matrix-terminal-row:nth-child(5) { animation-delay: calc(var(--loader-speed) * 1.18); }
.vl-matrix-terminal-row.is-active { color: var(--loader-accent); opacity: 1; }
@keyframes vl-matrix-terminal-fade {
  0%, 100% { color: color-mix(in srgb, var(--loader-accent) 56%, #8f9bb2); }
  18%, 82% { color: var(--loader-accent); opacity: 1; }
}`
  },
  {
    id: 'matrix-blockchain-confirmation-grid',
    name: 'Blockchain Confirmation Grid',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Blocks settle into consensus with staged confirmations and confidence pulses.',
    markup: `<div class="vl-matrix-blockchain-grid" aria-hidden="true">
      <span class="vl-matrix-block" style="--x:12px;--y:12px;--d:0;--s:1"></span>
      <span class="vl-matrix-block" style="--x:74px;--y:12px;--d:.16;--s:2"></span>
      <span class="vl-matrix-block" style="--x:136px;--y:12px;--d:.3;--s:3"></span>
      <span class="vl-matrix-block" style="--x:12px;--y:44px;--d:.42;--s:2"></span>
      <span class="vl-matrix-block" style="--x:74px;--y:44px;--d:.56;--s:3"></span>
      <span class="vl-matrix-block" style="--x:136px;--y:44px;--d:.68;--s:1"></span>
      <span class="vl-matrix-chain-line"></span>
    </div>`,
    css: `.vl-matrix-blockchain-grid {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 28%, #122f4c);
  border-radius: 14px;
  overflow: hidden;
  background: radial-gradient(circle at 30% 16%, color-mix(in srgb, var(--loader-accent) 20%, transparent), transparent 38%), #050d16;
}
.vl-matrix-block {
  position: absolute;
  left: var(--x);
  top: var(--y);
  width: 22px;
  height: 22px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 78%, #d6e0ee);
  border-radius: 4px;
  background: color-mix(in srgb, var(--loader-accent) 12%, transparent);
  animation: vl-matrix-block-confirm calc(var(--loader-speed) * 2.2) ease-in-out infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix-block::after {
  content: '';
  position: absolute;
  inset: 4px;
  border-radius: 2px;
  background: color-mix(in srgb, var(--loader-accent) 75%, transparent);
  transform: scale(calc(0.35 + var(--s) * 0.2));
}
.vl-matrix-chain-line {
  position: absolute;
  left: 0;
  right: 0;
  top: 53px;
  height: 2px;
  opacity: .22;
  background: linear-gradient(90deg, transparent, color-mix(in srgb, var(--loader-accent) 80%, transparent), transparent);
  animation: vl-matrix-chain-scan calc(var(--loader-speed) * 2.1) linear infinite;
}
@keyframes vl-matrix-block-confirm {
  0%, 100% { opacity: .25; box-shadow: none; }
  35%, 65% { opacity: .9; box-shadow: 0 0 9px color-mix(in srgb, var(--loader-accent) 30%, transparent); }
}
@keyframes vl-matrix-chain-scan {
  0% { opacity: .12; }
  50% { opacity: .88; }
}`
  }
];
