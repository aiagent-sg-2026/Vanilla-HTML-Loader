export const css3dPack8LoadersC = [
  {
    id: 'css3d-orbit-cascade',
    name: 'Orbit Cascade CSS 3D',
    category: 'CSS 3D',
    tech: 'CSS 3D',
    description: 'Nested perspective layers cascade through a continuous orbit chain.',
    markup: `<div class="vl-cat-css3d-orbit-cascade" role="img" aria-label="Orbit cascade CSS 3D">
  <span class="ring r1"></span>
  <span class="ring r2"></span>
  <span class="ring r3"></span>
  <span class="ball"></span>
</div>`,
    css: `.vl-cat-css3d-orbit-cascade {
  width: 108px;
  height: 108px;
  margin: 0 auto;
  position: relative;
  perspective: 320px;
  perspective-origin: 50% 52%;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 22%, #1d5c85);
  border-radius: 14px;
  overflow: hidden;
}
.vl-cat-css3d-orbit-cascade .ring {
  position: absolute;
  left: 50%;
  top: 50%;
  border-radius: 50%;
  transform-style: preserve-3d;
  border: 2px solid color-mix(in srgb, var(--loader-accent) 55%, transparent);
  animation: vl-cat-css3d-orbit-cascade-spin calc(var(--loader-speed) * 1.5) linear infinite;
}
.vl-cat-css3d-orbit-cascade .r1 { width: 28px; height: 28px; margin: -14px; animation-delay: 0s; }
.vl-cat-css3d-orbit-cascade .r2 { width: 50px; height: 50px; margin: -25px; animation-delay: -.4s; }
.vl-cat-css3d-orbit-cascade .r3 { width: 76px; height: 76px; margin: -38px; animation-delay: -.8s; border-style: dashed; }
.vl-cat-css3d-orbit-cascade .ball {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 12px;
  height: 12px;
  margin: -6px;
  border-radius: 50%;
  background: color-mix(in srgb, var(--loader-accent) 85%, #fff);
  transform-origin: 50% 50%;
  animation: vl-cat-css3d-orbit-cascade-ball calc(var(--loader-speed) * 1.35) ease-in-out infinite;
}
@keyframes vl-cat-css3d-orbit-cascade-spin {
  0% { transform: translate(-50%, -50%) rotateX(70deg) rotateZ(0deg) scale(.9); }
  50% { transform: translate(-50%, -50%) rotateX(70deg) rotateZ(180deg) scale(1); opacity: 1; }
  100% { transform: translate(-50%, -50%) rotateX(70deg) rotateZ(360deg) scale(.9); opacity: .4; }
}
@keyframes vl-cat-css3d-orbit-cascade-ball {
  0%,100% { transform: rotate(0deg) translateX(36px) scale(.6); opacity: .4; }
  50% { transform: rotate(180deg) translateX(36px) scale(1.1); opacity: 1; }
}`
  },
];
