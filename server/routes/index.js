const router = require('express').Router();
const users = require('../routes/users.routes');
const products = require('../routes/products.routes');
const path = require('path');

// USERS ROUTES
router.use('/users', users);

// PRODUCTS ROUTES
router.use('/products', products);

module.exports = router;