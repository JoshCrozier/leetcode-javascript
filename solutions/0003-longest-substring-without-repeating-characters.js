/**
 * 3. Longest Substring Without Repeating Characters
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/
 * Difficulty: Medium
 *
 * Given a string `s`, find the length of the longest substring without repeating characters.
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  const map = {};
  let offset = 0;

  return s.split('').reduce((max, value, i) => {
    offset = map[value] >= offset ? map[value] + 1 : offset;
    map[value] = i;
    return Math.max(max, i - offset + 1);
  }, 0);
};
