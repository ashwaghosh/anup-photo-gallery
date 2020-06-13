import React, {Component} from 'react';
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import {Button as MaterialButton } from "@material-ui/core";

class Button extends Component {
  render() {
    const {className,isMobileView,children,staticContext,...rest} = this.props;
    return (
        <MaterialButton
            className={className}
            variant={"contained"}
            color={'secondary'}
            {...rest}
            size={'small'}
        >
              <Typography className={'text-white'} variant={"subtitle1"}>
                {
                  children
                }
              </Typography>
        </MaterialButton>
    );
  }
}

Button.propTypes = {};

const mapStateToProps = state => ({
  isMobileView: state.utilsState.isMobileView
});

export default connect(mapStateToProps, {})(withRouter(Button));
