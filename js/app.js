import { loaders, categories } from '../loaders/index.js';
import { state } from './state.js';
import { installLoaderStyles } from './loader-style-service.js';
import { createEventController } from './ui/event-controller.js';
import { mountUiIcons } from './ui/icon-library.js';

function getRequiredElement(id) {
  const element = document.getElementById(id);
  if (!element) throw new Error(`Missing required element: #${id}`);
  return element;
}

const refs = {
  appShell: getRequiredElement('appShell'),
  main: getRequiredElement('mainContent'),
  sidebar: getRequiredElement('sidebar'),
  sidebarToggle: getRequiredElement('sidebarToggle'),
  mobileBrandButton: getRequiredElement('mobileBrandButton'),
  grid: getRequiredElement('loaderGrid'),
  pagination: getRequiredElement('collectionPagination'),
  paginationSummary: getRequiredElement('collectionPaginationSummary'),
  paginationProgress: getRequiredElement('collectionProgress'),
  paginationProgressFill: getRequiredElement('collectionProgressFill'),
  loadMoreButton: getRequiredElement('loadMoreButton'),
  sentinel: getRequiredElement('collectionSentinel'),
  autoLoadStatus: getRequiredElement('collectionAutoStatus'),
  layoutSwitcher: getRequiredElement('layoutSwitcher'),
  filterRow: getRequiredElement('filterRow'),
  filterToggle: getRequiredElement('filterToggle'),
  search: getRequiredElement('searchInput'),
  count: getRequiredElement('collectionCount'),
  title: getRequiredElement('collectionTitle'),
  inspector: getRequiredElement('inspector'),
  backdrop: getRequiredElement('mobileBackdrop'),
  inspectorState: getRequiredElement('inspectorState'),
  inspectorPin: getRequiredElement('inspectorPin'),
  inspectorCollapse: getRequiredElement('inspectorCollapse'),
  inspectorClose: getRequiredElement('inspectorClose'),
  selectedName: getRequiredElement('selectedName'),
  selectedCategory: getRequiredElement('selectedCategory'),
  selectedDescription: getRequiredElement('selectedDescription'),
  selectedPreview: getRequiredElement('selectedPreview'),
  codeOutput: getRequiredElement('codeOutput'),
  codeLanguage: getRequiredElement('codeLanguage'),
  codeTabs: getRequiredElement('codeTabs'),
  largePreview: getRequiredElement('largePreview'),
  largePreviewInner: getRequiredElement('largePreviewInner'),
  previewLabel: getRequiredElement('previewLabel'),
  previewThemeSwitcher: getRequiredElement('previewThemeSwitcher'),
  sizeControl: getRequiredElement('sizeControl'),
  sizeValue: getRequiredElement('sizeValue'),
  speedControl: getRequiredElement('speedControl'),
  accentControl: getRequiredElement('accentControl'),
  labelToggle: getRequiredElement('labelToggle'),
  loaderControlsSection: getRequiredElement('loaderControlsSection'),
  loaderControls: getRequiredElement('loaderControls'),
  fullPreview: getRequiredElement('fullPreview'),
  fullPreviewLoader: getRequiredElement('fullPreviewLoader'),
  fullPreviewTitle: getRequiredElement('fullPreviewTitle'),
  fullPreviewButton: getRequiredElement('fullPreviewButton'),
  fullPreviewClose: getRequiredElement('fullPreviewClose'),
  fullPreviewMotionToggle: getRequiredElement('fullPreviewMotionToggle'),
  copyCodeButton: getRequiredElement('copyCodeButton'),
  copyAllButton: getRequiredElement('copyAllButton'),
  toast: getRequiredElement('toast'),
  toastMessage: getRequiredElement('toastMessage'),
  motionToggle: getRequiredElement('motionToggle'),
  paletteControl: getRequiredElement('paletteControl'),
  paletteToggle: getRequiredElement('paletteToggle'),
  accentPalette: getRequiredElement('accentPalette'),
  accentSwatches: getRequiredElement('accentSwatches'),
  globalAccentControl: getRequiredElement('globalAccentControl'),
  accentValue: getRequiredElement('accentValue'),
  accentReset: getRequiredElement('accentReset'),
  themeToggle: getRequiredElement('themeToggle'),
  liveSummary: getRequiredElement('liveSummary')
};

mountUiIcons();
installLoaderStyles(loaders);
createEventController({ refs, loaders, categories, state }).initialize();
