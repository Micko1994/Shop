import React, { Component } from "react";
import NavListForAll  from './NavListForAll';

class Navigation extends Component {
    constructor(props) {
        super(props)
        this.state = {
            headerShown: false,
            isShadowShown: false
        }
    }

    render() {
        return (
            <nav className={`flexible jBetween ${this.state.isShadowShown ? 'isShadowShown' : ''}`}>
                <div className="logo flexible aCenter">
                    {/* <NavLink to={`/${isAuthenticated ? 'admin' : this.state.language}`}>
                            <div className="img" style={{ backgroundImage: `url()` }}/>
                        </NavLink> */}
                </div>
                <div className="menu-wrapper" onClick={this.toggleHeader}>
                    <div className={`hamburger-menu ${this.state.headerShown ? 'animate' : ''}`}></div>
                </div>
                <NavListForAll />
            </nav>
        )
    }
}

export default Navigation;
