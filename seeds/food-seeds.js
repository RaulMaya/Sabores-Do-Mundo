const { Food } = require("../models");

const foodData = [
  {
    name: "Mole",
    description:
      "Mole comes from a family of sauces prepared throughout the Oaxaca and Puebla regions of Mexico and is characterized by a complex, layered flavor derived from intricate blends of dried chiles, spices, fruits, and seasonings.",
    food_image: "/Mexico/01-Mole.jpg",
    country_id: "3",
  },
  {
    name: "Pozole",
    description:
      "The Pozole is made from hominy with meat (typically chicken , but possibly pork), and can be seasoned and garnished with shredded lettuce or cabbage, chilli peppers, onion, garlic, radishes, avocado, salsa or limes.",
    food_image: "/Mexico/02-Pozole.jpg",
    country_id: "3",
  },
  {
    name: "Cochinita Pibil",
    description:
      "Mexican cochinita pibil, or pulled pork shoulder marinated and braised in achiote paste, orange juice, and lime",
    food_image: "/Mexico/03-Cochinita_Pibil.jpg",
    country_id: "3",
  },
  {
    name: "Chiles en Nogada",
    description:
      "This chiles en nogada is made with roasted poblano chilies stuffed with a ground turkey picadillo, covered in a creamy walnut sauce, and sprinkled with pomegranate seeds.",
    food_image: "/Mexico/04-Chiles_Nogada.PNG",
    country_id: "3",
  },
  {
    name: "Barbacoa",
    description:
      "Barbacoa is an authentic Mexican dish typically made with beef, goat or lamb. It is traditionally seasoned with dried chilies and spices and slowly cooked until perfectly tender",
    food_image: "/Mexico/05-Barbacoa.jpg",
    country_id: "3",
  },
  {
    name: "Smørrebrød",
    description:
      " A smørrebrød is typically made with buttered rye bread topped with any combination of meats, cheeses, and garnishes.",
    food_image: "/Denmark/01-Smørrebrød.jpg",
    country_id: "6",
  },
  {
    name: "Stegt flæsk med persillesovs",
    description:
      "It is a simple and tasty combination of crispy pork, potatoes, and parsley sauce.",
    food_image: "/Denmark/02-Stegt.PNG",
    country_id: "6",
  },
  {
    name: "Risalamande",
    description:
      "It is a mix rice pudding with whipped cream, chopped almonds, and vanilla. As the final touch, top it off with warm cherry sauce.",
    food_image: "/Denmark/03-Risalamande.JPG",
    country_id: "6",
  },
  {
    name: "Karbonader",
    description:
      "These breaded pork patties are a popular dinner item in Danish cuisine.",
    food_image: "/Denmark/04-Karbonader.JPG",
    country_id: "6",
  },
  {
    name: "Forloren hare",
    description:
      "Danish meatloaf is known as “mock hare,” most likely because it is cooked similarly to game—wrapped in bacon and served with a jelly sauce.",
    food_image: "/Denmark/05-Forloren.JPG",
    country_id: "6",
  },
  {
    name: "Spaghetti al pomodoro",
    description:
      "An emblematic dish of Italian cuisine, with the typical ingredients of the beautiful country: spaghetti with tomato and basil.",
    food_image: "/Italy/01-Spaghetti.JPG",
    country_id: "1",
  },
  {
    name: "Lasagne",
    description:
      "Lasagna Bolognese is an institution, the typical Sunday dish. This rich and tasty dish originates from Emilia and, specifically, from the city of Bologna.",
    food_image: "/Italy/02-Lasagne.JPG",
    country_id: "1",
  },
  {
    name: "Ravioli ricotta e spinaci",
    description:
      "Fresh pasta, what a delight! Sheets of fresh egg pasta rolled by the skilled hands of grandmothers and aunts are a real delight.",
    food_image: "/Italy/03-Ravioli.JPG",
    country_id: "1",
  },
  {
    name: "Pizza Margherita",
    description:
      "Naples is a thousand colors, yes, but a thousand colors of pizza! Although if you ask around they will tell you that the original is only one, the margherita pizza, and that there are no other ingredients.",
    food_image: "/Italy/04-Pizza.JPG",
    country_id: "1",
  },
  {
    name: "Carbonara classica",
    description:
      "Carbonara is a recipe that can be prepared in a very short time, the perfect dish for dinners with friends who are invited on the spur of the moment and for those who are very hungry but do not feel like cooking.",
    food_image: "/Italy/05-Carbonara.jpg",
    country_id: "1",
  },
  {
    name: "Quiche Lorraine",
    description:
      "Quiche Lorraine traditionally has only 4 ingredients in its shortcrust pastry: eggs, fresh cream, bacon and nutmeg.",
    food_image: "/France/01-Quiche.JPG",
    country_id: "4",
  },
  {
    name: "Tartiflette",
    description:
      "This gratin dish was originally created to promote a local star cheese: Reblochon. Prepared with potatoes, fresh cream, bacon and onions, it is a warm and convivial dish that brings the spirit of the mountains to the table.",
    food_image: "/France/02-Tartiflette.JPG",
    country_id: "4",
  },
  {
    name: "Boeuf bourguignon",
    description:
      "It contains two emblematic products of the region: veal (from Charolais) and red wine (from Côtes Beaune and Nuitonnes). With its tasty mushroom garnish and its slightly acidic sauce",
    food_image: "/France/03-Boeuf.JPG",
    country_id: "4",
  },
  {
    name: "Cassoulet",
    description:
      "This version of cassoulet with lamb is not at all traditional in the southwest of France, as it is not cooked as it is in Toulouse. ",
    food_image: "/France/04-Cassoulet.JPG",
    country_id: "4",
  },
  {
    name: "Gratin dauphinois",
    description:
      "An essential recipe of French gastronomy, gratin dauphinois made its official appearance in 1788 in the province of Dauphiné.",
    food_image: "/France/05-Gratin.JPG",
    country_id: "4",
  },
  {
    name: "Briam",
    description:
      "This typical Greek summer dish could be described as the Greek ratatouille or the Greek caponata. It’s one of the easiest Greek vegan recipes, made with whatever is available in the farmers’ market or at one’s garden.",
    food_image: "Greece/01-Briam.jpg",
    country_id: "2",
  },
  {
    name: "Keftedes",
    description:
      "The name comes from Persia, where “kufte” -meaning ground meat- travelled all around the Middle East, Turkey and the Balkans. One of its forerunners in ancient Greece was called “myma”, made with minced meat or fish combined with many herbs and spices.",
    food_image: "Greece/02-Keftedes.jpg",
    country_id: "2",
  },
  {
    name: "Soutzoukakia",
    description:
      "Soutzouki is a Greek veal sausage, air-dried in the form of a horse-shoe, mixed with different spices, where cumin prevails. Soutzouki is ready to be eaten in thin slices, but it releases its aromas better when cooked, on top of pizza, in pasta sauces, or in a pan with eggs (like a shakshuka). Could be considered as our version of pepperoni or chorizo.",
    food_image: "Greece/03-Soutzoukakia.jpg",
    country_id: "2",
  },
  {
    name: "Satifado",
    description:
      "Stifado can be made with all sorts of meat, rabbit and beef being the most common, although the most interesting variations are the ones with octopus and our delicious vegan stifado version, with mushrooms and chestnuts.",
    food_image: "Greece/04-Satifado.JPG",
    country_id: "2",
  },
  {
    name: "Souvlaki",
    description:
      "Souvlaki can be eaten straight off the skewer, wrapped in pita, or on a plate as a sit-down meal with tzatziki, fries and vegetables on the side. Traditionally it is made from pork or chicken, although beef, lamb and vegetarian versions can be found. Its name comes from “souvla”, meaning spit, and the diminutive suffix “-aki”, therefore the small spit = the skewer.",
    food_image: "Greece/05-Souvlaki.jpg",
    country_id: "2",
  },
  {
    name: "Lomo Saltado",
    description:
      "This typical Peruvian dish is made in a wok, with the stir-fry technique and has soy sauce (China) and includes yellow chili pepper (Peru) among its ingredients. It is also made with paprika, tomato, onion, among others. And it is accompanied with French fries. The secret to the incredible flavor of the lomo saltado in this recipe is in the vinegar.",
    food_image: "Peru/01-Lomo Saltado.jpg",
    country_id: "5",
  },
  {
    name: "Ceviche",
    description:
      "Ceviche, also known as cebiche, sebiche or seviche, is a citrusy seafood dish popular throughout Latin America. It is traditionally made from raw fish and cured with lime. Though its origin is largely debated, it is broadly agreed that this meal can find its roots in Peru.",
    food_image: "Peru/02-Ceviche.jpg",
    country_id: "5",
  },
  {
    name: "Aji de Gallina",
    description:
      "Ají de gallina is composed of a sofrito base made by sautéing red onion, garlic, and ají amarillo together, and adding shredded poached poultry and stock. The stew is then thickened with bread soaked in milk or evaporated milk, cheese such as parmesan, and ground nuts such as pecans or walnuts.",
    food_image: "Peru/03-Aji de Gallina.jpg",
    country_id: "5",
  },
  {
    name: "Pollo a la brasa",
    description:
      "The beginnings of grilled chicken as it is consumed today in Peru date back to 1949, when Roger Schuller, a Swiss immigrant dedicated to raising chickens, began to cook these birds crossed on an iron rod -that is, ' al espiedo'- to sell them to the public.",
    food_image: "Peru/04-Pollo a la brasa.jpg",
    country_id: "5",
  },
  {
    name: "Pachamanca",
    description:
      "Pachamanca specifically refers to the technique of cooking the food underground with hot stones, as the dish can be made with many variations of Andean ingredients. These usually include several types of marinated meats native to the highlands, such as lamb, goat, pork, chicken, alpaca or even guinea pig (called “cuy” in Peru)",
    food_image: "Peru/05-Pachamanca.jpg",
    country_id: "5",
  },
];

function seedFood() {
  return Food.bulkCreate(foodData);
  // console.log(Food);
}

module.exports = seedFood;
