export const spinnersPack2LoadersA = [
  {
    id: 'spinner-gyro-rings',
    name: 'Gyro Rings Spinner',
    category: 'Spinners',
    tech: 'CSS',
    description: 'Three rotating elliptical rings create a compact gyroscope effect for sync and processing states.',
    markup: `<div class="vl-spinner-gyro-rings" aria-hidden="true"><span></span><span></span><span></span><i></i></div>`,
    css: `.vl-spinner-gyro-rings {
  position: relative;
  width: 66px;
  height: 66px;
  display: grid;
  place-items: center;
}
.vl-spinner-gyro-rings span {
  position: absolute;
  width: 58px;
  height: 26px;
  border: 3px solid color-mix(in srgb, var(--loader-accent) 72%, transparent);
  border-radius: 50%;
  animation: vl-spinner-gyro-rings calc(var(--loader-speed) * 1.25) linear infinite;
}
.vl-spinner-gyro-rings span:nth-child(2) {
  transform: rotate(60deg);
  animation-name: vl-spinner-gyro-rings-b;
}
.vl-spinner-gyro-rings span:nth-child(3) {
  transform: rotate(-60deg);
  animation-name: vl-spinner-gyro-rings-c;
}
.vl-spinner-gyro-rings i {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--loader-accent);
  box-shadow: 0 0 0 6px color-mix(in srgb, var(--loader-accent) 14%, transparent);
}
@keyframes vl-spinner-gyro-rings { to { transform: rotate(360deg); } }
@keyframes vl-spinner-gyro-rings-b { to { transform: rotate(420deg); } }
@keyframes vl-spinner-gyro-rings-c { to { transform: rotate(300deg); } }`
  },
  {
    id: 'spinner-orbit-blades',
    name: 'Orbit Blades Spinner',
    category: 'Spinners',
    tech: 'CSS',
    description: 'Eight blade segments orbit around a small hub for responsive page and component loading.',
    markup: `<div class="vl-spinner-orbit-blades" aria-hidden="true"><span><i></i></span><span><i></i></span><span><i></i></span><span><i></i></span><span><i></i></span><span><i></i></span><span><i></i></span><span><i></i></span></div>`,
    css: `.vl-spinner-orbit-blades {
  position: relative;
  width: 64px;
  height: 64px;
  animation: vl-spinner-orbit-blades-spin calc(var(--loader-speed) * 1.15) linear infinite;
}
.vl-spinner-orbit-blades span {
  position: absolute;
  inset: 0;
  transform: rotate(var(--r));
}
.vl-spinner-orbit-blades span:nth-child(1) { --r: 0deg; }
.vl-spinner-orbit-blades span:nth-child(2) { --r: 45deg; }
.vl-spinner-orbit-blades span:nth-child(3) { --r: 90deg; }
.vl-spinner-orbit-blades span:nth-child(4) { --r: 135deg; }
.vl-spinner-orbit-blades span:nth-child(5) { --r: 180deg; }
.vl-spinner-orbit-blades span:nth-child(6) { --r: 225deg; }
.vl-spinner-orbit-blades span:nth-child(7) { --r: 270deg; }
.vl-spinner-orbit-blades span:nth-child(8) { --r: 315deg; }
.vl-spinner-orbit-blades i {
  position: absolute;
  left: 28px;
  top: 1px;
  width: 8px;
  height: 20px;
  border-radius: 999px;
  background: var(--loader-accent);
  opacity: calc(.2 + var(--o, .1));
}
.vl-spinner-orbit-blades span:nth-child(2) i { opacity: .3; }
.vl-spinner-orbit-blades span:nth-child(3) i { opacity: .4; }
.vl-spinner-orbit-blades span:nth-child(4) i { opacity: .5; }
.vl-spinner-orbit-blades span:nth-child(5) i { opacity: .6; }
.vl-spinner-orbit-blades span:nth-child(6) i { opacity: .7; }
.vl-spinner-orbit-blades span:nth-child(7) i { opacity: .85; }
.vl-spinner-orbit-blades span:nth-child(8) i { opacity: 1; }
@keyframes vl-spinner-orbit-blades-spin { to { transform: rotate(360deg); } }`
  },
  {
    id: 'spinner-conic-sweep',
    name: 'Conic Sweep Spinner',
    category: 'Spinners',
    tech: 'CSS',
    description: 'A smooth conic sweep with a clean centre cutout for modern application loading states.',
    markup: `<div class="vl-spinner-conic-sweep" aria-hidden="true"></div>`,
    css: `.vl-spinner-conic-sweep {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  position: relative;
  background: conic-gradient(from 0deg, transparent 0 20%, color-mix(in srgb, var(--loader-accent) 25%, transparent) 45%, var(--loader-accent) 100%);
  animation: vl-spinner-conic-sweep calc(var(--loader-speed) * 1.05) linear infinite;
}
.vl-spinner-conic-sweep::after {
  content: '';
  position: absolute;
  inset: 9px;
  border-radius: 50%;
  background: var(--loader-surface, #fff);
  box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--loader-accent) 14%, transparent);
}
@keyframes vl-spinner-conic-sweep { to { transform: rotate(360deg); } }`
  },
  {
    id: 'spinner-petal-wheel',
    name: 'Petal Wheel Spinner',
    category: 'Spinners',
    tech: 'CSS',
    description: 'Eight soft petals pulse in sequence around a centre point for friendly product interfaces.',
    markup: `<div class="vl-spinner-petal-wheel" aria-hidden="true"><span><i></i></span><span><i></i></span><span><i></i></span><span><i></i></span><span><i></i></span><span><i></i></span><span><i></i></span><span><i></i></span></div>`,
    css: `.vl-spinner-petal-wheel {
  position: relative;
  width: 64px;
  height: 64px;
}
.vl-spinner-petal-wheel span {
  position: absolute;
  inset: 0;
  transform: rotate(var(--r));
}
.vl-spinner-petal-wheel span:nth-child(1) { --r: 0deg; }
.vl-spinner-petal-wheel span:nth-child(2) { --r: 45deg; }
.vl-spinner-petal-wheel span:nth-child(3) { --r: 90deg; }
.vl-spinner-petal-wheel span:nth-child(4) { --r: 135deg; }
.vl-spinner-petal-wheel span:nth-child(5) { --r: 180deg; }
.vl-spinner-petal-wheel span:nth-child(6) { --r: 225deg; }
.vl-spinner-petal-wheel span:nth-child(7) { --r: 270deg; }
.vl-spinner-petal-wheel span:nth-child(8) { --r: 315deg; }
.vl-spinner-petal-wheel i {
  position: absolute;
  left: 27px;
  top: 1px;
  width: 10px;
  height: 22px;
  border-radius: 50% 50% 45% 45%;
  background: var(--loader-accent);
  transform-origin: 50% 31px;
  animation: vl-spinner-petal-wheel calc(var(--loader-speed) * 1.15) ease-in-out infinite;
}
.vl-spinner-petal-wheel span:nth-child(2) i { animation-delay: .1s; }
.vl-spinner-petal-wheel span:nth-child(3) i { animation-delay: .2s; }
.vl-spinner-petal-wheel span:nth-child(4) i { animation-delay: .3s; }
.vl-spinner-petal-wheel span:nth-child(5) i { animation-delay: .4s; }
.vl-spinner-petal-wheel span:nth-child(6) i { animation-delay: .5s; }
.vl-spinner-petal-wheel span:nth-child(7) i { animation-delay: .6s; }
.vl-spinner-petal-wheel span:nth-child(8) i { animation-delay: .7s; }
@keyframes vl-spinner-petal-wheel {
  0%, 100% { opacity: .18; transform: scale(.65); }
  45% { opacity: 1; transform: scale(1.08); }
}`
  },
  {
    id: 'spinner-square-orbit',
    name: 'Square Orbit Spinner',
    category: 'Spinners',
    tech: 'CSS',
    description: 'A dot travels around a rotating rounded square for compact technical and dashboard loaders.',
    markup: `<div class="vl-spinner-square-orbit" aria-hidden="true"><span></span></div>`,
    css: `.vl-spinner-square-orbit {
  position: relative;
  width: 54px;
  height: 54px;
  border: 3px solid color-mix(in srgb, var(--loader-accent) 24%, transparent);
  border-radius: 14px;
  animation: vl-spinner-square-orbit-box calc(var(--loader-speed) * 1.55) ease-in-out infinite;
}
.vl-spinner-square-orbit span {
  position: absolute;
  left: -6px;
  top: -6px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--loader-accent);
  box-shadow: 0 0 0 5px color-mix(in srgb, var(--loader-accent) 12%, transparent);
  animation: vl-spinner-square-orbit-dot calc(var(--loader-speed) * 1.25) linear infinite;
}
@keyframes vl-spinner-square-orbit-box {
  0%, 100% { transform: rotate(0deg); border-radius: 14px; }
  50% { transform: rotate(90deg); border-radius: 24px; }
}
@keyframes vl-spinner-square-orbit-dot {
  0% { transform: translate(0, 0); }
  25% { transform: translate(54px, 0); }
  50% { transform: translate(54px, 54px); }
  75% { transform: translate(0, 54px); }
  100% { transform: translate(0, 0); }
}`
  }
];
