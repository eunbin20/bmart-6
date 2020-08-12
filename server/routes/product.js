const express = require("express");
const passport = require("passport");
const router = express.Router();
const productController = require("../controllers/product");

router.post("/", passport.authenticate("jwt", { session: false }), productController.create);
router.get("/", productController.findAll);
router.put("/", productController.update);
router.delete("/:id", productController.delete);

module.exports = router;
