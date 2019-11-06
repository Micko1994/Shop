import React, { Component } from 'react';
import GenerateLi from "./GenerateLi";
import { withRouter } from 'react-router-dom';
import GetLanguagesIcons from './GetLanguagesIcons';
import { Icon } from '../../../../components/common';

class GuestAndAuthLinks extends Component {
    constructor(props){
        super(props)

        this.state = {
            language: props.language ,
            link: props.link,
        }
    }
    guestLinks = () => {
        const { context } = this.props;
        const li = [
            { "to": "/sign_in/", "onChangeLink": "sign_in", "ClassName" : "sign_in", "textFromObject" : "header_sign_in" }
        ]
        return (
            <GenerateLi context={context} liArray={li}/>
        )
    };
    authLinks = () => {
        return (
            <div className="flexible horizontal jAround jCenter auth_links_icons">
                <div className="flexible auth_links_icons_item"  onClick={() => this.handleToggleProfile()} ref={node => this.nodeProfile = node}>
                    <Icon name='profile'/>
                    {this.state.isOpenMyProfile ? this.generateMyProfileList() : null }
                </div>
                <div className="flexible auth_links_icons_item" ref={node => this.nodeProfile = node}>
                    <Icon name='wallet'/>
                </div>
                <div className="flexible auth_links_icons_item" ref={node => this.nodeCart = node}>
                    <Icon onClick={() => this.generateCart()} name='shopping_card'/>
                    {console.log('this.props.cart 112233', this.props.cart)}
                    {console.log('this.props.cart.count 11223344', this.props.count)}
                    {/* {this.props.cart.goods ? this.props.cart.goods.reduce((prev, cur) => prev + cur.count, 0) : null} */}
                    {/* {this.state.isOpenCart ?
                    this.generateCart()
                : null } */}
                </div>
            </div>
        )
    }


    render () {
        const { isAuthenticated } = this.props.context.auth;
        const { context } = this.props;
        return (
            <div>
                {isAuthenticated ? this.authLinks() : this.guestLinks()}
                <GetLanguagesIcons context={context} />
            </div>
        )
    }
}
export default withRouter(GuestAndAuthLinks);