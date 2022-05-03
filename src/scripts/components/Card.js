class Card {
  constructor({ cardSelector }) {
    this._cardSelector = cardSelector;
  }

  _getTemplate() {
    const cardElement = document.querySelector(this._cardSelector).content.querySelector('.card').cloneNode(true);
    return cardElement;
  }

  _getElement() {
    const cardElement = document.querySelector('.card') 
    return cardElement;
  }

  _setTextValue(data) {

    this._characterData = data.characterData
    this._planetData = data.planetData
    this._element.querySelector('.name-value').textContent = this._characterData.name
    this._element.querySelector('.sex-value').textContent = this._characterData.gender
    this._element.querySelector('.height-value').textContent = `${this._characterData.height} см`
    this._element.querySelector('.weight-value').textContent = `${this._characterData.mass} кг`
    this._element.querySelector('.home-value').textContent = this._planetData.name
    this._element.querySelector('.eyes-value').style.backgroundColor = this._characterData.eye_color

  }

  generateCard(data) {
    this._element = this._getTemplate();
    this._setTextValue(data)
    return this._element;
  }

  setValueOnElement(data) {
    this._element = this._getElement();
    this._setTextValue(data)
    return this._element;
  }
}

export default Card;
