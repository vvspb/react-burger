import config from './config'
import { getCookie, setCookie } from './cookie';

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
        return fetchWithRefresh(`${this._url}/orders`, {
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

    authUser(email, password, name = 0) {
        let query = name ? '/auth/register' : '/auth/login'
        return fetch(`${this._url}${query}`, {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: { 'Content-Type': 'application/json' },
            body: name ? JSON.stringify(
                {
                    "email": email,
                    "password": password,
                    "name": name
                }
            ) : JSON.stringify(
                {
                    "email": email,
                    "password": password,
                }),
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
        }).then(checkResponse)
    }
    getUser() {
        return fetchWithRefresh(`${this._url}/auth/user`, {
            method: 'GET',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + getCookie('accessToken')
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
        }
        )
    }

    editUser(email, password, name) {
        return fetchWithRefresh(`${this._url}/auth/user`, {
            method: 'PATCH',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + getCookie('accessToken')
            },
            body: JSON.stringify({
                "email": email,
                "password": password,
                "name": name
            }),
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
        }
        )
    }

    logoutUser() {
        return fetch(`${this._url}/auth/logout`, {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(
                {
                    "token": getCookie('refreshToken'),
                }
            ),
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
        }).then(checkResponse)
    }

    refreshToken = () => {
        return fetch(`${this._url}/auth/token`, {
            method: "POST",
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "token": getCookie('refreshToken'),
            }),
            redirect: 'follow',
            referrerPolicy: 'no-referrer'
        })
    };

}
export default new Api(config)

let api = new Api(config)

const fetchWithRefresh = (url, options) => {
    return fetch(url, options)
        .then(checkResponse)
        .catch(err => {
            if (err.message === 'jwt expired') {
                api.refreshToken()
                    .then(res => res.json())
                    .then(res => {
                        console.log('res', res)
                        if (!res.success) {
                            return Promise.reject(res)
                        }
                        setCookie("refreshToken", res.refreshToken);
                        setCookie("accessToken", res.accessToken);
                        options.headers.Authorization = res.accessToken
                        console.log('----', options.headers.Authorization)
                        return fetch(url, options).then(checkResponse)
                    })
            } else Promise.reject(err);
        })
}