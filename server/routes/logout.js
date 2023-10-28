const Users = require('../models/Users');

const router = require('express').Router();

router.get('/', async (req, res) => {
  const cookies = req.cookies;
  if (!cookies?.jwt) return res.sendStatus(204); // No content
  const refreshToken = cookies.jwt;

  const filter = { refreshToken: refreshToken };
  const update = { refreshToken: null };
  // update user
  const updatedUser = await Users.findOneAndUpdate(filter, update, {
    new: true,
  });
  if (!updatedUser) {
    res.clearCookie('jwt', { httpOnly: true, sameSite: 'None', secure: true });
    return res.sendStatus(204);
  }

  const result = await updatedUser.save();
  console.log(result);

  res.clearCookie('jwt', { httpOnly: true, sameSite: 'None', secure: true });
  res.sendStatus(204);
});

module.exports = router;
