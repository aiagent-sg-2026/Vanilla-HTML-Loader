export function createMotionController({ refs, state, onChange }) {
  function syncButton() {
    const label = state.paused ? 'Resume motion' : 'Pause motion';
    const text = state.paused ? '▶ Resume motion' : 'Ⅱ Pause motion';

    [refs.motionToggle, refs.fullPreviewMotionToggle].forEach(button => {
      button.setAttribute('aria-pressed', String(state.paused));
      button.setAttribute('aria-label', label);
      button.title = label;
      button.textContent = text;
    });
  }

  function apply(paused) {
    state.paused = paused;
    document.body.classList.toggle('motion-paused', paused);
    syncButton();
    onChange?.();
  }

  function toggle() {
    apply(!state.paused);
  }

  function initialize() {
    apply(false);
  }

  return { initialize, toggle };
}
