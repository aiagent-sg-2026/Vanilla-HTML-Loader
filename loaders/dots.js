export const dotLoaders = [
  {
    "id": "pulse-dots",
    "name": "Pulse Dots",
    "category": "Dots",
    "description": "Three softly pulsing dots for compact and conversational interfaces.",
    "markup": "<div class=\"vl-pulse-dots\" aria-hidden=\"true\"><span></span><span></span><span></span></div>",
    "css": ".vl-pulse-dots { display: flex; gap: 8px; align-items: center; }\n.vl-pulse-dots span {\n  width: 12px; height: 12px;\n  border-radius: 50%;\n  background: var(--loader-accent);\n  animation: vl-dot-pulse calc(var(--loader-speed) * 1.2) ease-in-out infinite;\n}\n.vl-pulse-dots span:nth-child(2) { animation-delay: .14s; }\n.vl-pulse-dots span:nth-child(3) { animation-delay: .28s; }\n@keyframes vl-dot-pulse {\n  0%, 100% { transform: scale(.72); opacity: .35; }\n  50% { transform: scale(1.12); opacity: 1; }\n}"
  },
  {
    "id": "bounce-dots",
    "name": "Bounce Dots",
    "category": "Dots",
    "description": "A more energetic three-dot loader for actions that finish quickly.",
    "markup": "<div class=\"vl-bounce-dots\" aria-hidden=\"true\"><span></span><span></span><span></span></div>",
    "css": ".vl-bounce-dots { display: flex; gap: 8px; align-items: center; }\n.vl-bounce-dots span {\n  width: 12px; height: 12px;\n  border-radius: 50%;\n  background: var(--loader-accent);\n  animation: vl-bounce calc(var(--loader-speed) * 1.2) ease-in-out infinite;\n}\n.vl-bounce-dots span:nth-child(2) { animation-delay: .14s; }\n.vl-bounce-dots span:nth-child(3) { animation-delay: .28s; }\n@keyframes vl-bounce {\n  0%, 100% { transform: translateY(0); }\n  50% { transform: translateY(-15px); }\n}"
  },
  {
    "id": "typing",
    "name": "Typing Indicator",
    "category": "Dots",
    "description": "A compact dot sequence for chat, assistant, and message-generation states.",
    "markup": "<div class=\"vl-typing\" aria-hidden=\"true\"><span></span><span></span><span></span></div>",
    "css": ".vl-typing { display: flex; gap: 7px; align-items: center; }\n.vl-typing span {\n  width: 8px; height: 8px;\n  border-radius: 50%;\n  background: var(--loader-accent);\n  animation: vl-typing var(--loader-speed) ease-in-out infinite;\n}\n.vl-typing span:nth-child(2) { animation-delay: .14s; }\n.vl-typing span:nth-child(3) { animation-delay: .28s; }\n@keyframes vl-typing {\n  0%, 100% { transform: translateY(0); opacity: .35; }\n  50% { transform: translateY(-7px); opacity: 1; }\n}"
  }
];
