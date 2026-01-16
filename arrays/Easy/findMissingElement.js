/*Example 1:
Input Format: N = 5, array[] = {1,2,4,5}
Result: 3
Explanation: In the given array, number 3 is missing. So, 3 is the answer.*/

function findMissingElements(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      return i + 1;
    }
  }
}

const arr = [1, 2, 4, 5],
  n = 5;

const result = findMissingElements(arr, n);

module.exports = result;
