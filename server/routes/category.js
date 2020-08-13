const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/category');
const { isValidJwtToken } = require('../middlewares/auth');

router.post('/', isValidJwtToken, categoryController.create);
router.put('/', isValidJwtToken, categoryController.update);
router.delete('/:id', isValidJwtToken, categoryController.delete);

module.exports = router;
