import config, { TConfig } from './config'
import { getCookie, setCookie } from './cookie';
import { CustomResponse, TIngredients, TOrder, TResponseBody, TUser } from './types';

const checkResponse = <T>(res: Response): Promise<T> => {
    return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
};

class Api {
    private _url: string;
    constructor({ url }: TConfig) {
        this._url = url;
    }

    getDataIngredients(): Promise<CustomResponse<TResponseBody<'data', TIngredients[]>>> {
        return fetch(`${this._url}/ingredients`).then(res => checkResponse<CustomResponse<TResponseBody<'data', TIngredients[]>>>(res))
    }

    addOrder(ingredientsID: Array<string>): Promise<CustomResponse<TResponseBody<'order', TOrder>> | void> {
        return fetchWithRefresh<TResponseBody<'order', TOrder>>(`${this._url}/orders`, {
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

    passwordResetSendEmail(email: string): Promise<CustomResponse<TResponseBody>> {
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
            .then(res => checkResponse<CustomResponse<TResponseBody>>(res))
    }

    passwordReset(password: string, token: string): Promise<CustomResponse<TResponseBody>> {
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
        }).then(res => checkResponse<CustomResponse<TResponseBody>>(res))
    }

    authUser(email: string, password: string, name: string = ''): Promise<CustomResponse<TResponseBody<'user', TUser>>> {
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
        }).then(res => checkResponse<CustomResponse<TResponseBody<'user', TUser>>>(res))
    }

    getUser(): Promise<CustomResponse<TResponseBody<'user', TUser>> | void> {
        return fetchWithRefresh<TResponseBody<'user', TUser>>(`${this._url}/auth/user`, {
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

    editUser(email: string, password: string, name: string): Promise<CustomResponse<TResponseBody<'user', TUser>> | void> {
        return fetchWithRefresh<TResponseBody<'user', TUser>>(`${this._url}/auth/user`, {
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

    logoutUser(): Promise<CustomResponse<{ success: boolean; message: string; }>> {
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
        }).then(res => checkResponse<CustomResponse<{ success: boolean; message: string; }>>(res))
    }

    refreshToken = (): Promise<CustomResponse<TResponseBody>> => {
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
        }).then(res => res.json())
    };

}
export default new Api(config)

let api = new Api(config)

const fetchWithRefresh = <T>(url: RequestInfo, options: RequestInit) => {
    return fetch(url, options)
        .then(res => checkResponse<CustomResponse<T>>(res))
        .catch(err => {
            if (err.message === 'jwt expired') {
                api.refreshToken()
                    .then(res =>{
                        if (!res.success) {
                            return Promise.reject(res)
                        }
                        setCookie("refreshToken", res.refreshToken);
                        setCookie("accessToken", res.accessToken.split('Bearer ')[1]);
                        if (options.headers) {
                            (options.headers as {[key: string]: string}).Authorization = res.accessToken
                        }
                        return fetch(url, options).then(res => checkResponse<CustomResponse<T>>(res))
                    })
            } else Promise.reject(err);
        })
}
