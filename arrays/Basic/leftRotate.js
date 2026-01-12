/* Left Rotate the Array by One

Problem Statement: Given an integer array nums, rotate the array to the left by one.
Note: There is no need to return anything, just modify the given array.

Example 1:

Input:

 nums = [1, 2, 3, 4, 5]  

Output:

 [2, 3, 4, 5, 1]  

Explanation:

Initially, nums = [1, 2, 3, 4, 5]  
Rotating once to the left results in nums = [2, 3, 4, 5, 1].*/

//Code

function leftRotateByOne(nums) {
  let temp = nums[0];

  for (let i = 1; i < nums.length - 1; i++) {
    nums[i - 1] = nums[i];
  }

  nums[nums.length - 1] = temp;

  return nums;
}

const nums = [1, 2, 3, 4, 5];

const result = leftRotateByOne(nums);

module.exports = result;
