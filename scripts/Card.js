class Card {
  constructor(cardData, cardSelector, zoomImage) {
    this._title = cardData.name;
    this._image = cardData.link;
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
   this._element.querySelector('.card__delete-btn').addEventListener('click', () => this._deleteCard());
   this._element.querySelector('.card__like-btn').addEventListener('click', () => this._toggleLike());
   this._element.querySelector('.card__image') .addEventListener('click', () => this._zoom(cardData));

  }

  generateCard() {
    this._element = this._getTemplate();

    const cardImage = this._element.querySelector('.card__image');
    cardImage.src = this._image;
    cardImage.alt = this._title;

    this._element.querySelector('.card__title').textContent = this._title;

    this._setEventListeners();

    return this._element;
  }
}
