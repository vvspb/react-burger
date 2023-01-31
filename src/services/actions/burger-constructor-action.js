import { ADD_CONSTRUCTOR } from "../actions-types/burger-constructor-action-type";

export const addBurgerConstructor = (ingredients, itemId) => ({
    type: ADD_CONSTRUCTOR,
    payload: {
        ingredients,
        ...itemId
    }
})