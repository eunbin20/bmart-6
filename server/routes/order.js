const { Router } = require('express');
const router = Router();
const orderController = require('../controllers/order');
const { isValidJwtToken } = require('../middlewares/auth');
const { validateCreateOrder, validateGetOrderOne } = require('../middlewares/validator');

router.use(isValidJwtToken);
router.post('/', validateCreateOrder, orderController.create);
router.get('/', orderController.findAll);
router.get('/:orderId', validateGetOrderOne, orderController.findOne);

module.exports = router;
