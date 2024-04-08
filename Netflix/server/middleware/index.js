const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");

function authenticationMiddleware(req, res, next) {
  try {
    const authtokenString = req.headers.authorization;
    const authToken = authtokenString.split(" ")[1];
    jwt.verify(authToken, JWT_SECRET);
    next();
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Authentication Failed",
    });
  }
}

module.exports = { authenticationMiddleware };
