const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  //console.log(req.user);
  res.send("Video List");
});
router.get("/:id", (req, res) => {
  res.send("Video id");
});
router.post("/", (req, res) => {
  res.send("Video Post");
});

module.exports = router;
