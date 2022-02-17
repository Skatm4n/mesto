export default class Section {
  constructor({ items, render }, containerSelector) {
    this._initArray = items;
    this._render = render;
    this._container = document.querySelector(containerSelector);
  }

  addItem(item) {
    this._container.prepend(item);
  }

  renderItems() {
    this._initArray.forEach(item => {
      this._render(item);
    });
  }
}
