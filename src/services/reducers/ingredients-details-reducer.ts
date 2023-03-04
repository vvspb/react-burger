import { INGREDIENT_CURRENT } from "../actions-types/ingredients-details-action-type";
import { TIngredients } from '../../utils/types'

export interface IIngredientsDetailsReducer {
    ingredientCurrent: TIngredients;
}
const initialState: IIngredientsDetailsReducer = {
    ingredientCurrent: {
        _id: '',
        name: '',
        type: '',
        proteins: 0,
        fat: 0,
        carbohydrates: 0,
        calories: 0,
        price: 0,
        image: '',
        image_mobile: '',
        image_large: '',
        __v: 0,
    }
}

export const ingredientsDetailsReducer = (state = initialState, action: { type: string; payload: { ingredient: IIngredientsDetailsReducer; } }) => {
    switch (action.type) {
        case INGREDIENT_CURRENT:
            return {
                ...state,
                ingredientCurrent: action.payload.ingredient
            }
        default:
            return state;
    }
}