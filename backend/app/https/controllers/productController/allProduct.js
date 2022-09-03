const Product = require('../../../models/Product');

function allProduct() {
    return {
        getProduct: async (req, res) => {
            const document = await Product.find();
            if (document.length < 1) {
                return res.status(404).json({ msg: 'No product found.Add some product and try again' });
            }
            return res.status(201).json(document);
        },


        singleProduct: async (req, res) => {
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

module.exports = allProduct;