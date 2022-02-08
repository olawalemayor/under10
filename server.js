const express = require("express");
const path = require("path");

const ngApp = express();

ngApp.use(express.static("./dist/under10bucks"));

ngApp.get("/*", function (request, response) {
  response.sendFile(path.join(__dirname, "/dist/under10bucks/index.html"));
});

ngApp.listen(process.env.PORT || 8080);
