import rootReducer from './reducers';
import thunk, { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { createStore, applyMiddleware, ActionCreator } from 'redux';
import {composeWithDevTools} from '@redux-devtools/extension';

import type { TAuthActions } from '../services/actions/auth-action';
import type { TBurgerConstructorActions } from '../services/actions/burger-constructor-action';
import type { TIngredientsActions } from '../services/actions/burger-ingredients-list-action';
import type { IAddIngredientDetails } from '../services/actions/ingredients-details-action';
import type { TOrderDetailsActions } from '../services/actions/order-details-action';
import type { RootState } from '../services/reducers/index';
import { TWSActions } from './actions/ws-action';
import { createSocketMiddleware } from './middleware/socketMiddleware';

import { ORDER_FEED_CONNECT, ORDER_FEED_DISCONNECT, ORDER_FEED_WS_CLOSE, ORDER_FEED_WS_CONNECTING, ORDER_FEED_WS_ERROR, ORDER_FEED_WS_GET_MESSAGE, ORDER_FEED_WS_OPEN } from './actions-types/ws-action-types';

const wsActions = {
  wsConnectType: ORDER_FEED_CONNECT,
  wsDisconnectType: ORDER_FEED_DISCONNECT,
  wsConnectingType: ORDER_FEED_WS_CONNECTING,
  onOpenType: ORDER_FEED_WS_OPEN,
  onCloseType: ORDER_FEED_WS_CLOSE,
  onMessageType: ORDER_FEED_WS_GET_MESSAGE,
  onErrorType: ORDER_FEED_WS_ERROR,
  wsSendMessageType: ''
}

// Типизация всех экшенов приложения
export type TApplicationActions = TAuthActions | TBurgerConstructorActions | TIngredientsActions | IAddIngredientDetails | TOrderDetailsActions | TWSActions;

// Типизация thunk'ов

export type TAppThunk<ReturnType = void> = ActionCreator<ThunkAction<
  ReturnType, // return value type
  RootState, // app state type
  never, // extra argument type
  TApplicationActions // action type
>>;

export type TAppDispatch = ThunkDispatch<RootState, never, TApplicationActions>;

const ordersMiddleware = createSocketMiddleware(wsActions)

    const store = createStore(
        rootReducer,
        composeWithDevTools(applyMiddleware(thunk, ordersMiddleware))
        )

export default store;
