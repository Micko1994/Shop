import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { selectLanguage } from 'translate';
import { UserGoodItem, ShopButton } from '../../components/common'
import { Checkout } from '../../containers'

import './style.scss';
import { getUserCart } from '../../actions/goodsActions';
import {
    withRouter,
} from 'react-router-dom';


class MyCart extends PureComponent {

    state = {
        isPaymentOpen: false
    }
    componentDidMount(){
        this.props.getUserCart()
    }

    generateMyCart(){
        if(this.props.loading) {
            return <div className="Spinner"/>
        }
        else{
            return this.props.userGoods.map((item) => (
                    <UserGoodItem
                        key={item.good_id}
                        id={item._id}
                        path={item.image}
                        count={item.count}
                        name={item.name}
                        current_price={item.current_price}
                        // onCartClick={(item) => this.onCartClick(item)}
                    />
            ))
        }
    }

    onPayment(){
        this.setState({
            isPaymentOpen: !this.state.isPaymentOpen
        })
    }

    render(){
        return (
            <section className="MyCart withStretch flexible vertical">
                {this.state.isPaymentOpen ? 
                    <Checkout />
                :
                <div className="my-cart-content page-content">
                <h2 
                    className="header-text"
                >
                    {selectLanguage(this.props.match.params.lang).my_cart}
                </h2>
                    <div className='UserGoodItems flexible horizontal jAround wrap'>
                        {this.generateMyCart()}
                    </div>
                    <ShopButton
                        width="100px"
                        onClick={() => this.onPayment()}
                    >
                        Order
                    </ShopButton>
                </div>
                }
            </section>
        )
    }
}

const mapStateToProps = ({good, auth, cart, user}) => ({
    // goods: good.goods,
    userGoods: good.userGoods,
    loading: good.loading,
    auth,
    cart,
    user
});

export default withRouter(connect(
    mapStateToProps,
    { getUserCart }
)(MyCart));
