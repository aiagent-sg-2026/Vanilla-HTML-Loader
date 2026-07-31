# Project Memory

## CodePen copied-snippet auto-motion contract

Recorded: 2026-07-16T05:21:27.394Z
Tags: loader-studio, codepen, snippet, animation, reduced-motion, demo, regression

Copied complete snippets now expose AppLoader.setMotion() and support motion modes auto, force, and paused. Demo auto-run calls AppLoader.show('Loading…', { motion: 'force' }) so CodePen and similar editors visibly animate even when the device reports prefers-reduced-motion. Normal production calls without a motion option default to auto and continue respecting the user's reduced-motion preference. The exact generated Matrix snippet is regression-tested under a simulated reduced-motion state and must report animation-play-state running with data-motion=force.

Sources:
- backup:backup_69be700d-ca6_mrn26umv
- files:loaders/shared.js,qa/snippet-paste-smoke.html
- qa:https://gmb01.xyz/share/f28fd1c9-52bc-4101-82b3-02ff5dc779f7/interaction-flow-3859401a-9e42-4637-a382-b4e28c08b90d.html
- qa:https://gmb01.xyz/share/4ceb2068-1df9-4f76-91f4-0941de23c2e3/interaction-flow-3b02f625-2e50-4a1d-ade5-fc7be618f200.html

