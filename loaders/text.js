export const textLoaders = [
  {
    "id": "text-shimmer",
    "name": "Gradient Shimmer Text",
    "category": "Text",
    "tech": "CSS Text",
    "description": "A polished gradient sweep across text for report generation and background processing.",
    "markup": "<div class=\"vl-text-shimmer\" aria-hidden=\"true\">PROCESSING</div>",
    "css": ".vl-text-shimmer {\n  min-width: 160px;\n  color: transparent;\n  background: linear-gradient(100deg, color-mix(in srgb, var(--loader-accent) 34%, transparent) 20%, var(--loader-accent) 48%, color-mix(in srgb, var(--loader-accent) 34%, transparent) 76%);\n  background-size: 220% 100%;\n  background-clip: text;\n  -webkit-background-clip: text;\n  font: 800 20px/1.2 system-ui, sans-serif;\n  text-align: center;\n  animation: vl-text-shimmer calc(var(--loader-speed) * 1.45) linear infinite;\n}\n@keyframes vl-text-shimmer { to { background-position: -220% 0; } }"
  },
  {
    "id": "letter-wave",
    "name": "Letter Wave",
    "category": "Text",
    "tech": "CSS Text",
    "description": "Individual letters rise in sequence to create a friendly loading wave.",
    "markup": "<div class=\"vl-letter-wave\" aria-hidden=\"true\"><span>L</span><span>O</span><span>A</span><span>D</span><span>I</span><span>N</span><span>G</span></div>",
    "css": ".vl-letter-wave {\n  display: inline-flex;\n  gap: 1px;\n  color: var(--loader-accent);\n  font: 850 19px/1.2 system-ui, sans-serif;\n  letter-spacing: .02em;\n}\n.vl-letter-wave span { display: inline-block; animation: vl-letter-wave calc(var(--loader-speed) * 1.35) ease-in-out infinite; }\n.vl-letter-wave span:nth-child(2) { animation-delay: .08s; }\n.vl-letter-wave span:nth-child(3) { animation-delay: .16s; }\n.vl-letter-wave span:nth-child(4) { animation-delay: .24s; }\n.vl-letter-wave span:nth-child(5) { animation-delay: .32s; }\n.vl-letter-wave span:nth-child(6) { animation-delay: .40s; }\n.vl-letter-wave span:nth-child(7) { animation-delay: .48s; }\n@keyframes vl-letter-wave {\n  0%, 100% { transform: translateY(0); opacity: .45; }\n  50% { transform: translateY(-10px); opacity: 1; }\n}"
  },
  {
    "id": "terminal",
    "name": "Terminal Cursor",
    "category": "Text",
    "tech": "CSS Text",
    "description": "A command-line inspired status with a blinking block cursor for developer tools.",
    "markup": "<div class=\"vl-terminal\" aria-hidden=\"true\">Loading system</div>",
    "css": ".vl-terminal {\n  display: inline-flex;\n  align-items: center;\n  min-width: 164px;\n  padding: 11px 13px;\n  border: 1px solid color-mix(in srgb, var(--loader-accent) 32%, transparent);\n  border-radius: 9px;\n  background: color-mix(in srgb, var(--loader-accent) 8%, transparent);\n  color: var(--loader-accent);\n  font: 700 14px/1.2 ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;\n}\n.vl-terminal::before { content: '> '; opacity: .62; }\n.vl-terminal::after {\n  content: '';\n  width: 8px; height: 16px;\n  margin-left: 5px;\n  background: currentColor;\n  animation: vl-cursor calc(var(--loader-speed) * .85) steps(1) infinite;\n}\n@keyframes vl-cursor { 0%, 48% { opacity: 1; } 49%, 100% { opacity: 0; } }"
  },
  {
    "id": "text-scan",
    "name": "Text Scanline",
    "category": "Text",
    "tech": "CSS Text",
    "description": "A scanning reveal passes through a technical status word from left to right.",
    "markup": "<div class=\"vl-text-scan\" data-text=\"SYNCING\" aria-hidden=\"true\">SYNCING</div>",
    "css": ".vl-text-scan {\n  position: relative;\n  overflow: hidden;\n  color: color-mix(in srgb, var(--loader-accent) 40%, transparent);\n  font: 900 21px/1.2 system-ui, sans-serif;\n  letter-spacing: .08em;\n}\n.vl-text-scan::after {\n  content: attr(data-text);\n  position: absolute;\n  inset: 0;\n  color: var(--loader-accent);\n  clip-path: inset(0 100% 0 0);\n  animation: vl-text-scan calc(var(--loader-speed) * 1.6) ease-in-out infinite;\n}\n@keyframes vl-text-scan {\n  0%, 15% { clip-path: inset(0 100% 0 0); }\n  55%, 75% { clip-path: inset(0 0 0 0); }\n  100% { clip-path: inset(0 0 0 100%); }\n}"
  },
  {
    "id": "flip-words",
    "name": "Rotating Status Words",
    "category": "Text",
    "tech": "CSS Text",
    "description": "Three status messages rotate in 3D to communicate multi-stage processing.",
    "markup": "<div class=\"vl-flip-words\" aria-hidden=\"true\"><span>Preparing</span><span>Processing</span><span>Finalising</span></div>",
    "css": ".vl-flip-words {\n  position: relative;\n  width: 156px; height: 30px;\n  perspective: 500px;\n  color: var(--loader-accent);\n  font: 850 18px/30px system-ui, sans-serif;\n  text-align: center;\n}\n.vl-flip-words span {\n  position: absolute;\n  inset: 0;\n  opacity: 0;\n  transform-origin: center bottom;\n  animation: vl-flip-word calc(var(--loader-speed) * 3) ease-in-out infinite;\n}\n.vl-flip-words span:nth-child(2) { animation-delay: calc(var(--loader-speed) * 1); }\n.vl-flip-words span:nth-child(3) { animation-delay: calc(var(--loader-speed) * 2); }\n@keyframes vl-flip-word {\n  0% { opacity: 0; transform: rotateX(-82deg) translateY(8px); }\n  10%, 28% { opacity: 1; transform: rotateX(0) translateY(0); }\n  38%, 100% { opacity: 0; transform: rotateX(82deg) translateY(-8px); }\n}"
  },
  {
    "id": "elastic-text",
    "name": "Elastic Letters",
    "category": "Text",
    "tech": "CSS Text",
    "description": "Letters stretch and settle with a soft elastic motion for playful interfaces.",
    "markup": "<div class=\"vl-elastic-text\" aria-hidden=\"true\"><span>W</span><span>A</span><span>I</span><span>T</span><span>I</span><span>N</span><span>G</span></div>",
    "css": ".vl-elastic-text {\n  display: inline-flex;\n  gap: 1px;\n  color: var(--loader-accent);\n  font: 850 19px/1.2 system-ui, sans-serif;\n  letter-spacing: .02em;\n}\n.vl-elastic-text span { display: inline-block; animation: vl-elastic-letter calc(var(--loader-speed) * 1.4) cubic-bezier(.5, -.35, .35, 1.5) infinite; }\n.vl-elastic-text span:nth-child(2) { animation-delay: .08s; }\n.vl-elastic-text span:nth-child(3) { animation-delay: .16s; }\n.vl-elastic-text span:nth-child(4) { animation-delay: .24s; }\n.vl-elastic-text span:nth-child(5) { animation-delay: .32s; }\n.vl-elastic-text span:nth-child(6) { animation-delay: .40s; }\n.vl-elastic-text span:nth-child(7) { animation-delay: .48s; }\n@keyframes vl-elastic-letter {\n  0%, 100% { transform: scaleY(.76) translateY(3px); opacity: .55; }\n  50% { transform: scaleY(1.32) translateY(-5px); opacity: 1; }\n}"
  }
];
