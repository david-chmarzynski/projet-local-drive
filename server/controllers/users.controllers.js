const { createUser, findUserById, findUserByEmail } = require('../queries/users.queries');
const {signinSchema, signupSchema} = require('../database/validations/user.validation');

// SIGNUP NEW USER CONTROLLER
exports.signup = async (req, res, next) => {
  // DEBUG
  const body = req.body;
  try {
    // VALIDATE REQUEST DATAS (JOI)
    const validate = await signupSchema.validateAsync(body);
    // LOOK FOR AN EXISTING USER IN DB
    const existingUser = await findUserByEmail(validate.email);

    // CASE USER EXIST
    if(existingUser) {
      return res.status(400).json({
        message: "Cet utilisateur existe déjà"
      });
    }
    // CASE USER DOES NOT EXIST
    else {
      const newUser = await createUser(validate);
      res.status(200).json({
        message: "Nouvel utilisateur créé",
        newUser: newUser
      });
    }
  }
  catch (error) {
    if(error.isJoi === true) error.status = 422;
    res.json({ errors: [error.message] });
  }
};

// SESSION SIGNIN CREATED USER CONTROLLER
// exports.signin = (req, res, next) => {
//   passport.authenticate('local', (error, user, info) => {
//     if (error) {
//       next();
//     } else if (!user) {
//       res.json({
//         error: info.message
//       })
//     } else {
//       req.login(user, (err) => {
//         if (err) {
//           next()
//         } else {
//           res.json({ message: "Connexion réussie", user: user, isLogged: req.isAuthenticated()})
//         }
//       })
//     }
//   })(req, res, next);
// };

// JWT SIGNIN CREATED USER CONRTOLLER
exports.signin = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const validate = await signinSchema.validateAsync({email, password})
    const user = await findUserByEmail(validate.email);
    if(user) {
      const match = await user.comparePasswords(validate.password, user.password);
        if(match) {
          req.login(user);
          // req.user = user;
          console.log("isAuthenticated :", req.isAuthenticated())
          res.status(200).cookie('panier', []).json({
            message: "Vous êtes connecté",
            user: user,
            isLogged: req.isAuthenticated()
          });
        } else {
          res.status(403).json({
            message : "Utilisateur ou mot de passe incorrect"
          })
        }
    } else {
      res.status(403).json({
        message: "Utilisateur ou mot de passe incorrect"
      })
    }
  } catch (error) {
    if(error.isJoi === true) error.status = 422;
    next(error);
  }
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