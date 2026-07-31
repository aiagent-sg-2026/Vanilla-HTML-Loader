import { saveAccent } from '../storage.js';
import { updatePreviewSettings } from './preview-view.js';

const DEFAULT_ACCENT = '#3B63F3';

function normalizeAccent(value) {
  return /^#[0-9a-f]{6}$/i.test(value || '') ? value.toUpperCase() : DEFAULT_ACCENT;
}

function getContrastColour(hex) {
  const value = hex.slice(1);
  const channels = [0, 2, 4].map(index => parseInt(value.slice(index, index + 2), 16) / 255);
  const luminance = channels
    .map(channel => channel <= .03928 ? channel / 12.92 : ((channel + .055) / 1.055) ** 2.4)
    .reduce((total, channel, index) => total + channel * [.2126, .7152, .0722][index], 0);
  return luminance > .48 ? '#111827' : '#FFFFFF';
}

export function createAccentController({ refs, state, onAccentChange }) {
  function setPaletteOpen(open, { restoreFocus = false } = {}) {
    refs.accentPalette.hidden = !open;
    refs.paletteToggle.setAttribute('aria-expanded', String(open));
    if (!open && restoreFocus) refs.paletteToggle.focus();
  }

  function updateControls(accent) {
    refs.accentControl.value = accent;
    refs.globalAccentControl.value = accent;
    refs.accentValue.textContent = accent;
    refs.accentSwatches.querySelectorAll('[data-accent]').forEach(swatch => {
      const active = swatch.dataset.accent.toUpperCase() === accent;
      swatch.classList.toggle('is-active', active);
      swatch.setAttribute('aria-pressed', String(active));
    });
  }

  function applyAccent(value, { persist = true, notify = true } = {}) {
    const accent = normalizeAccent(value);
    state.accent = accent;
    document.documentElement.style.setProperty('--user-accent', accent);
    document.documentElement.style.setProperty('--primary-contrast', getContrastColour(accent));
    updateControls(accent);
    updatePreviewSettings(refs);
    if (persist) saveAccent(accent);
    if (notify) onAccentChange?.(accent);
  }

  function bindEvents() {
    refs.paletteToggle.addEventListener('click', () => {
      setPaletteOpen(refs.accentPalette.hidden);
    });

    refs.accentSwatches.addEventListener('click', event => {
      const swatch = event.target.closest('[data-accent]');
      if (!swatch) return;
      applyAccent(swatch.dataset.accent);
    });

    refs.globalAccentControl.addEventListener('input', event => applyAccent(event.target.value));
    refs.accentControl.addEventListener('input', event => applyAccent(event.target.value));
    refs.accentControl.addEventListener('change', event => applyAccent(event.target.value));
    refs.accentReset.addEventListener('click', () => applyAccent(DEFAULT_ACCENT));

    document.addEventListener('click', event => {
      if (refs.paletteControl.contains(event.target)) return;
      setPaletteOpen(false);
    });
  }

  function handleEscape() {
    if (refs.accentPalette.hidden) return false;
    setPaletteOpen(false, { restoreFocus: true });
    return true;
  }

  function initialize() {
    applyAccent(state.accent, { persist: false, notify: false });
    setPaletteOpen(false);
    bindEvents();
  }

  return { initialize, applyAccent, handleEscape, close: () => setPaletteOpen(false) };
}
