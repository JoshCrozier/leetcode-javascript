/**
 * 2311. Longest Binary Subsequence Less Than or Equal to K
 * https://leetcode.com/problems/longest-binary-subsequence-less-than-or-equal-to-k/
 * Difficulty: Medium
 *
 * You are given a binary string s and a positive integer k.
 *
 * Return the length of the longest subsequence of s that makes up a binary number less than
 * or equal to k.
 *
 * Note:
 * - The subsequence can contain leading zeroes.
 * - The empty string is considered to be equal to 0.
 * - A subsequence is a string that can be derived from another string by deleting some or no
 *   characters without changing the order of the remaining characters.
 */

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubsequence = function(s, k) {
  let zeros = 0;
  let ones = 0;
  let value = 0;
  let power = 1;

  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === '0') {
      zeros++;
    } else {
      if (power <= k && value + power <= k) {
        value += power;
        ones++;
      }
    }
    if (power <= k) {
      power *= 2;
    }
  }

  return zeros + ones;
};
