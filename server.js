const express = require("express");
const request = require("request");

require("dotenv").config();

const app = express();

let port = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/posts", (req, res) => {
  let apiURL = "https://jsonplaceholder.typicode.com/posts";

  request(apiURL, function(error, response, body) {
    let data = JSON.parse(body);
    res.render("posts", { data });
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
