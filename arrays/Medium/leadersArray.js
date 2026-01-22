/*Example 1:
Input:
 arr = [4, 7, 1, 0]  
Output:
 7 1 0  
Explanation:
 The rightmost element (0) is always a leader.  
7 and 1 are greater than the elements to their right, making them leaders as well.*/

// Approach 1

// function leadersArray(arr) {
//   let res = [];
//   for (let i = 0; i < arr.length; i++) {
//     let leader = true;

//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[j] >= arr[i]) {
//         leader = false;
//         break;
//       }
//     }

//     if (leader) {
//       res.push(arr[i]);
//     }
//   }

//   return res;
// }

// Approach 2

function leadersArray(arr) {
  if (arr.length === 0) return [];

  let ans = [];
  let max = arr[arr.length - 1];
  ans.push(max);

  for (let i = arr.length - 2; i >= 0; i--) {
    if (arr[i] > max) {
      ans.push(arr[i]);
      max = arr[i];
    }
  }

  return ans.reverse();
}

const arr = [4, 7, 1, 0];
const result = leadersArray(arr);

console.log(result);

module.exports = result;
