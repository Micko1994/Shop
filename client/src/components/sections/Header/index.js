import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Logout from '../../auth/Logout';
import {
    withRouter,
    NavLink
} from 'react-router-dom';

import './style.scss'

import { Icon } from '../../../components/common';


import { selectLanguage } from 'translate';
import { Profile } from '../../../containers';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';




@withRouter
class Header extends Component {
    pathname = this.props.history.location.pathname.split('/')
    lang = this.pathname[this.pathname.length - 1]
    first = this.pathname[1]
    link = (this.first === 'uk' || this.first === 'ru' || this.first === 'am') ? 'home' : this.first ;
    state = {
        isOpen: false,
        dropdownOpen: false,
        language: this.lang,
        headerShown: false,
        isOpenMenu: false,
        link: this.link,
        open: false
    };
    
    static propTypes = {
        auth: PropTypes.object.isRequired
    };
    
    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen,
        });
    };
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

    handleToggle = () => {
        this.setState({open: !this.state.open})
    }

    anchorRef = React.createRef()

    handleClose = (e) => {
        this.anchorRef.current && this.anchorRef.current.contains(e.target) ? null : this.setState({open: false})
    }

    authLinks = () => (
        <li 
            style={{position: 'relative'}}
            className="flexible aCenter"
            onClick={() => this.handleToggle()}
        >
            <a >
                Profile
            </a>
            {this.state.open ? 
            <div style={{position: 'absolute', top: '40px', left: '0', width: '120px'}}>
                <ul>
                    <li className="flexible aCenter">
                        <a>
                            My Profile
                        </a>
                    </li>
                    <li className="flexible aCenter">My Orders</li>
                    <li className="flexible aCenter">Logout</li>
                </ul>
            </div>
            : null }
        </li>
    );


//     <Button
//     ref={this.anchorRef}
//     aria-controls="menu-list-grow"
//     aria-haspopup="true"
//     onClick={() => this.handleToggle()}
// >
//     { this.props.auth.isAuthenticated ? 
//         this.state.language && selectLanguage(this.state.language).header_my_profile
//         : "My Profile"
//     }

// </Button>
// <Popper 
//     open={this.state.open} 
//     anchorEl={this.anchorRef.current} 
//     keepMounted 
//     transition 
//     disablePortal
//     style={{
//         top: '150px',
//         position: 'relative'
//     }}
// >
//     {({ TransitionProps, placement }) => (
//         <Grow
//             {...TransitionProps}
//             style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
//         >
//             <Paper id="menu-list-grow">
//                 <ClickAwayListener onClickAway={this.handleClose}>
//                     <MenuList>
//                         <MenuItem onClick={this.handleClose}>Profile</MenuItem>
//                         <MenuItem onClick={this.handleClose}>My account</MenuItem>
//                         <MenuItem onClick={this.handleClose}>Logout</MenuItem>
//                     </MenuList>
//                 </ClickAwayListener>
//             </Paper>
//         </Grow>
//     )}
// </Popper>


    // <li className="flexible aCenter">
    // <NavLink 
    //     to={`/profile/${this.state.language}`} 
    //     onClick={() => this.onChangeLink('contact-us')}
    //     className={this.state.link === 'contact-us' ? 'selected' : ''}
    // >
    //     {this.state.language && selectLanguage(this.state.language).header_my_profile}
    // </NavLink>

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
                {console.log('this.props.isAuthenticated:::111::', this.props.isAuthenticated)}
                {console.log('this.props:::111::', this.props)}
                { this.props.auth.isAuthenticated ? this.authLinks() : this.guestLinks() }
                { this.getLanguagesIcons() }
            </ul>
        )


    // toggleSignIn = () => {
    //     this.setState({ isSignIn: !this.state.isSignIn })
    // }

    render() {
        const { isAuthenticated, user } = this.props.auth;
        console.log("user",user)
        console.log("this.props in header",this.props)
        const id = user ? user.id : ''

        return (
            <header className={`Header ${this.state.headerShown ? 'headerShown' :''}`}>
            <nav className={`flexible jBetween ${this.state.isShadowShown ? 'isShadowShown' : ''}`}>
                <div className="logo flexible aCenter">
                    <NavLink to={`/${isAuthenticated ? 'admin' : this.state.language}`}>
                        <div className="img" style={{ backgroundImage: `url()` }}/>
                    </NavLink>
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

const mapStateToProps = state => ({
    auth: state.auth
});

withRouter(Header)

export default connect(
    mapStateToProps,
    null
)(Header);
