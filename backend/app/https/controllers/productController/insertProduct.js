const Joi = require('joi');
const Product = require('../../../models/Product');

function insertProduct() {
    return {
        addProduct: async (req, res) => {
            const productSchema = Joi.object({
                productName: Joi.string().required(),
                type: Joi.string().required(),
                category: Joi.string().required(),
                price: Joi.string().required(),
                description: Joi.string(),
                image: Joi.string().required()
            })
            const { error } = productSchema.validate(req.body);
            if (error) {
                console.log(error);
                return res.status(409).json({ msg: error.message });
            }


            const { productName, price, description, type, category, image } = req.body;

            let document;
            try {
                document = await Product.create({
                    name: productName,
                    type,
                    category,
                    description,
                    price,
                    image
                })
            } catch (error) {
                console.log(error);
                return res.status(500).json({ msg: 'Internel server error.Cannot insert product' })
            }

            console.log(document);
            return res.status(200).json(document);
        },

        updateProduct: async (req, res) => {
            handlemultipart(req, res, async (err) => {
                if (err) {
                    return res.status(500).json({ msg: err.message });
                }

                let filePath;
                if (req.file) {
                    filePath = req.file.path;
                }
                const { name, price, description, type, category } = req.body;

                const productSchema = Joi.object({
                    name: Joi.string().required(),
                    type: Joi.string().required(),
                    category: Joi.string().required(),
                    price: Joi.string().required(),
                    description: Joi.string(),
                })
                const { error } = productSchema.validate({ name, price, description, type, category });
                if (error) {
                    if (filePath) {
                        fs.unlink(`${rootDirectory}/${filePath}`, (err) => {
                            if (err) {
                                return res.status(500).json({ msg: 'Internal server error. Could not delete image ' });
                            }
                        })
                    }
                    return res.status(401).json({ msg: error.message });
                }


                let document;
                try {
                    if (filePath) {
                        const doc = await Product.findById(req.params._id);
                        if (!doc) {
                            return res.status(404).json({ message: 'Product not found' });
                        }
                        fs.unlink(`${rootDirectory}/${doc._doc.image}`, (err) => {
                            if (err) {
                                return res.status(404).json({ msg: 'image not found.Could not delete image ' });
                            }
                        })
                    }
                    document = await Product.findOneAndUpdate(req.params._id, {
                        name,
                        type,
                        category,
                        description,
                        price,
                        ...(filePath && { image: filePath })
                    })
                } catch (error) {
                    console.log(error);
                    return res.status(500).json({ msg: 'Internel server error.Cannot insert product' })
                }
                return res.status(201).json(document);
            })
        }
    }
}

module.exports = insertProduct;