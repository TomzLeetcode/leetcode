/*Input: N = 5, arr[] = {2,6,5,8,11}, target = 14
Output : YES
Explanation: arr[1] + arr[3] = 14. So, the answer is “YES” for first variant for second variant output will be : [1,3].*/

function twoSum(n, arr, target) {
  let map = new Map();

  for (let i = 0; i < n; i++) {
    let comp = target - arr[i];

    if (map.has(comp)) {
      return [map.get(comp), i];
    }

    map.set(arr[i], i);
  }

  return [-1, -1];
}

const n = 5,
  arr = [2, 6, 5, 8, 11],
  target = 11;

const result = twoSum(n, arr, target);
console.log("result", result);
