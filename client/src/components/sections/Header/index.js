import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../../actions/authActions'
import {GoodItemMini} from '../../common'
import ReactDOM from 'react-dom';
import {
    withRouter,
    NavLink
} from 'react-router-dom';

import './style.scss'

import { Icon } from '../../../components/common';

import { selectLanguage } from 'translate';

class Header extends Component {
    pathname = this.props.history.location.pathname.split('/')
    lang = this.pathname[this.pathname.length - 1]
    first = this.pathname[1]
    link = (this.first === 'uk' || this.first === 'ru' || this.first === 'am') ? 'home' : this.first ;
    cardRef = null;
    state = {
        isOpenMyProfile: false,
        isOpenCart: false,
        dropdownOpen: false,
        language: this.lang,
        headerShown: false,
        isOpenMenu: false,
        link: this.link,
        count: 0
    };
    
    static propTypes = {
        auth: PropTypes.object.isRequired
    };
    

    // toggle = () => {
    //     this.setState({
    //         isOpen: !this.state.isOpen,
    //     });
    // };
    toggleDropDown = () => {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        })
    }

    componentWillMount(){
        this.setState({ language: this.props.lang })
    }
    componentWillReceiveProps(nextProps){
        this.setState({ language: nextProps.lang })
        this.updateState();
    }   

    updateState() {
        // this.props.getCarts()
        this.setState({
            language: this.props.history.location.pathname.split('/')[this.props.history.location.pathname.split('/').length - 1],
        });
    }

    onChangeLanguage = (language) => {
        const pathName = this.props.history.location.pathname.split('/');
        pathName.pop();
        const location = pathName.length > 1 ? (pathName.join('/') + '/' + language) : '/' + language;
        this.props.history.push(location);
        this.toggleHeader();
    };

    onChangeLink = (link) => {
        this.setState({ link: link })
        this.toggleHeader()
    }

    toggleHeader = (key) => {
        if(key === 'login') {
            this.props.toggleLogin(true);
        } else if (key === 'resume') {
            this.props.history.push(`/resume/${this.state.language}`)
        }
        this.setState({ 
            headerShown: !this.state.headerShown,
        });
    };

    onLogoutHandle = () => (
        this.props.logout()
    )
        
    handleToggleProfile = () => {
        if (!this.state.isOpenMyProfile) {
            // attach/remove event handler
            document.addEventListener('click', this.handleOutsideClick, false);
        } else {
            document.removeEventListener('click', this.handleOutsideClick, false);
        }
        this.setState({isOpenMyProfile: !this.state.isOpenMyProfile});
    }
    
    handleOutsideClick = (e) => {
        const node = ReactDOM.findDOMNode(this.nodeProfile);
        // ignore clicks on the component itself
        if (node.contains(e.target)) {
            return;
        }
        this.handleToggleProfile();
    }

    // handleToggleCart = () => {
    //     if (!this.state.isOpenCart) {
    //       // attach/remove event handler
    //       document.addEventListener('click', this.handleOutsideClickCart, false);
    //     } else {
    //       document.removeEventListener('click', this.handleOutsideClickCart, false);
    //     }
    //     this.setState({isOpenCart: !this.state.isOpenCart});
    // }

    // handleOutsideClickCart = (e) => {
    //     const node = ReactDOM.findDOMNode(this.nodeCart);
    //     // ignore clicks on the component itself
    //     if (node.contains(e.target)) {
    //         return;
    //     }
    //     const card = ReactDOM.findDOMNode(this.cardRef)
    //     if (card.contains(e.target)) {
    //         return;
    //     }
    //     this.handleToggleCart();
    // }

    


    generateMyProfileList = () => (
        <div className='flexible_my_profile'>
            <div className='arrow_modal'>
            </div>
            <ul className="flexible vertical jStart aCCenter my_profile_list">
                <li className="flexible aCenter">
                    <NavLink 
                        to={`/profile/${this.state.language}`} 
                        onClick={() => this.onChangeLink('profile')}
                        className={this.state.link === 'profile' ? 'selected' : ''}
                    >
                        {this.state.language && selectLanguage(this.state.language).header_my_profile}
                    </NavLink>
                </li>
                <li className="flexible aCenter">
                    <NavLink 
                        to={`/order/${this.state.language}`} 
                        onClick={() => this.onChangeLink('order')}
                        className={this.state.link === 'order' ? 'selected' : ''}
                    >
                        {this.state.language && selectLanguage(this.state.language).header_my_orders}
                    </NavLink>
                </li>
                <li className="flexible aCenter">
                    <NavLink 
                        to={`/sign_in/${this.state.language}`} 
                        onClick={() => this.onLogoutHandle()}
                        className={this.state.link === 'sign_out' ? 'selected' : ''}
                    >
                        {this.state.language && selectLanguage(this.state.language).header_sign_out}
                    </NavLink>
                </li>
            </ul>
        </div>
    )

    handleCardRef = (ref) => {
        this.cardRef = ref;
    }

    generateCart = () => (
        this.props.history.push('/my_cart/' + this.state.language)
        // <div ref={this.handleCardRef} className='flexible_my_profile flexible_my_cart'>
        //     <div className='arrow_modal'>
        //     </div>
        //     <div className="my_profile_list_cart">
        //         your cart is empty
        //         {/* <GoodItemMini /> */}
        //         {/* {this.props.cart.payload.cart.goods.map((item) => (
        //             <GoodItemMini 
        //                 path={item.image}
        //                 name={item.name}
        //                 old_price={item.old_price}
        //                 current_price={item.current_price}
        //                 // onCartClick={(item) => this.onCartClick(item)}
        //                 id={item._id}
        //             />
        //         ))
        //         }
        //         {console.log('this.state in header:', this.state)}
        //         {console.log('this.props in header:', this.props)} */}
        //     </div>
        // </div>
    )

    authLinks = () => (
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
                {/* {this.props.cart.goods ? this.props.cart.goods.reduce((prev, cur) => prev + cur.count, 0) : null} */}
                {/* {this.state.isOpenCart ? 
                    this.generateCart()
                : null } */}
            </div>
        </div>
    );



    guestLinks = () => (
        <li className="flexible aCenter">
            <NavLink 
                to={`/sign_in/${this.state.language}`} 
                onClick={() => this.onChangeLink('sign_in')}
                className={this.state.link === 'sign_in' ? 'selected' : ''}
            >
                {this.state.language && selectLanguage(this.state.language).header_sign_in}
            </NavLink>
        </li>
    );

    getLanguagesIcons = () => (
        <li className="languages flexible aCenter">
            <div className="lang-block flexible aStart">
                <Icon
                    name="armenia"
                    onClick={() => this.onChangeLanguage('am')}
                    className={this.state.language === 'am' ? 'selected' : ''}
                    />
                <Icon
                    name="russia"
                    onClick={() => this.onChangeLanguage('ru')}
                    className={this.state.language === 'ru' ? 'selected' : ''}
                />
                <Icon
                    name="uk"
                    onClick={() => this.onChangeLanguage('uk')}
                    className={this.state.language === 'uk' ? 'selected' : ''}
                />
            </div>
        </li>
    )

    navListForAll = () => (
            <ul className="flexible aCenter">
                <li className="flexible aCenter">
                    <NavLink 
                        to={`/${this.state.language}`} 
                        onClick={() => this.onChangeLink('home')}
                        className={this.state.link === 'home' ? 'selected' : ''}
                        >
                        {this.state.language && selectLanguage(this.state.language).header_home}
                    </NavLink>
                </li>
                <li className="flexible aCenter">
                    <NavLink 
                        to={`/create/${this.state.language}`} 
                        onClick={() => this.onChangeLink('create')}
                        className={this.state.link === 'create' ? 'selected' : ''}
                    >
                        {this.state.language && selectLanguage(this.state.language).header_create}
                    </NavLink>
                </li>
                <li className="flexible aCenter">
                    <NavLink 
                        to={`/shop/${this.state.language}`} 
                        onClick={() => this.onChangeLink('shop')}
                        className={this.state.link === 'shop' ? 'selected' : ''}
                    >
                        {this.state.language && selectLanguage(this.state.language).header_shop}
                    </NavLink>
                </li>
                { this.props.auth.isAuthenticated ? this.authLinks() : this.guestLinks() }
                { this.getLanguagesIcons() }
            </ul>
        )


    // toggleSignIn = () => {
    //     this.setState({ isSignIn: !this.state.isSignIn })
    // }

    render() {
        return (
            <header className={`Header ${this.state.headerShown ? 'headerShown' :''}`}>
            <nav className={`flexible jBetween ${this.state.isShadowShown ? 'isShadowShown' : ''}`}>
                <div className="logo flexible aCenter">
                    {/* <NavLink to={`/${isAuthenticated ? 'admin' : this.state.language}`}>
                        <div className="img" style={{ backgroundImage: `url()` }}/>
                    </NavLink> */}
                </div>
                <div className="menu-wrapper" onClick={this.toggleHeader}>
                    <div className={`hamburger-menu ${this.state.headerShown ? 'animate' : ''}`}></div>
                </div>
                    {this.navListForAll()}
            </nav>
        </header>
        );
    }
}

const mapStateToProps = ({ auth, cart }) => ({ auth, cart });

export default connect(
    mapStateToProps,
    { logout }
)(withRouter(Header));

