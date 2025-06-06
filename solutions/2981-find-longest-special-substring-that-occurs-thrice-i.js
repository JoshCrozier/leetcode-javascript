/**
 * 2981. Find Longest Special Substring That Occurs Thrice I
 * https://leetcode.com/problems/find-longest-special-substring-that-occurs-thrice-i/
 * Difficulty: Medium
 *
 * You are given a string s that consists of lowercase English letters.
 *
 * A string is called special if it is made up of only a single character. For example, the
 * string "abc" is not special, whereas the strings "ddd", "zz", and "f" are special.
 *
 * Return the length of the longest special substring of s which occurs at least thrice,
 * or -1 if no special substring occurs at least thrice.
 *
 * A substring is a contiguous non-empty sequence of characters within a string.
 */

/**
 * @param {string} s
 * @return {number}
 */
var maximumLength = function(s) {
  const map = new Map();
  let result = -1;

  for (let i = 0; i < s.length; i++) {
    for (let len = 1; len <= s.length - i; len++) {
      const substr = s.slice(i, i + len);
      if (substr.split('').every(c => c === substr[0])) {
        const count = (map.get(substr) || 0) + 1;
        map.set(substr, count);
        if (count >= 3) {
          result = Math.max(result, len);
        }
      }
    }
  }

  return result;
};
