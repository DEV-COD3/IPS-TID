const jwt = require('jsonwebtoken');
const { SECRET } = require('../config/jwtConfig');

const verifyToken = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1];

  if (!token) {
    return res.status(403).send('No token provided.');
  }

  jwt.verify(token, SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).send('Invalid token.');
    }

    req.userId = decoded.id;
    next();
  });
};

module.exports = { verifyToken };
