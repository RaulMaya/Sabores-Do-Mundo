const router = require("express").Router();
const { Food, User } = require("../models");

router.get("/", async (req, res) => {
  try {
    const dbFood = await Food.findAll();
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
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/food/:id", (req, res) => {});

router.get("/login", (req, res) => {});

module.exports = router;
