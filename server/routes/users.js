const router = require('express').Router();

const Users = require('../models/Users');

// register
router.post('/register', async (req, res) => {
    try {
        const newUser = new Users({
            email: req.body.email,
            password: req.body.password,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
        });

        const user = await newUser.save();
        res.status(200).json(user);
    } catch (err) {
        console.log(err);
    }
})

module.exports = router;