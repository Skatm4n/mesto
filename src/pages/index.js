import {
  contentCards,
  popupImage,
  paramConfig,
  cardSectionSelector,
  cardTemplateSelector,
  popupAdd,
  popupEdit,
  profileNameSelector,
  profileDescriptionSelector,
  nameValue,
  descriptionValue,
  btnEditProfile,
  popupEditSelector,
  cardSection,
  popupAddSelector,
  btnAddCard
} from '../utils/constants.js';
import Card from '../components/Card.js';
import FormValidation from '../components/FormValidation.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';

const userInfo = new UserInfo(profileNameSelector, profileDescriptionSelector);

function setInitialUserInfo() {
  nameValue.value = userInfo.getUserInfo().name;
  descriptionValue.value = userInfo.getUserInfo().description;
}

function setNewUserInfo(userData) {
  userInfo.setUserInfo(userData);
}

const formEditPopup = new PopupWithForm({
  submitHandler: (userData) => {
    setNewUserInfo(userData);
  }
}, popupEditSelector);

formEditPopup.setEventListeners();

const addCardFormPopup = new PopupWithForm({
  submitHandler: (cardData) => {
    cardSection.prepend(createCard(cardData));
  }
}, popupAddSelector);

addCardFormPopup.setEventListeners();


const addCardFormValidator = new FormValidation(paramConfig, popupAdd);
addCardFormValidator.enableValidation();

const editFormValidator = new FormValidation(paramConfig, popupEdit);
editFormValidator.enableValidation();


function createCard(cardData) {
  const card = new Card(cardData, cardTemplateSelector, {
    handleCardClick: () => {
      const popupAlbum = new PopupWithImage(cardData, popupImage);
      popupAlbum.setEventListeners();
      popupAlbum.open();
    }
  });

  return card.generateCard();
};

const initialCardList = new Section({
  items: contentCards,
  render: (items) => {
    initialCardList.addItem(createCard(items));
  }
}, cardSectionSelector);

initialCardList.renderItems();

btnEditProfile.addEventListener('click', () => {
  formEditPopup.open();
  setInitialUserInfo();
  editFormValidator.toggleButtonState();
});

btnAddCard.addEventListener('click', () => {
  addCardFormPopup.open();
  addCardFormValidator.toggleButtonState();
})









