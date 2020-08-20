const express = require('express');
const router = express.Router();
const productController = require('../controllers/product');
const { validateCreateProduct } = require('../middlewares/validator');
const { isValidJwtToken } = require('../middlewares/auth');

router.get('/', productController.filter);
router.get('/:id', productController.findOne);
router.use(isValidJwtToken);
router.post('/', validateCreateProduct, productController.create);
router.put('/', productController.update);
router.delete('/:id', productController.delete);

module.exports = router;
