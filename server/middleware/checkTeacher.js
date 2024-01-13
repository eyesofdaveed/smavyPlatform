const { ROLES } = require('../enums');

/**
 * @DESC Check Role Middleware
 */
const checkTeacher = (req, res, next) => {
    console.log(7)
    console.log(req.user, 8)
    let role = req.user.role;
    if (role === ROLES.ADMIN) {
        return res.status(403).json('Forbidden');
    }
    next();
  };

  
  module.exports = checkTeacher;
  