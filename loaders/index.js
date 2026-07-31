import { spinnerPackLoaders } from './spinners-index.js';
import { dotPackLoaders } from './dots-index.js';
import { barPackLoaders } from './bars-index.js';
import { shapePackLoaders } from './shapes-index.js';
import { buttonPackLoaders } from './buttons-index.js';
import { commonPackLoaders } from './common-index.js';
import { utilityLoaders } from './utility.js';
import { textPackLoaders } from './text-index.js';
import { css3dPackLoaders } from './css-3d-index.js';
import { svgPackLoaders } from './svg-index.js';
import { progressLoaders } from './progress.js';
import { chartPackLoaders } from './charts-index.js';
import { skeletonLoaders } from './skeletons.js';
import { operationLoaders } from './operations.js';
import { matrixLoaders } from './matrix.js';
import { holographicLoaders } from './holographic.js';
import { functionalLoaders } from './functional.js';

export const loaders = [
  ...spinnerPackLoaders,
  ...dotPackLoaders,
  ...barPackLoaders,
  ...shapePackLoaders,
  ...buttonPackLoaders,
  ...commonPackLoaders,
  ...utilityLoaders,
  ...textPackLoaders,
  ...css3dPackLoaders,
  ...svgPackLoaders,
  ...progressLoaders,
  ...chartPackLoaders,
  ...skeletonLoaders,
  ...operationLoaders,
  ...matrixLoaders,
  ...holographicLoaders,
  ...functionalLoaders
];

export const categories = ['All', ...new Set(loaders.map(loader => loader.category))];
