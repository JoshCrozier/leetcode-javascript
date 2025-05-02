/**
 * 1876. Substrings of Size Three with Distinct Characters
 * https://leetcode.com/problems/substrings-of-size-three-with-distinct-characters/
 * Difficulty: Easy
 *
 * A string is good if there are no repeated characters.
 *
 * Given a string s, return the number of good substrings of length three in s.
 *
 * Note that if there are multiple occurrences of the same substring, every occurrence should
 * be counted.
 *
 * A substring is a contiguous sequence of characters in a string.
 */

/**
 * @param {string} s
 * @return {number}
 */
var countGoodSubstrings = function(s) {
  if (s.length < 3) return 0;

  let result = 0;
  const charCount = new Map();

  for (let i = 0; i < 3; i++) {
    charCount.set(s[i], (charCount.get(s[i]) || 0) + 1);
  }
  if (charCount.size === 3) result++;

  for (let i = 3; i < s.length; i++) {
    const oldChar = s[i - 3];
    charCount.set(oldChar, charCount.get(oldChar) - 1);
    if (charCount.get(oldChar) === 0) charCount.delete(oldChar);

    charCount.set(s[i], (charCount.get(s[i]) || 0) + 1);
    if (charCount.size === 3) result++;
  }

  return result;
};
