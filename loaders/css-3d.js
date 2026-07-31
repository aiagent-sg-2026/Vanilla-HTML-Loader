export const css3dLoaders = [
  {
    "id": "cube-3d",
    "name": "Rotating 3D Cube",
    "category": "CSS 3D",
    "tech": "CSS 3D",
    "description": "A true six-face CSS cube rotating in three-dimensional space without WebGL.",
    "markup": "<div class=\"vl-cube-3d\" aria-hidden=\"true\"><span class=\"front\"></span><span class=\"back\"></span><span class=\"right\"></span><span class=\"left\"></span><span class=\"top\"></span><span class=\"bottom\"></span></div>",
    "css": ".vl-cube-3d {\n  position: relative;\n  width: 42px; height: 42px;\n  transform-style: preserve-3d;\n  animation: vl-cube-3d calc(var(--loader-speed) * 2.2) linear infinite;\n}\n.vl-cube-3d span {\n  position: absolute;\n  inset: 0;\n  border: 1px solid color-mix(in srgb, var(--loader-accent) 72%, white);\n  background: color-mix(in srgb, var(--loader-accent) 68%, transparent);\n  backface-visibility: visible;\n}\n.vl-cube-3d .front { transform: translateZ(21px); }\n.vl-cube-3d .back { transform: rotateY(180deg) translateZ(21px); }\n.vl-cube-3d .right { transform: rotateY(90deg) translateZ(21px); }\n.vl-cube-3d .left { transform: rotateY(-90deg) translateZ(21px); }\n.vl-cube-3d .top { transform: rotateX(90deg) translateZ(21px); }\n.vl-cube-3d .bottom { transform: rotateX(-90deg) translateZ(21px); }\n@keyframes vl-cube-3d {\n  0% { transform: rotateX(-20deg) rotateY(0); }\n  50% { transform: rotateX(200deg) rotateY(180deg); }\n  100% { transform: rotateX(340deg) rotateY(360deg); }\n}"
  },
  {
    "id": "fold-3d",
    "name": "Folding Tiles",
    "category": "CSS 3D",
    "tech": "CSS 3D",
    "description": "Four tiles fold toward the viewer in sequence using CSS perspective.",
    "markup": "<div class=\"vl-fold-3d\" aria-hidden=\"true\"><span></span><span></span><span></span><span></span></div>",
    "css": ".vl-fold-3d {\n  width: 62px; height: 62px;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 3px;\n  perspective: 420px;\n  transform: rotate(45deg);\n}\n.vl-fold-3d span {\n  border-radius: 4px;\n  background: var(--loader-accent);\n  animation: vl-fold-3d calc(var(--loader-speed) * 1.65) ease-in-out infinite;\n}\n.vl-fold-3d span:nth-child(2) { animation-delay: .16s; }\n.vl-fold-3d span:nth-child(3) { animation-delay: .32s; }\n.vl-fold-3d span:nth-child(4) { animation-delay: .48s; }\n@keyframes vl-fold-3d {\n  0%, 100% { transform: rotateX(0) rotateY(0) scale(.72); opacity: .42; }\n  50% { transform: rotateX(180deg) rotateY(22deg) scale(1); opacity: 1; }\n}"
  },
  {
    "id": "iso-3d",
    "name": "Isometric Blocks",
    "category": "CSS 3D",
    "tech": "CSS 3D",
    "description": "Three isometric blocks rise in sequence for technical and data-heavy products.",
    "markup": "<div class=\"vl-iso-3d\" aria-hidden=\"true\"><span></span><span></span><span></span></div>",
    "css": ".vl-iso-3d {\n  position: relative;\n  width: 84px; height: 60px;\n  transform-style: preserve-3d;\n  transform: rotateX(58deg) rotateZ(45deg);\n}\n.vl-iso-3d span {\n  position: absolute;\n  width: 28px; height: 28px;\n  border-radius: 4px;\n  background: var(--loader-accent);\n  box-shadow: 9px 9px 0 color-mix(in srgb, var(--loader-accent) 55%, black);\n  animation: vl-iso-rise calc(var(--loader-speed) * 1.45) ease-in-out infinite;\n}\n.vl-iso-3d span:nth-child(1) { left: 2px; top: 16px; }\n.vl-iso-3d span:nth-child(2) { left: 29px; top: 0; animation-delay: .18s; }\n.vl-iso-3d span:nth-child(3) { left: 56px; top: 16px; animation-delay: .36s; }\n@keyframes vl-iso-rise { 0%, 100% { transform: translateZ(0); } 50% { transform: translateZ(24px); } }"
  },
  {
    "id": "orbit-3d",
    "name": "3D Orbit Rings",
    "category": "CSS 3D",
    "tech": "CSS 3D",
    "description": "Three intersecting rings rotate around a glowing core like an atom model.",
    "markup": "<div class=\"vl-orbit-3d\" aria-hidden=\"true\"><span></span><span></span><span></span></div>",
    "css": ".vl-orbit-3d {\n  position: relative;\n  width: 70px; height: 70px;\n  transform-style: preserve-3d;\n  animation: vl-orbit-scene calc(var(--loader-speed) * 2.4) linear infinite;\n}\n.vl-orbit-3d span {\n  position: absolute;\n  inset: 8px;\n  border: 3px solid var(--loader-accent);\n  border-radius: 50%;\n  opacity: .72;\n}\n.vl-orbit-3d span:nth-child(1) { transform: rotateX(72deg); }\n.vl-orbit-3d span:nth-child(2) { transform: rotateY(72deg); }\n.vl-orbit-3d span:nth-child(3) { transform: rotateX(55deg) rotateY(55deg); }\n.vl-orbit-3d::after {\n  content: '';\n  position: absolute;\n  left: 50%; top: 50%;\n  width: 11px; height: 11px;\n  border-radius: 50%;\n  background: var(--loader-accent);\n  transform: translate(-50%, -50%);\n  box-shadow: 0 0 18px var(--loader-accent);\n}\n@keyframes vl-orbit-scene { to { transform: rotateX(360deg) rotateY(540deg) rotateZ(180deg); } }"
  },
  {
    "id": "flip-cards",
    "name": "3D Flip Cards",
    "category": "CSS 3D",
    "tech": "CSS 3D",
    "description": "Slim cards flip around their vertical axes with staggered timing.",
    "markup": "<div class=\"vl-flip-cards\" aria-hidden=\"true\"><span></span><span></span><span></span><span></span></div>",
    "css": ".vl-flip-cards { display: flex; gap: 7px; perspective: 520px; }\n.vl-flip-cards span {\n  width: 18px; height: 48px;\n  border-radius: 5px;\n  background: var(--loader-accent);\n  animation: vl-flip-card calc(var(--loader-speed) * 1.35) ease-in-out infinite;\n}\n.vl-flip-cards span:nth-child(2) { animation-delay: .16s; }\n.vl-flip-cards span:nth-child(3) { animation-delay: .32s; }\n.vl-flip-cards span:nth-child(4) { animation-delay: .48s; }\n@keyframes vl-flip-card {\n  0%, 100% { transform: rotateY(0) scaleY(.72); opacity: .45; }\n  50% { transform: rotateY(180deg) scaleY(1); opacity: 1; }\n}"
  },
  {
    "id": "tunnel-3d",
    "name": "Perspective Tunnel",
    "category": "CSS 3D",
    "tech": "CSS 3D",
    "description": "Repeated square frames travel toward the viewer to create a depth tunnel.",
    "markup": "<div class=\"vl-tunnel-3d\" aria-hidden=\"true\"><span></span><span></span><span></span><span></span><span></span></div>",
    "css": ".vl-tunnel-3d {\n  position: relative;\n  width: 72px; height: 72px;\n  perspective: 420px;\n}\n.vl-tunnel-3d span {\n  position: absolute;\n  left: 50%; top: 50%;\n  width: 62px; height: 62px;\n  border: 3px solid var(--loader-accent);\n  border-radius: 9px;\n  opacity: 0;\n  transform: translate(-50%, -50%) scale(.12) rotate(45deg);\n  animation: vl-tunnel calc(var(--loader-speed) * 2.2) linear infinite;\n}\n.vl-tunnel-3d span:nth-child(2) { animation-delay: calc(var(--loader-speed) * .44); }\n.vl-tunnel-3d span:nth-child(3) { animation-delay: calc(var(--loader-speed) * .88); }\n.vl-tunnel-3d span:nth-child(4) { animation-delay: calc(var(--loader-speed) * 1.32); }\n.vl-tunnel-3d span:nth-child(5) { animation-delay: calc(var(--loader-speed) * 1.76); }\n@keyframes vl-tunnel {\n  0% { opacity: 0; transform: translate(-50%, -50%) scale(.1) rotate(45deg); }\n  20% { opacity: 1; }\n  100% { opacity: 0; transform: translate(-50%, -50%) scale(1.15) rotate(225deg); }\n}"
  }
];
