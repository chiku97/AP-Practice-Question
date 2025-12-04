function timestamp(req,res,next) {
    const timestamp = new Date()
    req.timestamp = timestamp
    next()
}

module.exports = timestamp
