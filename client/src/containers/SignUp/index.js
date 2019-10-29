import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { register } from '../../actions/authActions';
import { clearErrors } from '../../actions/errorActions';

import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';

import './style.scss'
import { selectLanguage } from 'translate';
import {
    withRouter,
    NavLink
} from 'react-router-dom';
import { connect } from 'react-redux';


@withRouter
class SignUp extends Component {
    pathname = this.props.history.location.pathname.split('/')
    lang = this.pathname[this.pathname.length - 1]


    state = {
        language: this.lang,
        name: '',
        surname: '',
        address: '',
        email: '',
        password: '',
        confirm_password: '',
        msg: null
    };


    componentWillReceiveProps(nextProps) {
        this.updateState();
    }    

    updateState() {
        this.setState({
            language: this.props.history.location.pathname.split('/')[this.props.history.location.pathname.split('/').length - 1],
            isLoading: false
        });
        this.generateAdminMAinPage()
    }

    componentDidUpdate(prevProps) {
        const { error, isAuthenticated } = this.props;
        console.log('error:::', error)
        console.log('isAuthenticated:::', isAuthenticated)
        console.log('prevProps:::', prevProps)
        if (error !== prevProps.error) {
            // Check for register error
            if (error.id === 'REGISTER_FAIL') {
                this.setState({ msg: error.msg.msg });
            } else {
                this.setState({ msg: null });
            }
        }
        // if (isAuthenticated) {
        //     this.setState({ isLoading: false });
        // }
    }

    // componentWillUpdate(prevProps){
    //     console.log('prevProps in componentWillUpdate::', prevProps)
    // }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    onSubmit = e => {
        this.setState({ isLoading: true });
        e.preventDefault();

        const { name, surname, address, email, password } = this.state;

