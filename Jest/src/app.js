const express = require("express");
const { validateResult } = require("./middlewares/validation.middleware");
const {
  registerUserValidationRules,
} = require("./middlewares/validation.middleware");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ message: "This is working" });
});

app.post(
  "/register",
  validateResult.registerUserValidationRules,
  (req, res) => {
    res.status(200).json({
      message: "User registered successfully",
      user: {
        username,
        email,
      },
    });
  },
);

module.exports = app;
