import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import { selectLanguage } from 'translate';

class GenerateLi extends Component {
    render () {
        const { liArray } = this.props;
        const { language , link, onChangeLink, onLogoutHandle, logout } = this.props.context;

        const li = liArray.map((elem,index) => {
            return (
                <li key={index} className="flexible aCenter" >
                    <NavLink
                        to={`${elem.to}${language}`}
                        onClick={() => {
                            typeof elem.onLogoutHandle === "string" ?
                                  onLogoutHandle(logout)
                                : onChangeLink(elem.onChangeLink);
                        }}
                        className={link === elem.ClassName ? 'selected' : ''}>

                        {language && selectLanguage(language)[elem.textFromObject]}
                    </NavLink>
                </li>
            )
        })
        return (
            <div>
                { li }
            </div>
        )
    }
}

export default GenerateLi