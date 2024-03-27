const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const orderSchema = new mongoose.Schema({

    orderDetails: [{
        shoeId: {
            type: mongoose.Types.ObjectId,
            ref: 'Shoe',
            required: true
        },
        quantity: {
            type: Number,
            required: true
        }
    }]


}, { timestamps: { createdAt: 'created_at' } });
const Order = mongoose.model('Order', orderSchema);
module.exports = Order;
