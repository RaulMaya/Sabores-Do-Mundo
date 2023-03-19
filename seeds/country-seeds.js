const {Country} = require('../models');

const countryData = [
    {
        name : "Italy",
        flag_image : "01-Italy.jpg"
    },
    {
        name : "Greece",
        flag_image : "02-Greece.jpg"
    },
    {
        name : "Spain",
        flag_image : "03-Spain.jpg"
    },
    {
        name : "Mexico",
        flag_image : "04-Mexico.jpg"
    },
    {
        name : "France",
        flag_image : "05-France.jpg"
    },
    {
        name : "Peru",
        flag_image : "06-Peru.jpg"
    },
    {
        name : "Thailand",
        flag_image : "07-Thailand.jpg"
    },
    {
        name : "Denmark",
        flag_image : "08-Denmark.jpg"
    },
    {
        name : "Japan",
        flag_image : "09-Japan.jpg"
    },
    {
        name : "United States",
        flag_image : "10-US.jpg"
    }
];

function seedCountry (){
    return Country.bulkCreate(countryData);
};

module.exports = seedCountry;