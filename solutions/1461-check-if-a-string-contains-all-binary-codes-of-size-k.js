/**
 * 1461. Check If a String Contains All Binary Codes of Size K
 * https://leetcode.com/problems/check-if-a-string-contains-all-binary-codes-of-size-k/
 * Difficulty: Medium
 *
 * Given a binary string s and an integer k, return true if every binary code of length k is a
 * substring of s. Otherwise, return false.
 */

/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var hasAllCodes = function(s, k) {
  const requiredCount = 1 << k;
  const seenCodes = new Set();

  for (let i = 0; i <= s.length - k; i++) {
    seenCodes.add(s.slice(i, i + k));
    if (seenCodes.size === requiredCount) return true;
  }

  return false;
};
