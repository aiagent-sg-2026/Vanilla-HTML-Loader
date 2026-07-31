const ICONS = Object.freeze({
  pin: `
    <svg class="ui-icon ui-icon-pin" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M9 3.5h6l-.7 5.1 3.2 3.2v1.7H13l-1 7-1-7H6.5v-1.7l3.2-3.2L9 3.5Z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,
  collapse: `
    <svg class="ui-icon ui-icon-collapse" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="m15 6-6 6 6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,
  close: `
    <svg class="ui-icon ui-icon-close" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M6 6l12 12M18 6 6 18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
    </svg>
  `
});

export function mountUiIcons(root = document) {
  root.querySelectorAll('[data-ui-icon]').forEach(slot => {
    const icon = ICONS[slot.dataset.uiIcon];
    if (!icon) {
      console.warn(`Unknown UI icon: ${slot.dataset.uiIcon}`);
      return;
    }

    slot.innerHTML = icon.trim();
  });
}
