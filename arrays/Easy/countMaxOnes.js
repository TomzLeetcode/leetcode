/*Problem Statement: Given an array that contains only 1 and 0 return the count of maximum consecutive ones in the array..
Example 1:
Input: prices = {1, 1, 0, 1, 1, 1}
Output: 3
Explanation: There are two consecutive 1’s and three consecutive 1’s in the array out of which maximum is 3.
*/

function countMaxOne(prices) {
  let once = 0;
  let maxlength = 0;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] === 1) {
      once++;
    } else {
      once = 0;
    }

    if (maxlength < once) {
      maxlength = once;
    }
  }

  return maxlength;
}

const prices = [1, 1, 0, 1, 1, 1];
const result = countMaxOne(prices);

module.exports = result;
