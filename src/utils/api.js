import config from './config'

const checkResponse = (res) => {
    return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
  };


class Api {
    constructor({ url }) {
        this._url = url;
    }

    getIngredients() {
        return fetch(`${this._url}/ingredients`).then(checkResponse)        
    }

    addOrder(ingredientsID) {
        return fetch(`${this._url}/orders`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({"ingredients": ingredientsID})
        })
        .then(checkResponse)
    }
}
export default new Api(config)