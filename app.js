const express = require("express");
const app = express();
const PORT = 9000;

// Page import section here
const secoundLargest = require("./arrays/Basic/secoundLargest");
const findLargest = require("./arrays/Basic/findLargest");
const checkSorted = require("./arrays/Basic/checkSorted");
const leftRotateOne = require("./arrays/Basic/leftRotate")

app.listen(PORT, () => {});

// Function calling section here
console.log("leftRotateOne", leftRotateOne);
