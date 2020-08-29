const mongoose = require("mongoose");

mongoose.connect(
  "mongodb://localhost:27017/digim",

  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (!err) {
      console.log("mongodb connection successfull");
    } else {
      console.log("error in connecting to database", err);
    }
  }
);
