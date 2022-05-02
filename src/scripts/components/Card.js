class Card {
  constructor(data,{cardSelector}) {
    this._data = data
    this._cardSelector = cardSelector;
  }

  _getTemplate() {
    console.log(this._cardSelector)

    const cardElement = document.querySelector(this._cardSelector).content.querySelector('.card').cloneNode(true);
    return cardElement;
  }

  // removeCard() {
  //   this._element = this._getTemplate();
  //   this._element.remove()
    
  // }

  generateCard() {
    
    this._element = this._getTemplate();
    this._element.remove()
    console.log(this._data.name)
    
    this._element.querySelector('.name-value').textContent = this._data.name
    this._element.querySelector('.sex-value').textContent = this._data.gender
    // const cardElementLink = this._element.querySelector('.card__pic');
    // cardElementName.textContent = this._name;
    // cardElementLink.src = this._link;    
    // cardElementLink.alt = this._name;
    // this._setEventListeners();
    return this._element;
  }

  setItem(item) {

  }

}

export default Card;