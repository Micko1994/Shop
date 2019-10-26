const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const CartSchema = new Schema({
    user_id: {
        type: String,
        required: true
    },
    goods: {
        type: Array,
        default: 0
    }
});

module.exports = Cart = mongoose.model('cart', CartSchema);
