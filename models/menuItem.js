const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const menuItemSchema = new Schema({
    // name of the dish as it appears on the menu
    name: { type: String, required: true },

    // description of the dish as it appears on the menu
    description: { type: String, required: true },

    // price of the dish as it appears on the menu
    price: { type: Number, required: true },

    // which menu is the dish on?
    menuType: { type: String, required: true, enum: ['dinner', 'drinks', 'dessert'] },

    // what course is the dish listed under?
    course: { type: String, required: true, enum: ['chilled', 'first', 'main', 'wine', 'beer', 'cocktails', 'zero-proof', 'desserts', 'digestifs', 'coffee'] },

    // is the dish currently on the menu?
    current: { type: Boolean, required: true },

    // TODO: make ingredients their own model. NOW: a string of comma-separated ingredients. Must be absolutely inclusive of all ingredients, including garnishes, sauces, etc. 
    ingredients: { type: String, required: false },
    
    // how is it prepared? details about the dish provided by the kitchen
    method: { type: String, required: false },
},  {
        timestamps: true
    }
);

const menuItem = mongoose.model("MenuItem", menuItemSchema );

module.exports = menuItem;