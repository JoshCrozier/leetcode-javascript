/**
 * 216. Combination Sum III
 * https://leetcode.com/problems/combination-sum-iii/
 * Difficulty: Medium
 *
 * Find all valid combinations of k numbers that sum up to n such that the following
 * conditions are true:
 * - Only numbers 1 through 9 are used.
 * - Each number is used at most once.
 *
 * Return a list of all possible valid combinations. The list must not contain the same
 * combination twice, and the combinations may be returned in any order.
 */

/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
  const result = [];

  function backtrack(history, sum, start) {
    if (sum > n) return;
    if (history.length === k && sum === n) {
      result.push(history);
      return;
    }
    for (let i = start; i < 10; i++) {
      backtrack([...history, i], sum + i, i + 1);
    }
  }

  backtrack([], 0, 1);

  return result;
};
