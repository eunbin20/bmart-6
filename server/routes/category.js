const express = require("express");
const router = express.Router();
const categoryController = require("../controllers/category");

router.post("/", categoryController.create);
router.put("/", categoryController.update);
router.delete("/:id", categoryController.delete);

module.exports = router;
