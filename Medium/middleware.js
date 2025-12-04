function roleBasedAccess(req, res, next) {
    const { user } = req.params;
    const [name, role1, role2] = user.split("_");
    if (role1 == 'READ' && role2 == 'WRITE') {
        next();
    }
    else {
        res.status(403).json({
            "message": "Access Denied"
        });
    }

}


module.exports = { roleBasedAccess };