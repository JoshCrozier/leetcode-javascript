/**
 * 2606. Find the Substring With Maximum Cost
 * https://leetcode.com/problems/find-the-substring-with-maximum-cost/
 * Difficulty: Medium
 *
 * You are given a string s, a string chars of distinct characters and an integer array vals of
 * the same length as chars.
 *
 * The cost of the substring is the sum of the values of each character in the substring. The
 * cost of an empty string is considered 0.
 *
 * The value of the character is defined in the following way:
 * - If the character is not in the string chars, then its value is its corresponding position
 *   (1-indexed) in the alphabet.
 *   - For example, the value of 'a' is 1, the value of 'b' is 2, and so on. The value of 'z' is 26.
 * - Otherwise, assuming i is the index where the character occurs in the string chars, then its
 *   value is vals[i].
 *
 * Return the maximum cost among all substrings of the string s.
 */

/**
 * @param {string} s
 * @param {string} chars
 * @param {number[]} vals
 * @return {number}
 */
var maximumCostSubstring = function(s, chars, vals) {
  const charValues = new Array(26).fill().map((_, i) => i + 1);
  for (let i = 0; i < chars.length; i++) {
    charValues[chars.charCodeAt(i) - 97] = vals[i];
  }

  let result = 0;
  let currentCost = 0;
  for (const char of s) {
    currentCost = Math.max(0, currentCost + charValues[char.charCodeAt(0) - 97]);
    result = Math.max(result, currentCost);
  }

  return result;
};
