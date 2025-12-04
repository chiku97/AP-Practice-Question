const fs = require("fs");

function checkAccess(req, res, next) {
  const userParam = req.params.user;
  const parts = userParam.split("_");
  const role = parts.slice(-2).join("_");

  if (role === "READ_WRITE") {
    next();
  } else {
    return res.status(403).json({ message: "Access Denied" });
  }
}

module.exports = checkAccess;