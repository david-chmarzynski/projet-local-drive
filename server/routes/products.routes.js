const router = require('express').Router();
const { create, getProducts } = require('../controllers/products.controllers');

router.post('/add', create);
router.get('/get', getProducts);

module.exports = router;