const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
  title: String,
  description: String,
});

// Model
// Model is a class that represents a collection of documents in MongoDB
// Note is the name of the collection
// noteSchema is the schema of the collection
const noteModel = mongoose.model("notes", noteSchema);

module.exports = noteModel;
