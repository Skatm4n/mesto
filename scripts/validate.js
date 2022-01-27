class FormValidation {
  constructor(paramConfig, form) {
    this._config = paramConfig;
    this._form = form;
    this._submitBTn = this._form.querySelector(this._config.submitButton);
    this._inputList = Array.from(this._form.querySelectorAll(this._config.inputElement));
  }


_showInputError(input, errorMessage) {

  const errorBlock = form.querySelector(`.${input.id}-error`);

  input.classList.add(paramConfig.inputError);
  errorBlock.textContent = errorMessage;
  errorBlock.classList.add(paramConfig.error);
};

_hideInputError (input)  {

  const errorBlock = form.querySelector(`.${input.id}-error`);

  input.classList.remove(paramConfig.inputError);
  errorBlock.textContent = '';
  errorBlock.classList.remove(paramConfig.inputError);
};

_isValid  (input)  {
  if (!input.validity.valid) {
    showInputError(form, input, paramConfig, input.validationMessage);
  } else {
    hideInputError(form, input, paramConfig);
  }
};

_disableButton  ()  {
  button.setAttribute('disabled', true);
  button.classList.add(paramConfig.submitBtnDisabled);
};

_activateButton  ()  {
  button.classList.remove(paramConfig.submitBtnDisabled);
  button.removeAttribute('disabled');
};

_hasInvalidInput()  {
  return inputList.some(input => {
    return !input.validity.valid;
  });
};

_toggleButtonState()  {
  if (hasInvalidInput(inputList)) {
    disableButton(button, paramConfig);
  } else {
    activateButton(button, paramConfig);
  }
};

_setEventListeners()  {
  const inputList = Array.from(form.querySelectorAll(paramConfig.inputElement));
  const button = form.querySelector(paramConfig.submitButton);

  inputList.forEach(input => {
    input.addEventListener('input', () => {
      isValid(form, input, paramConfig);
      toggleButtonState(inputList, button, paramConfig);
    });
  });
};

enableValidation()  {
  const formList = Array.from(document.querySelectorAll(paramConfig.formElement));

  formList.forEach(form => {
    form.addEventListener('submit', evt => {
      evt.preventDefault();
    });

    setEventListeners(form, paramConfig);
  });
};

}
