const express = require("express");
const router = express.Router();
const passport = require("passport");
const userController = require("../controllers/user");
const { validateCreateUser } = require("../middlewares/validator");

router.post("/", validateCreateUser, userController.create); // 회원가입
router.post(
  "/login",
  passport.authenticate("local", { session: false }),
  userController.login
);
router.put("/", userController.update);
router.delete("/:id", userController.delete);

module.exports = router;
