import React, {Component} from 'react';
import {connect} from "react-redux";
import {Link, withRouter} from "react-router-dom";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Slide from "@material-ui/core/Slide";
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import CssBaseline from "@material-ui/core/CssBaseline";

import {isEmpty} from "../utils/commonHelper";
import {logoutUser} from "../action/userAction";
import Typography from "@material-ui/core/Typography";
import Button from "../inputfields/Button";


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
    const {profile} = this.props;

    let authOptions = isEmpty(profile) ? (<div>
      <Link className={'mr-2 text-decoration-none'} to={'/user/signin'}>
        <Button>Login</Button>
      </Link>
      <Link className={"text-decoration-none"} to={'/user/signup'}>
        <Button>Sign up</Button>
      </Link>
    </div>) : (<div>
      <Button onClick={() => this.props.logoutUser()}>Logout</Button>
    </div>);
    return (
        <div>

          <HideOnScroll>
            <AppBar>
              <Toolbar className="justify-content-between">
                <Link className={'text-decoration-none'}  to={"/"}>
                  <Typography variant="h5">
                    ANUP photo gallery
                  </Typography>
                </Link>
                {
                  authOptions
                }
              </Toolbar>
            </AppBar>
          </HideOnScroll>
          <Toolbar/>

        </div>
    );
  }
}


Header.propTypes = {};

const mapStateToProps = state => ({
  profile: state.userState.profile
});

export default connect(mapStateToProps, {logoutUser})(withRouter(Header));
