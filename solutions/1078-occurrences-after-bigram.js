/**
 * 1078. Occurrences After Bigram
 * https://leetcode.com/problems/occurrences-after-bigram/
 * Difficulty: Easy
 *
 * Given two strings first and second, consider occurrences in some text of the form "first second
 * third", where second comes immediately after first, and third comes immediately after second.
 *
 * Return an array of all the words third for each occurrence of "first second third".
 */

/**
 * @param {string} text
 * @param {string} first
 * @param {string} second
 * @return {string[]}
 */
var findOcurrences = function(text, first, second) {
  const words = text.split(' ');
  const result = [];

  for (let i = 0; i < words.length - 2; i++) {
    if (words[i] === first && words[i + 1] === second) {
      result.push(words[i + 2]);
    }
  }

  return result;
};
