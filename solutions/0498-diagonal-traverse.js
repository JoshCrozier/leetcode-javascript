/**
 * 498. Diagonal Traverse
 * https://leetcode.com/problems/diagonal-traverse/
 * Difficulty: Medium
 *
 * Given an m x n matrix mat, return an array of all the elements of the array in a diagonal order.
 */

/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function(mat) {
  const result = new Array(mat.length * mat[0].length);

  for (let r = 0, c = 0, d = 1, i = 0; i < mat.length * mat[0].length;) {
    result[i++] = mat[r][c];

    if (d === 1) {
      if (c === mat[0].length - 1) {
        r++;
        d = -1;
      } else if (r === 0) {
        c++;
        d = -1;
      } else {
        r--;
        c++;
      }
    } else {
      if (r === mat.length - 1) {
        c++;
        d = 1;
      } else if (c === 0) {
        r++;
        d = 1;
      } else {
        r++;
        c--;
      }
    }
  }

  return result;
};
