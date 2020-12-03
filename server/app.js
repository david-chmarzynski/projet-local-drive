const express = require('express');
const morgan = require('morgan');
const errorHandler = require('errorhandler');
const cors = require('cors');
const path = require('path');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const port = '80';

// DB CONNECT
require('./database');

// ROUTES IMPORT
const index = require('./routes');

const app = express();
exports.app = app;

// JWT
app.use(cookieParser());

// JWT AUTHENTICATION
require('./config/jwt.config');

// SESSION & PASSPORT AUTH
require('./config/session.config');
// require('./config/passport.config');


app.use(morgan('short'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet({
  contentSecurityPolicy: false,
}));
app.use(express.static(path.join(__dirname, '../build')));
app.use(index);

app.use('/', (req, res) => {
  res.sendFile(path.join(__dirname, "../build/index.html"));
});

app.listen(port);
console.log("App listening on port ", port);
module.exports = app;