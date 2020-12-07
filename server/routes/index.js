const router = require('express').Router();
const users = require('../routes/users.routes');
const products = require('../routes/products.routes');
const path = require('path');

// PRODUCTS ROUTES
router.use('/api/products', products);

// USERS ROUTES
router.use('/users', users);

module.exports = router;