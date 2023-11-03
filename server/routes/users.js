const router = require('express').Router();
const bcrypt = require('bcrypt');

const Users = require('../models/Users');
const { hashConstance } = require('../enums');
const Entity = require('../api');

const user = new Entity(Users);

// register a new user
router.post('/register', async (req, res) => {
  const { email, password } = req.body;
  if (!email)
    return res
      .status(400)
      .json({ message: 'Email is required.', success: false });

  if (!password)
    return res
      .status(400)
      .json({ message: 'Password is required.', success: false });

  try {
    // check for duplicate email in the db
    const duplicateEmail = await Users.findOne({ email: email }).exec();
    if (duplicateEmail) return res.sendStatus(409); //Conflict
    //encrypt the password
    const hashedPwd = await bcrypt.hash(password, hashConstance);
    const newUser = new Users({
      email,
      password: hashedPwd,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
    });

    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    return res.status(400).json({ message: err.errors });
  }
});

// get all users
router.get('/', async (req, res) => {
  try {
    const users = await Users.find();
    res.status(200).json(users);
  } catch (err) {
    console.log(err);
  }
  user.getAll(res);
});

// find a user by id, and modify it
router.put('/:id', async (req, res) => {
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
