/**
 * 2557. Maximum Number of Integers to Choose From a Range II
 * https://leetcode.com/problems/maximum-number-of-integers-to-choose-from-a-range-ii/
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
  const initialLimit = Math.min(n, Math.floor((-1 + Math.sqrt(1 + 8 * maxSum)) / 2));
  const bannedNumbers = new Set(banned);
  let totalSum = Math.floor(initialLimit * (initialLimit + 1) / 2);
  let result = initialLimit;

  for (const bannedNumber of bannedNumbers) {
    if (bannedNumber <= initialLimit) {
      totalSum -= bannedNumber;
      result -= 1;
    }
  }

  for (let candidate = initialLimit + 1; candidate <= n; candidate++) {
    if (totalSum + candidate > maxSum) {
      return result;
    }

    if (!bannedNumbers.has(candidate)) {
      totalSum += candidate;
      result += 1;
    }
  }

  return result;
};
