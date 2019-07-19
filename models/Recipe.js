'use strict'

const mongoose = require('mongoose'); //Llama a la librería mongoose
const Schema = mongoose.Schema;


const recipeSchema = new Schema({
    title:  {
        type: String,
        required: true,
        unique: true,
    },
    level: {
        type: String,
        enum: ['Easy Peasy', 'Amateur Chef', 'UltraPro Chef']
    },
    ingredients: {
        type: Array
    },
    cuisine: {
        type: String,
        required: true
    },
    dishType: {
        type: String,
        enum: ['Breakfast', 'Dish', 'Snack', 'Dessert', 'Other']
    },
    image: {
        type: String,
        default: 'https://images.media-allrecipes.com/images/75131.jpg'
    },
    duration: {
        type: Number,
        min: 0
    },
    creator: {
        type: String
    },
    created: {
        type: Date,
        default: Date.now //por defecto te pone el día de hoy
    }
})

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe; //Exporta el modelo para poder acceder desde otro sitio.