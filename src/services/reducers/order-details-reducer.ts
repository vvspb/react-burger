import { ADD_ORDER, ADD_ORDER_SUCCESS, ADD_ORDER_FAILURE } from "../actions-types/order-details-action-type";
import type {TOrderDetailsActions} from '../actions/order-details-action'

export interface IAddNewOrderReducer {
    orderNumber: number | null;
    isLoading: boolean;
    hasError: boolean;
}

export const initialState: IAddNewOrderReducer = {
    orderNumber: null,
    isLoading: false,
    hasError: false
}

export const addNewOrderReducer = (state = initialState, action: TOrderDetailsActions): IAddNewOrderReducer => {
    switch (action.type) {
        case ADD_ORDER:
            return {
                ...state,
                isLoading: true,
                hasError: false
            }
        case ADD_ORDER_SUCCESS:
            return {
                ...state,
                orderNumber: action.payload.orderNumber,
                isLoading: false,
                hasError: false
            }
        case ADD_ORDER_FAILURE:
            return {
                ...state,
                isLoading: false,
                hasError: true
            }
        default:
            return state;
    }
} 