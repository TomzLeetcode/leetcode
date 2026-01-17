/*Input :mat = [ [1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12] ], target = 8
Output :True.
Explanation :The target = 8 exists in the 'mat' at index (1, 3).*/

// Approach 1

function find2DMatrix(mat, target) {
  let n = mat.length;

  let m = mat[0].length;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (mat[i][j] === target) {
        return true;
      }
    }
  }

  return false;
}

const mat = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
  ],
  target = 8;

const result = find2DMatrix(mat, target);

module.exports = result;
