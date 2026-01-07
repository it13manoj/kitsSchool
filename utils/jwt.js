const jwt = require("jsonwebtoken");
const config = require("config");

exports.generateToken = (user) => {
  return jwt.sign(
    {
      id: user.id,
      email: user.email,
      role: user.role,
    },
    config.get("security.jwtSecret"),
    {
      expiresIn: config.get("security.jwtExpiresIn"),
    }
  );
};
