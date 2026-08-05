export const mapsPack3LoadersA = [
  {
    id: 'maps-orbital-route',
    name: 'Orbital Route Maps',
    category: 'Maps',
    tech: 'CSS',
    description: 'Waypoint nodes trace a route around a center pivot and reset on loop.',
    markup: `<div class="vl-cat-maps-orbital-route" role="img" aria-label="Orbital route maps">
  <span class="route"></span>
  <span class="node n1"></span>
  <span class="node n2"></span>
  <span class="node n3"></span>
</div>`,
    css: `.vl-cat-maps-orbital-route {
  width: 190px;
  height: 108px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 28%, #1f5a88);
  border-radius: 14px;
  position: relative;
  overflow: hidden;
  background: linear-gradient(180deg, #071c31, #0b2a45 61%, #040a14);
}
.vl-cat-maps-orbital-route .route {
  position: absolute;
  left: 18px;
  right: 18px;
  top: 18px;
  height: 72px;
  border: 1.5px solid color-mix(in srgb, var(--loader-accent) 24%, transparent);
  border-radius: 60px;
  border-style: dashed;
  animation: vl-cat-maps-orbital-route-spin calc(var(--loader-speed) * 1.3) linear infinite;
}
.vl-cat-maps-orbital-route .node {
  position: absolute;
  width: 9px;
  height: 9px;
  margin: -4px;
  border-radius: 50%;
  background: var(--loader-accent);
  left: 50%;
  top: 50%;
  transform: rotate(calc(var(--i) * 80deg)) translateX(38px);
  animation: vl-cat-maps-orbital-route-node calc(var(--loader-speed) * 1.06) ease-in-out infinite;
  animation-delay: calc(var(--i) * -0.18s);
}
.vl-cat-maps-orbital-route .n1 { --i: 0; }
.vl-cat-maps-orbital-route .n2 { --i: 1; }
.vl-cat-maps-orbital-route .n3 { --i: 2; }
@keyframes vl-cat-maps-orbital-route-spin {
  100% { transform: rotate(360deg); }
}
@keyframes vl-cat-maps-orbital-route-node {
  0%,100% { opacity: .25; transform: rotate(calc(var(--i) * 80deg)) translateX(38px) scale(.55); }
  50% { opacity: 1; transform: rotate(calc(var(--i) * 80deg)) translateX(38px) scale(1.15); }
}`
  },
];
