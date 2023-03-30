import { ADD_INGREDIENT_CONSTRUCTOR, DELETE_ALL_INGREDIENTS_CONSTRUCTOR, DELETE_INGREDIENT_CONSTRUCTOR, SORT_INGRIDIENTS_CONSTRUCTOR } from "../actions-types/burger-constructor-action-type";
import type { TIngredients } from '../../utils/types'
import type {TBurgerConstructorActions} from '../actions/burger-constructor-action'

export interface IChoiceIngredients extends TIngredients {
    __id: string;
}

export interface IBurgerConstructorReducer {
    choiceIngredients: Array<IChoiceIngredients>;
    choiceBun: IChoiceIngredients | null
}

const initialState: IBurgerConstructorReducer = {
    choiceIngredients: [],
    choiceBun: null,
}
export const burgerConstructorReducer = (state = initialState, action: TBurgerConstructorActions): IBurgerConstructorReducer => {
    switch (action.type) {
        case ADD_INGREDIENT_CONSTRUCTOR:
            let copyChoiceBun: IChoiceIngredients | null ={
                ...state.choiceBun,
                ...action.payload.ingredients.find((item: IChoiceIngredients) => (item._id === action.payload.id) && (item.type === 'bun'))!
            }
            if (copyChoiceBun !== null && !Object.keys(copyChoiceBun).length) copyChoiceBun = null
            return {
                ...state,
                choiceIngredients: [
                    ...state.choiceIngredients,
                    ...action.payload.ingredients?.filter((item: IChoiceIngredients) => (item._id === action.payload.id) && (item.type !== 'bun'))
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