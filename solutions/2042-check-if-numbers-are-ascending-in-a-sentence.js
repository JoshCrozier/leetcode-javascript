/**
 * 2042. Check if Numbers Are Ascending in a Sentence
 * https://leetcode.com/problems/check-if-numbers-are-ascending-in-a-sentence/
 * Difficulty: Easy
 *
 * A sentence is a list of tokens separated by a single space with no leading or trailing spaces.
 * Every token is either a positive number consisting of digits 0-9 with no leading zeros, or a
 * word consisting of lowercase English letters.
 * - For example, "a puppy has 2 eyes 4 legs" is a sentence with seven tokens: "2" and "4" are
 *   numbers and the other tokens such as "puppy" are words.
 *
 * Given a string s representing a sentence, you need to check if all the numbers in s are strictly
 * increasing from left to right (i.e., other than the last number, each number is strictly smaller
 * than the number on its right in s).
 *
 * Return true if so, or false otherwise.
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var areNumbersAscending = function(s) {
  const numbers = s.split(' ').filter(token => !isNaN(token)).map(Number);
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] <= numbers[i - 1]) return false;
  }
  return true;
};
