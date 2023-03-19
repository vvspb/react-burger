import { IOrderFeed, WebSocketStatus } from '../../utils/types';
import {ORDER_FEED_WS_CONNECTING, ORDER_FEED_WS_OPEN, ORDER_FEED_WS_CLOSE, ORDER_FEED_WS_GET_MESSAGE, ORDER_FEED_WS_ERROR} from '../actions-types/ws-action-types';
import { TApplicationActions } from '../store';

interface IOrderFeedState {
    status: WebSocketStatus,
    connectingError: string,
    orderFeed: IOrderFeed | undefined
}

const initialState: IOrderFeedState = {
    status: WebSocketStatus.OFFLINE,
    connectingError: '',
    orderFeed: undefined
  };

  export const orderFeedReducer = (state = initialState, action: TApplicationActions): IOrderFeedState => {
    switch (action.type) {
        case ORDER_FEED_WS_CONNECTING:
            return {
                ...state,
                status: WebSocketStatus.CONNECTING
            }
        case ORDER_FEED_WS_OPEN:
            return {
                ...state,
                status: WebSocketStatus.ONLINE,
                connectingError: ''
            }
        case ORDER_FEED_WS_CLOSE:
            return {
                ...state,
                status: WebSocketStatus.OFFLINE
            }
        case ORDER_FEED_WS_ERROR:
            return {
                ...state,
                connectingError: action.payload
            }
        case ORDER_FEED_WS_GET_MESSAGE:
            return {
                ...state,
                orderFeed: action.payload
            }
        default:
          return state;
    }
  }
