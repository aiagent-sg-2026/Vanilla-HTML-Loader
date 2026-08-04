// Matrix loader regression guard used by `npm run test:snippets:matrix`.
//
//   node qa/verify-matrix-loaders.mjs
//
// It enforces that the Matrix category is fully wired after pack expansion:
//  - exactly EXPECTED_MATRIX_COUNT loaders
//  - expected Matrix loader ids are present
//  - no duplicate Matrix IDs
//  - required loader fields exist
//  - all Matrix loaders use category `Matrix`
//
// It intentionally performs only a narrow Matrix-focused check; full registry
// invariants stay covered by `qa/registry-lint.mjs` and full smoke checks.

import { loaders } from '../loaders/index.js';

const EXPECTED_MATRIX_COUNT = 267;
const EXPECTED_MATRIX_IDS = [
  'matrix-cube-field',
  'digital-rain-tunnel',
  'voxel-assembly-core',
  'matrix-hex-wave',
  'matrix-packet-routing-grid',
  'matrix-memory-defragment',
  'matrix-circuit-board-trace',
  'matrix-binary-data-tunnel',
  'matrix-neural-lattice-build',
  'matrix-data-cube-merge',
  'matrix-terminal-cascade',
  'matrix-blockchain-confirmation-grid',
  'matrix-signal-spiral',
  'matrix-channel-matrix-grid',
  'matrix-radiant-cascade',
  'matrix-routed-glyph-core',
  'matrix-cascade-entropy-wave',
  'matrix-node-cluster-loop',
  'matrix-entropy-gate-array',
  'matrix-orbital-data-grid',
  'matrix-bitfield-mosaic',
  'matrix-bridge-scanline',
  'matrix-fractal-core-lattice',
  'matrix-signal-orbit-field',
  'matrix-wave-ribcage',
  'matrix-data-flux-rings',
  'matrix-spiral-checker-lane',
  'matrix-neon-lattice-mesh',
  'matrix-binary-cascade-latch',
  'matrix-checkpoint-glyphfield',
  'matrix-threaded-gridwave',
  'matrix-segmented-fade-stack',
  'matrix-synapse-lamp-grid',
  'matrix-quantum-ripple-lattice',
  'matrix-axon-signal-ribbon',
  'matrix-lattice-timestamp-bands',
  'matrix-gate-spiral-matrix',
  'matrix-parallel-matrix-rivers',
  'matrix-cascade-logic-mesh',
  'matrix-glitch-scan-vector',
  'matrix-hexagonal-halo-field',
  'matrix-binary-shift-orbit',
  'matrix-cascade-pulse-lattice',
  'matrix-vectored-bit-grid',
  'matrix-rim-scan-matrix',
  'matrix-orbit-chain-trace',
  'matrix-signal-prism-gate',
  'matrix-mirror-logic-rings',
  'matrix-inkwell-data-stream',
  'matrix-axial-lattice-core',
  'matrix-synapse-bridge-grid',
  'matrix-hologram-gate-fade',
  'matrix-quantum-lattice-spiral',
  'matrix-neural-glyph-cascade',
  'matrix-binary-vector-mirror',
  'matrix-pulse-clock-grid',
  'matrix-cradle-cascade',
  'matrix-quantum-ribbon-clock',
  'matrix-float-logic-orbit',
  'matrix-neon-vector-cascade',
  'matrix-pulse-gate-fresnel',
  'matrix-inked-axon-gate',
  'matrix-crystal-rhythm-grid',
  'matrix-drift-line-lattice',
  'matrix-ionic-vector-pulse',
  'matrix-scalar-gate-lattice',
  'matrix-spiral-axon-gauge',
  'matrix-quantum-spiral-hub',
  'matrix-lens-tangle-matrix',
  'matrix-photon-moire-grid',
  'matrix-cascade-node-weave',
  'matrix-sine-phase-matrix',
  'matrix-aurora-grid-surge',
  'matrix-vector-noise-lattice',
  'matrix-helix-node-vault',
  'matrix-gatewave-cascade',
  'matrix-axon-vector-orbit',
  'matrix-signal-phaser-ring',
  'matrix-byte-wave-grid',
  'matrix-fractal-node-braid',
  'matrix-logic-orbit-loom',
  'matrix-hyperlane-bridge',
  'matrix-ripple-frame-weave',
  'matrix-sine-lattice-gate',
  'matrix-plasma-bridge-band',
  'matrix-cascade-beacon-rings',
  'matrix-orbit-scan-lattice',
  'matrix-magnetic-threshold-mesh',
  'matrix-datastream-flare-spiral',
  'matrix-axon-rail-matrix',
  'matrix-pulse-hollow-grid',
  'matrix-neon-anchor-lattice',
  'matrix-quantum-tide-array',
  'matrix-sparkline-gate-chain',
  'matrix-cascade-axon-grid',
  'matrix-nebula-byte-net',
  'matrix-lagoon-core-fusion',
  'matrix-toroidal-matrix-grid',
  'matrix-binary-lens-mirror',
  'matrix-voxel-bridge-lane',
  'matrix-neural-arc-cascade',
  'matrix-circuit-wavelet-loop',
  'matrix-rift-orbit-lattice',
  'matrix-void-sine-array',
  'matrix-photon-bridge-wave',
  'matrix-gyro-node-ring',
  'matrix-crystal-lattice-bridge',
  'matrix-nebula-rift-grid',
  'matrix-cascade-node-orbit',
  'matrix-orbital-spark-grid',
  'matrix-halo-gate-river',
  'matrix-fractal-pulse-portal',
  'matrix-luminous-radial-fusion',
  'matrix-echo-cascade-loop',
  'matrix-matrix-lattice-spiral',
  'matrix-drift-node-orbit',
  'matrix-cascade-core-lattice',
  'matrix-quantum-tile-veil',
  'matrix-nano-gate-matrix',
  'matrix-synaptic-bridge-wave',
  'matrix-prism-array-surge',
  'matrix-hollow-axon-grid',
  'matrix-quantum-wave-ribbon',
  'matrix-axon-flux-membrane',
  'matrix-spiral-data-orbit',
  'matrix-neon-cascade-mesh',
  'matrix-signal-fold-stack',
  'matrix-spectral-gate-array',
  'matrix-lattice-echo-thread',
  'matrix-pulse-lattice-vein',
  'matrix-binary-veil-grid',
  'matrix-fractal-pulse-ribbon',
  'matrix-halo-node-wave',
  'matrix-axon-lattice-wave',
  'matrix-photon-pulse-strand',
  'matrix-vault-lumen-fade',
  'matrix-spectral-core-ripple',
  'matrix-crystal-vector-bloom',
  'matrix-ribbon-photon-lace',
  'matrix-vector-wave-orbit',
  'matrix-luminous-thread-lattice',
  'matrix-neural-fiber-grid',
  'matrix-cosmic-lens-orbit',
  'matrix-mirror-pulse-grid',
  'matrix-gate-tunnel-mesh',
  'matrix-scanline-memory-rings',
  'matrix-hologram-axon-net',
  'matrix-neon-pulse-cascade',
  'matrix-binary-fabric-bloom',
  'matrix-spiral-fragment-cascade',
  'matrix-quantum-vortex-ribbon',
  'matrix-voxel-radiance-matrix',
  'matrix-strobe-cascade-grid',
  'matrix-lattice-rhythm-gates',
  'matrix-photon-loom-grid',
  'matrix-neon-fragment-radar',
  'matrix-axon-thread-orbit',
  'matrix-quantum-drift-rings',
  'matrix-entropy-lens-array',
  'matrix-binary-wave-torsion',
  'matrix-matrix-orbital-cradle',
  'matrix-radiant-hash-lattice',
  'matrix-spectral-refractor-rings',
  'matrix-lens-scan-stack',
  'matrix-photon-gate-ribbon',
  'matrix-bit-orbit-loop',
  'matrix-halo-thread-chamber',
  'matrix-lumen-cascade-grid',
  'matrix-binary-rift-lattice',
  'matrix-drift-helix-rings',
  'matrix-quantum-axon-mesh',
  'matrix-axiometric-scan-knot',
  'matrix-vector-gate-glyph',
  'matrix-halo-rib-lattice',
  'matrix-drift-vector-orbit',
  'matrix-echo-cascade-rings',
  'matrix-prism-braid-grid',
  'matrix-photon-ridge-array',
  'matrix-luminous-thread-spiral',
  'matrix-cascade-ghost-frame',
  'matrix-fractional-scan-node',
  'matrix-cascade-vector-bay',
  'matrix-nebula-arc-array',
  'matrix-vector-inklace-spiral',
  'matrix-crystal-axon-rings',
  'matrix-photon-drift-grid',
  'matrix-lattice-bias-gate',
  'matrix-orbit-glyph-channel',
  'matrix-quantum-echo-truss',
  'matrix-harmonic-radial-channel',
  'matrix-circuit-vortex-cascade',
  'matrix-void-lens-node',
  'matrix-plasma-orbit-rings',
  'matrix-cryo-grid-lattice',
  'matrix-flux-thread-orbit',
  'matrix-lattice-signal-bloom',
  'matrix-prism-axon-sphere',
  'matrix-glyph-beat-matrix',
  'matrix-solaris-pulse-wave',
  'matrix-vector-quantum-nodes',
  'matrix-spiral-noise-lattice',
  'matrix-harmonic-core-spiral',
  'matrix-neon-ribbon-matrix',
  'matrix-helix-glyph-rings',
  'matrix-photon-axis-scan',
  'matrix-orbit-cascade-lattice',
  'matrix-vector-tension-field',
  'matrix-chrono-pulse-gate',
  'matrix-radiant-node-rail',
  'matrix-crystal-orbit-cascade',
  'matrix-halo-bloom-lattice',
  'matrix-axon-spiral-core',
  'matrix-prism-vector-nova',
  'matrix-axon-lattice-halo',
  'matrix-quantum-lattice-gate',
  'matrix-pulse-ribbon-lattice',
  'matrix-chronicle-scan-mesh',
  'matrix-cascade-vector-nucleus',
  'matrix-oscillating-rim-lattice',
  'matrix-glyph-drift-orbit',
  'matrix-drift-bloom-lattice',
  'matrix-neural-rift-wave',
  'matrix-skyline-arc-lattice',
  'matrix-axon-luminance-cascade',
  'matrix-binary-wave-gate',
  'matrix-spiral-node-lattice',
  'matrix-neural-orbit-veil',
  'matrix-cascade-ribbon-shift',
  'matrix-halo-fracture-grid',
  'matrix-scan-vector-pulse',
  'matrix-radiant-orbit-grid',
  'matrix-prism-arc-lens',
  'matrix-crescent-mirror-grid',
  'matrix-vector-noise-tracer',
  'matrix-helix-node-scan',
  'matrix-diffraction-rhombus-rings',
  'matrix-spectral-arc-pulse',
  'matrix-fractal-axon-rift',
  'matrix-photon-fleck-grid',
  'matrix-quantum-orbit-thread',
  'matrix-lumen-cascade-chain',
  'matrix-glyph-wave-hall',
  'matrix-lattice-resonance-pulse',
  'matrix-crystal-tide-orbit',
  'matrix-photon-micro-bloom',
  'matrix-rune-grid-ribbon',
  'matrix-axis-shadow-chain',
  'matrix-axiom-scan-lane',
  'matrix-helix-cascade-lens',
  'matrix-fractal-glyph-vector',
  'matrix-vector-gate-rain',
  'matrix-skyline-matrix-loom',
  'matrix-cascade-lens-vector',
  'matrix-holo-spiral-beacon',
  'matrix-nebula-ribbon-scan',
  'matrix-vortex-glyph-array',
  'matrix-quantum-grid-needle',
  'matrix-photon-strobe-rack',
  'matrix-orbital-rail-gate',
  'matrix-axiom-wave-cascade',
  'matrix-fractal-vector-loom',
  'matrix-helix-pulse-lattice',
  'matrix-pulse-gateway',
  'matrix-sine-gate-spiral',
  'matrix-wave-lattice-ring',
  'matrix-cascade-omega-loop',
  'matrix-cascade-radiance'
];
const REQUIRED_FIELDS = ['id', 'name', 'category', 'description', 'markup', 'css'];

