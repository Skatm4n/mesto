const btnEditProfile = document.querySelector('.avatar__edit-button');
const btnAddCard = document.querySelector('.profile__add-button');
const formEditSubmit = document.querySelector('.popup__form_type_edit');
const btnCloseEdit = document.querySelector('.popup__close-btn_type_edit');
const btnCloseAdd = document.querySelector('.popup__close-btn_type_add');
const formAddSubmit = document.querySelector('.popup__form_type_add')
const btnCloseImage = document.querySelector('.popup__close-btn_type_image');

const popupEdit = document.querySelector('.popup_type_edit');
const popupAdd = document.querySelector('.popup_type_add');
const popupImage = document.querySelector('.popup_type_image');

const cardTemplate = document.querySelector('.card-template').content;
const cardSection = document.querySelector('.posts');
const popupAlbumImage = document.querySelector('.album__image');
const popupAlbumImageCapture = document.querySelector('.album__image-capture');

const profileName = document.querySelector('.avatar__name');
const profileDescription = document.querySelector('.avatar__description');
const nameValue = document.querySelector('.popup__form-item_type_name');
const descriptionValue = document.querySelector('.popup__form-item_type_description');
const cardImageValue = document.querySelector('.popup__form-item_type_link');
const cardTitleValue = document.querySelector('.popup__form-item_type_place');

function openPopup(popup) {
  popup.classList.add('popup_visible');
};

function closePopup(popup) {
  popup.classList.remove('popup_visible');
};

function changeDataHandler(evt) {
  evt.preventDefault();

  profileName.textContent = nameValue.value;
  profileDescription.textContent = descriptionValue.value;

  closePopup(popupEdit);
};

function renderCards(arr) {
  arr.forEach((item)=> addCard(createCard(item)));
};

function initListener(item, type, handler) {
  if (!item) {
    return;
  }
  item.addEventListener(type, handler);

  return () => {
    item.removeEventListener(item, handler);
  };
};

function createCard(item) {

  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  const cardElementImage = cardElement.querySelector('.card__image');

  cardElementImage.src = item.link;
  cardElement.querySelector('.card__title').textContent = item.name;
  cardElementImage.alt = item.name;

  const deleteButton = cardElement.querySelector('.card__delete-btn');
  initListener(deleteButton, 'click', deleteCard);

  const likeButton = cardElement.querySelector('.card__like-btn');
  initListener(likeButton, 'click', toggleLike);

  initListener(cardElementImage, 'click', () => zoomImage(item));

  return cardElement;
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

  fordAddSubmit.reset();
};

function deleteCard(evt) {
  evt.target.closest('.card').remove();
};

function toggleLike(evt) {

  evt.target.classList.toggle('card__like-btn_active');
};

function zoomImage(item) {
  popupAlbumImage.src = item.link;
  popupAlbumImage.alt = item.name;
  popupAlbumImageCapture.textContent = item.name;

  openPopup(popupImage);
};

renderCards(contentCards);

btnEditProfile.addEventListener('click', () => {
  nameValue.value = profileName.textContent;
  descriptionValue.value = profileDescription.textContent;
  openPopup(popupEdit)
});

btnCloseEdit.addEventListener('click', () => closePopup(popupEdit));

btnAddCard.addEventListener('click', () => openPopup(popupAdd));

btnCloseAdd.addEventListener('click', () => closePopup(popupAdd));

btnCloseImage.addEventListener('click', () => closePopup(popupImage));

formEditSubmit.addEventListener('submit', changeDataHandler);

formAddSubmit.addEventListener('submit', addCardHandler);



