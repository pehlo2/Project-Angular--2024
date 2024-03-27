
const router = require('express').Router();
const orderManager = require('../managers/orderManager.js');
const Order = require('../models/Orders.js');
const User = require('../models/User.js');

router.post('/', async (req, res) => {
  
    let order = await Order.create({ orderDetails: req.body.products })
    let user = await User.findById(req.user._id)
    user.orders.push(order)
    user.save()
    res.end()
})

module.exports = router;
