import { ADD_INGREDIENT_CONSTRUCTOR, DELETE_INGREDIENT_CONSTRUCTOR, SORT_INGRIDIENTS_CONSTRUCTOR, DELETE_ALL_INGREDIENTS_CONSTRUCTOR } from "../actions-types/burger-constructor-action-type";

export const addBurgerConstructor = (ingredients, itemId) => ({
    type: ADD_INGREDIENT_CONSTRUCTOR,
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

export const sortIngredients = (dragIndex, hoverIndex) =>({
    type: SORT_INGRIDIENTS_CONSTRUCTOR,
    payload: {
        dragIndex,
        hoverIndex
    }
})

export const deleteAllIngredientsBurgerConstructor = ()=>({
    type: DELETE_ALL_INGREDIENTS_CONSTRUCTOR
 })

