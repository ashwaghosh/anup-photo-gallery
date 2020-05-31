import {combineReducers} from 'redux';

import homeReducer from "./homeReducer";


export const appReducer = combineReducers({
  homeState: homeReducer,
});


export const rootReducer = (state, action) => {
  return appReducer(state, action)
};

