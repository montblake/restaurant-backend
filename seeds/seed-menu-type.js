// /seeds/seed-menu-type.js
const mongoose = require("mongoose");
const MenuType = require("../models/menuType");
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

// SEED DATA
const menuTypes = [
  {
    name: "Dinner",
    position: 1,
    current: true,
  },
  {
    name: "Drinks",
    position: 2,
    current: true,
  },
  {
    name: "Dessert",
    position: 3,
    current: true,
  },
];

// SEED THE DB
// Delete all the menu items from the DB
MenuType.deleteMany({})
  .then(() => {
    console.log('All items deleted from collection');
    // Insert new data into the DB
    MenuType.create(menuTypes)
      .then(menuTypesFromDB => {
        console.log(`Created ${menuTypesFromDB.length} menu types`);
        // Close the DB connection
        mongoose.connection.close();
      })
      .catch((err) => {
        console.error('Error inserting menu types:', err);
      });
  })
  .catch((err) => {
    console.error('Error deleting menu types:', err);
  });




