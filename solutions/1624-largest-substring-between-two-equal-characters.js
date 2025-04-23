/**
 * 1624. Largest Substring Between Two Equal Characters
 * https://leetcode.com/problems/largest-substring-between-two-equal-characters/
 * Difficulty: Easy
 *
 * Given a string s, return the length of the longest substring between two equal characters,
 * excluding the two characters. If there is no such substring return -1.
 *
 * A substring is a contiguous sequence of characters within a string.
 */

/**
 * @param {string} s
 * @return {number}
 */
var maxLengthBetweenEqualCharacters = function(s) {
  const charFirstIndex = new Map();
  let maxLength = -1;

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (charFirstIndex.has(char)) {
      maxLength = Math.max(maxLength, i - charFirstIndex.get(char) - 1);
    } else {
      charFirstIndex.set(char, i);
    }
  }

  return maxLength;
};
