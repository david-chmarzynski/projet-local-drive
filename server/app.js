const express = require('express');
const morgan = require('morgan');
const errorHandler = require('errorhandler');
const cors = require('cors');
const path = require('path');
require('./database');
const index = require('./routes');

const app = express();
exports.app = app;
const port = process.env.PORT || 4000;

app.use(morgan('short'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(index);

if (process.env.NODE_ENV === 'development') {
  app.use(errorHandler());
}
else {
  app.use((err, req, res, next) => {
    const code = err.code || 500;
    res.status(code).json({
      code: code,
      message: code === 500 ? null : err.message
    });
  });
}

app.listen(port);