const sequelize = require("../config/connection");
const { User } = require("../models");

const userSeedData = require("./dummyUsers.json");

function seedUser() {
  return User.bulkCreate(userSeedData, {
    individualHooks: true,
    returning: true,
  });
}
module.exports = seedUser;
