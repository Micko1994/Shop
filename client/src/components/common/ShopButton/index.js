import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

import './style.scss'


  

export default class ShopButton extends Component{
    render(){
        return(
            <Button
                style={{
                    backgroundColor: '#9B59B6',
                    width: this.props.width ? this.props.width : '100%'
                }}            
                variant="contained"
                className={`ShopButton${this.props.disabled ? ' disabled' : ''}`}
                {...this.props}
                >
                {this.props.children}
            </Button>
        )
    }
}
