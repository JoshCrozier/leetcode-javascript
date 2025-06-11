/**
 * 266. Palindrome Permutation
 * https://leetcode.com/problems/palindrome-permutation/
 * Difficulty: Easy
 *
 * Given a string s, return true if a permutation of the string could form a palindrome
 * and false otherwise.
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var canPermutePalindrome = function(s) {
  const map = new Map();

  for (const char of s) {
    map.set(char, (map.get(char) || 0) + 1);
  }

  let oddCount = 0;
  for (const count of map.values()) {
    if (count % 2 !== 0) oddCount++;
    if (oddCount > 1) return false;
  }

  return true;
};
