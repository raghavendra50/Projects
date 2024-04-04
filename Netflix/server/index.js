const express = require("express");

const app = express();
const PORT = 8000;

app.get("/", function (req, res) {
  res.send("Dummy Json");
});

app.listen(PORT, () => {
  console.log(`Listening on PORT: ${PORT}`);
});
