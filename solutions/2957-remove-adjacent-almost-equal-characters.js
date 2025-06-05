/**
 * 2957. Remove Adjacent Almost-Equal Characters
 * https://leetcode.com/problems/remove-adjacent-almost-equal-characters/
 * Difficulty: Medium
 *
 * You are given a 0-indexed string word.
 *
 * In one operation, you can pick any index i of word and change word[i] to any lowercase
 * English letter.
 *
 * Return the minimum number of operations needed to remove all adjacent almost-equal
 * characters from word.
 *
 * Two characters a and b are almost-equal if a == b or a and b are adjacent in the alphabet.
 */

/**
 * @param {string} word
 * @return {number}
 */
var removeAlmostEqualCharacters = function(word) {
  let result = 0;

  for (let i = 1; i < word.length; i++) {
    if (Math.abs(word.charCodeAt(i) - word.charCodeAt(i - 1)) <= 1) {
      result++;
      i++;
    }
  }

  return result;
};
