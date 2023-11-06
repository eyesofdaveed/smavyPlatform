const router = require('express').Router();

const Users = require('../models/Users');
const Entity = require('../api');
const checkRole = require('../middleware/checkRole');
const { roles } = require('../enums');

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
    return res.status(400).json({ message: err.errors });
  }
});

router.delete('/', async (req, res) => {
  try {
    user.deleteAll(res);
  } catch (err) {
    return res.status(400).json({ success: false, message: `Cannot delete: ${err.errors}` });
  }
  
});

module.exports = router;
