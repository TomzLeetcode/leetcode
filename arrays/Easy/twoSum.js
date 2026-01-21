/*Input: N = 5, arr[] = {2,6,5,8,11}, target = 14
Output : YES
Explanation: arr[1] + arr[3] = 14. So, the answer is “YES” for first variant for second variant output will be : [1,3].*/

// function twoSum(n, arr, target) {
//   let map = new Map();

//   for (let i = 0; i < n; i++) {
//     let comp = target - arr[i];

//     if (map.has(comp)) {
//       return [map.get(comp), i];
//     }

//     map.set(arr[i], i);
//   }

//   return [-1, -1];
// }

//optimal approach

function twoSum(arr, target) {
  let numindexsandvalues = arr.map((val, idx) => [val, idx]);

  numindexsandvalues.sort((a, b) => a[0] - b[0]);

  let left = 0,
    right = arr.length - 1;

  while (left < right) {
    let sum = numindexsandvalues[left][0] + numindexsandvalues[right][0];

    if (sum === target) {
      return [numindexsandvalues[left][1], numindexsandvalues[right][1]];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }

  return [-1, -1];
}

const n = 5,
  arr = [2, 6, 5, 8, 11],
  target = 11;

const result = twoSum(arr, target);
console.log("result", result);
