import { ADD_ORDER, ADD_ORDER_SUCCESS, ADD_ORDER_FAILURE } from '../actions-types/ordel-details-action-type'
import api from '../../utils/api'


export const addNewOrder = () => ({
    type: ADD_ORDER
})

export const addNewOrderSuccess = (data) => ({
    type: ADD_ORDER_SUCCESS,
    payload: {
        orderNumber: data
    }
})

export const addNewOrderFailure = () => ({
    type: ADD_ORDER_FAILURE
})

export const fechOrderData = (choiceIngredientsID) => {
    return (dispatch) => {
        dispatch(addNewOrder())
        api.addOrder(choiceIngredientsID)
            .then(data => dispatch(addNewOrderSuccess(data.order?.number)))
            .catch(() => dispatch(addNewOrderFailure()))
    }
}