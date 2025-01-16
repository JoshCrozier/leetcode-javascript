/**
 * 482. License Key Formatting
 * https://leetcode.com/problems/license-key-formatting/
 * Difficulty: Easy
 *
 * You are given a license key represented as a string s that consists of only alphanumeric
 * characters and dashes. The string is separated into n + 1 groups by n dashes. You are
 * also given an integer k.
 *
 * We want to reformat the string s such that each group contains exactly k characters,
 * except for the first group, which could be shorter than k but still must contain at
 * least one character. Furthermore, there must be a dash inserted between two groups,
 * and you should convert all lowercase letters to uppercase.
 *
 * Return the reformatted license key.
 */

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var licenseKeyFormatting = function(s, k) {
  const result = [];
  s = s.toUpperCase().replace(/\-+/g, '');
  if (s.length % k) {
    result.push(s.substring(0, s.length % k));
  }
  for (let i = s.length % k; i < s.length; i += k) {
    result.push(s.substring(i, i + k));
  }
  return result.join('-');
};
