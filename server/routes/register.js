const router = require('express').Router();

const handleNewUser = require('../controllers/registerController');

// register a new user
router.post('/', handleNewUser);

module.exports = router;
