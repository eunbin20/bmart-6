const { Router } = require('express');
const router = Router();
const bannerController = require('../controllers/banner');
const { validateCreateBanner } = require('../middlewares/validator');
const { isValidJwtToken } = require('../middlewares/auth');

router.get('/', bannerController.findAll);
router.post('/', validateCreateBanner, isValidJwtToken, bannerController.create);
router.delete('/:bannerId', isValidJwtToken, bannerController.delete);

module.exports = router;
