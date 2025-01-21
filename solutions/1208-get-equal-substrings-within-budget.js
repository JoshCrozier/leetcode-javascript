/**
 * 1208. Get Equal Substrings Within Budget
 * https://leetcode.com/problems/get-equal-substrings-within-budget/
 * Difficulty: Medium
 *
 * You are given two strings s and t of the same length and an integer maxCost.
 *
 * You want to change s to t. Changing the ith character of s to ith character of t costs
 * |s[i] - t[i]| (i.e., the absolute difference between the ASCII values of the characters).
 *
 * Return the maximum length of a substring of s that can be changed to be the same as the
 * corresponding substring of t with a cost less than or equal to maxCost. If there is no
 * substring from s that can be changed to its corresponding substring from t, return 0.
 */

/**
 * @param {string} s
 * @param {string} t
 * @param {number} maxCost
 * @return {number}
 */
var equalSubstring = function(s, t, maxCost) {
  let left = -1;

  for (let right = 0; right < s.length; right++) {
    maxCost -= Math.abs(s.charCodeAt(right) - t.charCodeAt(right));

    if (maxCost < 0) {
      left++;
      maxCost += Math.abs(s.charCodeAt(left) - t.charCodeAt(left));
    }
  }

  return s.length - left - 1;
};
