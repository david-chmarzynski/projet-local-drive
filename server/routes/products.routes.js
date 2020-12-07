const router = require('express').Router();
const { create, getProducts, deleteProduct } = require('../controllers/products.controllers');

router.post('/list', getProducts);
router.post('/add', create);
router.delete('/delete/:productId', deleteProduct);


module.exports = router;