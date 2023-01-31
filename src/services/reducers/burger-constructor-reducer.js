import { ADD__INGREDIENT_CONSTRUCTOR, DELETE_INGREDIENT_CONSTRUCTOR } from "../actions-types/burger-constructor-action-type";

const initialState = {
    choiceIngredients: [],
    choiceBun: {}
}

export const burgerConstructorReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD__INGREDIENT_CONSTRUCTOR:
            return {
                ...state,
                choiceIngredients: [
                    ...state.choiceIngredients,
                    ...action.payload.ingredients?.filter(item => (item._id === action.payload.id) && (item.type !== 'bun'))
                        .map(item => {
                            return {
                                ...item,
                                __id: item._id + Math.random() * 10000
                            }
                        })
                ],
                choiceBun: {
                    ...state.choiceBun,
                    ...action.payload.ingredients?.find(item => (item._id === action.payload.id) && (item.type === 'bun'))
                }
            }
        case DELETE_INGREDIENT_CONSTRUCTOR:
            return {
                ...state,
                choiceIngredients: [
                    ...state.choiceIngredients?.filter(item => item.__id !== action.payload.itemId)
                ],
            }
        default:
            return state
    }
}