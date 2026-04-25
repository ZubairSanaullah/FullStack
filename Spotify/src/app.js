const express = require("express");
const cookieParser = require("cookie-parser");
const authRouter = require("./routes/auth.routers");
const musicRouter = require("./routes/music.route");

const app = express();

// Middlewares
app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/api/auth", authRouter);
app.use("/api/music", musicRouter);

module.exports = app;
