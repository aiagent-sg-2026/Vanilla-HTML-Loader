import { escapeHtml, getSnippet } from '../snippet-service.js';
import { renderLoaderControls } from '../loader-controls.js';

export function renderInspector(refs, loader, state) {
  refs.selectedName.textContent = loader.name;
  refs.selectedCategory.textContent = loader.category;
  refs.selectedDescription.textContent = loader.description;
  refs.selectedPreview.innerHTML = loader.markup;
  refs.fullPreviewLoader.innerHTML = loader.markup;
  renderLoaderControls(refs, loader, state);
  updateCode(refs, loader, state);
}

export function updateCode(refs, loader, state) {
  refs.codeOutput.innerHTML = escapeHtml(getSnippet(loader, state.activeCodeTab, state.accent));
  refs.codeLanguage.textContent = ({
    html: 'HTML',
    css: 'CSS',
    js: 'JavaScript',
    all: 'Complete snippet'
  })[state.activeCodeTab];
}
