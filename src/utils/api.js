import config from './config'

class Api {
    constructor({ url }) {
        this._url = url;
    }

    getIngredients() {
        return fetch(this._url)
            .then(res => res.json())
            .catch(err => alert(`Ошибка при загрузке данных: ${err.message}. Перезагрузите страницу`));
    }
}
export default new Api(config)