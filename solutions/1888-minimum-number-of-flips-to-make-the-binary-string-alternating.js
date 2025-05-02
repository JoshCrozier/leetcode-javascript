/**
 * 1888. Minimum Number of Flips to Make the Binary String Alternating
 * https://leetcode.com/problems/minimum-number-of-flips-to-make-the-binary-string-alternating/
 * Difficulty: Medium
 *
 * You are given a binary string s. You are allowed to perform two types of operations on the
 * string in any sequence:
 * - Type-1: Remove the character at the start of the string s and append it to the end of
 *   the string.
 * - Type-2: Pick any character in s and flip its value, i.e., if its value is '0' it becomes
 *   '1' and vice-versa.
 *
 * Return the minimum number of type-2 operations you need to perform such that s becomes
 * alternating.
 *
 * The string is called alternating if no two adjacent characters are equal.
 *
 * For example, the strings "010" and "1010" are alternating, while the string "0100" is not.
 */

/**
 * @param {string} s
 * @return {number}
 */
var minFlips = function(s) {
  const n = s.length;
  let result = n;
  let flipsZeroStart = 0;
  let flipsOneStart = 0;

  for (let i = 0; i < n; i++) {
    if (s[i] !== (i % 2 === 0 ? '0' : '1')) flipsZeroStart++;
    if (s[i] !== (i % 2 === 0 ? '1' : '0')) flipsOneStart++;
  }

  result = Math.min(flipsZeroStart, flipsOneStart);

  for (let i = 0; i < n - 1; i++) {
    if (s[i] !== (i % 2 === 0 ? '0' : '1')) flipsZeroStart--;
    if (s[i] !== (i % 2 === 0 ? '1' : '0')) flipsOneStart--;
    if (s[i] !== ((n + i) % 2 === 0 ? '0' : '1')) flipsZeroStart++;
    if (s[i] !== ((n + i) % 2 === 0 ? '1' : '0')) flipsOneStart++;
    result = Math.min(result, flipsZeroStart, flipsOneStart);
  }

  return result;
};
