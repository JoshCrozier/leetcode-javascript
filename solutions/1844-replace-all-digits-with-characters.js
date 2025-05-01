/**
 * 1844. Replace All Digits with Characters
 * https://leetcode.com/problems/replace-all-digits-with-characters/
 * Difficulty: Easy
 *
 * You are given a 0-indexed string s that has lowercase English letters in its even indices and
 * digits in its odd indices.
 *
 * You must perform an operation shift(c, x), where c is a character and x is a digit, that returns
 * the xth character after c.
 * - For example, shift('a', 5) = 'f' and shift('x', 0) = 'x'.
 *
 * For every odd index i, you want to replace the digit s[i] with the result of the
 * shift(s[i-1], s[i]) operation.
 *
 * Return s after replacing all digits. It is guaranteed that shift(s[i-1], s[i]) will never
 * exceed 'z'.
 *
 * Note that shift(c, x) is not a preloaded function, but an operation to be implemented as part
 * of the solution.
 */

/**
 * @param {string} s
 * @return {string}
 */
var replaceDigits = function(s) {
  const result = s.split('');

  for (let i = 1; i < s.length; i += 2) {
    result[i] = shiftChar(s[i - 1], s[i]);
  }

  return result.join('');

  function shiftChar(char, shift) {
    return String.fromCharCode(char.charCodeAt(0) + parseInt(shift));
  }
};
