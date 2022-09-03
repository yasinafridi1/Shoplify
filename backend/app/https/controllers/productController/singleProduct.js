const Product = require('../../../models/Product');

function singleProduct() {
    return {
        productDetail: async (req, res) => {
            try {
                const document = await Product.findById(req.params._id);
                if (!document) {
                    return res.status(404).json({ msg: 'No product found.' });
                }
                return res.json(document);
            } catch (error) {
                return res.status(500).json({ msg: error.message })
            }
        }
    }
}

module.exports = singleProduct;