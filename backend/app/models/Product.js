const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    category: { type: String, required: true },
    type: { type: String, required: true },
    price: { type: String, required: true },
    image: {
        type: String, required: true, get: (image) => {
            return `${process.env.APP_URL}/${image}`
        }
    },
    description: { type: String }
}, { timestamps: true, toJSON: { getters: true }, id: false })


module.exports = Product = mongoose.model('product', productSchema);