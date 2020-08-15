const express = require('express');
const router = express.Router();
const subcategoryController = require('../controllers/subcategory');
const { isValidJwtToken } = require('../middlewares/auth');
const { validateGetSubcategory } = require('../middlewares/validator');

router.post('/', isValidJwtToken, subcategoryController.create);
router.get('/:categoryId', validateGetSubcategory, subcategoryController.findAll);
router.put('/', isValidJwtToken, subcategoryController.update);
router.delete('/:id', isValidJwtToken, subcategoryController.delete);

module.exports = router;
