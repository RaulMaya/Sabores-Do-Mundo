const router = require("express").Router();
const { Country, Food, Recipe } = require("../models");
const { Youtube_tool } = require("../utils/helpers");

const withAuth = require("../utils/auth");

router.get("/", withAuth, async (req, res) => {
  try {
    const dbCountry = await Country.findAll();

    let countries = dbCountry.map((gallery) => gallery.get({ plain: true }));
    res.render("countries", {
      countries,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/:id", withAuth, async (req, res) => {
  try {
    const dbCountryData = await Country.findByPk(req.params.id, {
      include: [
        {
          model: Food,
          attributes: ["id", "name", "description", "food_image", "user_id"],
          include: [
            {
              model: Recipe,
              attributes: ["ingredients", "steps", "video_link"],
            },
          ],
        },
      ],
    });

    const country = dbCountryData.get({ plain: true });
    console.log(country)
    // for (element in country.food) {
    //   console.log(country.food[element].recipe.video_link)
    //   const yt = new Youtube_tool(country.food[element].recipe.video_link);
    //   const videoLink = await yt.Video();
    //   if (videoLink) {
    //     country.food[element].recipe.video_link = await videoLink;
    //   }
    // }

    res.render("food", { country, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


module.exports = router;
