const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const GoodsSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    old_price: {
        type: Number,
    },
    current_price: {
        type: Number,
        required: true
    },
    keywords: {
        type: String,
        required: true
    },
    goods_type:{
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    color: {
        type: String,
    }
});

module.exports = User = mongoose.model('goods', GoodsSchema);
