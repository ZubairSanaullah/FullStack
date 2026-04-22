// To connect to database
// mongodb+srv://zubi:<db_password>@backend-practice.kugohby.mongodb.net/
const mongoose = require("mongoose");

async function connectDB() {
  try {
    console.log("Connecting to MongoDB...");
    // Using direct shard URLs to bypass local network DNS restrictions on SRV records
    await mongoose.connect(
      "mongodb://zubi:2v0RCvDH52WeoeFz@ac-p5l4twr-shard-00-00.kugohby.mongodb.net:27017,ac-p5l4twr-shard-00-01.kugohby.mongodb.net:27017,ac-p5l4twr-shard-00-02.kugohby.mongodb.net:27017/?ssl=true&authSource=admin&retryWrites=true&w=majority",
    );
    console.log("Database connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
    process.exit(1);
  }
}

module.exports = connectDB;
