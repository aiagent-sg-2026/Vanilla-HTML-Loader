export function createInfiniteScrollController({ refs, hasMore, loadMore }) {
  let observer = null;
  let loading = false;
  let userHasScrolled = false;
  let scrollDetectionReady = false;
  let reconnectTimer = 0;
  let lastWindowScroll = window.scrollY;
  let lastMainScroll = refs.main.scrollTop;

  const supportsObserver = 'IntersectionObserver' in window;

  function setBusy(isBusy) {
    refs.grid.setAttribute('aria-busy', String(isBusy));
    refs.pagination.classList.toggle('is-auto-loading', isBusy);
  }

  function setStatus(message) {
    refs.autoLoadStatus.textContent = message;
  }

  function disconnect() {
    window.clearTimeout(reconnectTimer);
    observer?.disconnect();
  }

  function refresh() {
    disconnect();
    const moreAvailable = hasMore();
    refs.sentinel.hidden = !moreAvailable;

    if (!moreAvailable) {
      setStatus('All matching loaders are shown.');
      return;
    }

    if (!supportsObserver) {
      setStatus('Automatic loading is unavailable. Use the Load more button.');
      return;
    }

    if (loading) return;

    if (!userHasScrolled) {
      setStatus('Scroll down to load more automatically.');
      return;
    }

    observer ??= new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: '650px 0px 420px',
      threshold: 0.01
    });
    observer.observe(refs.sentinel);
  }

  function finishLoading(addedCount) {
    requestAnimationFrame(() => {
      setBusy(false);
      loading = false;
      setStatus(addedCount > 0
        ? `Loaded ${addedCount} more loaders automatically.`
        : 'All matching loaders are shown.');
      reconnectTimer = window.setTimeout(refresh, 280);
    });
  }

  function triggerAutoLoad() {
    if (!userHasScrolled || loading || !hasMore()) return;
    loading = true;
    observer?.unobserve(refs.sentinel);
    setBusy(true);
    setStatus('Loading more loaders…');

    const addedCount = loadMore('auto');
    finishLoading(addedCount);
  }

  function handleIntersection(entries) {
    if (entries.some(entry => entry.isIntersecting)) triggerAutoLoad();
  }

  function noteUserScroll() {
    if (userHasScrolled) return;
    userHasScrolled = true;
    refresh();
  }

  function handleScrollPosition() {
    const currentWindowScroll = window.scrollY;
    const currentMainScroll = refs.main.scrollTop;
    const moved = Math.abs(currentWindowScroll - lastWindowScroll) > 8
      || Math.abs(currentMainScroll - lastMainScroll) > 8;

    lastWindowScroll = currentWindowScroll;
    lastMainScroll = currentMainScroll;
    if (scrollDetectionReady && moved && !loading) noteUserScroll();
  }

  function handleNavigationKey(event) {
    if (['PageDown', 'End', 'ArrowDown', ' '].includes(event.key)) noteUserScroll();
  }

  function announceManualLoad(addedCount) {
    setBusy(false);
    setStatus(addedCount > 0
      ? `Loaded ${addedCount} more loaders.`
      : 'All matching loaders are shown.');
    refresh();
  }

  function reset() {
    disconnect();
    loading = false;
    userHasScrolled = false;
    setBusy(false);
    setStatus('Scroll down to load more automatically.');
    lastWindowScroll = window.scrollY;
    lastMainScroll = refs.main.scrollTop;
    refresh();
  }

  function initialize() {
    refs.grid.setAttribute('aria-busy', 'false');
    refs.autoLoadStatus.textContent = supportsObserver
      ? 'Scroll down to load more automatically.'
      : 'Automatic loading is unavailable. Use the Load more button.';

    window.addEventListener('wheel', noteUserScroll, { passive: true });
    window.addEventListener('touchmove', noteUserScroll, { passive: true });
    window.addEventListener('scroll', handleScrollPosition, { passive: true });
    refs.main.addEventListener('scroll', handleScrollPosition, { passive: true });
    document.addEventListener('keydown', handleNavigationKey);

    window.setTimeout(() => {
      scrollDetectionReady = true;
      lastWindowScroll = window.scrollY;
      lastMainScroll = refs.main.scrollTop;
    }, 450);

    refresh();
  }

  return {
    initialize,
    refresh,
    reset,
    announceManualLoad,
    noteUserScroll
  };
}
