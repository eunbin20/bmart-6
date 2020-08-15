const express = require('express');
const router = express.Router();
const productController = require('../controllers/product');
const { validateCreateProduct } = require('../middlewares/validator');
const { isValidJwtToken } = require('../middlewares/auth');

router.post('/', validateCreateProduct, isValidJwtToken, productController.create);
router.get('/', productController.findAll);
router.put('/', isValidJwtToken, productController.update);
router.delete('/:id', isValidJwtToken, productController.delete);

module.exports = router;
