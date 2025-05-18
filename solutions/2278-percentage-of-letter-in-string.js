/**
 * 2278. Percentage of Letter in String
 * https://leetcode.com/problems/percentage-of-letter-in-string/
 * Difficulty: Easy
 *
 * Given a string s and a character letter, return the percentage of characters in s that equal
 * letter rounded down to the nearest whole percent.
 */

/**
 * @param {string} s
 * @param {character} letter
 * @return {number}
 */
var percentageLetter = function(s, letter) {
  return Math.floor((s.split('').filter(char => char === letter).length / s.length) * 100);
};
