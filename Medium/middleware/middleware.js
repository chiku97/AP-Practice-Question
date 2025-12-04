function messageMiddleware(req,res,next) {
    const user = req.params.user
    if (!user.endsWith("READ_WRITE")) {
        return res.status(403).json({ "message": "Access Denied" })
    }
    next()
}

module.exports = messageMiddleware
