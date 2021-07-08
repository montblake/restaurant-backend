// =====================================
//              DEPENDENCIES
// =====================================
// get .env variables
require("dotenv").config();
const { PORT = 3000, MONGODB_URL } = process.env;
// import express
const express = require("express");
//  create application object
const app = express();
// import mongoose
const mongoose = require("mongoose");
// import middleware
const cors = require("cors");
const morgan = require("morgan");
// import dish model
const Dish = require("./models/dish");


// =====================================
//         DATABASE CONNECTION
// =====================================
// Establish Connection
mongoose.connect(MONGODB_URL, {
    useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: false,
	useCreateIndex: true,
});
// Connection Events
mongoose.connection
    .on("open", () => console.log("You are CONNECTED to MongoDB"))
    .on("close", () => console.log("You have been DISCONNECTED from MongoDB"))
    .on("error", (error) => console.log(error));


// =====================================
//            MIDDLEWARE
// =====================================
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());


// =====================================
//              ROUTES
// =====================================
// Test Route
app.get("/", (req, res) => {
    res.send("Welcome to your new favorite restaurant! Please use the front door.")
});

// Index Route
app.get("/menu", async (req,res) => {
    try {
        // send to frontend all dishes
        res.json(await Dish.find({}));
    } catch (error) {
        res.status(400).json(error);
    }
});
//  New Route

// Delete Route
app.delete("/menu/:id", async (req, res) => {
    try {
        res.json(await Dish.findByIdAndDelete(req.params.id));
    } catch (error) {
        res.status(400).json(error);
    }
});

// Update Route
app.put("/menu/:id", async (req, res) => {
    try {
        res.json(await Dish.findByIdAndUpdate(req.params.id, req.body, { new: true }));
    } catch (error) {
        res.status(400).json(error);
    }
});

// Create Route
app.post("/menu", async (req, res) => {
    console.log(req.body);
    try {
        res.json(await Dish.create(req.body));
    } catch (error) {
        res.status(400).json(error);
    }
});

// Edit Route

// Show Route
app.get("/menu/:id", async (req,res) => {
    try {
        res.json(await Dish.findById(req.params.id));
    } catch (error) {
        res.status(400).json(error);
    }
})



// =====================================
//              LISTENER
// =====================================
app.listen(PORT, () => {
    console.log(`Houston, we have contact on PORT ${PORT}`);
}); 