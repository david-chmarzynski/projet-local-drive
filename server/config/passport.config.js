const passport = require('passport');
const { app } = require('../app');
const User = require('../database/models/user.model');
const LocalStrategy = require('passport-local').Strategy;
const { findUserByEmail, findUserById } = require('../queries/users.queries');
const util = require('util');
const { response } = require('express');

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user, done) => {
  done(null, user._id);
});

passport.deserializeUser( async (id, done) => {
  try {
    const user = await findUserById(id);
    done(null, user);
  } catch (error) {
    console.log(error)
    done(error, null);
  }
});

passport.use('local', new LocalStrategy({ usernameField: 'email' }, async (email, password, done) => {
  try {
    const user = await findUserByEmail(email);
    if(user) {
      const match = await user.comparePasswords(password, user.password);
      if(match) {
        done(null, user);
      } else {
        done(null, false, { message: "L'email et/ou le mot de passe sont incorrects" });
      }
    }
    else {
      done(null, false, { message: "Cet utilisateur n'existe pas" })
    }
  } catch (error) {
    done(error);
  }
}));