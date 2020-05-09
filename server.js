const fs = require("fs");
const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("./docs"));

app.get("*", (req, res) => {
  res.send(fs.readFileSync("./docs/404.html").toString());
});

app.listen(port, () => {
  console.log(`-goto http://localhost:${port}/`);
});
