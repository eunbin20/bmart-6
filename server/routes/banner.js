const { Router } = require('express');
const router = Router();
const bannerController = require('../controllers/banner');
const { validateCreateBanner, validateDeleteBanner } = require('../middlewares/validator');
const { isValidJwtToken } = require('../middlewares/auth');

router.get('/', bannerController.findAll);
router.post('/', isValidJwtToken, validateCreateBanner, bannerController.create);
router.delete('/:bannerId', isValidJwtToken, validateDeleteBanner, bannerController.delete);

module.exports = router;
