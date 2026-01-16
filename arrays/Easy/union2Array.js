/*Input:n = 5,m = 5 arr1[] = {1,2,3,4,5}  arr2[] = {2,3,4,4,5}
Output: {1,2,3,4,5}
Explanation: Common Elements in arr1 and arr2  are:  2,3,4,5
Distnict Elements in arr1 are : 1
Distnict Elemennts in arr2 are : No distinct elements.
Union of arr1 and arr2 is {1,2,3,4,5}*/

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

const arr1 = [1, 2, 3, 4, 5],
  arr2 = [2, 3, 4, 4, 5],
  n = 5,
  m = 5;

const result = unionofSoretedArray(arr1, arr2, n, m);

module.exports = result;
