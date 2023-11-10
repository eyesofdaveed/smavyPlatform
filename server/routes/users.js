const router = require('express').Router();

const Users = require('../models/Users');
const Entity = require('../api');
const checkRole = require('../middleware/checkRole');
const { ROLES } = require('../enums');

const user = new Entity(Users);

// get all users
// @TODO: add checkRole middleware to the route
router.route('/').get(checkRole(ROLES.ADMIN), async (req, res) => {
  try {
    await user.getAll(res);
  } catch (err) {
    console.log(err);
  }
});

// find a user by id, and modify it
router.put('/:id', checkRole(ROLES.ADMIN), async (req, res) => {
  try {
    const entityId = req.params.id;
    const fieldsToUpdate = {
      status: req.body.status,
      role: req.body.role,
    }

    await user.update({ entityId, fieldsToUpdate, res });
  } catch (err) {
    return res.status(400).json({ message: err.errors });
  }
});

module.exports = router;
