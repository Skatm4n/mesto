//Открытие и закрытие окна изменения
const editButton = document.querySelector('.avatar__edit-button');
const popup = document.querySelector('.popup');
const closeButton = document.querySelector('.popup__close-btn');

function popupVisible(){
  popup.classList.add('popup_visible');
}

function closePopup (){
  popup.classList.remove('popup_visible');
}

editButton.addEventListener('click', popupVisible);
closeButton.addEventListener('click', closePopup);


//Изменение имени и описания профиля
const saveButton = document.querySelector('.popup__form-btn');
const profileName = document.querySelector('.avatar__name');
const profileDescription = document.querySelector('.avatar__description');

function changeData (def){
  def.preventDefault();
  let nameValue = document.querySelector('.popup__form-item-name').value;
  console.log(nameValue);
  let descriptionValue = document.querySelector('.popup__form-item-description').value;
  console.log(descriptionValue);

  profileName.textContent = nameValue;
  profileDescription.textContent = descriptionValue;

  closePopup();
}

saveButton.addEventListener('click', changeData);



