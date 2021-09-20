/**
 * 1880. Check if Word Equals Summation of Two Words
 * https://leetcode.com/problems/check-if-word-equals-summation-of-two-words/
 * Difficulty: Easy
 *
 * The letter value of a letter is its position in the alphabet starting from
 * 0 (i.e. 'a' -> 0, 'b' -> 1, 'c' -> 2, etc.).
 *
 * The numerical value of some string of lowercase English letters s is the
 * concatenation of the letter values of each letter in s, which is then
 * converted into an integer.
 *
 * For example, if s = "acb", we concatenate each letter's letter value,
 * resulting in "021". After converting it, we get 21.
 *
 * You are given three strings firstWord, secondWord, and targetWord, each
 * consisting of lowercase English letters 'a' through 'j' inclusive.
 *
 * Return true if the summation of the numerical values of firstWord and
 * secondWord equals the numerical value of targetWord, or false otherwise.
 */

/**
 * @param {string} firstWord
 * @param {string} secondWord
 * @param {string} targetWord
 * @return {boolean}
 */
var isSumEqual = function(firstWord, secondWord, targetWord) {
  const [a, b, c] = [firstWord, secondWord, targetWord]
    .map(str => +str.split('').map(v => v.charCodeAt() - 97).join(''));

  return a + b === c;
};
