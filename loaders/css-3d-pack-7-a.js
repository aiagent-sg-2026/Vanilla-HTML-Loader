export const css3dPack7LoadersA = [
  {
    id: 'gyroscope-rings-3d',
    name: '3D Gyroscope Rings',
    category: 'CSS 3D',
    tech: 'CSS 3D',
    description: 'Three luminous rings rotate on different axes around a compact floating core.',
    markup: `<div class="vl-gyroscope-rings-3d" aria-hidden="true">
      <div><span style="--rx:72deg;--ry:0deg;--d:0s"></span><span style="--rx:0deg;--ry:72deg;--d:-.22s"></span><span style="--rx:52deg;--ry:52deg;--d:-.44s"></span><i></i></div>
    </div>`,
    css: `.vl-gyroscope-rings-3d {
      width: 90px;
      height: 90px;
      display: grid;
      place-items: center;
      perspective: 650px;
    }
    .vl-gyroscope-rings-3d > div {
      position: relative;
      width: 58px;
      height: 58px;
      transform-style: preserve-3d;
      animation: vl-gyro-scene calc(var(--loader-speed) * 3.2) linear infinite;
    }
    .vl-gyroscope-rings-3d span {
      position: absolute;
      inset: 4px;
      border: 3px solid color-mix(in srgb, var(--loader-accent) 82%, white);
      border-left-color: transparent;
      border-bottom-color: color-mix(in srgb, var(--loader-accent) 35%, transparent);
      border-radius: 50%;
      box-shadow: 0 0 12px color-mix(in srgb, var(--loader-accent) 34%, transparent);
      transform-style: preserve-3d;
      animation: vl-gyro-ring calc(var(--loader-speed) * 1.45) linear infinite;
      animation-delay: var(--d);
    }
    .vl-gyroscope-rings-3d i {
      position: absolute;
      left: 22px;
      top: 22px;
      width: 14px;
      height: 14px;
      border-radius: 50%;
      background: var(--loader-accent);
      box-shadow: 0 0 18px color-mix(in srgb, var(--loader-accent) 68%, transparent);
      transform: translateZ(12px);
      animation: vl-gyro-core calc(var(--loader-speed) * 1.2) ease-in-out infinite;
    }
    @keyframes vl-gyro-scene {
      to { transform: rotateX(360deg) rotateY(360deg); }
    }
    @keyframes vl-gyro-ring {
      from { transform: rotateX(var(--rx)) rotateY(var(--ry)) rotateZ(0deg); }
      to { transform: rotateX(var(--rx)) rotateY(var(--ry)) rotateZ(360deg); }
    }
    @keyframes vl-gyro-core {
      50% { transform: translateZ(22px) scale(.72); opacity: .62; }
    }`
  },
  {
    id: 'accordion-tower-3d',
    name: '3D Accordion Tower',
    category: 'CSS 3D',
    tech: 'CSS 3D',
    description: 'Stacked panels fold in sequence to create a compact rising accordion tower.',
    markup: `<div class="vl-accordion-tower-3d" aria-hidden="true">
      <div><span style="--y:-27px;--i:0"></span><span style="--y:-18px;--i:1"></span><span style="--y:-9px;--i:2"></span><span style="--y:0px;--i:3"></span><span style="--y:9px;--i:4"></span><span style="--y:18px;--i:5"></span><span style="--y:27px;--i:6"></span></div>
    </div>`,
    css: `.vl-accordion-tower-3d {
      width: 88px;
      height: 92px;
      display: grid;
      place-items: center;
      perspective: 620px;
    }
    .vl-accordion-tower-3d > div {
      position: relative;
      width: 52px;
      height: 68px;
      transform-style: preserve-3d;
      transform: rotateX(-14deg) rotateY(28deg);
      animation: vl-accordion-scene calc(var(--loader-speed) * 2.8) ease-in-out infinite;
    }
    .vl-accordion-tower-3d span {
      position: absolute;
      left: 3px;
      top: 28px;
      width: 46px;
      height: 10px;
      border: 1px solid color-mix(in srgb, var(--loader-accent) 72%, white);
      border-radius: 3px;
      background: linear-gradient(90deg, color-mix(in srgb, var(--loader-accent) 26%, transparent), color-mix(in srgb, var(--loader-accent) 78%, transparent));
      box-shadow: 0 0 8px color-mix(in srgb, var(--loader-accent) 25%, transparent);
      transform-origin: 50% 50%;
      animation: vl-accordion-panel calc(var(--loader-speed) * 1.75) ease-in-out infinite;
      animation-delay: calc(var(--i) * -.11s);
    }
    @keyframes vl-accordion-scene {
      50% { transform: rotateX(12deg) rotateY(-24deg) translateZ(8px); }
    }
    @keyframes vl-accordion-panel {
      0%, 100% { transform: translateY(var(--y)) translateZ(0) rotateX(-54deg); opacity: .48; }
      50% { transform: translateY(var(--y)) translateZ(24px) rotateX(38deg); opacity: 1; }
    }`
  },
  {
    id: 'turbine-cage-3d',
    name: '3D Turbine Cage',
    category: 'CSS 3D',
    tech: 'CSS 3D',
    description: 'Six curved blades orbit inside a luminous circular cage like a miniature turbine.',
    markup: `<div class="vl-turbine-cage-3d" aria-hidden="true">
      <div><b></b><span style="--a:0deg"></span><span style="--a:60deg"></span><span style="--a:120deg"></span><span style="--a:180deg"></span><span style="--a:240deg"></span><span style="--a:300deg"></span><i></i></div>
    </div>`,
    css: `.vl-turbine-cage-3d {
      width: 92px;
      height: 92px;
      display: grid;
      place-items: center;
      perspective: 680px;
    }
    .vl-turbine-cage-3d > div {
      position: relative;
      width: 62px;
      height: 62px;
      transform-style: preserve-3d;
      animation: vl-turbine-scene calc(var(--loader-speed) * 2.5) linear infinite;
    }
    .vl-turbine-cage-3d b {
      position: absolute;
      inset: 3px;
      border: 2px solid color-mix(in srgb, var(--loader-accent) 70%, transparent);
      border-radius: 50%;
      box-shadow: inset 0 0 14px color-mix(in srgb, var(--loader-accent) 22%, transparent), 0 0 12px color-mix(in srgb, var(--loader-accent) 22%, transparent);
      transform: rotateX(68deg) translateZ(2px);
    }
    .vl-turbine-cage-3d span {
      position: absolute;
      left: 27px;
      top: 8px;
      width: 8px;
      height: 23px;
      border-radius: 70% 20% 70% 20%;
      background: linear-gradient(180deg, color-mix(in srgb, var(--loader-accent) 84%, white), var(--loader-accent));
      transform-origin: 4px 23px;
      transform: rotateZ(var(--a)) rotateY(54deg) translateZ(8px);
      box-shadow: 0 0 8px color-mix(in srgb, var(--loader-accent) 28%, transparent);
    }
    .vl-turbine-cage-3d i {
      position: absolute;
      left: 24px;
      top: 24px;
      width: 14px;
      height: 14px;
      border: 2px solid color-mix(in srgb, var(--loader-accent) 75%, white);
      border-radius: 50%;
      background: color-mix(in srgb, var(--loader-accent) 35%, transparent);
      transform: translateZ(14px);
    }
    @keyframes vl-turbine-scene {
      to { transform: rotateX(360deg) rotateZ(720deg); }
    }`
  },
  {
    id: 'portal-steps-3d',
    name: '3D Portal Steps',
    category: 'CSS 3D',
    tech: 'CSS 3D',
    description: 'Nested luminous frames advance through depth in a rhythmic portal-step sequence.',
    markup: `<div class="vl-portal-steps-3d" aria-hidden="true">
      <div><span style="--z:-32px;--s:.55;--i:0"></span><span style="--z:-16px;--s:.7;--i:1"></span><span style="--z:0px;--s:.85;--i:2"></span><span style="--z:16px;--s:1;--i:3"></span><span style="--z:32px;--s:1.15;--i:4"></span></div>
    </div>`,
    css: `.vl-portal-steps-3d {
      width: 92px;
      height: 92px;
      display: grid;
      place-items: center;
      perspective: 680px;
      overflow: hidden;
    }
    .vl-portal-steps-3d > div {
      position: relative;
      width: 56px;
      height: 56px;
      transform-style: preserve-3d;
      transform: rotateX(15deg) rotateY(-22deg);
      animation: vl-portal-scene calc(var(--loader-speed) * 3) ease-in-out infinite;
    }
    .vl-portal-steps-3d span {
      position: absolute;
      inset: 7px;
      border: 2px solid color-mix(in srgb, var(--loader-accent) 78%, white);
      border-radius: 8px;
      box-shadow: 0 0 12px color-mix(in srgb, var(--loader-accent) 30%, transparent), inset 0 0 8px color-mix(in srgb, var(--loader-accent) 18%, transparent);
      animation: vl-portal-frame calc(var(--loader-speed) * 1.8) ease-in-out infinite;
      animation-delay: calc(var(--i) * -.12s);
    }
    @keyframes vl-portal-scene {
      50% { transform: rotateX(-12deg) rotateY(24deg); }
    }
    @keyframes vl-portal-frame {
      0%, 100% { transform: translateZ(var(--z)) scale(var(--s)); opacity: .35; }
      50% { transform: translateZ(calc(var(--z) + 22px)) scale(calc(var(--s) + .08)); opacity: 1; }
    }`
  },
  {
    id: 'crystal-bloom-3d',
    name: '3D Crystal Bloom',
    category: 'CSS 3D',
    tech: 'CSS 3D',
    description: 'Eight faceted crystal petals unfold from a glowing center and rotate through depth.',
    markup: `<div class="vl-crystal-bloom-3d" aria-hidden="true">
      <div><span style="--a:0deg;--i:0"></span><span style="--a:45deg;--i:1"></span><span style="--a:90deg;--i:2"></span><span style="--a:135deg;--i:3"></span><span style="--a:180deg;--i:4"></span><span style="--a:225deg;--i:5"></span><span style="--a:270deg;--i:6"></span><span style="--a:315deg;--i:7"></span><i></i></div>
    </div>`,
    css: `.vl-crystal-bloom-3d {
      width: 92px;
      height: 92px;
      display: grid;
      place-items: center;
      perspective: 660px;
    }
    .vl-crystal-bloom-3d > div {
      position: relative;
      width: 58px;
      height: 58px;
      transform-style: preserve-3d;
      animation: vl-crystal-scene calc(var(--loader-speed) * 3.1) linear infinite;
    }
    .vl-crystal-bloom-3d span {
      position: absolute;
      left: 24px;
      top: 1px;
      width: 10px;
      height: 28px;
      clip-path: polygon(50% 0, 100% 42%, 72% 100%, 28% 100%, 0 42%);
      transform-origin: 5px 28px;
      background: linear-gradient(135deg, color-mix(in srgb, var(--loader-accent) 88%, white), color-mix(in srgb, var(--loader-accent) 35%, transparent));
      box-shadow: 0 0 10px color-mix(in srgb, var(--loader-accent) 30%, transparent);
      animation: vl-crystal-petal calc(var(--loader-speed) * 1.7) ease-in-out infinite;
      animation-delay: calc(var(--i) * -.08s);
    }
    .vl-crystal-bloom-3d i {
      position: absolute;
      left: 22px;
      top: 22px;
      width: 14px;
      height: 14px;
      transform: translateZ(16px) rotate(45deg);
      background: var(--loader-accent);
      box-shadow: 0 0 16px color-mix(in srgb, var(--loader-accent) 65%, transparent);
    }
    @keyframes vl-crystal-scene {
      to { transform: rotateX(360deg) rotateY(720deg); }
    }
    @keyframes vl-crystal-petal {
      0%, 100% { transform: rotateZ(var(--a)) rotateX(66deg) translateZ(2px) scaleY(.72); opacity: .48; }
      50% { transform: rotateZ(var(--a)) rotateX(24deg) translateZ(18px) scaleY(1.08); opacity: 1; }
    }`
  }
];
