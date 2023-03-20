const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Recipe extends Model {}

Recipe.init(
    {
       id :{
        type : DataTypes.INTEGER,
        allowNull : false,
        autoIncrement : true,
        primaryKey: true
       },
       ingredients :{
        type : DataTypes.TEXT('long'),
        allowNull : false
       },
       steps :{
        type : DataTypes.TEXT('long'),
        allowNull : false 
       },
       video_link : {
        type : DataTypes.TEXT('medium'),
        allowNull : false 
       },
       food_id :{
        type: DataTypes.INTEGER,
        references :{
            model : "food",
            key : "id"
        }
       }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        timestamps : false,
        modelName: 'recipe'
    }
);

module.exports = Recipe;