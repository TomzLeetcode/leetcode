const express = require("express");
const app = express();
const PORT = 9000;

// Page import section here
const secoundLargest = require("./arrays/secoundLargest");
const findLargest = require("./arrays/findLargest");
const checkSorted = require("./arrays/checkSorted");

app.listen(PORT, () => {});

// Function calling section here
console.log("checkSorted", checkSorted);
