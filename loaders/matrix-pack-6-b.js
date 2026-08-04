export const matrixPack6LoadersB = [
  {
    id: 'matrix-mirror-logic-rings',
    name: 'Mirror Logic Rings',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Mirrored rings alternate phase and reflect checkpoints across the viewport axis.',
    markup: `<div class="vl-matrix-mirror-rings" aria-hidden="true">
      <span style="--d:0;--p:0"></span><span style="--d:.16;--p:1"></span><span style="--d:.32;--p:2"></span>
      <span style="--d:.16;--p:3"></span><span style="--d:.48;--p:4"></span><span style="--d:.32;--p:5"></span>
      <span style="--d:.48;--p:6"></span><span style="--d:.64;--p:7"></span><span style="--d:.8;--p:8"></span>
      <span class="vl-matrix-mirror-core"></span>
    </div>`,
    css: `.vl-matrix-mirror-rings {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 25%, #1f3f66);
  border-radius: 14px;
  overflow: hidden;
  background:
    linear-gradient(160deg, #04101f, #0a2340 52%, #050d16),
    linear-gradient(90deg, transparent, color-mix(in srgb, var(--loader-accent) 12%, transparent));
}
.vl-matrix-mirror-rings span:not(.vl-matrix-mirror-core) {
  position: absolute;
  left: 50%;
  top: 50%;
  width: calc(14px + var(--p) * 9px);
  height: calc(14px + var(--p) * 9px);
  margin: calc(-7px - var(--p) * 4px);
  border-radius: 50%;
  border: 1px dashed color-mix(in srgb, var(--loader-accent) 80%, #fff);
  opacity: .22;
  animation: vl-matrix6-mirror-ring calc(var(--loader-speed) * 2.1) linear infinite;
  animation-delay: calc(var(--d) * 1s);
  transform-origin: center;
}
.vl-matrix-mirror-rings span:nth-child(even) {
  border-style: solid;
  border-color: color-mix(in srgb, var(--loader-accent) 48%, #fff);
}
.vl-matrix-mirror-core {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 9px;
  height: 9px;
  margin: -4.5px;
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-matrix6-mirror-core calc(var(--loader-speed) * 1.2) ease-in-out infinite;
}
@keyframes vl-matrix6-mirror-ring {
  0% { transform: translate(-50%, -50%) scale(.2) rotate(0deg); opacity: .14; }
  55% { transform: translate(-50%, -50%) scale(1) rotate(180deg); opacity: .94; }
  100% { transform: translate(-50%, -50%) scale(1.18) rotate(360deg); opacity: .14; }
}
@keyframes vl-matrix6-mirror-core {
  0%, 100% { transform: scale(.64); opacity: .4; }
  50% { transform: scale(1.2); opacity: 1; }
}`
  },
  {
    id: 'matrix-inkwell-data-stream',
    name: 'Inkwell Data Stream',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Ink-like trails spread from multiple origins and synchronize by stream index.',
    markup: `<div class="vl-matrix-inkwell" aria-hidden="true">
      <span class="vl-matrix-ink-ink" style="--x:18px;--y:70px;--d:0"></span>
      <span class="vl-matrix-ink-ink" style="--x:50px;--y:70px;--d:.12"></span>
      <span class="vl-matrix-ink-ink" style="--x:82px;--y:70px;--d:.24"></span>
      <span class="vl-matrix-ink-ink" style="--x:114px;--y:70px;--d:.36"></span>
      <span class="vl-matrix-ink-ink" style="--x:146px;--y:70px;--d:.48"></span>
      <span class="vl-matrix-ink-ink" style="--x:18px;--y:86px;--d:.6"></span>
      <span class="vl-matrix-ink-ink" style="--x:50px;--y:86px;--d:.72"></span>
      <span class="vl-matrix-ink-ink" style="--x:82px;--y:86px;--d:.84"></span>
      <span class="vl-matrix-ink-ink" style="--x:114px;--y:86px;--d:.96"></span>
      <span class="vl-matrix-ink-ink" style="--x:146px;--y:86px;--d:1.08"></span>
      <span class="vl-matrix-ink-sigil"></span>
    </div>`,
    css: `.vl-matrix-inkwell {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 30%, #1c446e);
  border-radius: 14px;
  overflow: hidden;
  background: #071726;
}
.vl-matrix-ink-ink {
  position: absolute;
  left: var(--x);
  top: var(--y);
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: color-mix(in srgb, var(--loader-accent) 84%, #fff);
  animation: vl-matrix6-ink-dot calc(var(--loader-speed) * 2) ease-in-out infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix-ink-sigil {
  position: absolute;
  left: 86px;
  top: 34px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 72%, #fff);
  animation: vl-matrix6-ink-sigil calc(var(--loader-speed) * 1.4) ease-in-out infinite;
}
.vl-matrix-ink-ink::after {
  content: '';
  position: absolute;
  left: 50%;
  top: 0;
  width: 1px;
  height: 70px;
  transform: translateX(-50%);
  background: linear-gradient(180deg, color-mix(in srgb, var(--loader-accent) 60%, #fff), transparent);
  opacity: 0;
  animation: vl-matrix6-ink-trail calc(var(--loader-speed) * 1.8) ease-in-out infinite;
  animation-delay: calc(var(--d) * 1s);
}
@keyframes vl-matrix6-ink-dot {
  0%, 100% { transform: translateY(0) scale(.4); opacity: .2; }
  35%, 60% { transform: translateY(-58px) scale(1); opacity: .95; }
}
@keyframes vl-matrix6-ink-sigil {
  0%, 100% { transform: scale(.65); opacity: .2; }
  50% { transform: scale(1.1); opacity: .95; }
}
@keyframes vl-matrix6-ink-trail {
  0%, 100% { opacity: 0; height: 0; }
  40% { opacity: .75; height: 70px; }
}`
  },
  {
    id: 'matrix-axial-lattice-core',
    name: 'Axial Lattice Core',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Orthogonal axes collide and resolve into a pulsating core in defined intervals.',
    markup: `<div class="vl-matrix-axial-core" aria-hidden="true">
      <span style="--x:20px;--y:44px;--dx:0;--d:0" class="vl-matrix-axial-line"></span>
      <span style="--x:20px;--y:44px;--dx:44px;--d:.13" class="vl-matrix-axial-line"></span>
      <span style="--x:20px;--y:44px;--dx:84px;--d:.26" class="vl-matrix-axial-line"></span>
      <span style="--x:20px;--y:44px;--dx:124px;--d:.39" class="vl-matrix-axial-line"></span>
      <span style="--x:20px;--y:44px;--dx:160px;--d:.52" class="vl-matrix-axial-line"></span>
      <span style="--x:95px;--y:18px;--dx:0;--d:.07" class="vl-matrix-axial-vertical"></span>
      <span style="--x:95px;--y:18px;--dx:70px;--d:.2" class="vl-matrix-axial-vertical"></span>
      <span style="--x:95px;--y:18px;--dx:70px;--d:.33" class="vl-matrix-axial-vertical"></span>
      <span class="vl-matrix-axial-core"></span>
    </div>`,
    css: `.vl-matrix-axial-core {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 24%, #194d78);
  border-radius: 14px;
  overflow: hidden;
  background: linear-gradient(120deg, #050f1e, #091f3a);
}
.vl-matrix-axial-line,
.vl-matrix-axial-vertical {
  position: absolute;
  height: 2px;
  width: var(--dx);
  left: var(--x);
  top: var(--y);
  border-radius: 99px;
  background: linear-gradient(90deg, color-mix(in srgb, var(--loader-accent) 70%, transparent), color-mix(in srgb, var(--loader-accent) 28%, #fff), color-mix(in srgb, var(--loader-accent) 70%, transparent));
  transform-origin: left center;
  animation: vl-matrix6-axial-line calc(var(--loader-speed) * 1.7) ease-in-out infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix-axial-vertical {
  width: 2px;
  height: 70px;
  left: var(--x);
  top: var(--y);
  background: linear-gradient(180deg, color-mix(in srgb, var(--loader-accent) 70%, transparent), color-mix(in srgb, var(--loader-accent) 28%, #fff), color-mix(in srgb, var(--loader-accent) 70%, transparent));
}
.vl-matrix-axial-core {
  position: absolute;
  left: 50%;
  top: 52%;
  width: 10px;
  height: 10px;
  margin: -5px -5px;
  border-radius: 50%;
  background: color-mix(in srgb, var(--loader-accent) 86%, #fff);
  animation: vl-matrix6-axial-core calc(var(--loader-speed) * 1.5) cubic-bezier(.38, 0, .2, 1) infinite;
}
@keyframes vl-matrix6-axial-line {
  0% { opacity: .2; transform: scaleX(.3); }
  45% { opacity: .95; transform: scaleX(1); }
  100% { opacity: .2; transform: scaleX(.3); }
}
@keyframes vl-matrix6-axial-core {
  0%, 100% { transform: scale(.65); opacity: .46; }
  50% { transform: scale(1.08); opacity: 1; }
}`
  },
  {
    id: 'matrix-synapse-bridge-grid',
    name: 'Synapse Bridge Grid',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Bridge lines connect alternating synapse nodes with elastic timing shifts.',
    markup: `<div class="vl-matrix-synapse-bridge" aria-hidden="true">
      <span class="vl-matrix-sb-node" style="--x:24px;--y:24px;--c:0;--d:0"></span>
      <span class="vl-matrix-sb-node" style="--x:72px;--y:18px;--c:1;--d:.16"></span>
      <span class="vl-matrix-sb-node" style="--x:120px;--y:24px;--c:2;--d:.32"></span>
      <span class="vl-matrix-sb-node" style="--x:168px;--y:18px;--c:3;--d:.48"></span>
      <span class="vl-matrix-sb-node" style="--x:24px;--y:84px;--c:4;--d:.2"></span>
      <span class="vl-matrix-sb-node" style="--x:72px;--y:78px;--c:5;--d:.36"></span>
      <span class="vl-matrix-sb-node" style="--x:120px;--y:84px;--c:6;--d:.52"></span>
      <span class="vl-matrix-sb-node" style="--x:168px;--y:78px;--c:7;--d:.68"></span>
      <span style="--x1:24px;--y1:24px;--x2:72px;--y2:18px"></span><span style="--x1:120px;--y1:24px;--x2:168px;--y2:18px"></span>
      <span style="--x1:72px;--y1:78px;--x2:120px;--y2:84px"></span><span style="--x1:24px;--y1:24px;--x2:24px;--y2:84px"></span><span style="--x1:72px;--y1:18px;--x2:72px;--y2:78px"></span>
    </div>`,
    css: `.vl-matrix-synapse-bridge {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 30%, #173f68);
  border-radius: 14px;
  overflow: hidden;
  background: radial-gradient(circle at 50% 50%, color-mix(in srgb, var(--loader-accent) 14%, transparent), #050f1d);
}
.vl-matrix-sb-node {
  position: absolute;
  left: var(--x);
  top: var(--y);
  width: 10px;
  height: 10px;
  margin: -4px;
  border-radius: 50%;
  background: color-mix(in srgb, var(--loader-accent) 86%, #fff);
  animation: vl-matrix6-synapse-node calc(var(--loader-speed) * 1.85) ease-in-out infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix-synapse-bridge span:not(.vl-matrix-sb-node) {
  position: absolute;
  left: var(--x1);
  top: var(--y1);
  width: calc(abs(var(--x2) - var(--x1)));
  height: 2px;
  margin-top: 4px;
  background: linear-gradient(90deg, transparent, color-mix(in srgb, var(--loader-accent) 84%, #fff), transparent);
  transform-origin: left center;
  animation: vl-matrix6-synapse-edge calc(var(--loader-speed) * 1.85) ease-in-out infinite;
  opacity: .18;
}
.vl-matrix-synapse-bridge span:not(.vl-matrix-sb-node):nth-child(10) {
  transform: rotate(90deg) translateX(0px);
  transform-origin: left center;
}
.vl-matrix-synapse-bridge span:not(.vl-matrix-sb-node):nth-child(11) {
  transform: rotate(90deg) translateX(0px);
}
.vl-matrix-synapse-bridge span:not(.vl-matrix-sb-node):nth-child(12) {
  width: calc(abs(var(--x2) - var(--x1)));
}
@keyframes vl-matrix6-synapse-node {
  0%, 100% { transform: scale(.62); opacity: .28; }
  50% { transform: scale(1.05); opacity: .94; }
}
@keyframes vl-matrix6-synapse-edge {
  0%, 100% { opacity: .16; }
  50% { opacity: .95; }
}`
  },
  {
    id: 'matrix-hologram-gate-fade',
    name: 'Hologram Gate Fade',
    category: 'Matrix',
    tech: 'CSS',
    description: 'Holographic gates fade in and out while the signal path reroutes.',
    markup: `<div class="vl-matrix-holo-gate" aria-hidden="true">
      <span class="vl-matrix-holo-gate-panel" style="--d:0;--x:14px;--y:20px"></span>
      <span class="vl-matrix-holo-gate-panel" style="--d:.2;--x:58px;--y:20px"></span>
      <span class="vl-matrix-holo-gate-panel" style="--d:.4;--x:102px;--y:20px"></span>
      <span class="vl-matrix-holo-gate-panel" style="--d:.6;--x:146px;--y:20px"></span>
      <span class="vl-matrix-holo-gate-path" style="--d:0;--x1:20px;--y1:28px;--x2:44px;--y2:80px"></span>
      <span class="vl-matrix-holo-gate-path" style="--d:.2;--x1:64px;--y1:28px;--x2:88px;--y2:80px"></span>
      <span class="vl-matrix-holo-gate-path" style="--d:.4;--x1:108px;--y1:28px;--x2:132px;--y2:80px"></span>
      <span class="vl-matrix-holo-gate-path" style="--d:.6;--x1:152px;--y1:28px;--x2:172px;--y2:80px"></span>
      <span class="vl-matrix-holo-core"></span>
    </div>`,
    css: `.vl-matrix-holo-gate {
  width: 190px;
  height: 108px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 24%, #183f65);
  border-radius: 14px;
  overflow: hidden;
  background:
    repeating-linear-gradient(180deg, transparent 0 15px, rgba(255,255,255,0.02) 15px 16px);
}
.vl-matrix-holo-gate-panel {
  position: absolute;
  left: var(--x);
  top: var(--y);
  width: 28px;
  height: 18px;
  border: 1px solid color-mix(in srgb, var(--loader-accent) 70%, #fff);
  border-radius: 4px;
  opacity: .18;
  animation: vl-matrix6-holo-panel calc(var(--loader-speed) * 1.8) ease-in-out infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix-holo-gate-path {
  position: absolute;
  left: var(--x1);
  top: var(--y1);
  width: 18px;
  height: 52px;
  transform: rotate(0deg);
  transform-origin: top center;
  border-left: 2px solid color-mix(in srgb, var(--loader-accent) 74%, #fff);
  animation: vl-matrix6-holo-path calc(var(--loader-speed) * 1.8) ease-in-out infinite;
  animation-delay: calc(var(--d) * 1s);
}
.vl-matrix-holo-core {
  position: absolute;
  left: 50%;
  top: 72px;
  width: 11px;
  height: 11px;
  margin: -5px;
  transform: translateX(-50%);
  border-radius: 50%;
  background: var(--loader-accent);
  animation: vl-matrix6-holo-core calc(var(--loader-speed) * 1.5) linear infinite;
}
@keyframes vl-matrix6-holo-panel {
  0%, 100% { opacity: .18; transform: scale(.76); }
  50% { opacity: .9; transform: scale(1.04); }
}
@keyframes vl-matrix6-holo-path {
  0%, 100% { transform: scaleY(.35); opacity: .14; }
  50% { transform: scaleY(1); opacity: .94; }
}
@keyframes vl-matrix6-holo-core {
  0%, 100% { opacity: .3; transform: translateX(-50%) scale(.7); }
  50% { opacity: .95; transform: translateX(-50%) scale(1.1); }
}`
  }
];
