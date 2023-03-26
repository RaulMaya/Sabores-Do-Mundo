const { Country } = require("../models");

const countryData = [
  {
    name: "Italy",
    flag_image: "01-Italy.jpg",
    description:
      "Italian food is a delicious and diverse cuisine that features fresh ingredients, pasta, pizza, cheeses, meats, seafood, and a rich culinary history.",
    background_image: "Italy.png",
    front_image: "italyFront.png",
  },
  {
    name: "Greece",
    flag_image: "02-Greece.jpg",
    description:
      "Greek food is fresh and healthy, featuring grilled meats, seafood, vegetables, feta cheese, yogurt, olives, and traditional dishes like moussaka and spanakopita.",
    background_image: "Greece.png",
    front_image: "greeceFront.png",
  },
  {
    name: "Mexico",
    flag_image: "03-Mexico.jpg",
    description:
      "Mexican food is bold and flavorful, featuring spicy chilies, savory meats, beans, rice, and tortillas, often accompanied by guacamole and salsa.",
    background_image: "Mexico.png",
    front_image: "mexicoFront.png",
  },
  {
    name: "France",
    flag_image: "04-France.jpg",
    description:
      "French food is elegant and refined, featuring buttery sauces, delicate pastries, cheeses, meats, and seafood, and paired with fine wines.",
    background_image: "France.png",
    front_image: "franceFront.png",
  },
  {
    name: "Peru",
    flag_image: "05-Peru.jpg",
    description:
      "Peruvian food is diverse and flavorful, featuring fresh seafood, spicy peppers, potatoes, corn, and unique dishes like ceviche and lomo saltado.",
    background_image: "Peru.png",
    front_image: "peruFront.png",
  },
  {
    name: "Denmark",
    flag_image: "06-Denmark.jpg",
    description:
      "Danish food is simple and hearty, featuring open-faced sandwiches, pickled herring, meatballs, fish dishes, and pastries like wienerbrød.",
    background_image: "Denmark.png",
    front_image: "denmarkFront.png",
  },
];

function seedCountry() {
  return Country.bulkCreate(countryData);
}

module.exports = seedCountry;
