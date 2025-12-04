function Middleware(req , res, next) {
    const {user} = req.params;;
    if (!user.split("_").includes("READ") || !user.split("_").includes("WRITE")) {
        return res.status(403).json({"message": "Access Denied"});
    }
    next();
}

module.exports = Middleware;