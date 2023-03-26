const router = require("express").Router();

const homeRoutes = require("./home-routes");
const countriesRoute = require("./countries-routes.js");

router.use("/", homeRoutes);
router.use("/countries", countriesRoute);


module.exports = router;
