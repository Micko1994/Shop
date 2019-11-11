import {GoodItemMini} from '../../../common'

const handleCardRef = (ref) => {
    this.cardRef = ref;
}

export const generateCart = (history,language) => (
    history.push('/my_cart/' + language)
    // <div ref={this.handleCardRef} className='flexible_my_profile flexible_my_cart'>
    //     <div className='arrow_modal'>
    //     </div>
    //     <div className="my_profile_list_cart">
    //         your cart is empty
    //         {/* <GoodItemMini /> */}
    //         {/* {this.props.cart.payload.cart.goods.map((item) => (
    //             <GoodItemMini
    //                 path={item.image}
    //                 name={item.name}
    //                 old_price={item.old_price}
    //                 current_price={item.current_price}
    //                 // onCartClick={(item) => this.onCartClick(item)}
    //                 id={item._id}
    //             />
    //         ))
    //         }
    //     </div>
    // </div>
)
