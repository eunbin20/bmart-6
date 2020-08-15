const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/category');
const { validateCreateCategory } = require('../middlewares/validator');
const { isValidJwtToken } = require('../middlewares/auth');

router.post('/', validateCreateCategory, isValidJwtToken, categoryController.create);
router.get('/', categoryController.findAll);
router.put('/', isValidJwtToken, categoryController.update);
router.delete('/:id', isValidJwtToken, categoryController.delete);

module.exports = router;
