import { INGREDIENT_CURRENT } from "../actions-types/ingredients-details-action-type";

interface IIngredientsDetailsReducer {
    ingredientCurrent: import("../../utils/types").IIngredients | {};
}
const initialState: IIngredientsDetailsReducer = {
    ingredientCurrent: {}
}

export const ingredientsDetailsReducer = (state = initialState, action: { type: string; payload: { ingredient: IIngredientsDetailsReducer; } }) => {
    switch(action.type){
        case INGREDIENT_CURRENT:
            return {
                ...state,
                ingredientCurrent: action.payload.ingredient
            }
        default:
            return state;
    }
}