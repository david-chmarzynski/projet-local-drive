const User = require('../database/models/user.model');

// CREATE A NEW USER QUERY
exports.createUser = async (user) => {
  // DEBUG
  console.log(user);
  try {
    const hashedPassword = await User.hashPassword(user.password);
    const newUser = new User({
      // REQUIRED : EMAIL, PASSWORD, ISSHOP & DATE_CREATED
      email: user.email,
      password: hashedPassword,
      isShop: user.isShop,
      date_created: Date.now()
    });

    return newUser.save();
  } catch (error) {
    console.log(error);
  }
};

// FIND USER BY ID QUERY
exports.findUserById = (id) => {
  return User.findById(id).exec();
};

// FIND USER BY EMAIL QUERY
exports.findUserByEmail = (email) => {
  return User.findOne({ 'email': email }).exec();
};