const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const GoodTypesSchema = new Schema({
    name: {
        type: String,
        required: true
    },
});

module.exports = User = mongoose.model('good_types', GoodTypesSchema);
