const express = require("express");
const router = express.Router();
const userRouter = require("./user");
const categoryRouter = require("./category");
const subcategoryRouter = require("./subcategory");
const productRouter = require("./product");

router.use("/user", userRouter);
router.use("/category", categoryRouter);
router.use("/subcategory", subcategoryRouter);
router.use("/product", productRouter);

module.exports = router;
