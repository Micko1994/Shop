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
import { login } from '../../actions/authActions';
import { clearErrors } from '../../actions/errorActions';

import './style.scss'
import { selectLanguage } from 'translate';
import {
    withRouter,
    NavLink
} from 'react-router-dom';
import { connect } from 'react-redux';

import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';



@withRouter
class SignIn extends Component {
    pathname = this.props.history.location.pathname.split('/')
    lang = this.pathname[this.pathname.length - 1]
    
    state = {
        language: this.lang,
        email: '',
        password: '',
        msg: null,
        isLoading: false,
    };

    componentWillReceiveProps(nextProps) {
        this.updateState();
    }    

    updateState() {
        this.setState({
            language: this.props.history.location.pathname.split('/')[this.props.history.location.pathname.split('/').length - 1],
            isLoading: false
        });
    }


    ///////

    componentDidUpdate(prevProps) {
        const { error } = this.props;
        if (error !== prevProps.error) {
            // Check for register error
            if (error.id === 'REGISTER_FAIL') {
                this.setState({ msg: error.msg.msg });
            } else {
                this.setState({ msg: null });
            }
        }
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    onSubmit = e => {
        this.setState({ isLoading: true });
        e.preventDefault();
        const { email, password } = this.state;
        const user = {
            email,
            password
        };

        // Attempt to login

        this.props.login(user);
    };

    //////

    generateAdminMAinPage = () => {
        if(this.state.isLoading) {
            return <div className="Spinner"/>
        } 
        else if(this.props.isAuthenticated){
            this.props.history.push('/profile/' + this.state.language)
        }
        else  {
            return (
                <div className="sign_container">
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
                                        {this.state.language && selectLanguage(this.state.language).sign_in}
                                    </span>
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
                                    id="email"
                                    label={this.state.language && selectLanguage(this.state.language).sign_up_email}
                                    name="email"
                                    autoComplete="email"
                                    autoFocus
                                    onChange={this.onChange}
                                    value={this.state.email}
                                    validators={['required', 'maxStringLength:100', 'isEmail']}
                                    errorMessages={['this field is required', 'Your name is too long', 'email is not valid']}
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
                                    autoComplete="current-password"
                                    onChange={this.onChange}
                                    value={this.state.password}
                                    validators={['required', 'maxStringLength:100']}
                                    errorMessages={['this field is required', 'Your password is too long']}
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
                                        {this.state.language && selectLanguage(this.state.language).sign_in}
                                    </span>
                                </Button>
                            </ValidatorForm>
                                    <Grid 
                                    container 
                                    style={{
                                        margin: '10px 0',
                                    }} 
                                >
                                    {/* <Grid item xs>
                                        <Link href="#" variant="body2">
                                        Forgot password?
                                        </Link>
                                    </Grid> */}
                                    <Grid item>
                                        <li className="flexible aCenter">
                                            <NavLink 
                                                to={`/sign_up/${this.state.language}`} 
                                                lang={this.state.language}
                                                // onClick={() => this.onChangeLink('create')}
                                                // className={this.state.link === 'create' ? 'selected' : ''}
                                                style={{
                                                    color: '#3f51b5',
                                                }}        
                                            >
                                                {this.state.language && selectLanguage(this.state.language).do_not_have_account_sign_up}
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

export default withRouter(connect(mapStateToProps,    { login, clearErrors })(SignIn));

