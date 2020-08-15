const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/category');
const { validateCreateCategory } = require('../middlewares/validator');
const { isValidJwtToken } = require('../middlewares/auth');

router.get('/', categoryController.findAll);
router.use(isValidJwtToken);
router.post('/', validateCreateCategory, categoryController.create);
router.put('/', categoryController.update);
router.delete('/:id', categoryController.delete);

module.exports = router;
