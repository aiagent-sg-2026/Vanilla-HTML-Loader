export function getCurrentCollection(loaders, state) {
  let items = [...loaders];

  if (state.view === 'favorites') {
    items = items.filter(loader => state.favorites.has(loader.id));
  }

  if (state.view === 'recent') {
    items = state.recent
      .map(id => loaders.find(loader => loader.id === id))
      .filter(Boolean);
  }

  if (state.category !== 'All') {
    items = items.filter(loader => loader.category === state.category);
  }

  if (state.query) {
    const query = state.query.toLowerCase();
    items = items.filter(loader =>
      `${loader.name} ${loader.category} ${loader.description}`
        .toLowerCase()
        .includes(query)
    );
  }

  return items;
}

function createFilterButton(category, state) {
  const button = document.createElement('button');
  button.className = `filter-button ${state.category === category ? 'is-active' : ''}`.trim();
  button.type = 'button';
  button.dataset.category = category;
  button.textContent = category;
  return button;
}

export function renderFilters(refs, categories, state) {
  refs.filterRow.replaceChildren(...categories.map(category => createFilterButton(category, state)));
}

function parseTrustedMarkup(markup) {
  const documentFragment = document.createDocumentFragment();
  const parsed = new DOMParser().parseFromString(`<body>${markup}</body>`, 'text/html');
  [...parsed.body.childNodes].forEach(node => documentFragment.append(document.importNode(node, true)));
  return documentFragment;
}

function createCardPreviewFragment(loader) {
  const fragment = parseTrustedMarkup(loader.markup);
  const buttonPreviewIds = new Set([
    'button',
    'save-button-spinner',
    'button-loading-dots',
    'secondary-button-loader',
    'button-progress-fill',
    'icon-button-spinner'
  ]);
  if (!buttonPreviewIds.has(loader.id)) return fragment;

  const button = fragment.querySelector?.('button');
  if (!button) return fragment;

  const replacement = document.createElement('div');
  [...button.attributes].forEach(attribute => {
    if (!['type', 'disabled'].includes(attribute.name)) {
      replacement.setAttribute(attribute.name, attribute.value);
    }
  });
  while (button.firstChild) replacement.append(button.firstChild);
  button.replaceWith(replacement);
  return fragment;
}

function createFavoriteButton(loader, state) {
  const button = document.createElement('button');
  const isFavorite = state.favorites.has(loader.id);
  button.className = `favorite-button ${isFavorite ? 'is-active' : ''}`.trim();
  button.type = 'button';
  button.dataset.favoriteId = loader.id;
  button.setAttribute('aria-label', `${isFavorite ? 'Remove from' : 'Add to'} favorites`);
  button.textContent = isFavorite ? '★' : '☆';
  return button;
}

function createActionButton(label, className, dataName, loaderId) {
  const button = document.createElement('button');
  button.className = className;
  button.type = 'button';
  button.dataset[dataName] = loaderId;
  button.textContent = label;
  return button;
}

function stableLoaderVariant(loader) {
  return [...loader.id].reduce((total, character) => total + character.charCodeAt(0), 0);
}

function getCardSize(loader) {
  const variant = stableLoaderVariant(loader);

  if (loader.category === 'Skeletons') return variant % 2 === 0 ? 'xl' : 'lg';
  if (['Common UI', 'Application', 'Operations'].includes(loader.category)) {
    return variant % 2 === 0 ? 'lg' : 'md';
  }
  if (['Progress', 'Matrix', 'Holographic', 'CSS 3D'].includes(loader.category)) {
    return variant % 3 === 0 ? 'xl' : 'lg';
  }
  if (['SVG', 'Shapes', 'Text', 'Buttons'].includes(loader.category)) {
    return variant % 3 === 0 ? 'lg' : 'md';
  }
  return variant % 4 === 0 ? 'md' : 'sm';
}

