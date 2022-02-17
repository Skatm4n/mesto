export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
  }

  open() {
    this._popup.classList.add('popup_visible');
  }

  close() {
    this._popup.classList.remove('popup_visible');
    this._removeEventListeners();
  }

  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      this.close();
    }
  }

  _handleClose(evt) {
    if (evt.target.classList.contains('popup_visible')
      || evt.target.classList.contains('popup__close-btn')) {
      this.close();
    }
  }

  setEventListeners() {
    this._popup.addEventListener('click',
      (evt) => this._handleClose(evt));

    this._popup.addEventListener('keydown',
      (evt) => this._handleEscClose(evt));
  }

  _removeEventListeners() {
    this._popup.removeEventListener('click', this._handleClose);
    this._popup.removeEventListener('submit', this._handleEscClose);
  }
}
