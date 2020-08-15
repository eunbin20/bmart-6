const { Router } = require('express');
const router = Router();
const bannerController = require('../controllers/banner');
const { validateCreateBanner, validateDeleteBanner } = require('../middlewares/validator');
const { isValidJwtToken } = require('../middlewares/auth');

router.get('/', bannerController.findAll);
router.post('/', validateCreateBanner, isValidJwtToken, bannerController.create);
router.delete('/:bannerId', validateDeleteBanner, isValidJwtToken, bannerController.delete);

module.exports = router;
