/**
 * 1304. Find N Unique Integers Sum up to Zero
 * https://leetcode.com/problems/find-n-unique-integers-sum-up-to-zero/
 * Difficulty: Easy
 *
 * Given an integer n, return any array containing
 * n unique integers such that they add up to 0.
 */

/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function(n) {
  const result = n % 2 !== 0 ? [0] : [];
  while (result.length < n) {
    result.push(result.length + 1, (result.length + 1) * -1);
  }
  return result;
};
