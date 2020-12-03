const router = require('express').Router();
const { create, getProducts } = require('../controllers/products.controllers');

router.post('/get', getProducts);
router.post('/add', create);


module.exports = router;