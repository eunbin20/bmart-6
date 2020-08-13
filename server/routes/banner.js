const { Router } = require('express');
const router = Router();
const bannerController = require('../controllers/banner');

router.get('/', bannerController.findAll);
