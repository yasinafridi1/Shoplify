
const admin = async (req, res, next) => {
    try {
        console.log(req.user);

    } catch (error) {
        return res.status(401).json({ msg: error.message });
    }
}


module.exports = admin;