const router = require("express").Router();
const { Country, Food, Recipe } = require("../models");
const { Youtube_tool } = require("../utils/helpers");

const withAuth = require('../utils/auth');

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

router.get("/:id", async (req, res) => {
  try {
    const dbCountryData = await Country.findByPk(req.params.id, {
      include: [
        {
          model: Food,
          attributes: ["id", "name", "description", "food_image"],
        },
      ],
    });
    const country = dbCountryData.get({ plain: true });
    // console.log(country);
    res.render("food", { country, loggedIn: req.session.loggedIn, });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// router.get("/food/:id", async (req, res) => {
//   try {
//     const dbFoodData = await Food.findByPk(req.params.id, {
//       include: [
//         {
//           model: Recipe,
//           attributes: ["ingredients", "video_link"],
//         },
//       ],
//     });
//     const food = dbFoodData.get({ plain: true });

//     const yt = new Youtube_tool(food.recipe.video_link);
//     const videoLink = await yt.Video();

//     if (videoLink) {
//       food.recipe.video_link = await videoLink;
//       res.json(food);
//     } else {
//       res.status(500);
//     }
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });
module.exports = router;
