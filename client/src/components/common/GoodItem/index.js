import React, { PureComponent } from 'react';

import './style.scss';

export default class GoodItem extends PureComponent{
    render() {
        return (
            <div
                className={`GoodItem ${this.props.className || ''}`}
                style={{ backgroundImage: `url()` }}
                onClick={this.props.onClick}
            >
                <div
                    className={`GoodItemImage`}
                    style={{ backgroundImage: `url("${this.props.path}")` }}
                />
                <div className="GoodItemProperties">
                    <span 
                        className={`GoodItemImageName`}
                    >
                    {"Best Shous for ever"}
                    </span>
                    <span
                        className={`GoodItemImageOldPrice`}
                    >
                    {"AMD 1200"}
                    </span>
                    <span
                        className={`GoodItemImageNewPrice`}
                    >
                    {"AMD 1100"}
                    </span> 
                </div>
            </div>
        )
    }
}