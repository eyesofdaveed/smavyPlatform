const jwt = require('jsonwebtoken');

const Users = require('../models/Users');

const handleRefreshToken = async (req, res) => {
    const refreshToken = req.body.refreshToken;
    const user = Users.findOne({refreshToken});
    if (!user) {
        return res.status(401).json({ error: 'Invalid refreshToken' });
    }
    const email = user.email
    const firstName = user.firstName

  // Проверяем валидность refreshToken и его срок действия
  try {
    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);
    console.log(jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET), 19, )
    const accessToken = generateAccessToken(email, firstName)
    res.json({
        accessToken,
        refreshToken,
        success: true,
      });
  } catch (error) {
    if (error.name === 'TokenExpiredError') {
      // Если refreshToken истек, генерируем новый refreshToken и accessToken
      const newRefreshToken = generateRefreshToken(email);
      const newAccessToken = generateAccessToken(email, firstName);

      user.refreshToken = newRefreshToken;
      await user.save();

      return res.json({ 
        accessToken: newAccessToken, 
        refreshToken: newRefreshToken,
        success: true });
    } 

    return res.status(401).json({ error: 'Invalid refreshToken' });
  }
};

function generateAccessToken(email, firstName)
{
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
      return accessToken;
}

function generateRefreshToken(email)
{
    const accessToken = jwt.sign(
        { email: email },
      process.env.REFRESH_TOKEN_SECRET,
      { expiresIn: '365d' },
      );
      return accessToken;
}

module.exports = handleRefreshToken;
