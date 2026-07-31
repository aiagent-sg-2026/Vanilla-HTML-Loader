export function createVisibilityController({ refs, state, totalCount }) {
  let observer = null;
  let initialized = false;

  function syncSummary() {
    const visibleCount = refs.grid.querySelectorAll('.loader-card:not(.is-offscreen)').length;
    if (document.hidden) {
      refs.liveSummary.textContent = `${totalCount} animations paused while tab is hidden`;
    } else if (state.paused) {
      refs.liveSummary.textContent = `${totalCount} animations paused`;
    } else {
      refs.liveSummary.textContent = `${totalCount} animations · ${visibleCount} visible active`;
    }
  }

  function handleEntries(entries) {
    entries.forEach(entry => {
      entry.target.classList.toggle('is-offscreen', !entry.isIntersecting);
      entry.target.dataset.motionVisibility = entry.isIntersecting ? 'active' : 'paused';
    });
    syncSummary();
  }

  function refresh() {
    const cards = [...refs.grid.querySelectorAll('.loader-card')];
    if (!initialized) return;

    if (!observer) {
      cards.forEach(card => {
        card.classList.remove('is-offscreen');
        card.dataset.motionVisibility = 'active';
      });
      syncSummary();
      return;
    }

    observer.disconnect();
    cards.forEach(card => observer.observe(card));
    syncSummary();
  }

  function syncDocumentVisibility() {
    document.body.classList.toggle('page-hidden', document.hidden);
    syncSummary();
  }

  function initialize() {
    initialized = true;
    if ('IntersectionObserver' in window) {
      observer = new IntersectionObserver(handleEntries, {
        root: null,
        rootMargin: '180px 0px',
        threshold: 0.01
      });
    }
    document.addEventListener('visibilitychange', syncDocumentVisibility);
    syncDocumentVisibility();
    refresh();
  }

  return { initialize, refresh, syncSummary };
}
