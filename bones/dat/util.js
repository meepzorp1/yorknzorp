export function createEl(tag, id, text) {
  const el = document.createElement(tag);

  if (text) el.textContent = text;
  if (id) el.id = id;

  return el;
}