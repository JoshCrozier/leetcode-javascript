/**
 * 2002. Maximum Product of the Length of Two Palindromic Subsequences
 * https://leetcode.com/problems/maximum-product-of-the-length-of-two-palindromic-subsequences/
 * Difficulty: Medium
 *
 * Given a string s, find two disjoint palindromic subsequences of s such that the product of their
 * lengths is maximized. The two subsequences are disjoint if they do not both pick a character at
 * the same index.
 *
 * Return the maximum possible product of the lengths of the two palindromic subsequences.
 *
 * A subsequence is a string that can be derived from another string by deleting some or no
 * characters without changing the order of the remaining characters. A string is palindromic
 * if it reads the same forward and backward.
 */

/**
 * @param {string} s
 * @return {number}
 */
var maxProduct = function(s) {
  const n = s.length;
  let result = 0;

  for (let mask1 = 1; mask1 < (1 << n); mask1++) {
    for (let mask2 = 1; mask2 < (1 << n); mask2++) {
      if (mask1 & mask2) continue;
      const len1 = isPalindrome(s, mask1);
      if (len1 === 0) continue;
      const len2 = isPalindrome(s, mask2);
      if (len2 === 0) continue;
      result = Math.max(result, len1 * len2);
    }
  }

  return result;

  function isPalindrome(str, mask) {
    const chars = [];
    for (let i = 0; i < n; i++) {
      if (mask & (1 << i)) chars.push(str[i]);
    }
    let left = 0;
    let right = chars.length - 1;
    while (left < right) {
      if (chars[left++] !== chars[right--]) return 0;
    }
    return chars.length;
  }
};
