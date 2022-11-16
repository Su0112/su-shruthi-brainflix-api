const express = require("express");
const app = express();

app.get("/", (req, res) => {
  console.log("Here");
  res.send("Api");
});

app.listen(8080);
