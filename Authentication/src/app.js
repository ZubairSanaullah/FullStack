const express = require("express");
const authRoutes = require("./routes/auth.routes");

const app = express();

app.use(express.json()); //Middleware for json

app.use("/api/auth", authRoutes); //Use auth routes

module.exports = app;
