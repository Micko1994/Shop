import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import { selectLanguage } from 'translate';

class GenerateLi extends Component {
    render () {
        const { liArray } = this.props;
        const { language , link } = this.props;
        
        const li = liArray.map((elem,index) => {
            return (
                <li key={index} className="flexible aCenter" >
                    <NavLink
                        to={`${elem.to}${language}`}
                        onClick={() => {
                            this.onChangeLink ?
                                this.onChangeLink(elem.onChangeLink) :
                                this.onLogoutHandle(elem.onLogoutHandle);
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