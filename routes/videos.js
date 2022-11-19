const express = require("express");
const router = express.Router();
const path = require("node:path");
//const data = require("../data/video-details.json");
const { getNewId, writeJSONFile } = require("../utils/utils");

const videosJSONFile = path.join(__dirname, "../data/video-details.json");
const data = require(videosJSONFile);

router.use(express.json());

router.get("/", (req, res) => {
  //console.log(req.user);
  try {
    res.status(200).json(data);
  } catch (error) {
    console.log("Error retrieving the videos", error);
  }
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  const video = data.find((v) => {
    return v.id === id;
  });
  if (video) {
    res.status(200).json(video);
  } else {
    res.status(404).json({ error: `Video with ID ${req.params.id} not found` });
  }
});

router.post("/", (req, res) => {
  console.log(req.body);
  const { title, description } = req.body;
  if (!title || !description) {
    return res.status(400).json({
      error: "Please provide title & description for adding the video",
    });
  }

  const newVideo = {
    id: getNewId(),
    title,
    description,
    image: imageFile,
    channel: "channel",
  };

  students.push(newVideo);
  writeJSONFile(videosJSONFile, videos);

  res.status(201).json(newVideo);
});

module.exports = router;
