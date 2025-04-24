/**
 * 1641. Count Sorted Vowel Strings
 * https://leetcode.com/problems/count-sorted-vowel-strings/
 * Difficulty: Medium
 *
 * Given an integer n, return the number of strings of length n that consist only of vowels
 * (a, e, i, o, u) and are lexicographically sorted.
 *
 * A string s is lexicographically sorted if for all valid i, s[i] is the same as or comes
 * before s[i+1] in the alphabet.
 */

/**
 * @param {number} n
 * @return {number}
 */
var countVowelStrings = function(n) {
  const vowelCounts = [1, 1, 1, 1, 1];

  for (let i = 1; i < n; i++) {
    for (let j = 3; j >= 0; j--) {
      vowelCounts[j] += vowelCounts[j + 1];
    }
  }

  return vowelCounts.reduce((sum, count) => sum + count, 0);
};
