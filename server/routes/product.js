const express = require("express");
const router = express.Router();
const productController = require("../controllers/product");

router.post("/", productController.create);
router.get("/", productController.findAll);
router.put("/", productController.update);
router.delete("/:id", productController.delete);

module.exports = router;
