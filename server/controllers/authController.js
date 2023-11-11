const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const Users = require('../models/Users');

/** POST Methods */
    /**
     * @openapi
     * '/api/user/register':
     *  post:
     *     tags:
     *     - User Controller
     *     summary: Create a user
     *     requestBody:
     *      required: true
     *      content:
     *        application/json:
     *           schema:
     *            type: object
     *            required:
     *              - username
     *              - email
     *              - password
     *            properties:
     *              username:
     *                type: string
     *                default: johndoe 
     *              email:
     *                type: string
     *                default: johndoe@mail.com
     *              password:
     *                type: string
     *                default: johnDoe20!@
     *     responses:
     *      201:
     *        description: Created
     *      409:
     *        description: Conflict
     *      404:
     *        description: Not Found
     *      500:
     *        description: Server Error
     */
const handleLogin = async (req, res) => {
  const { email, pwd } = req.body;
  if (!email || !pwd) {
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

  const isMatch = await bcrypt.compare(pwd, foundUser.password);
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
