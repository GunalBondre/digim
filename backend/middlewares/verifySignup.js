const User = require("../models/users");

const checkEmailExist = async (req, res, next) => {
  const email = req.body.email;
  const userExists = await User.findOne({ email: email });
  if (userExists) {
    res.status(400).send({ message: "email already exists" });
  }
  next();
};

module.exports = {
    checkEmailExist
};
