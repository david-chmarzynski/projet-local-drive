const User = require('../database/models/user.model');
const { createUser, findUserById, findUserByEmail } = require('../queries/users.queries');

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

// SIGNIN CREATED USER CONTROLLER (WITHOUT PASSPORT)
// exports.signin = async (req, res, next) => {
//   const body = req.body;
//   try {
//     const user = await findUserByEmail(body.email);
//     if(user) {
//       const checkPasswords = await User.comparePasswords(body.password);
//       if(checkPasswords) {
//         req.login();
//       } else {

//       }
//     } else {
//       res.json({
//         message: "L'email et/ou le mot de passe n'existe pas"
//       });
//     }
//   } catch (error) {
    
//   }
// };