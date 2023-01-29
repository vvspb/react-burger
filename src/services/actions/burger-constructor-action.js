import { ADD_CONSTRUCTOR } from "../actions-types/burger-constructor-action-type";

export const addBurgerConstructor = (ingredients, itemId = '60d3b41abdacab0026a733c7') => ({
    type: ADD_CONSTRUCTOR,
    payload: {
        ingredients,
        itemId
    }
})