import React, { PureComponent } from 'react';
import {
    withRouter,
    NavLink,
} from 'react-router-dom';

// import Logo from 'asse/ts/level-up-logo.png';
import { selectLanguage } from 'translate';

import './style.scss';

@withRouter
export default class Footer extends PureComponent{
    pathname = this.props.history.location.pathname.split('/')
    lang = this.pathname[this.pathname.length - 1]

    state = {
        language: this.lang,
        link: this.link,
    };

    componentWillReceiveProps(nextProps) {
        this.updateState();
    }    

    updateState() {
        this.setState({
            language: this.props.history.location.pathname.split('/')[this.props.history.location.pathname.split('/').length - 1]
        });
    }

    generateFooter = () => (
        <ul className="flexible aCenter">
            <li className="flexible aCenter">
                <NavLink 
                    to={`/about/${this.state.language}`} 
                    onClick={() => this.onChangeLink('about')}
                    className={this.state.link === 'about' ? 'selected' : ''}
                >
                    {this.state.language && selectLanguage(this.state.language).header_about}
                </NavLink>
            </li>
            <li className="flexible aCenter">
                <NavLink 
                    to={`/contact-us/${this.state.language}`} 
                    onClick={() => this.onChangeLink('contact-us')}
                    className={this.state.link === 'contact-us' ? 'selected' : ''}
                >
                    {this.state.language && selectLanguage(this.state.language).header_contact_us}
                </NavLink>
            </li>
        </ul>
    )

    render(){
        return (
            <footer className="Footer flexible aCenter jAround">
                <div className="footer_nav flexible aCenter">
                   {this.generateFooter()}
                </div>
                <div className="footer-text">
                    ©2019 Suit Up
                </div>
            </footer>
        )
    }
}
