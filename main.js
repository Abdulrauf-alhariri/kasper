const express = require("express");
const app = express();
const path = require("path");

app.use(express.json());
app.use(express.static("./public"));
app.use(express.static("./public/css"));
app.use(express.static("./public/images"));
app.use(express.static("./public/js"));
app.use(express.static("./public/webfonts"));

// Adding the routes
app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/index.html"));
});
app.get("/chest-exercises", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/chest_exercises.html"));
});

app.listen(3000, () => {
  console.log("Server is now running");
});
