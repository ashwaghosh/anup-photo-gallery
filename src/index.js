import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './assets/css/app.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import {getAuthorizationToken} from "./utils/httpHelper";
import store from "./store";
import jwt_decode from 'jwt-decode';
import {getMyProfile,logoutUser} from "./action/userAction";
import {isEmpty} from "./utils/commonHelper";

let authTokenFromStorage = getAuthorizationToken();
if (authTokenFromStorage) {
  // Set auth token header auth
  // setAuthToken(localStorage.jwtToken);
  // Decode token and get user info and exp
  const decoded = jwt_decode(authTokenFromStorage);
  decoded.isAuthenticated = !isEmpty(decoded);
  // Set user and isAuthenticated


  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Logout user

    store.dispatch(logoutUser());

    // Redirect to login
    window.location.href = '/user/login';
  } else {
    store.dispatch(getMyProfile());
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
