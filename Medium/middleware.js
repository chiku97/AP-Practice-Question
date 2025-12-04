function accessCheck(req, res, next) {
    const userAccess = req.originalUrl
    if (!userAccess.split("/")[2].includes("READ_WRITE")) {
        res.status(200).json({
            "message": "Access Denied"
        })
    }
    next()  
}

export default accessCheck;