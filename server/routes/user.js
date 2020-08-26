const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');
const { validateCreateUser, validateLikeProduct } = require('../middlewares/validator');
const { isAuthenticated, isValidJwtToken } = require('../middlewares/auth');

router.post('/', validateCreateUser, userController.create); // 회원가입
router.post('/login', isAuthenticated, userController.login);

router.use(isValidJwtToken);
router.put('/', userController.update);
router.delete('/:id', userController.delete);
router.get('/product/:productId', validateLikeProduct, userController.likeProduct);
router.delete('/product/:productId', validateLikeProduct, userController.unlikeProduct);

module.exports = router;
