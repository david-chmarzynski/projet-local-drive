const secret = '08627376-2664-4cc8-b742-efda1098ad22';
const jwt = require('jsonwebtoken');
const { app } = require('../app');
const { findUserById } = require('../queries/users.queries');

const createJWTToken = ({ user = null, id = null }) => {
  const jwtToken = jwt.sign({
    sub: id || user._id.toString(),
    exp: Math.floor(Date.now() / 1000) + 5
  }, secret);
  return jwtToken;
};

exports.createJWTToken = createJWTToken;

const checkExpirationToken = (token, res) => {
  const tokenExp = token.exp;
  const nowInSeconds = Math.floor(Date.now() / 1000);
  if (nowInSeconds <= tokenExp) {
    return token;
  } else if (nowInSeconds > tokenExp && (nowInSeconds - tokenExp) < (60 * 60 * 24)) {
    const refreshToken = createJWTToken({ id: token.sub });
    res.cookie('jwt', refreshToken);
    return jwt.verify(refreshToken, secret);
  } else {
    throw new Error('Token expired');
  }
};

// NEED COOKIE PARSER IN APP.JS
const extractUserFromToken = async (req, res, next) => {
  const token = req.cookies.jwt;
  if (token) {
    try {
      let decodedToken = jwt.verify(token, secret, { ignoreExpiration: true });
      decodedToken = checkExpirationToken(decodedToken, res);
      const user = await findUserById(decodedToken.sub);
      if(user) {
        req.user = user;
        next();
      } else {
        res.clearCookie('jwt');
        res.status(403).json({
          message: "Il semble qu'il y ait un problème"
        });
      }
    } catch (error) {
      res.clearCookie('jwt');
      res.status(403).json({
        message: "Il semble qu'il y ait un problème"
      });
    }
  } else {
    next();
  }
};

const addJWTFeatures = (req, res, next) => {
  req.isAuthenticated = () => {
    return !!req.user;
  };

  req.logout = () => {
    res.clearCookie("jwt");
    req.user = null;
  };

  req.login = (user) => {
    const token = createJWTToken({ user });
    res.cookie('jwt', token);
    req.user = user;
  };
  next();
};

app.use(addJWTFeatures);
app.use(extractUserFromToken);
