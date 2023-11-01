const router = require('express').Router();

const Users = require('../models/Users');
const Entity = require('../api');
const checkRole = require('../middleware/checkRole');

const user = new Entity(Users);

// get all users
router.route('/').get(checkRole(['admin']), async (req, res) => {
  try {
    await user.getAll(res);
  } catch (err) {
    console.log(err);
  }
});

// find a user by id, and modify it
router.put('/:id', checkRole(['admin']), async (req, res) => {
  try {
    const updatedUser = await Users.findByIdAndUpdate(req.params.id, {
      $set: req.body,
    });
    res.status(200).json(updatedUser);
  } catch (err) {
    return res.status(400).json({ message: err.errors });
  }
});

module.exports = router;
