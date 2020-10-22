const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

// DEFINING USER SCHEMA
const userSchema = Schema({
  firstname: { type: String, required: false },
  lastname: { type: String, required: false },
  email: { type: String, required: true },
  password: { type: String, required: true },
  isShop: { type: Boolean, required: true },
  location_id: { type: Object, required: false },
  date_created: { type: Date, required: true },
  date_updated: { type: Date, required: false }
});

// HASH PASSWORD STATIC
userSchema.statics.hashPassword = (password) => {
  return bcrypt.hash(password, 12);
};

// COMPARE (GIVEN) PASSWORD WITH (DB) PASSWORD
userSchema.methods.comparePasswords = (password) => {
  return bcrypt.compare(password, this.password);
};

const User = mongoose.model('users', userSchema);

module.exports = User;