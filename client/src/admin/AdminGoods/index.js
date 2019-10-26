import React from 'react';
import { connect } from 'react-redux';

import {
    updateGoods,
    addGoods,
    deleteGoods,
} from '../../actions/goodsActions';
import {
    withRouter,
} from 'react-router-dom';


import { GoodItem, ShopButton }  from 'components/common';
import EditForm from './EditForm';

import './style.scss';

class AdminGoods extends React.PureComponent{

    state = {
        isChoosen: null,
        isOpenEditForm: false,
        good: null,
    };


    onChooseGoodItem = (good) => {
        this.setState({ isChoosen: good._id, good: good })
    };

    toggleEditForm = (event) => this.setState({
        isOpenEditForm: !this.state.isOpenEditForm,
        event,
        isChoosen: event === 'add' ? null : this.state.isChoosen,
    });

    onEditFormChange = (good) => {
        this.setState({  good })
    };


    onUpdateGood = () => {
        this.setState({ isOpenEditForm: false });
        if(this.state.event === 'edit') {
            this.props.updateGoods(this.state.isChoosen, this.state.good).then((data) => {
                data && this.setState({ isChoosen: null })
            });
        } else {
            this.props.addGoods(this.state.good);
        }
    };

    onDeleteTeamGood = () => {
        this.props.deleteGoods(this.state.isChoosen).then((data) => {
            data && this.setState({ isChoosen: null })
        });
    };


    render(){
        return(
            <div className="AdminGoods page-content flexible vertical aCenter grow">
               <div className="team-goods-buttons flexible jCenter">
                        <ShopButton
                            color="primary"
                            variant="contained"
                            onClick={()=> this.toggleEditForm('add')}
                        >ADD</ShopButton>
                        <ShopButton
                            color="primary"
                            variant="contained"
                            disabled={!this.state.isChoosen}
                            onClick={()=> this.toggleEditForm('edit')}
                        >Edit
                        </ShopButton>
                        <ShopButton
                            color="secondary"
                            variant="contained"
                            disabled={!this.state.isChoosen}
                            onClick={() => this.onDeleteTeamGood()}
                        >Delete</ShopButton>
                </div>
                { this.state.isOpenEditForm ? <div className="add-edit-form flexible vertical aCenter">
                    <ShopButton
                        color="primary"
                        variant="contained"
                        onClick={()=> this.toggleEditForm()}
                        style={{ margin: '15px' }}
                    >
                        Close {this.state.event} Form
                    </ShopButton>
                    <EditForm
                        data={this.state.good}
                        onEditFormChange={this.onEditFormChange}
                        onUpdateGood={this.onUpdateGood}
                        event={this.state.event}
                    />
                </div> : null }
                <h2 className="header-text flexible vertical">View Goods<div className="divider"/></h2>
            </div>
        )
    }
}

const mapStateToProps = ({ good}) => ({
    goods: good.goods,
});

export default connect(
    mapStateToProps,
    { updateGoods, addGoods, deleteGoods}
)(withRouter(AdminGoods));
