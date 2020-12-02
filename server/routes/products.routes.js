const router = require('express').Router();
const { create, getProducts } = require('../controllers/products.controllers');

router.post('/add', create);
router.post('/', getProducts);

module.exports = router;