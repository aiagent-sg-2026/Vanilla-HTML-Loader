import { textLoaders } from './text.js';
import { textPack1LoadersA } from './text-pack-1-a.js';
import { textPack1LoadersB } from './text-pack-1-b.js';
import { textPack2LoadersA } from './text-pack-2-a.js';
import { textPack2LoadersB } from './text-pack-2-b.js';
import { textPack3LoadersA } from './text-pack-3-a.js';
import { textPack3LoadersB } from './text-pack-3-b.js';
import { textPack4LoadersA } from './text-pack-4-a.js';
import { textPack4LoadersB } from './text-pack-4-b.js';
import { textPack5LoadersA } from './text-pack-5-a.js';
import { textPack5LoadersB } from './text-pack-5-b.js';

export const textPackLoaders = [
  ...textLoaders,
  ...textPack1LoadersA,
  ...textPack1LoadersB,
  ...textPack2LoadersA,
  ...textPack2LoadersB,
  ...textPack3LoadersA,
  ...textPack3LoadersB,
  ...textPack4LoadersA,
  ...textPack4LoadersB,
  ...textPack5LoadersA,
  ...textPack5LoadersB
];
