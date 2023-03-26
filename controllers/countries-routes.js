const router = require("express").Router();
const { Country, Food, Recipe } = require("../models");

router.get("/", async (req, res) => {
  try {
    const dbCountry = await Country.findAll();

    let countries = dbCountry.map((gallery) => gallery.get({ plain: true }));
    res.render("countries", {
      countries,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
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
module.exports = router;
