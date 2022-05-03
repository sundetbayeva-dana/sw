export default class SubmitForm {
  constructor({ selector, handleFormSubmit }) {
    this._selector = selector;
    this._handleFormSubmit = handleFormSubmit;
    this._formElement = document.querySelector(this._selector).querySelector('form')
  }

  setEventListeners() {
    this._formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());

      this._formElement.reset();
    })
  }

  _getInputValues() {
    
    this._inputList = this._formElement.querySelectorAll('.form__input');
    this._formValues = {};
    this._inputList.forEach(input => this._formValues[input.name] = input.value);
    
    return this._formValues;
  }

}