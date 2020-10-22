const router = require('express').Router();
const users = require('../routes/users.routes');


// /USERS ROUTES
router.use('/users', users);

router.use('/', (req, res) => {
  res.json({
    message: "Hello"
  });
});

module.exports = router;