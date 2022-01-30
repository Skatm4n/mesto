export class Card {
  constructor(cardData, cardSelector, zoomImage) {
    this._data = cardData;
    this._selector = cardSelector;
    this._zoom = zoomImage;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._selector)
      .content
      .querySelector('.card')
      .cloneNode(true);

    return cardElement;
  }

  _deleteCard() {
    this._element.remove();
  }

  _toggleLike(evt) {
    evt.target.classList.toggle('card__like-btn_active');
  }

  _setEventListeners() {
    this._element.querySelector('.card__delete-btn')
      .addEventListener('click', () => this._deleteCard());
    this._element.querySelector('.card__like-btn')
      .addEventListener('click', (evt) => this._toggleLike(evt));
    this._element.querySelector('.card__image')
      .addEventListener('click', () => this._zoom(this._data));
  }

  generateCard() {
    this._element = this._getTemplate();

    const cardImage = this._element.querySelector('.card__image');
    cardImage.src = this._data.link;
    cardImage.alt = this._data.name;

    this._element.querySelector('.card__title').textContent = this._data.name;

    this._setEventListeners();

    return this._element;
  }
}
