import { TIngredients } from '../../utils/types'
import { INGREDIENT_CURRENT } from '../actions-types/ingredients-details-action-type'

export interface IAddIngredientDetails {
    readonly type: typeof INGREDIENT_CURRENT,
    readonly payload: {
        ingredient: TIngredients
    }
}
export const addIngredientDetails = (ingredient: TIngredients): IAddIngredientDetails => ({
    type: INGREDIENT_CURRENT,
    payload: {
        ingredient
    }
})