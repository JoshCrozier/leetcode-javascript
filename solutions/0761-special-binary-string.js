/**
 * 761. Special Binary String
 * https://leetcode.com/problems/special-binary-string/
 * Difficulty: Hard
 *
 * Special binary strings are binary strings with the following two properties:
 * - The number of 0's is equal to the number of 1's.
 * - Every prefix of the binary string has at least as many 1's as 0's.
 *
 * You are given a special binary string s.
 *
 * A move consists of choosing two consecutive, non-empty, special substrings of s,
 * and swapping them. Two strings are consecutive if the last character of the first
 * string is exactly one index before the first character of the second string.
 *
 * Return the lexicographically largest resulting string possible after applying
 * the mentioned operations on the string.
 */

/**
 * @param {string} s
 * @return {string}
 */
function makeLargestSpecial(s) {
  if (s.length <= 2) return s;

  let count = 0;
  let start = 0;
  const specials = [];

  for (let i = 0; i < s.length; i++) {
    count += s[i] === '1' ? 1 : -1;

    if (count === 0) {
      specials.push('1' + makeLargestSpecial(s.slice(start + 1, i)) + '0');
      start = i + 1;
    }
  }

  return specials.sort().reverse().join('');
}
