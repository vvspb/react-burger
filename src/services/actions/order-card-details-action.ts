import { IOrders } from '../../utils/types'
import { ORDER_CARD_CURRENT, ORDER_PERSONAL_CARD_CURRENT } from '../actions-types/order-card-details-action-type';

export interface IDataOrder {
    sumOrder: number,
    ingredientsOrder: Array<{
        name: string,
        image: string,
        price: number,
        type: string,
        _id: string
    }>
}

export interface IAddOrderCardDetails {
    readonly type: typeof ORDER_CARD_CURRENT,
    readonly payload: {
        order?: IOrders,
        dataOrder?: IDataOrder
    }
}

export interface IAddOrderPersonalCardDetails {
    readonly type: typeof ORDER_PERSONAL_CARD_CURRENT,
    readonly payload: {
        orderPersonal?: IOrders,
        dataOrderPersonal?: IDataOrder
    }
}

export type TAddOrderCardDetailsActions = IAddOrderCardDetails | IAddOrderPersonalCardDetails

export const addOrderCardDetails = (order: IOrders | undefined, dataOrder: IDataOrder | undefined): IAddOrderCardDetails => ({
    type: ORDER_CARD_CURRENT,
    payload: {
        order,
        dataOrder
    }
})

export const addOrderPersonalCardDetails = (orderPersonal: IOrders | undefined, dataOrderPersonal: IDataOrder | undefined): IAddOrderPersonalCardDetails => ({
    type: ORDER_PERSONAL_CARD_CURRENT,
    payload: {
        orderPersonal,
        dataOrderPersonal
    }
})