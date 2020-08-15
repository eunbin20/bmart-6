const { Router } = require('express');
const router = Router();
const orderController = require('../controllers/order');
const { isValidJwtToken } = require('../middlewares/auth');
const { validateCreateOrder, validateGetOrderOne } = require('../middlewares/validator');

router.post('/', validateCreateOrder, isValidJwtToken, orderController.create);
router.get('/', isValidJwtToken, orderController.findAll);
router.get('/:orderId', validateGetOrderOne, isValidJwtToken, orderController.findOne);

module.exports = router;
