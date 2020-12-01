const router = require('express').Router();
const { create } = require('../controllers/products.controllers');

router.post('/add', create);

module.exports = router;