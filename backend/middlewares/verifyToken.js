const jwt = require("jsonwebtoken");
const config = require("../config/auth.config");
const User = require("../models/users");

const verifyToken = (req, res, next) => {
  let token = req.headers["x-access-token"];

  if (!token) {
    res.status(403).send({ message: "no token provided" });
  }

  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      return res.status(403).send({ message: "UnAuthorized" });
    }

    req.userId = decoded.id;
    next();
  });
};

const isAdmin = async (req, res, next) => {
  const userData = await User.findById(req.userId);
  if (userData.role !== "admin") {
    res.status(403).send({ mesage: "Not authorized! Admin only area" });
  }
  next();
};

module.exports = {
  verifyToken,
  isAdmin,
};
