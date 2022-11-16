const router = require('express').Router();

const { createActivoController } = require('../controllers/activoControllers')
const { getActivoController } = require('../controllers/activoControllers')

//const { validProductData } = require('../middlewares/middlewares');

const { validToken } = require('../middlewares/middlewares');

router.post('/activoscarga', createActivoController);
router.get('/activos/', getActivoController);

module.exports = router;