import React, { Component } from 'react';
import GenerateLi from "./GenerateLi";
import { withRouter } from 'react-router-dom';
import GetLanguagesIcons from './GetLanguagesIcons';
import generateMyProfileList from './GenerateProfileList';
import { generateCart } from './GenerateCart';
import { Icon } from '../../../../components/common';

class GuestAndAuthLinks extends Component {
    constructor(props){
        super(props)
        this.state = {
            language: props.context.language,
            link: props.link,
        }
    }
    guestLinks = () => {
        const { context } = this.props;
        const li = [
            { "to": "/sign_in/", "onChangeLink": "sign_in", "ClassName" : "sign_in", "textFromObject" : "header_sign_in" }
        ]
        return <GenerateLi context={context} liArray={li}/>
    };
    authLinks = () => {
        const { language } = this.state;
        const { isOpenMyProfile, handleToggleProfile, link } = this.props.context;
        return (
            <div className="flexible horizontal jAround jCenter auth_links_icons">
                <div className="flexible auth_links_icons_item"  onClick={() => handleToggleProfile()} ref={node => this.nodeProfile = node}>
                    <Icon name='profile'/>
                    {isOpenMyProfile ? generateMyProfileList(language,link) : null }
                </div>
                <div className="flexible auth_links_icons_item" ref={node => this.nodeProfile = node}>
                    <Icon name='wallet'/>
                </div>
                <div className="flexible auth_links_icons_item" ref={node => this.nodeCart = node}>
                    <Icon onClick={() => generateCart(language)} name='shopping_card'/>
                    {/* {this.props.cart.goods ? this.props.cart.goods.reduce((prev, cur) => prev + cur.count, 0) : null} */}
                    {/* {this.state.isOpenCart ? this.generateCart() : null } */}
                </div>
            </div>
        )
    }

    render () {
        const { isAuthenticated } = this.props.context.auth;
        const { onChangeLanguage, language } = this.props.context;
        return (
            <div>
                {isAuthenticated ? this.authLinks() : this.guestLinks()}
                <GetLanguagesIcons onChangeLanguage={onChangeLanguage}
                                   language={language} />
            </div>
        )
    }
}
export default withRouter(GuestAndAuthLinks);