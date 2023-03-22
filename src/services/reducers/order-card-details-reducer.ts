import { ORDER_CARD_CURRENT } from "../actions-types/order-card-details-action-type";
import type { IOrders } from '../../utils/types';
import {IAddOrderCardDetails, IDataOrder} from '../actions/order-card-details-action'

export interface IOrderCardDetailsReducer {
    cardCurrent?: IOrders;
    dataOrder?: IDataOrder
}
const initialState: IOrderCardDetailsReducer = {
    cardCurrent: undefined,
    dataOrder: undefined
}

export const orderCardDetailsReducer = (state = initialState, action: IAddOrderCardDetails) => {
    switch (action.type) {
        case ORDER_CARD_CURRENT:
            return {
                ...state,
                cardCurrent: action.payload.order,
                dataOrder: action.payload.dataOrder
            }
        default:
            return state;
    }
}