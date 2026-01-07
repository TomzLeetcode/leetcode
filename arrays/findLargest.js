/*
Input:
  arr[] = {2, 5, 1, 3, 0}
Output:
  5
Explanation:
  5 is the largest element in the array.
*/

// Approuch 1

/*

function findLargest(arr) {
  arr.sort((a, b) => a - b);

  return arr[arr.length - 1];
}

*/

// Approuch 2

function findLargest(arr) {
 
  let largest = arr[0]

  for(let i = 0; i < arr.length; i++){
    
  }

  return largest;

}

const arr = [2, 4, 11, 3, 0];

const result = findLargest(arr);

module.exports = result;
