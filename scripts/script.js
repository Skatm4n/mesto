const editButton = document.querySelector('.avatar__edit-button');
const addButton = document.querySelector('.profile__add-button');
const saveCardButton = document.querySelector('.popup__form-btn_type_save-card');
const editCloseButton = document.querySelector('.popup__close-btn_type_edit');
const addCLoseButton = document.querySelector('.popup__close-btn_type_add');
const saveButton = document.querySelector('.popup__form-btn_type_edit-info');
const imageCloseButton = document.querySelector('.popup__close-btn_type_image');

const popupEdit = document.querySelector('.popup_type_edit');
const popupAdd = document.querySelector('.popup_type_add');
const popupImage = document.querySelector('.popup_type_image');

const cardTemplate = document.querySelector('.card-template').content;
const cardSection = document.querySelector('.posts');
const popupAlbumImage = document.querySelector('.album__image');
const popupAlbumImageCapture = document.querySelector('.album__image-capture');

const profileName = document.querySelector('.avatar__name');
const profileDescription = document.querySelector('.avatar__description');
const nameValue = document.querySelector('.popup__form_input_name');
const descriptionValue = document.querySelector('.popup__form_input_description');
const cardImageValue = document.querySelector('.popup__form_input_image-link');
const cardTitleValue = document.querySelector('.popup__form_input_place');


const contentCards = [

  {
    name: 'Байкал',
    link: 'https://images.unsplash.com/photo-1612899028149-ddc7969d27cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
  },

  {
    name: 'Мыс Шмидта',
    link: 'https://images.unsplash.com/photo-1636953626598-f427e1a0b569?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80'
  },

  {
    name: 'Мыс Тобизина',
    link: 'https://images.unsplash.com/photo-1630006746588-9dd9b6a4b7a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=626&q=80'
  },

  {
    name: 'Охотское море',
    link: 'https://images.unsplash.com/photo-1636361681975-5f270428abf2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80'
  },

  {
    name: 'Мыс Слепивского',
    link: 'https://images.unsplash.com/photo-1628416772824-87c9d6e5f75c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80'
  },

  {
    name: 'Мыс Рока',
    link: 'https://images.unsplash.com/photo-1561525074-5b9b77c4cfe0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80'
  },

];


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

function cardInit(arr) {
  arr.forEach(item => {
    addCard(item);
  });
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

function addCard(item) {

  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  const cardElementImage = cardElement.querySelector('.card__image');

  cardElementImage.src = item.link;
  cardElement.querySelector('.card__title').textContent = item.name;
  cardElementImage.alt = item.name;

  const deleteButton = cardElement.querySelector('.card__delete-btn');
  initListener(deleteButton, 'click', deleteCard);

  const likeButton = cardElement.querySelector('.card__like-btn');
  initListener(likeButton, 'click', activeLike);


  initListener(cardElementImage, 'click', () => {
    popupAlbumImage.src = item.link;
    popupAlbumImage.alt = item.name;
    popupAlbumImageCapture.textContent = item.name;

    openPopup(popupImage);
  });

  cardSection.prepend(cardElement);
};

function addCardHandler(evt) {
  evt.preventDefault();

  const card = {
    name: cardTitleValue.value,
    link: cardImageValue.value
  };

  addCard(card);

  closePopup(popupAdd);
};

function deleteCard(evt) {
  evt.target.closest('.card').remove();
};

function activeLike(evt) {

  evt.target.classList.toggle('card__like-btn_active');
};

cardInit(contentCards);

editButton.addEventListener('click', () => {
  nameValue.value = profileName.textContent;
  descriptionValue.value = profileDescription.textContent;
  openPopup(popupEdit)
});

editCloseButton.addEventListener('click', () => closePopup(popupEdit));

addButton.addEventListener('click', () => openPopup(popupAdd));

addCLoseButton.addEventListener('click', () => closePopup(popupAdd));

imageCloseButton.addEventListener('click', () => closePopup(popupImage));

saveButton.addEventListener('click', changeDataHandler);

saveCardButton.addEventListener('click', addCardHandler);



