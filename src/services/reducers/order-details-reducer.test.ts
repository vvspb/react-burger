import { addNewOrderReducer } from './order-details-reducer';
import * as types from '../actions-types/order-details-action-type';

const initialState = {
    orderNumber: null,
    isLoading: false,
    hasError: false
}

describe('order-details-reducer', () => {
    it('should return the initial state', () => {
        expect(addNewOrderReducer(undefined, {} as any)).toEqual(initialState)
    })

    it('should handle ADD_ORDER', ()=>{
        expect(addNewOrderReducer(initialState, {
            type: types.ADD_ORDER
        })).toEqual({
            isLoading: true,
            hasError: false,
            orderNumber: null
        })
    })

    it('should handle ADD_ORDER_FAILURE', ()=>{
        expect(addNewOrderReducer(initialState, {
            type: types.ADD_ORDER_FAILURE
        })).toEqual({
            isLoading: false,
            hasError: true,
            orderNumber: null
        })
    })

    it('should handle ADD_ORDER_SUCCESS', ()=>{
        expect(addNewOrderReducer(initialState, {
            type: types.ADD_ORDER_SUCCESS,
            payload:{ orderNumber: 420030}
        })).toEqual({
            orderNumber: 420030,
            isLoading: false,
            hasError: false
        })
    })


})