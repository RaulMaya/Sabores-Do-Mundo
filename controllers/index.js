const router = require('express').Router();

const indexRoute = require('./indexRoute.js');
const countriesRoute = require('./countriesRoute.js');

router.use('/', indexRoute);
router.use('/countries', countriesRoute);

module.exports = router;
