/**
 * 660. Remove 9
 * https://leetcode.com/problems/remove-9/
 * Difficulty: Hard
 *
 * Start from integer 1, remove any integer that contains 9 such as 9, 19, 29...
 *
 * Now, you will have a new integer sequence [1, 2, 3, 4, 5, 6, 7, 8, 10, 11, ...].
 *
 * Given an integer n, return the nth (1-indexed) integer in the new sequence.
 */

/**
 * @param {number} n
 * @return {number}
 */
var newInteger = function(n) {
  let result = 0;
  let base = 1;

  while (n > 0) {
    result += (n % 9) * base;
    n = Math.floor(n / 9);
    base *= 10;
  }

  return result;
};
