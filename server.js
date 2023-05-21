// server.js (entry point for application)
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");
const apiV1Router = require("./routers/menuItemsRouter");
require("./database");

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan(process.env.NODE_ENV === "production" ? "combined" : "dev"));
app.use("/api/v1/menu-items", menuItemsRouter);
app.use("/api/v1/courses", coursesRouter);
app.use("/api/v1/menu-types", menuTypesRouter);

// Error Handling Middleware
// TODO: make handling more specific
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Something went wrong!");
});

app.listen(process.env.PORT || 3000, () => {
    console.log(`App is listening on port ${process.env.PORT || 3000}`);
}); 