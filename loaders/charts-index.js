import { chartsPack1LoadersA } from './charts-pack-1-a.js';
import { chartsPack1LoadersB } from './charts-pack-1-b.js';
import { chartsPack2LoadersA } from './charts-pack-2-a.js';
import { chartsPack2LoadersB } from './charts-pack-2-b.js';
import { chartsPack2LoadersC } from './charts-pack-2-c.js';
import { chartsPack2LoadersD } from './charts-pack-2-d.js';

export const chartPackLoaders = [
  ...chartsPack1LoadersA,
  ...chartsPack1LoadersB,
  ...chartsPack2LoadersA,
  ...chartsPack2LoadersB,
  ...chartsPack2LoadersC,
  ...chartsPack2LoadersD,
];
