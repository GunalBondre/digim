require("../models/db");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/users");
const config = require("../config/auth.config");

// @route   /users/signin
// @desc   login user
// @access public
const signin = async (req, res) => {
  const { email, password } = req.body;
  let user = await User.findOne({ email: email });
  if (!user) {
    res.status(400).send("incorrect email or password");
  }
  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) {
    res.status(400).send("incorrect password entered");
  } else {
    let token = jwt.sign({ id: user.id }, config.secret, {
      expiresIn: 60 * 60,
    });
    res.json({
      message: "login successfull",
      token,
      user: {
        id: user.id,
        email: user.email,
      },
    });
  }
};

// @route   /users/signup
// @desc   add user
// @access public
const signup = async (req, res) => {
  const { companyName, email, password } = req.body;

  const user = await User.findOne({ email: email });
  if (user) {
    res.status(400).send("email already exists");
  } else {
    const newUser = new User({
      companyName,
      email,
      password,
    });

    const salt = await bcrypt.genSalt(10);
    newUser.password = await bcrypt.hash(newUser.password, salt);
    await newUser.save();
    if (newUser) {
      let token = jwt.sign({ id: newUser.id }, config.secret, {
        expiresIn: 60 * 60,
      });
      res.json({
        token,
        newUser: {
          id: newUser.id,
          email: newUser.email,
        },
      });
    }
  }
};

// @route   /users/verify
// @desc  get user data
// @access private

const verifyUser = (req, res) => {
  User.findById(req.user.id)
    .select("-password")
    .then((user) => res.json(user));
};
const getUser = (req, res) => {
  res.send("getuser");
};

const updateUser = (req, res) => {
  res.send("updateUser");
};

const deleteUser = (req, res) => {
  res.send("deleteUser");
};
const getSignin = (req, res) => {
  res.send("get signin");
};
const getSignup = (req, res) => {
  res.send("get signup");
};

module.exports = {
  signin,
  signup,
  updateUser,
  getUser,
  deleteUser,
  getSignin,
  getSignup,
  verifyUser,
};
