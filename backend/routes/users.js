var express = require("express");
var router = express.Router();
const userController = require("../controller/userController");
require("../models/db");

/*
routes 

router.route('/signin').post(userController.signin)
router.route('/signup').post(userController.signup)

router.route('/:id').get(userController.getUser).patch(userController.updateUser).delete(userController.deleteUser)


*/

/* GET users listing. */

router.route("/signin").post(userController.signin);
router.route("/signup").post(userController.signup);

router
  .route("/:id")
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;
