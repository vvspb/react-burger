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

import { ORDER_FEED_CONNECT, ORDER_FEED_DISCONNECT, ORDER_FEED_WS_CLOSE, ORDER_FEED_WS_CONNECTING, ORDER_FEED_WS_ERROR, ORDER_FEED_WS_GET_MESSAGE, ORDER_FEED_WS_OPEN, ORDER_PERSONAL_FEED_CONNECT, ORDER_PERSONAL_FEED_DISCONNECT, ORDER_PERSONAL_FEED_WS_CLOSE, ORDER_PERSONAL_FEED_WS_CONNECTING, ORDER_PERSONAL_FEED_WS_ERROR, ORDER_PERSONAL_FEED_WS_GET_MESSAGE, ORDER_PERSONAL_FEED_WS_OPEN } from './actions-types/ws-action-types';
import { TAddOrderCardDetailsActions } from './actions/order-card-details-action';

const wsFeedOrderActions = {
  wsConnectType: ORDER_FEED_CONNECT,
  wsDisconnectType: ORDER_FEED_DISCONNECT,
  wsConnectingType: ORDER_FEED_WS_CONNECTING,
  onOpenType: ORDER_FEED_WS_OPEN,
  onCloseType: ORDER_FEED_WS_CLOSE,
  onMessageType: ORDER_FEED_WS_GET_MESSAGE,
  onErrorType: ORDER_FEED_WS_ERROR,
}

const wsPersonalFeedActions = {
  wsConnectType: ORDER_PERSONAL_FEED_CONNECT,
  onMessageType: ORDER_PERSONAL_FEED_WS_GET_MESSAGE,
  wsDisconnectType: ORDER_PERSONAL_FEED_DISCONNECT,
  wsConnectingType: ORDER_PERSONAL_FEED_WS_CONNECTING,
  onOpenType: ORDER_PERSONAL_FEED_WS_OPEN,
  onCloseType: ORDER_PERSONAL_FEED_WS_CLOSE,
  onErrorType: ORDER_PERSONAL_FEED_WS_ERROR,
}

// Типизация всех экшенов приложения
export type TApplicationActions = TAuthActions | TBurgerConstructorActions | TIngredientsActions | IAddIngredientDetails | TOrderDetailsActions | TWSActions | TAddOrderCardDetailsActions;

// Типизация thunk'ов

export type TAppThunk<ReturnType = void> = ActionCreator<ThunkAction<
  ReturnType, // return value type
  RootState, // app state type
  never, // extra argument type
  TApplicationActions // action type
>>;

export type TAppDispatch = ThunkDispatch<RootState, never, TApplicationActions>;

const ordersMiddleware = createSocketMiddleware(wsFeedOrderActions)
const orderPersonalMiddleware = createSocketMiddleware(wsPersonalFeedActions)

    const store = createStore(
        rootReducer,
        composeWithDevTools(applyMiddleware(thunk, ordersMiddleware, orderPersonalMiddleware))
        )

export default store;
