const Product = require('../../../models/Product');
const fs = require('fs');

function deleteProduct() {
    return {
        remove: async (req, res) => {
            try {
                const result = await Product.findOneAndDelete({ _id: req.params._id });
                console.log(result._doc);
                if (!result) {
                    return res.status(404).json({ msg: 'No product found' });
                }
                fs.unlink(`${rootDirectory}/${result._doc.image}`, (err) => {
                    if (err) {
                        throw new Error();
                    }
                })
                return res.status(200).json({ message: 'Product deleted successfully' + result });
            } catch (error) {
                return res.status(500).json({ message: error.message });
            }
        }
    }
}

module.exports = deleteProduct;