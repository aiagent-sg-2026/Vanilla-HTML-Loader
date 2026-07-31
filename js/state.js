import { loadAccent, loadCollectionLayout, loadFavorites, loadRecent } from './storage.js';

export const state = {
  selectedId: 'orbit',
  category: 'All',
  query: '',
  activeCodeTab: 'html',
  accent: loadAccent(),
  favorites: loadFavorites(),
  recent: loadRecent(),
  view: 'library',
  paused: false,
  controlValues: {},
  layoutMode: loadCollectionLayout(),
  collection: {
    pageSize: 24,
    visibleLimit: 24
  },
  shell: {
    sidebarCollapsed: false,
    sidebarOpen: false,
    inspectorOpen: true,
    inspectorPinned: true,
    inspectorCollapsed: false
  }
};
