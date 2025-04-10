/**
 * 1314. Matrix Block Sum
 * https://leetcode.com/problems/matrix-block-sum/
 * Difficulty: Medium
 *
 * Given a m x n matrix mat and an integer k, return a matrix answer where each answer[i][j]
 * is the sum of all elements mat[r][c] for:
 * - i - k <= r <= i + k,
 * - j - k <= c <= j + k, and
 * - (r, c) is a valid position in the matrix.
 */

/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[][]}
 */
var matrixBlockSum = function(mat, k) {
  const rows = mat.length;
  const cols = mat[0].length;
  const prefixSums = new Array(rows + 1).fill().map(() => new Array(cols + 1).fill(0));

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      prefixSums[i + 1][j + 1] = prefixSums[i + 1][j]
        + prefixSums[i][j + 1] - prefixSums[i][j] + mat[i][j];
    }
  }

  const result = new Array(rows).fill().map(() => new Array(cols).fill(0));

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const top = Math.max(0, i - k);
      const bottom = Math.min(rows - 1, i + k);
      const left = Math.max(0, j - k);
      const right = Math.min(cols - 1, j + k);

      result[i][j] = prefixSums[bottom + 1][right + 1]
        - prefixSums[bottom + 1][left] - prefixSums[top][right + 1] + prefixSums[top][left];
    }
  }

  return result;
};
