/**
 * 363. Max Sum of Rectangle No Larger Than K
 * https://leetcode.com/problems/max-sum-of-rectangle-no-larger-than-k/
 * Difficulty: Hard
 *
 * Given an m x n matrix matrix and an integer k, return the max sum of a rectangle in the
 * matrix such that its sum is no larger than k.
 *
 * It is guaranteed that there will be a rectangle with a sum no larger than k.
 */

/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var maxSumSubmatrix = function(matrix, k) {
  let max = -Infinity;

  for (let l = 0; l < matrix[0].length; l++) {
    const counts = new Array(matrix.length).fill(0);
    for (let r = l; r < matrix[0].length; r++) {
      for (let i = 0; i < matrix.length; i++) counts[i] += matrix[i][r];
      const set = new Set([0]);
      let sum = 0;
      let value = -Infinity;
      for (const num of counts) {
        sum += num;
        for (const previous of set) {
          if (sum - previous <= k) {
            value = Math.max(value, sum - previous);
          }
        }
        set.add(sum);
      }
      max = Math.max(max, value);
    }
  }

  return max;
};
