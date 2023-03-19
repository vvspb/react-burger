import { GET_INGREDIENTS, GET_INGREDIENTS_SUCCESS, GET_INGREDIENTS_FAILURE } from "../actions-types/burger-ingredients-list-action-type";
import api from '../../utils/api'
import { TIngredients } from "../../utils/types";
import { TAppDispatch, TAppThunk } from '../store'

export interface IGetIngredients {
    readonly type: typeof GET_INGREDIENTS
}

export interface IGetIngredientsSuccess {
    readonly type: typeof GET_INGREDIENTS_SUCCESS,
    readonly payload: TIngredients[]
}

export interface IGetIngredientsFailure {
    readonly type: typeof GET_INGREDIENTS_FAILURE
}

export type TIngredientsActions = IGetIngredients | IGetIngredientsSuccess | IGetIngredientsFailure

export const getIngredients = (): IGetIngredients =>({
    type: GET_INGREDIENTS
})

export const getIngredientsSuccess = (ingredients: TIngredients[]): IGetIngredientsSuccess  => ({
    type: GET_INGREDIENTS_SUCCESS,
    payload: ingredients
})

export const getIngredientsFailure = (): IGetIngredientsFailure => ({
    type: GET_INGREDIENTS_FAILURE
})

export const fechIngredients: TAppThunk = () => {
    return  (dispatch: TAppDispatch)=>{
        dispatch(getIngredients())
            api.getDataIngredients()
              .then(result => dispatch(getIngredientsSuccess(result.data)))
              .catch(() => dispatch(getIngredientsFailure()))
    }
}