const {Food} = require('../models');

const foodData = [
    {
        name : "Mole",
        description : "Mole comes from a family of sauces prepared throughout the Oaxaca and Puebla regions of Mexico and is characterized by a complex, layered flavor derived from intricate blends of dried chiles, spices, fruits, and seasonings.",
        food_image : "/Mexico/01-Mole.jpg",
        country_id : "4"
    },
    {
        name : "Pozole",
        description : "The Pozole is made from hominy with meat (typically chicken , but possibly pork), and can be seasoned and garnished with shredded lettuce or cabbage, chilli peppers, onion, garlic, radishes, avocado, salsa or limes.",
        food_image : "/Mexico/02-Pozole.jpg",
        country_id : "4"
    },
    {
        name : "Cochinita Pibil",
        description : "Mexican cochinita pibil, or pulled pork shoulder marinated and braised in achiote paste, orange juice, and lime",
        food_image : "/Mexico/03-Cochinita_Pibil.jpg",
        country_id : "4"
    },
    {
        name : "Chiles en Nogada",
        description : "This chiles en nogada is made with roasted poblano chilies stuffed with a ground turkey picadillo, covered in a creamy walnut sauce, and sprinkled with pomegranate seeds.",
        food_image : "/Mexico/04-Chiles_Nogada.PNG",
        country_id : "4"
    },
    {
        name : "Barbacoa",
        description : "Barbacoa is an authentic Mexican dish typically made with beef, goat or lamb. It is traditionally seasoned with dried chilies and spices and slowly cooked until perfectly tender",
        food_image : "/Mexico/05-Barbacoa.jpg",
        country_id : "4"
    },
    {
        name : "Smørrebrød",
        description : " A smørrebrød is typically made with buttered rye bread topped with any combination of meats, cheeses, and garnishes.",
        food_image : "/Denmark/01-Smørrebrød.jpg",
        country_id : "8"
    },
    {
        name : "Stegt flæsk med persillesovs",
        description : "It is a simple and tasty combination of crispy pork, potatoes, and parsley sauce.",
        food_image : "/Denmark/02-Stegt.PNG",
        country_id : "8"
    },
    {
        name : "Risalamande",
        description : "It is a mix rice pudding with whipped cream, chopped almonds, and vanilla. As the final touch, top it off with warm cherry sauce.",
        food_image : "/Denmark/03-Risalamande.JPG",
        country_id : "8"
    },
    {
        name : "Karbonader",
        description : "These breaded pork patties are a popular dinner item in Danish cuisine.",
        food_image : "/Denmark/04-Karbonader.JPG",
        country_id : "8"
    },
    {
        name : "Forloren hare",
        description : "Danish meatloaf is known as “mock hare,” most likely because it is cooked similarly to game—wrapped in bacon and served with a jelly sauce.",
        food_image : "/Denmark/05-Forloren.JPG",
        country_id : "8"
    },
    {
        name : "Spaghetti al pomodoro",
        description : "An emblematic dish of Italian cuisine, with the typical ingredients of the beautiful country: spaghetti with tomato and basil.",
        food_image : "/Italy/01-Spaghetti.JPG",
        country_id : "1"
    },
    {
        name : "Lasagne",
        description : "Lasagna Bolognese is an institution, the typical Sunday dish. This rich and tasty dish originates from Emilia and, specifically, from the city of Bologna.",
        food_image : "/Italy/02-Lasagne.JPG",
        country_id : "1"
    },
    {
        name : "Ravioli ricotta e spinaci",
        description : "Fresh pasta, what a delight! Sheets of fresh egg pasta rolled by the skilled hands of grandmothers and aunts are a real delight.",
        food_image : "/Italy/03-Ravioli.JPG",
        country_id : "1"
    },
    {
        name : "Pizza Margherita",
        description : "Naples is a thousand colors, yes, but a thousand colors of pizza! Although if you ask around they will tell you that the original is only one, the margherita pizza, and that there are no other ingredients.",
        food_image : "/Italy/04-Pizza.JPG",
        country_id : "1"
    },
    {
        name : "Carbonara classica",
        description : "Carbonara is a recipe that can be prepared in a very short time, the perfect dish for dinners with friends who are invited on the spur of the moment and for those who are very hungry but do not feel like cooking.",
        food_image : "/Italy/05-Carbonara.jpg",
        country_id : "1"
    },
    {
        name : "Quiche Lorraine",
        description : "Quiche Lorraine traditionally has only 4 ingredients in its shortcrust pastry: eggs, fresh cream, bacon and nutmeg.",
        food_image : "/France/01-Quiche.JPG",
        country_id : "5"
    },
    {
        name : "Tartiflette",
        description : "This gratin dish was originally created to promote a local star cheese: Reblochon. Prepared with potatoes, fresh cream, bacon and onions, it is a warm and convivial dish that brings the spirit of the mountains to the table.",
        food_image : "/France/02-Tartiflette.JPG",
        country_id : "5"
    },
    {
        name : "Boeuf bourguignon",
        description : "It contains two emblematic products of the region: veal (from Charolais) and red wine (from Côtes Beaune and Nuitonnes). With its tasty mushroom garnish and its slightly acidic sauce",
        food_image : "/France/03-Boeuf.JPG",
        country_id : "5"
    },
    {
        name : "Cassoulet",
        description : "This version of cassoulet with lamb is not at all traditional in the southwest of France, as it is not cooked as it is in Toulouse. ",
        food_image : "/France/04-Cassoulet.JPG",
        country_id : "5"
    },
    {
        name : "Gratin dauphinois",
        description : "An essential recipe of French gastronomy, gratin dauphinois made its official appearance in 1788 in the province of Dauphiné.",
        food_image : "/France/05-Gratin.JPG",
        country_id : "5"
    },
    {
        name : "Mac n' Cheese",
        description : "They are nothing more than macaroni and cheese. But made with a special cheese and in a special way that makes them taste good to everyone.",
        food_image : "/EU/01-Mac_Cheese.JPG",
        country_id : "10"
    },
    {
        name : "Buffalo wings",
        description : "Crispy and spicy chicken wings coated in hot chili sauce, butter, and vinegar. Served with celery and ranch or blue cheese dressing",
        food_image : "/EU/02-Buffalo_Wings.JPG",
        country_id : "10"
    }
];

function seedFood (){
    return Food.bulkCreate(foodData);
};

module.exports = seedFood;