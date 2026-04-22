// const express = require("express");

// const app = express();    // Server Instance

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

// app.get("/about", (req, res) => {
//   res.send("About Page");
// });

// app.listen(3000, () => {
//   console.log("Server is running on port 3000");
// });

const app = require("./src/app");
const connectDB = require("./src/db/db");

connectDB();

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
