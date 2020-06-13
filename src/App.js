import logo from './logo.svg';

import React, {Component} from 'react';
import {theme} from "./assets/materialTheme";
import {Button, MuiThemeProvider} from "@material-ui/core";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import store from "./store";
import {Provider} from 'react-redux';
import Header from "./layout/Header";
import Home from "./components/home/Home";
import Container from "@material-ui/core/Container";
import SignUp from "./components/user/SignUp";
import SignIn from "./components/user/SignIn";

console.log('theme is ', theme);


class App extends Component {
  render() {
    return (

        <Provider store={store}>
          <MuiThemeProvider theme={theme}>
            <Router>
              <Header/>
                <Switch>
                  <Route path="/user/signup">
                    <SignUp/>
                  </Route>
                  <Route path="/user/signin">
                    <SignIn/>
                  </Route>
                  <Route path="/">
                    <Home/>
                  </Route>
                </Switch>

            </Router>
          </MuiThemeProvider>
        </Provider>

    );
  }
}

export default App;


