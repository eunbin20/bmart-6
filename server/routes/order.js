const { Router } = require('express');
const router = Router();
const orderController = require('../controllers/order');
const { isValidJwtToken } = require('../middlewares/auth');
const { validateCreateOrder } = require('../middlewares/validator');

router.post('/', validateCreateOrder, isValidJwtToken, orderController.create);

module.exports = router;
