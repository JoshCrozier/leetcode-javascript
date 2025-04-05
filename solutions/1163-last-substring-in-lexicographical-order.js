/**
 * 1163. Last Substring in Lexicographical Order
 * https://leetcode.com/problems/last-substring-in-lexicographical-order/
 * Difficulty: Hard
 *
 * Given a string s, return the last substring of s in lexicographical order.
 */

/**
 * @param {string} s
 * @return {string}
 */
var lastSubstring = function(s) {
  let i = 0;
  let j = 1;
  let k = 0;
  const n = s.length;

  while (j + k < n) {
    if (s[i + k] === s[j + k]) {
      k++;
    } else if (s[i + k] < s[j + k]) {
      i = Math.max(i + k + 1, j);
      j = i + 1;
      k = 0;
    } else {
      j += k + 1;
      k = 0;
    }
  }

  return s.substring(i);
};
