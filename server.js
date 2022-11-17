const express = require("express");
const app = express();

app.get("/", (req, res) => {
  // console.log("test");
  res.send("Api");
});
const userRouter = require("./routes/videos");
app.use("/videos", userRouter);

app.listen(8080, () => {
  console.log("Server is listening on port 8080!");
});

// "api_key": "c52fc4fb-65e8-407a-a00b-a6df33ac4dae"
