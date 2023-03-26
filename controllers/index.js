const router = require("express").Router();

const homeRoutes = require("./home-routes");
const countriesRoute = require("./countries-routes.js");
const apiRoutes = require('./api');

router.use("/", homeRoutes);
router.use("/countries", countriesRoute);
router.use("/api", apiRoutes);

module.exports = router;
