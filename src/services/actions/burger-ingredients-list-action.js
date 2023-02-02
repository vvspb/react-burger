import { GET_INGREDIENTS, GET_INGREDIENTS_SUCCESS, GET_INGREDIENTS_FAILURE } from "../actions-types/burger-ingredients-list-action-type";
import api from '../../utils/api'

export const getIngredients = ()=>({
    type: GET_INGREDIENTS
})

export const getIngredientsSuccess = (ingredients) => ({
    type: GET_INGREDIENTS_SUCCESS,
    payload: ingredients
})

export const getIngredientsFailure = () => ({
    type: GET_INGREDIENTS_FAILURE
})

export const fechIngredients = () => {
    return  (dispatch)=>{
        dispatch(getIngredients())
            api.getDataIngredients()
              .then(result => dispatch(getIngredientsSuccess(result.data)))
              .catch(() => dispatch(getIngredientsFailure()))
    }
}