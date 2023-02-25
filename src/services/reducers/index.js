import { combineReducers } from 'redux';
import { authReducer } from './auth-reducer';
import { burgerConstructorReducer } from './burger-constructor-reducer';
import { ingredientsReducer } from './burger-ingredients-list-reducer';
import { ingredientsDetailsReducer } from './ingredients-details-reducer';
import { addNewOrderReducer } from './order-details-reducer';

const rootReducer = combineReducers({
    ingredients: ingredientsReducer,
    burgerConstructor: burgerConstructorReducer,
    ingredientCurrent: ingredientsDetailsReducer,
    orderData: addNewOrderReducer,
    authUserData: authReducer
  });

export default rootReducer;