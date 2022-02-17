export default class Card {

  constructor({ name, link }, cardSelector, { handleCardClick }) {
    this._name = name;
    this._link = link;
    this._selector = cardSelector;
    this._handleCardClick = handleCardClick;
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
    this._element = null;
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
      .addEventListener('click', () => this._handleCardClick());

  }

  generateCard() {
    this._element = this._getTemplate();

    const cardImage = this._element.querySelector('.card__image');
    cardImage.src = this._link;
    cardImage.alt = this._name;

    this._element.querySelector('.card__title').textContent = this._name;

    this._setEventListeners();

    return this._element;
  }
}
