const Product = require('../../../models/Product');

function allProduct() {
    return {
        getProduct: async (req, res) => {
            const document = await Product.find();
            if (document.length < 1) {
                return res.status(404).json({ msg: 'No product found.Add some product and try again' });
            }
            return res.status(201).json(document);
        }
    }
}

module.exports = allProduct;