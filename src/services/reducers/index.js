import { combineReducers } from 'redux';
import { burgerConstructorReducer } from './burger-constructor-reducer';
import { ingredientsReducer } from './burger-ingredients-list-reducer';
import { ingredientsDetailsReducer } from './ingredients-details-reducer';

const rootReducer = combineReducers({
    ingredients: ingredientsReducer,
    burgerConstructor: burgerConstructorReducer,
    ingredientCurrent: ingredientsDetailsReducer
  });

export default rootReducer;