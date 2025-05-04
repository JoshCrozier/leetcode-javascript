/**
 * 1975. Maximum Matrix Sum
 * https://leetcode.com/problems/maximum-matrix-sum/
 * Difficulty: Medium
 *
 * You are given an n x n integer matrix. You can do the following operation any number of times:
 * - Choose any two adjacent elements of matrix and multiply each of them by -1.
 *
 * Two elements are considered adjacent if and only if they share a border.
 *
 * Your goal is to maximize the summation of the matrix's elements. Return the maximum sum of the
 * matrix's elements using the operation mentioned above.
 */

/**
 * @param {number[][]} matrix
 * @return {number}
 */
var maxMatrixSum = function(matrix) {
  let totalSum = 0;
  let negativeCount = 0;
  let minAbs = Infinity;

  for (const row of matrix) {
    for (const num of row) {
      totalSum += Math.abs(num);
      if (num < 0) negativeCount++;
      minAbs = Math.min(minAbs, Math.abs(num));
    }
  }

  return negativeCount % 2 === 0 ? totalSum : totalSum - 2 * minAbs;
};
