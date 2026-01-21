/*Example 1:
Input:
 arr = [4, 7, 1, 0]  
Output:
 7 1 0  
Explanation:
 The rightmost element (0) is always a leader.  
7 and 1 are greater than the elements to their right, making them leaders as well.*/

function leadersArray(arr) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    let leader = true;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] >= arr[i]) {
        leader = false;
        break;
      }
    }

    if (leader) {
      res.push(arr[i]);
    }
  }

  return res;
}

const arr = [4, 7, 1, 0];
const result = leadersArray(arr);

console.log(result);

module.exports = result;
