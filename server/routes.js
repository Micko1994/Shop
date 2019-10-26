const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const config = require('config');

module.exports = (app) => {

    // Bodyparser Middleware
    app.use(express.json());

    // DB Config
    const db = config.get('mongoURI');

    // Connect to Mongo
    mongoose
        .connect(db, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false
        }) // Adding new mongo url parser
        .then(() => console.log('MongoDB Connected...'))
        .catch(err => console.log(err));

    // Use Routes
    app.use('/api/bk_map_19', require('./routes/api/admin'));
    app.use('/api/items', require('./routes/api/items'));
    app.use('/api/users', require('./routes/api/users'));
    app.use('/api/auth', require('./routes/api/auth'));
    app.use('/api/product', require('./routes/api/product'));
    app.use('/api/goods', require('./routes/api/goods'));
    app.use('/api/cart', require('./routes/api/cart'));

    // Serve static assets if in production
    if (process.env.NODE_ENV === 'production') {
        // Set static folder
        app.use(express.static('client/build'));

        app.get('*', (req, res) => {
            res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
        });
    }


    const port = process.env.PORT || 5090;

    app.listen(port, () => console.log(`Server started on port ${port}`));
}
