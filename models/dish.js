const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dishSchema = new Schema({
    // the basic information
    name: { type: String, required: true },
    price: { type: String, required: true },
    description: { type: String, required: true },

    // which menu?
    drink: { type: Boolean, required: false },
    dinner: { type: Boolean, default: true },
    dessert: { type: Boolean, required: false },

    // dinner menu subdivision
    starter: { type: Boolean, required: false },
    main: { type: Boolean, required: false },
    largeFormat: { type: Boolean, default: false },

    // dietary restrictions
    vegetarian: { type: Boolean, default: false },
    vegan: { type: Boolean, default: false },
    glutenFree: { type: Boolean, default: false },
    
},  {
        timestamps: true
    }
);

const Dish = mongoose.model("Dish", dishSchema );

module.exports = Dish;