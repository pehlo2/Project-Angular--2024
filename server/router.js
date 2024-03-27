const router = require('express').Router();

const userControllers = require('./controllers/userController.js');
const shoeController = require('./controllers/shoeController.js');
const orderController = require('./controllers/orderController.js');

router.use('/orders',orderController)
router.use('/users', userControllers);
router.use('/data/shoes', shoeController);

module.exports = router
