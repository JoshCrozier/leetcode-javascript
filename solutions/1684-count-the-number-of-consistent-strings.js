/**
 * 1684. Count the Number of Consistent Strings
 * https://leetcode.com/problems/count-the-number-of-consistent-strings/
 * Difficulty: Easy
 *
 * You are given a string allowed consisting of distinct characters and an array of strings words.
 * A string is consistent if all characters in the string appear in the string allowed.
 *
 * Return the number of consistent strings in the array words.
 */

/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
  const allowedSet = new Set(allowed);
  let result = 0;

  for (const word of words) {
    let isConsistent = true;
    for (const char of word) {
      if (!allowedSet.has(char)) {
        isConsistent = false;
        break;
      }
    }
    if (isConsistent) result++;
  }

  return result;
};
