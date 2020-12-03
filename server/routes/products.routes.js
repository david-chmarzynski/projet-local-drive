const router = require('express').Router();
const { create, getProducts } = require('../controllers/products.controllers');

router.post('/add', create);
router.post('/get', getProducts);

module.exports = router;