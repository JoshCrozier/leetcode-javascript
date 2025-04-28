/**
 * 1738. Find Kth Largest XOR Coordinate Value
 * https://leetcode.com/problems/find-kth-largest-xor-coordinate-value/
 * Difficulty: Medium
 *
 * You are given a 2D matrix of size m x n, consisting of non-negative integers. You are also
 * given an integer k.
 *
 * The value of coordinate (a, b) of the matrix is the XOR of all matrix[i][j] where
 * 0 <= i <= a < m and 0 <= j <= b < n (0-indexed).
 *
 * Find the kth largest value (1-indexed) of all the coordinates of matrix.
 */

/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthLargestValue = function(matrix, k) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const xorValues = new Array(rows * cols);
  const prefixXor = Array.from({ length: rows + 1 }, () => Array(cols + 1).fill(0));

  let index = 0;
  for (let i = 1; i <= rows; i++) {
    for (let j = 1; j <= cols; j++) {
      prefixXor[i][j] = prefixXor[i-1][j] ^ prefixXor[i][j-1]
        ^ prefixXor[i-1][j-1] ^ matrix[i-1][j-1];
      xorValues[index++] = prefixXor[i][j];
    }
  }

  xorValues.sort((a, b) => b - a);
  return xorValues[k-1];
};
