import config from './config'
import { getCookie } from './cookie';

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
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + getCookie('accessToken')
            },
            body: JSON.stringify({ "ingredients": ingredientsID }),
            redirect: 'follow',
            referrerPolicy: 'no-referrer'
        })
            .then(checkResponse)
    }

    passwordResetSendEmail(email) {
        return fetch(`${this._url}/password-reset`, {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ "email": email }),
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
        })
            .then(checkResponse)
    }

    passwordReset(password, token) {
        return fetch(`${this._url}/password-reset/reset`, {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(
                {
                    "password": password,
                    "token": token
                }),
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
        }).then(checkResponse)
    }

    signUpUser(email, password, name) {
        return fetch(`${this._url}/auth/register`, {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(
                {
                    "email": email,
                    "password": password,
                    "name": name
                }
            ),
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
        }).then(checkResponse)
    }

    signInUser(email, password) {
        return fetch(`${this._url}/auth/login`, {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(
                {
                    "email": email,
                    "password": password,
                }
            ),
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
        }).then(checkResponse)
    }

}
export default new Api(config)