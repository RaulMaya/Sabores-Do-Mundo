const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  "heroku_7cd031fc8fceca3",
  "b44f9ba0468c5d",
  "725b01d7",
  {
    host: 'us-cdbr-east-06.cleardb.net',
    dialect: 'mysql',
    port: 3306,
  }
);

module.exports = sequelize;
