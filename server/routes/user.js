const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');
const { validateCreateUser, validateUpdateUserInterest } = require('../middlewares/validator');
const { isAuthenticated, isValidJwtToken } = require('../middlewares/auth');

router.post('/', validateCreateUser, userController.create); // 회원가입
router.post('/login', isAuthenticated, userController.login);

router.use(isValidJwtToken);
router.put('/', userController.update);
router.delete('/:id', userController.delete);
router.post('/interest/:productId', validateUpdateUserInterest, userController.addInterestProduct);
router.delete(
  '/interest/:productId',
  validateUpdateUserInterest,
  userController.deleteInterestProduct,
);

module.exports = router;
