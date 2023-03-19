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
import { createSocketMiddleware, TWSActionTypes } from './middleware/socketMiddleware';

import {
  connect as ordersWsConnect,
  disconnect as ordersWsDisconnect,
  wsConnecting as ordersWsConnecting,
  wsOpen as ordersWsOpen,
  wsClose as orderWsClose,
  wsGetMessage as orderWsGetMessage,
  wsError as orderWsError
} from './actions/ws-action'

const wsActions = {
  wsConnect: ordersWsConnect,
  wsDisconnect: ordersWsDisconnect,
  wsConnecting: ordersWsConnecting,
  onOpen: ordersWsOpen,
  onClose: orderWsClose,
  onMessage: orderWsGetMessage,
  onError: orderWsError
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
