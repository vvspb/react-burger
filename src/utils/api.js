import config from './config'

const checkResponse = (res) => {
    return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
};


class Api {
    constructor({ url }) {
        this._url = url;
    }

    getDataIngredients() {
        return fetch(`${this._url}/ingredients`).then(checkResponse)
    }

    addOrder(ingredientsID) {
        return fetch(`${this._url}/orders`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ "ingredients": ingredientsID })
        })
            .then(checkResponse)
    }

    passwordResetSendEmail(email) {
        return fetch(`${this._url}/password-reset`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ "email": email })
        })
            .then(checkResponse)
    }

    passwordReset(password, token) {
        return fetch(`${this._url}/password-reset/reset`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(
                {
                    "password": password,
                    "token": token
                })
        }).then(checkResponse)
    }

    signUpUser(email, password, name) {
        return fetch(`${this._url}/auth/register`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(
                {
                    "email": email,
                    "password": password,
                    "name": name
                }
            )
        }).then(checkResponse)
    }

    autorisationUser(email, password) {
        return fetch(`${this._url}/auth/login`, {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: { 'Content-Type': 'application/json' },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            body: JSON.stringify(
                {
                    "email": email,
                    "password": password,
                }
            )
        }).then(checkResponse)
    }

}
export default new Api(config)