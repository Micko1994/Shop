import React, { PureComponent } from 'react';

import './style.scss';


import { Icon } from '../'

export default class UserGoodItem extends PureComponent{
    render() {
        return (
            <div
                className={`UserGoodItem ${this.props.className || ''}`}
                style={{ backgroundImage: `url()` }}
            >
                <div
                    className={`UserGoodItemImage`}
                    style={{ backgroundImage: `url("${this.props.path}")` }}
                />
                <div className="UserGoodItemProperties">
                    <span 
                        className={`UserGoodItemImageName`}
                    >
                        {this.props.name}
                    </span>
                    <span 
                        className={`UserGoodItemCounts`}
                    >
                        Count` 
                        <Icon name="minus" />
                        <span className='UserGoodItemCount'>
                            {this.props.count}
                        </span>
                        <Icon name="plus" />
                    </span>
                    <span
                        className={`UserGoodItemNewPrice`}
                    >
                        {`Price\` AMD ${this.props.current_price}`}
                    </span> 
                </div>
            </div>
        )
    }
}