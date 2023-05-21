// /seeds/seed-courses.js
const mongoose = require("mongoose");
const MenuType = require("../models/menuType");
const Course = require("../models/course");
require('dotenv').config();

// ENVIRONMENT VARIABLES
const MONGODB_URL = process.env.MONGODB_URL;

// MONGOOSE CONNECTION EVENTS
mongoose.connection
.on("open", () => console.log("Connected to MongoDB"))
.on("close", () => console.log("Disconnected from MongoDB"))
.on("error", (error) => console.log(`Error connecting to MongoDB: ${error}`));

// CONNECT TO DATABASE
mongoose.connect(MONGODB_URL, {
    useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: false,
	useCreateIndex: true,
});

const getMenuTypes = async () => {
  const menuTypes = await MenuType.find({});
  console.log(menuTypes);
  return menuTypes;
};

// If you need to update the menuType IDs, uncomment the following line
// const menus = getMenuTypes();

// SEED DATA
const courses = [
  // Dinner: 646a6981f1ca49492ab7e2ed
  {
    name: "Chilled",
    menuType: "646a6981f1ca49492ab7e2ed",
    position: 1,
    current: true,
  },
  {
    name: "First",
    menuType: "646a6981f1ca49492ab7e2ed",
    position: 2,
    current: true,
  },
  {
    name: "Main",
    menuType: "646a6981f1ca49492ab7e2ed",
    position: 3,
    current: true,
  },
  // Drinks: 646a6981f1ca49492ab7e2ee
  {
    name: "Cocktails",
    menuType: "646a6981f1ca49492ab7e2ee",
    position: 1,
    current: true,
  },
  {
    name: "Wine",
    menuType: "646a6981f1ca49492ab7e2ee",
    position: 2,
    current: true,
  },
  {
    name: "Beer",
    menuType: "646a6981f1ca49492ab7e2ee",
    position: 3,
    current: true,
  },
  {
    name: "Zero Proof",
    menuType: "646a6981f1ca49492ab7e2ee",
    position: 4,
    current: true,
  },
  // Dessert: 646a6981f1ca49492ab7e2ef
  {
    name: "Desserts",
    menuType: "646a6981f1ca49492ab7e2ef",
    position: 1,
    current: true,
  },
  {
    name: "Coffee",
    menuType: "646a6981f1ca49492ab7e2ef",
    position: 2,
    current: true,
  },
  {
    name: "Digestifs",
    menuType: "646a6981f1ca49492ab7e2ef",
    position: 3,
    current: true,
  },
];

// SEED THE DB
// Delete all the courses from the DB
Course.deleteMany({})
  .then(() => {
    console.log('All courses deleted from collection');
    // Insert new data into the DB
    Course.create(courses)
      .then(coursesFromDB => {
        console.log(`Created ${coursesFromDB.length} courses`);
        // Close the DB connection
        mongoose.connection.close();
      })
      .catch((err) => {
        console.error('Error inserting courses:', err);
      });
  })
  .catch((err) => {
    console.error('Error deleting courses:', err);
  });




