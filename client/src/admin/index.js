import React from 'react';
import { connect } from "react-redux";
import {
    Route,
    Switch,
    withRouter,
} from 'react-router-dom';
import { clearErrors } from '../actions/errorActions';
import Typography from '@material-ui/core/Typography';

import ValidatableForm, {
    FormsyText,
} from '../components/sections/ValidatableForm';

import { loginAdmin } from '../actions/adminActions';

import { ShopButton } from '../components/common';

import AdminMain from './AdminMain';

import './style.scss';
import AdminOrders from "./AdminOrders";
import AdminGoods from "./AdminGoods";
// import AdminApplyers from "./AdminApplyers";
// import AdminCourses from "./AdminCourses";

class Admin extends React.PureComponent{

    state = {
        isSignInValid: false,
        isLoading: false,
        msg: null
    };


    // componentWillReceiveProps(nextProps) {
    //     this.updateState();
    // }    

    // updateState() {
    //     this.setState({
    //         language: this.props.history.location.pathname.split('/')[this.props.history.location.pathname.split('/').length - 1]
    //     });
    // }

    componentDidUpdate(prevProps) {
        const { error, isAuthenticated } = this.props;
        if (error !== prevProps.error) {
            // Check for register error
            if (error.id === 'AUTH_ERROR') {
                this.setState({ msg: error.msg.msg });
            } else {
                this.setState({ msg: null });
            }
        }
        if (isAuthenticated || error) {
            this.setState({ isLoading: false });
        }
    }


    // componentWillMount() {
    //     if(window.localStorage.token) {
    //         this.setState({ isLoading: true });
    //         // this.props.loginAdmin({ token: window.localStorage.token })
    //         //     .then((data) => data && this.setState({ isLoading: false }))
    //         //     .catch((err) => {
    //         //         if(err) {
    //         //             this.setState({ isLoading: false })
    //         //             this.props.history.push('/admin')
    //         //         }
    //         //     })
    //     } else {
    //         this.props.history.push('/bk_map_19')
    //     }
    // }

    generateAdditionalFooterContent = () => (
        <div className="flexible grow jCenter aCenter login-footer">
            <ShopButton
                onClick={() => this.onSignIn()}
                onKeyUp={() => this.onSignIn()}
                disabled={!this.state.isSignInValid}
            >
                Sign In
            </ShopButton>
        </div>
    );


    onSignIn = () => {

        const a =  this.props.loginAdmin(this.state.userSignInInfo)

        // .then((data) =>{
        //     if(data) {
        //         this.setState({ isLoading: false });
        //         window.localStorage.setItem("token", data.payload.token);
        //         this.forceUpdate();
        //     }
        // });
    }

    onSignInChange = (userSignInInfo) => this.setState({ userSignInInfo });

    generateAdminMAinPage = () => {
      if(this.state.isLoading) {
          return <div className="Spinner"/>
      } else if (this.props.isAuthenticated) {
        this.props.history.push('/bk_map_19')
        // this.forceUpdate();
        return  <Switch>
                    <Route exact path="/bk_map_19" component={AdminMain} />
                    <Route path="/bk_map_19/orders" component={AdminOrders}/>
                    <Route path="/bk_map_19/goods" component={AdminGoods}/>
                </Switch>
      }
       else {
          return (
              <div className="signInAdmin">
                  <h1 className="header-text">Are you sure to be here?, here can be viruses!</h1>
                <Typography component="h1" variant="h5">
                    {this.state.msg ? (
                        <span style={{color: 'red'}}>{this.state.msg}</span>
                    ) : null}
                </Typography>
                  <ValidatableForm
                      className=" ValidatableForm "
                      onChange={this.onSignInChange}
                      additionalFooterContent={this.generateAdditionalFooterContent()}
                      checkFormValidation={(isSignInValid) => this.setState({ isSignInValid })}
                  >
                      <FormsyText
                        value={''}
                          required
                          name="email"
                          placeholder="Email"
                          validations="isEmail"
                          validationError="Please enter a valid E-mail address"
                      />
                      <FormsyText
                        value={''}
                          required
                          type="password"
                          name="password"
                          placeholder="Password"
                          validations="minLength:6"
                          validationError="Please fill, minimum length should be 6"
                      />
                  </ValidatableForm>
              </div>
          )
      }
    };


    render(){

        return(
            <div className="Admin">
                { this.generateAdminMAinPage() }
            </div>
        )
    }
}


const mapStateToProps = ({ auth, error}) => ({
    isAuthenticated: auth.isAuthenticated,
    error: error
});

export default withRouter(connect(
    mapStateToProps,
    { loginAdmin, clearErrors }
)(Admin));
