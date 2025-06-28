/**
 * 1180. Count Substrings with Only One Distinct Letter
 * https://leetcode.com/problems/count-substrings-with-only-one-distinct-letter/
 * Difficulty: Easy
 *
 * Given a string s, return the number of substrings that have only one distinct letter.
 */

/**
 * @param {string} s
 * @return {number}
 */
var countLetters = function(s) {
  let result = 0;
  let consecutiveCount = 1;

  for (let i = 1; i < s.length; i++) {
    if (s[i] === s[i - 1]) {
      consecutiveCount++;
    } else {
      result += (consecutiveCount * (consecutiveCount + 1)) / 2;
      consecutiveCount = 1;
    }
  }

  result += (consecutiveCount * (consecutiveCount + 1)) / 2;

  return result;
};
