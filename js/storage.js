export const STORAGE_KEYS = Object.freeze({
  favorites: 'loaderStudioFavorites',
  recent: 'loaderStudioRecent',
  theme: 'loaderStudioTheme',
  accent: 'loaderStudioAccent',
  shell: 'loaderStudioShell',
  layout: 'loaderStudioCollectionLayout'
});

function readJson(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch {
    return fallback;
  }
}

export function loadFavorites() {
  const value = readJson(STORAGE_KEYS.favorites, []);
  return new Set(Array.isArray(value) ? value : []);
}

export function saveFavorites(favorites) {
  localStorage.setItem(STORAGE_KEYS.favorites, JSON.stringify([...favorites]));
}

export function loadRecent() {
  const value = readJson(STORAGE_KEYS.recent, []);
  return Array.isArray(value) ? value : [];
}

export function saveRecent(recent) {
  localStorage.setItem(STORAGE_KEYS.recent, JSON.stringify(recent));
}

export function loadTheme() {
  return localStorage.getItem(STORAGE_KEYS.theme) === 'dark' ? 'dark' : 'light';
}

export function saveTheme(theme) {
  localStorage.setItem(STORAGE_KEYS.theme, theme);
}

export function loadAccent() {
  const value = localStorage.getItem(STORAGE_KEYS.accent);
  return /^#[0-9a-f]{6}$/i.test(value || '') ? value.toUpperCase() : '#3B63F3';
}

export function saveAccent(accent) {
  localStorage.setItem(STORAGE_KEYS.accent, accent);
}

export function loadCollectionLayout() {
  return localStorage.getItem(STORAGE_KEYS.layout) === 'grid' ? 'grid' : 'masonry';
}

export function saveCollectionLayout(layout) {
  localStorage.setItem(STORAGE_KEYS.layout, layout === 'grid' ? 'grid' : 'masonry');
}

export function loadShellPreferences() {
  const value = readJson(STORAGE_KEYS.shell, null);
  if (!value || typeof value !== 'object') return null;

  return {
    sidebarCollapsed: Boolean(value.sidebarCollapsed),
    inspectorOpen: value.inspectorOpen !== false,
    inspectorPinned: value.inspectorPinned !== false,
    inspectorCollapsed: Boolean(value.inspectorCollapsed)
  };
}

export function saveShellPreferences(shell) {
  localStorage.setItem(STORAGE_KEYS.shell, JSON.stringify({
    sidebarCollapsed: Boolean(shell.sidebarCollapsed),
    inspectorOpen: Boolean(shell.inspectorOpen),
    inspectorPinned: Boolean(shell.inspectorPinned),
    inspectorCollapsed: Boolean(shell.inspectorCollapsed)
  }));
}
