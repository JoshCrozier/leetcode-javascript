/**
 * 409. Longest Palindrome
 * https://leetcode.com/problems/longest-palindrome/
 * Difficulty: Easy
 *
 * Given a string s which consists of lowercase or uppercase letters, return the length
 * of the longest palindrome that can be built with those letters.
 *
 * Letters are case sensitive, for example, "Aa" is not considered a palindrome.
 */

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
  const set = new Set();
  return [...s].reduce((count, c) => {
    return set.delete(c) ? count + 2 : (set.add(c), count);
  }, 0) + (set.size > 0 ? 1 : 0);
};
