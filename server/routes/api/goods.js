const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

const Goods = require('../../models/goods');
const Cart = require('../../models/cart');

router.get('/', (req, res) => {

    const goods_type = req.query.goods_type || ''
    const findGoods = () => goods_type ? Goods.find({ goods_type }) : Goods.find()
    const search = req.body.search || ''
    findGoods()
        .or([ 
            { name: { $regex: '.*' + search + '.*' }}, 
            { description: { $regex: '.*' + search + '.*' }},
            { keywords: { $regex: '.*' + search + '.*' }},
        ])
        .sort({ date: -1 })
        .then(goods => res.json(goods));
});

router.get('/user_cart', auth, (req, res) => {
    const user_id = req.user.id

    Cart.findOne({user_id})
        .then(cart => {
            if( cart ){
                const ids = cart.goods.map(c => c.good_id)
                Goods.find({
                    '_id': { $in: ids}
                }, 'image _id name current_price').then(docs => {
                     const result = docs.map(d => {
                         const _cart = cart.goods.find(c => {
                            return c.good_id === d['_id'].toString()
                        })
                        return {
                            good_id: _cart.good_id,
                            image: d.image,
                            name: d.name,
                            current_price: d.current_price,
                            count: _cart.count
                        }
                     })
                     return res.json(result)
                })
        }
    })

   



    // Cart.find({ goods_type })
    //     .sort({ date: -1 })
    //     .then(goods => res.json(goods));
});

router.post('/', (req, res) => {
    const newGood = new Goods({
        name: req.body.name,
        description: req.body.description,
        old_price: req.body.old_price,
        current_price: req.body.current_price,
        keywords: req.body.keywords,
        goods_type: req.body.goods_type,
        image: req.body.image,
    });

    newGood.save().then(good => res.json(good));
});

router.delete('/:id', auth, (req, res) => {
    Product.findById(req.params.id)
        .then(item => item.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;
