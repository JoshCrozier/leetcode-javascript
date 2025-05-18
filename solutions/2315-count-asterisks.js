/**
 * 2315. Count Asterisks
 * https://leetcode.com/problems/count-asterisks/
 * Difficulty: Easy
 *
 * You are given a string s, where every two consecutive vertical bars '|' are grouped into
 * a pair. In other words, the 1st and 2nd '|' make a pair, the 3rd and 4th '|' make a pair,
 * and so forth.
 *
 * Return the number of '*' in s, excluding the '*' between each pair of '|'.
 *
 * Note that each '|' will belong to exactly one pair.
 */

/**
 * @param {string} s
 * @return {number}
 */
var countAsterisks = function(s) {
  let isInsidePair = false;
  let result = 0;

  for (const char of s) {
    if (char === '|') {
      isInsidePair = !isInsidePair;
    } else if (char === '*' && !isInsidePair) {
      result++;
    }
  }

  return result;
};
