const router = require('express').Router();
const { createProduct, getProducts, deleteProduct, updateProduct } = require('../controllers/products.controllers');

router.post('/list', getProducts);
router.post('/add', createProduct);
router.post('/update', updateProduct)
router.delete('/delete/:productId', deleteProduct);


module.exports = router;