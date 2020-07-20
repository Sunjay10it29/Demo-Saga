import { combineReducers, } from 'redux';

import { getArticlesReducer } from './reducer';

export const reducer = combineReducers({
  [ARTICLES]: getArticlesReducer
});