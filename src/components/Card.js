export default class Card {

  constructor(card, userId, cardSelector, handleCardClick, handleLikeClick, handleCardDelete) {
    this._name = card.name;
    this._link = card.link;
    this._selector = cardSelector;
    this._userId = userId;
    this._owner = card.owner._id;
    this.id = card._id;
    this._likes = card.likes;

    this._handleCardClick = handleCardClick;
    this._handleLikeClick = handleLikeClick;
    this._handleCardDelete = handleCardDelete;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._selector)
      .content
      .querySelector('.card')
      .cloneNode(true);

    return cardElement;
  }

  deleteElement() {
    this._element.remove();
    this._element = null;
  }

  _setEventListeners() {
    this._cardLike.addEventListener('click', () => this._handleLikeClick(this));
    this._cardDelBtn.addEventListener('click', () => this._handleCardDelete(this));
    this._cardImage.addEventListener('click', () => this._handleCardClick(this._name, this._link));
  }

  generateCard() {
    this._element = this._getTemplate();

    this._cardImage = this._element.querySelector('.card__image');
    this._cardLike = this._element.querySelector('.card__like-btn');
    this._cardDelBtn = this._element.querySelector('.card__delete-btn');
    this._cardLikeCount = this._element.querySelector('.card__like-count');
    this._cardLikeCount.textContent = this._likes.length;
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;

    this._element.querySelector('.card__title').textContent = this._name;

    this._setEventListeners();
    this._handleDeleteButon();
    this.toggleLikeButton();

    return this._element;
  }


  _handleDeleteButon() {
    if (this._userId === this._owner) {
      this._cardDelBtn.classList.remove('card__delete-btn_disabled');
    }
    else {
    this._cardDelBtn.classList.add('card__delete-btn_disabled');
    }
  }


  isLiked() {
    return this._likes.some(owner => owner._id === this._userId);
  }

  toggleLikeButton() {
    if (this.isLiked()) {
      this._cardLike.classList.add('card__like-btn_active')
    } else {
      this._cardLike.classList.remove('card__like-btn_active')
    }
  }

  updateLikeCount() {
    this._cardLikeCount.textContent = this._likes.length;
    this._cardLike.classList.toggle('card__like-btn_active');
  }

  putLike(likes) {
    this._likes = likes;
    this.updateLikeCount();
  }
}
