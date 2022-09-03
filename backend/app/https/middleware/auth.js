const JwtService = require("../../../services/jwtService");

const auth = async (req, res, next) => {
    try {
        const { accesstoken } = req.cookies;
        if (!accesstoken) {
            throw new Error();
        }
        const userData = await JwtService.verifyAccessToken(accesstoken);
        if (!userData) {
            throw new Error();
        }
        req.user = userData;
        next();
    } catch (error) {
        return res.status(401).json({ msg: error.message });
    }
}

module.exports = auth;