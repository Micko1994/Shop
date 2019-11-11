import React, { Component } from "react";
import NavListForAll  from './NavListForAll';

class Navigation extends Component {
    constructor(props) {
        super(props)
        this.state = {
            headerShown: props.context.headerShown,
            isShadowShown: false
        }
    }

    render() {
        const { context } = this.props;
        const { isShadowShown, headerShown } = this.state;
        return (
            <nav className={`flexible jBetween ${isShadowShown ? 'isShadowShown' : ''}`}>
                <div className="logo flexible aCenter">
                    {/* <NavLink to={`/${isAuthenticated ? 'admin' : this.state.language}`}>
                            <div className="img" style={{ backgroundImage: `url()` }}/>
                        </NavLink> */}
                </div>
                <div className="menu-wrapper" onClick={this.toggleHeader}>
                    <div className={`hamburger-menu ${ headerShown ? 'animate' : ''}`}></div>
                </div>
                <NavListForAll context />
            </nav>
        )
    }
}

export default Navigation;
