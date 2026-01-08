/*
Example 1:
Input:
 [1, 2, 4, 7, 7, 5]  
Output:
  
Second Smallest : 2  
Second Largest : 5  
Explanation:
  The elements are sorted as 1, 2, 4, 5, 7, 7.  
Hence, the second smallest element is 2, and the second largest element is 5.
*/

function secoundLargest(arr) {
  if (arr.length < 2) {
    return -1;
  }

  let largest = -Infinity;
  let slargest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      slargest = largest;
      largest = arr[i];
    } else if (arr[i] > slargest && arr[i] !== largest) {
      slargest = arr[i];
    }
  }

  let smallest = Infinity;
  let ssamllest = Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      ssamllest = smallest;
      smallest = arr[i];
    } else if (arr[i] < ssamllest && arr[i] !== smallest) {
      ssamllest = arr[i];
    }
  }

  return [ssamllest, slargest];
}

const arr = [1, 2, 4, 7, 7, 5];

const result = secoundLargest(arr);

module.exports = result;