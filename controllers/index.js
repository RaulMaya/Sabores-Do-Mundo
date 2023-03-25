const router = require("express").Router();

const homeRoutes = require("./homeRoutes");
const countriesRoute = require("./countriesRoute.js");

router.use("/", homeRoutes);
router.use("/countries", countriesRoute);


module.exports = router;
