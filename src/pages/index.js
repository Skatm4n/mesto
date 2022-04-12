import './index.css';
import Card from '../components/Card.js';
import FormValidation from '../components/FormValidation.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import PopupForDeleting from '../components/PopupForDeleting';
import {
  popupImage,
  paramConfig,
  cardSectionSelector,
  cardTemplateSelector,
  popupAdd,
  popupEdit,
  profileNameSelector,
  profileDescriptionSelector,
  profileAvatarSelector,
  nameValue,
  descriptionValue,
  btnEditProfile,
  popupEditSelector,
  popupEditAvatarSelector,
  popupAddSelector,
  btnAddCard,
  popupDeleteCardSelector,
  btnEditAvatar,
  popupEditAvatar
} from '../utils/constants.js';
import Api from '../components/Api';
let userId;

const userInfo = new UserInfo(profileNameSelector, profileDescriptionSelector, profileAvatarSelector);

const popupAlbum = new PopupWithImage(popupImage);
popupAlbum.setEventListeners();

const avatarEditPopup = new PopupWithForm(editAvatar, popupEditAvatarSelector)

avatarEditPopup.setEventListeners();

const formEditPopup = new PopupWithForm(editUserInfo, popupEditSelector);

formEditPopup.setEventListeners();

const addCardFormPopup = new PopupWithForm(saveCard, popupAddSelector);

addCardFormPopup.setEventListeners();

const confirmCardDeletePopup = new PopupForDeleting(popupDeleteCardSelector, );

confirmCardDeletePopup.setEventListeners();

const addCardFormValidator = new FormValidation(paramConfig, popupAdd);
addCardFormValidator.enableValidation();

const editFormValidator = new FormValidation(paramConfig, popupEdit);
editFormValidator.enableValidation();

const editAvatarValidation = new FormValidation(paramConfig, popupEditAvatar);
editAvatarValidation.enableValidation();

const api = new Api({
  url: 'https://nomoreparties.co/v1/cohort36',
  headers: {
    authorization: 'c9b183dc-3fbe-42ab-aa61-85f191512133',
    'Content-type': 'application/json'
  }
});

const section = new Section({
  render: (cards) => {
    const card = createCard(cards);
    section.addItem(card);
  }
}, cardSectionSelector);

Promise.all([api.takeUserInfo(), api.getInitialCards()])
  .then(([userData, cards]) => {
    userId = userData._id;
    userInfo.setUserInfo(userData);
    section.renderItems(cards);
  })
  .catch((err) => {
    console.log(err);
  });

  function setInputValues() {
    const iniUserInfo = userInfo.getUserInfo();
    nameValue.value = iniUserInfo.name;
    descriptionValue.value = iniUserInfo.description;
  }

function editUserInfo(data) {
  formEditPopup.renderLoading(true, 'Сохранить');
  api.editUserInfo(data)
    .then(data => {
      userInfo.setUserInfo(data);
      formEditPopup.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      formEditPopup.renderLoading(false, 'Сохранить');
    })
};

function editAvatar(data) {
  avatarEditPopup.renderLoading(true, 'Сохранить');
  api.editAvatar(data)
    .then(data => {
      userInfo.setUserInfo(data);
      avatarEditPopup.close()
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      avatarEditPopup.renderLoading(false, 'Сохранить');
    })
};


function createCard(cardData) {
  const card = new Card(cardData, userId, cardTemplateSelector, handleCardClick, handleLikeClick, handleCardDelete);

  return card.generateCard();
};

function handleCardClick(name, link) {
  popupAlbum.openImage(name, link);
}

function handleLikeClick(card) {
  if (card.isLiked()) {
    api.reduceCardLike(card.id)
      .then(cardData => { card.putLike(cardData.likes) })
      .catch((err) => {
        console.log(err);
      });
  } else {
    api.addCardLike(card.id)
      .then(cardData => { card.putLike(cardData.likes) })
      .catch((err) => {
        console.log(err);
      });
  }
};

function handleCardDelete(card) {
  confirmCardDeletePopup.open();
  confirmCardDeletePopup.submitHandler(() => {
    api.deleteCard(card.id)
      .then(() => {
        card.deleteElement();
      })
      .then(() => {
        confirmCardDeletePopup.close();
      })
      .catch(err => {
        console.log(err);
      })
  })
};

function saveCard(card) {
  addCardFormPopup.renderLoading(true, 'Сохранить');
  api.addCard(card)
    .then(card => {
      section.addItem(createCard(card));
      addCardFormPopup.close();
    })
    .catch(err => {
      console.log(err);
    })
    .finally(() => {
      addCardFormPopup.renderLoading(false, 'Сохранить')
    })
};

btnEditProfile.addEventListener('click', () => {
  setInputValues();
  formEditPopup.open();
  editFormValidator.resetInputFields();
});

btnEditAvatar.addEventListener('click', () => {
  avatarEditPopup.open();
  editAvatarValidation.resetInputFields();
})

btnAddCard.addEventListener('click', () => {
  addCardFormPopup.open();
  addCardFormValidator.resetInputFields();
})









