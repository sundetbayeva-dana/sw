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
    .catch((err) => {
      console.log(err)
    })
  }

  getPlanet(url) {
    console.log(url)
    return fetch(url, {
      method: 'GET',
    })
    .then(this._handleResponse)
    .catch((err) => {
      console.log(err)
    })
  }
  
}


export default Api