const User = require('../database/models/user.model');
const { createUser, findUserById, findUserByEmail } = require('../queries/users.queries');
const passport = require('passport');

// SIGNUP NEW USER CONTROLLER
exports.signup = async (req, res, next) => {
  // DEBUG
  const body = req.body;
  try {
    // LOOK FOR AN EXISTING USER IN DB
    const existingUser = await findUserByEmail(req.body.email);

    // CASE USER EXIST
    if(existingUser) {
      return res.status(400).json({
        message: "Cet utilisateur existe déjà",
        user: existingUser
      });
    }
    // CASE USER DOES NOT EXIST
    else {
      const newUser = await createUser(body);
      res.status(200).json({
        message: "Nouvel utilisateur créé",
        newUser: newUser
      });
    }
  }
  catch (error) {
    res.json({ errors: [error.message] });
  }
};

// SIGNIN CREATED USER CONTROLLER
exports.signin = (req, res, next) => {
  passport.authenticate('local', (error, user, info) => {
    if (error) {
      next();
    } else if (!user) {
      res.json({
        error: info.message
      })
    } else {
      req.login(user, (err) => {
        if (err) {
          next()
        } else {
          res.json({ message: "Connexion réussie", user: user, isLogged: req.isAuthenticated()})
        }
      })
    }
  })(req, res, next);
};

// SIGNOUT SIGNEDIN USER CONROLLER
exports.signout = (req, res, next) => {
  try {
    req.logout();
    res.json({ user: req.user, isLogged: req.isAuthenticated()});
  } catch (error) {
    console.log(error)
  }
};