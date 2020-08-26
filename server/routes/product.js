const express = require('express');
const router = express.Router();
const productController = require('../controllers/product');
const { validateCreateProduct } = require('../middlewares/validator');
const { isValidJwtToken, hasJwtToken } = require('../middlewares/auth');

router.get('/', hasJwtToken, productController.filter);
router.get('/:id', hasJwtToken, productController.findOne);
router.use(isValidJwtToken);
router.post('/', validateCreateProduct, productController.create);
router.put('/', productController.update);
router.delete('/:id', productController.delete);

module.exports = router;
