import { ADD__INGREDIENT_CONSTRUCTOR, DELETE_INGREDIENT_CONSTRUCTOR } from "../actions-types/burger-constructor-action-type";

export const addBurgerConstructor = (ingredients, itemId) => ({
    type: ADD__INGREDIENT_CONSTRUCTOR,
    payload: {
        ingredients,
        ...itemId
    }
})

export const deleteBurgerConstructor = (itemId)=>({
   type: DELETE_INGREDIENT_CONSTRUCTOR,
   payload: {
    itemId
   }
})