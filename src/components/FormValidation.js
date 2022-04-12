export default class FormValidation {
  constructor(paramConfig, form) {
    this._config = paramConfig;
    this._form = form;
    this._submitBtn = this._form.querySelector(this._config.submitButton);
    this._inputList = Array.from(this._form.querySelectorAll(this._config.inputElement));
  }


  _showInputError(input, errorMessage) {

    const errorBlock = this._form.querySelector(`.${input.id}-error`);

    input.classList.add(this._config.inputError);
    errorBlock.textContent = errorMessage;
    errorBlock.classList.add(this._config.error);
  };

  _hideInputError(input) {

    const errorBlock = this._form.querySelector(`.${input.id}-error`);

    input.classList.remove(this._config.inputError);
    errorBlock.textContent = '';
    errorBlock.classList.remove(this._config.inputError);
  };

  _isValid(input) {
    if (!input.validity.valid) {
      this._showInputError(input, input.validationMessage);
    } else {
      this._hideInputError(input);
    }
  };

  _hasInvalidInput() {
    return this._inputList.some(input => {
      return !input.validity.valid;
    });
  };

  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._submitBtn.setAttribute('disabled', true);
      this._submitBtn.classList.add(this._config.submitBtnDisabled);
    } else {
      this._submitBtn.removeAttribute('disabled');
      this._submitBtn.classList.remove(this._config.submitBtnDisabled);
    }
  };

  _setEventListeners() {
    this._toggleButtonState();
    this._inputList.forEach(input => {
      input.addEventListener('input', () => {
        this._isValid(input);
        this._toggleButtonState();
      });
    });
  };

  resetInputFields() {
    this._toggleButtonState();

    this._inputList.forEach(input => {
      this._hideInputError(input);
    })
  }

  enableValidation() {
    this._setEventListeners();
  }
}
