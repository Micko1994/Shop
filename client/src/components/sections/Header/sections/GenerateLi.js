import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import { selectLanguage } from 'translate';

class GenerateLi extends Component {
    constructor(props) {
        super(props)
        const pathname = props.history.location.pathname.split('/');
        const lang = pathname[pathname.length - 1]
        const link = (pathname[1] === 'uk' || pathname[1] === 'ru' || pathname[1] === 'am') ? 'home' : pathname[1] ;
        this.state = {
            language: lang,
            link: link,
        }

    }
    render () {
        const { language, link } = this.state;
        const LiArray = [
            { "to": "/",        "ClassName" : "home",   "onChangeLink": "home",   "textFromObject" : "header_home" },
            { "to": "/create/", "ClassName" : "create", "onChangeLink": "create", "textFromObject" : "header_create" },
            { "to": "/shop/",   "ClassName" : "shop",   "onChangeLink": "shop",   "textFromObject" : "header_shop" },
        ]
        return (
            <div>
                <li className="flexible aCenter">
                    <NavLink
                        to={`/${language}`}
                        onClick={() => this.onChangeLink('home')}
                        className={link === 'home' ? 'selected' : ''}
                    >
                        {language && selectLanguage(language).header_home}
                    </NavLink>
                </li>
            </div>
        )
    }
}

export default GenerateLi