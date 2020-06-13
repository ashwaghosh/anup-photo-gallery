import React, {Component} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import heroImage from "../../assets/images/hero.jpg";
import Card from "@material-ui/core/Card";
import Divider from "@material-ui/core/Divider";
import {loginUser} from "../../action/userAction";
import TextField from "../../inputfields/TextField";
import {isEmpty, isValidEmail} from "../../utils/commonHelper";


class SignIn extends Component {

  constructor(props) {
    super(props);
    this.state = {
      password: '',
      passwordError:'',
      emailAddress: '',
      emailAddressError: ''
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

    const { emailAddress,password } = this.state;

    if(type === 'emailAddress' || type === 'all' ) {
      if(isEmpty(emailAddress)) {
        this.setState({
          emailAddressError: 'Email Address Required'
        });
        return false;
      }
    }

    if(type === 'password' || type === 'all' ) {
      if(isEmpty(password)) {
        this.setState({
          passwordError: 'Password is required'
        });
        return false;
      }
    }


    return true;

  }



  submit () {
    if(!this.validateFields('all')){
      return;
    }
    const { emailAddress, password} = this.state;

    const userObj = {
      emailAddress: emailAddress,
      password: password,
    };

    this.props.loginUser(userObj);
  };

  render() {
    const {password, emailAddress, emailAddressError,passwordError} = this.state;

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
                      Sign In
                    </Typography>
                  </div>

                </div>
                <Divider className="mb-2"/>
                <div className='d-flex flex-column'>

                  <TextField
                      value={emailAddress}
                      onChange={(value) => this.onChange('emailAddress', value)}
                      label={'Email Address'}
                      placeholder={'Email Address'}
                      error={emailAddressError}
                      required
                  />
                  <TextField
                      value={password}
                      onChange={(value) => this.onChange('password', value)}
                      label={'Password'}
                      placeholder={'Password'}
                      error={passwordError}
                      required
                  />


                  <div>
                    <Button
                        color={'primary'}
                        variant={"contained"}
                        onClick={()=>this.submit()}
                        fullWidth>
                      Sign In
                    </Button>
                  </div>

                </div>
              </Card>
            </div>
          </div>
        </div>
    );

  }


}


SignIn.propTypes = {};

const mapStateToProps = state => ({});

export default connect(mapStateToProps, {loginUser})(withRouter(SignIn));
