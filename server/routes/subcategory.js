const express = require("express");
const router = express.Router();
const subcategoryController = require("../controllers/subcategory");

router.post("/", subcategoryController.create);
router.put("/", subcategoryController.update);
router.delete("/:id", subcategoryController.delete);

module.exports = router;
