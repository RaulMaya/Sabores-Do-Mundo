const router = require("express").Router();
const { Food } = require("../models");

router.get("/", async (req, res) => {
  try {
    const dbFood = await Food.findAll();
    const foodList = [];
    let past_value;
    let new_value;
    let foods = dbFood.map((gallery) => gallery.get({ plain: true }));
    for (let i = 0; i < 3; i++) {
      new_value = Math.floor(Math.random() * foods.length);
      console.log(new_value)
      if (new_value === past_value) {
        i--
      } else {
        foodList.push(foods[new_value])
        past_value = new_value;
      }
    }
    console.log(foodList)
    res.render("index", {
      foodList,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/food/:id", (req, res) => {});

router.get("/login", (req, res) => {});

module.exports = router;
