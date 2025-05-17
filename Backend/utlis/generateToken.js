// utils/generateToken.js
const jwt = require('jsonwebtoken');
const { secret, expiresIn } = require('../config/jwt');

const generateToken = (user) => {
  return jwt.sign(
    { id: user._id, email: user.email },
    secret,
    { expiresIn }
  );
};

module.exports = generateToken;
