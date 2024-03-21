const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const ShoeSchema = new mongoose.Schema({
    brand: {
        type: String,
        required: [true,'Brand is required'],
        minLenght: [3, 'brand should be at least 3 characters']
    },
    model: {
        type: String,
        required: [true,'Model is required'],
        minLenght: [3, 'Model should be at least 3 characters']
    },
    description: {
        type: String,
        required: [true,'Description is required'],
        minLenght: [10, 'Model should be at least 10 characters']
    },
    size: {
        type: Number,
        required: [true,'Size is required']
    },
    price: {
        type: Number,
        required: [true,'Price is required']
    },
    image: {
        type: String,
        required: [true,'Image is required'],
        validate: [/^https?:\/\//i,'Wrong Format Image']
    },
    gender: {
        type: String,
        enum: ['Men', 'Women', 'Kids'],
        required: true
    },
    userId: {
        type: ObjectId,
        ref: "User"
    },
    ownerId: {
        type: mongoose.Types.ObjectId,
        ref: 'User'

    }

  
}, { timestamps: { createdAt: 'created_at' } });
const Shoe = mongoose.model('Shoe', ShoeSchema);
module.exports = Shoe;
