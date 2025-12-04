function addTimestamp(req, res, next) {
  req.timestamp = new Date().toISOString();
  next();
}

module.exports = { addTimestamp };
