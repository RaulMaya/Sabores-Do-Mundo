const router = require("express").Router();
const { Food, User, Recipe } = require("../models");

router.get("/", async (req, res) => {
  try {
    const dbFood = await Food.findAll({
      include: [
        {
          model: Recipe,
          attributes: ["ingredients", "steps", "video_link"],
        },
      ],
    });
    const dbUser = await User.findAll({
      attributes: { exclude: ["password"] },
      where: { is_superuser: true },
    });

    const foodList = [];
    let past_value;
    let new_value;
    let users = dbUser.map((user) => user.get({ plain: true }));
    let foods = dbFood.map((gallery) => gallery.get({ plain: true }));
    for (let i = 0; i < 3; i++) {
      new_value = Math.floor(Math.random() * foods.length);
      if (new_value === past_value) {
        i--;
      } else {
        foodList.push(foods[new_value]);
        past_value = new_value;
      }
    }
    res.render("index", {
      foodList,
      users,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/dashboard", async (req, res) => {
  try {
    const dbUser = await User.findOne({ where: { email: req.body.email } });
    let user = dbUser.map((user) => user.get({ plain: true }));
    res.render("dashboard", {
      user,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// router.get("/food/:id", (req, res) => {});

module.exports = router;