function createLoaderCard(loader, state, index, totalCount) {
  const isSelected = loader.id === state.selectedId;
  const article = document.createElement('article');
  article.className = `loader-card ${isSelected ? 'is-selected' : ''}`.trim();
  article.dataset.loaderId = loader.id;
  article.dataset.collectionIndex = String(index);
  article.dataset.cardSize = getCardSize(loader);
  if (isSelected) article.setAttribute('aria-current', 'true');
  article.setAttribute('aria-posinset', String(index + 1));
  article.setAttribute('aria-setsize', String(totalCount));

  const preview = document.createElement('div');
  preview.className = 'card-preview';
  const stage = document.createElement('div');
  stage.className = 'preview-stage';
  stage.inert = true;
  stage.append(createCardPreviewFragment(loader));
  preview.append(stage);

  const body = document.createElement('div');
  body.className = 'card-body';

  const titleRow = document.createElement('div');
  titleRow.className = 'card-title-row';
  const titleGroup = document.createElement('div');
  const title = document.createElement('h3');
  title.className = 'card-title';
  title.textContent = loader.name;
  const category = document.createElement('div');
  category.className = 'card-category';
  category.textContent = `${loader.category} · ${loader.tech || 'Vanilla CSS'}`;
  titleGroup.append(title, category);
  titleRow.append(titleGroup, createFavoriteButton(loader, state));

  const footer = document.createElement('div');
  footer.className = 'card-footer';
  footer.append(
    createActionButton('Preview', 'button', 'previewId', loader.id),
    createActionButton('Customize', 'button primary', 'selectId', loader.id)
  );

  body.append(titleRow, footer);
  article.append(preview, body);
  return article;
}

function createEmptyState() {
  const empty = document.createElement('div');
  empty.className = 'empty-state';
  const title = document.createElement('strong');
  title.textContent = 'No loaders found.';
  empty.append(title, document.createElement('br'), document.createTextNode('Try another category or search term.'));
  return empty;
}

function renderPagination(refs, visibleCount, totalCount, state) {
  const remaining = Math.max(0, totalCount - visibleCount);
  const nextBatch = Math.min(state.collection.pageSize, remaining);
  const progress = totalCount ? Math.round((visibleCount / totalCount) * 100) : 0;

  refs.paginationSummary.textContent = `Showing ${visibleCount} of ${totalCount} loaders`;
  refs.paginationProgress.setAttribute('aria-valuemax', String(totalCount));
  refs.paginationProgress.setAttribute('aria-valuenow', String(visibleCount));
  refs.paginationProgressFill.style.width = `${progress}%`;
  refs.loadMoreButton.textContent = nextBatch ? `Load ${nextBatch} more` : 'All loaders shown';
  refs.loadMoreButton.setAttribute(
    'aria-label',
    nextBatch ? `Load ${nextBatch} more loaders. ${remaining} remaining.` : 'All loaders are shown.'
  );
  refs.pagination.hidden = remaining === 0 || totalCount === 0;
}

export function renderCollection(refs, loaders, state) {
  const items = getCurrentCollection(loaders, state);
  const visibleLimit = Math.max(state.collection.pageSize, state.collection.visibleLimit);
  const visibleItems = items.slice(0, visibleLimit);

  refs.count.textContent = visibleItems.length < items.length
    ? `Showing ${visibleItems.length} of ${items.length}`
    : `${items.length} ${items.length === 1 ? 'loader' : 'loaders'}`;
  refs.title.textContent = state.view === 'favorites'
    ? 'Favorite loaders'
    : state.view === 'recent'
      ? 'Recently viewed'
      : state.category === 'All'
        ? 'All loaders'
        : state.category;
  refs.liveSummary.textContent = `${loaders.length} animations ${state.paused ? 'paused' : 'running'}`;

  if (!items.length) {
    refs.grid.replaceChildren(createEmptyState());
    renderPagination(refs, 0, 0, state);
    return;
  }

  refs.grid.replaceChildren(
    ...visibleItems.map((loader, index) => createLoaderCard(loader, state, index, items.length))
  );
  renderPagination(refs, visibleItems.length, items.length, state);
}
