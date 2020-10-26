const router = require('express').Router();
const users = require('../routes/users.routes');
const path = require('path');

// /USERS ROUTES
router.use('/users', users);

router.use('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../build/index.html'));
});

module.exports = router;