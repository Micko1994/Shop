import React, { Component } from "react";
import {Icon} from "../../../common";

class GetLanguagesIcons extends Component {
    render (){
        const { onChangeLanguage, language } = this.props;
        return (
            <li className="languages flexible aCenter">
                <div className="lang-block flexible aStart">
                    <Icon
                        name="armenia"
                        onClick={() => onChangeLanguage('am')}
                        className={language === 'am' ? 'selected' : ''}
                    />
                    <Icon
                        name="russia"
                        onClick={() => onChangeLanguage('ru')}
                        className={language === 'ru' ? 'selected' : ''}
                    />
                    <Icon
                        name="uk"
                        onClick={() => onChangeLanguage('uk')}
                        className={language === 'uk' ? 'selected' : ''}
                    />
                </div>
            </li>
        )
    }
}
export default GetLanguagesIcons;