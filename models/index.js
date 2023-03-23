const Country = require("./Country");
const Food = require("./Food");
const Recipe = require("./Recipe");
const User = require("./User");

User.hasMany(Food, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Country.hasMany(Food, {
  foreignKey: "country_id",
  onDelete: "CASCADE",
});

Food.hasOne(Recipe, {
  foreignKey: "food_id",
  onDelete: "CASCADE",
});

Food.belongsTo(Country, {
  foreignKey: "country_id",
});

Food.belongsTo(User, {
  foreignKey: "user_id",
});

Recipe.belongsTo(Food, {
  foreignKey: "food_id",
});

module.exports = { Country, Food, Recipe, User };
