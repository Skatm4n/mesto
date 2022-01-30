import { contentCards } from './initialCards.js';
import { Card } from './Card.js';
import { FormValidation } from './FormValidation.js';

const btnEditProfile = document.querySelector('.avatar__edit-button');
const btnAddCard = document.querySelector('.profile__add-button');
const formEditSubmit = document.querySelector('.popup__form_type_edit');
const formAddSubmit = document.querySelector('.popup__form_type_add')


const popupEdit = document.querySelector('.popup_type_edit');
const popupAdd = document.querySelector('.popup_type_add');
const popupImage = document.querySelector('.popup_type_image');


const cardSection = document.querySelector('.posts');
const popupAlbumImage = document.querySelector('.album__image');
const popupAlbumImageCapture = document.querySelector('.album__image-capture');

const profileName = document.querySelector('.avatar__name');
const profileDescription = document.querySelector('.avatar__description');
const nameValue = document.querySelector('.popup__form-item_type_name');
const descriptionValue = document.querySelector('.popup__form-item_type_description');
const cardImageValue = document.querySelector('.popup__form-item_type_link');
const cardTitleValue = document.querySelector('.popup__form-item_type_place');

const paramConfig = {
  formElement: '.popup__form',
  inputElement: '.popup__form-item',
  inputError: 'popup__form-item_error',
  error: 'popup__error_active',
  submitButton: '.popup__form-btn',
  submitBtnDisabled: 'popup__form-btn_disabled'
};

const addCardFormValidator = new FormValidation(paramConfig, popupAdd,);
const editFormValidator = new FormValidation(paramConfig, popupEdit);
addCardFormValidator.enableValidation();
editFormValidator.enableValidation();

nameValue.value = profileName.textContent;
descriptionValue.value = profileDescription.textContent;

function openPopup(popup) {
  popup.classList.add('popup_visible');

  document.addEventListener('keydown', closePopupByEscape);
};

function closePopup(popup) {
  popup.classList.remove('popup_visible');

  document.removeEventListener('keydown', closePopupByEscape);
};

function changeDataHandler(evt) {
  evt.preventDefault();

  profileName.textContent = nameValue.value;
  profileDescription.textContent = descriptionValue.value;

  closePopup(popupEdit);
};

function renderCards(arr) {
  arr.forEach((item) => addCard(createCard(item)));
};

function createCard(cardData) {
  return new Card(cardData, '.card-template', zoomImage).generateCard();
};

function addCard(item) {
  cardSection.prepend(item);
};

function addCardHandler(evt) {
  evt.preventDefault();

  const card = {
    name: cardTitleValue.value,
    link: cardImageValue.value
  };

  addCard(createCard(card));

  closePopup(popupAdd);

  formAddSubmit.reset();

  addCardFormValidator.toggleButtonState();
};

function zoomImage(item) {
  popupAlbumImage.src = item.link;
  popupAlbumImage.alt = item.name;
  popupAlbumImageCapture.textContent = item.name;

  openPopup(popupImage);
};

function closePopupByEscape(evt) {

  if (evt.key === 'Escape') {
    const visiblePopup = document.querySelector('.popup_visible');

    closePopup(visiblePopup);
  }
};

function addEventListenersForPopups() {
  const popups = document.querySelectorAll('.popup');

  popups.forEach(popup => {
    popup.addEventListener('click', (evt) => {
      if (evt.target.classList.contains('popup_visible') || evt.target.classList.contains('popup__close-btn')) {
        closePopup(popup);
      } // мдааа, совсем сглупил..
    });
  });
};

addEventListenersForPopups();

renderCards(contentCards);

btnEditProfile.addEventListener('click', () => openPopup(popupEdit));

btnAddCard.addEventListener('click', () => openPopup(popupAdd));

formEditSubmit.addEventListener('submit', changeDataHandler);

formAddSubmit.addEventListener('submit', addCardHandler);



