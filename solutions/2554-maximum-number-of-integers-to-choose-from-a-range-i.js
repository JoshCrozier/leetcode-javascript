/**
 * 2554. Maximum Number of Integers to Choose From a Range I
 * https://leetcode.com/problems/maximum-number-of-integers-to-choose-from-a-range-i/
 * Difficulty: Medium
 *
 * You are given an integer array banned and two integers n and maxSum. You are choosing some
 * number of integers following the below rules:
 * - The chosen integers have to be in the range [1, n].
 * - Each integer can be chosen at most once.
 * - The chosen integers should not be in the array banned.
 * - The sum of the chosen integers should not exceed maxSum.
 *
 * Return the maximum number of integers you can choose following the mentioned rules.
 */

/**
 * @param {number[]} banned
 * @param {number} n
 * @param {number} maxSum
 * @return {number}
 */
var maxCount = function(banned, n, maxSum) {
  const set = new Set(banned);
  let result = 0;
  let currentSum = 0;

  for (let num = 1; num <= n; num++) {
    if (!set.has(num) && currentSum + num <= maxSum) {
      result++;
      currentSum += num;
    }
  }

  return result;
};
