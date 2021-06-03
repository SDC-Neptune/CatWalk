const express = require("express");
const app = express();
const PORT = 4000;

app.use(express.static(__dirname + "/../client/dist"));

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

var neil = 5;
var bool = true;