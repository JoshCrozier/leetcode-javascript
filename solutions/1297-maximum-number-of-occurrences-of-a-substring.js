/**
 * 1297. Maximum Number of Occurrences of a Substring
 * https://leetcode.com/problems/maximum-number-of-occurrences-of-a-substring/
 * Difficulty: Medium
 *
 * Given a string s, return the maximum number of ocurrences of
 * any substring under the following rules:
 *
 * - The number of unique characters in the substring must be less
 *   than or equal to maxLetters.
 * - The substring size must be between minSize and maxSize inclusive.
 */

/**
 * @param {string} s
 * @param {number} maxLetters
 * @param {number} minSize
 * @param {number} maxSize
 * @return {number}
 */
var maxFreq = function(s, maxLetters, minSize, maxSize) {
  const occurrences = new Map();

  for (let i = 0; i <= s.length - minSize; i++) {
    const string = s.substr(i, minSize);
    if (new Set(string.split('')).size <= maxLetters) {
      occurrences.set(string, occurrences.has(string) ? occurrences.get(string) + 1 : 1);
    }
  }

  return (Array.from(occurrences).sort((a, b) => b[1] - a[1])[0] || [])[1] || 0;
};
