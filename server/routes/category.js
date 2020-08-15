const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/category');
const { validateCreateCategory } = require('../middlewares/validator');
const { isValidJwtToken } = require('../middlewares/auth');

router.post('/', isValidJwtToken, validateCreateCategory, categoryController.create);
router.get('/', categoryController.findAll);
router.use(isValidJwtToken);
router.put('/', categoryController.update);
router.delete('/:id', categoryController.delete);

module.exports = router;
