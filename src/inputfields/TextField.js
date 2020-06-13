import React, {Component} from 'react';
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {TextField as MaterialTextField} from "@material-ui/core";
import {debounce, isEmpty, isMobileView} from "../utils/commonHelper";
import Fade from "@material-ui/core/Fade";
import Typography from "@material-ui/core/Typography";

class TextField extends Component {

  constructor(props) {
    super(props);
    this.state= {
      localValue: ''
    }
  }

  onLocalValueChange(value) {
    this.setState({
      localValue:value
    },()=>{
      this.onChange(this.state.localValue);
    });
  }

  onChange = debounce((value)=>{
    this.props.onChange(value)
  },200);


  render() {
    const {isMobileView,error,maxLength,label,staticContext,...rest} = this.props;
    const {localValue} = this.state;
    return (
        <MaterialTextField
            color={'primary'}
            margin={'dense'}
            variant={'outlined'}
            size={isMobileView?'small':'medium'}
            {...rest}
            label={label +  (isEmpty(maxLength) || isEmpty(localValue) ? '' : " ("+ localValue.length +"/"+maxLength+")")}
            value={localValue}
            onChange={(e)=>{
              this.onLocalValueChange(e.target.value);
            }}
            error={!isEmpty(error)}
            helperText={<Fade in={!isEmpty(error)}>
              <Typography variant={"caption"}>
              {error}
              </Typography>
            </Fade>}
            inputProps={{
              maxLength: maxLength,
            }}
        />
    );
  }
}

TextField.propTypes = {};

const mapStateToProps = state => ({
  isMobileView: state.utilsState.isMobileView
});

export default connect(mapStateToProps, {})(withRouter(TextField));
