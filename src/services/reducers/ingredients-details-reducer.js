import { INGREDIENT_CURRENT } from "../actions-types/ingredients-details-action-type";

const initialState = {
    ingredientCurrent: {}
}

export const ingredientsDetailsReducer = (state = initialState, action) => {
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