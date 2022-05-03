class Api {
  constructor(config) {
    this.url = config.url
  }

  _handleResponse = (res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getCharacter(id) {
    return fetch(`${this.url}/people/${id}`, {
      method: 'GET',
    })
    .then(this._handleResponse)
  }

  getPlanet(url) {
    return fetch(url, {
      method: 'GET',
    })
    .then(this._handleResponse)
  }  
}

export default Api
