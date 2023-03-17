const Country = require ('./Country');
const Food = require ('./Food');
const Receipe = require ('./Receipe');

Country.hasMany(Food,{
    foreignKey: "country_id",
    onDelete: 'CASCADE'
});

Food.belongto(Country,{
    foreignKey: "country_id",
    onDelete: 'CASCADE'
});

Food.hasOne(Receipe,{
    foreignKey: "food_id",
    onDelete: 'CASCADE'
});

Receipe.belongsto(Food,{
    foreignKey: "food_id",
    onDelete: 'CASCADE'
});

module.exports = {Country, Food, Receipe}
