/**
 * 1758. Minimum Changes To Make Alternating Binary String
 * https://leetcode.com/problems/minimum-changes-to-make-alternating-binary-string/
 * Difficulty: Easy
 *
 * You are given a string s consisting only of the characters '0' and '1'. In one operation, you can
 * change any '0' to '1' or vice versa.
 *
 * The string is called alternating if no two adjacent characters are equal. For example, the string
 * "010" is alternating, while the string "0100" is not.
 *
 * Return the minimum number of operations needed to make s alternating.
 */

/**
 * @param {string} s
 * @return {number}
 */
var minOperations = function(s) {
  let changesToZeroStart = 0;
  let changesToOneStart = 0;

  for (let i = 0; i < s.length; i++) {
    const expectedZeroStart = i % 2 === 0 ? '0' : '1';
    const expectedOneStart = i % 2 === 0 ? '1' : '0';
    if (s[i] !== expectedZeroStart) changesToZeroStart++;
    if (s[i] !== expectedOneStart) changesToOneStart++;
  }

  return Math.min(changesToZeroStart, changesToOneStart);
};
