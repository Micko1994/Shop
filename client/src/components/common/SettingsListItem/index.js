import React, { PureComponent } from 'react';
import './style.scss';

export default class SettingsListsItems extends PureComponent{
    state = {
        isChosenItem: false,
    };

    generateItems = () => (
        this.props.items.map((item, index) => (
            <li
                className={item === this.state.isChosenItem ? 'selected' : ''}
                key={index}
                onClick={() => this.onChooseItem(item)}
            >
                {item}
            </li>
        ))
    );
    
    
    onChooseItem = (item) => {
        this.setState({ isChosenItem: item })
    };
    
    render() {
        return (
            <div className="chooseItem">
            <p>Choose Shirt Item</p>
            <ul className="items_list">
                {this.generateItems()}
            </ul>
        </div>
        )
    }
}