const { Country } = require("../models");

const countryData = [
  {
    name: "Italy",
    flag_image: "01-Italy.jpg",
  },
  {
    name: "Greece",
    flag_image: "02-Greece.jpg",
  },
  {
    name: "Mexico",
    flag_image: "03-Mexico.jpg",
  },
  {
    name: "France",
    flag_image: "04-France.jpg",
  },
  {
    name: "Peru",
    flag_image: "05-Peru.jpg",
  },
  {
    name: "Denmark",
    flag_image: "06-Denmark.jpg",
  },
];

function seedCountry() {
  return Country.bulkCreate(countryData);
}

module.exports = seedCountry;
