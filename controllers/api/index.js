const router = require("express").Router();

const indexRoute = require("./indexRoute");

router.use("/user", indexRoute);

module.exports = router;
