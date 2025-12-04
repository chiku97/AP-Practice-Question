module.exports = (req, res, next) => {
    const { user } = req.params;
    if (user && user.includes("READ_WRITE")) {
        next();
    } else {
        res.status(403).json({ message: "Access Denied" });
    }
};
