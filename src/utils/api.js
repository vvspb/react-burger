import config from './config'

const checkReponse = (res) => {
    return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
  };

class Api {
    constructor({ url }) {
        this._url = url;
    }

    getIngredients() {
        return fetch(`${this._url}/ingredients`)
            .then(checkReponse)        
    }

    addOrder(ingredientsID) {
        return fetch(`${this._url}/orders`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({"ingredients": ingredientsID})
        })
        .then(checkReponse)
    }
}
export default new Api(config)