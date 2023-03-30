import {IOrderFeedState, orderFeedReducer} from './ws-reducer';
import { WebSocketStatus } from '../../utils/types';
import *  as types from '../actions-types/ws-action-types';

const initialState: IOrderFeedState = {
    status: WebSocketStatus.OFFLINE,
    connectingError: '',
    orderFeed: undefined,
    orderFeedPersonal: undefined
};

const resp = {
    success:    true,
    orders:     [],
    total:      10,
    totalToday: 100
}

describe('ws-reducer', () => {
    it('should return the initial state', ()=>{
        expect(orderFeedReducer(undefined, {} as any)).toEqual(initialState)
    })

    it('should handle ORDER_FEED_WS_CONNECTING', ()=>{
        expect(orderFeedReducer(initialState, { 
            type: types.ORDER_FEED_WS_CONNECTING
        })).toEqual({
            ...initialState,
            status: WebSocketStatus.CONNECTING
        })
    })

    it('should handle ORDER_FEED_WS_OPEN', ()=>{
        expect(orderFeedReducer(initialState, { 
            type: types.ORDER_FEED_WS_OPEN
        })).toEqual({ 
            ...initialState,
            status: WebSocketStatus.ONLINE,
            connectingError: ''
        })
    })

    it('should handle ORDER_FEED_WS_CLOSE', ()=>{
        expect(orderFeedReducer(initialState, { 
            type: types.ORDER_FEED_WS_CLOSE
        })).toEqual({ 
            ...initialState,
            status: WebSocketStatus.OFFLINE
        })
    })

    it('should handle ORDER_FEED_WS_ERROR', ()=>{
        expect(orderFeedReducer(initialState, { 
            type: types.ORDER_FEED_WS_ERROR,
            payload: 'test'
        })).toEqual({
            ...initialState,  
            connectingError: 'test'
        })
    })   
    
    it('should handle ORDER_FEED_WS_GET_MESSAGE', ()=>{
        expect(orderFeedReducer(initialState, { 
            type: types.ORDER_FEED_WS_GET_MESSAGE,
            payload: resp
        })).toEqual({  
            ...initialState,
            orderFeed: resp
        })
    })

    it('should handle ORDER_PERSONAL_FEED_WS_GET_MESSAGE', ()=>{
        expect(orderFeedReducer(initialState, { 
            type: types.ORDER_PERSONAL_FEED_WS_GET_MESSAGE,
            payload: resp
        })).toEqual({  
            ...initialState,
            orderFeedPersonal: resp
        })
    })

})