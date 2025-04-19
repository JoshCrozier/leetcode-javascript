/**
 * 1556. Thousand Separator
 * https://leetcode.com/problems/thousand-separator/
 * Difficulty: Easy
 *
 * Given an integer n, add a dot (".") as the thousands separator and return it in string format.
 */

/**
 * @param {number} n
 * @return {string}
 */
var thousandSeparator = function(n) {
  const digits = n.toString().split('');
  const result = [];

  while (digits.length > 0) {
    const group = digits.splice(-3).join('');
    result.unshift(group);
    if (digits.length > 0) {
      result.unshift('.');
    }
  }

  return result.join('');
};
