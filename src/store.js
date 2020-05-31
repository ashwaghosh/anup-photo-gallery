import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import {rootReducer} from './reducers';

const initialState = {};

const middleware = [thunk];

function createStoreForApp(){
  if (window.devToolsExtension) {
    return createStore(
        rootReducer,
        initialState,
        compose(
            applyMiddleware(...middleware),
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        )
    )
  } else {
      return createStore(
          rootReducer,
          initialState,
          compose(
              applyMiddleware(...middleware),
          )
      )
  }
}


const store = createStoreForApp();
export default store;
