/**
 * 1981. Minimize the Difference Between Target and Chosen Elements
 * https://leetcode.com/problems/minimize-the-difference-between-target-and-chosen-elements/
 * Difficulty: Medium
 *
 * You are given an m x n integer matrix mat and an integer target.
 *
 * Choose one integer from each row in the matrix such that the absolute difference between
 * target and the sum of the chosen elements is minimized.
 *
 * Return the minimum absolute difference.
 *
 * The absolute difference between two numbers a and b is the absolute value of a - b.
 */

/**
 * @param {number[][]} mat
 * @param {number} target
 * @return {number}
 */
var minimizeTheDifference = function(mat, target) {
  const m = mat.length;
  const maxSum = 70 * m;
  let possibleSums = new Set([0]);

  for (const row of mat) {
    const nextSums = new Set();
    for (const num of row) {
      for (const sum of possibleSums) {
        const newSum = sum + num;
        if (newSum <= target + maxSum) {
          nextSums.add(newSum);
        }
      }
    }
    possibleSums = nextSums;
  }

  let result = Infinity;
  for (const sum of possibleSums) {
    result = Math.min(result, Math.abs(sum - target));
  }

  return result;
};
