import { combineReducers } from 'redux';

import { ingredientsReducer } from './burger-ingredients-list-reducer';

const rootReducer = combineReducers({
    ingredients: ingredientsReducer,
  });

export default rootReducer