function checkAccess(req, res, next) {
  const user = req.params && req.params.user;
  if (!user) {
    return res.status(400).json({ message: "Access Denied" });
  }
  if (user.includes("READ_WRITE")) {
    return next();
  }
  return res.status(403).json({ message: "Access Denied" });
}

module.exports = { checkAccess };
