const router = require("express").Router();
const { Food, User, Recipe } = require("../models");
const withAuth = require("../utils/auth");
const { Youtube_tool } = require("../utils/helpers");

router.get("/", async (req, res) => {
  try {
    console.log("Index")
    const dbFood = await Food.findAll({
      include: [
        {
          model: Recipe,
          attributes: ["ingredients", "steps", "video_link"],
        },
      ],
    });
    console.log("Pass Food Find All")
    const dbUser = await User.findAll({
      attributes: { exclude: ["password"] },
      where: { is_superuser: true },
    });
    console.log("Pass User Find All")
    const foodList = [];
    let past_value;
    let new_value;
    let users = dbUser.map((user) => user.get({ plain: true }));
    console.log(users)
    let foods = dbFood.map((f) => f.get({ plain: true }));
    console.log(foods)
    for (let i = 0; i < 3; i++) {
      new_value = Math.floor(Math.random() * foods.length);
      if (new_value === past_value) {
        i--;
      } else {
        foodList.push(foods[new_value]);
        past_value = new_value;
      }
    }

    // for (element in foodList) {
    //   const yt = new Youtube_tool(foodList[element].recipe.video_link);
    //   const videoLink = await yt.Video();
    //   if (videoLink) {
    //     foodList[element].recipe.video_link = await videoLink;
    //   }
    // }
    console.log(foodList)
    res.render("index", {
      foodList,
      users,
      loggedIn: req.session.loggedIn,
      userid: req.session.id,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/dashboard", withAuth, async (req, res) => {
  try {
    const dbUser = await User.findOne({ where: { email: req.session.email } });
    const user = dbUser.get({ plain: true });
    const dbFood = await Food.findAll({
      where: { user_id: user.id },
      include: [
        {
          model: Recipe,
          attributes: ["ingredients", "steps", "video_link"],
        },
      ],
    });
    let myFoods = dbFood.map((food) => food.get({ plain: true }));

    // for (element in myFoods) {
    //   const yt = new Youtube_tool(myFoods[element].recipe.video_link);
    //   const videoLink = await yt.Video();
    //   if (videoLink) {
    //     myFoods[element].recipe.video_link = await videoLink;
    //   }
    // }

    res.render("dashboard", {
      user,
      myFoods,
      foodLength: myFoods.length,
      loggedIn: req.session.loggedIn,
      userid: req.session.id,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});



module.exports = router;
