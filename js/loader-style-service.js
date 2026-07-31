import { PREVIEW_BASE_CSS } from '../loaders/shared.js';

const STYLE_ELEMENT_ID = 'loader-component-styles';

export function installLoaderStyles(loaders) {
  document.getElementById(STYLE_ELEMENT_ID)?.remove();

  const style = document.createElement('style');
  style.id = STYLE_ELEMENT_ID;
  style.textContent = [PREVIEW_BASE_CSS, ...loaders.map(loader => loader.css)].join('\n\n');
  document.head.append(style);
}
