function checkAccess(req, res, next) {
    const user = req.params.user;
  
    if (user.endsWith("_READ_WRITE")) {
      return next();
    }
  
    return res.status(403).json({ message: "Access Denied" });
  }
  
  module.exports = checkAccess;