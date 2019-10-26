const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

const GoodTypes = require('../../models/goodTypes');

router.get('/', (req, res) => {
    GoodTypes.find()
        .sort({ date: -1 })
        .then(items => res.json(items));
});

router.post('/', auth, (req, res) => {
    const newGoodTypes = new GoodTypes({
        name: req.body.name,
    });

    newGoodTypes.save().then(item => res.json(item));
});

router.delete('/:id', auth, (req, res) => {
    GoodTypes.findById(req.params.id)
        .then(item => item.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ status: 'error', success: false, message: "Can't delete this good type" }));
});

module.exports = router;
