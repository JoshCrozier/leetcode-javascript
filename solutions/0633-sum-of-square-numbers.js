/**
 * 633. Sum of Square Numbers
 * https://leetcode.com/problems/sum-of-square-numbers/
 * Difficulty: Medium
 *
 * Given a non-negative integer c, decide whether there're two integers a and b such
 * that a2 + b2 = c.
 */

/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function(c) {
  for (let left = 0, right = Math.floor(Math.sqrt(c)); left <= right;) {
    const sum = left * left + right * right;
    if (sum === c) return true;
    if (sum < c) left++;
    else right--;
  }
  return false;
};
