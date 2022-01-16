const paramConfig = {
  formElement: '.popup__form',
  inputElement: '.popup__form-item',
  inputError: 'popup__form-item_error',
  error: 'popup__error_active',
  submitButton: '.popup__form-btn',
  submitBtnDisabled: 'popup__form-btn_disabled'
};

const showInputError = (form, input, paramConfig, errorMessage) => {

  const errorBlock = form.querySelector(`.${input.id}-error`);

  input.classList.add(paramConfig.inputError);
  errorBlock.textContent = errorMessage;
  errorBlock.classList.add(paramConfig.error);
};

const hideInputError = (form, input, paramConfig) => {

  const errorBlock = form.querySelector(`.${input.id}-error`);

  input.classList.remove(paramConfig.inputError);
  errorBlock.textContent = '';
  errorBlock.classList.remove(paramConfig.inputError);
};

const isValid = (form, input, paramConfig) => {
  if(!input.validity.valid) {
    showInputError(form, input, paramConfig, input.validationMessage);
  } else {
    hideInputError(form, input, paramConfig);
  }
};

const disableButton = (button, paramConfig) => {
  button.setAttribute('disabled', true);
  button.classList.add(paramConfig.submitBtnDisabled);
};

const activateButton = (button, paramConfig) => {
  button.classList.remove(paramConfig.submitBtnDisabled);
  button.removeAttribute('disabled');
};

const hasInvalidInput = (inputList) => {
  return inputList.some(input => {
    return !input.validity.valid;
  });
};

const toggleButtonState = (inputList, button, paramConfig) => {
  if(hasInvalidInput(inputList)) {
    disableButton(button, paramConfig);
  } else {
    activateButton(button, paramConfig);
  }
};

const setEventListeners = (form, paramConfig) => {
  const inputList = Array.from(form.querySelectorAll(paramConfig.inputElement));
  const button = form.querySelector(paramConfig.submitButton);

  inputList.forEach(input => {
    input.addEventListener('input', () => {
      isValid(form, input, paramConfig);
      toggleButtonState(inputList, button, paramConfig);
    });
  });
};

const enableValidation = (paramConfig) => {
  const formList = Array.from(document.querySelectorAll(paramConfig.formElement));

  formList.forEach(form => {
    form.addEventListener('submit', evt => {
      evt.preventDefault();
    });

    setEventListeners(form, paramConfig);
  });
};

enableValidation(paramConfig);