const matrixLoaders = loaders.filter(loader => loader.category === 'Matrix');
const seen = new Set();
const violations = [];

if (matrixLoaders.length !== EXPECTED_MATRIX_COUNT) {
  violations.push({
    rule: 'matrix-count',
    message: `Matrix category has ${matrixLoaders.length} loaders, expected ${EXPECTED_MATRIX_COUNT}`,
    detail: matrixLoaders.map(loader => loader.id).join(', ')
  });
}

const idSet = new Set(matrixLoaders.map(loader => loader.id).filter(Boolean));
const matrixIds = [...idSet];

for (const loader of matrixLoaders) {
  for (const field of REQUIRED_FIELDS) {
    if (!loader[field]) {
      violations.push({
        rule: 'matrix-required-field',
        message: `Matrix loader "${loader.id || '(no id)'}" is missing ${field}`
      });
    }
  }

  if (loader.id && !EXPECTED_MATRIX_IDS.includes(loader.id)) {
    violations.push({
      rule: 'matrix-unexpected-id',
      message: `Matrix loader uses unexpected id "${loader.id}"`,
      detail: `present in Matrix but not in baseline expectation`
    });
  }

  if (loader.category !== 'Matrix') {
    violations.push({
      rule: 'matrix-category',
      message: `Matrix loader "${loader.id}" has category "${loader.category}"`
    });
  }

  if (seen.has(loader.id)) {
    violations.push({
      rule: 'matrix-duplicate-id',
      message: `Duplicate Matrix id: ${loader.id}`
    });
  }
  seen.add(loader.id);
}

for (const id of EXPECTED_MATRIX_IDS) {
  if (!matrixIds.includes(id)) {
    violations.push({
      rule: 'matrix-missing-id',
      message: `Expected Matrix id is missing: ${id}`
    });
  }
}

console.log('matrix loader regression check');
console.log(`  Matrix loaders: ${matrixLoaders.length} / ${EXPECTED_MATRIX_COUNT}`);

if (violations.length === 0) {
  console.log('  status: PASS');
  process.exit(0);
}

console.log(`  status: FAIL (${violations.length})`);
for (const violation of violations) {
  console.log(`  [${violation.rule}] ${violation.message}`);
  if (violation.detail) console.log(`    ${violation.detail}`);
}
process.exit(1);
