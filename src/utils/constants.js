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

const btnEditProfile = document.querySelector('.avatar__edit-button');
const btnAddCard = document.querySelector('.profile__add-button');

const popupEdit = document.querySelector('.popup_type_edit');
const popupAdd = document.querySelector('.popup_type_add');

const popupImage = '.popup_type_image';
const popupEditSelector = '.popup_type_edit';
const popupAddSelector = '.popup_type_add';
const cardSectionSelector = '.posts';
const cardTemplateSelector = '.card-template';
const profileNameSelector = '.avatar__name';
const profileDescriptionSelector = '.avatar__description';

const cardSection = document.querySelector('.posts');
const nameValue = document.querySelector('.popup__form-item_type_name');
const descriptionValue = document.querySelector('.popup__form-item_type_description');

const paramConfig = {
  formElement: '.popup__form',
  inputElement: '.popup__form-item',
  inputError: 'popup__form-item_error',
  error: 'popup__error_active',
  submitButton: '.popup__form-btn',
  submitBtnDisabled: 'popup__form-btn_disabled'
};

export {
  btnEditProfile,
  btnAddCard,
  popupEdit,
  popupAdd,
  popupImage,
  cardSectionSelector,
  cardTemplateSelector,
  profileNameSelector,
  profileDescriptionSelector,
  nameValue,
  descriptionValue,
  paramConfig,
  contentCards,
  popupAddSelector,
  popupEditSelector,
  cardSection
}
