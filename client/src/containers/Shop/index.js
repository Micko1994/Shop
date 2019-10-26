import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { GoodItem } from '../../components/common'
import ReactDOM from 'react-dom';

import { getGoods } from '../../actions/goodsActions';
import { changeCart, getCarts } from '../../actions/cartActions';
import { AlertDialog } from '../../components/common'

import {
    withRouter,
} from 'react-router-dom';
// import {
//     fetchPosts,
//     fetchSinglePost,
//     createPost,
//     updatePost,
//     deletePost,
// } from 'actions/Posts';

import './Main.scss';

import {Icon} from '../../components/common'
import { throws } from 'assert';

class Shop extends PureComponent {
    pathname = this.props.history.location.pathname.split('/')
    lang = this.pathname[this.pathname.length - 1]
    paramField = null
    state = {
        language: this.lang,
        clothType: 'all',
        mainList: true,
        list: null,
        isOpenParamsFieldList: false,
        paramsFiledValue: "New",
        link: null,
        goods: null,
        cart: [],
        count: 0,
        openAlert: false,
        a: false
    };
    componentWillReceiveProps(nextProps) {
        console.log('nextProps::', nextProps)
        // this.setState({ a: true }, () => {
        //     nextProps.auth.isAuthenticated && this.state.a ? this.props.getCarts() : null
        // })
        this.updateState();
        console.log('nextProps this,props::', this.props)
    }    
    
    updateState() {
        this.setState({
            language: this.props.history.location.pathname.split('/')[this.props.history.location.pathname.split('/').length - 1],
            a: false
        });
    }
    
    componentDidMount(){
        console.log('auth in shoppppp::', this.props)
        this.props.getGoods('shirt')
        this.props.getCarts().then((data) => {
            this.setState({
                cart: data.payload.cart.goods,
                count: data.payload.cart.goods.reduce((prev, cur) => prev + cur.count, 0)
            })
        })
        console.log("dwedwedwedfwedfwedwefdwefwefwef", this.props)
    }
    
    
    onChangeClothType = (clothType) => {
        this.props.getGoods(clothType)
    }


    goToMainList = () => (
        this.setState({ mainList: true })
    )

    generateShirtList  = () => (
        <div className="ShopContentMainAsideMain">
            <div 
                onClick={() => this.goToMainList()}
                className={'ShopContentMainAsideTypes selected'}
            >
                {`< ${this.state.list}`}
            </div>
            <div 
                onClick={() => this.onChangeClothType('karjatev')}
                className={this.state.clothType === 'karjatev' ? 'ShopContentMainAsideTypes selected' : 'ShopContentMainAsideTypes'}
            >
                karjatev
            </div>
            <div 
                onClick={() => this.onChangeClothType('erkaratev')}
                className={this.state.clothType === 'erkaratev' ? 'ShopContentMainAsideTypes selected' : 'ShopContentMainAsideTypes'}
            >
                erkaratev
            </div>
            <div 
                onClick={() => this.onChangeClothType('shalvar')}
                className={this.state.clothType === 'shalvar' ? 'ShopContentMainAsideTypes selected' : 'ShopContentMainAsideTypes'}
            >
                shalvar
            </div>
            <div 
                onClick={() => this.onChangeClothType('shortik')}
                className={this.state.clothType === 'shortik' ? 'ShopContentMainAsideTypes selected' : 'ShopContentMainAsideTypes'}
            >
                shortik
            </div>
        </div>
    )

    generateGeneralList = () => (
        <div className="ShopContentMainAsideMain">
            <div 
                onClick={() => this.onChangeClothType('shirt')}
                className={this.state.clothType === 'shirt' ? 'ShopContentMainAsideTypes selected' : 'ShopContentMainAsideTypes'}
            >
                <Icon name="shirt"/>
                <span className='ShopContentMainAsideMainText'>
                    Shirt
                </span>
            </div>
            <div 
                onClick={() => this.onChangeClothType('hat')}
                className={this.state.clothType === 'hat' ? 'ShopContentMainAsideTypes selected' : 'ShopContentMainAsideTypes'}
            >
                <Icon name="cap"/>
                <span className='ShopContentMainAsideMainText'>
                    Hat   
                </span>
            </div>
            <div 
                onClick={() => this.onChangeClothType('bag')}
                className={this.state.clothType === 'bag' ? 'ShopContentMainAsideTypes selected' : 'ShopContentMainAsideTypes'}
            >
                <Icon name="handbag"/>
                <span className='ShopContentMainAsideMainText'>
                    Bag   
                </span>
            </div>
            <div 
                onClick={() => this.onChangeClothType('jewelry')}
                className={this.state.clothType === 'jewelry' ? 'ShopContentMainAsideTypes selected' : 'ShopContentMainAsideTypes'}
            >
                <Icon name="diamond"/>
                <span className='ShopContentMainAsideMainText'>
                    Jewelry
                </span>
            </div>
        </div>
    )

