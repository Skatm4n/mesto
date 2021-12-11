const editButton = document.querySelector('.avatar__edit-button');
const popup = document.querySelector('.popup');
const closeButton = document.querySelector('.popup__close-btn');
const saveButton = document.querySelector('.popup__form-btn');
const profileName = document.querySelector('.avatar__name');
const profileDescription = document.querySelector('.avatar__description');
const nameValue = document.querySelector('.popup__form-item-name');
const descriptionValue = document.querySelector('.popup__form-item-description');

function openPopup() {
  nameValue.value = profileName.textContent;
  descriptionValue.value = profileDescription.textContent;
  popup.classList.add('popup_visible');
}

function closePopup() {
  popup.classList.remove('popup_visible');
}

function changeData(def) {
  def.preventDefault();

  profileName.textContent = nameValue.value;
  profileDescription.textContent = descriptionValue.value;

  closePopup();
}

editButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);
saveButton.addEventListener('click', changeData);



