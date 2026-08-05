export const shapesPack5LoadersA = [
  {
    id: 'shape-orbital-bond',
    name: 'Orbital Bond Shapes',
    category: 'Shapes',
    tech: 'CSS',
    description: 'Interlocking shapes pivot around a shared orbit anchor.',
    markup: `<div class="vl-cat-shape-orbital-bond" role="img" aria-label="Orbital bond shapes">
  <span class="shell"></span>
  <span class="orb o1"></span>
  <span class="orb o2"></span>
  <span class="orb o3"></span>
</div>`,
    css: `.vl-cat-shape-orbital-bond {
  width: 108px;
  height: 108px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 28%, #1f5b8a);
  border-radius: 50%;
  margin: 0 auto;
  position: relative;
  background: linear-gradient(160deg, #071a2f, #0b2840 68%, #040a13);
}
.vl-cat-shape-orbital-bond .shell {
  position: absolute;
  inset: 10px;
  border: 2px solid color-mix(in srgb, var(--loader-accent) 35%, transparent);
  border-radius: 50%;
  animation: vl-cat-shape-orbital-bond-shell calc(var(--loader-speed) * 1.6) linear infinite;
}
.vl-cat-shape-orbital-bond .orb {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 12px;
  height: 12px;
  margin: -6px;
  border-radius: 50%;
  background: var(--loader-accent);
  transform-origin: center 24px;
}
.vl-cat-shape-orbital-bond .o1 { --r: 0; animation: vl-cat-shape-orbital-bond-hop calc(var(--loader-speed) * 1.05) ease-in-out infinite; }
.vl-cat-shape-orbital-bond .o2 { --r: 120; animation: vl-cat-shape-orbital-bond-hop calc(var(--loader-speed) * 1.05) ease-in-out infinite; animation-delay: -0.35s; }
.vl-cat-shape-orbital-bond .o3 { --r: 240; animation: vl-cat-shape-orbital-bond-hop calc(var(--loader-speed) * 1.05) ease-in-out infinite; animation-delay: -0.7s; }
@keyframes vl-cat-shape-orbital-bond-shell {
  to { transform: rotate(360deg); }
}
@keyframes vl-cat-shape-orbital-bond-hop {
  0%,100% { transform: rotate(calc(var(--r) * 1deg)) translateY(-24px) scale(.55); opacity: .3; }
  50% { transform: rotate(calc(var(--r) * 1deg)) translateY(-24px) scale(1.15); opacity: 1; }
}`
  },
];
