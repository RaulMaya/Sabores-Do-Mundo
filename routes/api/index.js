const router = require("express").Router();

const userLogin = require("./userLogin");

router.use("/users", userLogin);

module.exports = router;
