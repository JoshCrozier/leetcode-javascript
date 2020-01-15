/**
 * 1309. Decrypt String from Alphabet to Integer Mapping
 * https://leetcode.com/problems/decrypt-string-from-alphabet-to-integer-mapping/
 * Difficulty: Easy
 *
 * Given a string s formed by digits ('0' - '9') and '#' .
 * We want to map s to English lowercase characters as follows:
 *
 * - Characters ('a' to 'i') are represented by ('1' to '9') respectively.
 * - Characters ('j' to 'z') are represented by ('10#' to '26#') respectively.
 *
 * Return the string formed after mapping.
 *
 * It's guaranteed that a unique mapping will always exist.
 */

/**
 * @param {string} s
 * @return {string}
 */
var freqAlphabets = function(s) {
  return s.replace(/\d{2}#|\d/g, match => {
    return String.fromCharCode('a'.charCodeAt() + parseInt(match, 10) - 1);
  });
};
