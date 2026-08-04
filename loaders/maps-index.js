import { mapsPack1LoadersA } from './maps-pack-1-a.js';
import { mapsPack1LoadersB } from './maps-pack-1-b.js';
import { mapsPack2LoadersA } from './maps-pack-2-a.js';
import { mapsPack2LoadersB } from './maps-pack-2-b.js';

export const mapPackLoaders = [
  ...mapsPack1LoadersA,
  ...mapsPack1LoadersB,
  ...mapsPack2LoadersA,
  ...mapsPack2LoadersB
];
