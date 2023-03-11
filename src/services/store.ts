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


// Типизация всех экшенов приложения
type TApplicationActions = TAuthActions | TBurgerConstructorActions | TIngredientsActions | IAddIngredientDetails | TOrderDetailsActions;

// Типизация thunk'ов
export type AppThunk<ReturnType = void> = ActionCreator<ThunkAction<
  ReturnType, // return value type
  RootState, // app state type
  never, // extra argument type
  TApplicationActions // action type
>>;
export type AppDispatch = ThunkDispatch<RootState, never, TApplicationActions>;

const configureStore = () => {
    const store = createStore(
        rootReducer,
        composeWithDevTools(applyMiddleware(thunk))
        )
    return store;
}

export default configureStore;
