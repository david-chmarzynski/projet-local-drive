const router = require('express').Router();
const users = require('../routes/users.routes');
const products = require('../routes/products.routes');
const path = require('path');

// USERS ROUTES
router.use('/users', users);

// PRODUCTS ROUTES
router.use('/api/products', products);

// HOME PAGE
// router.use('/', (req, res) => {
//   const user = req.user;
//   console.log(user);
//   if (user) {
//     res.json({
//       message: "Utilisateur connecté"
//     })
//   }
// })

module.exports = router;