const Country = require ('./Country');
const Food = require ('./Food');
const Recipe = require ('./Receipe');

Country.hasMany(Food,{
    foreignKey: "country_id",
    onDelete: 'CASCADE'
});

Food.belongsTo(Country,{
    foreignKey: "country_id",
    onDelete: 'CASCADE'
});

Food.hasOne(Recipe,{
    foreignKey: "food_id",
    onDelete: 'CASCADE'
});

Recipe.belongsTo(Food,{
    foreignKey: "food_id",
    onDelete: 'CASCADE'
});

module.exports = {Country, Food, Recipe}
