function defaultValueFor(control) {
  if (control.defaultValue !== undefined) return control.defaultValue;
  if (control.type === 'range') return control.min ?? 0;
  return control.options?.[0]?.value ?? '';
}

function getValues(state, loader) {
  state.controlValues ||= {};
  state.controlValues[loader.id] ||= Object.fromEntries(
    (loader.controls || []).map(control => [control.key, defaultValueFor(control)])
  );
  return state.controlValues[loader.id];
}

function createDescription(control) {
  if (!control.description) return null;
  const description = document.createElement('small');
  description.className = 'loader-control-help';
  description.textContent = control.description;
  return description;
}

function createRangeControl(loader, control, value) {
  const group = document.createElement('div');
  group.className = `control-group ${control.full ? 'full' : ''}`.trim();
  const id = `loader-control-${loader.id}-${control.key}`;

  const label = document.createElement('label');
  label.htmlFor = id;
  label.append(document.createTextNode(control.label));

  const output = document.createElement('output');
  output.className = 'range-value';
  output.dataset.loaderControlOutput = control.key;
  output.textContent = `${value}${control.suffix || ''}`;
  label.append(output);

  const input = document.createElement('input');
  input.id = id;
  input.type = 'range';
  input.min = String(control.min ?? 0);
  input.max = String(control.max ?? 100);
  input.step = String(control.step ?? 1);
  input.value = String(value);
  input.dataset.loaderControlKey = control.key;

  group.append(label, input);
  const description = createDescription(control);
  if (description) group.append(description);
  return group;
}

function createSelectControl(loader, control, value) {
  const group = document.createElement('div');
  group.className = `control-group ${control.full ? 'full' : ''}`.trim();
  const id = `loader-control-${loader.id}-${control.key}`;

  const label = document.createElement('label');
  label.htmlFor = id;
  label.textContent = control.label;

  const select = document.createElement('select');
  select.id = id;
  select.dataset.loaderControlKey = control.key;

  (control.options || []).forEach(option => {
    const normalized = typeof option === 'string' ? { value: option, label: option } : option;
    const optionElement = document.createElement('option');
    optionElement.value = normalized.value;
    optionElement.textContent = normalized.label;
    optionElement.selected = String(value) === String(normalized.value);
    select.append(optionElement);
  });

  group.append(label, select);
  const description = createDescription(control);
  if (description) group.append(description);
  return group;
}

export function renderLoaderControls(refs, loader, state) {
  const controls = loader.controls || [];
  const values = getValues(state, loader);
  refs.loaderControlsSection.hidden = controls.length === 0;
  refs.loaderControls.replaceChildren(
    ...controls.map(control => control.type === 'range'
      ? createRangeControl(loader, control, values[control.key])
      : createSelectControl(loader, control, values[control.key]))
  );
  applyLoaderControls(loader, refs.selectedPreview, state);
  applyLoaderControls(loader, refs.fullPreviewLoader, state);
}

export function setLoaderControlValue(loader, state, key, value) {
  const control = (loader.controls || []).find(item => item.key === key);
  if (!control) return;
  getValues(state, loader)[key] = control.type === 'range' ? Number(value) : value;
}

export function updateLoaderControlOutput(refs, loader, key, value) {
  const control = (loader.controls || []).find(item => item.key === key);
  const output = refs.loaderControls.querySelector(`[data-loader-control-output="${key}"]`);
  if (control && output) output.textContent = `${value}${control.suffix || ''}`;
}

export function applyLoaderControls(loader, container, state) {
  if (!container || typeof loader.applyControls !== 'function') return;
  loader.applyControls(container, { ...getValues(state, loader) });
}
