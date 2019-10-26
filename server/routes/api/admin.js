const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');
const User = require('../../models/User');
const auth = require('../../middleware/auth');


router.post('/', (req, res, next) => {
    const { email, password } = req.body;

    console.log('req.body in admin in:', req.body)
    console.log('req.query in admin in:', req.query)
    console.log('req.params in admin in:', req.params)
    // Simple validation
    if (!email || !password) {
        return res.status(400).json({ msg: 'Please enter all fields' });
    }

    // Check for existing user
    User.findOne({ email })
        .then(user => {
            if (!user) return res.status(400).json({ msg: 'User Does not exist' });
            if (user.role !== 'admin') return res.status(400).json({ msg: 'Access denied' });

            // Validate password
            bcrypt.compare(password, user.password)
                .then(isMatch => {
                    if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });

                    jwt.sign(
                        { id: user.id },
                        config.get('jwtSecret'),
                        { expiresIn: 3600 },
                        (err, token) => {
                            if (err) throw err;
                            res.json({
                                token,
                                user: {
                                    id: user.id,
                                    name: user.name,
                                    email: user.email
                                }
                            });
                        }
                    )
                })
        })
});


router.get('/admin', auth, (req, res) => {
    User.findById(req.user.id)
        .select('-password')
        .then(user => res.json(user));
});

// router.post('/', (req, res) => {
//     const { name, surname, address, age, email, password } = req.body;

//     if (!name || !email || !password) {
//         return res.status(400).json({ msg: 'Please enter all fields' });
//     }

//     console.log('req.body:;', req.body)
//     // Check for existing user
//     User.findOne({ email })
//         .then(user => {
//             if (user) return res.status(400).json({ msg: 'User already exists' });

//             const newUser = new User({
//                 name,
//                 surname,
//                 address,
//                 email,
//                 password
//             });

//             // Create salt & hash
//             return bcrypt.genSalt(10, (err, salt) => {
//                 return bcrypt.hash(newUser.password, salt, (err, hash) => {
//                     if (err) throw err;
//                     newUser.password = hash;
//                     newUser.save()
//                         .then(user => {
//                             return jwt.sign(
//                                 { id: user.id },
//                                 config.get('jwtSecret'),
//                                 { expiresIn: 3600 },
//                                 (err, token) => {
//                                     if (err) throw err;
//                                     return res.json({
//                                         token,
//                                         user: {
//                                             id: user.id,
//                                             name: user.name,
//                                             email: user.email
//                                         }
//                                     });
//                                 }
//                             )
//                         })
//                 })
//             })
//         })
// });

module.exports = router;
