import { combineReducers } from 'redux';
import { burgerConstructorReducer } from './burger-constructor-reducer';
import { ingredientsReducer } from './burger-ingredients-list-reducer';
import { ingredientsDetailsReducer } from './ingredients-details-reducer';
import { addNewOrderReducer } from './order-details-reducer';
import { registerPageReducer } from './register-page-reducer';

const rootReducer = combineReducers({
    ingredients: ingredientsReducer,
    burgerConstructor: burgerConstructorReducer,
    ingredientCurrent: ingredientsDetailsReducer,
    orderData: addNewOrderReducer,
    signUpUser: registerPageReducer,
  });

export default rootReducer;