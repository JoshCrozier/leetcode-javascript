/**
 * 520. Detect Capital
 * https://leetcode.com/problems/detect-capital/
 * Difficulty: Easy
 *
 * We define the usage of capitals in a word to be right when one of the following
 * cases holds:
 * - All letters in this word are capitals, like "USA".
 * - All letters in this word are not capitals, like "leetcode".
 * - Only the first letter in this word is capital, like "Google".
 *
 * Given a string word, return true if the usage of capitals in it is right.
 */

/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
  return /^[A-Z]?[a-z]+$|^[A-Z]+$/.test(word);
};
