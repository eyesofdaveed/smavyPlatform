const Users = require('../models/Users');

/**
 * @DESC Check Role Middleware
 */
const checkRole = roles => async (req, res, next) => {
  if (!req.cookies || !req.cookies.jwt) {
    return res.status(400).json({ message: 'JWT required.' });
  }
  let refreshToken = req.cookies.jwt;

  //retrieve employee info from DB
  const user = await Users.findOne({ refreshToken }).exec();
  !roles.includes(user.role)
    ? res.status(401).json('Sorry you do not have access to this route')
    : next();
};

module.exports = checkRole;
