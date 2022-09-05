const Product = require('../../../models/Product');

function cartProduct() {
    return {
        async getProducts(req, res) {
            let documents;
            try {
                documents = await Product.find({
                    _id: { $in: req.body.ids },
                }).select('-updatedAt -__v');
            } catch (err) {
                return res.status(500).json({ message: err.message });
            }
            return res.json(documents);
        }
    }
}

module.exports = cartProduct;