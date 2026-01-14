/*Input : nums = [1, 2, 3, 4, 5, 6, 7], k = 2, right
Output : [6, 7, 1, 2, 3, 4, 5]
Explanation : rotate 1 step to the right: [7, 1, 2, 3, 4, 5, 6]
rotate 2 steps to the right: [6, 7, 1, 2, 3, 4, 5] 

Input : nums = [1, 2, 3, 4, 5, 6], k=2, left
Output : [3, 4, 5, 6, 1, 2]
Explanation :rotate 1 step to the left: [2, 3, 4, 5, 6, 1]
rotate 2 steps to the left: [3, 4, 5, 6, 1, 2]*/

class arraayRotate {
  rightRotate(nums, k) {
    const n = nums.length;

    k = k % n;

    let temp = nums.slice(n - k);

    for (let i = n - k - 1; i >= 0; i--) {
      nums[i + k] = nums[i];
    }

    for (let j = 0; j < k; j++) {
      nums[j] = temp[j];
    }

    return nums;
  }

  leftRotate(nums, k) {
    const n = nums.length;
    k = k % n;

    let temp = nums.slice(0, k);

    for (let i = k; i < n; i++) {
      nums[i - k] = nums[i];
    }

    for (let j = 0; j < k; j++) {
      nums[n - k + j] = temp[j];
    }

    return nums;
  }
}

const result = new arraayRotate();

const nums = [1, 2, 3, 4, 5, 6, 7],
  k = 2;

//console.log(result.leftRotate(nums, k)); // [3, 4, 5, 6,7, 1, 2]
console.log(result.rightRotate(nums, k));

module.exports = result;
