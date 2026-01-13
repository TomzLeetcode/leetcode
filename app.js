const express = require("express");
const app = express();
const PORT = 9000;

// Array
const secoundLargest = require("./arrays/Basic/secoundLargest");
const findLargest = require("./arrays/Basic/findLargest");
const checkSorted = require("./arrays/Basic/checkSorted");
const leftRotateOne = require("./arrays/Basic/leftRotate");
const linearSearch = require("./arrays/Basic/linearSearch");
const countMaxOne = require("./arrays/Easy/countMaxOnes");

app.listen(PORT, () => {});

// Function calling section here
console.log("countMaxOne", countMaxOne);
