const router = require('express').Router();
const users = require('../routes/users.routes');
const path = require('path');

// /USERS ROUTES
router.use('/users', users);

module.exports = router;