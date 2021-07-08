const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dishSchema = new Schema({
    // Which Menu? a string but one of three options
    //  drinks || dinner || dessert
    menuGroup: String,
    
    // the basic information
    name: { type: String, required: true },
    price: { type: String, required: true },
    description: { type: String, required: true },

    // if dinner what  dishType: starter, main, largeFormat
    // starters are individual elements or easily shared dishes
    // mains are a complete plate for an individual though they can be shared
    // largeFormat are one major protein and accompaniments designed to be shared
    // like menuGroup, radio buttons that return a string
    // starter || main || largeFormat
    dishType: {type: String},

    // if drinks
    // like dishType, drinkType
    // cocktail || wine || zeroProof
    drinkType: {type: String},

    // dietary restrictions, include for all dishes
    vegetarian: { type: Boolean, default: false },
    vegan: { type: Boolean, default: false },
    glutenFree: { type: Boolean, default: false },
    
},  {
        timestamps: true
    }
);

const Dish = mongoose.model("Dish", dishSchema );

module.exports = Dish;