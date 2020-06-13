import React, {Component} from 'react';
import Avatar from '@material-ui/core/Avatar';

import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import Card from "@material-ui/core/Card";
import Divider from "@material-ui/core/Divider";
import TextField from "../../inputfields/TextField";
import heroImage from "../../assets/images/hero.jpg";
import CardHeader from "@material-ui/core/CardHeader";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import {registerUser} from "../../action/userAction";
import {isEmpty, isValidEmail} from "../../utils/commonHelper";


class SignUp extends Component {

  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      firstNameError: '',
      lastName: '',
      emailAddress: '',
      emailAddressError: '',
      password1: '',
      password1Error: '',
      password2: '',
      password2Error: ''
    }
  }

  onChange(key, value) {

    this.setState({
      ...this.state,
      [key]: value,
      [key+'Error']:''
    },()=>{
      this.validateFields(key);
    })

  }

  validateFields(type) {

    const {firstName, emailAddress,password1,password2 } = this.state;

    if(type === 'firstName' || type === 'all' ) {
        if(isEmpty(firstName)) {
          this.setState({
            firstNameError: 'First Name is required'
          });
          return false;
        }
    }

    if(type === 'emailAddress' || type === 'all' ) {
        if(isValidEmail(emailAddress)) {
          this.setState({
            emailAddressError: 'Not a valid email address'
          });
          return false;
        }
    }

    if(type === 'password1' || type === 'all' ) {
      if(isEmpty(password1)) {
        this.setState({
          password1Error: 'Password is required'
        });
        return false;
      }

      if(password1.length < 8) {
        this.setState({
          password1Error: 'Password too short'
        });
        return false;
      }

    }

    if(type === 'password2' || type === 'all' ) {
      if(isEmpty(password2)) {
        this.setState({
          password2Error: 'Retype Password is required'
        });
        return false;
      }

      if(password1 !== password2) {
        this.setState({
          password2Error: 'Password is not matching'
        });
        return false;
      }
    }

    return true;

  }



  submit() {

    if(!this.validateFields('all')) {
      console.log('error in fields');
      return;
    }



    const {firstName, lastName, emailAddress, password1} = this.state;

    const userObj = {
      firstName: firstName,
      lastName: lastName,
      emailAddress: emailAddress,
      password: password1,
    };

    // console.log('user object is ', userObj);
    this.props.registerUser(userObj);

  };


  render() {

    const {firstName, firstNameError, lastName, emailAddress, emailAddressError, password1, password1Error, password2, password2Error} = this.state;

    return (
        <div className="hero_container align-items-center" style={{backgroundImage: `url(${heroImage})`}}>
          <div className="row w-100">
            <div className="offset-lg-4 col-lg-4 offset-md-3 col-md-6 col-12">
              <Card className="p-3">
                <div className='d-flex flex-column'>
                  <div className="d-flex justify-content-center">
                    <Avatar color={'primary'} variant='circle'>
                      <i className="fas fa-lock"/>
                    </Avatar>
                  </div>
                  <div>
                    <Typography variant="h4" component="h1" color={'primary'} align={'center'}>
                      Sign Up
                    </Typography>
                  </div>

                </div>
                <Divider className="mb-2"/>
              <form>
                <div className='d-flex flex-column'>

                  <TextField
                      key={'firstName'}
                      value={firstName}
                      onChange={(value) => this.onChange('firstName', value)}
                      label={'First Name'}
                      placeholder={'First Name'}
                      required
                      maxLength={20}
                      error={firstNameError}
                  />
                  <TextField
                      key={'lastName'}
                      value={lastName}
                      onChange={(value) => this.onChange('lastName', value)}
                      label={'Last Name'}
                      placeholder={'Last Name'}
                      maxLength={20}
                  />
                  <TextField
                      key={'emailAddress'}
                      value={emailAddress}
                      onChange={(value) => this.onChange('emailAddress', value)}
                      label={'Email Address'}
                      placeholder={'Email Address'}
                      required
                      maxLength={50}
                      error={emailAddressError}
                  />
                  <TextField
                      key={'password1'}
                      value={password1}
                      onChange={(value) => this.onChange('password1', value)}
                      label={'Password'}
                      placeholder={'Password'}
                      error={password1Error}
                      required
                      type={"password"}
                      maxLength={20}

                  />
                  <TextField
                      key={'password2'}
                      value={password2}
                      onChange={(value) => this.onChange('password2', value)}
                      label={'ReType Password'}
                      placeholder={'ReType Password'}
                      error={password2Error}
                      required
                      type={"password"}
                      maxLength={20}
                  />

                  <div>
                    <Button
                        color={'primary'}
                        variant={"contained"}
                        onClick={()=>this.submit()}
                        fullWidth>
                      Sign Up
                    </Button>
                  </div>

                </div>
              </form>
              </Card>
            </div>
          </div>
        </div>
    )
  }


}

SignUp.propTypes = {};

const mapStateToProps = state => ({});

export default connect(mapStateToProps, {registerUser})(withRouter(SignUp));
