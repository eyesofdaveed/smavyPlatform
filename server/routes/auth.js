const router = require('express').Router();
const jwt = require('jsonwebtoken');
const Users = require('../models/Users');
const bcrypt = require('bcrypt');

router.post('/', async (req, res) => {
  const { email, pwd } = req.body;
  if (!email || !pwd) {
    return res
      .status(400)
      .json({ message: 'Email and password are required.' });
  }

  const foundUser = await Users.findOne({ email: email }).exec();

  //Unauthorized
  if (!foundUser) return res.sendStatus(401);

  // const match = await bcrypt.compare(pwd, foundUser.password);
  if (pwd === foundUser.password) {
    // create JWTs
    const accessToken = jwt.sign(
      {
        UserInfo: {
          email: foundUser.email,
          firstname: foundUser.firstName,
        },
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: '60s' },
    );
    const refreshToken = jwt.sign(
      { email: foundUser.email },
      process.env.REFRESH_TOKEN_SECRET,
      { expiresIn: '1d' },
    );

    // Saving refreshToken with current user
    foundUser.refreshToken = refreshToken;
    const result = await foundUser.save();
    console.log(result);

    res.cookie('jwt', refreshToken, {
      httpOnly: true,
      sameSite: 'None',
      // secure: true,
      maxAge: 24 * 60 * 60 * 1000,
    });
    res.json({
      accessToken,
      message: `Successfully authorized: ${foundUser.email} ${foundUser.firstName} ${foundUser.lastName}`,
    });
  } else {
    res.sendStatus(401);
  }
});

module.exports = router;
