const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dishSchema = new Schema({
    name: { type: String, required: true },
    price: { type: String, required: true },
    description: { type: String, required: true },
    starter: { type: Boolean, required: true },
    main: { type: Boolean, required: true },
    dessert: { type: Boolean, required: true },
    vegetarian: { type: Boolean, default: false },
    vegan: { type: Boolean, default: false },
    glutenFree: { type: Boolean, default: false },
    largeFormat: { type: Boolean, default: false },
},  {
        timestamps: true
    });

const Dish = mongoose.model("Dish", dishSchema );

module.exports = Dish;