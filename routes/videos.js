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
    res.json(data);
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
    res.json(video);
  } else {
    res.json({ error: `Video with ID ${re.params.id} not found` });
  }
});

router.post("/", (req, res) => {
  res.send("Video Post");
});

module.exports = router;
