/**
 * 1392. Longest Happy Prefix
 * https://leetcode.com/problems/longest-happy-prefix/
 * Difficulty: Hard
 *
 * A string is called a happy prefix if is a non-empty prefix which is also a suffix
 * (excluding itself).
 *
 * Given a string s, return the longest happy prefix of s. Return an empty string ""
 * if no such prefix exists.
 */

/**
 * @param {string} s
 * @return {string}
 */
var longestPrefix = function(s) {
  let prefixLength = 0;
  const prefixHash = new Array(s.length).fill(0);

  for (let i = 1; i < s.length; i++) {
    while (prefixLength > 0 && s[i] !== s[prefixLength]) {
      prefixLength = prefixHash[prefixLength - 1];
    }
    if (s[i] === s[prefixLength]) {
      prefixLength++;
    }
    prefixHash[i] = prefixLength;
  }

  return s.slice(0, prefixHash[s.length - 1]);
};
