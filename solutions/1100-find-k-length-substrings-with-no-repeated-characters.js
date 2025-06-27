/**
 * 1100. Find K-Length Substrings With No Repeated Characters
 * https://leetcode.com/problems/find-k-length-substrings-with-no-repeated-characters/
 * Difficulty: Medium
 *
 * Given a string s and an integer k, return the number of substrings in s of length k
 * with no repeated characters.
 */

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var numKLenSubstrNoRepeats = function(s, k) {
  if (k > s.length) return 0;

  const charCount = new Map();
  let count = 0;

  for (let i = 0; i < k; i++) {
    charCount.set(s[i], (charCount.get(s[i]) || 0) + 1);
  }

  if (charCount.size === k) count++;

  for (let i = k; i < s.length; i++) {
    const leftChar = s[i - k];
    const rightChar = s[i];

    charCount.set(leftChar, charCount.get(leftChar) - 1);
    if (charCount.get(leftChar) === 0) {
      charCount.delete(leftChar);
    }

    charCount.set(rightChar, (charCount.get(rightChar) || 0) + 1);

    if (charCount.size === k) count++;
  }

  return count;
};
