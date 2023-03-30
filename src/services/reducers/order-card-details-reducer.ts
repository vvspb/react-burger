import { ORDER_CARD_CURRENT, ORDER_PERSONAL_CARD_CURRENT } from "../actions-types/order-card-details-action-type";
import type { IOrders } from '../../utils/types';
import { IDataOrder } from '../actions/order-card-details-action';
import { TApplicationActions } from "../store";

export interface IOrderCardDetailsReducer {
    cardCurrent?: IOrders;
    dataOrder?: IDataOrder;
    cardCurrentPersonal?: IOrders;
    dataOrderPersonal?: IDataOrder;
}
const initialState: IOrderCardDetailsReducer = {
    cardCurrent: undefined,
    dataOrder: undefined,
    cardCurrentPersonal: undefined,
    dataOrderPersonal: undefined
}

export const orderCardDetailsReducer = (state = initialState, action: TApplicationActions) => {
    switch (action.type) {
        case ORDER_CARD_CURRENT:
            return {
                ...state,
                cardCurrent: action.payload.order,
                dataOrder: action.payload.dataOrder
            }
        case ORDER_PERSONAL_CARD_CURRENT:
            return {
                ...state,
                cardCurrentPersonal: action.payload.orderPersonal,
                dataOrderPersonal: action.payload.dataOrderPersonal
            }
        default:
            return state;
    }
}
