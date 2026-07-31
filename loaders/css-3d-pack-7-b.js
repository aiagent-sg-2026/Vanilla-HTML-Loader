export const css3dPack7LoadersB = [
  {
    id: 'pendulum-frames-3d',
    name: '3D Pendulum Frames',
    category: 'CSS 3D',
    tech: 'CSS 3D',
    description: 'Layered rectangular frames swing independently across depth like suspended pendulums.',
    markup: `<div class="vl-pendulum-frames-3d" aria-hidden="true">
      <div><span style="--z:-18px;--d:0s;--r:11deg;--rn:-11deg"></span><span style="--z:-6px;--d:-.16s;--r:-8deg;--rn:8deg"></span><span style="--z:6px;--d:-.32s;--r:6deg;--rn:-6deg"></span><span style="--z:18px;--d:-.48s;--r:-4deg;--rn:4deg"></span></div>
    </div>`,
    css: `.vl-pendulum-frames-3d {
      width: 92px;
      height: 94px;
      display: grid;
      place-items: center;
      perspective: 680px;
    }
    .vl-pendulum-frames-3d > div {
      position: relative;
      width: 60px;
      height: 66px;
      transform-style: preserve-3d;
      transform: rotateX(10deg) rotateY(-18deg);
    }
    .vl-pendulum-frames-3d span {
      position: absolute;
      left: 7px;
      top: 5px;
      width: 46px;
      height: 52px;
      border: 2px solid color-mix(in srgb, var(--loader-accent) 78%, white);
      border-radius: 7px;
      transform-origin: 50% 0;
      box-shadow: 0 0 10px color-mix(in srgb, var(--loader-accent) 24%, transparent), inset 0 0 9px color-mix(in srgb, var(--loader-accent) 16%, transparent);
      animation: vl-pendulum-frame calc(var(--loader-speed) * 1.8) ease-in-out infinite;
      animation-delay: var(--d);
    }
    @keyframes vl-pendulum-frame {
      0%, 100% { transform: translateZ(var(--z)) rotateZ(var(--rn)) rotateY(-10deg); opacity: .45; }
      50% { transform: translateZ(var(--z)) rotateZ(var(--r)) rotateY(18deg); opacity: 1; }
    }`
  },
  {
    id: 'matrix-lift-3d',
    name: '3D Matrix Lift',
    category: 'CSS 3D',
    tech: 'CSS 3D',
    description: 'A nine-cell matrix rises through depth in a staggered platform-lift sequence.',
    markup: `<div class="vl-matrix-lift-3d" aria-hidden="true">
      <div><span style="--x:0px;--y:0px;--z:0px;--i:0"></span><span style="--x:19px;--y:0px;--z:6px;--i:1"></span><span style="--x:38px;--y:0px;--z:0px;--i:2"></span><span style="--x:0px;--y:19px;--z:8px;--i:3"></span><span style="--x:19px;--y:19px;--z:16px;--i:4"></span><span style="--x:38px;--y:19px;--z:8px;--i:5"></span><span style="--x:0px;--y:38px;--z:0px;--i:6"></span><span style="--x:19px;--y:38px;--z:6px;--i:7"></span><span style="--x:38px;--y:38px;--z:0px;--i:8"></span></div>
    </div>`,
    css: `.vl-matrix-lift-3d {
      width: 94px;
      height: 94px;
      display: grid;
      place-items: center;
      perspective: 700px;
    }
    .vl-matrix-lift-3d > div {
      position: relative;
      width: 54px;
      height: 54px;
      transform-style: preserve-3d;
      transform: rotateX(56deg) rotateZ(-34deg);
    }
    .vl-matrix-lift-3d span {
      position: absolute;
      left: 0;
      top: 0;
      width: 14px;
      height: 14px;
      border: 1px solid color-mix(in srgb, var(--loader-accent) 72%, white);
      border-radius: 3px;
      background: color-mix(in srgb, var(--loader-accent) 55%, transparent);
      box-shadow: 0 0 7px color-mix(in srgb, var(--loader-accent) 24%, transparent);
      transform-style: preserve-3d;
      animation: vl-matrix-cell calc(var(--loader-speed) * 1.65) ease-in-out infinite;
      animation-delay: calc(var(--i) * -.07s);
    }
    .vl-matrix-lift-3d span::before,
    .vl-matrix-lift-3d span::after {
      content: '';
      position: absolute;
      background: color-mix(in srgb, var(--loader-accent) 26%, transparent);
    }
    .vl-matrix-lift-3d span::before {
      left: 2px;
      right: 2px;
      top: -5px;
      height: 5px;
      transform: skewX(-35deg);
      transform-origin: bottom;
    }
    .vl-matrix-lift-3d span::after {
      top: 2px;
      bottom: 2px;
      right: -5px;
      width: 5px;
      transform: skewY(-35deg);
      transform-origin: left;
    }
    @keyframes vl-matrix-cell {
      0%, 100% { transform: translate3d(var(--x), var(--y), var(--z)); opacity: .42; }
      50% { transform: translate3d(var(--x), var(--y), calc(var(--z) + 25px)); opacity: 1; }
    }`
  },
  {
    id: 'prism-chain-3d',
    name: '3D Prism Chain',
    category: 'CSS 3D',
    tech: 'CSS 3D',
    description: 'Five faceted prism links travel diagonally through depth as a rotating chain.',
    markup: `<div class="vl-prism-chain-3d" aria-hidden="true">
      <div><span style="--x:-30px;--y:20px;--z:-18px;--r:-24deg;--i:0"></span><span style="--x:-15px;--y:10px;--z:-9px;--r:-12deg;--i:1"></span><span style="--x:0px;--y:0px;--z:0px;--r:0deg;--i:2"></span><span style="--x:15px;--y:-10px;--z:9px;--r:12deg;--i:3"></span><span style="--x:30px;--y:-20px;--z:18px;--r:24deg;--i:4"></span></div>
    </div>`,
    css: `.vl-prism-chain-3d {
      width: 96px;
      height: 92px;
      display: grid;
      place-items: center;
      perspective: 720px;
      overflow: hidden;
    }
    .vl-prism-chain-3d > div {
      position: relative;
      width: 1px;
      height: 1px;
      transform-style: preserve-3d;
      animation: vl-prism-chain-scene calc(var(--loader-speed) * 3.1) linear infinite;
    }
    .vl-prism-chain-3d span {
      position: absolute;
      left: -9px;
      top: -12px;
      width: 18px;
      height: 24px;
      clip-path: polygon(50% 0, 100% 28%, 82% 100%, 18% 100%, 0 28%);
      background: linear-gradient(135deg, color-mix(in srgb, var(--loader-accent) 84%, white), color-mix(in srgb, var(--loader-accent) 30%, transparent));
      box-shadow: 0 0 10px color-mix(in srgb, var(--loader-accent) 28%, transparent);
      animation: vl-prism-chain-link calc(var(--loader-speed) * 1.7) ease-in-out infinite;
      animation-delay: calc(var(--i) * -.1s);
    }
    @keyframes vl-prism-chain-scene {
      to { transform: rotateX(360deg) rotateY(360deg); }
    }
    @keyframes vl-prism-chain-link {
      0%, 100% { transform: translate3d(var(--x), var(--y), var(--z)) rotateY(var(--r)) scale(.72); opacity: .42; }
      50% { transform: translate3d(var(--x), var(--y), calc(var(--z) + 18px)) rotateY(calc(var(--r) + 180deg)) scale(1.08); opacity: 1; }
    }`
  },
  {
    id: 'folded-wheel-3d',
    name: '3D Folded Wheel',
    category: 'CSS 3D',
    tech: 'CSS 3D',
    description: 'Eight hinged panels fold around a rotating wheel hub in alternating depth.',
    markup: `<div class="vl-folded-wheel-3d" aria-hidden="true">
      <div><span style="--a:0deg;--i:0"></span><span style="--a:45deg;--i:1"></span><span style="--a:90deg;--i:2"></span><span style="--a:135deg;--i:3"></span><span style="--a:180deg;--i:4"></span><span style="--a:225deg;--i:5"></span><span style="--a:270deg;--i:6"></span><span style="--a:315deg;--i:7"></span><i></i></div>
    </div>`,
    css: `.vl-folded-wheel-3d {
      width: 92px;
      height: 92px;
      display: grid;
      place-items: center;
      perspective: 660px;
    }
    .vl-folded-wheel-3d > div {
      position: relative;
      width: 58px;
      height: 58px;
      transform-style: preserve-3d;
      animation: vl-folded-wheel-scene calc(var(--loader-speed) * 2.8) linear infinite;
    }
    .vl-folded-wheel-3d span {
      position: absolute;
      left: 24px;
      top: 2px;
      width: 10px;
      height: 27px;
      border: 1px solid color-mix(in srgb, var(--loader-accent) 75%, white);
      border-radius: 3px 3px 6px 6px;
      background: linear-gradient(180deg, color-mix(in srgb, var(--loader-accent) 82%, white), color-mix(in srgb, var(--loader-accent) 28%, transparent));
      transform-origin: 5px 27px;
      animation: vl-folded-wheel-panel calc(var(--loader-speed) * 1.55) ease-in-out infinite;
      animation-delay: calc(var(--i) * -.08s);
    }
    .vl-folded-wheel-3d i {
      position: absolute;
      left: 22px;
      top: 22px;
      width: 14px;
      height: 14px;
      border: 2px solid color-mix(in srgb, var(--loader-accent) 78%, white);
      border-radius: 50%;
      background: color-mix(in srgb, var(--loader-accent) 35%, transparent);
      transform: translateZ(12px);
    }
    @keyframes vl-folded-wheel-scene {
      to { transform: rotateZ(360deg) rotateY(360deg); }
    }
    @keyframes vl-folded-wheel-panel {
      0%, 100% { transform: rotateZ(var(--a)) rotateX(74deg) translateZ(0); opacity: .45; }
      50% { transform: rotateZ(var(--a)) rotateX(18deg) translateZ(18px); opacity: 1; }
    }`
  },
  {
    id: 'core-lattice-3d',
    name: '3D Core Lattice',
    category: 'CSS 3D',
    tech: 'CSS 3D',
    description: 'Three illuminated lattice planes rotate around a pulsing energy core.',
    markup: `<div class="vl-core-lattice-3d" aria-hidden="true">
      <div><span class="x"></span><span class="y"></span><span class="z"></span><i></i></div>
    </div>`,
    css: `.vl-core-lattice-3d {
      width: 94px;
      height: 94px;
      display: grid;
      place-items: center;
      perspective: 720px;
    }
    .vl-core-lattice-3d > div {
      position: relative;
      width: 56px;
      height: 56px;
      transform-style: preserve-3d;
      animation: vl-core-lattice-scene calc(var(--loader-speed) * 3.4) linear infinite;
    }
    .vl-core-lattice-3d span {
      position: absolute;
      inset: 5px;
      border: 1px solid color-mix(in srgb, var(--loader-accent) 66%, white);
      border-radius: 6px;
      background:
        repeating-linear-gradient(0deg, transparent 0 8px, color-mix(in srgb, var(--loader-accent) 34%, transparent) 8px 9px),
        repeating-linear-gradient(90deg, transparent 0 8px, color-mix(in srgb, var(--loader-accent) 34%, transparent) 8px 9px);
      box-shadow: 0 0 10px color-mix(in srgb, var(--loader-accent) 22%, transparent);
    }
    .vl-core-lattice-3d .x { transform: rotateX(72deg); }
    .vl-core-lattice-3d .y { transform: rotateY(72deg); }
    .vl-core-lattice-3d .z { transform: rotateX(45deg) rotateY(45deg); }
    .vl-core-lattice-3d i {
      position: absolute;
      left: 20px;
      top: 20px;
      width: 16px;
      height: 16px;
      border-radius: 4px;
      background: var(--loader-accent);
      box-shadow: 0 0 20px color-mix(in srgb, var(--loader-accent) 72%, transparent);
      transform: translateZ(14px) rotate(45deg);
      animation: vl-core-lattice-core calc(var(--loader-speed) * 1.15) ease-in-out infinite;
    }
    @keyframes vl-core-lattice-scene {
      to { transform: rotateX(360deg) rotateY(720deg) rotateZ(360deg); }
    }
    @keyframes vl-core-lattice-core {
      50% { transform: translateZ(26px) rotate(225deg) scale(.68); opacity: .62; }
    }`
  }
];
