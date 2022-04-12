import Popup from "./Popup";

export default class PopupForDeleting extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._form = this._popup.querySelector('.popup__form_type_delete');
  }

  submitHandler(handler) {
    this._submitHandler = handler;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', evt => {
      evt.preventDefault();
      this._submitHandler();
    })
  }
}
