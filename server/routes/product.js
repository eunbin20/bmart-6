const express = require('express');
const passport = require('passport');
const router = express.Router();
const productController = require('../controllers/product');
const { isValidJwtToken } = require('../middlewares/auth');

router.post('/', isValidJwtToken, productController.create);
router.get('/', productController.findAll);
router.put('/', isValidJwtToken, productController.update);
router.delete('/:id', isValidJwtToken, productController.delete);

module.exports = router;
