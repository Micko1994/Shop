import React, { PureComponent } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {
    withRouter,
} from 'react-router-dom';


import { connect } from 'react-redux';

import { selectLanguage } from 'translate';

import './style.scss';

import { Icon } from '../../components/common';

class ContactUs extends PureComponent{

    pathname = this.props.history.location.pathname.split('/')
    lang = this.pathname[this.pathname.length - 1]

    
    state = {
        language: this.lang,
    };


    componentWillReceiveProps(nextProps) {
        this.updateState();
    }    

    updateState() {
        const { pathname } = this.props.history.location;
        this.setState({
            language: pathname.split('/')[pathname.split('/').length - 1]
        });
    }

    render(){
        const { lang } = this.props.match.params;
        const { language } = this.state;
        return (
            <section className="ContactUs withStretch flexible vertical">
                <div className="contact-us-content page-content">
                    <h2 className="header-text">
                        {selectLanguage(lang).contact_title}
                    </h2>
                    {/* {this.generateAboutUsInfo()} */}
                    <div className="contact-us-content_main">
                        <div className="contact-us-content_info">
                            <div className="contact-us-content_info_icon">
                                <Icon name="phone" />
                                <span style={{color: '#9B59B6'}}>
                                    +374 77 789 100
                                </span>
                            </div>
                            <span 
                                style={{
                                    fontSize: '20px',
                                    fontWeight: 'bold',
                                }}
                            >
                                {selectLanguage(lang).need_help}
                            </span>
                            <span>
                                {selectLanguage(lang).need_help_description}
                            </span>
                            <div className="contact-us-content_info_icon">
                                <Icon name="mail" />
                                <span style={{color: '#9B59B6'}}>
                                    support@render.com
                                </span>
                            </div>
                            <span
                                style={{
                                    fontSize: '20px',
                                    fontWeight: 'bold',
                                }}
                            >
                                {selectLanguage(lang).got_ideas}
                            </span>
                            <span>
                                {selectLanguage(lang).got_ideas_description}
                            </span>
                            <div className="contact-us-content_info_icon">
                                <Icon name="mail" />
                                <span style={{color: '#9B59B6'}}>
                                marketing@render.com
                                </span>
                            </div>

                        </div>
                        <div className="contact-us-content_form">
                            <form className={'form'} noValidate>
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="email"
                                    label={language && selectLanguage(language).sign_up_email}
                                    name="email"
                                    value={this.props.auth && this.props.auth.user ? this.props.auth.user.email : null}
                                    autoComplete="email"
                                    autoFocus
                                />
                                <TextField
                                    variant="outlined"
                                    id="text"
                                    label={language && selectLanguage(language).text}
                                    multiline
                                    fullWidth
                                    rows="4"
                                    margin="normal"
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
                                        {language && selectLanguage(language).send}
                                    </span>
                                </Button>
                            </form>
                        </div>
                    </div>
                    
                </div>
            </section>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default withRouter(connect(mapStateToProps)(ContactUs));
