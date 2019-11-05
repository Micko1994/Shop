import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import GenerateLi from "./GenerateLi";
import {Icon} from "../../../common";



class NavListForAll extends Component {
    /*constructor(props){
        super(props)
    }*/

    /**************************************************************************************************/

    /*guestLinks = () => {
        const { language, link } = this.state;
        return (
            <li className="flexible aCenter">
                <NavLink
                    to={`/sign_in/${language}`}
                    onClick={() => this.onChangeLink('sign_in')}
                    className={link === 'sign_in' ? 'selected' : ''}
                >
                    {language && selectLanguage(language).header_sign_in}
                </NavLink>
            </li>
        )
    };
    authLinks = () => {
        const { language, link } = this.state;
        return (
            <div className="flexible horizontal jAround jCenter auth_links_icons">
                <div className="flexible auth_links_icons_item"  onClick={() => this.handleToggleProfile()} ref={node => this.nodeProfile = node}>
                    <Icon name='profile'/>
                    {this.state.isOpenMyProfile ?
                        this.generateMyProfileList()
                        : null }
                </div>
                <div className="flexible auth_links_icons_item" ref={node => this.nodeProfile = node}>
                    <Icon name='wallet'/>
                </div>
                <div className="flexible auth_links_icons_item" ref={node => this.nodeCart = node}>
                    <Icon onClick={() => this.generateCart()} name='shopping_card'/>
                    {console.log('thi.props.cart 112233', this.props.cart)}
                    {console.log('thi.props.cart.count 11223344', this.props.count)}
                    {/!* {this.props.cart.goods ? this.props.cart.goods.reduce((prev, cur) => prev + cur.count, 0) : null} *!/}
                    {/!* {this.state.isOpenCart ?
                    this.generateCart()
                : null } *!/}
                </div>
            </div>
        )
    }*/

    /**************************************************************************************************/

    render() {
        return (
            <ul className="flexible aCenter">
                <GenerateLi />
                { this.props.auth.isAuthenticated ? this.authLinks() : this.guestLinks() }
                { this.getLanguagesIcons() }
            </ul>
        )
    }
}

const mapStateToProps = ({ auth, cart }) => ({ auth, cart });
export default connect(mapStateToProps)(withRouter(NavListForAll));