import { loadShellPreferences, saveShellPreferences } from '../storage.js';

const PINNED_BREAKPOINT = 1200;
const LARGE_DESKTOP_BREAKPOINT = 1440;

function getViewportMode() {
  if (window.innerWidth >= LARGE_DESKTOP_BREAKPOINT) return 'large';
  if (window.innerWidth >= PINNED_BREAKPOINT) return 'desktop';
  return 'overlay';
}

function getDefaultShellState() {
  const mode = getViewportMode();

  if (mode === 'large') {
    return {
      sidebarCollapsed: false,
      inspectorOpen: true,
      inspectorPinned: true,
      inspectorCollapsed: false
    };
  }

  if (mode === 'desktop') {
    return {
      sidebarCollapsed: true,
      inspectorOpen: false,
      inspectorPinned: false,
      inspectorCollapsed: false
    };
  }

  return {
    sidebarCollapsed: false,
    inspectorOpen: false,
    inspectorPinned: false,
    inspectorCollapsed: false
  };
}

export function createShellController({ refs, state }) {
  let lastPanelTrigger = null;
  let resizeTimer;

  const isOverlayViewport = () => getViewportMode() === 'overlay';
  const isInspectorOverlay = () => isOverlayViewport() || !state.shell.inspectorPinned;

  function updateControlContent() {
    const overlayViewport = isOverlayViewport();
    const sidebarCollapsed = !overlayViewport && state.shell.sidebarCollapsed;
    const inspectorOverlay = isInspectorOverlay();
    const inspectorCollapsed = !inspectorOverlay && state.shell.inspectorCollapsed;

    refs.sidebarToggle.setAttribute('aria-label', overlayViewport ? 'Close navigation' : sidebarCollapsed ? 'Expand sidebar' : 'Collapse sidebar');
    refs.sidebarToggle.title = refs.sidebarToggle.getAttribute('aria-label');
    refs.sidebarToggle.setAttribute('aria-expanded', String(overlayViewport ? state.shell.sidebarOpen : !sidebarCollapsed));
    refs.mobileBrandButton.setAttribute('aria-expanded', String(state.shell.sidebarOpen));
    refs.mobileBrandButton.setAttribute('aria-label', state.shell.sidebarOpen ? 'Close navigation' : 'Open navigation');
    refs.mobileBrandButton.title = refs.mobileBrandButton.getAttribute('aria-label');

    refs.inspectorPin.setAttribute('aria-pressed', String(state.shell.inspectorPinned));
    refs.inspectorPin.setAttribute('aria-label', state.shell.inspectorPinned ? 'Unpin inspector' : 'Pin inspector');
    refs.inspectorPin.title = refs.inspectorPin.getAttribute('aria-label');

    refs.inspectorCollapse.setAttribute('aria-expanded', String(!inspectorCollapsed));
    refs.inspectorCollapse.setAttribute('aria-label', inspectorCollapsed ? 'Expand inspector' : 'Collapse inspector');
    refs.inspectorCollapse.title = refs.inspectorCollapse.getAttribute('aria-label');

    refs.inspectorState.textContent = inspectorOverlay ? 'Overlay' : inspectorCollapsed ? 'Collapsed' : 'Pinned';
    refs.inspector.setAttribute('aria-hidden', String(!state.shell.inspectorOpen));
  }

  function apply({ persist = false } = {}) {
    const overlayViewport = isOverlayViewport();
    const inspectorOverlay = isInspectorOverlay();
    const inspectorCollapsed = !inspectorOverlay && state.shell.inspectorCollapsed;
    const inspectorClosed = !state.shell.inspectorOpen;

    refs.appShell.classList.toggle('sidebar-collapsed', !overlayViewport && state.shell.sidebarCollapsed);
    refs.appShell.classList.toggle('sidebar-expanded', !overlayViewport && !state.shell.sidebarCollapsed);
    refs.appShell.classList.toggle('inspector-overlay', inspectorOverlay);
    refs.appShell.classList.toggle('inspector-collapsed', !inspectorClosed && inspectorCollapsed);
    refs.appShell.classList.toggle('inspector-closed', inspectorClosed);

    refs.sidebar.classList.toggle('is-open', overlayViewport && state.shell.sidebarOpen);
    refs.inspector.classList.toggle('is-open', state.shell.inspectorOpen && inspectorOverlay);

    const panelOpen = overlayViewport && state.shell.sidebarOpen
      || inspectorOverlay && state.shell.inspectorOpen;

    refs.backdrop.classList.toggle('is-visible', panelOpen);
    refs.backdrop.setAttribute('aria-hidden', String(!panelOpen));
    document.body.classList.toggle('panel-open', panelOpen);

    updateControlContent();

    if (persist) saveShellPreferences(state.shell);
  }

  function initialize() {
    const stored = loadShellPreferences();
    const defaults = getDefaultShellState();

    state.shell = {
      ...state.shell,
      ...defaults,
      ...(stored || {}),
      sidebarOpen: false
    };

    if (isOverlayViewport()) {
      state.shell.inspectorCollapsed = false;
    }

    apply();
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(() => {
        state.shell.sidebarOpen = false;
        if (isOverlayViewport()) state.shell.inspectorCollapsed = false;
        apply();
      }, 120);
    });
  }

  function toggleSidebar(trigger = refs.sidebarToggle) {
    lastPanelTrigger = trigger;

    if (isOverlayViewport()) {
      state.shell.sidebarOpen = !state.shell.sidebarOpen;
      if (state.shell.sidebarOpen) state.shell.inspectorOpen = false;
      apply();
      if (state.shell.sidebarOpen) refs.sidebarToggle.focus();
      return;
    }

    state.shell.sidebarCollapsed = !state.shell.sidebarCollapsed;
    apply({ persist: true });
  }

  function openSidebar(trigger = refs.mobileMenuButton) {
    if (!isOverlayViewport()) return;
    lastPanelTrigger = trigger;
    state.shell.sidebarOpen = true;
    state.shell.inspectorOpen = false;
    apply();
    refs.sidebarToggle.focus();
  }

  function closeSidebar({ restoreFocus = true } = {}) {
    if (!state.shell.sidebarOpen) return false;
    state.shell.sidebarOpen = false;
    apply();
    if (restoreFocus && lastPanelTrigger) lastPanelTrigger.focus();
    return true;
  }

  function openInspector(trigger = null) {
    lastPanelTrigger = trigger || lastPanelTrigger;
    state.shell.inspectorOpen = true;
    if (isOverlayViewport()) state.shell.sidebarOpen = false;
    apply({ persist: !isOverlayViewport() });

    if (isInspectorOverlay()) {
      window.setTimeout(() => refs.inspectorClose.focus(), 0);
    }
  }

  function closeInspector({ restoreFocus = true } = {}) {
    if (!state.shell.inspectorOpen) return false;
    state.shell.inspectorOpen = false;
    state.shell.inspectorCollapsed = false;
    apply({ persist: !isOverlayViewport() });
    if (restoreFocus && lastPanelTrigger) lastPanelTrigger.focus();
    return true;
  }

  function toggleInspectorPin() {
    if (isOverlayViewport()) return;
    state.shell.inspectorPinned = !state.shell.inspectorPinned;
    state.shell.inspectorOpen = true;
    state.shell.inspectorCollapsed = false;
    apply({ persist: true });
  }

  function toggleInspectorCollapse() {
    if (isInspectorOverlay()) {
      state.shell.inspectorOpen ? closeInspector() : openInspector(refs.inspectorCollapse);
      return;
    }

    state.shell.inspectorOpen = true;
    state.shell.inspectorCollapsed = !state.shell.inspectorCollapsed;
    apply({ persist: true });
  }

  function closeActiveOverlay() {
    if (closeSidebar()) return true;
    if (isInspectorOverlay() && closeInspector()) return true;
    return false;
  }

  return {
    initialize,
    apply,
    toggleSidebar,
    openSidebar,
    closeSidebar,
    openInspector,
    closeInspector,
    toggleInspectorPin,
    toggleInspectorCollapse,
    closeActiveOverlay
  };
}
