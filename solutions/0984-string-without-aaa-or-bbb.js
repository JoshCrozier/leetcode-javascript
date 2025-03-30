/**
 * 984. String Without AAA or BBB
 * https://leetcode.com/problems/string-without-aaa-or-bbb/
 * Difficulty: Medium
 *
 * Given two integers a and b, return any string s such that:
 * - s has length a + b and contains exactly a 'a' letters, and exactly b 'b' letters,
 * - The substring 'aaa' does not occur in s, and
 * - The substring 'bbb' does not occur in s.
 */

/**
 * @param {number} a
 * @param {number} b
 * @return {string}
 */
var strWithout3a3b = function(a, b) {
  let result = '';

  while (a > 0 || b > 0) {
    if (a > b && a > 0 && !result.endsWith('aa')) {
      result += 'a';
      a--;
    } else if (b > 0 && !result.endsWith('bb')) {
      result += 'b';
      b--;
    } else if (a > 0) {
      result += 'a';
      a--;
    } else {
      result += 'b';
      b--;
    }
  }

  return result;
};
