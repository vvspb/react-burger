import { GET_INGREDIENTS, GET_INGREDIENTS_SUCCESS, GET_INGREDIENTS_FAILURE } from "../actions-types/burger-ingredients-list-action-type";


export const initialState = {
    ingredients: [],
    isLoading: false,
    hasError: false,
}

export const ingredientsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_INGREDIENTS:
            return {
                ...state,
                isLoading: true,
                hasError: false
            }
        case GET_INGREDIENTS_SUCCESS:
            return {
                ...state,
                ingredients: action.payload,
                isLoading: false,
                hasError: false
            }
        case GET_INGREDIENTS_FAILURE:
            return {
                ...state,
                isLoading: false,
                hasError: true
            }
        default:
            return state;
    }
}
