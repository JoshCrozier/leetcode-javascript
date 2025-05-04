/**
 * 1960. Maximum Product of the Length of Two Palindromic Substrings
 * https://leetcode.com/problems/maximum-product-of-the-length-of-two-palindromic-substrings/
 * Difficulty: Hard
 *
 * You are given a 0-indexed string s and are tasked with finding two non-intersecting palindromic
 * substrings of odd length such that the product of their lengths is maximized.
 *
 * More formally, you want to choose four integers i, j, k, l such that
 * 0 <= i <= j < k <= l < s.length and both the substrings s[i...j] and s[k...l] are palindromes
 * and have odd lengths. s[i...j] denotes a substring from index i to index j inclusive.
 *
 * Return the maximum possible product of the lengths of the two non-intersecting palindromic
 * substrings.
 *
 * A palindrome is a string that is the same forward and backward. A substring is a contiguous
 * sequence of characters in a string.
 */

/**
* @param {string} s
* @return {number}
*/
var maxProduct = function(s) {
  const n = s.length;
  const before = new Array(n).fill(0);
  const after = new Array(n).fill(0);

  let center = -1;
  let right = -1;
  const dp = new Array(n).fill(0);

  for (let i = 0; i < n; i++) {
    const radius = i <= right ? Math.min(dp[2 * center - i], right - i) : 0;
    let left = i - radius;
    let rt = i + radius;

    while (left >= 0 && rt < n && s[left] === s[rt]) {
      before[rt] = Math.max(before[rt], rt - left + 1);
      after[left] = Math.max(after[left], rt - left + 1);
      left--;
      rt++;
    }

    dp[i] = rt - i - 1;

    if (rt - 1 > right) {
      center = i;
      right = rt - 1;
    }
  }

  for (let i = 1; i < n; i++) {
    before[i] = Math.max(before[i - 1], before[i]);
  }

  for (let i = n - 2; i >= 0; i--) {
    after[i] = Math.max(after[i + 1], after[i]);
  }

  let result = 0;
  for (let i = 1; i < n; i++) {
    result = Math.max(result, before[i - 1] * after[i]);
  }

  return result;
};
