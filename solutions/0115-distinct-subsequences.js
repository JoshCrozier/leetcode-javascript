/**
 * 115. Distinct Subsequences
 * https://leetcode.com/problems/distinct-subsequences/
 * Difficulty: Hard
 *
 * Given two strings s and t, return the number of distinct subsequences of s which equals t.
 *
 * The test cases are generated so that the answer fits on a 32-bit signed integer.
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function(s, t) {
  const nums = new Array(t.length + 1).fill(0);
  nums[0] = 1;

  for (let i = 0; i < s.length; i++) {
    for (let j = nums.length - 1; j >= 0; j--) {
      if (s[i] === t[j]) {
        nums[j + 1] += nums[j];
      }
    }
  }

  return nums[t.length];
};
