// /models/menuType.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const menuTypeSchema = new Schema({
  // name of the menuType as it appears on the menu
  name: { type: String, required: true },
  // what position in the menuSelector is the menuType listed?
  position: { type: Number, default: null },
  // is the menuType currently on the menu?
  current: { type: Boolean, required: true },
  // the courses that belong to the menuType
  courses: [{ type: Schema.Types.ObjectId, ref: "Course" }]
},  {
      timestamps: true
});

const MenuType = mongoose.model("MenuType", menuTypeSchema );

module.exports = MenuType;