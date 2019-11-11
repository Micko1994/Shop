import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../../actions/authActions'
import {GoodItemMini} from '../../common'
import ReactDOM from 'react-dom';
import { withRouter, NavLink } from 'react-router-dom';





import { selectLanguage } from 'translate';
import  { Navigation } from './sections';

import './style.scss'

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
        console.log('index.js onChangeLanguage')
        const pathName = this.props.history.location.pathname.split('/');
        pathName.pop();
        const location = pathName.length > 1 ? (pathName.join('/') + '/' + language) : '/' + language;
        this.props.history.push(location);
        this.toggleHeader();
    };
    toggleHeader = (key) => {
        console.log('index.js toggleHeader')
        if(key === 'login') {
            this.props.toggleLogin(true);
        } else if (key === 'resume') {
            this.props.history.push(`/resume/${this.state.language}`)
        }
        this.setState({
            headerShown: !this.state.headerShown,
        });
    };



// *********************************************************************************************
    onChangeLink = (link) => {
        this.setState({ link: link })
        this.toggleHeader()
    }
    onLogoutHandle = () => this.props.logout()
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
// *********************************************************************************************

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


    // toggleSignIn = () => {
    //     this.setState({ isSignIn: !this.state.isSignIn })
    // }

    render() {
        const { headerShown, language, link, isOpenMyProfile } = this.state;
        const { auth } = this.props;
        const functions = {
            language, headerShown, link, auth, isOpenMyProfile,
            onLogoutHandle: this.onLogoutHandle,
            handleToggleProfile: this.handleToggleProfile,
            onChangeLanguage: this.onChangeLanguage,
            toggleHeader: this.toggleHeader
        }
        return (
            <header className={`Header ${headerShown ? 'headerShown' :''}`}>
                <Navigation context={functions}/>
            </header>
        );
    }
}

const mapStateToProps = ({ auth, cart }) => ({ auth, cart });
export default connect(mapStateToProps, { logout })(withRouter(Header));