import { getCurrentCollection, renderCollection, renderFilters } from './collection-view.js';
import { renderInspector, updateCode } from './inspector-view.js';
import {
  closeFullPreview,
  copyText,
  openFullPreview,
  updatePreviewSettings
} from './preview-view.js';
import { createShellController } from './shell-controller.js';
import { createAccentController } from './accent-controller.js';
import { createMotionController } from './motion-controller.js';
import { createVisibilityController } from './visibility-controller.js';
import { createInfiniteScrollController } from './infinite-scroll-controller.js';
import {
  applyLoaderControls,
  setLoaderControlValue,
  updateLoaderControlOutput
} from '../loader-controls.js';
import { getCombinedSnippet, getSnippet } from '../snippet-service.js';
import {
  loadTheme,
  saveCollectionLayout,
  saveFavorites,
  saveRecent,
  saveTheme
} from '../storage.js';

export function createEventController({ refs, loaders, categories, state }) {
  const shell = createShellController({ refs, state });
  const selectedLoader = () => loaders.find(loader => loader.id === state.selectedId) || loaders[0];
  const visibility = createVisibilityController({ refs, state, totalCount: loaders.length });
  let infiniteScroll = null;

  function renderCards() {
    renderCollection(refs, loaders, state);
    visibility.refresh();
    infiniteScroll?.refresh();
  }

  function resetCollectionWindow() {
    state.collection.visibleLimit = state.collection.pageSize;
  }

  function loadNextCollectionPage() {
    const totalCount = getCurrentCollection(loaders, state).length;
    const previousLimit = Math.min(state.collection.visibleLimit, totalCount);
    state.collection.visibleLimit = Math.min(
      totalCount,
      previousLimit + state.collection.pageSize
    );
    renderCards();
    return Math.max(0, state.collection.visibleLimit - previousLimit);
  }

  function hasMoreCollectionItems() {
    return getCurrentCollection(loaders, state).length > state.collection.visibleLimit;
  }

  function applyLayoutMode() {
    refs.grid.dataset.layout = state.layoutMode;
    refs.layoutSwitcher.querySelectorAll('[data-layout-mode]').forEach(button => {
      const isActive = button.dataset.layoutMode === state.layoutMode;
      button.classList.toggle('is-active', isActive);
      button.setAttribute('aria-pressed', String(isActive));
    });
  }

  infiniteScroll = createInfiniteScrollController({
    refs,
    hasMore: hasMoreCollectionItems,
    loadMore: loadNextCollectionPage
  });

  const accent = createAccentController({
    refs,
    state,
    onAccentChange: () => updateCode(refs, selectedLoader(), state)
  });
  const motion = createMotionController({
    refs,
    state,
    onChange: () => {
      renderCards();
      visibility.syncSummary();
    }
  });

  function renderAll() {
    renderFilters(refs, categories, state);
    renderCards();
    renderInspector(refs, selectedLoader(), state);
  }

  function rememberRecent(id) {
    state.recent = [id, ...state.recent.filter(item => item !== id)].slice(0, 8);
    saveRecent(state.recent);
  }

  function selectLoader(id, openInspector = true, trigger = null) {
    if (!loaders.some(loader => loader.id === id)) return;
    state.selectedId = id;
    rememberRecent(id);
    renderCards();
    renderInspector(refs, selectedLoader(), state);

    if (openInspector) {
      const currentTrigger = refs.grid.querySelector(`[data-select-id="${id}"]`) || trigger;
      shell.openInspector(currentTrigger);
    }
  }

  function handleLoaderControl(event) {
    const control = event.target.closest('[data-loader-control-key]');
    if (!control) return;
    const loader = selectedLoader();
    const key = control.dataset.loaderControlKey;
    setLoaderControlValue(loader, state, key, control.value);
    updateLoaderControlOutput(refs, loader, key, control.value);
    applyLoaderControls(loader, refs.selectedPreview, state);
    applyLoaderControls(loader, refs.fullPreviewLoader, state);
  }

  function bindEvents() {
    refs.sidebarToggle.addEventListener('click', event => shell.toggleSidebar(event.currentTarget));
    refs.mobileBrandButton.addEventListener('click', event => shell.openSidebar(event.currentTarget));
    refs.inspectorPin.addEventListener('click', () => shell.toggleInspectorPin());
    refs.inspectorCollapse.addEventListener('click', () => shell.toggleInspectorCollapse());
    refs.inspectorClose.addEventListener('click', () => shell.closeInspector());
    refs.backdrop.addEventListener('click', () => shell.closeActiveOverlay());
    refs.filterToggle.addEventListener('click', () => {
      const expanded = refs.filterToggle.getAttribute('aria-expanded') === 'true';
      refs.filterToggle.setAttribute('aria-expanded', String(!expanded));
      refs.filterRow.classList.toggle('is-expanded', !expanded);
    });

    refs.filterRow.addEventListener('click', event => {
      const button = event.target.closest('[data-category]');
      if (!button) return;
      state.category = button.dataset.category;
      resetCollectionWindow();
      renderFilters(refs, categories, state);
      renderCards();
      infiniteScroll.reset();
    });

    refs.search.addEventListener('input', event => {
      state.query = event.target.value.trim();
      resetCollectionWindow();
      renderCards();
      infiniteScroll.reset();
    });

    refs.loadMoreButton.addEventListener('click', () => {
      const addedCount = loadNextCollectionPage();
      infiniteScroll.announceManualLoad(addedCount);
    });

    refs.layoutSwitcher.addEventListener('click', event => {
      const button = event.target.closest('[data-layout-mode]');
      if (!button) return;
      const layoutMode = button.dataset.layoutMode === 'grid' ? 'grid' : 'masonry';
      if (layoutMode === state.layoutMode) return;
      state.layoutMode = layoutMode;
      saveCollectionLayout(layoutMode);
      applyLayoutMode();
      visibility.refresh();
      infiniteScroll.refresh();
    });

    refs.grid.addEventListener('click', event => {
      const favorite = event.target.closest('[data-favorite-id]');
      if (favorite) {
        const id = favorite.dataset.favoriteId;
        state.favorites.has(id) ? state.favorites.delete(id) : state.favorites.add(id);
        saveFavorites(state.favorites);
        renderCards();
        return;
      }

      const preview = event.target.closest('[data-preview-id]');
      if (preview) {
        selectLoader(preview.dataset.previewId, false, preview);
        openFullPreview(refs, selectedLoader(), state);
        return;
      }

      const select = event.target.closest('[data-select-id]');
      if (select) {
        selectLoader(select.dataset.selectId, true, select);
        return;
      }

      const card = event.target.closest('[data-loader-id]');
      if (card) selectLoader(card.dataset.loaderId, true, card);
    });

    document.querySelectorAll('[data-nav]').forEach(button => {
      button.addEventListener('click', () => {
        document.querySelectorAll('[data-nav]').forEach(item => item.classList.remove('is-active'));
        button.classList.add('is-active');
        state.view = button.dataset.nav;
        state.category = 'All';
        state.query = '';
        refs.search.value = '';
        resetCollectionWindow();
        renderFilters(refs, categories, state);
        renderCards();
        infiniteScroll.reset();
        shell.closeSidebar({ restoreFocus: false });
      });
    });

    refs.codeTabs.addEventListener('click', event => {
      const tab = event.target.closest('[data-code-tab]');
      if (!tab) return;
      state.activeCodeTab = tab.dataset.codeTab;
      document.querySelectorAll('[data-code-tab]').forEach(item => item.classList.toggle('is-active', item === tab));
      updateCode(refs, selectedLoader(), state);
    });

    refs.previewThemeSwitcher.addEventListener('click', event => {
      const option = event.target.closest('[data-theme-value]');
      if (!option) return;
      document.querySelectorAll('[data-theme-value]').forEach(item => item.classList.toggle('is-active', item === option));
      refs.largePreview.dataset.previewTheme = option.dataset.themeValue;
    });

    [refs.sizeControl, refs.speedControl, refs.labelToggle].forEach(control => {
      control.addEventListener('input', () => updatePreviewSettings(refs));
      control.addEventListener('change', () => updatePreviewSettings(refs));
    });

    refs.loaderControls.addEventListener('input', handleLoaderControl);
    refs.loaderControls.addEventListener('change', handleLoaderControl);

    refs.copyCodeButton.addEventListener('click', () => {
      copyText(refs, getSnippet(selectedLoader(), state.activeCodeTab, state.accent), `${refs.codeLanguage.textContent} copied`);
    });

    refs.copyAllButton.addEventListener('click', () => {
      copyText(refs, getCombinedSnippet(selectedLoader(), state.accent), `${selectedLoader().name} snippet copied`);
    });

    refs.fullPreviewButton.addEventListener('click', () => openFullPreview(refs, selectedLoader(), state));
    refs.fullPreviewClose.addEventListener('click', () => closeFullPreview(refs));
    refs.fullPreview.addEventListener('click', event => {
      if (event.target === refs.fullPreview) closeFullPreview(refs);
    });

    refs.themeToggle.addEventListener('click', () => {
      const nextTheme = document.body.dataset.theme === 'dark' ? 'light' : 'dark';
      document.body.dataset.theme = nextTheme;
      saveTheme(nextTheme);
    });

    refs.motionToggle.addEventListener('click', () => motion.toggle());
    refs.fullPreviewMotionToggle.addEventListener('click', () => motion.toggle());

    document.addEventListener('keydown', event => {
      if (event.key !== 'Escape') return;
      if (accent.handleEscape()) return;
      if (!refs.fullPreview.hidden) closeFullPreview(refs);
      else shell.closeActiveOverlay();
    });
  }

  function initialize() {
    document.body.dataset.theme = loadTheme();
    shell.initialize();
    accent.initialize();
    motion.initialize();
    applyLayoutMode();
    renderAll();
    updatePreviewSettings(refs);
    visibility.initialize();
    bindEvents();
    infiniteScroll.initialize();
  }

  return { initialize, selectLoader };
}