        // Create user object
        const newUser = {
            name,
            surname,
            address,
            email,
            password
        };
        // this.props.authorizeUser(newUser).then((data) =>{
        //     if(data) {
        //         this.setState({ isLoading: false });
        //         console.log('data: in promise::',data)
        //         // window.localStorage.setItem("token", data.payload.token);
        //         this.forceUpdate();
        //         return this.props.history.push('/profile/' + this.state.language)
        //     }
        // });
        // .then(() => console.log('mtav promisi mej!!'))
        this.props.register(newUser)
        // this.setState({ isLoading: false });
    };


    handleNameChange = event => {
        this.setState({ name: event.target.value }, () => {
            this.validateName();
        });
    };

    componentDidMount() {
        // custom rule will have name 'isPasswordMatch'
        ValidatorForm.addValidationRule('isPasswordMatch', (value) => {
            if (value !== this.state.password) {
                return false;
            }
            return true;
        });
    }
 
    componentWillUnmount() {
        // remove rule when it is not needed
        ValidatorForm.removeValidationRule('isPasswordMatch');
    }

    generateAdminMAinPage = () => {
        if(this.state.isLoading) {
            return <div className="Spinner"/>
        } 
        else if(this.props.isAuthenticated){
            this.props.history.push('/sign_in/' + this.state.language)
        }
        else  {
            return ( <div className="sign_container">
                    <Container component="main" maxWidth="xs">
                        <CssBaseline />
                        <div className={'paper'}>
                            <div className={'sign_container_main'}>
                                <Avatar style={{
                                    backgroundColor: '#9B59B6',
                                }}>
                                <LockOutlinedIcon />
                                </Avatar>
                                <Typography component="h1" variant="h5">
                                    <span>
                                        {this.state.language && selectLanguage(this.state.language).sign_up}
                                    </span>
                                </Typography>
                                <Typography component="h1" variant="h5">
                                    {this.state.msg ? (
                                        <span style={{color: 'red'}}>{this.state.msg}</span>
                                    ) : null}
                                </Typography>

                            </div>
                            <form className={'form'} noValidate>
                            <ValidatorForm
                                onSubmit={this.onSubmit}
                            >
                                <TextValidator
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="component-error"
                                    label={this.state.language && selectLanguage(this.state.language).sign_up_name}
                                    name="name"
                                    autoComplete="name"
                                    autoFocus
                                    onChange={this.onChange}
                                    value={this.state.name}
                                    validators={['required', 'maxStringLength:100', 'matchRegexp:^((?!http|www).){1,100}$']}
                                    errorMessages={['this field is required', 'Your name is too long', 'has special symbols which are not allowed']}
                                />
                                <TextValidator
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="surname"
                                    label={this.state.language && selectLanguage(this.state.language).sign_up_surname}
                                    name="surname"
                                    autoComplete="surname"
                                    autoFocus
                                    onChange={this.onChange}
                                    onInput={this.handleSurnameChange}
                                    value={this.state.surname}
                                    validators={['required', 'maxStringLength:100', 'matchRegexp:^((?!http|www).){1,100}$']}
                                    errorMessages={['this field is required', 'Your sur name is too long', 'has special symbols which are not allowed']}
                                    />
                                <TextValidator
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="email"
                                    label={this.state.language && selectLanguage(this.state.language).sign_up_email}
                                    name="email"
                                    autoComplete="email"
                                    autoFocus
                                    onChange={this.onChange}
                                    onInput={this.handleEmailChange}
                                    value={this.state.email}
                                    validators={['required', 'maxStringLength:100', 'isEmail']}
                                    errorMessages={['this field is required', 'Your name is too long', 'email is not valid']}
                                    />
                                <TextValidator
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="address"
                                    label={this.state.language && selectLanguage(this.state.language).sign_up_address}
                                    name="address"
                                    autoComplete="address"
                                    autoFocus
                                    onChange={this.onChange}
                                    onInput={this.handleAddressChange}
                                    value={this.state.address}
                                    validators={['required', 'maxStringLength:100']}
                                    errorMessages={['this field is required', 'Your address is too long']}
                                    />
                                <TextValidator
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="password"
                                    label={this.state.language && selectLanguage(this.state.language).sign_up_password}
                                    type="password"
                                    id="password"
                                    onChange={this.onChange}
                                    onInput={this.handlePasswordChange}
                                    value={this.state.password}
                                    validators={['required', 'maxStringLength:100']}
                                    errorMessages={['this field is required', 'Your password is too long']}
                                    />
                                <TextValidator
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="confirm_password"
                                    label={this.state.language && selectLanguage(this.state.language).sign_up_confirm_password}
                                    type="password"
                                    id="confirm_password"
                                    onChange={this.onChange}
                                    onInput={this.handleConfirmPasswordChange}
                                    value={this.state.confirm_password}
                                    validators={['required', 'maxStringLength:100', 'isPasswordMatch']}
                                    errorMessages={['this field is required', 'Your confirm password is too long', 'Passwords you have provided don\'t match']}
                                    />
                                <FormControlLabel
                                    control={<Checkbox value="remember" color="primary" />}
                                    label={this.state.language && selectLanguage(this.state.language).remember_me}
                                    />
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    style={{
                                        backgroundColor: '#9B59B6',
                                        color: '#fff'
                                    }}
                                    className={'submit'}
                                >
                                    <span
                                        style={{
                                            color: '#fff'
                                        }}
                                        >
                                        {this.state.language && selectLanguage(this.state.language).sign_up}
                                    </span>
                                </Button>
                            </ValidatorForm>
                                    <Grid 
                                    container 
                                    style={{
                                        margin: '10px 0',
                                    }} 
                                >
                                    <Grid item>
                                        <li className="flexible aCenter">
                                            <NavLink 
                                                to={`/sign_in/${this.state.language}`} 
                                                style={{
                                                    color: '#3f51b5',
                                                }}        
                                            >
                                                {/* {selectLanguage(this.props.lang).already_have_an_account_Sign_in} */}
                                                {this.state.language && selectLanguage(this.state.language).already_have_an_account_Sign_in}
                                            </NavLink>
                                        </li>
                                    </Grid>
                                </Grid>
                            </form>
                        </div>
                    </Container>
                </div>
            )
        }
    }
            

    render() {
        return (
            <section className="Main">
                { this.generateAdminMAinPage() }
            </section>
        );      
    }
}


const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error
});

export default withRouter(connect(mapStateToProps, { register, clearErrors })(SignUp));


