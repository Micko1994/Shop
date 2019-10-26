import React, { PureComponent } from 'react';

import './style.scss';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';


import { Icon } from '../'

export default class GoodItem extends PureComponent{
    render() {
        return (
            <div
                className={`GoodItem ${this.props.className || ''}`}
                style={{ backgroundImage: `url()` }}
                // onClick={this.props.onClick}
            >
                <div
                    className={`GoodItemImage`}
                    style={{ backgroundImage: `url("${this.props.path}")` }}
                />
                <div className="GoodItemProperties">
                    <span 
                        className={`GoodItemImageName`}
                    >
                        {this.props.name}
                    </span>
                    <span
                        className={`GoodItemImageOldPrice`}
                    >
                        {this.props.old_price ?  `AMD ${this.props.old_price}` : null}
                    </span>
                    <span
                        className={`GoodItemImageNewPrice`}
                    >
                        {this.props.current_price ?  `AMD ${this.props.current_price}` : null}
                    </span> 
                    <Fab 
                        aria-label="add" 
                        className="addShoppingCart" 
                        onClick={this.props.onCartClick}
                        id={`${this.props.id}`}
                    >
                        <Icon 
                            name={'shopping_buy'}
                        />
                    </Fab>
                </div>
            </div>
        )
    }
}