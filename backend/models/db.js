const mongoose = require("mongoose");
const config = require("../config/db.config");
mongoose.connect(
  `mongodb://${config.HOST}:${config.PORT}/${config.DB}`,

  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (!err) {
      console.log("mongodb connection successfull");
    } else {
      console.log("error in connecting to database", err);
    }
  }
);
