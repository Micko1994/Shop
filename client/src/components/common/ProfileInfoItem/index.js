import React, { PureComponent } from 'react';

import './style.scss';
import { selectLanguage } from 'translate';
import {
    withRouter,
    NavLink
} from 'react-router-dom';

@withRouter
export default class ProfileInfoItem extends PureComponent{
    pathname = this.props.history.location.pathname.split('/')
    lang = this.pathname[this.pathname.length - 1]
    state = {
        language: this.lang,
        isLoading: false,
        isUser: false,
    };

    componentWillReceiveProps(nextProps) {
        this.updateState();
    }    

    updateState() {
        this.setState({
            language: this.props.history.location.pathname.split('/')[this.props.history.location.pathname.split('/').length - 1],
            isLoading: false
        });
    }


    render() {
    
        return (
            <div
                className={`ProfileItem`}
                onClick={this.props.onClick}
                title={this.state.language && selectLanguage(this.state.language)[`title_profile_${this.props.titleName}`]}
            >
                {console.log("asasasa:", `title_profile_${this.props.name.toLowerCase()}`)}
                <div className="ProfileItemProperties">
                    <span 
                        className={`ProfileItemImageName`}
                    >
                        {this.props.name}
                    </span>
                    <span
                        className={`ProfileItemImageValue`}
                    >
                        {this.props.value}
                    </span>
                </div>
            </div>
        )
    }
}