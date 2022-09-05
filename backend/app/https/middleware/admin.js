
const admin = async (req, res, next) => {
    try {
        console.log(req.user);
        if (req.user.role !== 'admin') {
            return res.status(401).json({ message: 'Only admin can add product' });
        }
        next();
    } catch (error) {
        return res.status(401).json({ msg: error.message });
    }
}



module.exports = admin;