# Project Memory

## Copied snippet fullscreen overlay contract

Recorded: 2026-07-16T05:10:17.084Z
Tags: loader-studio, snippet, fullscreen, overlay, codepen, paste-smoke, runtime, regression

Loader Studio complete snippets must create a true viewport overlay after paste. The shared SSOT now uses fixed inset positioning, explicit 100vw/100dvh dimensions, maximum z-index, a visible dark backdrop, body-root mounting, page scroll locking, aria-hidden synchronization, and immediate demo auto-show. The exact generated Voxel Assembly Core snippet is regression-tested through qa/snippet-paste-smoke.html on desktop and mobile. In embedded editors such as CodePen, fullscreen means the complete preview iframe viewport, not the surrounding editor chrome.

Sources:
- backup:backup_69be700d-ca6_mrn1qk56
- files:loaders/shared.js,js/snippet-service.js,qa/snippet-paste-smoke.html
- qa:https://gmb01.xyz/share/0146fbde-87c8-471e-85c9-b3afcd7c579e/web-inspect-9b5455fb-af16-4301-a85d-4c260bed66be.html
- qa:https://gmb01.xyz/share/7de32cb5-920e-4b81-bfab-5c81b862ce33/interaction-flow-5226cc53-f550-428a-b7aa-1788300c125e.html

