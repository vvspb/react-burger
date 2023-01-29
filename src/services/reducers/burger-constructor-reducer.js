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
                    choiceIngredients: [...action.payload.ingredients?.filter(item => (item.id === action.payload.itemId) && (item.type !== 'bun') )],
                    choiceBun: {
                        ...action.payload.ingredients?.filter(item => (item.id === action.payload.itemId) && (item.type === 'bun'))
                    }
                }
        default:
            return state
    }
}