import { ADD_ORDER, ADD_ORDER_SUCCESS, ADD_ORDER_FAILURE } from '../actions-types/ordel-details-action-type'
import api from '../../utils/api'
import { TAppDispatch, TAppThunk } from '../store'

export interface IAddNewOrder {
    readonly type: typeof ADD_ORDER
}

export interface IAddNewOrderSuccess {
    readonly type: typeof ADD_ORDER_SUCCESS,
    readonly payload: {
        orderNumber: number
    }
}

export interface IAddNewOrderFailure {
    readonly type: typeof ADD_ORDER_FAILURE
}

export type TOrderDetailsActions = IAddNewOrder | IAddNewOrderSuccess | IAddNewOrderFailure

export const addNewOrder = (): IAddNewOrder => ({
    type: ADD_ORDER
})

export const addNewOrderSuccess = (data: number): IAddNewOrderSuccess => ({
    type: ADD_ORDER_SUCCESS,
    payload: {
        orderNumber: data
    }
})

export const addNewOrderFailure = (): IAddNewOrderFailure => ({
    type: ADD_ORDER_FAILURE
})

export const fechOrderData: TAppThunk = (choiceIngredientsID: string[]) => {
    return (dispatch: TAppDispatch) => {
        dispatch(addNewOrder())
        api.addOrder(choiceIngredientsID)
            .then(data => dispatch(addNewOrderSuccess(data?.order?.number)))
            .catch(() => {
                return dispatch(addNewOrderFailure())
            })
    }
}