import { ADD_INGREDIENT_CONSTRUCTOR, DELETE_ALL_INGREDIENTS_CONSTRUCTOR, DELETE_INGREDIENT_CONSTRUCTOR, SORT_INGRIDIENTS_CONSTRUCTOR } from "../actions-types/burger-constructor-action-type";
import { TIngredients } from '../../utils/types'

export interface IChoiceIngredients extends TIngredients {
    __id: string;
}

export interface IBurgerConstructorReducer {
    choiceIngredients: Array<IChoiceIngredients>;
    choiceBun: TIngredients | null
}

const initialState: IBurgerConstructorReducer = {
    choiceIngredients: [],
    choiceBun: null,
}
export const burgerConstructorReducer = (state = initialState, action: any): IBurgerConstructorReducer => {
    switch (action.type) {
        case ADD_INGREDIENT_CONSTRUCTOR:
            let copyChoiceBun: TIngredients | null = {
                ...state.choiceBun,
                ...action.payload.ingredients?.find((item: TIngredients) => (item._id === action.payload.id) && (item.type === 'bun'))
            }
            if (copyChoiceBun !== null && !Object.keys(copyChoiceBun).length) copyChoiceBun = null
            return {
                ...state,
                choiceIngredients: [
                    ...state.choiceIngredients,
                    ...action.payload.ingredients?.filter((item: TIngredients) => (item._id === action.payload.id) && (item.type !== 'bun'))
                        .map((item: TIngredients) => {
                            return {
                                ...item,
                                __id: item._id + Math.random() * 10000
                            }
                        })
                ],
                choiceBun: copyChoiceBun ? { ...copyChoiceBun } : copyChoiceBun
            }
        case DELETE_INGREDIENT_CONSTRUCTOR:
            return {
                ...state,
                choiceIngredients: [
                    ...state.choiceIngredients?.filter(item => item.__id !== action.payload.itemId)
                ],
            }
        case SORT_INGRIDIENTS_CONSTRUCTOR:
            const prevState = { ...state }
            const result = prevState.choiceIngredients.splice(action.payload.hoverIndex, 0, prevState.choiceIngredients.splice(action.payload.dragIndex, 1)[0])
            return {
                ...state,
                choiceIngredients: [...state.choiceIngredients, ...result]
            }
        case DELETE_ALL_INGREDIENTS_CONSTRUCTOR:
            return {
                ...state,
                choiceIngredients: [],
                choiceBun: null,
            }
        default:
            return state
    }
}