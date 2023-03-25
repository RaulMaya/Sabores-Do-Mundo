const router = require("express").Router();
const { Food } = require("../models");

router.get("/", async (req, res) => {
  try {
    const dbFood = await Food.findAll();

    let foods = dbFood.map((gallery) => gallery.get({ plain: true }));
    foods = foods.slice(0, 3);
    console.log(foods);
    res.render("index", {
      foods,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});



router.get("/food/:id", (req, res) => {});

router.get("/login", (req, res) => {});

module.exports = router;
