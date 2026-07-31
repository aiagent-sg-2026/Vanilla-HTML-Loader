import { applyLoaderControls } from '../loader-controls.js';

export function updatePreviewSettings(refs) {
  const scale = Number(refs.sizeControl.value) / 100;
  const speed = refs.speedControl.value;
  const accent = refs.accentControl.value;

  refs.sizeValue.textContent = `${refs.sizeControl.value}%`;
  refs.largePreviewInner.style.transform = `scale(${scale})`;
  refs.largePreview.style.setProperty('--loader-speed', `${speed}s`);
  refs.largePreview.style.setProperty('--loader-accent', accent);
  refs.previewLabel.hidden = !refs.labelToggle.checked;
  refs.fullPreviewLoader.style.setProperty('--loader-speed', `${speed}s`);
  refs.fullPreviewLoader.style.setProperty('--loader-accent', accent);
  refs.fullPreviewLoader.style.transform = `scale(${scale})`;
  refs.fullPreviewTitle.hidden = !refs.labelToggle.checked;
}

export function openMobileInspector(refs) {
  refs.inspector.classList.add('is-open');
  refs.backdrop.classList.add('is-visible');
  document.body.style.overflow = 'hidden';
}

export function closeMobileInspector(refs) {
  refs.inspector.classList.remove('is-open');
  refs.backdrop.classList.remove('is-visible');
  document.body.style.overflow = '';
}

export function openFullPreview(refs, loader, state) {
  refs.fullPreviewLoader.innerHTML = loader.markup;
  applyLoaderControls(loader, refs.fullPreviewLoader, state);
  refs.fullPreviewTitle.textContent = 'Loading data…';
  updatePreviewSettings(refs);
  refs.fullPreview.hidden = false;
  document.body.style.overflow = 'hidden';
  refs.fullPreviewClose.focus();
}

export function closeFullPreview(refs) {
  refs.fullPreview.hidden = true;
  document.body.style.overflow = '';
  refs.fullPreviewButton.focus();
}

let toastTimer;
export function showToast(refs, message) {
  clearTimeout(toastTimer);
  refs.toastMessage.textContent = message;
  refs.toast.classList.add('is-visible');
  toastTimer = setTimeout(() => refs.toast.classList.remove('is-visible'), 1800);
}

export async function copyText(refs, text, message) {
  try {
    await navigator.clipboard.writeText(text);
  } catch {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
  }

  showToast(refs, message);
}
