import { svgLoaders } from './svg.js';
import { svgPack2LoadersA } from './svg-pack-2-a.js';
import { svgPack2LoadersB } from './svg-pack-2-b.js';
import { svgPack3LoadersA } from './svg-pack-3-a.js';
import { svgPack3LoadersB } from './svg-pack-3-b.js';
import { svgPack4LoadersA } from './svg-pack-4-a.js';
import { svgPack4LoadersB } from './svg-pack-4-b.js';
import { svgPack5LoadersA } from './svg-pack-5-a.js';
import { svgPack5LoadersB } from './svg-pack-5-b.js';
import { svgPack6LoadersA } from './svg-pack-6-a.js';
import { svgPack6LoadersB } from './svg-pack-6-b.js';
import { svgPack7LoadersA } from './svg-pack-7-a.js';
import { svgPack7LoadersB } from './svg-pack-7-b.js';

export const svgPackLoaders = [
  ...svgLoaders,
  ...svgPack2LoadersA,
  ...svgPack2LoadersB,
  ...svgPack3LoadersA,
  ...svgPack3LoadersB,
  ...svgPack4LoadersA,
  ...svgPack4LoadersB,
  ...svgPack5LoadersA,
  ...svgPack5LoadersB,
  ...svgPack6LoadersA,
  ...svgPack6LoadersB,
  ...svgPack7LoadersA,
  ...svgPack7LoadersB
];
