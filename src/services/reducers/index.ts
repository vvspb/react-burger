import { combineReducers } from 'redux';
import { authReducer } from './auth-reducer';
import { burgerConstructorReducer } from './burger-constructor-reducer';
import { ingredientsReducer } from './burger-ingredients-list-reducer';
import { ingredientsDetailsReducer } from './ingredients-details-reducer';
import { orderCardDetailsReducer } from './order-card-details-reducer';
import { addNewOrderReducer } from './order-details-reducer';
import { orderFeedReducer } from './ws-reducer';

export type RootState = ReturnType<typeof rootReducer>; 


const rootReducer = combineReducers({
    ingredients: ingredientsReducer,
    burgerConstructor: burgerConstructorReducer,
    ingredientCurrent: ingredientsDetailsReducer,
    orderCardCurrent: orderCardDetailsReducer,
    orderData: addNewOrderReducer,
    authUserData: authReducer,
    wsOrderFeed: orderFeedReducer
  });

export default rootReducer;