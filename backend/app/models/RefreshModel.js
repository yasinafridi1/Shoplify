const mongoose = require('mongoose');

const refreshSchema = new mongoose.Schema({
    token: {
        type: String,
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }

}, { timestamps: true });


const RefreshModel = mongoose.model('refreshtoken', refreshSchema);

module.exports = RefreshModel;