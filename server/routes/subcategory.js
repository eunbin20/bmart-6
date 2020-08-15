const express = require('express');
const router = express.Router();
const subcategoryController = require('../controllers/subcategory');
const { isValidJwtToken } = require('../middlewares/auth');
const { validateCreateSubCategory, validateGetSubcategory } = require('../middlewares/validator');

router.get('/:categoryId', validateGetSubcategory, subcategoryController.findAll);
router.use(isValidJwtToken);
router.post('/', validateCreateSubCategory, subcategoryController.create);
router.put('/', subcategoryController.update);
router.delete('/:id', subcategoryController.delete);

module.exports = router;
