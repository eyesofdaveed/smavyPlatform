const router = require('express').Router();
const bcrypt = require('bcrypt');

const Users = require('../models/Users');

// register a new user
router.post('/register', async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password)
    return res
      .status(400)
      .json({ message: 'Email and password are required.' });

  // check for duplicate email in the db
  const duplicateEmail = await Users.findOne({ email: email }).exec();
  if (duplicateEmail) return res.sendStatus(409); //Conflict

  try {
    //encrypt the password
    const hashedPwd = await bcrypt.hash(password, 10);
    const newUser = new Users({
      email: req.body.email,
      password: hashedPwd,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
    });

    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    console.log(err);
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
});

// find a user by id, and modify it
router.put('/:id', async (req, res) => {
  try {
    const updatedUser = await Users.findByIdAndUpdate(req.params.id, {
      $set: req.body,
    });
    res.status(200).json(updatedUser);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
