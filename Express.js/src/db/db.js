// To connect to database
// mongodb+srv://zubi:<db_password>@backend-practice.kugohby.mongodb.net/
const mongoose = require("mongoose");

async function connectDB() {
  await mongoose.connect(
    "mongodb+srv://zubi:2v0RCvDH52WeoeFz@backend-practice.kugohby.mongodb.net/halley",
  );
  console.log("Database connected successfully");
}

module.exports = connectDB;
