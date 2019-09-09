import React, { PureComponent } from 'react';

import { MainImageBlock } from 'components/common';

import { selectLanguage } from 'translate';

import './style.scss';


export default class Create extends PureComponent{

    render(){
        return (
            <section className="AboutUs withStretch flexible vertical">
                <div className="about-us-content page-content">
                    <h2 
                        className="header-text"
                    >
                        {selectLanguage(this.props.match.params.lang).header_create}
                    </h2>
                    {/* {this.generateAboutUsInfo()} */}
                </div>
            </section>
        )
    }
}