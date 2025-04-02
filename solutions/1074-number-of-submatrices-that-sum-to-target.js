/**
 * 1074. Number of Submatrices That Sum to Target
 * https://leetcode.com/problems/number-of-submatrices-that-sum-to-target/
 * Difficulty: Hard
 *
 * Given a matrix and a target, return the number of non-empty submatrices that sum to target.
 *
 * A submatrix x1, y1, x2, y2 is the set of all cells matrix[x][y] with x1 <= x <= x2 and
 * y1 <= y <= y2.
 *
 * Two submatrices (x1, y1, x2, y2) and (x1', y1', x2', y2') are different if they have some
 * coordinate that is different: for example, if x1 != x1'.
 */

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {number}
 */
var numSubmatrixSumTarget = function(matrix, target) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  let result = 0;

  for (let i = 0; i < rows; i++) {
    const prefixSums = new Array(cols).fill(0);
    for (let j = i; j < rows; j++) {
      const sumFreq = new Map([[0, 1]]);
      let currentSum = 0;

      for (let k = 0; k < cols; k++) {
        prefixSums[k] += matrix[j][k];
        currentSum += prefixSums[k];
        result += sumFreq.get(currentSum - target) || 0;
        sumFreq.set(currentSum, (sumFreq.get(currentSum) || 0) + 1);
      }
    }
  }

  return result;
};