    addItemToCart(id){
        const cartInfo = {
            good_id: id,
            count: 1,
        }

        console.log('this state in addItemToCart:', this.state)
        console.log('this props in addItemToCart:', this.props)
        const existingGoods = this.state.cart.filter(p => p.good_id === cartInfo.good_id);

        console.log('existingGoods::', existingGoods)
        if (existingGoods.length > 0) {
    
            const withoutExistingGoods = this.state.cart.filter(p => p.good_id !== cartInfo.good_id);
            const updatedUnitsGoods = {
              ...existingGoods[0],
              count: existingGoods[0].count + cartInfo.count
            };
    
            this.setState({
              cart: [...withoutExistingGoods, updatedUnitsGoods]
            });
    
        } else {
          this.setState({
            cart: [...this.state.cart, cartInfo]
          });
        }
        this.setState({
            count: ++this.state.count
        }, () => this.addCartToStore());
    }

    addGoodToCart(id){
        // console.log('id in add cart:', id),
        // console.log('state in add cart:', this.state),
        // console.log('props in add cart:', this.props)
        this.props.auth.isAuthenticated ? this.addItemToCart(id) : this.setState({ openAlert: true })
    }

    handleCloseAlert(){
        this.setState({ openAlert: false })
    }

    linkToSignIn(){
        this.props.history.push('/sign_in/' + this.state.language);
    }
    
    addCartToStore(){
        console.log('stateefweferwferferf:::::::', this.state)
        this.props.changeCart(this.state.cart)
    }

    onCartClick(item){
        // console.log('e.target::::', item.currentTarget)
        const id = item.currentTarget.id
        this.addGoodToCart(id)
    }

    createGoods(goodItems){
        // console.log('goodItems  wjbfjwebfjw::', goodItems)
        if(this.props.loading) {
            return <div className="Spinner"/>
        }
        else{
            return goodItems.map((item) => (
                <GoodItem 
                    path={item.image}
                    name={item.name}
                    old_price={item.old_price}
                    current_price={item.current_price}
                    onCartClick={(item) => this.onCartClick(item)}
                    id={item._id}
                />
            ))
        }
    }
  
    handleToggleParams = (e) => {
        if (!this.state.isOpenParamsFieldList) {
            document.addEventListener('click', this.handleOutsideClickParams, false);
        } else {
            document.removeEventListener('click', this.handleOutsideClickParams, false);
        }
        this.setState({ 
            isOpenParamsFieldList: !this.state.isOpenParamsFieldList,
            paramsFiledValue: e ? e.target.innerHTML : this.state.paramsFiledValue,
            link: e ? e.target.innerHTML : this.state.link
        })
    }

    handleOutsideClickParams = (e) => {
        const paramField = ReactDOM.findDOMNode(this.paramField)
        if (paramField.contains(e.target)) {
            return;
        }
        this.handleToggleParams();
    }


    handleParamField = (ref) => {
        this.paramField = ref;
    }

    generateParamsFieldList = () => (
        <div className='selectComponentValues'>
            <div 
                className={this.state.link === 'New' ? 'selected' : ''}
                onClick={this.handleToggleParams}
            >New</div>
            <div 
                className={this.state.link === 'Old' ? 'selected' : ''}
                onClick={this.handleToggleParams}
            >Old</div>
            <div 
                className={this.state.link === 'A-Z' ? 'selected' : ''}
                onClick={this.handleToggleParams}
            >A-Z</div>
            <div 
                className={this.state.link === 'Z-A' ? 'selected' : ''}
                onClick={this.handleToggleParams}
            >Z-A</div>
        </div>
    )

    generateParamsField = () => (
        <div className="flexible horizontal jAround">
            <div className="flexible horizontal jAround ShopInputComponent">
                <input />
                <Icon name="search"/>
            </div>
            <div
                ref={this.handleParamField}
                className={this.state.isOpenParamsFieldList ? 'orderBySelectComponent flexible vertical big' :'orderBySelectComponent flexible vertical'}
            >
                <div 
                    className='selectComponentCurrentValue'
                    onClick={this.handleToggleParams}
                >
                    {this.state.paramsFiledValue}
                </div>
                {this.state.isOpenParamsFieldList && this.generateParamsFieldList()}
            </div>
        </div>
    )


    render() {
        return (
            <section className="ShopContentMain">
                { this.state.mainList ? this.generateGeneralList() : this.generateShirtList()}
                <div className="ShopContentMainGoods flexible vertical wrap">
                    { this.generateParamsField()}
                    <div className='ShopContentMainGoodItems flexible horizontal jAround wrap'>
                        { this.createGoods(this.props.goods)}
                        { this.createGoods(this.props.goods)}
                        { this.createGoods(this.props.goods)}
                        { this.createGoods(this.props.goods)}
                        { this.createGoods(this.props.goods)}
                        { this.createGoods(this.props.goods)}
                        { this.createGoods(this.props.goods)}
                        { this.createGoods(this.props.goods)}
                        { this.createGoods(this.props.goods)}
                </div>
                </div>
                {this.state.openAlert 
                    ? <AlertDialog 
                        setOpen={this.state.openAlert}
                        handleCloseAlert={() => this.handleCloseAlert()}
                        linkToSignIn={() => this.linkToSignIn()}
                    /> 
                    : null}
            </section>
        );
    }
}


const mapStateToProps = ({good, auth, cart}) => ({
    goods: good.goods,
    loading: good.loading,
    auth,
    cart
});

export default connect(
    mapStateToProps,
    { getGoods, changeCart, getCarts }
)(withRouter(Shop));
