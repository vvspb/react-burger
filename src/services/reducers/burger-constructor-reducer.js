import { ADD_INGREDIENT_CONSTRUCTOR, DELETE_INGREDIENT_CONSTRUCTOR, SORT_INGRIDIENTS_CONSTRUCTOR } from "../actions-types/burger-constructor-action-type";

const initialState = {
    choiceIngredients: [],
    choiceBun: {},
}
export const burgerConstructorReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_INGREDIENT_CONSTRUCTOR:
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
                },
            }
        case DELETE_INGREDIENT_CONSTRUCTOR:
            return {
                ...state,
                choiceIngredients: [
                    ...state.choiceIngredients?.filter(item => item.__id !== action.payload.itemId)
                ],
            }
        case SORT_INGRIDIENTS_CONSTRUCTOR:
          const prevState = {...state}
          const result = prevState.choiceIngredients.splice(action.payload.hoverIndex, 0, prevState.choiceIngredients.splice(action.payload.dragIndex, 1)[0])
            return {
                ...state,
                choiceIngredients: [...state.choiceIngredients, ...result ]
            }
        default:
            return state
    }
}