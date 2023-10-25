const express = require("express");
const app = express();
const PORT = 3000;

app.get("/helth-check", function (req, res, next) {
  res.send("API is working properly");
});

app.use(express.static(__dirname + "/parent-app-public"));

app.listen(PORT, function () {
  console.log("Server listening on port " + PORT);
});
