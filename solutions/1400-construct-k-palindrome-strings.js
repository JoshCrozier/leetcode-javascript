/**
 * 1400. Construct K Palindrome Strings
 * https://leetcode.com/problems/construct-k-palindrome-strings/
 * Difficulty: Medium
 *
 * Given a string s and an integer k, return true if you can use all the characters in s to
 * construct k palindrome strings or false otherwise.
 */

/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var canConstruct = function(s, k) {
  const occurrences = new Array(26).fill(0);
  s.split('').forEach(c => occurrences[c.charCodeAt(0) - 'a'.charCodeAt(0)]++);

  const oddCount = occurrences.filter(n => n % 2 !== 0).length;
  return k <= s.length && oddCount <= k;
};
