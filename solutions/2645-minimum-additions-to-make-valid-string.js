/**
 * 2645. Minimum Additions to Make Valid String
 * https://leetcode.com/problems/minimum-additions-to-make-valid-string/
 * Difficulty: Medium
 *
 * Given a string word to which you can insert letters "a", "b" or "c" anywhere and any number
 * of times, return the minimum number of letters that must be inserted so that word becomes valid.
 *
 * A string is called valid if it can be formed by concatenating the string "abc" several times.
 */

/**
 * @param {string} word
 * @return {number}
 */
var addMinimum = function(word) {
  let result = 0;
  let index = 0;

  while (index < word.length) {
    if (word[index] === 'a') {
      if (word[index + 1] === 'b' && word[index + 2] === 'c') {
        index += 3;
      } else if (word[index + 1] === 'b') {
        result += 1;
        index += 2;
      } else if (word[index + 1] === 'c') {
        result += 1;
        index += 2;
      } else {
        result += 2;
        index += 1;
      }
    } else if (word[index] === 'b') {
      if (word[index + 1] === 'c') {
        result += 1;
        index += 2;
      } else {
        result += 2;
        index += 1;
      }
    } else {
      result += 2;
      index += 1;
    }
  }

  return result;
};
