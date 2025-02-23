/**
 * 386. Lexicographical Numbers
 * https://leetcode.com/problems/lexicographical-numbers/
 * Difficulty: Medium
 *
 * Given an integer n, return all the numbers in the range [1, n] sorted in lexicographical order.
 *
 * You must write an algorithm that runs in O(n) time.
 */

/**
 * @param {number} n
 * @return {number[]}
 */
var lexicalOrder = function(n) {
  const result = [];
  let value = 1;

  for (let i = 0; i < n; i++) {
    result.push(value);
    if (value * 10 <= n) {
      value *= 10;
    } else {
      while (value % 10 === 9 || value >= n) {
        value = Math.floor(value / 10);
      }
      value++;
    }
  }

  return result;
};
