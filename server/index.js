const express = require("express");
// const cors = require("cors");
const app = express();

const path = require("path");

console.log(__dirname);

app.use(express.static("client"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/index.html"));
});

const port = process.env.PORT || 4004;

app.listen(port, () => {
  console.log(`Server started listening on port ${port}`);
});
