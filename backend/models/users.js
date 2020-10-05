const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    companyName: {
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
      enum: ["admin", "user"],
      default: "user",
    },
    phone: {
      type: String,
    },
  },
  { timestamps: {} }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
