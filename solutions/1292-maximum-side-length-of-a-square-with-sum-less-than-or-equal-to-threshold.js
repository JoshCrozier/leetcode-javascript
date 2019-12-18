/**
 * 1292. Maximum Side Length of a Square with Sum Less than or Equal to Threshold
 * https://leetcode.com/problems/maximum-side-length-of-a-square-with-sum-less-than-or-equal-to-threshold/
 * Difficulty: Medium
 *
 * Given a `m x n` matrix `mat` and an integer `threshold`.
 * Return the maximum side-length of a square with a sum less than or equal to `threshold` or return 0 if there is no such square.
 */

/**
 * @param {number[][]} mat
 * @param {number} threshold
 * @return {number}
 */
var maxSideLength = function(mat, threshold) {
  let max = 0;

  loop1: for (let i = 0; i < mat[0].length; i++) {
    loop2: for (let j = 0; j < mat.length; j++) {
      if (!mat[j + 1] || !mat[j][i + 1]) { break loop2; }
      loop3: for (let s = 1; s < 1000; s++) {
        if (!mat[j + s] || !mat[j][i + s] || getSquareSum(mat, i, j, s + 1) > threshold) { break loop3; }
        max = Math.max(s + 1, max);
      }
    }
  }

  return max;
};

function getSquareSum(mat, i, j, size) {
  let sum = 0;
  for (let s = 0; s < size; s++) {
    mat[j + s].slice(i, i + size).forEach(v => sum += v);
  }
  return sum;
}
