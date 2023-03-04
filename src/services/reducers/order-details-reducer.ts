import { ADD_ORDER, ADD_ORDER_SUCCESS, ADD_ORDER_FAILURE } from "../actions-types/ordel-details-action-type";

export interface addNewOrderReducer {
    orderNumber: number | null;
    isLoading: boolean;
    hasError: boolean;
}

const initialState: addNewOrderReducer = {
    orderNumber: null,
    isLoading: false,
    hasError: false
}

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const addNewOrderReducer = (state = initialState, action: { type: string; payload: { orderNumber: number; }}): addNewOrderReducer => {
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