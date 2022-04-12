import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(submitHandler, popupSelector) {
    super(popupSelector);
    this._handler = submitHandler;
    this._form = this._popup.querySelector('.popup__form');
    this._inputList = this._form.querySelectorAll('.popup__form-item');
  }

  _getInputValues() {

    const inputValues = {};
    this._inputList.forEach(input => inputValues[input.name] = input.value);
    return inputValues;
  }

  setEventListeners() {
    super.setEventListeners();

    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handler(this._getInputValues());
    });
  }

  close() {
    this._form.reset();
    super.close();
  }

  renderLoading(isLoading, text) {
    this._submitButton = this._popup.querySelector('.popup__form-btn_type_save');
    if (isLoading) {
      this._submitButton.textContent = `Сохранение...`;
    }
    else {
      this._submitButton.textContent = text;
    }
  }
}
