export const dotsPack4LoadersC = [
  {
    id: 'dot-meteor-cluster',
    name: 'Meteor Cluster Dots',
    category: 'Dots',
    tech: 'CSS',
    description: 'Dots burst outward then return in a delayed, meteor-like clustering pattern.',
    markup: `<div class="vl-cat-dot-meteor-cluster" role="img" aria-label="Meteor cluster dots">
  <span style="--i:0"></span>
  <span style="--i:1"></span>
  <span style="--i:2"></span>
  <span style="--i:3"></span>
  <span style="--i:4"></span>
  <span style="--i:5"></span>
  <span style="--i:6"></span>
  <span style="--i:7"></span>
</div>`,
    css: `.vl-cat-dot-meteor-cluster {
  width: 190px;
  height: 108px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 26%, #1d5b8a);
  border-radius: 14px;
  position: relative;
  overflow: hidden;
  background: radial-gradient(circle at 50% 56%, color-mix(in srgb, var(--loader-accent) 24%, transparent), transparent 52%), linear-gradient(180deg, #061a2c, #0a2c46 61%, #040a13);
}
.vl-cat-dot-meteor-cluster span {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 9px;
  height: 9px;
  margin: -4px;
  border-radius: 50%;
  background: color-mix(in srgb, var(--loader-accent) 90%, white 10%);
  transform: rotate(calc(var(--i) * 45deg)) translateX(30px);
  animation: vl-cat-dot-meteor-cluster-burst calc(var(--loader-speed) * 1.06) ease-in-out infinite;
  animation-delay: calc(var(--i) * -0.1s);
}
@keyframes vl-cat-dot-meteor-cluster-burst {
  0% { transform: rotate(calc(var(--i) * 45deg)) translateX(10px) scale(.42); opacity: .18; }
  50% { transform: rotate(calc(var(--i) * 45deg)) translateX(38px) scale(1.15); opacity: 1; }
  100% { transform: rotate(calc(var(--i) * 45deg)) translateX(10px) scale(.42); opacity: .18; }
}`
  },
];
