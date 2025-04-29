/**
 * 1763. Longest Nice Substring
 * https://leetcode.com/problems/longest-nice-substring/
 * Difficulty: Easy
 *
 * A string s is nice if, for every letter of the alphabet that s contains, it appears both
 * in uppercase and lowercase. For example, "abABB" is nice because 'A' and 'a' appear,
 * and 'B' and 'b' appear. However, "abA" is not because 'b' appears, but 'B' does not.
 *
 * Given a string s, return the longest substring of s that is nice. If there are multiple,
 * return the substring of the earliest occurrence. If there are none, return an empty string.
 */

/**
 * @param {string} s
 * @return {string}
 */
var longestNiceSubstring = function(s) {
  let longest = '';

  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
      const substr = s.slice(i, j + 1);
      if (substr.length <= longest.length) continue;
      const chars = new Set(substr.toLowerCase().split(''));
      let isNice = true;
      for (const char of chars) {
        if (!substr.includes(char.toLowerCase()) || !substr.includes(char.toUpperCase())) {
          isNice = false;
          break;
        }
      }
      if (isNice) longest = substr;
    }
  }

  return longest;
};
