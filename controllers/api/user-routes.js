const router = require("express").Router();
const { User, Food } = require("../../models");

// CREATE new user
router.post("/", async (req, res) => {
  try {
    const dbUserData = await User.create({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.email = req.body.email;

      res.status(200).json(dbUserData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Login
router.post("/login", async (req, res) => {
  try {
    const dbUserData = await User.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (!dbUserData) {
      res
        .status(400)
        .json({ message: "Incorrect email or password. Please try again!" });
      return;
    }

    const validPassword = await dbUserData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect email or password. Please try again!" });
      return;
    }

    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.email = req.body.email;

      res
        .status(200)
        .json({ user: dbUserData, message: "You are now logged in!" });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Logout
router.post("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

// Add dish to user
// Define the route handler for the POST request
router.post("/food", async (req, res) => {
  try {
    const { id } = req.body;
    const dbFoodData = await Food.findByPk(id);
    const dbUserData = await User.findOne({
      attributes: { exclude: ["password"] },
      where: {
        email: req.session.email,
      },
    });
    const foodData = dbFoodData.get({ plain: true });
    const userData = dbUserData.get({ plain: true });
    dbFoodData.user_id = userData.id;
    await dbFoodData.save();

    res.status(200).send("Object assigned to user");
    console.log(foodData);
    console.log(userData);
  } catch (error) {
    // Handle any errors
    console.error(error);
    res.status(500).send("Internal server error");
  }
});

// Delete dish to user
// Define the route handler for the POST request
router.delete("/food", async (req, res) => {
  try {
    const { id } = req.body;
    const dbFoodData = await Food.findByPk(id);
    console.log(dbFoodData)
    dbFoodData.user_id = null
    await dbFoodData.save();
    res.status(200).send("Object assigned to user");
  } catch (error) {
    // Handle any errors
    console.error(error);
    res.status(500).send("Internal server error");
  }
});


module.exports = router;
