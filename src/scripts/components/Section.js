export default class Section {
  constructor(selector) {    
		this._container = document.querySelector(selector);
  }

  setItem(element) {
    this._container.append(element);
  }
}