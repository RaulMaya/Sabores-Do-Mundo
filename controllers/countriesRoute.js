const router = require("express").Router();
const { Country } = require("../models");

router.get("/", async (req, res) => {
  res.render("countries");
});

module.exports = router;
