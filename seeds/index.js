const sequelize = require('../config/connection');
const seedCountry = require('./country-seeds');
const seedFood = require('./food-seeds');
const recipeData = require('./recipe-seeds');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedCountry();
  console.log('\n----- COUNTRIES SEEDED -----\n');

  await seedFood();
  console.log('\n----- FOODS SEEDED -----\n');

  await recipeData();
  console.log('\n----- RECIPES SEEDED -----\n');

  process.exit(0);
}

seedAll();