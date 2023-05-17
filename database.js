const mongoose = require("mongoose");
require("dotenv").config();

const MONGODB_URL = process.env.MONGODB_URL;

mongoose.connection
.on("open", () => console.log("Connected to MongoDB"))
.on("close", () => console.log("Disconnected from MongoDB"))
.on("error", (error) => console.log(`Error connecting to MongoDB: ${error}`));

mongoose.connect(MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
});
