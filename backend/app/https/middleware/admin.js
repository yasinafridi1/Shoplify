
const admin = async (req, res, next) => {
    try {
        if (req.user.role !== 'admin') {
            throw new Error('Only admin can add product');
        }
        next();
    } catch (error) {
        return res.status(401).json({ msg: error.message });
    }
}



module.exports = admin;