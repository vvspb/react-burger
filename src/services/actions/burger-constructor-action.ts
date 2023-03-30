import { TIngredients } from "../../utils/types";
import { ADD_INGREDIENT_CONSTRUCTOR, DELETE_INGREDIENT_CONSTRUCTOR, SORT_INGRIDIENTS_CONSTRUCTOR, DELETE_ALL_INGREDIENTS_CONSTRUCTOR } from "../actions-types/burger-constructor-action-type";
import { IChoiceIngredients } from "../reducers/burger-constructor-reducer";

export interface IAddBurgerConstructor {
    readonly type: typeof ADD_INGREDIENT_CONSTRUCTOR,
    payload: {
        id: string;
        ingredients: IChoiceIngredients[]
    }
}

export interface IDeleteBurgerConstructor {
    readonly type: typeof DELETE_INGREDIENT_CONSTRUCTOR,
    readonly payload: {
        itemId: string
       }
}

export interface ISortIngredients {
    readonly type: typeof SORT_INGRIDIENTS_CONSTRUCTOR,
    readonly payload: {
        dragIndex: number,
        hoverIndex: number
       }
}

export interface IDeleteAllIngredientsBurgerConstructor {
    readonly type: typeof DELETE_ALL_INGREDIENTS_CONSTRUCTOR,
}

export type TBurgerConstructorActions = IAddBurgerConstructor | IDeleteBurgerConstructor | ISortIngredients | IDeleteAllIngredientsBurgerConstructor


export const addBurgerConstructor = (ingredients: TIngredients[], itemId: {id: string} ): IAddBurgerConstructor => ({
    type: ADD_INGREDIENT_CONSTRUCTOR,
    payload: {
        ingredients: ingredients?.map((item: TIngredients) => {
            return {
                ...item,
                __id: item._id + Math.random() * 10000
            }
        }),
        ...itemId
    }
})

export const deleteBurgerConstructor = (itemId: string): IDeleteBurgerConstructor =>({
   type: DELETE_INGREDIENT_CONSTRUCTOR,
   payload: {
    itemId
   }
})

export const sortIngredients = (dragIndex: number, hoverIndex: number): ISortIngredients =>({
    type: SORT_INGRIDIENTS_CONSTRUCTOR,
    payload: {
        dragIndex,
        hoverIndex
    }
})

export const deleteAllIngredientsBurgerConstructor = (): IDeleteAllIngredientsBurgerConstructor =>({
    type: DELETE_ALL_INGREDIENTS_CONSTRUCTOR
 })
