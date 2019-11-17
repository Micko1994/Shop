const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

const Cart = require('../../models/cart');

router.get('/', auth, (req, res) => {

    Cart.findOne({user_id: req.user.id})
    .then(cart => {

        if( !cart ){
            return res.status(401).json({message: 'There are not user cart'})
        }
        return res.status(200).json({cart})
    })
});

router.patch('/', auth, (req, res) => {
    const user_id = req.user.id
    const goods = req.body
    Cart.findOne({user_id})
        .then(cart => {
            if( cart ){
                Cart.findOneAndUpdate({user_id}, { goods }, {new: true}).then(data => {
                    return res.json(data)
                });
            }
            else{
                const newCart = new Cart({
                    user_id,
                    goods, 
                })
                newCart.save().then(cart => res.json(cart));
            }
        })
});

router.delete('/:id', auth, (req, res) => {
    Product.findById(req.params.id)
        .then(item => item.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;
