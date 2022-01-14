/**
 * 77. Combinations
 * https://leetcode.com/problems/combinations/
 * Difficulty: Medium
 *
 * Given two integers n and k, return all possible combinations of k numbers
 * out of the range [1, n].
 *
 * You may return the answer in any order.
 */

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
  const result = [];
  backtrack(result, n, k);
  return result;
};

function backtrack(result, n, k, combination = [], offset = 1) {
  if (combination.length === k) {
    result.push(combination);
  } else {
    while (offset <= n) {
      backtrack(result, n, k, [...combination, offset], ++offset);
    }
  }
}
