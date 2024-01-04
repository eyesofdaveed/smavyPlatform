const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const Users = require('../models/Users');

const handleLogin = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res
      .status(400)
      .json({ message: 'Email and password are required.' });
  }

  const foundUser = await Users.findOne({ email: email }).exec();

  //Unauthorized
  if (!foundUser) {
    return res.status(404).json({
      message: 'User email is not found. Invalid login credentials.',
      success: false,
    });
  }

  const isMatch = await bcrypt.compare(password, foundUser.password);
  if (isMatch) {
    const { email, firstName } = foundUser;
    // create JWTs
    const accessToken = jwt.sign(
      {
        UserInfo: {
          email,
          firstName,
        },
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: '1h' },
    );
    const refreshToken = jwt.sign(
      { email: foundUser.email },
      process.env.REFRESH_TOKEN_SECRET,
      { expiresIn: '365d' },
    );

    // Saving refreshToken with current user
    foundUser.refreshToken = refreshToken;
    const result = await foundUser.save();
    console.log(result);

    // res.cookie('jwt', refreshToken, {
    //   httpOnly: true,
    //   sameSite: 'None',
    //   // secure: true,
    //   maxAge: 24 * 60 * 60 * 1000,
    // });
    res.json({
      accessToken,
      refreshToken,
      success: true,
    });
  } else {
    res.status(403).json({
      message: 'Incorrect password.',
      success: false,
    });
  }
};

module.exports = handleLogin;
