/**
 * 159. Longest Substring with At Most Two Distinct Characters
 * https://leetcode.com/problems/longest-substring-with-at-most-two-distinct-characters/
 * Difficulty: Medium
 *
 * Given a string s, return the length of the longest substring that contains at most two
 * distinct characters.
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstringTwoDistinct = function(s) {
  const map = new Map();
  let maxLength = 0;
  let start = 0;

  for (let end = 0; end < s.length; end++) {
    map.set(s[end], (map.get(s[end]) || 0) + 1);

    while (map.size > 2) {
      map.set(s[start], map.get(s[start]) - 1);
      if (map.get(s[start]) === 0) {
        map.delete(s[start]);
      }
      start++;
    }

    maxLength = Math.max(maxLength, end - start + 1);
  }

  return maxLength;
};
