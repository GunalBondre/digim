var express = require("express");
var router = express.Router();
const userController = require("../controller/userController");
require("../models/db");
const verifySignup = require("../middlewares/verifySignup");
const auth = require("../middlewares/auth");
/*
routes 

router.route('/signin').post(userController.signin)
router.route('/signup').post(userController.signup)

router.route('/:id').get(userController.getUser).patch(userController.updateUser).delete(userController.deleteUser)


*/

/* GET users listing. */

router.route("/signin").post(userController.signin);
router.route("/signup").post(userController.signup);
router.route("/signin").get(userController.getSignin);
router.route("/signup").get(userController.getSignup);
router.route("/verify").get(auth, userController.verifyUser);
router.route("/verify").get(auth, userController.verifyUser);

router
  .route("/:id")
  .get(auth, userController.getUser)
  .patch(auth, userController.updateUser)
  .delete(auth, userController.deleteUser);

module.exports = router;
