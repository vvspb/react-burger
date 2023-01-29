import { INGREDIENT_CURRENT } from '../actions-types/ingredients-details-action-type'

export const addIngredientDetails = (ingredient) => ({
    type: INGREDIENT_CURRENT,
    payload: {
        ingredient
    }
})