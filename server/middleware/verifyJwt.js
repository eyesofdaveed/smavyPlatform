const jwt = require('jsonwebtoken');

/**
 * @DESC Verify JWT from authorization header Middleware
 */
const verifyJwt = (req, res, next) => {
  try {
    const accessToken = req.header.authorization.split(' ')[1];
    if (!accessToken) {
      return res.status(401).json({ message: 'JWT required.' });
    }

    const jwtToken = accessToken.replace('Bearer=', '');
    jwt.verify(jwtToken, process.env.ACCESS_TOKEN_SECRET, (error, decoded) => {
      if (error) {
        return res.status(401).json({ message: 'Invalid token.' });
      }
      req.user = decoded.UserInfo;

      next();
    });
  } catch (error) {
    console.error('Error in verifyJwt middleware:', error);
    res.status(500).json('Internal Server Error');
  }
};

module.exports = verifyJwt;
