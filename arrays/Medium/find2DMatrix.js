/*Input :mat = [ [1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12] ], target = 8
Output :True.
Explanation :The target = 8 exists in the 'mat' at index (1, 3).*/

// Approach 1

/*
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
*/

//Approach 2

class TwoDMatrix {
  binarySearch(mat, target) {
    let n = mat.length;

    let low = 0,
      high = n - 1;

    while (low <= high) {
      let mid = Math.floor((low + high) / 2);

      if (mat[mid] === target) {
        return true;
      } else if (target > mat[mid]) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }

    return false;
  }

  find2DMatrix(mat, target) {
    let n = mat.length;

    let m = mat[0].length;

    for (let i = 0; i < n; i++) {
      if (mat[i][0] <= target && target <= mat[i][m - 1]) {
        return this.binarySearch(mat[i], target);
      }
    }

    return false;
  }
}

const mat = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
  ],
  target = 88;

const result = new TwoDMatrix();

module.exports = result;
