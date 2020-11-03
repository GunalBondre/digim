var express = require("express");
var router = express.Router();
const User = require("../models/users");
const auth = require("../middlewares/auth");
const campaignController = require("../controller/campaignController");
require("../models/db");
const verifySignup = require("../middlewares/verifySignup");
/* GET home page. */
router.get("/", auth, (req, res) => {
  User.findOne({ _id: req.user.id })
    .then((user) => {
      if (user) {
        console.log(user);
        res.json(user);
      } else {
        res.send("user doed not exist");
      }
    })
    .catch((err) => console.log(err));
});

router.route("/sendMail").post(campaignController.sendemail);

module.exports = router;
