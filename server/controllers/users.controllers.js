const User = require('../database/models/user.model');
const { createUser, findUserById, findUserByEmail } = require('../queries/users.queries');
const passport = require('passport');

// SIGNUP NEW USER CONTROLLER
exports.signup = async (req, res, next) => {
  // DEBUG
  console.log(req.body)
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
    //console.log(user)
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
          res.json({ message: "Connexion réussie", user: user})
        }
      })
    }
  })(req, res, next);
};