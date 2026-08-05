import { barLoaders } from './bars.js';
import { barPack2LoadersA } from './bars-pack-2-a.js';
import { barPack2LoadersB } from './bars-pack-2-b.js';
import { barsPack3LoadersA } from './bars-pack-3-a.js';
import { barsPack3LoadersB } from './bars-pack-3-b.js';
import { barsPack4LoadersA } from './bars-pack-4-a.js';
import { barsPack4LoadersB } from './bars-pack-4-b.js';
import { barsPack5LoadersA } from './bars-pack-5-a.js';

export const barPackLoaders = [
  ...barLoaders,
  ...barPack2LoadersA,
  ...barPack2LoadersB,
  ...barsPack3LoadersA,
  ...barsPack3LoadersB,
  ...barsPack4LoadersA,
  ...barsPack4LoadersB,
  ...barsPack5LoadersA,
];
