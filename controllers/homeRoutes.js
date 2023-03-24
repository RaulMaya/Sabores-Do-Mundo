const router = require("express").Router();
const { Country, Food, Recipe } = require("../models");

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

router.get("/country/:id", async (req, res) => {
  try {
    const dbCountryData = await Country.findByPk(req.params.id, {
      include: [
        {
          model: Food,
          attributes: ["name", "description", "food_image"],
        },
      ],
    });
    const country = dbCountryData.get({ plain: true });
    console.log(country);
    res.render("food", { country });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/food/:id", (req, res) => {});

router.get("/login", (req, res) => {});

module.exports = router;
