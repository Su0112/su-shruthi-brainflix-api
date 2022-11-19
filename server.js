require("dotenv").config();
const express = require("express");
const path = require("node:path");
const cors = require("cors");
const app = express();

app.use(cors());
//middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  // console.log("test");
  res.send("Api");
});
const userRouter = require("./routes/videos");
app.use("/videos", userRouter);

app.listen(8080, () => {
  console.log("Server is listening on port 8080!");
});
