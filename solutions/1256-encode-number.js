/**
 * 1256. Encode Number
 * https://leetcode.com/problems/encode-number/
 * Difficulty: Medium
 *
 * Given a non-negative integer num, Return its encoding string.
 *
 * The encoding is done by converting the integer to a string using a secret function that
 * you should deduce from the following table:
 */

/**
 * @param {number} num
 * @return {string}
 */
var encode = function(num) {
  return (num + 1).toString(2).slice(1);
};
