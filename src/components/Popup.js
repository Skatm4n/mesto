export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
  }

  open() {
    this._popup.classList.add('popup_visible');
    document.addEventListener('keydown',
    (evt) => this._handleEscClose(evt));
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

  setEventListeners() {
    this._popup.addEventListener('click',
      (evt) => {
        if (evt.target.classList.contains('popup_visible')
          || evt.target.classList.contains('popup__close-btn')) {
          this.close();
        }
      });
  }

  _removeEventListeners() {
    document.removeEventListener('keydown', this._handleEscClose);
  }
}
