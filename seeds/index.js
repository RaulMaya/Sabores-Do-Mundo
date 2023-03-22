const sequelize = require('../config/connection');
const seedCountry = require('./country-seeds');
const seedFood = require('./food-seeds');
const recipeData = require('./recipe-seeds');
const userData = require('./users-seeds')

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await userData();
  console.log('\n----- MAIN USERS SEEDED -----\n');

  await seedCountry();
  console.log('\n----- COUNTRIES SEEDED -----\n');

  await recipeData();
  console.log('\n----- RECIPES SEEDED -----\n');

  await seedFood();
  console.log('\n----- FOODS SEEDED -----\n');

  process.exit(0);
}

seedAll();