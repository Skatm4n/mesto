export default class Section {
  constructor({render}, containerSelector) {
    this._render = render;
    this._container = document.querySelector(containerSelector);
  }

  addItem(item) {
    this._container.prepend(item);
  }

  renderItems(items) {
    items.forEach((item) => {
      this._render(item);
    });
  }
}
