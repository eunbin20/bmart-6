const express = require("express");
const router = express.Router();
const userController = require("../controllers/user");

router.post("/", userController.create);
router.put("/", userController.update);
router.delete("/:id", userController.delete);

module.exports = router;
