import {combineReducers} from 'redux';

import homeReducer from "./homeReducer";
import userReducer from "./userReducer";
import UtilsReducer from "./UtilsReducer";


export const appReducer = combineReducers({
  homeState: homeReducer,
  userState: userReducer,
  utilsState: UtilsReducer
});


export const rootReducer = (state, action) => {
  return appReducer(state, action)
};

