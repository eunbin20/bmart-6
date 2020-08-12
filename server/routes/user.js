const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');
const { validateCreateUser } = require('../middlewares/validator');
const { isAuthenticated } = require('../middlewares/auth');

router.post('/', validateCreateUser, userController.create); // 회원가입
router.post('/login', isAuthenticated, userController.login);
router.put('/', userController.update);
router.delete('/:id', userController.delete);

module.exports = router;
