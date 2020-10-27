const router = require('express').Router();
const { signup, signin, signout } = require('../controllers/users.controllers');

router.post('/signup', signup);
router.post('/signin', signin);
router.get('/signout', signout);
router.get('/me', (req, res) => {
  res.json({ user: req.user, isLogged: req.isAuthenticated() })
});

module.exports = router;