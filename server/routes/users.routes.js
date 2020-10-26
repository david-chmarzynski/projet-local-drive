const router = require('express').Router();
const { signup, signin } = require('../controllers/users.controllers');

router.post('/signup', signup);
router.post('/signin', signin);
router.get('/me', (req, res) => {
  res.json({ user: req.user, isLogged: req.isAuthenticated() })
});

module.exports = router;