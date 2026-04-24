const express = require("express");
const authRoutes = require("./routes/auth.routes");
const cookieParser = require("cookie-parser");

const app = express();

// Middleware for JSON
app.use(express.json());

// Middleware for Cookies
app.use(cookieParser());

// Middleware for Authentication routes
app.use("/api/auth", authRoutes);

module.exports = app;
