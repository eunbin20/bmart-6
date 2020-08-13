const express = require('express');
const router = express.Router();
const subcategoryController = require('../controllers/subcategory');
const { isValidJwtToken } = require('../middlewares/auth');

router.post('/', isValidJwtToken, subcategoryController.create);
router.put('/', isValidJwtToken, subcategoryController.update);
router.delete('/:id', isValidJwtToken, subcategoryController.delete);

module.exports = router;
