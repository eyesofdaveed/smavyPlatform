const router = require('express').Router();

const Users = require('../models/Users');
const Entity = require('../api');
const checkRole = require('../middleware/checkRole');
const { roles } = require('../enums');
const errorHandler = require('../middleware/errorHandler')

const user = new Entity(Users);

// get all users
router.route('/').get(checkRole(Array(roles.at(0))), async (req, res) => {
  try {
    await user.getAll(res);
  } catch (err) {
    console.log(err);
  }
});

// find a user by id, and modify it
router.put('/:id', checkRole(Array(roles.at(0))), async (req, res) => {
  try {
    const updatedUser = await Users.findByIdAndUpdate(req.params.id, {
      $set: req.body,
    });
    res.status(200).json(updatedUser);
  } catch (err) {
    errorHandler(err, req, res);
  }
});

module.exports = router;
