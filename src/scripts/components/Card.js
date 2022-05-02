class Card {
  constructor(data, { cardSelector }) {
    console.log(data)
    this._cardSelector = cardSelector;
    this._characterData = data.CharacterData
    this._planetData = data.planetData
  }

  _getTemplate() {
    const cardElement = document.querySelector(this._cardSelector).content.querySelector('.card').cloneNode(true);
    return cardElement;
  }

  _getElement() {
    const cardElement = document.querySelector('.card') 
    return cardElement;
  }

  setTextValue(data) {
    if (!data) {
      data = this._characterData
    }
    this._characterData = data
    this._element.querySelector('.name-value').textContent = this._characterData.name
    this._element.querySelector('.sex-value').textContent = this._characterData.gender
    this._element.querySelector('.height-value').textContent = this._characterData.height
    this._element.querySelector('.weight-value').textContent = this._characterData.mass
    this._element.querySelector('.home-value').textContent = this._planetData.name
    this._element.querySelector('.eyes-value').style.backgroundColor = this._characterData.eye_color

  }



  generateCard() {

    this._element = this._getTemplate();
    this.setTextValue()
    return this._element;
  }

  setValueOnElement(data) {
    this._element = this._getElement();
    this.setTextValue(data)
    return this._element;
  }

}

export default Card;