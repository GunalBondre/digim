const config = require("../config/auth.config");
const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  const token = req.header("x-auth-token");
  //   check for token

  if (!token) {
    res.status(401).json({ message: "No token! authorization denied" });
  }
  //   verify token

  try {
    const decoded = jwt.verify(token, config.secret);
    //   send user from payload
    req.user = decoded;
    next();
  } catch (e) {
    res.status(400).json({ message: "token is not valid" });
  }
};

module.exports = auth; 
