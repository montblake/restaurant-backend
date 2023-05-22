// /models/menuItem.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const menuItemSchema = new Schema({
    // name of the dish as it appears on the menu
    name: { type: String, required: true },

    // description of the dish as it appears on the menu
    description: { type: String, required: true },

    // price of the dish as it appears on the menu
    price: { type: Number, required: true },

    // THIS HAS BEEN REMOVED AS COURSE IS WHAT DETERMINES THE MENU TYPE
    // which menu is the dish on?
    // menuType: { type: Schema.Types.ObjectId, ref: "MenuType", required: true },

    // what course does the dish belong to?
    course: { type: Schema.Types.ObjectId, ref: "Course", required: true },

    // is the dish currently on the menu?
    current: { type: Boolean, required: true },

    // TODO: make ingredients their own model. NOW: a string of comma-separated ingredients. Must be absolutely inclusive of all ingredients, including garnishes, sauces, etc. 
    ingredients: { type: String, required: false },
    
    // how is it prepared? details about the dish provided by the kitchen
    method: { type: String, required: false },

    // what position in the menu (for that course) is the dish listed?
    position: { type: Number, default: null },

},  {
        timestamps: true
    }
);

const menuItem = mongoose.model("MenuItem", menuItemSchema );

module.exports = menuItem;