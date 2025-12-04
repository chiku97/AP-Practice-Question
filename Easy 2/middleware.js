function middleware(req, res, next) {
  req.timestamp = new Date()
  next();
}

module.exports = middleware;