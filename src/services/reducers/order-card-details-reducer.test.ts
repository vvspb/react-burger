import { orderCardDetailsReducer } from './order-card-details-reducer';
import * as types from '../actions-types/order-card-details-action-type';

const intialState = {
    cardCurrent: undefined,
    dataOrder: undefined,
    cardCurrentPersonal: undefined,
    dataOrderPersonal: undefined
}

const orderFeed = {
    order: {
        ingredients: ['test', 'test', 'test'],
        _id: 'test',
        status: 'test',
        name: 'test',
        number: 0,
        createdAt: new Date('test'),
        updatedAt: new Date('test'),
    },
    dataOrder: {
        sumOrder: 100,
        ingredientsOrder: [
            {
                name: 'test',
                image: 'test',
                price: 10,
                type: 'test',
                _id: 'test'
            }
        ]
    }
}

const orderFeedPersonal = {
    orderPersonal: {
        ingredients: ['test', 'test', 'test'],
        _id: 'test',
        status: 'test',
        name: 'test',
        number: 0,
        createdAt: new Date('test'),
        updatedAt: new Date('test'),
    },
    dataOrderPersonal: {
        sumOrder: 100,
        ingredientsOrder: [
            {
                name: 'test',
                image: 'test',
                price: 10,
                type: 'test',
                _id: 'test'
            }
        ]
    }
}

describe('order-card-details-reducer', () => {
    it('should return the initial state', () => {
        expect(orderCardDetailsReducer(undefined, {} as any)).toEqual(intialState)
    })

    it('should handle ORDER_CARD_CURRENT', () => {
        expect(orderCardDetailsReducer(intialState, {
            type: types.ORDER_CARD_CURRENT,
            payload: orderFeed
        })).toEqual({
            cardCurrent: orderFeed.order,
            dataOrder: orderFeed.dataOrder
        })
    })

    it('should handle ORDER_PERSONAL_CARD_CURRENT', ()=>{
        expect(orderCardDetailsReducer(intialState, {
            type: types.ORDER_PERSONAL_CARD_CURRENT,
            payload: orderFeedPersonal
        })).toEqual({
            cardCurrentPersonal: orderFeedPersonal.orderPersonal,
            dataOrderPersonal: orderFeedPersonal.dataOrderPersonal
        })
    })
})