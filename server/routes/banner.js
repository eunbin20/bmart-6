const { Router } = require('express');
const router = Router();
const bannerController = require('../controllers/banner');
const { isValidJwtToken } = require('../middlewares/auth');

router.get('/', bannerController.findAll);
router.post('/', isValidJwtToken, bannerController.create);
router.delete('/:bannerId', isValidJwtToken, bannerController.delete);

module.exports = router;
