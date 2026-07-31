import {
  getCurrentCollection,
  renderCollection,
  renderFilters,
  updateFavoriteButton,
  updateSelectionHighlight
} from './collection-view.js';
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

const SEARCH_DEBOUNCE_MS = 150;
const LOADER_QUERY_PARAM = 'loader';

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

  /**
   * Keep ?loader= in sync with the selection so the address bar is always a
   * shareable link to what is on screen. replaceState, not pushState: browsing
   * a gallery should not bury the Back button under one entry per card.
   */
  function syncLocation(id) {
    const url = new URL(window.location.href);
    if (url.searchParams.get(LOADER_QUERY_PARAM) === id) return;
    url.searchParams.set(LOADER_QUERY_PARAM, id);
    window.history.replaceState(null, '', url);
  }

  /** Grow the pagination window in whole pages until the target card renders. */
  function revealLoader(id) {
    const index = getCurrentCollection(loaders, state).findIndex(loader => loader.id === id);
    if (index < 0) return false;

    const pageSize = state.collection.pageSize;
    const requiredLimit = (Math.floor(index / pageSize) + 1) * pageSize;
    if (requiredLimit > state.collection.visibleLimit) {
      state.collection.visibleLimit = requiredLimit;
    }
    return true;
  }

  function applyDeepLink() {
    const requestedId = new URLSearchParams(window.location.search).get(LOADER_QUERY_PARAM);
    if (!requestedId || !loaders.some(loader => loader.id === requestedId)) return false;

    // A shared link points at one loader, so start from an unfiltered library
    // view; otherwise a stale category or query could hide the target.
    state.view = 'library';
    state.category = 'All';
    state.query = '';
    refs.search.value = '';
    state.selectedId = requestedId;
    revealLoader(requestedId);
    return true;
  }

  function scrollToSelectedCard() {
    const card = refs.grid.querySelector(`[data-loader-id="${CSS.escape(state.selectedId)}"]`);
    if (!card) return;
    card.scrollIntoView({ block: 'center', behavior: 'auto' });
  }

  function selectLoader(id, openInspector = true, trigger = null) {
    if (!loaders.some(loader => loader.id === id)) return;
    const previousId = state.selectedId;
    state.selectedId = id;
    rememberRecent(id);

    // The Recently viewed collection is ordered by state.recent, which just
    // changed, so it needs a real re-render. Every other view keeps the same
    // cards in the same order — only the highlight moves.
    if (state.view === 'recent') renderCards();
    else updateSelectionHighlight(refs, previousId, id);

    renderInspector(refs, selectedLoader(), state);
    syncLocation(id);

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

    let searchTimer = 0;
    refs.search.addEventListener('input', event => {
      const query = event.target.value.trim();
      window.clearTimeout(searchTimer);
      searchTimer = window.setTimeout(() => {
        if (query === state.query) return;
        state.query = query;
        resetCollectionWindow();
        renderCards();
        infiniteScroll.reset();
      }, SEARCH_DEBOUNCE_MS);
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
        const isFavorite = !state.favorites.has(id);
        isFavorite ? state.favorites.add(id) : state.favorites.delete(id);
        saveFavorites(state.favorites);

        // Only the Favorites view changes membership when a star is toggled;
        // elsewhere repaint the single star and leave the animations running.
        if (state.view === 'favorites') renderCards();
        else updateFavoriteButton(refs, id, isFavorite);
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

    // Resolve ?loader= before the first render so the target card is inside the
    // pagination window instead of appearing after a second pass.
    const isDeepLink = applyDeepLink();

    renderAll();
    updatePreviewSettings(refs);
    visibility.initialize();
    bindEvents();
    infiniteScroll.initialize();

    if (isDeepLink) {
      scrollToSelectedCard();
      shell.openInspector(refs.grid.querySelector(`[data-select-id="${CSS.escape(state.selectedId)}"]`));
    }
  }

  return { initialize, selectLoader };
}
