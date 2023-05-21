// /models/course.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const courseSchema = new Schema({
  // name of the course as it appears on the menu
  name: { type: String, required: true },
  // what menuType is the course listed under?
  menuType: { type: Schema.Types.ObjectId, ref: "MenuType", required: true },
  // what position within the menuType is the course listed?
  position: { type: Number, default: null },
  // is the course currently on the menu?
  current: { type: Boolean, required: true },
},  {
      timestamps: true
});

const Course = mongoose.model("Course", courseSchema );

module.exports = Course;