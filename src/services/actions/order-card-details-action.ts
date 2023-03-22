import { IOrders } from '../../utils/types'
import { ORDER_CARD_CURRENT } from '../actions-types/order-card-details-action-type';

export interface IDataOrder {
    sumOrder: number,
    ingredientsOrder: Array<{
        name: string,
        image: string,
        price: number
    }>
}

export interface IAddOrderCardDetails {
    readonly type: typeof ORDER_CARD_CURRENT,
    readonly payload: {
        order?: IOrders,
        dataOrder?: IDataOrder
    }
}
export const addOrderCardDetails = (order: IOrders | undefined, dataOrder: IDataOrder | undefined): IAddOrderCardDetails => ({
    type: ORDER_CARD_CURRENT,
    payload: {
        order,
        dataOrder
    }
})