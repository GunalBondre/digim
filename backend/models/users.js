const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    password: {
      type: String,
    },
    role: {
      type: String,
      enum: ["user,admin"],
      default: "user",
    },
    phone: {
      type: String,
    },
  },
  timestamp({})
);

const User = mongoose.model("User", userSchema);
module.exports = User;
