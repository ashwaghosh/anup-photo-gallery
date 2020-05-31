import React, {Component} from 'react';
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Slide from "@material-ui/core/Slide";
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import CssBaseline from "@material-ui/core/CssBaseline";


function HideOnScroll(props) {
  const {children, window} = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({target: window ? window() : undefined});

  return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,

  window: PropTypes.func,
};


class Header extends Component {
  render() {
    const {props} = this;
    return (
        <div>

          <HideOnScroll {...props}>
            <AppBar>
              <Toolbar className="justify-content-center">
                <h3>Anup's PortFolio</h3>
              </Toolbar>
            </AppBar>
          </HideOnScroll>
          <Toolbar/>

        </div>
    );
  }
}


Header.propTypes = {};

const mapStateToProps = state => ({});

export default connect(mapStateToProps, {})(withRouter(Header));
