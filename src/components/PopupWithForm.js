import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor({ submitHandler }, popupSelector) {
    super(popupSelector);
    this._handler = submitHandler;
    this._form = this._popup.querySelector('.popup__form');
  }

  _getInputValues() {
    const inputList = this._form.querySelectorAll('.popup__form-item');
    const inputValues = {};
    inputList.forEach(input => inputValues[input.name] = input.value);
    return inputValues;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handler(this._getInputValues());
      this.close();
    });
  }

  close() {
    this._form.reset();
    this._removeEventListeners();
    super.close();
  }
}
