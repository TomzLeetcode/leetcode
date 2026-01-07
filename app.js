const express = require("express");
const app = express();
const PORT = 9000;

const secoundLargest = require("./arrays/secoundLargest");

app.use("secoundLargest", secoundLargest);

app.listen(PORT, () => {
  console.log("server is running", PORT);
});
