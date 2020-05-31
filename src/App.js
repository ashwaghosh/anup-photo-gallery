import logo from './logo.svg';

import React, {Component} from 'react';
import {theme} from "./assets/materialTheme";
import {ThemeProvider} from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import {MuiThemeProvider} from "@material-ui/core";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import store from "./store";
import {Provider} from 'react-redux';
import Header from "./layout/Header";
import Home from "./components/home/Home";
import Container from "@material-ui/core/Container";

class App extends Component {
  render() {
    return (

        <Provider store={store}>
          <MuiThemeProvider theme={theme}>
            <Router>
              <Header/>

                <Switch>
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


