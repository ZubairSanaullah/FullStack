const musicModel = require("../models/music.model");
const albumModel = require("../models/album.model");
const { uploadFile } = require("../services/storage.service");
const jwt = require("jsonwebtoken");

async function createMusic(req, res) {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (decoded.role !== "artist") {
      return res.status(403).json({
        message: "You don't have access to create music!",
      });
    }

    const { title } = req.body;
    const file = req.file;

    const result = await uploadFile(file.buffer.toString("base64"));

    const music = await musicModel.create({
      uri: result.url,
      title,
      artist: decoded.id,
    });

    res.status(201).json({
      message: "Music created successfully",
      music: {
        id: music._id,
        title: music.title,
        artist: music.artist,
        uri: music.uri,
      },
    });
  } catch (e) {
    console.log(e);

    return res.status(500).json({
      message: "Something went wrong!",
      error: e.message,
      stack: e.stack,
    });
  }
}

async function createAlbum(req, res) {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (decoded.role !== "artist") {
      return res.status(403).json({
        message: "You don't have access to create album!",
      });
    }

    const { title, musicIds } = req.body;

    const album = await albumModel.create({
      title,
      artist: decoded.id,
      musics: musicIds,
    });

    res.status(201).json({
      message: "Album created successfully",
      album: {
        id: album._id,
        title: album.title,
        artist: album.artist,
        musics: album.musics,
      },
    });
  } catch (e) {
    console.log(e);

    return res.status(401).json({
      message: "Something went wrong!",
      error: e.message,
      stack: e.stack,
    });
  }
}

module.exports = {
  createMusic,
};
