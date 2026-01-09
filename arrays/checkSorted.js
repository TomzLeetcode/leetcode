/* Input: N = 5, array[] = {1,2,3,4,5}
Output: True.

Explanation: The given array is sorted i.e Every element in the 
array is smaller than or equals to its next values, So the answer is True. */

function checkSorted(arr) {
  if (!arr.length) {
    return false;
  }

  let s = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[s] > arr[i]) {
      return false;
    }
    s++;
  }

  return true;
}

const arr = [1, 2, 3, 4, 5, 5, 6, 6, 7];

const result = checkSorted(arr);

module.exports = result;
