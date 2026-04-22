// To create server
// const express = require('express')

// const app = express()

// //Middleware
// // To parse JSON data from request body
// app.use(express.json())

// const notes = []

// // To create a note
// app.post('/notes', (req, res) => {
//     notes.push(req.body)

//     res.status(201).json({
//         message: 'Note created successfully'
//     })
// })

// // To get all notes
// app.get('/notes', (req, res) => {
//     res.status(200).json({
//         message: 'Notes fetched successfully',
//         notes: notes
//     })
// })

// // To delete a note
// app.delete('/notes/:index', (req, res) => {
//     const index = req.params.index
//     delete notes[index]
//     res.status(200).json({
//         message: 'Note deleted successfully'
//     })
// })

// // To update a note
// app.put('/notes/:index', (req, res) => {
//     const description = req.body.description
//     const index = req.params.index

//     notes[index].description = description

//     res.status(200).json({
//         message: 'Note updated successfully'
//     })
// })

// module.exports = app

const express = require("express");
const noteModel = require("./models/note.model");

/*

APIs

POST /notes - To create a note
GET /notes - To get all notes
DELETE /notes/:id - To delete a note
PUT /notes/:id - To update a note

*/

// Middleware
// To parse JSON data from request body
const app = express();
app.use(express.json());

// To create a note
app.post("/notes", async (req, res) => {
  const data = req.body;

  await noteModel.create({
    title: data.title,
    description: data.description,
  });

  res.status(201).json({
    message: "Note created successfully",
  });
});

// To get all notes
app.get("/notes", async (req, res) => {
  //   const notes = await noteModel.find();
  const notes = await noteModel.findOne({
    title: "test_title",
  });

  //   find => [{}, {}] or []
  //   findOne => {} or null

  res.status(200).json({
    message: "Notes fetched successfully",
    notes: notes,
  });
});

// To delete a note
app.delete("/notes/:id", async (req, res) => {
  const id = req.params.id;

  await noteModel.findOneAndDelete({
    _id: id,
  });

  res.status(200).json({
    message: "Note deleted successfully",
  });
});

module.exports = app;
