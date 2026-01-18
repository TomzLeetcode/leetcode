/*Input:n = 5,m = 5 arr1[] = {1,2,3,4,5}  arr2[] = {2,3,4,4,5}
Output: {1,2,3,4,5}
Explanation: Common Elements in arr1 and arr2  are:  2,3,4,5
Distnict Elements in arr1 are : 1
Distnict Elemennts in arr2 are : No distinct elements.
Union of arr1 and arr2 is {1,2,3,4,5}*/

//Approach 1

function unionofSoretedArray(arr1, arr2, n, m) {
  let map = new Map();

  for (let i = 0; i < n; i++) {
    map.set(arr1[i], (map.get(arr1[i]) || 0) + 1);
  }

  for (let j = 0; j < m; j++) {
    map.set(arr2[j], (map.get(arr2[j]) || 0) + 1);
  }

  let union = Array.from(map.keys()).sort((a, b) => a - b);

  return union;
}

//Approach 2 (optimal)

function unionofSoretedArray(arr1, arr2, n, m) {
  let union = [];

  let i = 0,
    j = 0;

  while (i < n && j < m) {
    if (arr1[i] < arr2[j]) {
      if (union.length === 0 || union[union.length - 1] !== arr1[i]) {
        union.push(arr1[i]);
      }
      i++;
    } else if (arr1[i] > arr2[j]) {
      if (union.length === 0 || union[union.length - 1] !== arr2[j]) {
        union.push(arr2[j]);
      }
      j++;
    } else {
      if (union.length === 0 || union[union.length - 1] !== arr1[i]) {
        union.push(arr1[i]);
      }
      j++;
      i++;
    }
  }

  while (i < n) {
    if (union.length === 0 || union[union.length - 1] !== arr1[i]) {
      union.push(arr1[i]);
      i++;
    }
  }

  while (j < n) {
    if (union.length === 0 || union[union.length - 1] !== arr2[j]) {
      union.push(arr2[j]);
      j++;
    }
  }

  return union;
}

const arr1 = [1, 2, 3, 4, 5],
  arr2 = [2, 3, 4, 4, 5],
  n = 5,
  m = 5;

const result = unionofSoretedArray(arr1, arr2, n, m);

console.log("result", result);

module.exports = result;
