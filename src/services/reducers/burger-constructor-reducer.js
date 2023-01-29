import { ADD_CONSTRUCTOR } from "../actions-types/burger-constructor-action-type";

const initialState = {
        choiceIngredients: [],
        choiceBun: {}
}

export const burgerConstructorReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CONSTRUCTOR:
            return {
                ...state,
                    choiceIngredients: [...action.payload.ingredients?.filter(item => item.type !== 'bun')],
                    choiceBun: {
                        ...state.choiceBun, 
                        ...action.payload.ingredients?.find(item => item._id === action.payload.itemID)
                    }
                }
        default:
            return state
    }
}